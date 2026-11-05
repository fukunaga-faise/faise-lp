import type { Metadata, Viewport } from 'next'
import RootShell from '@/components/RootShell'
import { SITE_URL } from '@/lib/site'

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
    languages: { ja: '/', en: '/en', 'x-default': '/' },
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
    images: [{ url: '/og/home.jpg', width: 1200, height: 630, alt: '株式会社Faise | 人が集まる理由を、設計する。' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/home.jpg'],
    title: '株式会社Faise | 人が集まる理由を、設計する。',
    description: '人が集まる理由は、設計できる。誰が、何に価値を感じ、なぜ選ぶのか。株式会社Faiseは、ブランド・体験・マーケティングを通じて、事業が選ばれる仕組みを戦略から実行まで設計します。',
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="ja">{children}</RootShell>
}
