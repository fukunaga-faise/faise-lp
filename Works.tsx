'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Eyebrow from './Eyebrow'

const stats = [
  { value: '¥1,000', label: 'CPA', sub: '体験予約 1件あたり' },
  { value: '450', label: '体験予約数', sub: '広告運用開始から1ヶ月' },
  { value: '+300', label: '入会者数', sub: '施策開始後の純増' },
]

export default function Works() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="bg-[#f7f8fa] px-6 md:px-14 py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Works</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-[clamp(24px,6vw,42px)] font-black leading-[1.5] tracking-tight text-[#101318] mb-12 md:mb-16"
        >
          &ldquo;会いたくなる理由&rdquo;を
          <br className="md:hidden" />
          つくった結果。
        </motion.h2>

        {/* KPI stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-4 md:gap-6 mb-14 md:mb-20"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border hairline border-[#e7e9ee] px-7 py-8 md:px-9 md:py-10"
            >
              <p className="font-inter text-[11px] md:text-[12px] tracking-[0.2em] uppercase text-[#0050d0] font-bold mb-3">
                {s.label}
              </p>
              <p className="font-inter text-[clamp(40px,10vw,60px)] font-black leading-none tracking-tight grad-text mb-3">
                {s.value}
              </p>
              <p className="text-[12px] md:text-[13px] text-[#6d7480] leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Case study */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          className="bg-white rounded-2xl md:rounded-3xl border hairline border-[#e7e9ee] px-7 py-10 md:px-14 md:py-14"
        >
          <p className="font-inter text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[#9aa0aa] mb-6">
            Case — Personal Fitness Studio / Tokyo
          </p>

          <p className="text-[clamp(18px,4.8vw,26px)] font-black text-[#101318] leading-[1.8] mb-8">
            広告ではなく、
            <br className="md:hidden" />
            <span className="grad-text">&quot;続きが見たくなるコンテンツ&quot;</span>
            として届ける。
          </p>

          <div className="space-y-6 text-[14px] md:text-[15px] text-[#6d7480] leading-[2.2] max-w-3xl">
            <p>
              某都内パーソナルジムにて、出演者の魅力設計から動画構成・広告クリエイティブ・運用までを一気通貫で支援。
            </p>
            <p>
              単にサービス内容を伝えるのではなく、「この人に会ってみたい」「この空間を体験してみたい」と感じてもらえるよう、コンテンツ設計・感情設計をベースに、
              <em className="not-italic text-[#101318] font-bold">&quot;行きたくなる理由&quot;</em>
              を企画段階から構築。
            </p>
            <p>
              実際のレッスン風景や指導シーンを活用し、SNS投稿と広告配信を連動。広告としてではなく、ファン心理を活かした体験価値の伝達として機能させることで、自然な予約導線を形成しました。
            </p>
          </div>

          <p className="mt-8 text-[11px] text-[#b6bcc6] leading-relaxed">
            ※実績の一例です。成果を保証するものではありません。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
