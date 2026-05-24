'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col justify-end bg-[#0a0a0a] px-8 md:px-20 pb-20 md:pb-28 overflow-hidden">

        {/* Background photo */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/hero-bg.jpg"
            alt=""
            className="w-full h-full object-cover opacity-60"
            aria-hidden="true"
          />
          {/* Subtle dark overlay — readable but background visible */}
          <div className="absolute inset-0 bg-[#0a0a0a]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/30" />
        </div>

        {/* Large transparent logo — centered watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <img
            src="/logo-transparent.png"
            alt=""
            className="w-[60vw] max-w-3xl opacity-[0.08] filter brightness-0 invert select-none"
            aria-hidden="true"
          />
        </div>

        {/* subtle blue glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 50% at 20% 60%, rgba(0,80,208,0.12) 0%, transparent 100%)' }}
        />

        <div className="relative max-w-7xl w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase text-white/30 mb-12 md:mb-16"
          >
            Faise Inc. — Experience Design Marketing
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(42px,8.5vw,112px)] font-black leading-[1.06] tracking-[-0.02em] text-white"
            >
              エンタメ発想で、
              <br />
              人を動かす。
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="mt-12 md:mt-16"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/50 hover:text-white transition-colors duration-400"
            >
              集客について相談する
              <span className="block h-px w-10 bg-white/30 group-hover:w-20 group-hover:bg-white/80 transition-all duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 right-8 md:right-20 flex flex-col items-center gap-3"
        >
          <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-white/20 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
