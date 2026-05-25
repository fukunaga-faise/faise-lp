'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: '¥1,000', label: 'CPA', sub: '体験予約1件あたり' },
  { value: '20×', label: '体験予約数', sub: '広告運用開始初月' },
]

const clients = ['吉本興業', 'eLife株式会社', 'wellnessplus株式会社']

export default function Works() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="works" className="bg-[#0a0a0a] border-t border-white/10 py-32 md:py-52 px-8 md:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-inter text-[10px] tracking-[0.4em] uppercase text-white/30 mb-16 md:mb-20"
        >
          Works
        </motion.p>

        <div className="grid md:grid-cols-[1fr_380px] gap-16 md:gap-24 items-start">
          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <div className="overflow-hidden mb-8">
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

            <div className="space-y-5 text-[clamp(13px,1.5vw,16px)] text-white/40 leading-[2.2] max-w-lg">
              <p>
                某都内パーソナルジムにて、トレーナーのブランディング設計から動画広告の構成・演出・広告運用までを一気通貫で支援。
              </p>
              <p>
                単にサービスを紹介するのではなく、
                「この人に会ってみたい」「この空間を体験してみたい」と感じてもらえるよう、
                人と体験の両面から感情設計を行いました。
              </p>
              <p>
                エンタメ発想を取り入れながら、見た瞬間に感情が動く導線を構築。
                広告運用開始初月で体験予約数は従来比<strong className="text-white font-bold">20倍</strong>に増加、
                <strong className="text-white font-bold">CPA1,000円</strong>を実現しました。
              </p>
            </div>

            <p className="mt-8 text-[11px] text-white/20 leading-relaxed">
              ※実績の一例です。成果を保証するものではありません。
            </p>
          </motion.div>

          {/* Stats + clients */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="flex flex-col gap-0"
          >
            <div className="border-t border-white/10">
              {stats.map((s, i) => (
                <div key={i} className="py-8 border-b border-white/10">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-[clamp(32px,5vw,52px)] font-black text-white leading-none tracking-tight">
                      {s.value}
                    </span>
                    <span className="font-inter text-[11px] tracking-widest uppercase text-white/30">{s.label}</span>
                  </div>
                  <p className="text-[12px] text-white/30">{s.sub}</p>
                </div>
              ))}
            </div>

            <div className="pt-10">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-white/25 mb-6">Clients</p>
              <div className="space-y-3">
                {clients.map((c, i) => (
                  <p key={i} className="text-[15px] font-semibold text-white/60 tracking-wide">
                    {c}
                  </p>
                ))}
                <p className="text-[13px] text-white/25 tracking-wide">etc.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
