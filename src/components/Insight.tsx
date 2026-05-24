'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Insight() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#f5f5f5] py-20 md:py-40 px-6 border-t border-[#eaeaea]">
      <div className="relative max-w-3xl mx-auto text-center" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-8"
        >
          Insight
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(28px,5vw,60px)] font-black leading-[1.12] tracking-tight mb-10 text-[#0f0f0f]"
        >
          人は&ldquo;<span className="text-gradient">正しい</span>&rdquo;だけでは<br />動かない。
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="max-w-lg mx-auto"
        >
          <p className="text-[clamp(14px,1.8vw,18px)] text-[#555] leading-[2] mb-6">
            人が動くのは、
            <span className="text-[#0f0f0f] font-bold">面白そう</span>、
            <span className="text-[#0f0f0f] font-bold">気になる</span>、
            <span className="text-[#0f0f0f] font-bold">話したくなる</span>、
            <span className="text-[#0f0f0f] font-bold">自分も変われそう</span>、
            と思った瞬間です。
          </p>
          <p className="text-[clamp(13px,1.6vw,16px)] text-[#999] leading-[2]">
            選ばれるブランドには必ず&ldquo;感情が動く理由&rdquo;があります。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
