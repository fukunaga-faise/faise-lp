import type { Metadata, Viewport } from 'next'
import RootShell from '@/components/RootShell'
import { SITE_URL } from '@/lib/site'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

const title = 'Faise Inc. | Marketing Company in Tokyo — Designing the Reason People Gather'
const description =
  'The reason people gather can be designed. Who sees value in what, and why do they choose it? Faise Inc. is a Tokyo marketing company that designs how businesses get chosen — through brand, experience and marketing, from strategy to execution.'

export const metadata: Metadata = {
  verification: { google: 'ZJwBSJHA3cQnOMN3sZvgRCI4nJJMGVRw2fnw1ZNoJvU' },
  title,
  description,
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/en',
    languages: { ja: '/', en: '/en', 'x-default': '/' },
  },
  icons: { icon: '/icon.png', shortcut: '/icon.png', apple: '/icon.png' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'en_US',
    url: `${SITE_URL}/en`,
    siteName: 'Faise Inc.',
    images: [{ url: '/og/home-en.jpg', width: 1200, height: 630, alt: title }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/home-en.jpg'] },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <RootShell lang="en">{children}</RootShell>
}
