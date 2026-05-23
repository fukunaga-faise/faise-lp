import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Noto_Sans_JP } from 'next/font/google'
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
  title: '株式会社Faise | 人が動く理由を設計する。',
  description:
    '体験設計型マーケティング。パーソナルジム・美容クリニック・店舗型ビジネスの集客・予約・成約を、SNS・広告・体験設計から一気通貫で支援します。',
  openGraph: {
    title: '株式会社Faise | 人が動く理由を設計する。',
    description:
      '体験設計型マーケティング。集客から成約まで一気通貫でサポートします。',
    type: 'website',
    locale: 'ja_JP',
  },
  twitter: {
    card: 'summary_large_image',
    title: '株式会社Faise | 人が動く理由を設計する。',
    description: '体験設計型マーケティング。集客から成約まで一気通貫。',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className={`${inter.variable} ${noto.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  )
}
