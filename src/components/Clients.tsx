'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ・プロモーション' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス' },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#0f0f0f] border-t border-[#4d7fff]/20 py-24 md:py-40 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/30 select-none"
          >
            Clients
          </motion.p>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,48px)] font-black leading-[1.1] tracking-tight text-white mb-3"
          >
            取引実績
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(14px,1.5vw,18px)] text-white/50"
          >
            業界を問わず、集客に課題を持つ施設をご支援しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#4d7fff]/10">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-[#0f0f0f] p-7 md:p-10 flex flex-col gap-3"
            >
              <p className="text-[clamp(16px,1.8vw,22px)] font-black text-white leading-tight">{c.name}</p>
              <p className="font-inter text-[10px] text-white/30 tracking-wide">{c.nameEn}</p>
              <span className="self-start text-[10px] font-medium text-[#4d7fff]/80 border border-[#4d7fff]/30 px-2 py-0.5 mt-auto">
                {c.category}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
