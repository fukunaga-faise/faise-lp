'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 業種ごとのイメージ写真のみ。個別の実績事例・数値は掲載しない（以前非表示にした内容は復活させない）。
const industries: { img: string; label: Record<Lang, string> }[] = [
  { img: 'works-fitness', label: { ja: 'フィットネス', en: 'Fitness' } },
  { img: 'beauty-clinic', label: { ja: '美容・ヘルスケア', en: 'Beauty & Healthcare' } },
  { img: 'hero-leisure', label: { ja: 'エンタメ・レジャー', en: 'Entertainment & Leisure' } },
  { img: 'hero-mall', label: { ja: '商業施設', en: 'Commercial Facilities' } },
  { img: 'hero-resort', label: { ja: 'ホテル・観光', en: 'Hotels & Tourism' } },
]

const t = {
  h2: { ja: ['さまざまな業界で、', '確かな成果を。'], en: ['Solid results', 'across many industries.'] },
  lead: {
    ja: '美容・ヘルスケア領域をはじめ、さまざまな業界の事業を支援しています。',
    en: 'Focusing on beauty and healthcare, we support businesses across many industries.',
  },
  industryNote: { ja: '対応業種の一例', en: 'Examples of industries we support' },
}

export default function Works() {
  const { lang } = useLanguage()

  return (
    <section id="works" className="border-t border-[#ecebe7] bg-white py-20 md:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>Works</Label>
            <h2 className="mt-6 text-[clamp(22px,1.9vw,28px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-6 max-w-[22em] text-[13px] leading-[2] tracking-[0.04em] text-[#666]">{t.lead[lang]}</p>
          </Reveal>

          <div>
            <p className="mb-4 font-inter text-[10px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-[#999]">{t.industryNote[lang]}</p>
            <ul className="no-scrollbar -mx-6 flex scroll-pl-6 md:scroll-pl-10 snap-x gap-4 overflow-x-auto px-6 md:-mx-10 md:px-10 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-x-5">
              {industries.map((it, i) => (
                <li key={it.img} className="w-[58%] shrink-0 snap-start sm:w-auto">
                  <Reveal delay={i * 0.07}>
                    <div className="aspect-[4/3] overflow-hidden bg-[#f1f0ec] lg:aspect-[3/4]">
                      <img
                        src={`/images/redesign/${it.img}.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-3 text-[12.5px] md:text-[13px] font-medium tracking-[0.06em] text-[#111]">{it.label[lang]}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
