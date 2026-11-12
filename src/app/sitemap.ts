import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { guides } from '@/lib/clinic-guides'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'

type Entry = MetadataRoute.Sitemap[number]

// 日本語のページ（英語サイトは Japan Launch LP だけなので、英語版の対応ページはない）
function page(path: string, priority: number, lastModified: Date): Entry[] {
  return [{ url: `${SITE_URL}${path === '/' ? '' : path}`, lastModified, changeFrequency: 'monthly', priority }]
}

// Japan Launch は英語版がメイン（x-default も英語）
function japanLaunch(lastModified: Date): Entry[] {
  const ja = `${SITE_URL}/japan-launch`
  const en = `${SITE_URL}/en/japan-launch`
  const alternates = { languages: { en, ja, 'x-default': en } }
  return [
    { url: en, lastModified, changeFrequency: 'monthly', priority: 0.8, alternates },
    { url: ja, lastModified, changeFrequency: 'monthly', priority: 0.6, alternates },
  ]
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    ...page('/', 1, now),
    ...page('/clinic', 0.8, now),
    ...japanLaunch(now),
    ...services.flatMap((s) => page(`/services/${s.slug}`, 0.7, now)),
    ...cases.filter((c) => c.slug !== 'beauty-clinic').flatMap((c) => page(`/works/${c.slug}`, 0.7, now)),
    { url: `${SITE_URL}/clinic/guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...guides.map((g) => ({
      url: `${SITE_URL}/clinic/guide/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
