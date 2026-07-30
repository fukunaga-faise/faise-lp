'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const rows = [
  { label: '会社名',     value: '株式会社Faise' },
  { label: '代表取締役', value: '福永 遥斗' },
  { label: '設立',       value: '2025年12月' },
  { label: '所在地',     value: '〒140-0014\n東京都品川区大井4-18-25' },
  { label: '事業内容',   value: '集客施設向けマーケティング支援\n動画広告制作・キャスティング' },
]

export default function Company() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#0a0a0a]/80 border-t border-[#4d7fff]/20 py-24 md:py-40 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/30 select-none"
          >
            Company
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(24px,3.5vw,44px)] font-black text-white mb-14 tracking-tight"
        >
          会社概要
        </motion.h2>

        <div className="max-w-3xl">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.08 }}
              className="grid grid-cols-[140px_1fr] md:grid-cols-[220px_1fr] gap-6 py-6 border-b border-white/10 first:border-t first:border-white/10"
            >
              <p className="font-inter text-[clamp(11px,1vw,13px)] tracking-[0.2em] uppercase text-[#4d7fff]/70 pt-0.5">
                {row.label}
              </p>
              <p className="text-[clamp(14px,1.4vw,18px)] text-white/90 leading-[2] whitespace-pre-line">
                {row.value}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
