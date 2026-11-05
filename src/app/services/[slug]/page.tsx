import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import CTA from '@/components/CTA'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'
import { guides } from '@/lib/clinic-guides'
import { caseHref, casesForService, serviceGuides } from '@/lib/relations'
import { SITE_URL, ORG_ID } from '@/lib/site'

const container = 'mx-auto w-full max-w-[860px] px-6 md:px-10'
const findService = (slug: string) => services.find((s) => s.slug === slug)
const plainTitle = (t: string) => t.replace('\n', '')

// 各サービスページの FAQ（サイト掲載済みの事実のみ）
const COMMON_FAQ = [
  {
    q: 'この領域だけ依頼することはできますか？',
    a: 'はい、可能です。すべてをまとめてではなく、課題やフェーズに応じて、必要な領域からご相談いただけます。',
  },
  {
    q: '費用はどのくらいかかりますか？',
    a: '施策の内容や規模によって異なります。まずはお問い合わせください。内容を確認のうえ、2営業日以内にご連絡いたします。',
  },
]
const EXTRA_FAQ: Record<string, { q: string; a: string }[]> = {
  strategy: [
    { q: '新しい施設や事業の立ち上げ前でも相談できますか？', a: 'はい。新規事業や施設の立ち上げ時の集客戦略から、実行までを支援しています。' },
  ],
  'influencer-marketing': [
    {
      q: '美容クリニック向けの成果報酬型プランはありますか？',
      a: '美容クリニック向けに、成果報酬型集客サービス「バズクル」を提供しています。初期費用・キャスティング費・月額固定費は0円で、広告費はクリニック様のご負担、成果報酬は成果1件ごとに個別に設定します。',
    },
  ],
  'digital-ads': [
    { q: '広告運用だけでなく、LPの改善も依頼できますか？', a: 'はい。広告運用に加えて、クリエイティブやLP・予約導線の改善まで対応します。' },
  ],
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const s = findService(params.slug)
  if (!s) return {}
  const title = `${plainTitle(s.title.ja)}｜対応内容と実績 | 株式会社Faise`
  const path = `/services/${s.slug}`
  return {
    title,
    description: s.body.ja,
    alternates: { canonical: path },
    openGraph: { title, description: s.body.ja, type: 'website', locale: 'ja_JP', url: `${SITE_URL}${path}`, siteName: '株式会社Faise', images: [{ url: '/og/home.jpg', width: 1200, height: 630 }] },
    twitter: { card: 'summary_large_image', title, description: s.body.ja, images: ['/og/home.jpg'] },
  }
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const s = findService(params.slug)
  if (!s) notFound()
  const url = `${SITE_URL}/services/${s.slug}`
  const relatedCases = cases.filter((c) => casesForService(s.slug).includes(c.slug))
  const relatedGuides = guides.filter((g) => (serviceGuides[s.slug] ?? []).includes(g.slug))
  const faq = [...(EXTRA_FAQ[s.slug] ?? []), ...COMMON_FAQ]
  const others = services.filter((o) => o.slug !== s.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: plainTitle(s.title.ja),
        description: s.body.ja,
        url,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: '日本' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: '対応内容',
          itemListElement: s.items.ja.map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: it } })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'ホーム', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'サービス', item: `${SITE_URL}/#service` },
          { '@type': 'ListItem', position: 3, name: plainTitle(s.title.ja), item: url },
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
            <Link href="/#service" className="hover:text-brand">サービス</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{plainTitle(s.title.ja)}</span>
          </nav>

          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Service {s.num}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-[clamp(26px,4.6vw,42px)] font-medium leading-[1.5] tracking-[0.02em]">{s.title.ja}</h1>
          <p className="mt-7 text-[15.5px] leading-[2.05] tracking-[0.03em] text-[#333]">{s.body.ja}</p>

          <div className="mt-10 aspect-[3/2] overflow-hidden bg-[#f1f0ec]">
            <img src={`/images/redesign/${s.img}.jpg`} alt={s.alt.ja} className="h-full w-full object-cover" />
          </div>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">対応内容</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.items.ja.map((it) => (
                <li key={it} className="flex gap-3 rounded-sm bg-brand-tint px-4 py-4 text-[15px] font-medium leading-[1.7] text-[#222]">
                  <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                  {it}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">想定クライアント</h2>
            <p className="mt-5 text-[15px] leading-[2.05] text-[#444]">{s.clients.ja}</p>
          </section>

          {relatedCases.length > 0 && (
            <section className="mt-12">
              <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">関連する実績</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedCases.map((c) => (
                  <li key={c.slug}>
                    <Link href={caseHref(c.slug)} className="group block h-full rounded-sm border border-[#ecebe7] px-5 py-5 transition-colors hover:border-brand/40">
                      <p className="font-inter text-[11px] font-medium tracking-[0.22em] text-brand">{c.category}</p>
                      <p className="mt-2 text-[16px] font-medium group-hover:text-brand">{c.title.ja}</p>
                      <p className="mt-3 flex items-baseline gap-1">
                        <span className="text-[13px] text-[#555]">{c.metric.label.ja}</span>
                        <span className="font-inter text-[30px] font-light leading-none text-brand-gradient">{c.metric.value}</span>
                        <span className="text-[15px] font-medium text-brand-navy">{c.metric.unit.ja}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">よくあるご質問</h2>
            <dl className="mt-6 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {faq.map((f) => (
                <div key={f.q} className="py-5">
                  <dt className="flex gap-3 text-[15.5px] font-medium leading-[1.7]"><span className="font-inter text-brand-sky">Q.</span>{f.q}</dt>
                  <dd className="mt-2.5 flex gap-3 text-[14.5px] leading-[2] text-[#555]"><span className="font-inter text-brand">A.</span>{f.a}</dd>
                </div>
              ))}
            </dl>
          </section>

          {relatedGuides.length > 0 && (
            <aside className="mt-14">
              <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">関連する記事</p>
              <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
                {relatedGuides.map((g) => (
                  <li key={g.slug}>
                    <Link href={`/clinic/guide/${g.slug}`} className="block py-4 text-[15px] leading-[1.7] hover:text-brand">{g.h1}</Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <aside className="mt-12">
            <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">ほかの支援領域</p>
            <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={`/services/${o.slug}`} className="block py-4 text-[15px] hover:text-brand">{plainTitle(o.title.ja)}</Link>
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
