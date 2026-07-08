'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Eyebrow from './Eyebrow'

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="bg-white px-4 md:px-10 py-14 md:py-24">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-[1240px] mx-auto grad-bg rounded-[28px] md:rounded-[44px] px-7 py-16 md:px-20 md:py-28 overflow-hidden"
      >
        {/* Decorative arc */}
        <svg
          viewBox="0 0 420 420"
          aria-hidden="true"
          className="absolute -right-16 -bottom-24 w-[280px] md:w-[460px] opacity-[0.14] pointer-events-none"
        >
          <path
            d="M 80 335 A 178 178 0 0 1 358 120"
            fill="none"
            stroke="#ffffff"
            strokeWidth="88"
          />
        </svg>

        <div className="relative">
          <Eyebrow light>Approach</Eyebrow>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 md:mt-12 text-[clamp(26px,6.5vw,52px)] font-black leading-[1.4] tracking-[-0.01em] text-white break-keep"
          >
            人は、論理だけでは
            <wbr />
            動かない。
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="mt-8 md:mt-10 text-[clamp(17px,4.4vw,28px)] font-bold text-white leading-[2]"
          >
            行きたくなる理由には、
            <br className="md:hidden" />
            感情がある。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.45 }}
            className="mt-8 md:mt-10 text-[clamp(15px,3.9vw,20px)] text-white/90 leading-[2.3]"
          >
            Faiseは、感情が動く瞬間を設計し、
            <br />
            人が動きたくなる体験を、
            <br className="md:hidden" />
            クリエイティブとして形にします。
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}
