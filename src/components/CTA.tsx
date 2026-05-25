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
      <section className="relative bg-[#0a0a0a] border-t border-[#4d7fff]/20 py-40 md:py-60 px-8 md:px-20 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(0,80,208,0.15) 0%, transparent 70%)',
          }}
        />

        <div className="relative max-w-7xl mx-auto text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#4d7fff]/60 mb-12"
          >
            Contact
          </motion.p>

          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,5vw,64px)] font-black leading-[1.2] tracking-[-0.02em] text-white"
            >
              まず、話を聞かせてください。
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[clamp(13px,1.5vw,16px)] text-white/35 leading-[2] mb-14"
          >
            無料相談受付中。2営業日以内にご連絡します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.45 }}
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-5 text-[11px] font-bold tracking-[0.22em] uppercase text-white border border-[#4d7fff]/50 hover:border-[#4d7fff] hover:bg-[#4d7fff] px-12 py-5 transition-all duration-300"
            >
              無料相談を申し込む
            </button>
          </motion.div>
        </div>
      </section>

      <footer className="bg-[#0a0a0a] border-t border-[#4d7fff]/15 py-10 px-8 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="flex flex-col gap-3">
            <a href="#">
              <img src="/logo.png" alt="Faise" className="h-7 w-auto brightness-0 invert opacity-50" />
            </a>
            <p className="text-[11px] text-white/20 tracking-wide">
              株式会社Faise　東京都品川区大井4-18-25
            </p>
          </div>
          <p className="text-[10px] text-white/15 tracking-wide">
            © 2025 Faise Inc. All rights reserved.
          </p>
        </div>
      </footer>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
