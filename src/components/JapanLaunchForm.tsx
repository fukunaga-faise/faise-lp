'use client'

import { useState } from 'react'
import { ArrowRight, CheckCircle, Loader2 } from 'lucide-react'
import { form as f } from '@/lib/japan-launch'
import type { Lang } from '@/lib/locale'

// Japan Launch LP の問い合わせフォーム。送信先は既存の /api/contact（inquiryType で種別を判別）。
const empty = { name: '', company: '', email: '', website: '', category: '', storeUrl: '', markets: '', timing: '', message: '' }
type Key = keyof typeof empty

const inputClass =
  'w-full rounded-sm border border-[#e3e6ec] bg-white px-4 py-3.5 text-base text-[#0f0f0f] placeholder:text-[#aab] transition-colors focus:border-beni focus:outline-none'
const labelClass = 'mb-1.5 block text-[12.5px] font-medium tracking-[0.03em] text-[#555]'

export default function JapanLaunchForm({ lang }: { lang: Lang }) {
  const [form, setForm] = useState(empty)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const set = (k: Key) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((p) => ({ ...p, [k]: e.target.value }))

  const submit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const page = window.location.pathname
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, inquiryType: 'japan-launch', page, referrer: document.referrer }),
      })
      if (!res.ok) return setStatus('error')
      setStatus('success')
      window.gtag?.('event', 'generate_lead', {
        form_name: 'japan_launch',
        lead_source_page: page,
        lead_category: 'japan_launch',
        lead_language: lang,
      })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="flex flex-col items-center gap-4 rounded-sm bg-white px-6 py-14 text-center">
        <CheckCircle size={40} className="text-beni" aria-hidden="true" />
        <p className="text-lg font-bold text-[#111]">{f.successTitle[lang]}</p>
        <p className="text-sm leading-relaxed text-[#666]">{f.successBody[lang]}</p>
      </div>
    )
  }

  const req = <span className="text-beni"> *</span>
  const text = (k: Key, type = 'text', required = false, placeholder?: string, autoComplete?: string) => (
    <div>
      <label htmlFor={`jl-${k}`} className={labelClass}>
        {f.fields[k][lang]}
        {required && req}
      </label>
      <input id={`jl-${k}`} name={k} type={type} required={required} placeholder={placeholder} autoComplete={autoComplete} value={form[k]} onChange={set(k)} className={inputClass} />
    </div>
  )
  const select = (k: Key, options: { value: string; label: Record<Lang, string> }[]) => (
    <div>
      <label htmlFor={`jl-${k}`} className={labelClass}>{f.fields[k][lang]}</label>
      <select id={`jl-${k}`} name={k} value={form[k]} onChange={set(k)} className={`${inputClass} appearance-none`}>
        <option value="">{f.select[lang]}</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label[lang]}</option>
        ))}
      </select>
    </div>
  )

  return (
    <form onSubmit={submit} className="grid gap-4 rounded-sm bg-white p-5 shadow-[0_24px_60px_-36px_rgba(20,24,92,0.6)] sm:grid-cols-2 sm:p-8 md:p-10">
      {text('name', 'text', true, undefined, 'name')}
      {text('company', 'text', true, undefined, 'organization')}
      {text('email', 'email', true, 'name@brand.com', 'email')}
      {text('website', 'url', false, 'https://', 'url')}
      {select('category', f.categories)}
      {text('storeUrl', 'url', false, 'https://')}
      {text('markets', 'text', false, f.placeholders.markets[lang])}
      {select('timing', f.timings)}
      <div className="sm:col-span-2">
        <label htmlFor="jl-message" className={labelClass}>{f.fields.message[lang]}</label>
        <textarea id="jl-message" name="message" rows={4} placeholder={f.placeholders.message[lang]} value={form.message} onChange={set('message')} className={`${inputClass} resize-none`} />
      </div>
      {status === 'error' && <p role="alert" className="text-sm text-red-600 sm:col-span-2">{f.error[lang]}</p>}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="group mt-1 inline-flex items-center justify-center gap-3 rounded-sm bg-beni px-8 py-4 text-[14px] font-bold tracking-[0.06em] text-white transition-colors hover:bg-beni-deep disabled:opacity-60 sm:col-span-2"
      >
        {status === 'loading' ? (
          <><Loader2 size={15} className="animate-spin" aria-hidden="true" /> {f.sending[lang]}</>
        ) : (
          <>{f.send[lang]} <ArrowRight size={15} aria-hidden="true" className="transition-transform group-hover:translate-x-1" /></>
        )}
      </button>
    </form>
  )
}
