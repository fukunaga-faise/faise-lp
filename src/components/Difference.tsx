'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { X, Check } from 'lucide-react'

const rows = [
  { bad: '広告運用中心の提案',    good: '人が動く理由から設計する' },
  { bad: 'CPA改善がゴール',       good: 'SNSで話題化する企画をつくる' },
  { bad: 'バナー制作で終わる',    good: 'トレーナー・医師のIP化まで支援' },
  { bad: '施策が分断される',      good: '集客から成約・ファン化まで一気通貫' },
  { bad: '担当者が代わる',        good: '世界観設計 × 体験設計' },
]

export default function Difference() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Difference
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,5vw,60px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
          >
            普通の広告代理店との<span className="text-[#ccc]">違い。</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.15 }}
          className="grid grid-cols-2 gap-2 mb-2"
        >
          <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#999] px-4">一般的な代理店</div>
          <div className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#0050d0] px-4">Faise</div>
        </motion.div>

        <div className="flex flex-col gap-1.5">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
              className="grid grid-cols-2 gap-2"
            >
              <div className="flex items-start gap-2.5 border border-[#e8e8e8] bg-[#fafafa] px-4 py-3.5 rounded-sm">
                <div className="w-4 h-4 rounded-full border border-[#ddd] flex items-center justify-center shrink-0 mt-0.5">
                  <X size={8} className="text-[#bbb]" />
                </div>
                <p className="text-[12px] text-[#999] leading-snug">{row.bad}</p>
              </div>
              <div className="flex items-start gap-2.5 border border-[#bfdbfe] bg-[#eff6ff] px-4 py-3.5 rounded-sm">
                <div className="w-4 h-4 rounded-full bg-[#0050d0]/10 border border-[#0050d0]/30 flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={8} className="text-[#0050d0]" />
                </div>
                <p className="text-[12px] text-[#0f0f0f] font-medium leading-snug">{row.good}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
