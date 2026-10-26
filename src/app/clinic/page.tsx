import type { Metadata } from 'next'
import ClinicPage from '@/components/ClinicPage'
import { clinicContent, clinicMeta } from '@/lib/clinic-content'
import { SITE_URL, ORG_ID } from '@/lib/site'

const url = `${SITE_URL}/clinic`

export const metadata: Metadata = {
  title: clinicMeta.title,
  description: clinicMeta.description,
  alternates: { canonical: '/clinic' },
  openGraph: {
    title: clinicMeta.title,
    description: clinicMeta.description,
    type: 'article',
    locale: 'ja_JP',
    url,
    siteName: '株式会社Faise',
  },
  twitter: { card: 'summary_large_image', title: clinicMeta.title, description: clinicMeta.description },
}

// 構造化データ（ページに表示している内容と同じ日本語テキストのみ）
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: '美容クリニックの集客支援',
      serviceType: '美容クリニック向けマーケティング支援',
      description: clinicContent.hero.lead.ja,
      url,
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: '日本' },
      audience: { '@type': 'BusinessAudience', name: '美容クリニック' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: '支援内容',
        itemListElement: clinicContent.support.items.map((it) => ({
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: it.title.ja, description: it.body.ja },
        })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: clinicContent.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q.ja,
        acceptedAnswer: { '@type': 'Answer', text: f.a.ja },
      })),
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: clinicContent.breadcrumb.home.ja, item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: clinicContent.breadcrumb.here.ja, item: url },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <ClinicPage />
    </>
  )
}
