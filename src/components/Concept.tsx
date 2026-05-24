'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Sparkles, Target, TrendingUp } from 'lucide-react'

const pillars = [
  {
    icon: Sparkles,
    en: 'Entertainment',
    title: '「見たい」から始まる',
    desc: 'エンタメ業界で培ったコンテンツ設計の視点で、施設の魅力を「思わず見てしまう」クリエイティブに変換します。情報の羅列ではなく、感情を動かすコンテンツを設計します。',
  },
  {
    icon: Target,
    en: 'Experience',
    title: '「行きたい」に変える',
    desc: '体験の価値を、予約動機として言語化・映像化します。「なんとなく良さそう」で終わらせず、「ここに行かなきゃ」という具体的な理由をつくります。',
  },
  {
    icon: TrendingUp,
    en: 'Conversion',
    title: '「予約する」まで設計',
    desc: '動画・広告・LP・LINEの導線をひとつのチームで一気通貫に設計・運用します。各施策がバラバラに動くのではなく、すべてが体験予約という成果に向かって連動します。',
  },
]

export default function Concept() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="concept" className="bg-[#f5f5f5] py-16 md:py-32 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Concept
        </motion.p>

        <div className="overflow-hidden mb-4">
          <motion.h2
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4.5vw,52px)] font-black leading-[1.15] tracking-tight text-[#0f0f0f]"
          >
            エンタメ発想が、
            <br />
            <span className="text-gradient">施設マーケティングを変える。</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[14px] text-[#666] leading-[2] max-w-2xl mb-12"
        >
          吉本興業をはじめとするエンタメ領域での知見を、パーソナルジム・美容クリニックの集客に応用。
          「見せ方」ではなく「体験したくなる理由」を最初から設計するのがFaiseの強みです。
        </motion.p>

        <div className="grid md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
              className="bg-white border border-[#e8e8e8] rounded-sm p-7 flex flex-col gap-4 shadow-[0_1px_4px_rgba(0,0,0,0.05)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center shrink-0">
                  <p.icon size={16} className="text-[#0050d0]" />
                </div>
                <span className="font-inter text-[9px] tracking-[0.2em] uppercase text-[#bbb]">{p.en}</span>
              </div>
              <h3 className="text-[17px] font-black text-[#0f0f0f] leading-snug">{p.title}</h3>
              <p className="text-[13px] text-[#666] leading-[1.9]">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
