'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const career = [
  {
    period: '2022 — 2024',
    company: 'ソニー株式会社',
    role: '法人店舗コンサルティング',
    body: '店頭イベント企画・売り場提案・営業トーク開発。5か月で店舗内シェア11%向上、担当全店舗で前年売上108%以上達成。',
    stats: ['シェア +11%', '前年比 108%+'],
  },
  {
    period: '2024 — 2025',
    company: '株式会社刀',
    role: '新規テーマパーク マーケティング',
    body: '集客戦略策定・広告開発・イベント企画を担当。施設内満足度No.1アトラクション開発を主導。400名以上のインフルエンサータイアップを完遂。',
    stats: ['満足度 No.1', '400名+ タイアップ'],
  },
  {
    period: '2025 —',
    company: '株式会社Faise 設立',
    role: '代表取締役',
    body: 'ソニーとテーマパークの経験を統合し、パーソナルジム・美容クリニック・店舗型ビジネスの集客設計を支援。',
    stats: [],
  },
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="founder" className="bg-[#f5f5f5] py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-12"
        >
          Founder
        </motion.p>

        {/* Message block */}
        <div className="grid md:grid-cols-[1fr_320px] gap-12 md:gap-20 items-start mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#999] mb-6">Message</p>
            <blockquote className="text-[clamp(18px,2.8vw,28px)] font-bold leading-[1.75] text-[#0f0f0f] mb-8">
              &ldquo;人を動かすのは、正しさではなく感情だ。
              <br className="hidden md:block" />
              どれだけ良いサービスでも、
              <br className="hidden md:block" />
              <span className="text-[#0050d0]">体験したいと思わせる設計</span>がなければ、
              <br className="hidden md:block" />
              人は来ない。&rdquo;
            </blockquote>
            <p className="text-[13px] text-[#666] leading-[2] max-w-lg">
              ソニーの店頭で「人が止まる瞬間」を研究し、テーマパークで「また来たい感情」を設計しました。
              その経験が教えてくれたのは、集客の本質は広告ではなく、<strong className="text-[#0f0f0f] font-semibold">「行きたくなる理由」そのものをつくること</strong>だということです。
              Faiseはその設計を、店舗型ビジネスに届けるために生まれました。
            </p>
          </motion.div>

          {/* Profile card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="bg-white border border-[#e8e8e8] rounded-sm p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
          >
            <div className="w-full aspect-square bg-[#f0f0f0] border border-[#e8e8e8] rounded-sm flex items-center justify-center mb-5 overflow-hidden">
              <span className="text-5xl">👤</span>
            </div>
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#0050d0] mb-1">Haruto Fukunaga</p>
            <h3 className="text-xl font-black text-[#0f0f0f] mb-1">福永 遥斗</h3>
            <p className="text-xs text-[#999] mb-4">株式会社Faise 代表取締役</p>
            <div className="flex flex-wrap gap-2">
              {['元ソニー', '元株式会社刀', 'テーマパークMKT'].map((tag) => (
                <span key={tag} className="text-[10px] text-[#666] border border-[#e8e8e8] bg-[#fafafa] px-2 py-1 rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Career timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="font-inter text-[11px] tracking-[0.2em] uppercase text-[#999] mb-8">Career</p>
          <div className="grid md:grid-cols-3 gap-px bg-[#eaeaea]">
            {career.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                className="bg-white p-6"
              >
                <p className="font-inter text-[10px] tracking-widest text-[#bbb] mb-3">{c.period}</p>
                <p className="text-[15px] font-black text-[#0f0f0f] mb-0.5">{c.company}</p>
                <p className="text-[11px] text-[#0050d0] font-semibold mb-3 tracking-wide">{c.role}</p>
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
