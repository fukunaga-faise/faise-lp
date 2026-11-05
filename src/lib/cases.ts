import type { Lang } from './language'

// 実績は提供資料に基づく3件で、いずれも株式会社Faiseとしての実績（2026-11-05 代表者に確認済み）。数値は変更・追加・推測しないこと。
// TODO（公開前に確認）:
//  - 実績の対象期間 / 数値の比較条件（何と何を比べた倍率・削減率か）
//  - 公開可能な企業名・画像・ロゴ（現状は社名・ロゴ非掲載）
// 画像（public/images/redesign/case-*.jpg）はすべて AI 生成の仮素材。実案件の画像が用意できたら差し替える。
export type Case = {
  slug: string
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

export const cases: Case[] = [
  {
    slug: 'beauty-ec',
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
    detail: { href: '/works/beauty-ec', label: { ja: '事例の詳細を見る', en: 'Read the case' } },
  },
  {
    slug: 'personal-gym',
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
    detail: { href: '/works/personal-gym', label: { ja: '事例の詳細を見る', en: 'Read the case' } },
  },
  {
    slug: 'beauty-clinic',
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

