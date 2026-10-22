'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

type Service = {
  num: string
  img: string
  alt: Record<Lang, string>
  title: Record<Lang, string>
  body: Record<Lang, string>
  items: Record<Lang, string[]>
  clients: Record<Lang, string>
}

const services: Service[] = [
  {
    num: '01',
    img: 'svc4-produce',
    alt: { ja: '大水槽の前に集まり、楽しむ来場者', en: 'Visitors gathering to enjoy a giant aquarium tank' },
    title: { ja: '集客戦略・事業プロデュース', en: 'Acquisition Strategy & Business Producing' },
    body: {
      ja: '新規施設の立ち上げから既存事業の集客改善まで。市場や顧客を分析し、商品・サービスの魅力を引き出す戦略の立案から実行までを支援します。',
      en: 'From launching a new facility to improving an existing business. We analyze the market and customers, then plan and carry out a strategy that brings out what makes your product or service appealing.',
    },
    items: {
      ja: ['新規事業・施設の集客戦略', 'ターゲット・市場・競合分析', 'マーケティング戦略の立案', 'プロモーション企画・実行'],
      en: ['Acquisition strategy for new businesses and facilities', 'Target, market and competitor analysis', 'Marketing strategy planning', 'Promotion planning and execution'],
    },
    clients: {
      ja: 'テーマパーク、観光施設、商業施設、美容クリニック、各種サービス事業など。',
      en: 'Theme parks, tourist attractions, commercial facilities, beauty clinics, service businesses and more.',
    },
  },
  {
    num: '02',
    img: 'svc4-content',
    alt: { ja: 'カフェでの縦型動画の撮影風景', en: 'Shooting a vertical video at a cafe' },
    title: { ja: 'インフルエンサー・\nコンテンツマーケティング', en: 'Influencer &\nContent Marketing' },
    body: {
      ja: '商品やサービスの魅力を届けるインフルエンサーの起用から、SNSコンテンツの企画・制作、広告への活用までを一貫して支援します。',
      en: 'From casting influencers who can convey the appeal of your product or service, to planning and producing social content and putting it to work in ads.',
    },
    items: {
      ja: ['インフルエンサーキャスティング', 'SNSコンテンツ企画・制作', 'UGC・ショート動画制作', 'インフルエンサー投稿の広告活用'],
      en: ['Influencer casting', 'Social content planning and production', 'UGC and short-form video production', 'Using influencer posts in ads'],
    },
    clients: {
      ja: '美容、コスメ、エンタメ、観光、ライフスタイルブランドなど。',
      en: 'Beauty, cosmetics, entertainment, tourism, lifestyle brands and more.',
    },
  },
  {
    num: '03',
    img: 'svc4-ads',
    alt: { ja: '広告クリエイティブと分析資料を見ながら改善を進めるスタッフ', en: 'Staff improving ad creatives while reviewing performance data' },
    title: { ja: 'デジタル集客・広告運用', en: 'Digital Acquisition & Ad Operations' },
    body: {
      ja: 'Google・Metaなどのデジタル広告を活用し、認知獲得から予約・購入までの集客を支援。広告運用だけでなく、クリエイティブやLPの改善まで対応します。',
      en: 'Using digital ads such as Google and Meta, we support acquisition from awareness through to bookings and purchases — covering not only ad operations but also creative and landing page improvements.',
    },
    items: {
      ja: ['Google・Meta広告運用', 'SNS広告クリエイティブ制作', 'LP・予約導線の改善', 'CPA・コンバージョン改善'],
      en: ['Google and Meta ad operations', 'Social ad creative production', 'Landing page and booking flow improvements', 'CPA and conversion improvement'],
    },
    clients: {
      ja: '美容クリニック、EC、店舗、施設、各種サービス事業など。',
      en: 'Beauty clinics, e-commerce, stores, facilities, service businesses and more.',
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
  h2: { ja: ['事業の課題に合わせた、', '3つの支援領域。'], en: ['Three areas of support,', 'matched to your challenges.'] },
  lead: {
    ja: ['戦略立案からコンテンツ制作、集客施策の実行まで。', '事業のフェーズや課題に合わせて、必要な領域からご相談いただけます。'],
    en: ['From strategy to content production and acquisition campaigns.', 'Start with whichever area fits your stage and challenges.'],
  },
  itemsLabel: { ja: '対応内容', en: 'What we cover' },
  clientsLabel: { ja: '想定クライアント', en: 'Typical clients' },
  note: {
    ja: '各サービスは単体でもご相談いただけます。',
    en: 'Each service is also available on its own.',
  },
  faq: { ja: 'よくいただくご相談', en: 'Questions we hear often' },
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
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="mt-16 grid gap-10 border-t border-[#ecebe7] pt-10 md:mt-20 lg:grid-cols-2 lg:gap-14">
          <p className="flex items-start gap-3 text-[15px] md:text-[16px] font-medium leading-[1.9] tracking-[0.04em] text-[#111]">
            <span aria-hidden="true" className="mt-[0.8em] block h-px w-6 shrink-0 bg-gradient-to-r from-brand-sky to-brand" />
            {t.note[lang]}
          </p>
          <div>
            <h3 className="font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-brand">{t.faq[lang]}</h3>
            <ul className="mt-4 space-y-2.5">
              {faqs[lang].map((faq) => (
                <li key={faq} className="border-l-2 border-brand-sky/40 pl-3 text-[14.5px] md:text-[13px] leading-[1.9] tracking-[0.03em] text-[#555]">
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
