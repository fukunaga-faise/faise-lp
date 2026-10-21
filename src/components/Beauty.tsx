'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { useLanguage, type Lang } from '@/lib/language'
import { ArrowLink, Label, Reveal, container } from './ui'

type Card = {
  id: string
  tag: string
  img: string
  title: Record<Lang, string>
  body: Record<Lang, string[]>
  listTitle: Record<Lang, string>
  list: Record<Lang, string[]>
  price?: { text: Record<Lang, string>; note: Record<Lang, string> }
}

const cards: Card[] = [
  {
    id: 'clinic',
    tag: 'For Clinic',
    img: 'beauty-clinic',
    title: { ja: '美容クリニック向け集客支援', en: 'Patient acquisition for beauty clinics' },
    body: {
      ja: [
        'インフルエンサーによる施術体験を広告クリエイティブとして活用し、新規患者の獲得を支援します。',
        'キャスティングからコンテンツ制作、広告運用、効果改善まで一貫して対応します。',
      ],
      en: [
        'We turn influencers’ treatment experiences into ad creative to help win new patients.',
        'We handle everything from casting and content production to ad operations and performance improvement.',
      ],
    },
    listTitle: { ja: '特徴', en: 'Features' },
    list: {
      ja: [
        '美容インフルエンサーのキャスティング',
        '施術体験コンテンツ制作',
        'インフルエンサー投稿の広告活用',
        'SNS広告運用・改善',
        'LINE登録・予約獲得',
      ],
      en: [
        'Casting beauty influencers',
        'Treatment-experience content production',
        'Using influencer posts as ads',
        'Social ad operations & optimization',
        'LINE sign-ups & booking acquisition',
      ],
    },
    price: {
      text: {
        ja: '初期費用・月額固定費0円の成果報酬型プランにも対応',
        en: 'Pay-for-performance plans available with ¥0 initial fee and ¥0 fixed monthly fee',
      },
      note: {
        ja: '※広告費は別途。成果地点・報酬額は個別設定。',
        en: '※Ad spend is separate. Conversion points and reward amounts are set individually.',
      },
    },
  },
  {
    id: 'cosme',
    tag: 'For Cosme Brand',
    img: 'beauty-cosme',
    title: { ja: 'コスメ・美容ブランド向け\nマーケティング支援', en: 'Marketing support for\ncosmetics & beauty brands' },
    body: {
      ja: [
        '美容インフルエンサーを活用したPR施策やSNS広告を通じて、ブランドの認知拡大から商品の販売促進まで支援します。',
        '商品の特性やターゲットに合わせたコンテンツ制作から広告運用まで、一貫して対応します。',
      ],
      en: [
        'Through PR campaigns with beauty influencers and social ads, we support everything from brand awareness to product sales.',
        'We handle everything from content tailored to product traits and target audiences through to ad operations.',
      ],
    },
    listTitle: { ja: '主な支援内容', en: 'What we support' },
    list: {
      ja: [
        '美容インフルエンサーのキャスティング',
        '商品PR・UGC制作',
        'SNS広告クリエイティブ制作',
        'Instagram・TikTokなどの広告運用',
        'EC販売促進・テストマーケティング',
      ],
      en: [
        'Casting beauty influencers',
        'Product PR & UGC production',
        'Social ad creative production',
        'Ad operations on Instagram, TikTok and more',
        'E-commerce sales promotion & test marketing',
      ],
    },
  },
]

const t = {
  h2: { ja: '美容領域の集客・販売を支援。', en: 'Driving acquisition and sales in beauty.' },
  body: {
    ja: [
      '美容クリニックの新規患者獲得から、美容ブランドの商品認知・販売促進まで。',
      'インフルエンサーとSNS広告を活用し、企画から実行、改善まで一貫して支援します。',
    ],
    en: [
      'From winning new patients for beauty clinics to building awareness and sales for beauty brands.',
      'Using influencers and social ads, we support everything from planning through execution and improvement.',
    ],
  },
  more: { ja: 'View More', en: 'View More' },
  contact: { ja: 'お問い合わせ', en: 'Contact' },
}

