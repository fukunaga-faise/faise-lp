'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Lightbulb, Video, Megaphone, Navigation, BarChart2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    en: 'Planning',
    title: '企画設計',
    desc: '「なぜここに来たいのか」を最初から設計。行きたくなる理由を逆算して施策を立案します。',
    icon: Lightbulb,
  },
  {
    num: '02',
    en: 'Video',
    title: '動画制作\nディレクション',
    desc: '成果につながる動画を企画から一貫してディレクション。ターゲットの感情を動かすクリエイティブを制作します。',
    icon: Video,
  },
  {
    num: '03',
    en: 'Advertising',
    title: '広告運用',
    desc: 'Meta・TikTok・Google広告を戦略的に運用。クリエイティブと配信設定を継続的に最適化します。',
    icon: Megaphone,
  },
  {
    num: '04',
    en: 'Funnel',
    title: '予約導線設計',
    desc: 'LP・LINE・予約フォームを改善し、来訪意欲を予約行動につなぎます。',
    icon: Navigation,
  },
  {
    num: '05',
    en: 'Analytics',
    title: '分析・改善',
    desc: 'データで継続的にCVRを高めます。数値分析と改善提案で成果を積み重ねます。',
    icon: BarChart2,
  },
]

export default function Solution() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="solution" className="bg-white py-16 md:py-32 px-0 md:px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <div className="px-6 md:px-0 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
          >
            Solution
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,5vw,56px)] font-black leading-[1.15] tracking-tight text-[#0f0f0f]"
            >
              動画×広告×導線設計で、
              <br />
              <span className="text-gradient">体験予約を伸ばす。</span>
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="md:hidden flex items-center justify-end gap-1.5 px-6 mb-4"
        >
          <span className="text-[11px] text-[#999] tracking-widest">Swipe</span>
          <span className="text-[#999] text-sm">→</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            flex overflow-x-auto snap-x snap-mandatory no-scrollbar
            gap-3 pl-6 pr-6 pb-2
            md:grid md:grid-cols-5 md:overflow-visible md:pl-0 md:pr-0 md:pb-0 md:gap-0
          "
        >
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
              className="
                snap-start shrink-0 w-[72vw] sm:w-56
                md:w-auto md:shrink
                bg-white border border-[#e8e8e8] md:border-r-0 md:last:border-r
                p-5 flex flex-col gap-3
                shadow-[0_1px_4px_rgba(0,0,0,0.04)] md:shadow-none
                rounded-sm md:rounded-none
              "
            >
              <div className="flex items-center justify-between">
                <span className="font-inter text-[10px] font-bold text-[#0050d0]">{s.num}</span>
                <span className="font-inter text-[9px] tracking-widest uppercase text-[#bbb]">{s.en}</span>
              </div>
              <div className="w-8 h-8 rounded-sm bg-[#eff6ff] border border-[#bfdbfe] flex items-center justify-center">
                <s.icon size={15} className="text-[#0050d0]" />
              </div>
              <h3 className="text-[14px] font-black text-[#0f0f0f] leading-snug whitespace-pre-line">{s.title}</h3>
              <p className="text-[12px] text-[#666] leading-[1.8]">{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="md:hidden flex justify-center gap-1.5 mt-5">
          {steps.map((_, i) => (
            <div key={i} className={`h-px w-5 rounded-full ${i === 0 ? 'bg-[#0050d0]' : 'bg-[#ddd]'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
