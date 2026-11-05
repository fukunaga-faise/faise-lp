import { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { guides } from '@/lib/clinic-guides'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/clinic`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    ...services.map((s) => ({ url: `${SITE_URL}/services/${s.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    ...cases
      .filter((c) => c.slug !== 'beauty-clinic')
      .map((c) => ({ url: `${SITE_URL}/works/${c.slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.7 })),
    { url: `${SITE_URL}/clinic/guide`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    ...guides.map((g) => ({
      url: `${SITE_URL}/clinic/guide/${g.slug}`,
      lastModified: new Date(g.updated),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    })),
  ]
}
