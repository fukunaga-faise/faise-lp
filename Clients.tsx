'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Eyebrow from './Eyebrow'

const clients = [
  { name: '吉本興業', category: 'エンタメ', logo: '/images/logo-yoshimoto-new.svg' },
  { name: 'eLife株式会社', category: '医療・ヘルスケア', logo: '/images/logo-elife-new.svg' },
  { name: 'wellnessplus株式会社', category: 'フィットネス・ウェルネス', logo: '/images/logo-wellnessplus-new.webp' },
]

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="bg-white px-6 md:px-14 py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Clients</Eyebrow>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 md:mt-12 mb-10 md:mb-14"
        >
          <h2 className="text-[clamp(24px,6vw,42px)] font-black leading-[1.4] tracking-tight text-[#101318] mb-4">
            取引実績
          </h2>
          <p className="text-[14px] md:text-[15px] text-[#6d7480] leading-[2]">
            業界を問わず、集客に課題を持つ施設をご支援しています。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="rounded-2xl border hairline border-[#e7e9ee] p-7 md:p-9 flex flex-col gap-4 hover:shadow-[0_10px_36px_rgba(16,19,24,0.06)] transition-shadow duration-300"
            >
              <div className="h-9 flex items-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={c.logo} alt={c.name} className="h-8 w-auto object-contain max-w-[150px]" />
              </div>
              <p className="text-[17px] md:text-[19px] font-black text-[#101318] leading-tight">
                {c.name}
              </p>
              <span className="self-start text-[11px] md:text-[12px] font-bold text-[#0050d0] bg-[#0050d0]/[0.06] rounded-full px-3.5 py-1.5 mt-auto">
                {c.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
