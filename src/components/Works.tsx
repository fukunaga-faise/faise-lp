'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '¥1,000', label: 'CPA', sub: '体験予約 1件あたり' },
  { value: '150', label: '体験予約数', sub: '広告運用開始から2週間' },
  { value: '+300', label: '入会者数', sub: '施策開始後の純増' },
]

const tags = ['#感情設計', '#出演者ブランディング', '#動画クリエイティブ', '#体験予約導線']

export default function Works() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="relative bg-[#0a0a0a] border-t border-[#4d7fff]/20 overflow-hidden">

      <div className="absolute inset-0">
        <img src="/images/service-gym.jpg" alt="" aria-hidden="true" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-20 py-32 md:py-52" ref={ref}>

        {/* Section label */}
        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/50 select-none"
          >
            Our Works
          </motion.p>
        </div>

        {/* Headline */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,4vw,56px)] font-black leading-[1.25] tracking-tight text-white"
          >
            &ldquo;会いたくなる理由&rdquo;を
            <br />
            つくった結果。
          </motion.h2>
        </div>

        {/* KPI stats — maintained as-is */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-0 border-t border-[#4d7fff]/30 mb-16 md:mb-24"
        >
          {stats.map((s, i) => (
            <div
              key={i}
              className="flex-1 py-10 md:py-14 border-b md:border-b-0 md:border-r border-[#4d7fff]/20 last:border-r-0 md:px-10 first:md:pl-0 last:md:pr-0"
            >
              <p className="font-inter text-[clamp(10px,0.9vw,12px)] tracking-[0.4em] uppercase text-[#4d7fff] mb-3">{s.label}</p>
              <p className="font-inter text-[clamp(48px,7vw,88px)] font-black text-white leading-none tracking-tight mb-3">
                {s.value}
              </p>
              <p className="text-[clamp(12px,1vw,14px)] text-white/60 leading-relaxed">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.35 }}
          className="max-w-3xl"
        >
          {/* Context line */}
          <p className="font-inter text-[clamp(10px,0.9vw,12px)] tracking-[0.3em] uppercase text-[#4d7fff] mb-8">
            Case — Personal Fitness Studio / Tokyo
          </p>

          {/* Lead copy */}
          <p className="text-[clamp(18px,2.2vw,30px)] font-bold text-white leading-[1.8] mb-10">
            広告ではなく、<br />
            <span className="text-[#4d7fff]">"続きが見たくなるコンテンツ"</span>として届ける。
          </p>

          {/* Body */}
          <div className="space-y-7 text-[clamp(15px,1.5vw,20px)] text-white/80 leading-[2.1]">
            <p>
              某都内パーソナルジムにて、出演者の魅力設計から動画構成・広告クリエイティブ・運用までを一気通貫で支援。
            </p>
            <p>
              単にサービス内容を伝えるのではなく、「この人に会ってみたい」「この空間を体験してみたい」と感じてもらえるよう、コンテンツ設計・感情設計をベースに、<em className="not-italic text-white font-semibold">"行きたくなる理由"</em>を企画段階から構築。
            </p>
            <p>
              実際のレッスン風景や指導シーンを活用し、SNS投稿と広告配信を連動。広告としてではなく、ファン心理を活かした体験価値の伝達として機能させることで、自然な予約導線を形成しました。
            </p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-10">
            {tags.map(tag => (
              <span key={tag} className="font-inter text-[clamp(12px,1vw,14px)] tracking-wide text-white border border-white/20 bg-[#4d7fff]/15 px-4 py-2">
                {tag}
              </span>
            ))}
          </div>

          <p className="mt-8 text-[clamp(10px,0.85vw,12px)] text-white/25 leading-relaxed">
            ※実績の一例です。成果を保証するものではありません。
          </p>
        </motion.div>

      </div>
    </section>
  )
}
