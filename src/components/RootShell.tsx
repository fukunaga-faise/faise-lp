import { Inter } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import type { ReactNode } from 'react'
import { LanguageProvider, type Lang } from '@/lib/language'
import { SITE_URL, ORG_ID, FOUNDER_ID, PRTIMES_COMPANY_URL, FOUNDER_LINKEDIN_URL } from '@/lib/site'
import '@/app/globals.css'

// 日本語（/）と英語（/en）の2つのルートレイアウトで共通の <html> 骨組み。
// GA4・会社の構造化データ・フォントはここで1回だけ読み込む。

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': ORG_ID,
      name: '株式会社Faise',
      alternateName: 'Faise Inc.',
      url: SITE_URL,
      logo: `${SITE_URL}/logo-mark.png`,
      email: 'fukunaga@faise-inc.com',
      foundingDate: '2025-12',
      founder: { '@id': FOUNDER_ID },
      sameAs: [PRTIMES_COMPANY_URL],
      address: {
        '@type': 'PostalAddress',
        postalCode: '140-0014',
        addressLocality: '品川区',
        streetAddress: '大井4-18-25',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
      knowsAbout: ['美容クリニックの集客支援', '美容インフルエンサーのキャスティング', 'SNS広告運用', 'ブランド設計', '体験設計', 'マーケティング'],
      makesOffer: [
        { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/clinic#service` } },
        { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/services/strategy#service` } },
        { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/services/influencer-marketing#service` } },
        { '@type': 'Offer', itemOffered: { '@id': `${SITE_URL}/services/digital-ads#service` } },
      ],
      description:
        '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
    },
    {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: '福永 遥斗',
      alternateName: 'Haruto Fukunaga',
      jobTitle: '代表取締役',
      worksFor: { '@id': ORG_ID },
      sameAs: [FOUNDER_LINKEDIN_URL],
      description: 'ソニー株式会社（2021–2023）、株式会社刀（2023–2025）を経て、2025年に株式会社Faiseを設立。テーマパークや集客施設のマーケティングに携わる。',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '株式会社Faise',
      inLanguage: ['ja', 'en'],
      publisher: { '@id': ORG_ID },
    },
  ],
}


export default function RootShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  return (
    <html lang={lang} className={`${inter.variable} ${noto.variable}`}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8N1V5BVY4K" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-8N1V5BVY4K');`,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="font-sans bg-white text-[#111]">
        <LanguageProvider lang={lang}>{children}</LanguageProvider>
      </body>
    </html>
  )
}
