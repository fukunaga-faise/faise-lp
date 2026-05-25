'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="relative bg-[#0a0a0a] py-32 md:py-52 px-8 md:px-20 overflow-hidden">

      {/* F watermark */}
      <div className="absolute top-1/2 right-[-6vw] -translate-y-1/2 pointer-events-none select-none">
        <span className="font-black text-[clamp(320px,40vw,560px)] leading-none text-white/[0.04]">
          F
        </span>
      </div>

      <div className="relative max-w-7xl mx-auto" ref={ref}>
        {/* Left accent line + label */}
        <div className="flex items-start gap-8 mb-16 md:mb-24">
          <div className="w-px self-stretch bg-white/20 shrink-0" />
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase text-white/30 pt-1"
          >
            Mission
          </motion.p>
        </div>

        <div className="pl-0 md:pl-10 max-w-3xl space-y-10">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,4.5vw,58px)] font-black leading-[1.2] tracking-[-0.02em] text-white"
            >
              人は、論理だけでは動かない。
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-[clamp(17px,2vw,22px)] text-white/70 leading-[1.85] font-medium"
          >
            行きたくなる理由には、感情がある。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-[clamp(13px,1.4vw,16px)] text-white/40 leading-[2.4]"
          >
            FAISEは、エンタメ業界で培った「感情を動かす設計」を、集客施設のマーケティングに応用する会社です。<br />
            広告を回す前に、"行きたくなる理由"そのものをつくる。<br />
            それが私たちのアプローチです。
          </motion.p>
        </div>
      </div>
    </section>
  )
}
