'use client'

import { useRef, useEffect } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'

export default function Result() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => v.toFixed(0))

  useEffect(() => {
    if (!inView) return
    const stop = animate(count, 4, { duration: 2.2, ease: [0.16, 1, 0.3, 1] })
    return stop.stop
  }, [inView, count])

  return (
    <section id="result" className="bg-[#f5f5f5] py-16 md:py-36 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-5"
        >
          Result
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-[clamp(14px,2vw,20px)] font-bold text-[#999] mb-4"
        >
          フィットネス業界支援実績
        </motion.p>

        <div className="flex items-end gap-2 mb-3">
          <motion.span
            initial={{ opacity: 0, scale: 0.85 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-inter font-black leading-none text-[clamp(88px,20vw,200px)] text-[#0f0f0f]"
          >
            <motion.span>{display}</motion.span>
            <span className="text-[clamp(36px,7vw,72px)] text-[#0050d0] ml-1">×</span>
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mb-8"
        >
          <p className="text-[clamp(18px,3vw,32px)] font-black text-[#0f0f0f]">体験予約数</p>
          <p className="text-xs text-[#999] font-inter tracking-widest mt-1">TRIAL BOOKING INCREASE</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-sm border border-[#e8e8e8] bg-white p-6 rounded-sm shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
        >
          <p className="text-[10px] font-bold tracking-[0.16em] uppercase text-[#0050d0] mb-3">クリスタルジム様</p>
          <p className="text-[13px] text-[#666] leading-[1.9]">
            ターゲット分析・広告企画・クリエイティブ制作・運用改善を一気通貫で実施。
            <span className="text-[#0f0f0f] font-semibold">短期間での体験予約数大幅増加</span>を実現。
          </p>
        </motion.div>
      </div>
    </section>
  )
}
