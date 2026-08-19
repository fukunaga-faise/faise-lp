'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from './ContactModal'
import { useLanguage } from '@/lib/language'

const t = {
  eyebrow: { ja: 'お問い合わせ', en: 'Contact' },
  lead: { ja: '各種お問い合わせはこちらから。', en: 'Get in touch for any inquiries.' },
  ariaLabel: { ja: '無料相談を申し込む', en: 'Request a free consultation' },
  address: { ja: '株式会社Faise　東京都品川区大井4-18-25', en: 'Faise Inc. — 4-18-25 Oi, Shinagawa-ku, Tokyo' },
}

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()

  return (
    <>
      <section
        className="relative bg-[#4d7fff]/90 py-28 md:py-40 px-8 md:px-20 overflow-hidden"
        ref={ref}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 120%, rgba(0,0,0,0.25) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-2xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="font-inter text-[11px] tracking-[0.4em] uppercase text-white/70 mb-6"
          >
            {t.eyebrow[lang]}
          </motion.p>

          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-inter text-[clamp(36px,7vw,80px)] font-black leading-none tracking-[-0.02em] text-white"
            >
              CONTACT US
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-[clamp(13px,1.5vw,16px)] text-white/80 leading-[1.9] mb-14"
          >
            {t.lead[lang]}
          </motion.p>

          <motion.button
            onClick={() => setModalOpen(true)}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full border-2 border-white/60 hover:border-white hover:bg-white/10 text-white text-2xl transition-colors duration-300"
            aria-label={t.ariaLabel[lang]}
          >
            →
          </motion.button>
        </div>
      </section>

      <footer className="bg-[#0a0a0a]/85 border-t border-white/10 py-10 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-2">
              <img src="/logo-fmark.png" alt="Faise" className="h-8 w-auto" />
              <span className="font-inter font-black tracking-[0.15em] text-white/70 text-[14px] uppercase">Faise</span>
            </a>
            <p className="text-[11px] text-white/30 tracking-wide">
              {t.address[lang]}
            </p>
          </div>
          <p className="text-[10px] text-white/20 tracking-wide">
            © 2025 Faise Inc. All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