export default function Beauty() {
  const { lang } = useLanguage()
  const reduce = useReducedMotion()

  return (
    <section id="beauty" className="border-t border-[#ecebe7] bg-white">
      {/* Banner */}
      <div className="relative overflow-hidden bg-[#f3f2ee]">
        <motion.img
          src="/images/redesign/beauty-banner.jpg"
          alt=""
          loading="lazy"
          decoding="async"
          initial={reduce ? false : { scale: 1.1 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-y-0 right-0 hidden h-full w-[62%] object-cover object-[60%_50%] md:block"
        />
        <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-r from-[#f3f2ee] from-[38%] via-[#f3f2ee]/70 to-transparent md:block" />

        <div className="aspect-[16/8] overflow-hidden md:hidden">
          <img src="/images/redesign/beauty-banner.jpg" alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-[60%_50%]" />
        </div>

        <div className={`${container} relative py-14 md:py-24`}>
          <Reveal className="max-w-[640px]">
            <Label>Beauty &amp; Healthcare</Label>
            <h2 className="mt-6 text-[21px] sm:text-[24px] md:text-[clamp(26px,3vw,42px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111]">{t.h2[lang]}</h2>
            <p className="mt-6 text-[13px] md:text-[14px] leading-[2.1] tracking-[0.04em] text-[#555]">
              {t.body[lang][0]}
              <br className="hidden md:block" /> {t.body[lang][1]}
            </p>
            <div className="mt-9">
              <ArrowLink href="#beauty-detail">{t.more[lang]}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Two services */}
      <div id="beauty-detail" className="border-b border-[#ecebe7]">
        <div className={`${container} grid md:grid-cols-2 md:divide-x divide-[#ecebe7]`}>
          {cards.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.1} className={`h-full py-12 md:py-16 ${i === 0 ? 'md:pr-10 lg:pr-14' : 'md:pl-10 lg:pl-14'} ${i === 1 ? 'border-t border-[#ecebe7] md:border-t-0' : ''}`}>
              <div className="grid h-full gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.75fr)] lg:gap-8">
                <div className="order-2 lg:order-1">
                  <p className="font-inter text-[10px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-brand-sky">{c.tag}</p>
                  <h3 className="mt-4 whitespace-pre-line text-[clamp(20px,1.7vw,24px)] font-medium leading-[1.6] tracking-[0.03em] text-[#111]">
                    {c.title[lang]}
                  </h3>
                  <div className="mt-5 space-y-3 text-[12.5px] md:text-[13px] leading-[2] tracking-[0.03em] text-[#666]">
                    {c.body[lang].map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>

                  <p className="mt-7 font-inter text-[10px] md:text-[11px] font-medium tracking-[0.22em] uppercase text-brand">{c.listTitle[lang]}</p>
                  <ul className="mt-3 space-y-1.5">
                    {c.list[lang].map((item) => (
                      <li key={item} className="flex gap-2.5 text-[12.5px] md:text-[13px] leading-[1.8] tracking-[0.03em] text-[#555]">
                        <span className="mt-[0.75em] block h-[4px] w-[4px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {c.price && (
                    <div className="mt-7 rounded-sm border-l-[3px] border-brand bg-brand-tint px-4 py-4">
                      <p className="text-[12px] md:text-[13px] font-medium leading-[1.8] tracking-[0.02em] text-brand-navy">{c.price.text[lang]}</p>
                      <p className="mt-1.5 text-[11px] leading-[1.8] tracking-[0.03em] text-[#999]">{c.price.note[lang]}</p>
                    </div>
                  )}

                  <div className="mt-8">
                    <ArrowLink href="#contact">{t.contact[lang]}</ArrowLink>
                  </div>
                </div>

                <div className="group order-1 aspect-[4/3] overflow-hidden bg-[#f1f0ec] lg:order-2 lg:aspect-auto lg:min-h-[320px]">
                  <img
                    src={`/images/redesign/${c.img}.jpg`}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.05]"
                  />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
