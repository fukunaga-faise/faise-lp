import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Handshake } from 'lucide-react'
import Nav from '@/components/Nav'
import { Footer } from '@/components/CTA'
import FaqList from '@/components/FaqList'
import PageCurtain from '@/components/PageCurtain'
import JapanLaunchForm from '@/components/JapanLaunchForm'
import JapanLaunchVisual from '@/components/JapanLaunchVisual'
import { CountUp, Label, Reveal, ScrollProgress } from '@/components/ui'
import { cases } from '@/lib/cases'
import { localizePath, type Lang } from '@/lib/locale'
import { SITE_URL, ORG_ID } from '@/lib/site'
import {
  FORM_ANCHOR,
  JAPAN_LAUNCH_PATH,
  JAPAN_LAUNCH_PATH_EN,
  SERVICE_NAME,
  breadcrumb,
  faq,
  form,
  hero,
  meta,
  models,
  problems,
  scope,
  steps,
  track,
  whyJapan,
} from '@/lib/japan-launch'

const pathFor = (lang: Lang) => (lang === 'ja' ? JAPAN_LAUNCH_PATH : JAPAN_LAUNCH_PATH_EN)
// 英語版がメインのページなので x-default は英語
const languages = { en: JAPAN_LAUNCH_PATH_EN, ja: JAPAN_LAUNCH_PATH, 'x-default': JAPAN_LAUNCH_PATH_EN }

export function japanLaunchMetadata(lang: Lang): Metadata {
  const m = meta[lang]
  const path = pathFor(lang)
  // TODO: 要確認 — 専用のOG画像（現状はトップのOG画像を流用）
  const og = lang === 'ja' ? '/og/home.jpg' : '/og/home-en.jpg'
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages },
    openGraph: {
      title: m.title,
      description: m.description,
      type: 'website',
      locale: lang === 'ja' ? 'ja_JP' : 'en_US',
      alternateLocale: lang === 'ja' ? ['en_US'] : ['ja_JP'],
      url: `${SITE_URL}${path}`,
      siteName: lang === 'ja' ? '株式会社Faise' : 'Faise Inc.',
      images: [{ url: og, width: 1200, height: 630, alt: m.title }],
    },
    twitter: { card: 'summary_large_image', title: m.title, description: m.description, images: [og] },
  }
}

const buildLd = (lang: Lang) => {
  const url = `${SITE_URL}${pathFor(lang)}`
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: SERVICE_NAME,
        serviceType: lang === 'ja' ? '海外ブランドの日本市場参入支援' : 'Japan market entry for overseas brands',
        description: hero.sub[lang],
        url,
        inLanguage: lang,
        provider: { '@id': ORG_ID },
        areaServed: { '@type': 'Country', name: lang === 'ja' ? '日本' : 'Japan' },
        audience: {
          '@type': 'BusinessAudience',
          name: lang === 'ja' ? '海外で販売実績のある消費者向けブランド' : 'Overseas consumer brands with proven traction',
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: lang === 'ja' ? '支援の流れ' : 'How it works',
          itemListElement: steps.items.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title[lang], description: s.body[lang] },
          })),
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q[lang], acceptedAnswer: { '@type': 'Answer', text: f.a[lang] } })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: breadcrumb.home[lang], item: `${SITE_URL}${lang === 'ja' ? '' : '/en'}` },
          { '@type': 'ListItem', position: 2, name: breadcrumb.here[lang], item: url },
        ],
      },
    ],
  }
}

// ui.tsx の container と同じ値。ui.tsx は 'use client' のため、サーバーコンポーネントから文字列定数を import すると
// クライアント参照オブジェクトになってしまう。ここで同じ値を持つ
const container = 'mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-14'
const h2Class ='mt-6 text-[clamp(22px,6vw,28px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(26px,2.8vw,38px)]'
const bodyClass = 'text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]'
const section = 'border-t border-[#ecebe7] py-14 md:py-24'

