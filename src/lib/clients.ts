// クライアント一覧（CLIENTS のスライダーと、ヒーロー直下のロゴ帯の両方で使用）。
// 増やすときは clients に追記するだけでよい（新しいものを後ろに）。
// 既存3社は掲載順・表記・ロゴとも現行サイトのまま。logoClass はロゴごとの表示サイズ調整用。
export type Client = {
  name: string
  nameEn: string
  reading?: string
  category: string
  categoryEn: string
  logo: string
  logoClass?: string // CLIENTS セクションでのロゴサイズ
  stripClass?: string // ヒーロー直下のロゴ帯でのロゴサイズ
}

export const clients: Client[] = [
  { name: '吉本興業', nameEn: 'Yoshimoto Kogyo', category: 'エンタメ', categoryEn: 'Entertainment', logo: '/images/logo-yoshimoto-new.svg' },
  { name: 'eLife株式会社', nameEn: 'eLife Inc.', category: '医療・ヘルスケア', categoryEn: 'Healthcare', logo: '/images/logo-elife-new.svg' },
  { name: 'wellnessplus株式会社', nameEn: 'wellnessplus Inc.', category: 'フィットネス・ウェルネス', categoryEn: 'Fitness & Wellness', logo: '/images/logo-wellnessplus-new.webp' },
  { name: 'HALILON Oral Studio', nameEn: 'HALILON Oral Studio', reading: 'ハリロンオーラルスタジオ', category: '医療ホワイトニング', categoryEn: 'Medical Whitening Clinic', logo: '/images/logo-halilon.png', logoClass: 'h-[68px] md:h-[72px]', stripClass: 'h-12 md:h-[52px]' },
  { name: 'AQUATECH', nameEn: 'AQUATECH', reading: 'アクアテック', category: 'エネルギー、生活・健康', categoryEn: 'Energy, Lifestyle & Health', logo: '/images/logo-aquatech.png', logoClass: 'h-[22px] md:h-[24px]', stripClass: 'h-4 md:h-[18px]' },
]
