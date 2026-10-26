'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// クライアント一覧（スライダー表示）。増やすときは clients に追記するだけでよい（新しいものを後ろに）。
// 既存3社は掲載順・表記・ロゴとも現行サイトのまま。logoClass はロゴごとの表示サイズ調整用。
type Client = {
  name: string
  nameEn: string
  reading?: string
  category: string
  categoryEn: string
  logo: string
  logoClass?: string
}

const clients: Client[] = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ', categoryEn: 'Entertainment', logo: '/images/logo-yoshimoto-new.svg' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア', categoryEn: 'Healthcare', logo: '/images/logo-elife-new.svg' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス', categoryEn: 'Fitness & Wellness', logo: '/images/logo-wellnessplus-new.webp' },
  { name: 'HALILON Oral Studio', nameEn: 'HALILON Oral Studio', reading: 'ハリロンオーラルスタジオ', category: '医療ホワイトニング', categoryEn: 'Medical Whitening Clinic', logo: '/images/logo-halilon.png', logoClass: 'h-[68px] md:h-[72px]' },
  { name: 'AQUATECH', nameEn: 'AQUATECH', reading: 'アクアテック', category: 'エネルギー、生活・健康', categoryEn: 'Energy, Lifestyle & Health', logo: '/images/logo-aquatech.png', logoClass: 'h-[22px] md:h-[24px]' },
]

const t = {
  h2: { ja: ['多様な業界の', 'クライアントとともに。'], en: ['With clients across', 'many industries.'] },
  lead: {
    ja: '業界を問わず、集客に課題を持つ施設をご支援しています。',
    en: 'We support footfall-driven businesses across every industry.',
  },
  prev: { ja: '前へ', en: 'Previous' },
  next: { ja: '次へ', en: 'Next' },
  region: { ja: 'クライアント一覧（横にスクロールできます）', en: 'Clients (scroll sideways)' },
}

export default function Clients() {
  const { lang } = useLanguage()
  const trackRef = useRef<HTMLUListElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)
  const [progress, setProgress] = useState(0)
  const [thumb, setThumb] = useState(0.4)
  const [overflowing, setOverflowing] = useState(false)

  const update = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setOverflowing(max > 2)
    setCanPrev(el.scrollLeft > 2)
    setCanNext(el.scrollLeft < max - 2)
    setProgress(max > 0 ? Math.min(Math.max(el.scrollLeft / max, 0), 1) : 0)
    setThumb(Math.min(Math.max(el.clientWidth / el.scrollWidth, 0.15), 1))
  }, [])

  useEffect(() => {
    const el = trackRef.current
    if (!el) return
    update()
    el.addEventListener('scroll', update, { passive: true })
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => {
      el.removeEventListener('scroll', update)
      ro.disconnect()
    }
  }, [update])

  const scrollByPage = (dir: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' })
  }

  const arrowBtn =
    'flex h-10 w-10 items-center justify-center rounded-full border border-brand/40 text-brand transition-all duration-300 hover:bg-brand hover:text-white disabled:pointer-events-none disabled:opacity-30'

  return (
    <section id="clients" className="border-t border-[#ecebe7] bg-white py-14 md:py-24">
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:items-center lg:gap-14">
          <Reveal>
            <Label>Clients</Label>
            <h2 className="mt-6 text-[clamp(22px,1.75vw,25px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-5 max-w-[22em] text-[14.5px] md:text-[13px] leading-[2] tracking-[0.04em] text-[#666]">{t.lead[lang]}</p>
          </Reveal>

          <div className="min-w-0">
            <div className="relative">
              <ul
                ref={trackRef}
                tabIndex={0}
                role="region"
                aria-label={t.region[lang]}
                className="no-scrollbar -mx-6 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-pl-6 px-6 outline-none focus-visible:ring-2 focus-visible:ring-brand/40 md:-mx-10 md:scroll-pl-10 md:px-10 lg:mx-0 lg:scroll-pl-0 lg:gap-6 lg:px-0"
              >
                {clients.map((c) => (
                  <li key={c.name} className="group w-[58%] shrink-0 snap-start sm:w-[34%] lg:w-[27%]">
                    <div className="flex flex-col items-center text-center">
                      <div className="flex h-[72px] items-center">
                        <img
                          src={c.logo}
                          alt={lang === 'ja' ? c.name : c.nameEn}
                          loading="lazy"
                          decoding="async"
                          draggable={false}
                          className={`${c.logoClass ?? 'h-10 md:h-11'} w-auto max-w-[180px] object-contain transition-transform duration-500 group-hover:scale-105`}
                        />
                      </div>
                      <div className="mt-5 min-h-[3.2em]">
                        <p className="text-[15px] md:text-[14px] font-medium tracking-[0.05em] text-[#111]">{lang === 'ja' ? c.name : c.nameEn}</p>
                        {lang === 'ja' && c.reading && <p className="mt-0.5 text-[12px] tracking-[0.06em] text-[#777]">{c.reading}</p>}
                      </div>
                      <p className="mt-3 border border-brand/40 px-3 py-1 text-[11.5px] tracking-[0.06em] text-brand">{lang === 'ja' ? c.category : c.categoryEn}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Edge fades hint that more clients are off-screen */}
              <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 -right-6 w-14 bg-gradient-to-l from-white via-white/80 to-transparent transition-opacity duration-300 md:-right-10 lg:right-0 ${canNext ? 'opacity-100' : 'opacity-0'}`} />
              <span aria-hidden="true" className={`pointer-events-none absolute inset-y-0 -left-6 w-14 bg-gradient-to-r from-white via-white/80 to-transparent transition-opacity duration-300 md:-left-10 lg:left-0 ${canPrev ? 'opacity-100' : 'opacity-0'}`} />
            </div>

            {overflowing && (
              <div className="mt-8 flex items-center gap-5">
                <div aria-hidden="true" className="relative h-[2px] flex-1 overflow-hidden rounded-full bg-[#e6ebf4]">
                  <span
                    className="absolute inset-y-0 rounded-full bg-gradient-to-r from-brand-sky to-brand transition-[left] duration-200"
                    style={{ width: `${thumb * 100}%`, left: `${(1 - thumb) * progress * 100}%` }}
                  />
                </div>
                <div className="flex gap-2">
                  <button type="button" onClick={() => scrollByPage(-1)} disabled={!canPrev} aria-label={t.prev[lang]} className={arrowBtn}>
                    <ArrowLeft size={16} strokeWidth={1.5} />
                  </button>
                  <button type="button" onClick={() => scrollByPage(1)} disabled={!canNext} aria-label={t.next[lang]} className={arrowBtn}>
                    <ArrowRight size={16} strokeWidth={1.5} />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
