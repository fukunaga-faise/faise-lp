'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import ContactModal from './ContactModal'

const blobs = [
  {
    className: 'w-[700px] h-[700px] top-[-15%] right-[0%]',
    animate: { x: [0, 60, -30, 0], y: [0, -40, 30, 0] },
    duration: 16,
    color: 'rgba(77,127,255,0.22)',
  },
  {
    className: 'w-[550px] h-[550px] bottom-[-10%] left-[-8%]',
    animate: { x: [0, -40, 30, 0], y: [0, 40, -30, 0] },
    duration: 20,
    color: 'rgba(30,80,220,0.18)',
  },
  {
    className: 'w-[400px] h-[400px] top-[35%] left-[25%]',
    animate: { x: [0, 30, -20, 0], y: [0, -30, 40, 0] },
    duration: 24,
    color: 'rgba(77,127,255,0.12)',
  },
]

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col justify-end bg-[#0a0a0a] px-8 md:px-20 pt-32 pb-20 md:pt-0 md:pb-28 overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="/images/bg-candidate-k.jpg"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover opacity-40 select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
        </div>

        {/* Animated blobs */}
        {blobs.map((blob, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full pointer-events-none blur-[80px] ${blob.className}`}
            style={{ background: blob.color }}
            animate={blob.animate}
            transition={{
              duration: blob.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}


        {/* Hero logo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-32 md:items-end md:justify-center md:pb-0 md:pr-[8vw] pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <img
              src="/logo-fmark.png"
              alt="Faise"
              className="w-40 md:w-[22vw] max-w-[340px] h-auto drop-shadow-[0_0_50px_rgba(77,127,255,0.7)]"
            />
            <span className="font-inter font-black tracking-[0.35em] text-white/90 text-[18px] md:text-[20px] uppercase">
              Faise Inc.
            </span>
          </motion.div>
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
