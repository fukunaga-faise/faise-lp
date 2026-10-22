'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'
import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

const t = {
  h2: { ja: ['まずは、お気軽に', 'ご相談ください。'], en: ['Get in touch', 'with any questions.'] },
  lead: { ja: '各種お問い合わせはこちらから。', en: 'Get in touch for any inquiries.' },
  button: { ja: 'お問い合わせフォーム', en: 'Contact form' },
  address: { ja: '株式会社Faise　東京都品川区大井4-18-25', en: 'Faise Inc. — 4-18-25 Oi, Shinagawa-ku, Tokyo' },
}

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false)
  const { lang } = useLanguage()

  return (
    <>
      <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-brand-sky via-brand to-brand-navy py-16 md:py-32">
        {/* Slowly drifting light + brand mark (transform only) */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="faise-anim absolute -right-[10vmax] -top-[18vmax] h-[56vmax] w-[56vmax] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.22) 0%, rgba(255,255,255,.07) 40%, rgba(255,255,255,0) 70%)', animation: 'faiseWashA 32s ease-in-out infinite' }}
          />
          <div
            className="faise-anim absolute -bottom-[24vmax] -left-[12vmax] h-[52vmax] w-[52vmax] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,172,224,.45) 0%, rgba(31,172,224,.12) 42%, rgba(31,172,224,0) 70%)', animation: 'faiseWashB 40s ease-in-out infinite' }}
          />
          <img src="/logo-mark.png" alt="" className="absolute -left-[3%] top-1/2 hidden h-[120%] w-auto -translate-y-1/2 opacity-[0.07] brightness-0 invert md:block" />
        </div>

        <div className={`${container} relative`}>
          <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <Label tone="light" className="justify-center">Contact</Label>
            <h2 className="mt-6 text-[clamp(26px,3vw,42px)] font-medium leading-[1.6] tracking-[0.03em] text-white">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-5 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.05em] text-white/80">{t.lead[lang]}</p>
            <button
              onClick={() => setModalOpen(true)}
              className="group relative mt-10 inline-flex items-center gap-4 overflow-hidden rounded-full bg-white pl-9 pr-8 py-4 font-inter text-[12px] font-medium tracking-[0.22em] uppercase text-brand-navy transition-all duration-500 hover:shadow-[0_14px_36px_-12px_rgba(0,0,0,0.45)]"
            >
              <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 bg-brand-sky/25 opacity-0 group-hover:opacity-100 group-hover:[animation:faiseShine_.9s_ease]" />
              {t.button[lang]}
              <ArrowRight size={16} strokeWidth={1.25} className="text-brand transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <footer className="bg-white py-10">
        <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2.5" aria-label="Faise">
              <img src="/logo-mark.png" alt="" className="h-7 w-auto" />
              <span className="font-inter text-[18px] font-semibold tracking-[0.14em] text-[#111]">Faise</span>
            </a>
            <p className="text-[11px] tracking-[0.04em] text-[#777]">{t.address[lang]}</p>
          </div>
          <p className="text-[10.5px] tracking-[0.04em] text-[#888]">© 2025 Faise Inc. All rights reserved.</p>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
