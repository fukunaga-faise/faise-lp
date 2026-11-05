import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import CTA from '@/components/CTA'
import { cases } from '@/lib/cases'
import { services } from '@/lib/services'
import { servicesForCase } from '@/lib/relations'
import { SITE_URL, ORG_ID } from '@/lib/site'

const container = 'mx-auto w-full max-w-[860px] px-6 md:px-10'

// 美容クリニックの事例は /clinic に詳しく載せているため、ここでは EC とジムの2件
const pageCases = () => cases.filter((c) => c.slug !== 'beauty-clinic')
const findCase = (slug: string) => pageCases().find((c) => c.slug === slug)

// 見出しは事例の数値（cases.ts）と同じ事実を、検索されやすい語順で言い直したもの
const HEADLINES: Record<string, string> = {
  'beauty-ec': '美容オンラインECの事例：1年間で月間売上10倍',
  'personal-gym': 'パーソナルジムの事例：月間新規入会者数4倍',
}
const headline = (c: (typeof cases)[number]) => HEADLINES[c.slug] ?? `${c.title.ja}の事例`

export function generateStaticParams() {
  return pageCases().map((c) => ({ slug: c.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const c = findCase(params.slug)
  if (!c) return {}
  const title = `${headline(c)} | 株式会社Faise`
  const description = c.body.ja
  const path = `/works/${c.slug}`
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, type: 'article', locale: 'ja_JP', url: `${SITE_URL}${path}`, siteName: '株式会社Faise', images: [{ url: '/og/home.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description, images: ['/og/home.jpg'] },
  }
}

export default function CasePage({ params }: { params: { slug: string } }) {
  const c = findCase(params.slug)
  if (!c) notFound()
  const url = `${SITE_URL}/works/${c.slug}`
  const related = services.filter((s) => servicesForCase(c.slug).includes(s.slug))
  const others = cases.filter((o) => o.slug !== c.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${url}#article`,
        headline: headline(c),
        description: c.body.ja,
        url,
        mainEntityOfPage: url,
        inLanguage: 'ja',
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        about: related.map((s) => ({ '@id': `${SITE_URL}/services/${s.slug}#service` })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: '実績', item: `${SITE_URL}/#works` },
          { '@type': 'ListItem', position: 3, name: c.title.ja, item: url },
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
            <Link href="/" className="hover:text-brand">ホーム</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <Link href="/#works" className="hover:text-brand">実績</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{c.title.ja}</span>
          </nav>

          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Case {c.num} / {c.category}
          </p>
          <h1 className="mt-5 text-[clamp(24px,4.4vw,38px)] font-medium leading-[1.5] tracking-[0.02em]">{headline(c)}</h1>

          <div className="mt-10 rounded-sm bg-brand-tint px-6 py-8 md:px-10">
            <p className="text-[13.5px] font-medium tracking-[0.04em] text-[#555]">{c.metric.label.ja}</p>
            <p className="mt-1 flex items-baseline gap-1.5">
              <span className="font-inter text-[64px] font-light leading-none text-brand-gradient md:text-[84px]">{c.metric.value}</span>
              <span className="text-[22px] md:text-[26px] font-medium text-brand-navy">{c.metric.unit.ja}</span>
            </p>
            {c.metric.sub && <p className="mt-2 text-[14px] font-medium text-[#555]">{c.metric.sub.ja}</p>}
          </div>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">取り組みの概要</h2>
            <p className="mt-5 text-[15px] leading-[2.05] tracking-[0.03em] text-[#444]">{c.body.ja}</p>
          </section>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">実施した施策</h2>
            <ol className="mt-5 list-decimal space-y-2.5 pl-6 text-[15px] leading-[1.95] text-[#333] marker:font-medium marker:text-brand">
              {c.actions.ja.map((a) => <li key={a}>{a}</li>)}
            </ol>
          </section>

          {related.length > 0 && (
            <section className="mt-12">
              <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">この事例に関わる支援領域</h2>
              <ul className="mt-5 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
                {related.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="group block py-5">
                      <p className="text-[16.5px] font-medium leading-[1.6] group-hover:text-brand">{s.title.ja.replace('\n', '')}</p>
                      <p className="mt-1.5 text-[14px] leading-[1.9] text-[#666]">{s.body.ja}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <aside className="mt-14">
            <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">ほかの実績</p>
            <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={o.slug === 'beauty-clinic' ? '/clinic' : `/works/${o.slug}`} className="flex items-baseline justify-between gap-4 py-4 text-[15px] hover:text-brand">
                    <span>{o.title.ja}</span>
                    <span className="shrink-0 text-[13px] text-[#777]">{o.metric.label.ja} {o.metric.value}{o.metric.unit.ja}</span>
                  </Link>
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
