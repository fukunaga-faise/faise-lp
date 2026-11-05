'use client'

import Link from 'next/link'
import { useLanguage, type Lang } from '@/lib/language'
import { services } from '@/lib/services'
import { Label, Reveal, container } from './ui'

const faqs: Record<Lang, string[]> = {
  ja: [
    'インフルエンサーを活用したいが、誰を起用すべきか分からない',
    '広告のCPAが上がり続けている',
    'SNSや動画は出しているが、予約や購入につながらない',
    '新規事業や新店舗の認知を広げたい',
  ],
  en: [
    'I want to use influencers, but I don’t know who to cast.',
    'My ad CPA keeps rising.',
    'We post on social and video, but it doesn’t lead to bookings or purchases.',
    'I want to build awareness for a new business or a new store.',
  ],
}

const t = {
  h2: { ja: ['事業の課題に合わせた、', '3つの支援領域。'], en: ['Three areas of support,', 'matched to your challenges.'] },
  lead: {
    ja: ['戦略立案からコンテンツ制作、集客施策の実行まで。', '事業のフェーズや課題に合わせて、必要な領域からご相談いただけます。'],
    en: ['From strategy to content production and acquisition campaigns.', 'Start with whichever area fits your stage and challenges.'],
  },
  itemsLabel: { ja: '対応内容', en: 'What we cover' },
  clientsLabel: { ja: '想定クライアント', en: 'Typical clients' },
  note: {
    title: { ja: '必要な領域から、ご相談ください。', en: 'Start with the area you need.' },
    body: {
      ja: ['戦略設計からコンテンツ制作、広告運用まで。', 'すべてをまとめてではなく、課題やフェーズに応じたご相談にも対応しています。'],
      en: ['From strategy to content production and ad operations.', 'You don’t need to take everything at once — we’re happy to discuss just what fits your challenge and stage.'],
    },
  },
  faq: { ja: 'このようなご相談をいただいています', en: 'Topics clients bring to us' },
}

export default function Services() {
  const { lang } = useLanguage()

  return (
    <section id="service" className="border-t border-[#ecebe7] bg-white py-14 md:py-28">
      <div className={container}>
        <Reveal className="max-w-3xl">
          <Label>Our Services</Label>
          <h2 className="mt-6 text-[clamp(24px,2.6vw,38px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111]">
            {t.h2[lang][0]}
            <br />
            {t.h2[lang][1]}
          </h2>
          <p className="mt-6 text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]">
            {t.lead[lang][0]}
            <br className="hidden md:block" />
            {t.lead[lang][1]}
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-14 md:mt-16 lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {services.map((s, i) => (
            <li key={s.num} className="group">
              <Reveal delay={i * 0.08} className="flex h-full flex-col">
                <div className="relative aspect-[3/2] overflow-hidden bg-[#f1f0ec]">
                  <span className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-sky to-brand transition-transform duration-500 group-hover:scale-x-100" />
                  <img
                    src={`/images/redesign/${s.img}.jpg`}
                    alt={s.alt[lang]}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>

                <div className="mt-6 flex items-start gap-4">
                  <span className="pt-[3px] font-inter text-[15px] font-medium tracking-[0.1em] text-brand-gradient">{s.num}</span>
                  <h3 className="whitespace-pre-line text-[17px] min-[360px]:text-[19px] md:text-[20px] font-medium leading-[1.55] tracking-[0.04em] text-[#111] transition-colors duration-300 group-hover:text-brand lg:min-h-[3.1em]">
                    {s.title[lang]}
                  </h3>
                </div>

                <p className="mt-4 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{s.body[lang]}</p>

                <div className="mt-6">
                  <p className="font-inter text-[11px] font-medium tracking-[0.24em] text-brand">{t.itemsLabel[lang]}</p>
                  <ul className="mt-3 space-y-2">
                    {s.items[lang].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[14px] md:text-[13.5px] leading-[1.75] tracking-[0.02em] text-[#222]">
                        <span aria-hidden="true" className="mt-[0.75em] h-[5px] w-[5px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-7">
                  <div className="border-t border-[#ecebe7] pt-5">
                    <p className="font-inter text-[11px] font-medium tracking-[0.24em] text-[#777]">{t.clientsLabel[lang]}</p>
                    <p className="mt-2 text-[13.5px] md:text-[13px] leading-[1.85] tracking-[0.02em] text-[#555] lg:min-h-[3.7em]">{s.clients[lang]}</p>
                  </div>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group/link mt-5 inline-flex items-center gap-2 text-[14px] md:text-[13.5px] font-medium tracking-[0.04em] text-brand transition-colors duration-300 hover:text-brand-navy"
                  >
                    <span className="border-b border-brand/40 pb-0.5 group-hover/link:border-brand-navy">{lang === 'ja' ? '詳しく見る' : 'Learn more'}</span>
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-14 grid gap-8 border-t border-[#ecebe7] pt-9 md:mt-16 md:pt-11 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
          <div>
            <h3 className="text-[19px] md:text-[22px] font-medium leading-[1.6] tracking-[0.04em] text-[#111]">{t.note.title[lang]}</h3>
            <p className="mt-4 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">
              {t.note.body[lang][0]}
              <br className="hidden md:block" />
              {t.note.body[lang][1]}
            </p>
          </div>
          <div>
            <p className="text-[13.5px] md:text-[13px] font-medium tracking-[0.06em] text-brand">{t.faq[lang]}</p>
            <ul className="mt-4 space-y-2.5">
              {faqs[lang].map((faq) => (
                <li key={faq} className="border-l-2 border-brand-sky/50 pl-4 text-[14.5px] md:text-[13.5px] leading-[1.8] tracking-[0.02em] text-[#333]">
                  {faq}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
