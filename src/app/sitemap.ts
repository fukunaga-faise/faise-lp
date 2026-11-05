import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { guides } from '@/lib/clinic-guides'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'

type Entry = MetadataRoute.Sitemap[number]

// 英語版があるページは ja / en の両方を載せ、互いを alternates で示す
function bilingual(path: string, priority: number, lastModified: Date): Entry[] {
  const ja = `${SITE_URL}${path === '/' ? '' : path}`
  const en = `${SITE_URL}/en${path === '/' ? '' : path}`
  const alternates = { languages: { ja, en, 'x-default': ja } }
  return [
    { url: ja, lastModified, changeFrequency: 'monthly', priority, alternates },
    { url: en, lastModified, changeFrequency: 'monthly', priority: Math.max(priority - 0.2, 0.3), alternates },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...bilingual('/', 1, now),
    ...bilingual('/clinic', 0.8, now),
    ...services.flatMap((s) => bilingual(`/services/${s.slug}`, 0.7, now)),
    ...cases.filter((c) => c.slug !== 'beauty-clinic').flatMap((c) => bilingual(`/works/${c.slug}`, 0.7, now)),
    { url: `${SITE_URL}/clinic/guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...guides.map((g) => ({
      url: `${SITE_URL}/clinic/guide/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
