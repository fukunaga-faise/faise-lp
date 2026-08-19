'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language'

const clients = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ', categoryEn: 'Entertainment', logo: '/images/logo-yoshimoto-new.svg' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア', categoryEn: 'Healthcare', logo: '/images/logo-elife-new.svg' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス', categoryEn: 'Fitness & Wellness', logo: '/images/logo-wellnessplus-new.webp' },
]

const t = {
  h2: { ja: '取引実績', en: 'Our Clients' },
  lead: {
    ja: '業界を問わず、集客に課題を持つ施設をご支援しています。',
    en: 'We support footfall-driven businesses across every industry.',
  },
}

export default function Clients() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { lang } = useLanguage()

  return (
    <section className="bg-[#0f0f0f] border-t border-[#4d7fff]/20 py-24 md:py-40 px-8 md:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/50 select-none"
          >
            Clients
          </motion.p>
        </div>

        <div className="overflow-hidden mb-14">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(26px,4vw,48px)] font-black leading-[1.1] tracking-tight text-white mb-3"
          >
            {t.h2[lang]}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[clamp(14px,1.5vw,18px)] text-white/50"
          >
            {t.lead[lang]}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#4d7fff]/10">
          {clients.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
              className="bg-[#0f0f0f] p-7 md:p-10 flex flex-col gap-3"
            >
              {c.logo && (
                <div className="mb-2 inline-flex items-center bg-white rounded px-3 py-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={c.logo} alt={c.name} className="h-7 w-auto object-contain max-w-[130px]" />
                </div>
              )}
              <p className="text-[clamp(20px,2.2vw,30px)] font-black text-white leading-tight">{lang === 'ja' ? c.name : c.nameEn}</p>
              <span className="self-start text-[clamp(11px,1vw,13px)] font-medium text-[#4d7fff] border border-[#4d7fff]/50 px-3 py-1 mt-auto">
                {lang === 'ja' ? c.category : c.categoryEn}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
