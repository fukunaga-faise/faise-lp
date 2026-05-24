'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative bg-[#0a0a0a] py-24 md:py-44 px-6 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative max-w-3xl mx-auto text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#4d9fff] mb-10"
          >
            Contact
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(26px,5vw,58px)] font-black leading-[1.15] tracking-tight text-white"
            >
              あなたのブランドに、
              <br />
              <span className="text-gradient">&ldquo;行きたくなる理由&rdquo;</span>
              <br />
              はありますか？
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-[clamp(13px,1.6vw,16px)] text-white/40 max-w-lg mx-auto leading-[2] mb-12"
          >
            広告を回す前に、まずは人が動く理由を設計する。
            Faiseは、店舗型ビジネスの集客・予約・成約を、
            体験設計から一気通貫で支援します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col items-center gap-3"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#0050d0] hover:bg-[#003fa8] text-white text-sm font-bold tracking-[0.1em] uppercase px-10 py-4 rounded-sm transition-colors duration-200"
            >
              無料相談する
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <p className="text-[11px] text-white/25 tracking-wide">お気軽にご相談ください。2営業日以内にご連絡します。</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/[0.07] flex flex-col sm:flex-row justify-between items-center gap-3"
          >
            <a href="#" className="font-inter font-black text-lg tracking-[0.08em] text-white">
              F<span className="text-[#4d9fff]">.</span>AISE
            </a>
            <p className="text-[11px] text-white/25 tracking-wide text-center">
              株式会社Faise　東京都品川区大井4-18-25
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-5 text-[10px] text-white/15"
          >
            © 2025 Faise Inc. All rights reserved.
          </motion.p>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
