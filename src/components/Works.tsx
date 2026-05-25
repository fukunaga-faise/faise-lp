'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '¥1,000', label: 'CPA', sub: '体験予約1件あたり' },
  { value: '20×', label: '体験予約数増加', sub: '広告運用開始初月' },
]

const clients = ['吉本興業', 'eLife株式会社', 'wellnessplus株式会社']

export default function Works() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="relative bg-[#0a0a0a] border-t border-white/10 overflow-hidden">

      {/* Background gym image */}
      <div className="absolute inset-0">
        <img
          src="/images/service-gym.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-[#0a0a0a]/40 to-[#0a0a0a]/80" />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 md:px-20 py-32 md:py-52" ref={ref}>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-inter text-[10px] tracking-[0.4em] uppercase text-white/30 mb-16 md:mb-20"
        >
          Case Study
        </motion.p>

        {/* Headline */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,50px)] font-black leading-[1.25] tracking-tight text-white"
          >
            &ldquo;行きたくなる理由&rdquo;を
            <br />
            つくった結果。
          </motion.h2>
        </div>

        {/* Stats — prominent */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col md:flex-row gap-0 border-t border-white/15 mb-16 md:mb-20"
        >
          {stats.map((s, i) => (
            <div key={i} className="flex-1 py-10 md:py-14 border-b md:border-b-0 md:border-r border-white/15 last:border-r-0 md:pr-16 first:md:pr-16 last:md:pl-16">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/30 mb-3">{s.label}</p>
              <p className="text-[clamp(52px,8vw,96px)] font-black text-white leading-none tracking-tight mb-2">
                {s.value}
              </p>
              <p className="text-[12px] text-white/35">{s.sub}</p>
            </div>
          ))}
        </motion.div>

        {/* Narrative + Clients */}
        <div className="grid md:grid-cols-[1fr_280px] gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.35 }}
            className="space-y-5 text-[clamp(13px,1.5vw,16px)] text-white/40 leading-[2.2]"
          >
            <p>
              某都内パーソナルジムにて、トレーナーのブランディング設計から動画広告の構成・演出・広告運用までを一気通貫で支援。
            </p>
            <p>
              単にサービスを紹介するのではなく、「この人に会ってみたい」「この空間を体験してみたい」と感じてもらえるよう、人と体験の両面から感情設計を行いました。
            </p>
            <p className="mt-6 text-[11px] text-white/20">
              ※実績の一例です。成果を保証するものではありません。
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/25 mb-6">Clients</p>
            <div className="space-y-4">
              {clients.map((c, i) => (
                <p key={i} className="text-[15px] font-semibold text-white/55 tracking-wide border-b border-white/10 pb-4 last:border-b-0">
                  {c}
                </p>
              ))}
              <p className="text-[13px] text-white/25 tracking-wide">etc.</p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
