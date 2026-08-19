'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Loader2, CheckCircle } from 'lucide-react'
import { useLanguage } from '@/lib/language'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const t = {
  successTitle: { ja: '送信完了しました', en: 'Message sent' },
  successBody: {
    ja: ['お問い合わせありがとうございます。', '2営業日以内にご連絡いたします。'],
    en: ['Thank you for reaching out.', 'We’ll get back to you within 2 business days.'],
  },
  close: { ja: '閉じる', en: 'Close' },
  heading: { ja: '無料相談する', en: 'Free consultation' },
  intro: { ja: '内容を確認の上、2営業日以内にご連絡いたします。', en: 'We’ll review your message and respond within 2 business days.' },
  name: { ja: 'お名前', en: 'Name' },
  namePlaceholder: { ja: '山田 太郎', en: 'John Smith' },
  company: { ja: '会社名・店舗名', en: 'Company / business name' },
  companyPlaceholder: { ja: '株式会社〇〇', en: 'e.g. Acme Inc.' },
  email: { ja: 'メールアドレス', en: 'Email' },
  phone: { ja: '電話番号', en: 'Phone number' },
  phonePlaceholder: { ja: '090-0000-0000', en: 'e.g. +81 90-0000-0000' },
  message: { ja: 'お問い合わせ内容', en: 'Message' },
  messagePlaceholder: { ja: '現在の課題やご相談内容をお聞かせください', en: 'Tell us about your current challenges or what you’d like to discuss' },
  error: { ja: '送信に失敗しました。時間をおいて再度お試しください。', en: 'Something went wrong. Please try again in a moment.' },
  sending: { ja: '送信中...', en: 'Sending...' },
  send: { ja: '送信する', en: 'Send' },
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const { lang } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const inputClass =
    'w-full bg-[#f8f8f8] border border-[#e8e8e8] rounded-sm px-4 py-3.5 text-base text-[#0f0f0f] placeholder:text-[#bbb] focus:outline-none focus:border-[#4d7fff] transition-colors'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 md:inset-x-auto md:left-1/2 md:-translate-x-1/2 top-4 bottom-4 md:top-8 md:bottom-8 w-full md:w-[760px] bg-white border border-[#e8e8e8] rounded-sm z-50 p-7 md:p-14 overflow-y-auto shadow-[0_8px_40px_rgba(0,0,0,0.12)]"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#bbb] hover:text-[#555] transition-colors"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <CheckCircle size={40} className="text-[#0050d0]" />
                <h3 className="text-lg font-bold text-[#0f0f0f]">{t.successTitle[lang]}</h3>
                <p className="text-sm text-[#666] leading-relaxed">
                  {t.successBody[lang][0]}<br />
                  {t.successBody[lang][1]}
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs text-[#bbb] hover:text-[#555] transition-colors"
                >
                  {t.close[lang]}
                </button>
              </div>
            ) : (
              <>
                <p className="font-inter text-[11px] tracking-[0.3em] uppercase text-[#4d7fff] mb-3">Contact</p>
                <h2 className="text-3xl font-black mb-2 text-[#0f0f0f]">{t.heading[lang]}</h2>
                <p className="text-sm text-[#999] mb-8 leading-relaxed">
                  {t.intro[lang]}
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[12px] text-[#999] mb-1.5 block tracking-wide">
                        {t.name[lang]} <span className="text-[#0050d0]">*</span>
                      </label>
                      <input
                        required
                        placeholder={t.namePlaceholder[lang]}
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[12px] text-[#999] mb-1.5 block tracking-wide">
                        {t.company[lang]}
                      </label>
                      <input
                        placeholder={t.companyPlaceholder[lang]}
                        value={form.company}
                        onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-[#999] mb-1.5 block tracking-wide">
                      {t.email[lang]} <span className="text-[#0050d0]">*</span>
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="example@email.com"
                      value={form.email}
                      onChange={e => setForm(p => ({ ...p, email: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#999] mb-1.5 block tracking-wide">{t.phone[lang]}</label>
                    <input
                      placeholder={t.phonePlaceholder[lang]}
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-[#999] mb-1.5 block tracking-wide">
                      {t.message[lang]} <span className="text-[#0050d0]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder={t.messagePlaceholder[lang]}
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-500">{t.error[lang]}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group mt-1 inline-flex items-center justify-center gap-3 bg-[#0050d0] hover:bg-[#003fa8] disabled:opacity-60 text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors duration-200"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={14} className="animate-spin" /> {t.sending[lang]}</>
                    ) : (
                      <>{t.send[lang]} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
