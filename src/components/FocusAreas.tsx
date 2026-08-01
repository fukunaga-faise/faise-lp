'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const areas = [
  { title: 'パーソナルジム', body: 'トレーナーの人柄と施設の空気感を、「会いに行きたい」へ変換する。' },
  { title: '美容クリニック', body: '価格競争ではなく、安心感と上質感で「選ばれる理由」をつくる。' },
  { title: '店舗・施設型ビジネス', body: '業種を問わず、来店が売上を決めるビジネスの集客を設計します。' },
]

export default function FocusAreas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="focus" className="bg-[#0a0a0a]/80 border-t border-[#4d7fff]/20 py-20 md:py-32 px-8 md:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(32px,6vw,72px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/30 select-none"
          >
            Focus Areas
          </motion.p>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(24px,3.2vw,42px)] font-black leading-[1.3] tracking-tight text-white mb-6"
        >
          来店で、成り立つビジネスへ。
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-[clamp(14px,1.4vw,18px)] text-white/60 leading-[1.9] max-w-2xl mb-14 md:mb-16"
        >
          立地と商圏に依存し、来店・予約が売上に直結する。そうしたビジネスに特化して支援しています。
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          {areas.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
            >
              <p className="text-[clamp(16px,1.6vw,20px)] font-bold text-white mb-3">{a.title}</p>
              <p className="text-[clamp(13px,1.2vw,15px)] text-white/60 leading-[1.9]">{a.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
