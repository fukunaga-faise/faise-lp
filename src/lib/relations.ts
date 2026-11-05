// サービス・事例・ガイド記事の関連づけ（内部リンクと構造化データで共通利用）。
// 事例の「実施施策」と、サービスの「対応内容」が重なるものだけを結びつける。

export const caseServices: Record<string, string[]> = {
  'beauty-ec': ['strategy', 'digital-ads'],
  'personal-gym': ['influencer-marketing', 'digital-ads'],
  'beauty-clinic': ['influencer-marketing', 'digital-ads'],
}

export const serviceGuides: Record<string, string[]> = {
  strategy: ['acquisition-methods'],
  'influencer-marketing': ['influencer-marketing', 'medical-ad-guidelines'],
  'digital-ads': ['reduce-cpa', 'acquisition-methods'],
}

// 事例ページの URL（美容クリニックは専用ページ /clinic）
export const caseHref = (slug: string) => (slug === 'beauty-clinic' ? '/clinic' : `/works/${slug}`)

export const servicesForCase = (caseSlug: string) => caseServices[caseSlug] ?? []
export const casesForService = (serviceSlug: string) =>
  Object.entries(caseServices)
    .filter(([, svcs]) => svcs.includes(serviceSlug))
    .map(([c]) => c)
