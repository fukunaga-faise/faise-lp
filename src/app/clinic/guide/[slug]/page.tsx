import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import CTA from '@/components/CTA'
import { GUIDE_AUTHOR, guideBySlug, guides } from '@/lib/clinic-guides'
import { SITE_URL, ORG_ID, FOUNDER_ID, FOUNDER_LINKEDIN_URL } from '@/lib/site'

const container = 'mx-auto w-full max-w-[760px] px-6 md:px-10'

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const g = guideBySlug(params.slug)
  if (!g) return {}
  const path = `/clinic/guide/${g.slug}`
  return {
    title: `${g.title} | 株式会社Faise`,
    description: g.description,
    alternates: { canonical: path },
    openGraph: {
      title: g.title,
      description: g.description,
      type: 'article',
      locale: 'ja_JP',
      url: `${SITE_URL}${path}`,
      siteName: '株式会社Faise',
      publishedTime: g.published,
      modifiedTime: g.updated,
      images: [{ url: '/og/clinic.jpg', width: 1200, height: 630, alt: g.h1 }],
    },
    twitter: { card: 'summary_large_image', title: g.title, description: g.description, images: ['/og/clinic.jpg'] },
  }
}

export default function GuidePage({ params }: { params: { slug: string } }) {
  const g = guideBySlug(params.slug)
  if (!g) notFound()
  const url = `${SITE_URL}/clinic/guide/${g.slug}`
  const others = guides.filter((o) => o.slug !== g.slug)

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
        inLanguage: 'ja',
        datePublished: g.published,
        dateModified: g.updated,
        image: `${SITE_URL}/og/clinic.jpg`,
        author: { '@type': 'Person', '@id': FOUNDER_ID, name: GUIDE_AUTHOR.name, jobTitle: GUIDE_AUTHOR.jobTitle, worksFor: { '@id': ORG_ID }, sameAs: [FOUNDER_LINKEDIN_URL] },
        publisher: { '@id': ORG_ID },
        about: { '@id': `${SITE_URL}/clinic#service` },
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
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: '美容クリニックの集客支援', item: `${SITE_URL}/clinic` },
          { '@type': 'ListItem', position: 3, name: '集客ガイド', item: `${SITE_URL}/clinic/guide` },
          { '@type': 'ListItem', position: 4, name: g.h1, item: url },
        ],
      },
    ],
  }

  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav base="/" />

      <article className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className={container}>
          <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href="/" className="transition-colors hover:text-brand">ホーム</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <Link href="/clinic" className="transition-colors hover:text-brand">美容クリニックの集客支援</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <Link href="/clinic/guide" className="transition-colors hover:text-brand">集客ガイド</Link>
          </nav>

          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Clinic Guide
          </p>
          <h1 className="mt-5 text-[clamp(24px,4.4vw,38px)] font-medium leading-[1.5] tracking-[0.02em]">{g.h1}</h1>
          <p className="mt-5 text-[12.5px] tracking-[0.04em] text-[#777]">
            <time dateTime={g.updated}>{g.updated.replace(/-/g, '.')}</time> 更新　／　執筆：{GUIDE_AUTHOR.jobTitle}{' '}
            <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener" className="underline decoration-[#ccc] underline-offset-4 hover:text-brand">{GUIDE_AUTHOR.name}</a>
          </p>
          <p className="mt-8 text-[15px] leading-[2.05] tracking-[0.03em] text-[#444]">{g.lead}</p>

          {/* 結論を先に（AIの引用はページ上部に集中するため） */}
          <section aria-labelledby="summary" className="mt-8 rounded-sm border border-brand/25 bg-white px-6 py-6 shadow-[0_14px_32px_-26px_rgba(20,24,92,0.5)]">
            <h2 id="summary" className="text-[14px] font-medium tracking-[0.06em] text-brand">この記事の結論</h2>
            <ul className="mt-3 space-y-2.5">
              {g.summary.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] font-medium leading-[1.9] tracking-[0.02em] text-[#222]">
                  <span aria-hidden="true" className="mt-[0.75em] h-[6px] w-[6px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <nav aria-label="目次" className="mt-10 rounded-sm bg-brand-tint px-6 py-6">
            <p className="text-[13px] font-medium tracking-[0.06em] text-brand-navy">目次</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-[14px] leading-[1.8] text-[#333] marker:text-brand">
              {g.sections.map((s, i) => (
                <li key={i}>
                  <a href={`#s${i + 1}`} className="hover:text-brand">{s.h2}</a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-brand">よくあるご質問</a>
              </li>
            </ol>
          </nav>

          {g.sections.map((s, i) => (
            <section key={i} id={`s${i + 1}`} className="mt-14 scroll-mt-28">
              <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6] tracking-[0.02em]">{s.h2}</h2>
              {s.body.map((p, j) => (
                <p key={j} className="mt-5 text-[15px] leading-[2.05] tracking-[0.03em] text-[#444]">{p}</p>
              ))}
              {s.list &&
                (s.ordered ? (
                  <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[15px] leading-[1.95] tracking-[0.02em] text-[#333] marker:font-medium marker:text-brand">
                    {s.list.map((li) => <li key={li}>{li}</li>)}
                  </ol>
                ) : (
                  <ul className="mt-5 space-y-2.5">
                    {s.list.map((li) => (
                      <li key={li} className="flex gap-3 text-[15px] leading-[1.95] tracking-[0.02em] text-[#333]">
                        <span aria-hidden="true" className="mt-[0.8em] h-[5px] w-[5px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                        {li}
                      </li>
                    ))}
                  </ul>
                ))}
              {s.table && (
                <div className="mt-6 overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-[14px] leading-[1.8]">
                    <caption className="mb-2 text-left text-[13px] font-medium tracking-[0.04em] text-[#555]">{s.table.caption}</caption>
                    <thead>
                      <tr className="bg-brand-tint">
                        {s.table.head.map((h) => (
                          <th key={h} scope="col" className="border border-[#e3e2dd] px-4 py-3 font-medium text-brand-navy">{h}</th>
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
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6] tracking-[0.02em]">よくあるご質問</h2>
            <dl className="mt-6 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {g.faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="flex gap-3 text-[15.5px] font-medium leading-[1.7]"><span className="font-inter text-brand-sky">Q.</span>{f.q}</dt>
                  <dd className="mt-2.5 flex gap-3 text-[14.5px] leading-[2] text-[#555]"><span className="font-inter text-brand">A.</span>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          <div className="mt-14 rounded-sm bg-brand-tint px-6 py-7 md:px-8">
            <p className="text-[16px] font-medium leading-[1.7] text-brand-navy">美容クリニックの集客について相談する</p>
            <p className="mt-2 text-[14px] leading-[1.9] text-[#555]">成果報酬型集客サービス「バズクル」は、初期費用・キャスティング費・月額固定費0円（広告費はクリニック様負担。成果報酬は成果1件ごとに個別設定）。</p>
            <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium tracking-[0.06em]">
              <a href="#contact-form" className="text-brand hover:text-brand-navy">無料相談フォームを開く →</a>
              <Link href="/clinic" className="text-[#333] hover:text-brand">支援内容を見る →</Link>
            </div>
          </div>

          <aside className="mt-14">
            <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">あわせて読みたい</p>
            <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/clinic/guide/${o.slug}`} className="block py-4 text-[15px] leading-[1.7] hover:text-brand">{o.h1}</Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </article>

      <CTA />
    </main>
  )
}
