'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function OtherResults() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-[#f5f5f5] py-12 md:py-24 px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[10px] tracking-[0.28em] uppercase text-[#999] mb-6"
        >
          Other Results
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="border border-[#e8e8e8] bg-white p-6 rounded-sm flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10 shadow-[0_1px_4px_rgba(0,0,0,0.04)]"
        >
          <div className="shrink-0">
            <p className="font-inter text-[10px] tracking-widest uppercase text-[#999] mb-2">EC Growth / Luxora様</p>
            <div className="flex items-end gap-2">
              <span className="font-inter text-[clamp(28px,5vw,48px)] font-black leading-none text-[#ccc]">400万</span>
              <span className="text-lg font-black text-[#bbb] mb-1">→</span>
              <span className="font-inter text-[clamp(28px,5vw,48px)] font-black leading-none text-[#0f0f0f]">3,000<span className="text-gradient">万</span></span>
            </div>
            <p className="text-[10px] text-[#999] mt-1 tracking-wide">単月売上（1年後）</p>
          </div>
          <div className="border-t sm:border-t-0 sm:border-l border-[#eaeaea] pt-4 sm:pt-0 sm:pl-8">
            <p className="text-[13px] text-[#666] leading-[1.9]">
              Shopify構築・購買導線改善・広告運用・リピート施策を一貫支援。
              <span className="text-[#0f0f0f] font-medium">導線設計に強い会社</span>であることの証拠として。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
