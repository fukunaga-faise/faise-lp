'use client'

import { motion } from 'framer-motion'

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

        {/* Mobile logo — centered upper */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pb-32 md:hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-3"
          >
            <img
              src="/logo-fmark.png"
              alt="Faise"
              className="w-40 h-auto drop-shadow-[0_0_50px_rgba(77,127,255,0.7)]"
            />
            <span className="font-inter font-black tracking-[0.35em] text-white/90 text-[18px] uppercase">
              Faise Inc.
            </span>
          </motion.div>
        </div>

        <div className="relative max-w-7xl w-full">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="font-inter text-[clamp(12px,1.2vw,16px)] tracking-[0.3em] uppercase text-[#4d7fff]/80 mb-10 md:mb-14"
          >
            Faise Inc. — Experience Design Marketing
          </motion.p>

          {/* PC layout: h1 left + logo right */}
          <div className="md:inline-flex md:items-end md:gap-3">
            <div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-[clamp(42px,6vw,88px)] font-black leading-[1.1] tracking-[-0.02em] text-white md:whitespace-nowrap"
                >
                  エンタメ発想で、
                  <br />
                  人を動かす。
                </motion.h1>
              </div>
            </div>

            {/* PC logo — same height as h1 block */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex flex-col items-center gap-3 pb-1 shrink-0"
            >
              <img
                src="/logo-fmark.png"
                alt="Faise"
                className="h-[clamp(90px,17vw,220px)] w-auto drop-shadow-[0_0_50px_rgba(77,127,255,0.7)]"
              />
              <div className="flex flex-col items-center leading-tight">
                <span className="font-inter font-black tracking-[0.35em] text-white/90 text-[clamp(12px,1.1vw,16px)] uppercase">Faise</span>
                <span className="font-inter font-black tracking-[0.35em] text-white/90 text-[clamp(12px,1.1vw,16px)] uppercase">Inc.</span>
              </div>
            </motion.div>
          </div>
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
    </>
  )
}