function H2({ lines }: { lines: string[] }) {
  return (
    <h2 className={h2Class}>
      {lines[0]}
      <br />
      {lines[1]}
    </h2>
  )
}

export default function JapanLaunchView({ lang }: { lang: Lang }) {
  const loc = (href: string) => localizePath(href, lang)
  const faise = scope.items.filter((i) => i.by === 'faise')
  const partner = scope.items.filter((i) => i.by === 'partner')

  return (
    <main className="bg-white text-[#111]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLd(lang)) }} />
      <PageCurtain />
      <ScrollProgress />
      <Nav base={loc('/')} />

      {/* 1. Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-14 md:pt-40 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="faise-anim absolute -right-[18vmax] -top-[24vmax] h-[60vmax] w-[60vmax] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,172,224,.22) 0%, rgba(31,172,224,.08) 36%, rgba(31,172,224,0) 70%)', animation: 'faiseWashA 30s ease-in-out infinite' }}
          />
        </div>
        <div className={`${container} relative`}>
          <nav aria-label="breadcrumb" className="mb-8 flex items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href={loc('/')} className="transition-colors hover:text-brand">{breadcrumb.home[lang]}</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{breadcrumb.here[lang]}</span>
          </nav>
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
            <Reveal>
              <Label>{hero.label}</Label>
              <h1 className={`mt-6 ${lang === 'ja' ? 'text-[clamp(25px,7.3vw,40px)]' : 'text-[clamp(30px,8.4vw,40px)]'} font-medium leading-[1.4] tracking-[0.01em] text-[#111] md:text-[clamp(40px,4.8vw,62px)]`}>
                {hero.h1[lang][0]}
                <br />
                <span className="text-brand-gradient">{hero.h1[lang][1]}</span>
              </h1>
              <p className={`mt-7 max-w-[38em] ${bodyClass}`}>{hero.sub[lang]}</p>
              <a
                href={`#${FORM_ANCHOR}`}
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-sky via-brand to-brand-navy px-7 py-4 text-[14px] font-bold tracking-[0.04em] text-white transition-shadow hover:shadow-[0_10px_28px_-10px_rgba(37,99,214,0.7)]"
              >
                {hero.cta[lang]}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 text-[12.5px] leading-[1.8] tracking-[0.03em] text-[#777]">{hero.note[lang]}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-sm border border-[#ecebe7] bg-white/70 p-3 shadow-[0_24px_60px_-40px_rgba(20,24,92,0.5)] md:p-5">
                <JapanLaunchVisual lang={lang} />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className={`${section} bg-brand-tint`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{problems.label}</Label>
            <H2 lines={problems.h2[lang]} />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {problems.items.map((p, i) => (
              <li key={i}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="h-full rounded-sm border-t-[3px] border-brand-sky bg-white px-5 py-6 shadow-[0_14px_32px_-26px_rgba(20,24,92,0.5)]">
                    <p className="font-inter text-[28px] font-light leading-none text-brand-gradient">0{i + 1}</p>
                    <p className="mt-4 text-[15px] font-medium leading-[1.85] tracking-[0.02em] text-[#222]">{p[lang]}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Why Japan */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <Label>{whyJapan.label}</Label>
              <H2 lines={whyJapan.h2[lang]} />
            </Reveal>
            <ul className="grid gap-x-8 gap-y-8 md:grid-cols-3">
              {whyJapan.items.map((w, i) => (
                <li key={i} className="border-t border-[#ecebe7] pt-6">
                  <Reveal delay={i * 0.06}>
                    {/* TODO: 出典確認 — 数字は出典付きで whyJapan.items[].stat / source に入れたときだけ表示する */}
                    {w.stat && (
                      <p className="font-inter text-[40px] font-light leading-none text-brand-gradient">{w.stat}</p>
                    )}
                    <h3 className="text-[17px] md:text-[18px] font-medium leading-[1.6] tracking-[0.03em] text-[#111]">{w.title[lang]}</h3>
                    <p className="mt-3 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{w.body[lang]}</p>
                    {w.source && <p className="mt-2 text-[11.5px] text-[#888]">{w.source}</p>}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. How it works */}
      <section className={`${section} bg-brand-tint`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{steps.label}</Label>
            <H2 lines={steps.h2[lang]} />
            {steps.timeline && (
              <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand/25 bg-white px-4 py-1.5 text-[13px] font-medium tracking-[0.03em] text-brand-navy">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-sky" />
                {steps.timeline[lang]}
              </p>
            )}
          </Reveal>
          <ol className="relative mt-10 grid gap-0 md:mt-14 lg:grid-cols-5 lg:gap-6">
            {/* desktop connector */}
            <span aria-hidden="true" className="absolute left-[22px] right-[calc(20%-22px)] top-[22px] hidden h-[2px] bg-gradient-to-r from-brand-sky via-brand to-brand-navy lg:block" />
            {steps.items.map((s, i) => (
              <li key={i} className="relative flex gap-5 pb-8 last:pb-0 lg:block lg:pb-0">
                {/* mobile connector */}
                {i < steps.items.length - 1 && (
                  <span aria-hidden="true" className="absolute bottom-0 left-[21px] top-[44px] w-[2px] bg-gradient-to-b from-brand-sky to-brand lg:hidden" />
                )}
                <span className="relative z-10 flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border-2 border-brand bg-white font-inter text-[15px] font-semibold text-brand">
                  {i + 1}
                </span>
                <Reveal delay={i * 0.06} className="pt-1.5 lg:pt-6">
                  <h3 className="text-[17px] md:text-[18px] font-medium leading-[1.55] tracking-[0.02em] text-[#111]">{s.title[lang]}</h3>
                  <p className="mt-2.5 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{s.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. What we handle */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{scope.label}</Label>
            <H2 lines={scope.h2[lang]} />
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Reveal>
              <div className="h-full rounded-sm bg-brand-tint px-5 py-6 md:px-8 md:py-8">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-brand">{scope.legend.faise[lang]}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {faise.map((it) => (
                    <li key={it.name.en} className="flex gap-3 text-[15px] font-medium leading-[1.7] text-[#222]">
                      <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.2em] shrink-0 text-brand" />
                      {it.name[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-sm border border-dashed border-brand/40 px-5 py-6 md:px-8 md:py-8">
                <p className="flex items-center gap-2 font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  <Handshake size={16} strokeWidth={1.5} aria-hidden="true" className="text-brand" />
                  {scope.legend.partner[lang]}
                </p>
                <ul className="mt-5 grid gap-3">
                  {partner.map((it) => (
                    <li key={it.name.en} className="flex gap-3 text-[15px] leading-[1.7] text-[#333]">
                      <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full border border-brand" />
                      {it.name[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. Partnership models */}
      <section className={`${section} bg-brand-tint`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{models.label}</Label>
            <H2 lines={models.h2[lang]} />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-3 md:gap-6">
            {models.items.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className="flex h-full flex-col rounded-sm bg-white px-6 py-7 shadow-[0_18px_40px_-28px_rgba(20,24,92,0.5)]">
                    <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-brand">{m.name}</p>
                    <h3 className="mt-3 text-[18px] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">{m.title[lang]}</h3>
                    <p className="mt-3 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{m.body[lang]}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-[1.9] tracking-[0.03em] text-[#666]">{models.note[lang]}</p>
        </div>
      </section>

      {/* 7. Why Faise / Track record */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{track.label}</Label>
            <H2 lines={track.h2[lang]} />
          </Reveal>

          <ul className="mt-10 grid gap-8 md:mt-14 md:grid-cols-3">
            {track.strengths.map((s, i) => (
              <li key={i} className="border-t border-[#ecebe7] pt-6">
                <Reveal delay={i * 0.06}>
                  <h3 className="text-[17px] md:text-[18px] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">{s.title[lang]}</h3>
                  <p className="mt-3 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{s.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ul>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              <div className="h-full rounded-sm border border-[#ecebe7] px-6 py-7 md:px-8">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-brand">Founder</p>
                <p className="mt-2 text-[17px] font-medium text-[#111]">{track.founder.name[lang]}</p>
                <ol className="mt-5 space-y-3">
                  {track.founder.career.map((c) => (
                    <li key={c.period} className="grid grid-cols-[6.5em_1fr] gap-3 text-[14.5px] leading-[1.7]">
                      <span className="font-inter text-[13px] tracking-[0.06em] text-[#888]">{c.period}</span>
                      <span className="text-[#222]">{c.org[lang]}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-sm bg-gradient-to-br from-brand-sky via-brand to-brand-navy px-6 py-7 text-white md:px-8">
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-white/80">Launch</p>
                <p className="mt-2 text-[17px] font-medium">{track.launch.title[lang]}</p>
                <ul className="mt-5 space-y-3">
                  {track.launch.points.map((p) => (
                    <li key={p.en} className="flex gap-3 text-[14.5px] leading-[1.8] text-white/95">
                      <Check size={17} strokeWidth={2} aria-hidden="true" className="mt-[0.25em] shrink-0" />
                      {p[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <p className="mt-12 text-[13px] font-medium tracking-[0.06em] text-[#777]">{track.casesLabel[lang]}</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <li key={c.slug} className="rounded-sm bg-brand-tint px-5 py-6">
                <p className="font-inter text-[11px] font-medium tracking-[0.22em] text-brand">{c.category}</p>
                <p className="mt-1.5 text-[15px] font-medium text-[#111]">{c.title[lang]}</p>
                <p className="mt-3 text-[12.5px] text-[#555]">{c.metric.label[lang]}</p>
                <p className="mt-1 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="font-inter text-[44px] font-light leading-none text-brand-gradient">
                    <CountUp to={c.metric.value} />
                  </span>
                  <span className="text-[17px] font-medium text-brand-navy">{c.metric.unit[lang]}</span>
                </p>
                {c.metric.sub && <p className="mt-1.5 text-[12.5px] text-[#555]">{c.metric.sub[lang]}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. FAQ */}
      <section id="faq" className={`${section} bg-white`}>
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-10">
          <Label>{faq.label}</Label>
          <h2 className={h2Class}>{faq.h2[lang]}</h2>
          <FaqList items={faq.items.map((f) => ({ q: f.q[lang], a: f.a[lang] }))} className="mt-8" />
        </div>
      </section>

      {/* 9. CTA + Form */}
      <section id={FORM_ANCHOR} className="relative scroll-mt-16 overflow-hidden bg-gradient-to-br from-brand-sky via-brand to-brand-navy py-16 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="faise-anim absolute -right-[10vmax] -top-[18vmax] h-[56vmax] w-[56vmax] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,.2) 0%, rgba(255,255,255,.06) 40%, rgba(255,255,255,0) 70%)', animation: 'faiseWashA 32s ease-in-out infinite' }}
          />
        </div>
        <div className="relative mx-auto w-full max-w-[900px] px-4 md:px-10">
          <div className="px-2 text-center">
            <Label tone="light" className="justify-center">{form.label}</Label>
            <h2 className="mt-6 text-[clamp(24px,6.4vw,30px)] font-medium leading-[1.5] tracking-[0.02em] text-white md:text-[clamp(28px,3vw,40px)]">{form.h2[lang]}</h2>
            <p className="mx-auto mt-4 max-w-[34em] text-[14.5px] leading-[1.95] tracking-[0.03em] text-white/85">{form.lead[lang]}</p>
          </div>
          <div className="mt-10">
            <JapanLaunchForm lang={lang} />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
