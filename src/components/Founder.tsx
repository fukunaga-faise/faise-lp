'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const career = [
  {
    company: 'ソニー株式会社',
    role: '法人店舗コンサルティング',
    headline: '店頭で人を動かす技術',
    body: '店頭イベント企画・売り場提案・営業トーク開発。5か月で店舗内シェア11%向上、担当全店舗で前年売上108%以上達成。',
    stats: ['シェア +11%', '前年比 108%+'],
  },
  {
    company: '株式会社刀',
    role: '新規テーマパーク マーケティング',
    headline: 'テーマパークで人を熱狂させる技術',
    body: '集客戦略策定・広告開発・イベント企画を担当。施設内満足度No.1アトラクション開発を主導。400名以上のインフルエンサータイアップを完遂。',
    stats: ['満足度 No.1', '400名+ キャスト'],
  },
  {
    company: '株式会社Faise 設立',
    role: '代表取締役 / 2025年12月〜',
    headline: '店舗型ビジネスの成長を設計する',
    body: 'ソニーとテーマパークの経験を統合し、パーソナルジム・美容クリニック・店舗型ビジネスの集客設計を支援。',
    stats: [],
  },
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="founder" className="bg-white py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Founder
        </motion.p>

        <div className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex md:flex-col items-center md:items-start gap-5 md:gap-0"
          >
            <div className="w-20 h-20 md:w-full md:aspect-square md:h-auto shrink-0 bg-[#f5f5f5] border border-[#e8e8e8] rounded-sm flex items-center justify-center mb-0 md:mb-6 relative overflow-hidden">
              <span className="text-2xl md:text-3xl relative z-10">👤</span>
            </div>
            <div>
              <p className="font-inter text-[10px] tracking-[0.18em] uppercase text-[#0050d0] mb-1">Haruto Fukunaga</p>
              <h3 className="text-[clamp(20px,3vw,32px)] font-black tracking-tight leading-tight mb-1 text-[#0f0f0f]">福永 遥斗</h3>
              <p className="text-xs text-[#999]">株式会社Faise 代表取締役</p>
            </div>
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[clamp(15px,2.2vw,22px)] font-bold leading-[1.6] text-[#555] mb-8"
            >
              「店舗で人を動かす」「テーマパークで人を熱狂させる」<span className="text-[#0f0f0f]">経験を持つマーケター</span>。
            </motion.p>

            <div className="flex flex-col gap-0">
              {career.map((c, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + i * 0.12 }}
                  className="flex gap-5 pb-8 last:pb-0"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-2 h-2 rounded-full bg-[#0050d0] mt-1.5" />
                    {i < career.length - 1 && <div className="w-px flex-1 bg-[#e8e8e8] mt-2" />}
                  </div>
                  <div className="flex-1">
                    <p className="font-inter text-[10px] tracking-[0.14em] uppercase text-[#0050d0]/70 mb-0.5">{c.role}</p>
                    <p className="text-[15px] font-black text-[#0f0f0f] mb-0.5">{c.company}</p>
                    <p className="text-[12px] font-semibold text-[#999] mb-2">{c.headline}</p>
                    <p className="text-[12px] text-[#666] leading-[1.85] mb-3">{c.body}</p>
                    {c.stats.length > 0 && (
                      <div className="flex gap-2 flex-wrap">
                        {c.stats.map((s) => (
                          <span key={s} className="text-[11px] font-bold text-[#0050d0] border border-[#bfdbfe] bg-[#eff6ff] px-2.5 py-1 rounded-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
