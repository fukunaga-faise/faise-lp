import type { Lang } from './language'

// トップの「3つの支援領域」と /services/[slug] で共通利用する。文言は事実のみ。
export type Service = {
  slug: string
  num: string
  img: string
  alt: Record<Lang, string>
  title: Record<Lang, string>
  body: Record<Lang, string>
  items: Record<Lang, string[]>
  clients: Record<Lang, string>
}

export const services: Service[] = [
  {
    slug: 'strategy',
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
    slug: 'influencer-marketing',
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
    slug: 'digital-ads',
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

