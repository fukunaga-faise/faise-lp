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
    'ブランド、体験、マーケティング。集客施設の成長を、一気通貫で支援します。',
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
      'ブランド、体験、マーケティング。集客施設の成長を、一気通貫で支援します。',
    type: 'website',
    locale: 'ja_JP',
    url: SITE_URL,
    siteName: '株式会社Faise',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Faise | 人が集まる理由を、設計する。',
    description: 'ブランド、体験、マーケティング。集客施設の成長を、一気通貫で支援します。',
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
      description:
        'ブランド、体験、マーケティング。集客施設の成長を、一気通貫で支援します。',
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
