import type { Metadata } from 'next'
import ClinicPage from '@/components/ClinicPage'
import { clinicContent, clinicMeta } from '@/lib/clinic-content'
import { SITE_URL, ORG_ID } from '@/lib/site'
import { BUZZKURU_RELEASE } from '@/lib/press'
import type { Lang } from '@/lib/language'

export function clinicMetadata(lang: Lang): Metadata {
  const m = clinicMeta[lang]
  const path = lang === 'ja' ? '/clinic' : '/en/clinic'
  const og = lang === 'ja' ? '/og/clinic.jpg' : '/og/clinic-en.jpg'
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { ja: '/clinic', en: '/en/clinic', 'x-default': '/clinic' } },
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'article',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      url: `${SITE_URL}${path}`,
      siteName: lang === 'ja' ? '株式会社Faise' : 'Faise Inc.',
      images: [{ url: og, width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [og] },
  }
}

// 構造化データ（ページに表示している内容と同じ日本語テキストのみ）
const buildLd = (lang: Lang) => {
  const url = `${SITE_URL}${lang === 'ja' ? '/clinic' : '/en/clinic'}`
  return {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: lang === 'ja' ? '美容クリニックの集客支援' : 'Marketing support for beauty clinics',
      alternateName: lang === 'ja' ? '成果報酬型集客サービス「バズクル」' : 'Buzzkuru (バズクル), a pay-for-performance acquisition service',
      brand: { '@type': 'Brand', name: 'バズクル' },
      subjectOf: {
        '@type': 'NewsArticle',
        headline: BUZZKURU_RELEASE.headline,
        url: BUZZKURU_RELEASE.url,
        datePublished: BUZZKURU_RELEASE.date,
        publisher: { '@type': 'Organization', name: BUZZKURU_RELEASE.publisher },
        about: { '@id': ORG_ID },
      },
      serviceType: lang === 'ja' ? '美容クリニック向けマーケティング支援' : 'Marketing for beauty clinics',
      inLanguage: lang,
      description: clinicContent.hero.lead[lang],
      url,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: lang === 'ja' ? '日本' : 'Japan' },
      audience: { '@type': 'BusinessAudience', name: lang === 'ja' ? '美容クリニック' : 'Beauty clinics' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: lang === 'ja' ? '支援内容' : 'What we do',
        itemListElement: clinicContent.support.items.map((it) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: it.title[lang], description: it.body[lang] },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: clinicContent.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q[lang],
        acceptedAnswer: { '@type': 'Answer', text: f.a[lang] },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: clinicContent.breadcrumb.home[lang], item: `${SITE_URL}${lang === 'ja' ? '' : '/en'}` },
        { '@type': 'ListItem', position: 2, name: clinicContent.breadcrumb.here[lang], item: url },
      ],
    },
  ],
}
}

export default function ClinicView({ lang }: { lang: Lang }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLd(lang)) }} />
      <ClinicPage />
    </>
  )
}
