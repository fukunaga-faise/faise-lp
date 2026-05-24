'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const steps = [
  { num: '01', title: 'ヒアリング', desc: '施設の現状・課題・目標・ターゲットを丁寧にヒアリングします。' },
  { num: '02', title: '課題分析', desc: '集客が伸びない理由を数値と構造から分解し、本質的な課題を特定します。' },
  { num: '03', title: '企画設計', desc: '「行きたくなる理由」から逆算し、動画・広告・導線を組み合わせた施策を設計します。' },
  { num: '04', title: '制作・運用', desc: '動画制作ディレクション・広告配信・導線改善を一気通貫で実行します。' },
  { num: '05', title: '改善提案', desc: 'データを分析し、継続的に施策を改善。成果にコミットします。' },
]

export default function ServiceFlow() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-32 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Service Flow
        </motion.p>

        <div className="overflow-hidden mb-12">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,48px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
          >
            ご支援の流れ
          </motion.h2>
        </div>

        {/* Desktop: horizontal flow */}
        <div className="hidden md:flex items-start gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex-1 flex flex-col items-center text-center relative"
            >
              {i < steps.length - 1 && (
                <div className="absolute top-5 left-[calc(50%+20px)] right-0 h-px bg-[#0050d0]/20" />
              )}
              <div className="w-10 h-10 rounded-full bg-[#0050d0] flex items-center justify-center mb-4 relative z-10 shrink-0">
                <span className="font-inter text-[11px] font-black text-white">{s.num}</span>
              </div>
              <p className="text-[14px] font-black text-[#0f0f0f] mb-2 px-2">{s.title}</p>
              <p className="text-[11px] text-[#666] leading-[1.8] px-3">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
              className="flex gap-4 pb-6 last:pb-0"
            >
              <div className="flex flex-col items-center shrink-0">
                <div className="w-9 h-9 rounded-full bg-[#0050d0] flex items-center justify-center shrink-0">
                  <span className="font-inter text-[10px] font-black text-white">{s.num}</span>
                </div>
                {i < steps.length - 1 && <div className="w-px flex-1 bg-[#0050d0]/20 mt-2" />}
              </div>
              <div className="flex-1 pt-1.5">
                <p className="text-[15px] font-black text-[#0f0f0f] mb-1">{s.title}</p>
                <p className="text-[12px] text-[#666] leading-[1.8]">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
