'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '400+', label: 'インフルエンサー\nタイアップ' },
  { value: 'No.1', label: '施設内満足度\nアトラクション' },
  { value: '刀',   label: 'USJ再建チームの\nマーケ会社' },
]

export default function Entertainment() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="relative max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Entertainment Marketing
        </motion.p>

        <div className="overflow-hidden mb-10">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,5vw,60px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
          >
            &ldquo;行きたくなる&rdquo;は、<br />
            <span className="text-gradient">設計できる。</span>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-3 gap-2 mb-10"
        >
          {stats.map((s, i) => (
            <div key={i} className="border border-[#e8e8e8] bg-white p-4 text-center rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.04)]">
              <p className="font-inter text-[clamp(20px,4vw,32px)] font-black text-gradient mb-2 leading-none">{s.value}</p>
              <p className="text-[10px] text-[#999] leading-[1.6] whitespace-pre-line">{s.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="grid md:grid-cols-2 gap-8 md:gap-16 items-start"
        >
          <p className="text-[clamp(13px,1.7vw,16px)] text-[#555] leading-[2]">
            代表は<span className="text-[#0f0f0f] font-semibold">株式会社刀</span>で新規テーマパークのマーケに従事。
            集客戦略・広告開発・イベント企画を担当し、
            <span className="text-[#0f0f0f] font-semibold">施設内満足度No.1アトラクション</span>の開発を主導。
            テーマパークが研究してきた「人を熱狂させる設計」を店舗型ビジネスへ転用しています。
          </p>

          <blockquote className="border-l-2 border-[#0050d0] pl-6">
            <p className="text-[clamp(15px,2vw,20px)] font-bold leading-[1.8] text-[#333]">
              人がわざわざ足を運ぶ理由は、&ldquo;正しさ&rdquo;ではなく&ldquo;
              <span className="text-[#0f0f0f]">体験したいという感情</span>&rdquo;にある。
            </p>
          </blockquote>
        </motion.div>
      </div>
    </section>
  )
}
