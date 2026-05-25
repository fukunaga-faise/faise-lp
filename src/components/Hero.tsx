'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

const blobs = [
  {
    className: 'w-[600px] h-[600px] top-[-10%] right-[5%]',
    animate: { x: [0, 40, -20, 0], y: [0, -30, 20, 0] },
    duration: 18,
    color: 'rgba(77,127,255,0.13)',
  },
  {
    className: 'w-[500px] h-[500px] bottom-[-5%] left-[-5%]',
    animate: { x: [0, -30, 20, 0], y: [0, 30, -20, 0] },
    duration: 22,
    color: 'rgba(0,60,180,0.10)',
  },
  {
    className: 'w-[400px] h-[400px] top-[40%] left-[30%]',
    animate: { x: [0, 25, -15, 0], y: [0, -20, 30, 0] },
    duration: 26,
    color: 'rgba(77,127,255,0.07)',
  },
]

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col justify-end bg-[#0a0a0a] px-8 md:px-20 pb-20 md:pb-28 overflow-hidden">

        {/* Animated blobs */}
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full pointer-events-none blur-[120px] ${blob.className}`}
            style={{ background: blob.color }}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* F mark — slowly drifting */}
        <div className="absolute inset-0 flex items-center justify-end pointer-events-none overflow-hidden">
          <motion.img
            src="/logo-fmark.png"
            alt=""
            aria-hidden="true"
            className="w-[110vw] md:w-[72vw] opacity-40 select-none translate-x-[8%]"
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          />
        </div>

        <div className="relative max-w-7xl w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#4d7fff]/70 mb-12 md:mb-16"
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
              className="group inline-flex items-center gap-5 text-[11px] font-semibold tracking-[0.22em] uppercase text-white/50 hover:text-white transition-colors duration-300"
            >
              集客について相談する
              <span className="block h-px w-10 bg-[#4d7fff]/60 group-hover:w-20 group-hover:bg-[#4d7fff] transition-all duration-500 ease-out" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 right-8 md:right-20 flex flex-col items-center gap-3"
        >
          <span className="font-inter text-[9px] tracking-[0.3em] uppercase text-white/20 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#4d7fff]/40 to-transparent" />
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
