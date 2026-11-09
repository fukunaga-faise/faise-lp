import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, ChevronRight, Handshake } from 'lucide-react'
import Nav from '@/components/Nav'
import { Footer } from '@/components/CTA'
import FaqList from '@/components/FaqList'
import PageCurtain from '@/components/PageCurtain'
import JapanLaunchForm from '@/components/JapanLaunchForm'
import { CountUp, Reveal, ScrollProgress } from '@/components/ui'
import { display, mincho } from '@/lib/jl-fonts'
import { cases } from '@/lib/cases'
import { localizePath, type Lang } from '@/lib/locale'
import { SITE_URL, ORG_ID } from '@/lib/site'
import {
  FORM_ANCHOR,
  JAPAN_LAUNCH_PATH,
  JAPAN_LAUNCH_PATH_EN,
  SERVICE_NAME,
  audience,
  breadcrumb,
  channels,
  images,
  kanji,
  kanjiNumerals,
  roles,
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
  // 生成: node scripts/generate-og-japan-launch.mjs
  const og = lang === 'ja' ? '/og/japan-launch.jpg' : '/og/japan-launch-en.jpg'
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
          name: lang === 'ja' ? '日本展開を目指す海外の消費者向けブランド' : 'Overseas consumer brands expanding into Japan',
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
const bodyClass = 'text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]'
const section = 'py-16 md:py-28'
const cardShadow = 'shadow-[0_18px_40px_-30px_rgba(78,29,27,0.55)]'

// 和のトーンのセクション見出し：漢字（明朝・えんじ）＋英字ラベル＋明朝の見出し
function SecHead({ label, kanji: k, lines, light = false, className = '' }: { label: string; kanji: string; lines: string[]; light?: boolean; className?: string }) {
  return (
    <div className={className}>
      <p className={`flex items-center gap-4 ${light ? 'text-white' : 'text-beni'}`}>
        <span aria-hidden="true" className="font-mincho text-[30px] font-bold leading-none md:text-[36px]">{k}</span>
        <span className={`h-px w-8 ${light ? 'bg-white/60' : 'bg-beni/50'}`} />
        <span className="font-inter text-[11px] font-medium uppercase tracking-[0.28em] md:text-[12px]">{label}</span>
      </p>
      <h2 className={`mt-6 font-mincho text-[clamp(23px,6.2vw,30px)] font-bold leading-[1.55] tracking-[0.03em] md:text-[clamp(28px,3vw,42px)] ${light ? 'text-white' : 'text-sumi'}`}>
        {lines[0]}
        {lines[1] && (
          <>
            <br />
            {lines[1]}
          </>
        )}
      </h2>
    </div>
  )
}

// 落款（はんこ）風のマーク
function Hanko({ text = '上陸', className = '' }: { text?: string; className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-flex h-12 w-12 items-center justify-center rounded-[3px] border-2 border-shu font-mincho text-[14px] font-bold leading-[1.05] text-shu writing-vertical ${className}`}>
      {text}
    </span>
  )
}

export default function JapanLaunchView({ lang }: { lang: Lang }) {
  const loc = (href: string) => localizePath(href, lang)
  const faise = scope.items.filter((i) => i.by === 'faise')
  const partner = scope.items.filter((i) => i.by === 'partner')

  return (
    <main className={`${display.variable} ${mincho.variable} bg-white text-sumi`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildLd(lang)) }} />
      <PageCurtain />
      <ScrollProgress />
      <Nav base={loc('/')} />

      {/* 1. Hero：同じ商品を「海外の部屋｜日本の和室」で見せる左右分割の写真 */}
      <section className="relative bg-washi pt-16 md:pt-[76px]">
        <div className="lg:grid lg:min-h-[min(calc(100svh-76px),860px)] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
          {/* 写真（モバイルは上、デスクトップは右） */}
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:order-2 lg:aspect-auto">
            <Image src={hero.image.src} alt={hero.image.alt[lang]} fill priority sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover object-center" />
            {/* 分割線の左右に「海外 → 日本」のラベル */}
            <div aria-hidden="true" className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-3 md:bottom-8">
              <span className="rounded-full bg-black/55 px-3.5 py-1.5 font-mincho text-[13px] font-bold tracking-[0.12em] text-white backdrop-blur-sm md:px-4 md:text-[15px]">{hero.split.abroad[lang]}</span>
              <span className="text-[16px] font-bold text-white drop-shadow">→</span>
              <span className="rounded-full bg-beni px-3.5 py-1.5 font-mincho text-[13px] font-bold tracking-[0.12em] text-white md:px-4 md:text-[15px]">{hero.split.japan[lang]}</span>
            </div>
          </div>

          <div className="relative flex flex-col justify-center px-6 py-10 md:px-10 md:py-14 lg:order-1 lg:py-20 lg:pl-14 lg:pr-12 xl:pl-[max(56px,calc((100vw-1360px)/2+56px))]">
            <div aria-hidden="true" className="bg-seigaiha pointer-events-none absolute inset-x-0 bottom-0 h-1/3 opacity-70 [mask-image:linear-gradient(to_top,black,transparent)]" />
            <nav aria-label="breadcrumb" className="relative flex items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777] lg:absolute lg:top-8">
              <Link href={loc('/')} className="transition-colors hover:text-beni">{breadcrumb.home[lang]}</Link>
              <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
              <span aria-current="page" className="text-sumi">{breadcrumb.here[lang]}</span>
            </nav>
            <Reveal className="relative mt-6 max-w-[620px] lg:mt-0">
              <p className="flex items-center gap-4 text-beni">
                <Hanko />
                <span className="font-inter text-[11px] font-medium uppercase tracking-[0.3em] md:text-[12px]">{hero.label}</span>
              </p>
              <h1 className={`mt-6 font-mincho ${lang === 'ja' ? 'text-[clamp(26px,7vw,40px)] lg:text-[clamp(30px,2.7vw,44px)]' : 'text-[clamp(32px,8vw,52px)] lg:text-[clamp(36px,3.3vw,56px)]'} font-bold leading-[1.3] tracking-[0.02em] text-sumi`}>
                {hero.h1[lang][0]}
                <br />
                <span className="text-beni">{hero.h1[lang][1]}</span>
              </h1>
              <p className={`mt-6 ${bodyClass}`}>{hero.sub[lang]}</p>
              <a
                href={`#${FORM_ANCHOR}`}
                className="group mt-8 inline-flex items-center gap-3 rounded-sm bg-beni px-7 py-4 text-[14px] font-bold tracking-[0.06em] text-white transition-colors hover:bg-beni-deep"
              >
                {hero.cta[lang]}
                <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
              </a>
              <p className="mt-4 max-w-[30em] text-[12.5px] leading-[1.8] tracking-[0.03em] text-[#6b625e]">{hero.note[lang]}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={audience.label} kanji={kanji.audience} lines={audience.h2[lang]} />
            <p className={`mt-6 ${bodyClass}`}>{audience.lead[lang]}</p>
          </Reveal>
          <ul className="mt-10 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8">
            {audience.items.map((a, i) => {
              const img = images[a.img]
              return (
                <li key={a.img} className="group">
                  <Reveal delay={i * 0.06}>
                    <div className="relative aspect-[3/2] overflow-hidden bg-washi">
                      <span className="absolute bottom-0 left-0 z-10 h-[3px] w-full origin-left scale-x-0 bg-beni transition-transform duration-500 group-hover:scale-x-100" />
                      <Image src={img.src} alt={img.alt[lang]} width={img.w} height={img.h} sizes="(min-width: 768px) 33vw, 100vw" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                    </div>
                    <p className="mt-5 flex items-baseline gap-3">
                      <span aria-hidden="true" className="font-mincho text-[20px] font-bold text-beni">{kanjiNumerals[i]}</span>
                      <span className="font-mincho text-[19px] font-bold leading-[1.55] tracking-[0.03em]">{a.title[lang]}</span>
                    </p>
                    <p className="mt-2.5 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{a.body[lang]}</p>
                  </Reveal>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 2. Problem */}
      <section className={`${section} relative bg-washi`}>
        <div aria-hidden="true" className="bg-seigaiha pointer-events-none absolute inset-0 opacity-60" />
        <div className={`${container} relative`}>
          <Reveal className="max-w-3xl">
            <SecHead label={problems.label} kanji={kanji.problems} lines={problems.h2[lang]} />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {problems.items.map((p, i) => (
              <li key={i}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className={`h-full rounded-sm border-t-[3px] border-beni bg-white px-5 py-6 ${cardShadow}`}>
                    <p aria-hidden="true" className="font-mincho text-[34px] font-bold leading-none text-beni">{kanjiNumerals[i]}</p>
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
              <SecHead label={whyJapan.label} kanji={kanji.whyJapan} lines={whyJapan.h2[lang]} />
              <div className="mt-8 aspect-[16/9] overflow-hidden bg-washi">
                <Image src={images.tokyo.src} alt={images.tokyo.alt[lang]} width={images.tokyo.w} height={images.tokyo.h} sizes="(min-width: 1024px) 33vw, 100vw" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <ul className="grid gap-x-8 gap-y-8 md:grid-cols-3">
              {whyJapan.items.map((w, i) => (
                <li key={i} className="border-t-2 border-beni/70 pt-6">
                  <Reveal delay={i * 0.06}>
                    {/* TODO: 出典確認 — 数字は出典付きで whyJapan.items[].stat / source に入れたときだけ表示する */}
                    {w.stat && <p className="font-display text-[48px] leading-none text-beni">{w.stat}</p>}
                    <h3 className="font-mincho text-[18px] md:text-[19px] font-bold leading-[1.6] tracking-[0.03em]">{w.title[lang]}</h3>
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
      <section className={`${section} bg-washi`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={steps.label} kanji={kanji.steps} lines={steps.h2[lang]} />
            {steps.timeline && (
              <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-beni/30 bg-white px-4 py-1.5 text-[13px] font-medium tracking-[0.03em] text-beni">
                <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-shu" />
                {steps.timeline[lang]}
              </p>
            )}
          </Reveal>
          <ol className="relative mt-10 grid gap-0 md:mt-14 lg:grid-cols-5 lg:gap-6">
            <span aria-hidden="true" className="absolute left-[24px] right-[calc(20%-24px)] top-[24px] hidden h-[2px] bg-beni/40 lg:block" />
            {steps.items.map((s, i) => (
              <li key={i} className="relative flex gap-5 pb-8 last:pb-0 lg:block lg:pb-0">
                {i < steps.items.length - 1 && <span aria-hidden="true" className="absolute bottom-0 left-[23px] top-[48px] w-[2px] bg-beni/40 lg:hidden" />}
                <span className="relative z-10 flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[4px] bg-beni font-mincho text-[20px] font-bold text-white">
                  <span aria-hidden="true">{kanjiNumerals[i]}</span>
                  <span className="sr-only">{`Step ${i + 1}`}</span>
                </span>
                <Reveal delay={i * 0.06} className="pt-2 lg:pt-6">
                  <h3 className="font-mincho text-[18px] md:text-[19px] font-bold leading-[1.5] tracking-[0.02em]">{s.title[lang]}</h3>
                  <p className="mt-2.5 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{s.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 5. Channels（販路） */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={channels.label} kanji={kanji.channels} lines={channels.h2[lang]} />
          </Reveal>
          <ul className="mt-10 grid gap-px overflow-hidden rounded-sm border border-[#e6e1da] bg-[#e6e1da] md:mt-14 md:grid-cols-2 lg:grid-cols-4">
            {channels.items.map((c, i) => (
              <li key={i} className="bg-white px-6 py-7">
                <Reveal delay={i * 0.05}>
                  <p aria-hidden="true" className="font-mincho text-[15px] font-bold text-beni">{kanjiNumerals[i]}</p>
                  <h3 className="mt-2 font-mincho text-[19px] font-bold leading-[1.5]">{c.title[lang]}</h3>
                  <p className="mt-2 font-inter text-[12.5px] font-medium tracking-[0.04em] text-beni">{typeof c.names === 'string' ? c.names : c.names[lang]}</p>
                  <p className="mt-3 text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{c.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. What we handle */}
      <section className={`${section} bg-washi`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={scope.label} kanji={kanji.scope} lines={scope.h2[lang]} />
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
            <Reveal>
              <div className={`h-full rounded-sm bg-white px-5 py-6 md:px-8 md:py-8 ${cardShadow}`}>
                <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-beni">{scope.legend.faise[lang]}</p>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {faise.map((it) => (
                    <li key={it.name.en} className="flex gap-3 text-[15px] font-medium leading-[1.7] text-[#222]">
                      <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.2em] shrink-0 text-beni" />
                      {it.name[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="h-full rounded-sm border border-dashed border-beni/40 px-5 py-6 md:px-8 md:py-8">
                <p className="flex items-center gap-2 font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-[#555]">
                  <Handshake size={16} strokeWidth={1.5} aria-hidden="true" className="text-beni" />
                  {scope.legend.partner[lang]}
                </p>
                <ul className="mt-5 grid gap-3">
                  {partner.map((it) => (
                    <li key={it.name.en} className="flex gap-3 text-[15px] leading-[1.7] text-[#333]">
                      <span aria-hidden="true" className="mt-[0.7em] h-[6px] w-[6px] shrink-0 rounded-full border border-beni" />
                      {it.name[lang]}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 7. Roles（役割分担） */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={roles.label} kanji={kanji.roles} lines={roles.h2[lang]} />
          </Reveal>
          <div className="mt-10 grid gap-5 md:mt-14 md:grid-cols-2">
            {[roles.brand, roles.faise].map((r, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className={`relative h-full overflow-hidden rounded-sm px-6 py-7 md:px-8 ${i === 0 ? 'border border-[#e6e1da] bg-white' : 'bg-beni text-white'}`}>
                  {i === 1 && <div aria-hidden="true" className="bg-seigaiha-light pointer-events-none absolute inset-0" />}
                  <div className="relative">
                    <h3 className={`font-mincho text-[20px] font-bold ${i === 0 ? 'text-sumi' : 'text-white'}`}>{r.title[lang]}</h3>
                    <ul className="mt-5 space-y-3">
                      {r.items.map((it) => (
                        <li key={it.en} className={`flex gap-3 text-[15px] leading-[1.75] ${i === 0 ? 'text-[#333]' : 'text-white/95'}`}>
                          <Check size={18} strokeWidth={2} aria-hidden="true" className={`mt-[0.2em] shrink-0 ${i === 0 ? 'text-beni' : 'text-white'}`} />
                          {it[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partnership models */}
      <section className={`${section} relative bg-washi`}>
        <div aria-hidden="true" className="bg-seigaiha pointer-events-none absolute inset-0 opacity-60" />
        <div className={`${container} relative`}>
          <Reveal className="max-w-3xl">
            <SecHead label={models.label} kanji={kanji.models} lines={models.h2[lang]} />
          </Reveal>
          <ul className="mt-10 grid gap-4 md:mt-14 md:grid-cols-2 md:gap-6">
            {models.items.map((m, i) => (
              <li key={m.name}>
                <Reveal delay={i * 0.06} className="h-full">
                  <div className={`flex h-full flex-col rounded-sm border-t-[3px] border-beni bg-white px-6 py-7 ${cardShadow}`}>
                    <p className="font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-beni">{m.name}</p>
                    <h3 className="mt-3 font-mincho text-[19px] font-bold leading-[1.55] tracking-[0.02em]">{m.title[lang]}</h3>
                    <p className="mt-3 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{m.body[lang]}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[13px] leading-[1.9] tracking-[0.03em] text-[#6b625e]">{models.note[lang]}</p>
        </div>
      </section>

      {/* 9. Why Faise / Track record */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <Reveal className="max-w-3xl">
            <SecHead label={track.label} kanji={kanji.track} lines={track.h2[lang]} />
          </Reveal>

          <div className="mt-10 grid items-center gap-8 md:mt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
            <Reveal>
              <div className="aspect-[3/2] overflow-hidden bg-washi">
                <Image src={images.shoot.src} alt={images.shoot.alt[lang]} width={images.shoot.w} height={images.shoot.h} sizes="(min-width: 1024px) 50vw, 100vw" className="h-full w-full object-cover" />
              </div>
            </Reveal>
            <ul className="grid gap-6">
              {track.strengths.map((s, i) => (
                <li key={i} className="flex gap-4 border-t border-[#ece6df] pt-5 first:border-t-0 first:pt-0 lg:first:border-t lg:first:pt-5">
                  <span aria-hidden="true" className="font-mincho text-[22px] font-bold leading-[1.3] text-beni">{kanjiNumerals[i]}</span>
                  <Reveal delay={i * 0.06}>
                    <h3 className="font-mincho text-[18px] md:text-[19px] font-bold leading-[1.55] tracking-[0.02em]">{s.title[lang]}</h3>
                    <p className="mt-2 text-[14.5px] md:text-[14px] leading-[1.95] tracking-[0.02em] text-[#555]">{s.body[lang]}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <Reveal>
              {/* 写真は中央寄りで正方形〜4:3に切り抜く（元画像右下のマークが入らないように） */}
              <div className="h-full overflow-hidden rounded-sm border border-[#e6e1da] sm:flex">
                <div className="relative aspect-[4/3] bg-washi sm:aspect-auto sm:min-h-[260px] sm:w-[42%] sm:shrink-0">
                  <Image src={images.founder.src} alt={images.founder.alt[lang]} fill sizes="(min-width: 640px) 25vw, 100vw" className="object-cover object-[50%_25%]" />
                </div>
                <div className="px-6 py-7 md:px-8">
                  <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-beni">Founder</p>
                  <p className="mt-2 font-mincho text-[19px] font-bold">{track.founder.name[lang]}</p>
                  <ol className="mt-5 space-y-3">
                    {track.founder.career.map((c) => (
                      <li key={c.period} className="grid grid-cols-[6.5em_1fr] gap-3 text-[14.5px] leading-[1.7]">
                        <span className="font-inter text-[13px] tracking-[0.06em] text-[#888]">{c.period}</span>
                        <span className="text-[#222]">{c.org[lang]}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              {/* 実績：海外ブランドの日本展開（シスペラ） */}
              <div className="h-full overflow-hidden rounded-sm bg-beni text-white sm:flex">
                <div className="flex items-center justify-center bg-white px-6 py-6 sm:w-[38%] sm:shrink-0">
                  <Image
                    src={track.featured.image.src}
                    alt={track.featured.image.alt[lang]}
                    width={track.featured.image.w}
                    height={track.featured.image.h}
                    sizes="160px"
                    className="h-[220px] w-auto object-contain sm:h-[240px]"
                  />
                </div>
                <div className="relative px-6 py-7 md:px-8">
                  <div aria-hidden="true" className="bg-seigaiha-light pointer-events-none absolute inset-0" />
                  <div className="relative">
                    <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-white/80">
                      {track.featured.label[lang]} — {track.featured.brand}
                    </p>
                    <h3 className="mt-2 font-mincho text-[20px] font-bold leading-[1.5]">{track.featured.title[lang]}</h3>
                    <p className="mt-3 text-[14.5px] leading-[1.9] text-white/90">{track.featured.body[lang]}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {track.featured.tags.map((t) => (
                        <li key={t.en} className="rounded-full border border-white/40 px-3 py-1 text-[12px] tracking-[0.04em] text-white">{t[lang]}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <p className="mt-12 text-[13px] font-medium tracking-[0.06em] text-[#777]">{track.casesLabel[lang]}</p>
          <ul className="mt-4 grid gap-4 md:grid-cols-3">
            {cases.map((c) => (
              <li key={c.slug} className="rounded-sm bg-washi px-5 py-6">
                <p className="font-inter text-[11px] font-medium tracking-[0.22em] text-beni">{c.category}</p>
                <p className="mt-1.5 text-[15px] font-medium">{c.title[lang]}</p>
                <p className="mt-3 text-[12.5px] text-[#555]">{c.metric.label[lang]}</p>
                <p className="mt-1 flex items-baseline gap-1 whitespace-nowrap">
                  <span className="font-display text-[52px] leading-none text-beni">
                    <CountUp to={c.metric.value} />
                  </span>
                  <span className="text-[17px] font-medium text-sumi">{c.metric.unit[lang]}</span>
                </p>
                {c.metric.sub && <p className="mt-1.5 text-[12.5px] text-[#555]">{c.metric.sub[lang]}</p>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faq" className={`${section} bg-washi`}>
        <div className="mx-auto w-full max-w-[860px] px-6 md:px-10">
          <SecHead label={faq.label} kanji={kanji.faq} lines={[faq.h2[lang]]} />
          <FaqList items={faq.items.map((f) => ({ q: f.q[lang], a: f.a[lang] }))} className="mt-8" divider="divide-[#ddd6cd] border-[#ddd6cd]" />
        </div>
      </section>

      {/* 11. CTA + Form */}
      <section id={FORM_ANCHOR} className="relative scroll-mt-16 overflow-hidden bg-beni py-16 md:py-28">
        <div aria-hidden="true" className="bg-seigaiha-light pointer-events-none absolute inset-0" />
        <p aria-hidden="true" className="pointer-events-none absolute -bottom-[0.12em] left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(120px,26vw,360px)] uppercase leading-none text-white/[0.06]">
          Japan
        </p>
        <div className="relative mx-auto grid w-full max-w-[1120px] gap-10 px-4 md:px-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14">
          <div className="px-2">
            <SecHead label={form.label} kanji={kanji.form} lines={[form.h2[lang]]} light />
            <p className="mt-4 max-w-[34em] text-[14.5px] leading-[1.95] tracking-[0.03em] text-white/85">{form.lead[lang]}</p>
            <ul className="mt-8 space-y-3">
              {form.assurances.map((a) => (
                <li key={a.en} className="flex gap-3 text-[14.5px] leading-[1.7] text-white">
                  <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.2em] shrink-0 text-white" />
                  {a[lang]}
                </li>
              ))}
            </ul>
          </div>
          <JapanLaunchForm lang={lang} />
        </div>
      </section>

      <Footer />
    </main>
  )
}
