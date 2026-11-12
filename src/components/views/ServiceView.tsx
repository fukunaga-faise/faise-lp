import type { Metadata } from 'next'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import CTA from '@/components/CTA'
import { services } from '@/lib/services'
import { cases } from '@/lib/cases'
import { guides } from '@/lib/clinic-guides'
import { caseHref, casesForService, serviceGuides } from '@/lib/relations'
import { localizePath, type Lang } from '@/lib/locale'
import { SITE_URL, ORG_ID } from '@/lib/site'
import FaqList from '@/components/FaqList'

const container = 'mx-auto w-full max-w-[860px] px-6 md:px-10'
export const findService = (slug: string) => services.find((s) => s.slug === slug)
const plain = (t: string) => t.replace('\n', '')

type QA = { q: string; a: string }
// 各サービスページの FAQ（サイト掲載済みの事実のみ）
const COMMON_FAQ: Record<Lang, QA[]> = {
  ja: [
    { q: 'この領域だけ依頼することはできますか？', a: 'はい、可能です。すべてをまとめてではなく、課題やフェーズに応じて、必要な領域からご相談いただけます。' },
    { q: '費用はどのくらいかかりますか？', a: '施策の内容や規模によって異なります。まずはお問い合わせください。内容を確認のうえ、2営業日以内にご連絡いたします。' },
  ],
  en: [
    { q: 'Can we ask for this area only?', a: 'Yes. You don’t need to take everything at once — start with the area that fits your challenge and stage.' },
    { q: 'How much does it cost?', a: 'It depends on the scope and scale of the work. Please get in touch — we’ll review your message and respond within 2 business days.' },
  ],
}
const EXTRA_FAQ: Record<string, Record<Lang, QA[]>> = {
  strategy: {
    ja: [{ q: '新しい施設や事業の立ち上げ前でも相談できますか？', a: 'はい。新規事業や施設の立ち上げ時の集客戦略から、実行までを支援しています。' }],
    en: [{ q: 'Can we consult before launching a new facility or business?', a: 'Yes. We support acquisition strategy and execution when launching a new business or facility.' }],
  },
  'influencer-marketing': {
    ja: [
      {
        q: '美容クリニック向けの成果報酬型プランはありますか？',
        a: '美容クリニック向けに、成果報酬型集客サービス「バズクル」を提供しています。初期費用・キャスティング費・月額固定費は0円で、広告費はクリニック様のご負担、成果報酬は成果1件ごとに個別に設定します。',
      },
    ],
    en: [
      {
        q: 'Do you offer a pay-for-performance plan for beauty clinics?',
        a: 'Yes — our pay-for-performance service “Buzzkuru” (バズクル) for beauty clinics has ¥0 initial, casting and fixed monthly fees. Ad spend is paid by the clinic, and the fee per result is set individually.',
      },
    ],
  },
  'digital-ads': {
    ja: [{ q: '広告運用だけでなく、LPの改善も依頼できますか？', a: 'はい。広告運用に加えて、クリエイティブやLP・予約導線の改善まで対応します。' }],
    en: [{ q: 'Can you improve our landing pages as well as run ads?', a: 'Yes. Beyond ad operations, we also improve creatives, landing pages and booking flows.' }],
  },
}

const L = {
  home: { ja: 'ホーム', en: 'Home' },
  services: { ja: 'サービス', en: 'Services' },
  items: { ja: '対応内容', en: 'What we cover' },
  clients: { ja: '想定クライアント', en: 'Typical clients' },
  cases: { ja: '関連する実績', en: 'Related work' },
  faq: { ja: 'よくあるご質問', en: 'Frequently asked questions' },
  guides: { ja: '関連する記事', en: 'Related articles' },
  others: { ja: 'ほかの支援領域', en: 'Other services' },
  titleSuffix: { ja: '｜対応内容と実績 | 株式会社Faise', en: ' | Services | Faise Inc.' },
}

const pathFor = (slug: string) => `/services/${slug}`

export function serviceMetadata(slug: string, lang: Lang): Metadata {
  const s = findService(slug)
  if (!s) return {}
  const title = `${plain(s.title[lang])}${L.titleSuffix[lang]}`
  const ja = pathFor(s.slug)
  const en = `/en${ja}`
  const path = lang === 'ja' ? ja : en
  return {
    title,
    description: s.body[lang],
    alternates: { canonical: path },
    openGraph: {
      title,
      description: s.body[lang],
      type: 'website',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      url: `${SITE_URL}${path}`,
      siteName: lang === 'ja' ? '株式会社Faise' : 'Faise Inc.',
      images: [{ url: lang === 'ja' ? '/og/home.jpg' : '/og/home-en.jpg', width: 1200, height: 630 }],
    },
    twitter: { card: 'summary_large_image', title, description: s.body[lang], images: [lang === 'ja' ? '/og/home.jpg' : '/og/home-en.jpg'] },
  }
}

