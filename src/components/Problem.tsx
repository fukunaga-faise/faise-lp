'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const pains = [
  '競合と似た訴求になっている',
  'SNSを頑張っても予約につながらない',
  '広告CPAが上がり続けている',
  '価格競争に巻き込まれている',
  '&ldquo;選ばれる理由&rdquo;が伝わっていない',
]

export default function Problem() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="problem" className="section-divider bg-[#050505] py-16 md:py-36 px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="font-inter text-[11px] tracking-[0.28em] uppercase text-blue-500 mb-6"
        >
          Problem
        </motion.p>

        <div className="overflow-hidden mb-10 md:mb-14">
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(30px,6vw,72px)] font-black leading-[1.1] tracking-tight"
          >
            広告運用だけでは、
            <br />
            <span className="text-white/35">人は来ない。</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          {/* Pain points */}
          <div className="mb-10 md:mb-0">
            {pains.map((pain, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -24 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 py-4 border-b border-white/[0.06] last:border-0"
              >
                <span className="font-inter text-xs font-bold text-blue-500/50 mt-0.5 w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[clamp(14px,2vw,17px)] text-white/65 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: pain }} />
              </motion.div>
            ))}
          </div>

          {/* Insight callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex items-start md:items-center"
          >
            <div className="border-l-2 border-blue-600 pl-6">
              <p className="text-[clamp(16px,2.2vw,22px)] font-bold leading-[1.8] text-white/85">
                今必要なのは、広告運用ではなく、
                <br />
                <span className="text-gradient">人が「行きたい」と思う理由</span>
                そのものを設計すること。
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
