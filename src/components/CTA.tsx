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
      <section className="relative bg-black py-24 md:py-44 px-6 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-700/[0.07] blur-[100px] rounded-full" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/8 to-transparent" />
        </div>

        <div className="relative max-w-3xl mx-auto text-center" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-blue-500 mb-10"
          >
            Contact
          </motion.p>

          <div className="overflow-hidden mb-6">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(26px,5vw,58px)] font-black leading-[1.15] tracking-tight"
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
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-bold tracking-[0.1em] uppercase px-10 py-4 rounded-sm transition-all duration-300 shadow-[0_0_50px_rgba(37,99,235,0.3)] hover:shadow-[0_0_70px_rgba(37,99,235,0.5)]"
            >
              無料相談する
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            <p className="text-[11px] text-white/22 tracking-wide">お気軽にご相談ください。2営業日以内にご連絡します。</p>
          </motion.div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 pt-8 border-t border-white/[0.05] flex flex-col sm:flex-row justify-between items-center gap-3"
          >
            <a href="#" className="font-inter font-black text-lg tracking-[0.1em] text-white">
              F<span className="text-blue-500">.</span>AISE
            </a>
            <p className="text-[11px] text-white/20 tracking-wide text-center">
              株式会社Faise　東京都品川区大井4-18-25
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-5 text-[10px] text-white/12"
          >
            © 2025 Faise Inc. All rights reserved.
          </motion.p>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
