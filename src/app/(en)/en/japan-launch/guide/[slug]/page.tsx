import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import FaqList from '@/components/FaqList'
import { GuideNav, GuideBreadcrumb, FitCheckBox, Footer } from '@/components/views/JapanGuideParts'
import { GUIDE_AUTHOR, GUIDE_BASE, japanGuideBySlug, japanGuides } from '@/lib/japan-guides'
import { JAPAN_LAUNCH_PATH_EN } from '@/lib/japan-launch'
import { SITE_URL, ORG_ID, FOUNDER_ID, FOUNDER_LINKEDIN_URL } from '@/lib/site'

const container = 'mx-auto w-full max-w-[760px] px-6 md:px-10'
const OG = '/og/japan-launch-en.jpg'

export function generateStaticParams() {
  return japanGuides.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = japanGuideBySlug(params.slug)
  if (!g) return {}
  const path = `${GUIDE_BASE}/${g.slug}`
  return {
    title: `${g.title} | Faise`,
    description: g.description,
    alternates: { canonical: path },
    openGraph: {
      title: g.title,
      description: g.description,
      type: 'article',
      locale: 'en_US',
      url: `${SITE_URL}${path}`,
      siteName: 'Faise Inc.',
      publishedTime: g.published,
      modifiedTime: g.updated,
      images: [{ url: OG, width: 1200, height: 630, alt: g.h1 }],
    },
    twitter: { card: 'summary_large_image', title: g.title, description: g.description, images: [OG] },
  }
}

const fmtDate = (d: string) => new Date(`${d}T00:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })

export default function JapanGuidePage({ params }: { params: { slug: string } }) {
  const g = japanGuideBySlug(params.slug)
  if (!g) notFound()
  const url = `${SITE_URL}${GUIDE_BASE}/${g.slug}`
  const others = japanGuides.filter((o) => o.slug !== g.slug)

  // 構造化データ（ページに表示している本文・FAQと同じテキストのみ）
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: g.h1,
        description: g.description,
        url,
        mainEntityOfPage: url,
        inLanguage: 'en',
        datePublished: g.published,
        dateModified: g.updated,
        image: `${SITE_URL}${OG}`,
        author: { '@type': 'Person', '@id': FOUNDER_ID, name: GUIDE_AUTHOR.name, jobTitle: GUIDE_AUTHOR.jobTitle, worksFor: { '@id': ORG_ID }, sameAs: [FOUNDER_LINKEDIN_URL] },
        publisher: { '@id': ORG_ID },
        about: { '@id': `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}#service` },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: g.faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Japan Launch', item: `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}` },
          { '@type': 'ListItem', position: 2, name: 'Guides', item: `${SITE_URL}${GUIDE_BASE}` },
          { '@type': 'ListItem', position: 3, name: g.h1, item: url },
        ],
      },
    ],
  }

  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <GuideNav />

      <article className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className={container}>
          <GuideBreadcrumb current={g.h1} />

          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Japan Guide
          </p>
          <h1 className="mt-5 text-[clamp(24px,4.4vw,38px)] font-medium leading-[1.4] tracking-[0.01em]">{g.h1}</h1>
          <p className="mt-5 text-[12.5px] tracking-[0.02em] text-[#777]">
            Updated <time dateTime={g.updated}>{fmtDate(g.updated)}</time> · By{' '}
            <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener" className="underline decoration-[#ccc] underline-offset-4 hover:text-brand">{GUIDE_AUTHOR.name}</a>, {GUIDE_AUTHOR.jobTitle}
          </p>
          <p className="mt-8 text-[16px] leading-[1.9] text-[#444]">{g.lead}</p>

          {/* 結論を先に（AIの引用はページ上部に集中するため） */}
          <section aria-labelledby="summary" className="mt-8 rounded-sm border border-brand/25 bg-white px-6 py-6 shadow-[0_14px_32px_-26px_rgba(20,24,92,0.5)]">
            <h2 id="summary" className="text-[14px] font-medium tracking-[0.04em] text-brand">Key takeaways</h2>
            <ul className="mt-3 space-y-2.5">
              {g.summary.map((t) => (
                <li key={t} className="flex gap-3 text-[15.5px] font-medium leading-[1.8] text-[#222]">
                  <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="Contents" className="mt-10 rounded-sm bg-brand-tint px-6 py-6">
            <p className="text-[13px] font-medium tracking-[0.04em] text-brand-navy">Contents</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[14.5px] leading-[1.7] text-[#333] marker:text-brand">
              {g.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#s${i + 1}`} className="hover:text-brand">{s.h2.replace(/^\d+\.\s*/, '')}</a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-brand">FAQ</a>
              </li>
            </ol>
          </nav>

          {g.sections.map((s, i) => (
            <section key={i} id={`s${i + 1}`} className="mt-14 scroll-mt-28">
              <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.5]">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-5 text-[16px] leading-[1.9] text-[#444]">{p}</p>
              ))}
              {s.list &&
                (s.ordered ? (
                  <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[16px] leading-[1.85] text-[#333] marker:font-medium marker:text-brand">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ol>
                ) : (
                  <ul className="mt-5 space-y-2.5">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-[16px] leading-[1.85] text-[#333]">
                        <span aria-hidden="true" className="mt-[0.75em] h-[5px] w-[5px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                        {li}
                      </li>
                    ))}
                  </ul>
                ))}
              {s.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-[14.5px] leading-[1.7]">
                    <caption className="mb-2 text-left text-[13px] font-medium text-[#555]">{s.table.caption}</caption>
                    <thead>
                      <tr className="bg-brand-tint">
                        {s.table.head.map((h, k) => (
                          <th key={k} scope="col" className="border border-[#e3e2dd] px-4 py-3 font-medium text-brand-navy">{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row) => (
                        <tr key={row[0]}>
                          {row.map((cell, k) =>
                            k === 0 ? (
                              <th key={k} scope="row" className="border border-[#e3e2dd] px-4 py-3 font-medium text-[#222]">{cell}</th>
                            ) : (
                              <td key={k} className="border border-[#e3e2dd] px-4 py-3 text-[#444]">{cell}</td>
                            ),
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}

          <section id="faq" className="mt-16 scroll-mt-28">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.5]">Frequently asked questions</h2>
            <FaqList items={g.faq} className="mt-6" />
          </section>

          <FitCheckBox />

          <aside className="mt-14">
            <p className="text-[13px] font-medium tracking-[0.04em] text-[#777]">More guides</p>
            <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`${GUIDE_BASE}/${o.slug}`} className="block py-4 text-[15.5px] leading-[1.6] hover:text-brand">{o.h1}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <Footer />
    </main>
  )
}
