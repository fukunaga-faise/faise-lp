'use client'

import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

const t = {
  h2: { ja: ['数字で見る', 'Faiseの強み'], en: ['Faise’s strengths', 'by the numbers'] },
  items: [
    {
      big: { ja: ['5,000', '名以上'], en: ['5,000', '+'] },
      pre: { ja: '', en: '' },
      cap: { ja: '美容系インフルエンサーネットワーク', en: 'Beauty influencer network' },
      sub: { ja: '（美容領域）', en: '(beauty field)' },
    },
    {
      big: { ja: ['8', '倍'], en: ['8', '×'] },
      pre: { ja: '最大', en: 'Up to' },
      cap: { ja: '広告活用による予約数増加事例', en: 'Booking increase from using ads' },
      sub: { ja: '（美容クリニック領域）', en: '(beauty clinic case)' },
    },
    {
      big: { ja: ['成果報酬型プラン', ''], en: ['Pay-for-performance', ''] },
      pre: { ja: '', en: '' },
      cap: { ja: '', en: '' },
      sub: { ja: '（美容クリニック向けに対応）', en: '(available for beauty clinics)' },
    },
  ],
  notes: {
    ja: [
      '※数値は一例です。施術内容や条件により成果は異なり、成果を保証するものではありません。',
      '※「最大8倍」は、投稿のみの期間と広告配信後の期間の予約数を比較した事例です。',
      '※成果報酬型プランの広告費は別途。成果地点・報酬額は個別設定。',
    ],
    en: [
      '※Figures are examples; results vary by treatment and conditions and are not guaranteed.',
      '※“Up to 8×” compares bookings during a posts-only period with the period after ads began.',
      '※For pay-for-performance plans, ad spend is separate; conversion points and reward amounts are set individually.',
    ],
  },
}

export default function Strength() {
  const { lang } = useLanguage()

  return (
    <section id="strength" className="border-t border-[#ecebe7] bg-white py-16 md:py-20">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>Strength</Label>
            <h2 className="mt-5 text-[clamp(20px,1.9vw,26px)] font-medium leading-[1.7] tracking-[0.04em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
          </Reveal>

          <ul className="grid divide-y divide-[#ecebe7] md:grid-cols-3 md:divide-x md:divide-y-0">
            {t.items.map((it, i) => (
              <li key={i} className="px-0 py-8 text-center first:pt-0 md:px-6 md:py-2 md:first:pt-2">
                <Reveal delay={i * 0.08}>
                  {it.big[lang][1] === '' ? (
                    <p className="font-medium text-[clamp(20px,2vw,28px)] leading-[1.5] tracking-[0.06em] text-[#111] md:pt-3">{it.big[lang][0]}</p>
                  ) : (
                    <p className="flex items-baseline justify-center gap-1.5 text-[#111]">
                      {it.pre[lang] && <span className="text-[13px] font-medium tracking-[0.06em]">{it.pre[lang]}</span>}
                      <span className="font-inter text-[clamp(38px,4vw,56px)] font-light leading-none tracking-[0.01em]">{it.big[lang][0]}</span>
                      <span className="text-[14px] md:text-[16px] font-medium tracking-[0.06em]">{it.big[lang][1]}</span>
                    </p>
                  )}
                  {it.cap[lang] && <p className="mt-4 text-[12px] md:text-[12.5px] leading-[1.8] tracking-[0.04em] text-[#666]">{it.cap[lang]}</p>}
                  <p className="mt-1 text-[12px] leading-[1.8] tracking-[0.04em] text-[#999]">{it.sub[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        <ul className="mt-10 space-y-1 text-[11px] leading-[1.9] tracking-[0.03em] text-[#999] lg:ml-[calc(25%+42px)]">
          {t.notes[lang].map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
