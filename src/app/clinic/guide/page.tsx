import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import CTA from '@/components/CTA'
import { guides } from '@/lib/clinic-guides'
import { SITE_URL } from '@/lib/site'

const title = '美容クリニックの集客ガイド | 株式会社Faise'
const description =
  'インフルエンサー活用、広告のCPA改善、成果報酬型マーケティングなど、美容クリニックの集客に役立つ考え方と進め方を解説します。'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/clinic/guide' },
  openGraph: {
    title,
    description,
    type: 'website',
    locale: 'ja_JP',
    url: `${SITE_URL}/clinic/guide`,
    siteName: '株式会社Faise',
    images: [{ url: '/og/clinic.jpg', width: 1200, height: 630, alt: '美容クリニックの集客ガイド' }],
  },
  twitter: { card: 'summary_large_image', title, description, images: ['/og/clinic.jpg'] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}/clinic/guide#page`,
      name: '美容クリニックの集客ガイド',
      description,
      url: `${SITE_URL}/clinic/guide`,
      inLanguage: 'ja',
      hasPart: guides.map((g) => ({ '@id': `${SITE_URL}/clinic/guide/${g.slug}#article` })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: '美容クリニックの集客支援', item: `${SITE_URL}/clinic` },
        { '@type': 'ListItem', position: 3, name: '集客ガイド', item: `${SITE_URL}/clinic/guide` },
      ],
    },
  ],
}

export default function GuideIndex() {
  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav base="/" />
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-10">
          <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href="/" className="hover:text-brand">ホーム</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <Link href="/clinic" className="hover:text-brand">美容クリニックの集客支援</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">集客ガイド</span>
          </nav>
          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Clinic Guide
          </p>
          <h1 className="mt-5 text-[clamp(26px,4.6vw,42px)] font-medium leading-[1.5] tracking-[0.02em]">美容クリニックの集客ガイド</h1>
          <p className="mt-6 text-[15px] leading-[2.05] tracking-[0.03em] text-[#444]">{description}</p>
          <ul className="mt-12 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/clinic/guide/${g.slug}`} className="group block py-7">
                  <h2 className="text-[18px] md:text-[20px] font-medium leading-[1.6] tracking-[0.02em] group-hover:text-brand">{g.h1}</h2>
                  <p className="mt-2.5 text-[14px] leading-[1.95] text-[#666]">{g.description}</p>
                  <p className="mt-3 text-[12px] tracking-[0.04em] text-[#999]">{g.updated.replace(/-/g, '.')} 更新</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <CTA />
    </main>
  )
}
