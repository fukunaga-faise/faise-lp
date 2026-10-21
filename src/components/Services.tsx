'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

type Service = {
  num: string
  img: string
  title: Record<Lang, string>
  body: Record<Lang, string>
}

const services: Service[] = [
  {
    num: '01',
    img: 'svc-strategy',
    title: { ja: '戦略・企画', en: 'Strategy & Planning' },
    body: {
      ja: 'マーケティング戦略の立案から、ターゲット・競合分析、商品やサービスの訴求設計まで。',
      en: 'From drafting marketing strategy to target and competitor analysis and appeal design for products and services.',
    },
  },
  {
    num: '02',
    img: 'svc-creative',
    title: { ja: 'クリエイティブ', en: 'Creative' },
    body: {
      ja: 'インフルエンサーを活用したコンテンツ制作や、UGC・ショート動画広告の企画・制作。',
      en: 'Influencer-driven content, plus planning and production of UGC and short-form video ads.',
    },
  },
  {
    num: '03',
    img: 'svc-ads',
    title: { ja: '集客・広告運用', en: 'Acquisition & Ads' },
    body: {
      ja: 'SNS広告やインフルエンサーマーケティングを通じて、予約・購入などの成果を獲得。',
      en: 'Driving bookings and purchases through social ads and influencer marketing.',
    },
  },
  {
    num: '04',
    img: 'svc-analytics',
    title: { ja: '分析・改善', en: 'Analysis & Optimization' },
    body: {
      ja: '広告効果の分析とCPA・獲得効率の改善を通じて、継続的な成果向上を支援。',
      en: 'Continuous gains through ad performance analysis and improving CPA and acquisition efficiency.',
    },
  },
]

const faqs: Record<Lang, string[]> = {
  ja: [
    'インフルエンサーを使いたいが、誰を起用すべきか分からない',
    '広告のCPAが上がり続けている',
    '動画は出しているが、予約につながらない',
    '開業したが、認知が広がらない',
  ],
  en: [
    'I want to use influencers, but I don’t know who to cast.',
    'My ad CPA keeps rising.',
    'We post videos, but they don’t lead to bookings.',
    'We’ve opened, but awareness isn’t growing.',
  ],
}

const t = {
  h2: { ja: ['事業の成長を支える、', '4つのサービス。'], en: ['Four services', 'that power business growth.'] },
  lead: {
    ja: '戦略から実行、改善まで、一気通貫でマーケティングの課題を解決します。',
    en: 'From strategy to execution and improvement, we solve your marketing challenges end to end.',
  },
  note: {
    ja: ['「動画だけ」「広告だけ」のご相談もお受けしています。', 'ただ、理由が決まっていないまま進めると成果が出にくいので、', 'その場合は01からご提案します。'],
    en: ['We’re happy to help with just video, or just ads.', 'But without a clear reason in place first, results tend to be weak —', 'so in that case, we’ll suggest starting from 01.'],
  },
  faq: { ja: 'よくいただくご相談', en: 'Questions we hear often' },
}

export default function Services() {
  const { lang } = useLanguage()

  return (
    <section id="service" className="border-t border-[#ecebe7] bg-white py-20 md:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>Service</Label>
            <h2 className="mt-6 text-[clamp(22px,1.9vw,28px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-6 max-w-[22em] text-[13px] leading-[2] tracking-[0.04em] text-[#666]">{t.lead[lang]}</p>
          </Reveal>

          <ul className="grid grid-cols-2 gap-x-5 gap-y-10 md:gap-x-6 lg:grid-cols-4">
            {services.map((s, i) => (
              <li key={s.num} className="group">
                <Reveal delay={i * 0.08}>
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#f1f0ec]">
                    <span className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-sky to-brand transition-transform duration-500 group-hover:scale-x-100" />
                    <img
                      src={`/images/redesign/${s.img}.jpg`}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <h3 className="mt-5 flex items-baseline gap-3 text-[15px] md:text-[16px] font-medium tracking-[0.06em] text-[#111] transition-colors duration-300 group-hover:text-brand">
                    <span className="font-inter text-[13px] font-medium tracking-[0.08em] text-brand-sky">{s.num}</span>
                    {s.title[lang]}
                  </h3>
                  <p className="mt-3 text-[12.5px] md:text-[13px] leading-[1.95] tracking-[0.03em] text-[#666]">{s.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>

        {/* Existing guidance copy, kept as a quiet footer row */}
        <Reveal className="mt-16 grid gap-10 border-t border-[#ecebe7] pt-10 md:mt-20 lg:grid-cols-2 lg:gap-14">
          <p className="text-[12px] sm:text-[13px] md:text-[14px] leading-[2] tracking-[0.02em] sm:tracking-[0.04em] text-[#555]">
            {t.note[lang].map((line, i) => (
              <span key={i}>
                {line}
                {i < t.note[lang].length - 1 && <br />}
              </span>
            ))}
          </p>
          <div>
            <h3 className="font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-brand">{t.faq[lang]}</h3>
            <ul className="mt-4 space-y-2.5">
              {faqs[lang].map((faq) => (
                <li key={faq} className="border-l-2 border-brand-sky/40 pl-3 text-[13px] leading-[1.9] tracking-[0.03em] text-[#666]">
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
