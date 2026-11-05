import type { Lang } from './language'

// トップの「よくあるご質問」。表示と FAQPage 構造化データで共通利用する。
// ※サイト掲載済みの事実のみ（サービス・実績・会社概要・問い合わせフォームの記載）。
type L = Record<Lang, string>

export const companyFaq: { q: L; a: L }[] = [
  {
    q: { ja: '株式会社Faiseはどんな会社ですか？', en: 'What kind of company is Faise?' },
    a: {
      ja: '「人が集まる理由を、設計する。」を掲げるマーケティング会社です。集客戦略・事業プロデュース、インフルエンサー・コンテンツマーケティング、デジタル集客・広告運用の3つの領域で、戦略から実行まで一貫して支援します。',
      en: 'A marketing company built around designing the reason people gather. We support strategy through execution across three areas: acquisition strategy and business producing, influencer and content marketing, and digital acquisition and ad operations.',
    },
  },
  {
    q: { ja: 'どのような業界に対応していますか？', en: 'Which industries do you work with?' },
    a: {
      ja: 'テーマパーク、観光施設、商業施設、美容クリニック、EC、店舗、コスメ・美容ブランド、エンタメ、ライフスタイルブランド、各種サービス事業などを想定しています。美容オンラインEC、パーソナルジム、美容クリニックでの実績があります。',
      en: 'Theme parks, tourist attractions, commercial facilities, beauty clinics, e-commerce, stores, cosmetics and beauty brands, entertainment, lifestyle brands and service businesses. We have results with a beauty online store, a personal gym and a beauty clinic.',
    },
  },
  {
    q: { ja: '一部の領域だけ依頼することはできますか？', en: 'Can we ask for just one area?' },
    a: {
      ja: 'はい。すべてをまとめてではなく、課題やフェーズに応じて、必要な領域からご相談いただけます。',
      en: 'Yes. You don’t need to take everything at once — start with the area that fits your challenge and stage.',
    },
  },
  {
    q: { ja: '新しい事業や施設の立ち上げ前でも相談できますか？', en: 'Can we consult before launching a new business or facility?' },
    a: {
      ja: 'はい。新規事業や施設の立ち上げ時の集客戦略から、実行までを支援しています。',
      en: 'Yes. We support acquisition strategy and execution when launching a new business or facility.',
    },
  },
  {
    q: { ja: '成果報酬型のプランはありますか？', en: 'Do you offer pay-for-performance plans?' },
    a: {
      ja: '美容クリニック向けに、成果報酬型集客サービス「バズクル」を提供しています。初期費用・キャスティング費・月額固定費は0円で、広告費はクリニック様のご負担、成果報酬は成果1件ごとに個別に設定します。',
      en: 'For beauty clinics, we offer Buzzkuru, a pay-for-performance service: ¥0 initial, casting and fixed monthly fees; ad spend is paid by the clinic and the fee per result is set individually.',
    },
  },
  {
    q: { ja: '問い合わせ後、どのくらいで連絡がもらえますか？', en: 'How soon will you respond to an inquiry?' },
    a: {
      ja: '内容を確認のうえ、2営業日以内にご連絡いたします。',
      en: 'We review your message and respond within 2 business days.',
    },
  },
]
