'use client'

import { useLanguage } from '@/lib/language'
import { cases } from '@/lib/cases'
import Link from 'next/link'
import { CountUp, Label, Reveal, container } from './ui'

const t = {
  h2: { ja: ['成果につながった、', 'マーケティングの実績。'], en: ['Marketing work', 'that led to results.'] },
  lead: {
    ja: '美容・フィットネスなど、さまざまな事業の集客・売上改善を支援してきました。',
    en: 'We have supported acquisition and sales improvement for a range of businesses, including beauty and fitness.',
  },
  actionsLabel: { ja: '実施施策', en: 'What we did' },
}

export default function CaseStudies() {
  const { lang } = useLanguage()

  return (
    <section id="works" className="border-t border-[#ecebe7] bg-brand-tint py-14 md:py-28">
      <div className={container}>
        <Reveal className="max-w-3xl">
          <Label>Works / Case Studies</Label>
          <h2 className="mt-6 text-[clamp(22px,6.6vw,28px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(26px,2.6vw,38px)]">
            {t.h2[lang][0]}
            <br />
            {t.h2[lang][1]}
          </h2>
          <p className="mt-6 text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]">{t.lead[lang]}</p>
        </Reveal>

        <ul className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {cases.map((c, i) => (
            <li key={c.num} className="group">
              <Reveal delay={i * 0.08} className="flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f0ec]">
                  <span className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-sky to-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <img
                    src={`/images/redesign/${c.img}.jpg`}
                    alt={c.alt[lang]}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <p className="font-inter text-[11px] font-medium tracking-[0.24em] text-brand">{c.category}</p>
                  <p className="font-inter text-[12px] tracking-[0.12em] text-[#999]">CASE {c.num}</p>
                </div>
                <h3 className="mt-2 text-[19px] md:text-[20px] font-medium leading-[1.55] tracking-[0.04em] text-[#111]">{c.title[lang]}</h3>

                <div className="mt-5 border-y border-[#ecebe7] py-5 lg:min-h-[168px]">
                  <p className="text-[13px] md:text-[13.5px] font-medium tracking-[0.04em] text-[#555]">{c.metric.label[lang]}</p>
                  <p className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="font-inter text-[56px] font-light leading-none tracking-[-0.01em] text-brand-gradient md:text-[64px]">
                      <CountUp to={c.metric.value} />
                    </span>
                    <span className="text-[20px] md:text-[22px] font-medium tracking-[0.04em] text-brand-navy">{c.metric.unit[lang]}</span>
                  </p>
                  {c.metric.sub && <p className="mt-2 text-[13px] md:text-[13.5px] font-medium tracking-[0.04em] text-[#555]">{c.metric.sub[lang]}</p>}
                </div>

                <p className="mt-5 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{c.body[lang]}</p>

                <div className="mt-6">
                  <p className="font-inter text-[11px] font-medium tracking-[0.24em] text-brand">{t.actionsLabel[lang]}</p>
                  <ul className="mt-3 space-y-2">
                    {c.actions[lang].map((a) => (
                      <li key={a} className="flex gap-2.5 text-[14px] md:text-[13.5px] leading-[1.75] tracking-[0.02em] text-[#222]">
                        <span aria-hidden="true" className="mt-[0.75em] h-[5px] w-[5px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>

                {c.detail && (
                  <div className="mt-auto pt-6">
                    <Link
                      href={c.detail.href}
                      className="group/link inline-flex items-center gap-2 text-[14px] md:text-[13.5px] font-medium tracking-[0.04em] text-brand transition-colors duration-300 hover:text-brand-navy"
                    >
                      <span className="border-b border-brand/40 pb-0.5 transition-colors duration-300 group-hover/link:border-brand-navy">{c.detail.label[lang]}</span>
                      <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                    </Link>
                  </div>
                )}
              </Reveal>
            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}
