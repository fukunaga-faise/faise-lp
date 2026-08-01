import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
import AmbientBackground from '@/components/AmbientBackground'
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

export const metadata: Metadata = {
  verification: {
    google: 'ZJwBSJHA3cQnOMN3sZvgRCI4nJJMGVRw2fnw1ZNoJvU',
  },
  title: '株式会社Faise | 人が集まる場所を、設計する。',
  description:
    '集客施設に特化したマーケティング支援。コンセプト設計・体験設計・集客戦略を一気通貫で。パーソナルジム、美容クリニック、店舗型ビジネスの来店と予約を設計します。',
  metadataBase: new URL('https://faise-inc.com'),
  alternates: {
    canonical: 'https://faise-inc.com',
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: '株式会社Faise | 人が集まる場所を、設計する。',
    description:
      'コンセプト設計から集客実行まで。集客施設に特化したマーケティングパートナー。',
    type: 'website',
    locale: 'ja_JP',
    url: 'https://faise-inc.com',
    siteName: '株式会社Faise',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Faise | 人が集まる場所を、設計する。',
    description: 'コンセプト設計から集客実行まで。集客施設に特化したマーケティングパートナー。',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '株式会社Faise',
  url: 'https://faise-inc.com',
  email: 'fukunaga@faise-inc.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: '品川区大井4-18-25',
    addressRegion: '東京都',
    addressCountry: 'JP',
  },
  description:
    '体験設計型マーケティング。パーソナルジム・美容クリニック・店舗型ビジネスの集客・予約・成約を一気通貫で支援。',
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
      <body className="font-sans">
        <AmbientBackground />
        {children}
      </body>
    </html>
  )
}
