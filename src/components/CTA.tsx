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
      <section id="contact" className="border-t border-[#ecebe7] bg-[#f6f5f2] py-24 md:py-32">
        <div className={container}>
          <Reveal className="mx-auto max-w-2xl text-center">
            <Label className="text-center">Contact</Label>
            <h2 className="mt-6 text-[clamp(26px,3vw,42px)] font-medium leading-[1.6] tracking-[0.03em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-5 text-[13px] md:text-[14px] leading-[2] tracking-[0.05em] text-[#666]">{t.lead[lang]}</p>
            <button
              onClick={() => setModalOpen(true)}
              className="group mt-10 inline-flex items-center gap-4 rounded-full bg-[#111] pl-9 pr-8 py-4 font-inter text-[12px] font-medium tracking-[0.22em] uppercase text-white transition-colors duration-300 hover:bg-[#333]"
            >
              {t.button[lang]}
              <ArrowRight size={16} strokeWidth={1.25} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-[#ecebe7] bg-white py-10">
        <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2.5" aria-label="Faise">
              <img src="/logo-mark.png" alt="" className="h-7 w-auto" />
              <span className="font-inter text-[18px] font-semibold tracking-[0.14em] text-[#111]">Faise</span>
            </a>
            <p className="text-[11px] tracking-[0.04em] text-[#999]">{t.address[lang]}</p>
          </div>
          <p className="text-[10.5px] tracking-[0.04em] text-[#aaa]">© 2025 Faise Inc. All rights reserved.</p>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
