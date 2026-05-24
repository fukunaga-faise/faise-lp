'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rows = [
  { label: '会社名',   value: '株式会社Faise' },
  { label: '所在地',   value: '〒140-0014　東京都品川区大井4-18-25' },
  { label: '代表者',   value: '代表取締役　福永 遥斗' },
  { label: '設立年月', value: '2025年12月' },
]

export default function Company() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-16 md:py-32 px-6 border-t border-[#eaeaea]">
      <div className="max-w-4xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Company
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,5vw,52px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
          >
            会社情報
          </motion.h2>
        </div>

        <div className="flex flex-col">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="grid grid-cols-[120px_1fr] md:grid-cols-[200px_1fr] gap-4 py-5 border-b border-[#eaeaea] first:border-t"
            >
              <p className="text-[12px] text-[#999] tracking-wide pt-0.5">{row.label}</p>
              <p className="text-[13px] md:text-[14px] text-[#333] leading-[1.9] whitespace-pre-line">{row.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
