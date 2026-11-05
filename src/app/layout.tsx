import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import { LanguageProvider } from '@/lib/language'
import { SITE_URL, ORG_ID } from '@/lib/site'
import './globals.css'

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

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  verification: {
    google: 'ZJwBSJHA3cQnOMN3sZvgRCI4nJJMGVRw2fnw1ZNoJvU',
  },
  title: '株式会社Faise | 人が集まる理由を、設計する。',
  description:
    '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: '株式会社Faise | 人が集まる理由を、設計する。',
    description:
      '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: '株式会社Faise',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Faise | 人が集まる理由を、設計する。',
    description: '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
  },
}

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
      founder: { '@type': 'Person', name: '福永 遥斗', jobTitle: '代表取締役' },
      address: {
        '@type': 'PostalAddress',
        postalCode: '140-0014',
        addressLocality: '品川区',
        streetAddress: '大井4-18-25',
        addressRegion: '東京都',
        addressCountry: 'JP',
      },
      knowsAbout: ['美容クリニックの集客支援', '美容インフルエンサーのキャスティング', 'SNS広告運用', 'ブランド設計', '体験設計', 'マーケティング'],
      makesOffer: {
        '@type': 'Offer',
        itemOffered: { '@id': `${SITE_URL}/clinic#service` },
      },
      description:
        '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: '株式会社Faise',
      inLanguage: 'ja',
      publisher: { '@id': ORG_ID },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8N1V5BVY4K"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-8N1V5BVY4K');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans bg-white text-[#111]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
