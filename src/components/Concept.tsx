'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const funnel = [
  { phase: '認知', en: 'Awareness', tools: ['広告', 'SNS', 'インフルエンサー'], color: 'from-blue-600 to-blue-500' },
  { phase: '興味', en: 'Interest',  tools: ['LP', 'SNSコンテンツ', '口コミ設計'],  color: 'from-blue-500 to-cyan-500' },
  { phase: '予約', en: 'Booking',   tools: ['LINE', '予約導線', 'CTA設計'],         color: 'from-cyan-500 to-cyan-400' },
  { phase: '来店', en: 'Visit',     tools: ['体験設計', '空間演出', '接客設計'],     color: 'from-cyan-400 to-teal-400' },
  { phase: '成約', en: 'Close',     tools: ['クロージング', '比較設計', 'LP'],       color: 'from-teal-400 to-green-400' },
  { phase: 'ファン化', en: 'Fan',   tools: ['UGC設計', '紹介施策', 'コミュニティ'], color: 'from-green-400 to-emerald-300' },
]

export default function Concept() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="concept" className="section-divider bg-[#050505] py-16 md:py-36 px-0 md:px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <div className="px-6 md:px-0 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-blue-500 mb-6"
          >
            Concept
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,5vw,60px)] font-black leading-[1.1] tracking-tight"
            >
              Faiseは、<span className="text-gradient">体験</span>を設計する。
            </motion.h2>
          </div>
        </div>

        {/* Swipe hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="md:hidden flex items-center justify-end gap-1.5 px-6 mb-4"
        >
          <span className="text-[11px] text-white/25 tracking-widest">Swipe</span>
          <span className="text-white/25 text-sm">→</span>
        </motion.div>

        {/* Carousel on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="
            flex overflow-x-auto snap-x snap-mandatory no-scrollbar
            gap-0 pl-6 pb-2
            md:grid md:grid-cols-6 md:overflow-visible md:pl-0 md:pb-0 md:gap-0
          "
        >
          {funnel.map((item, i) => (
            <div
              key={item.phase}
              className="
                snap-start shrink-0 w-[58vw] sm:w-48
                md:w-auto md:shrink
                relative border border-white/[0.07] hover:border-blue-500/30
                bg-black/60 hover:bg-blue-950/20
                p-4 md:p-4 transition-all duration-400
                flex flex-col
              "
            >
              {/* Connector arrow on mobile */}
              {i < funnel.length - 1 && (
                <div className="md:hidden absolute -right-3 top-6 z-10 text-white/20 text-xs">▶</div>
              )}

              <div className="flex items-center gap-2 mb-4">
                <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                  <span className="font-inter font-black text-[9px] text-black">{i + 1}</span>
                </div>
                <div>
                  <p className={`text-base md:text-lg font-black bg-gradient-to-r ${item.color} bg-clip-text text-transparent leading-none`}>
                    {item.phase}
                  </p>
                  <p className="font-inter text-[9px] tracking-widest text-white/30 uppercase">{item.en}</p>
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mt-auto">
                {item.tools.map((t) => (
                  <span key={t} className="text-[11px] text-white/45 border border-white/[0.07] px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-8 text-center text-xs text-white/30 tracking-wide px-6 md:px-0"
        >
          各フェーズに広告・SNS・LP・LINE・企画・クリエイティブ・体験設計が連動する
        </motion.p>
      </div>
    </section>
  )
}
