'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ・プロモーション' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス' },
  { name: 'その他', nameEn: 'and more...', category: '随時追加予定' },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-16 md:py-24 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Clients
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,48px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f] mb-3"
          >
            取引実績
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[14px] text-[#666]"
          >
            業界を問わず、集客に課題を持つ施設をご支援しています。
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="border border-[#e8e8e8] bg-[#fafafa] rounded-sm p-5 flex flex-col gap-2"
            >
              <p className="text-[15px] md:text-[17px] font-black text-[#0f0f0f] leading-tight">{c.name}</p>
              <p className="font-inter text-[10px] text-[#bbb] tracking-wide">{c.nameEn}</p>
              <span className="self-start text-[10px] font-medium text-[#0050d0] border border-[#bfdbfe] bg-[#eff6ff] px-2 py-0.5 rounded-sm mt-auto">
                {c.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
