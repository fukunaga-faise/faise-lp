'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pains = [
  'SNSに投稿しているが、フォロワーは増えても予約につながらない',
  '広告を出してもCPAが高く、費用対効果が見合わない',
  '競合と訴求が似てしまい、選ばれる理由を差別化できていない',
  '動画を制作しても何が刺さるか分からず、改善の仮説が立てられない',
  'LPや予約フォームへの流入はあるが、成約率が低いまま',
  '広告代理店・動画制作・SNS運用がバラバラで、施策が連携できていない',
  '体験の価値は高いのに、それが集客コンテンツに反映されていない',
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="problem" className="bg-white py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
        >
          Problem
        </motion.p>

        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,5.5vw,64px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
          >
            施策を打っているのに、
            <br />
            <span className="text-[#bbb]">体験予約が増えない。</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          <div className="mb-10 md:mb-0">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 py-4 border-b border-[#eaeaea] last:border-0"
              >
                <span className="font-inter text-xs font-bold text-[#0050d0]/40 mt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[clamp(13px,1.8vw,16px)] text-[#555] leading-relaxed">{pain}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex items-start md:items-center"
          >
            <div className="border-l-2 border-[#0050d0] pl-6">
              <p className="text-[clamp(15px,2vw,20px)] font-bold leading-[1.9] text-[#333]">
                これらはすべて、<br />
                <span className="text-gradient">「行きたくなる理由」</span>が<br />
                設計されていないことが原因です。<br />
                <br />
                <span className="text-[14px] font-normal text-[#888] leading-[1.9]">
                  広告の前に、コンテンツの前に、まず<br />
                  「なぜここに来たいのか」を設計する。<br />
                  それがFaiseのアプローチです。
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
