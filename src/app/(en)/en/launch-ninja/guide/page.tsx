import type { Metadata } from 'next'
import Link from 'next/link'
import { GuideNav, GuideBreadcrumb, FitCheckBox, Footer } from '@/components/views/JapanGuideParts'
import Image from 'next/image'
import { GUIDE_BASE, guideImage, japanGuides } from '@/lib/japan-guides'
import { JAPAN_LAUNCH_PATH_EN } from '@/lib/japan-launch'
import { SITE_URL } from '@/lib/site'

const title = 'Japan Market Entry Guides for Overseas Brands | Faise'
const description =
  'Practical guides for overseas consumer brands entering Japan: Japan market entry step by step, influencer marketing in Japan, and launching a beauty or skincare brand in Japan.'
const OG = '/og/japan-launch-en.jpg'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: GUIDE_BASE },
  openGraph: { title, description, type: 'website', locale: 'en_US', url: `${SITE_URL}${GUIDE_BASE}`, siteName: 'Faise Inc.', images: [{ url: OG, width: 1200, height: 630, alt: title }] },
  twitter: { card: 'summary_large_image', title, description, images: [OG] },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      '@id': `${SITE_URL}${GUIDE_BASE}#page`,
      name: 'Japan market entry guides',
      description,
      url: `${SITE_URL}${GUIDE_BASE}`,
      inLanguage: 'en',
      hasPart: japanGuides.map((g) => ({ '@id': `${SITE_URL}${GUIDE_BASE}/${g.slug}#article` })),
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Japan Launch', item: `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}` },
        { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}${GUIDE_BASE}` },
      ],
    },
  ],
}

export default function JapanGuideIndex() {
  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideNav />
      <section className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-10">
          <GuideBreadcrumb />
          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Japan Guide
          </p>
          <h1 className="mt-5 text-[clamp(26px,4.6vw,42px)] font-medium leading-[1.35]">Japan market entry guides</h1>
          <p className="mt-6 text-[16px] leading-[1.9] text-[#444]">{description}</p>
          <ul className="mt-12 grid gap-10 md:grid-cols-3 md:gap-7">
            {japanGuides.map((g) => {
              const c = guideImage(g.cover)
              return (
                <li key={g.slug}>
                  <Link href={`${GUIDE_BASE}/${g.slug}`} className="group block">
                    <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[#f3f1ec]">
                      <Image src={c.src} alt={c.alt} fill sizes="(min-width: 768px) 270px, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    </div>
                    <h2 className="mt-4 text-[17px] md:text-[18px] font-medium leading-[1.5] group-hover:text-brand">{g.h1}</h2>
                    <p className="mt-2 text-[14px] leading-[1.8] text-[#666]">{g.description}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          <FitCheckBox />
        </div>
      </section>
      <Footer />
    </main>
  )
}
