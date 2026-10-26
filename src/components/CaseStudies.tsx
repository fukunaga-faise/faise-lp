'use client'

import { useLanguage, type Lang } from '@/lib/language'
import Link from 'next/link'
import { CountUp, Label, Reveal, container } from './ui'

// 実績は提供資料に基づく3件。数値は変更・追加・推測しないこと。
// TODO（公開前に確認）:
//  - 実績の対象期間 / 数値の比較条件（何と何を比べた倍率・削減率か）
//  - 公開可能な企業名・画像・ロゴ（現状は社名・ロゴ非掲載）
//  - Faise法人の実績か、代表者の過去の担当実績か（現状は注記で「代表者の過去の担当案件を含みます」と明記）
// 画像（public/images/redesign/case-*.jpg）はすべて AI 生成の仮素材。実案件の画像が用意できたら差し替える。
type Case = {
  num: string
  img: string
  alt: Record<Lang, string>
  category: string
  title: Record<Lang, string>
  metric: { label: Record<Lang, string>; value: number; unit: Record<Lang, string>; sub?: Record<Lang, string> }
  body: Record<Lang, string>
  actions: Record<Lang, string[]>
  detail?: { href: string; label: Record<Lang, string> }
}

const cases: Case[] = [
  {
    num: '01',
    img: 'case-ec',
    alt: { ja: 'プレミアムスキンケア商品のイメージ（仮画像）', en: 'Premium skincare products (placeholder image)' },
    category: 'BEAUTY EC',
    title: { ja: '美容オンラインEC', en: 'Beauty online store' },
    metric: { label: { ja: '1年間で', en: 'In one year' }, value: 10, unit: { ja: '倍', en: '×' }, sub: { ja: '月間売上の成長', en: 'growth in monthly sales' } },
    body: {
      ja: 'ECサイトの購入導線設計やブランディングの見直し、アップセル・クロスセル施策など、集客から購入までのマーケティングを改善。1年間で月間売上10倍の成長を実現しました。',
      en: 'Improved marketing from acquisition through purchase — redesigning the store’s purchase flow, revisiting branding, and running upsell and cross-sell measures. Monthly sales grew 10× in one year.',
    },
    actions: {
      ja: ['ECサイト・購入導線の設計', 'ブランディング・訴求改善', 'アップセル・クロスセル施策'],
      en: ['Designing the online store and purchase flow', 'Branding and messaging improvements', 'Upsell and cross-sell measures'],
    },
  },
  {
    num: '02',
    img: 'case-gym',
    alt: { ja: 'パーソナルジムのトレーニング風景のイメージ（仮画像）', en: 'A personal gym training scene (placeholder image)' },
    category: 'FITNESS',
    title: { ja: 'パーソナルジム', en: 'Personal gym' },
    metric: { label: { ja: '月間新規入会者数', en: 'Monthly new members' }, value: 4, unit: { ja: '倍', en: '×' } },
    body: {
      ja: '著名人のSNSを活用した広告施策を展開。ターゲット層への認知拡大と入会促進につなげ、月間新規入会者数を4倍に拡大。',
      en: 'Ran ad campaigns using well-known figures’ social accounts, widening awareness among the target and driving sign-ups, growing monthly new members 4×.',
    },
    actions: {
      ja: ['SNS広告運用', '著名人のSNSコンテンツ活用', '新規入会促進'],
      en: ['Social ad operations', 'Using well-known figures’ social content', 'Driving new sign-ups'],
    },
  },
  {
    num: '03',
    img: 'case-clinic',
    alt: { ja: '美容クリニックの施術室のイメージ（仮画像）', en: 'A beauty clinic treatment room (placeholder image)' },
    category: 'BEAUTY CLINIC',
    title: { ja: '美容クリニック', en: 'Beauty clinic' },
    metric: { label: { ja: '顧客獲得単価（CPA）平均', en: 'Cost per acquisition (CPA), average' }, value: 35, unit: { ja: '%削減', en: '% lower' } },
    body: {
      ja: '美容インフルエンサーを活用した広告クリエイティブの制作・配信と、SNS広告の運用改善を実施。ターゲットに合った訴求を検証し、顧客獲得単価（CPA）を平均35%削減しました。',
      en: 'Produced and ran ad creatives featuring beauty influencers and improved social ad operations. By testing messages that fit the target, we cut cost per acquisition (CPA) by 35% on average.',
    },
    actions: {
      ja: ['美容インフルエンサーの起用', 'インフルエンサーコンテンツの広告活用', 'SNS広告運用・クリエイティブ改善'],
      en: ['Casting beauty influencers', 'Using influencer content in ads', 'Social ad operations and creative improvement'],
    },
    detail: { href: '/clinic', label: { ja: '美容クリニックの集客支援を見る', en: 'Marketing support for beauty clinics' } },
  },
]

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
