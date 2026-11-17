import type { Metadata } from 'next'
import UketsukeNekoPage from '@/components/UketsukeNekoPage'
import { NEKO_PATH, neko } from '@/lib/uketsuke-neko'
import { SITE_URL, ORG_ID } from '@/lib/site'

const OG = '/images/uketsuke-neko/hero.jpg'

export const metadata: Metadata = {
  title: neko.title,
  description: neko.description,
  alternates: { canonical: NEKO_PATH },
  openGraph: {
    title: neko.title,
    description: neko.description,
    type: 'website',
    locale: 'ja_JP',
    url: `${SITE_URL}${NEKO_PATH}`,
    siteName: '株式会社Faise',
    images: [{ url: OG, width: 1600, height: 900, alt: '受付ネコの手' }],
  },
  twitter: { card: 'summary_large_image', title: neko.title, description: neko.description, images: [OG] },
}

const url = `${SITE_URL}${NEKO_PATH}`
// 構造化データ（ページに表示している内容と同じテキストのみ）
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'SoftwareApplication',
      '@id': `${url}#product`,
      name: '受付ネコの手',
      applicationCategory: 'BusinessApplication',
      description: neko.description,
      url,
      inLanguage: 'ja',
      image: `${SITE_URL}${OG}`,
      provider: { '@id': ORG_ID },
      offers: { '@type': 'Offer', price: 50000, priceCurrency: 'JPY', description: '1院あたり月額50,000円（税込）' },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: neko.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '受付ネコの手', item: url },
      ],
    },
  ],
}

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <UketsukeNekoPage />
    </>
  )
}
