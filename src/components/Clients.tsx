'use client'

import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 既存クライアント（掲載順・表記・ロゴは現行サイトのまま）
const clients = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ', categoryEn: 'Entertainment', logo: '/images/logo-yoshimoto-new.svg' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア', categoryEn: 'Healthcare', logo: '/images/logo-elife-new.svg' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス', categoryEn: 'Fitness & Wellness', logo: '/images/logo-wellnessplus-new.webp' },
]

const t = {
  h2: { ja: ['多様な業界の', 'クライアントとともに。'], en: ['With clients across', 'many industries.'] },
  lead: {
    ja: '業界を問わず、集客に課題を持つ施設をご支援しています。',
    en: 'We support footfall-driven businesses across every industry.',
  },
}

export default function Clients() {
  const { lang } = useLanguage()

  return (
    <section id="clients" className="border-t border-[#ecebe7] bg-white py-14 md:py-24">
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:items-center lg:gap-14">
          <Reveal>
            <Label>Clients</Label>
            <h2 className="mt-6 text-[clamp(22px,1.9vw,28px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-5 max-w-[22em] text-[14.5px] md:text-[13px] leading-[2] tracking-[0.04em] text-[#666]">{t.lead[lang]}</p>
          </Reveal>

          <ul className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-6">
            {clients.map((c, i) => (
              <li key={c.name} className="group flex flex-col items-start sm:items-center">
                <Reveal delay={i * 0.08} className="flex flex-col items-start sm:items-center">
                  <div className="flex h-16 items-center">
                    <img src={c.logo} alt={lang === 'ja' ? c.name : c.nameEn} loading="lazy" decoding="async" className="h-10 w-auto max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-105 md:h-11" />
                  </div>
                  <p className="mt-5 text-[15px] md:text-[14px] font-medium tracking-[0.05em] text-[#111]">{lang === 'ja' ? c.name : c.nameEn}</p>
                  <p className="mt-3 border border-brand/40 px-3 py-1 text-[11.5px] tracking-[0.06em] text-brand">{lang === 'ja' ? c.category : c.categoryEn}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
