'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Eyebrow from './Eyebrow'

const rows = [
  { label: '会社名', value: '株式会社Faise' },
  { label: '代表取締役', value: '福永 遥斗' },
  { label: '設立', value: '2025年12月' },
  { label: '所在地', value: '〒140-0014\n東京都品川区大井4-18-25' },
  { label: '事業内容', value: '集客施設向けマーケティング支援\n動画広告制作・キャスティング' },
]

export default function Company() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="company" className="bg-white px-6 md:px-14 py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Company</Eyebrow>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 text-[clamp(24px,6vw,42px)] font-black tracking-tight text-[#101318] mb-10 md:mb-14"
        >
          会社概要
        </motion.h2>

        <div className="max-w-3xl">
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.07 }}
              className="grid grid-cols-[110px_1fr] md:grid-cols-[200px_1fr] gap-5 py-6 border-b hairline border-[#e7e9ee] first:border-t"
            >
              <p className="text-[12px] md:text-[13px] font-bold text-[#9aa0aa] pt-1">
                {row.label}
              </p>
              <p className="text-[14px] md:text-[15px] text-[#101318] leading-[2] whitespace-pre-line">
                {row.value}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
