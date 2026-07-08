'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from './ContactModal'

export default function CTA() {
  const [modalOpen, setModalOpen] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <>
      <section className="bg-white px-4 md:px-10 pb-14 md:pb-24" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative max-w-[1240px] mx-auto grad-bg rounded-[28px] md:rounded-[44px] px-7 py-16 md:px-20 md:py-24 overflow-hidden text-center"
        >
          {/* Decorative arc */}
          <svg
            viewBox="0 0 420 420"
            aria-hidden="true"
            className="absolute -left-20 -top-28 w-[280px] md:w-[420px] opacity-[0.14] pointer-events-none rotate-180"
          >
            <path
              d="M 80 335 A 178 178 0 0 1 358 120"
              fill="none"
              stroke="#ffffff"
              strokeWidth="88"
            />
          </svg>

          <div className="relative">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-inter text-[11px] md:text-[12px] tracking-[0.3em] uppercase text-white/80 mb-5"
            >
              Contact
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(24px,6vw,44px)] font-black leading-[1.5] tracking-tight text-white mb-5"
            >
              集客のこと、
              <br className="md:hidden" />
              まずはお気軽に。
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="text-[13px] md:text-[15px] text-white/85 leading-[2] mb-10"
            >
              各種お問い合わせ・ご相談はこちらから。
            </motion.p>

            <motion.button
              onClick={() => setModalOpen(true)}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 bg-white text-[#0050d0] font-bold text-[14px] md:text-[15px] rounded-full px-10 py-4 md:px-12 md:py-5 shadow-[0_10px_36px_rgba(0,0,0,0.15)]"
            >
              お問い合わせフォームへ
              <span aria-hidden="true">→</span>
            </motion.button>
          </div>
        </motion.div>
      </section>

      <footer className="bg-white border-t hairline border-[#e7e9ee] py-10 px-6 md:px-14">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center">
              <img src="/logo-fmark.png" alt="Faise" className="h-7 w-auto" />
            </a>
            <p className="text-[11px] text-[#9aa0aa] tracking-wide">
              株式会社Faise　東京都品川区大井4-18-25
            </p>
          </div>
          <p className="text-[10px] text-[#b6bcc6] tracking-wide">
            © 2025 Faise Inc. All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
