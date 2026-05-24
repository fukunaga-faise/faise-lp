'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Loader2, CheckCircle } from 'lucide-react'

interface Props {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: Props) {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

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
    'w-full bg-white/[0.04] border border-white/[0.1] rounded-sm px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-blue-500/60 transition-colors'

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-4 top-4 bottom-4 max-w-lg mx-auto bg-[#0a0a0a] border border-white/[0.08] rounded-sm z-50 p-7 md:p-10 overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white/30 hover:text-white/70 transition-colors"
            >
              <X size={18} />
            </button>

            {status === 'success' ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <CheckCircle size={40} className="text-blue-500" />
                <h3 className="text-lg font-bold">送信完了しました</h3>
                <p className="text-sm text-white/45 leading-relaxed">
                  お問い合わせありがとうございます。<br />
                  2営業日以内にご連絡いたします。
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 text-xs text-white/30 hover:text-white/60 transition-colors"
                >
                  閉じる
                </button>
              </div>
            ) : (
              <>
                <p className="font-inter text-[10px] tracking-[0.24em] uppercase text-blue-500 mb-3">Contact</p>
                <h2 className="text-xl font-black mb-1">無料相談する</h2>
                <p className="text-xs text-white/35 mb-7 leading-relaxed">
                  内容を確認の上、2営業日以内にご連絡いたします。
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] text-white/35 mb-1.5 block tracking-wide">
                        お名前 <span className="text-blue-500">*</span>
                      </label>
                      <input
                        required
                        placeholder="山田 太郎"
                        value={form.name}
                        onChange={e => setForm(p => ({ ...p, name: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-[10px] text-white/35 mb-1.5 block tracking-wide">
                        会社名・店舗名
                      </label>
                      <input
                        placeholder="株式会社〇〇"
                        value={form.company}
                        onChange={e => setForm(p => ({ ...p, company: e.target.value }))}
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-white/35 mb-1.5 block tracking-wide">
                      メールアドレス <span className="text-blue-500">*</span>
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
                    <label className="text-[10px] text-white/35 mb-1.5 block tracking-wide">電話番号</label>
                    <input
                      placeholder="090-0000-0000"
                      value={form.phone}
                      onChange={e => setForm(p => ({ ...p, phone: e.target.value }))}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="text-[10px] text-white/35 mb-1.5 block tracking-wide">
                      お問い合わせ内容 <span className="text-blue-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="現在の課題やご相談内容をお聞かせください"
                      value={form.message}
                      onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-xs text-red-400">送信に失敗しました。時間をおいて再度お試しください。</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="group mt-1 inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-all duration-300"
                  >
                    {status === 'loading' ? (
                      <><Loader2 size={14} className="animate-spin" /> 送信中...</>
                    ) : (
                      <>送信する <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" /></>
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