export default function ServiceView({ slug, lang }: { slug: string; lang: Lang }) {
  const s = findService(slug)!
  const loc = (href: string) => localizePath(href, lang)
  const url = `${SITE_URL}${loc(pathFor(s.slug))}`
  const relatedCases = cases.filter((c) => casesForService(s.slug).includes(c.slug))
  const relatedGuides = lang === 'ja' ? guides.filter((g) => (serviceGuides[s.slug] ?? []).includes(g.slug)) : []
  const faq = [...(EXTRA_FAQ[s.slug]?.[lang] ?? []), ...COMMON_FAQ[lang]]
  const others = services.filter((o) => o.slug !== s.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: plain(s.title[lang]),
        description: s.body[lang],
        url,
        inLanguage: lang,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: lang === 'ja' ? '日本' : 'Japan' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: L.items[lang],
          itemListElement: s.items[lang].map((it) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: it } })),
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
          { '@type': 'ListItem', position: 1, name: L.home[lang], item: `${SITE_URL}${loc('/')}` },
          { '@type': 'ListItem', position: 2, name: L.services[lang], item: `${SITE_URL}${loc('/#service')}` },
          { '@type': 'ListItem', position: 3, name: plain(s.title[lang]), item: url },
        ],
      },
    ],
  }

  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Nav base={loc('/')} />

      <article className="pt-28 pb-16 md:pt-40 md:pb-24">
        <div className={container}>
          <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href={loc('/')} className="hover:text-brand">{L.home[lang]}</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <Link href={loc('/#service')} className="hover:text-brand">{L.services[lang]}</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{plain(s.title[lang])}</span>
          </nav>

          <p className="flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-brand">
            <span className="block h-px w-7 bg-gradient-to-r from-brand-sky to-brand" />
            Service {s.num}
          </p>
          <h1 className="mt-5 whitespace-pre-line text-[clamp(26px,4.6vw,42px)] font-medium leading-[1.5] tracking-[0.02em]">{s.title[lang]}</h1>
          <p className="mt-7 text-[15.5px] leading-[2.05] tracking-[0.03em] text-[#333]">{s.body[lang]}</p>

          <div className="mt-10 aspect-[3/2] overflow-hidden bg-[#f1f0ec]">
            <img src={`/images/redesign/${s.img}.jpg`} alt={s.alt[lang]} className="h-full w-full object-cover" />
          </div>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">{L.items[lang]}</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {s.items[lang].map((it) => (
                <li key={it} className="flex gap-3 rounded-sm bg-brand-tint px-4 py-4 text-[15px] font-medium leading-[1.7] text-[#222]">
                  <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                  {it}
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">{L.clients[lang]}</h2>
            <p className="mt-5 text-[15px] leading-[2.05] text-[#444]">{s.clients[lang]}</p>
          </section>

          {relatedCases.length > 0 && (
            <section className="mt-12">
              <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">{L.cases[lang]}</h2>
              <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedCases.map((c) => (
                  <li key={c.slug}>
                    <Link href={loc(caseHref(c.slug))} className="group block h-full rounded-sm border border-[#ecebe7] px-5 py-5 transition-colors hover:border-brand/40">
                      <p className="font-inter text-[11px] font-medium tracking-[0.22em] text-brand">{c.category}</p>
                      <p className="mt-2 text-[16px] font-medium group-hover:text-brand">{c.title[lang]}</p>
                      <p className="mt-3 flex items-baseline gap-1">
                        <span className="text-[13px] text-[#555]">{c.metric.label[lang]}</span>
                        <span className="font-inter text-[30px] font-light leading-none text-brand-gradient">{c.metric.value}</span>
                        <span className="text-[15px] font-medium text-brand-navy">{c.metric.unit[lang]}</span>
                      </p>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="mt-12">
            <h2 className="border-l-[3px] border-brand pl-4 text-[clamp(19px,2.6vw,24px)] font-medium leading-[1.6]">{L.faq[lang]}</h2>
            <FaqList items={faq} className="mt-6" />
          </section>

          {relatedGuides.length > 0 && (
            <aside className="mt-14">
              <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">{L.guides[lang]}</p>
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
            <p className="text-[13px] font-medium tracking-[0.06em] text-[#777]">{L.others[lang]}</p>
            <ul className="mt-3 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link href={loc(pathFor(o.slug))} className="block py-4 text-[15px] hover:text-brand">{plain(o.title[lang])}</Link>
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
