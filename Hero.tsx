'use client'

import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] bg-white flex flex-col overflow-hidden">

      {/* Animated brand arc */}
      <div className="flex-1 flex items-center justify-center pt-20 md:pt-24 px-6">
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2.6 }}
        >
          <motion.svg
            viewBox="0 0 420 420"
            className="w-[76vw] max-w-[300px] md:max-w-[480px] h-auto"
            initial={{ opacity: 0, rotate: -16, scale: 0.94 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            transition={{ duration: 1.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <defs>
              <linearGradient id="faiseArc" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0047c2" />
                <stop offset="55%" stopColor="#4d7fff" />
                <stop offset="100%" stopColor="#8f7bff" />
              </linearGradient>
            </defs>
            <motion.path
              d="M 80 335 A 178 178 0 0 1 358 120"
              fill="none"
              stroke="url(#faiseArc)"
              strokeWidth="88"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: [0.65, 0, 0.35, 1] }}
            />
          </motion.svg>
        </motion.div>
      </div>

      {/* Copy — bottom left */}
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-14 pb-14 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="flex items-center gap-2.5 font-inter text-[13px] md:text-[15px] font-medium text-[#101318] mb-5 md:mb-7">
            <span className="w-2 h-2 rounded-full bg-[#0050d0]" />
            Mission
          </p>
        </motion.div>

        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            transition={{ duration: 1.1, delay: 1.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(36px,9.5vw,80px)] font-black leading-[1.3] tracking-[-0.02em] text-[#101318]"
          >
            エンタメ発想で、
            <br />
            人を動かす。
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.3 }}
          className="mt-4 md:mt-6 font-inter text-[14px] md:text-[17px] text-[#9aa0aa] tracking-[0.03em]"
        >
          Hello, Emotion.
        </motion.p>
      </div>
    </section>
  )
}
