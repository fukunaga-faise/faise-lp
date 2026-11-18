import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Handshake, X } from 'lucide-react'
import NinjaHeader from '@/components/NinjaHeader'
import LaunchNinjaLogo, { LaunchNinjaMark } from '@/components/LaunchNinjaLogo'
import FaqList from '@/components/FaqList'
import JapanLaunchForm from '@/components/JapanLaunchForm'
import { CardRail, ScrollFx, StickyCta } from '@/components/NinjaFx'
import { display, serif } from '@/lib/jl-fonts-en'
import { SITE_URL, ORG_ID, FOUNDER_LINKEDIN_URL } from '@/lib/site'
import { GUIDE_BASE, japanGuides } from '@/lib/japan-guides'
import { JAPAN_LAUNCH_PATH, JAPAN_LAUNCH_PATH_EN, form, images, track } from '@/lib/japan-launch'
import {
  CORPORATE_NUMBER,
  CTA_LABEL,
  CTA_SHORT,
  CTA_NOTE,
  NINJA_NAME,
  SCAN_ANCHOR,
  about,
  caseMetrics,
  clan,
  clanSection,
  companyFacts,
  finalCta,
  flow,
  leader,
  makuake,
  midCta,
  ninjaFaq,
  ninjaHero,
  ninjaMeta,
  ninjaNav,
  promises,
  service,
  trustBar,
  waysToWork,
  whoFor,
  type NinjaKey,
} from '@/lib/japan-ninja'

// LAUNCH NINJA by Faise：英語LP（/en/launch-ninja）。日本語版（/japan-launch）は JapanLaunchView のまま。
// 構成：海外メーカーの実際の質問（独占条件・費用・支払・売れる根拠・法規・既存チャネル・会社の信頼性）に、上から順に答える。
const lang = 'en' as const
const url = `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}`
const OG = '/og/launch-ninja.jpg' // 生成: node scripts/generate-launch-ninja-brand.mjs
// 主CTA の行き先：ページ下部の問い合わせフォーム
const CTA_HREF = `#${SCAN_ANCHOR}`

export function japanNinjaMetadata(): Metadata {
  return {
    title: ninjaMeta.title,
    description: ninjaMeta.description,
    alternates: { canonical: JAPAN_LAUNCH_PATH_EN, languages: { en: JAPAN_LAUNCH_PATH_EN, ja: JAPAN_LAUNCH_PATH, 'x-default': JAPAN_LAUNCH_PATH_EN } },
    openGraph: {
      title: ninjaMeta.title,
      description: ninjaMeta.description,
      type: 'website',
      locale: 'en_US',
      url,
      siteName: 'Faise Inc.',
      images: [{ url: OG, width: 1200, height: 630, alt: NINJA_NAME }],
    },
    twitter: { card: 'summary_large_image', title: ninjaMeta.title, description: ninjaMeta.description, images: [OG] },
    // このページだけ LAUNCH NINJA のマークをファビコンにする
    icons: { icon: [{ url: '/images/japan-ninja/launch-ninja-icon.svg', type: 'image/svg+xml' }, { url: '/images/japan-ninja/launch-ninja-icon-192.png', sizes: '192x192', type: 'image/png' }], apple: '/images/japan-ninja/launch-ninja-apple.png' },
  }
}

const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      // サイト共通の Organization（RootShell）に、英語LP向けの事実を補う（同じ @id）
      '@type': 'Organization',
      '@id': ORG_ID,
      name: 'Faise Inc.',
      legalName: '株式会社Faise',
      alternateName: ['Faise', '株式会社Faise'],
      foundingDate: '2025-12',
      founder: { '@type': 'Person', name: 'Haruto Fukunaga', sameAs: [FOUNDER_LINKEDIN_URL] },
      address: { '@type': 'PostalAddress', streetAddress: '4-18-25 Oi', addressLocality: 'Shinagawa-ku', addressRegion: 'Tokyo', postalCode: '140-0014', addressCountry: 'JP' },
      sameAs: [FOUNDER_LINKEDIN_URL],
      ...(CORPORATE_NUMBER ? { identifier: { '@type': 'PropertyValue', propertyID: 'Japan Corporate Number', value: CORPORATE_NUMBER } } : {}),
    },
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: NINJA_NAME,
      alternateName: 'LAUNCH NINJA',
      serviceType: 'Japan market entry, exclusive distribution and Makuake launch for overseas brands',
      description: ninjaMeta.definition,
      url,
      inLanguage: 'en',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'Japan' },
      audience: { '@type': 'BusinessAudience', name: 'Overseas consumer product makers and brands, including Kickstarter and Indiegogo creators' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Ways to work',
        itemListElement: waysToWork.items.map((m) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: m.name, description: m.body } })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: ninjaFaq.items.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
  ],
}

// 画像は表示サイズに変換済みの WebP を直接配信する（next/image の最適化 /_next/image を通さない）。
// 生成: node scripts/build-japan-ninja-webp.mjs → public/images/japan-ninja/web/
const W = (name: string) => `/images/japan-ninja/web/${name}.webp`

// 江戸×最新ガジェットの挿絵（AI生成の浮世絵風イラスト）の説明文
const edoAlt: Record<string, string> = {
  market: 'Ukiyo-e style illustration of an Edo market street where stalls sell smartphones, earbuds and skincare, and townspeople check their phones',
  beauty: 'Ukiyo-e style illustration of a woman in an Edo kimono at a mirror stand, applying cream from a modern pump bottle',
  lifestyle: 'Ukiyo-e style illustration of an Edo traveler resting at a teahouse with an insulated bottle, a modern backpack and an LED lantern, Mount Fuji behind',
  gadgets: 'Ukiyo-e style illustration of an Edo townsman wearing wireless earbuds and using a tablet, with a smart speaker and smartwatch on the counter',
}

const container = 'mx-auto w-full max-w-[1280px] px-5 md:px-10'
const section = 'py-16 md:py-24'
const ninjaByKey = Object.fromEntries(clan.map((c) => [c.key, c])) as Record<NinjaKey, (typeof clan)[number]>
// 未確定（{{TODO}}）の数値は表示しない
const shownMetrics = caseMetrics.filter((m) => !m.value.includes('TODO'))

// 見出し上の小ラベル。seal を渡すと朱色の落款（漢字1字・装飾）を添える
function Eyebrow({ children, light = false, seal }: { children: React.ReactNode; light?: boolean; seal?: string }) {
  return (
    <p className={`flex items-center gap-3 font-inter text-[11px] font-semibold uppercase tracking-[0.26em] md:text-[12px] ${light ? 'text-[#F2B4A2]' : 'text-beni'}`}>
      {seal ? (
        <span aria-hidden="true" className="inline-flex h-8 w-8 items-center justify-center rounded-[3px] bg-shu font-mincho text-[17px] font-bold leading-none tracking-normal text-white shadow-[2px_2px_0_#1D1B1A]">
          {seal}
        </span>
      ) : (
        <span className={`h-px w-8 ${light ? 'bg-[#F2B4A2]/60' : 'bg-beni/50'}`} />
      )}
      {children}
    </p>
  )
}

// 浮世絵の「版画」風の枠（黒い輪郭線と、ずらした影）
const print = 'border-2 border-sumi shadow-[5px_5px_0_#1D1B1A]'

function H2({ lines, light = false, className = '' }: { lines: string[] | string; light?: boolean; className?: string }) {
  const ls = Array.isArray(lines) ? lines : [lines]
  return (
    <h2 className={`mt-5 font-mincho text-[clamp(25px,6.6vw,32px)] font-bold leading-[1.35] tracking-[0.01em] md:text-[clamp(30px,3.2vw,44px)] ${light ? 'text-white' : 'text-sumi'} ${className}`}>
      {ls.map((l, i) => (
        <span key={i} className="block">
          {l}
        </span>
      ))}
    </h2>
  )
}

// セクション見出し（中央寄せ。後ろに大きな英字を薄く敷く）
function SectionHead({ en, label, title, light = false }: { en: string; label: string; title: string[] | string; light?: boolean }) {
  return (
    <div data-fx className="relative text-center">
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-1/2 top-[-0.42em] -translate-x-1/2 select-none whitespace-nowrap font-display text-[clamp(76px,18vw,190px)] uppercase leading-none ${light ? 'text-white/[0.07]' : 'text-sumi/[0.06]'}`}
      >
        {en}
      </span>
      <p className={`relative flex items-center justify-center gap-3 font-inter text-[12px] font-semibold uppercase tracking-[0.3em] ${light ? 'text-[#F2B4A2]' : 'text-beni'}`}>
        <span className="h-px w-8 bg-current opacity-50" />
        {label}
        <span className="h-px w-8 bg-current opacity-50" />
      </p>
      <H2 lines={title} light={light} className="relative mx-auto max-w-3xl" />
    </div>
  )
}

// 主CTA：問い合わせフォームへ
function CtaButton({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <a
      href={CTA_HREF}
      className={`ninja-shine group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full px-7 py-4 text-[15px] font-bold tracking-[0.02em] transition-colors ${
        light ? 'bg-white text-beni hover:bg-washi' : 'bg-beni text-white hover:bg-beni-deep'
      } ${className}`}
    >
      {CTA_LABEL}
      <ArrowRight size={17} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}

// 忍者の小さなアイコン（キャラクター画像の顔まわりを丸く切り抜く）
function NinjaAvatar({ k, size = 36 }: { k: NinjaKey; size?: number }) {
  const n = ninjaByKey[k]
  return (
    <span
      className="relative inline-block shrink-0 overflow-hidden rounded-full ring-2"
      style={{ width: size, height: size, ['--tw-ring-color' as string]: n.color }}
      title={`${n.name} — ${n.role}`}
    >
      <Image unoptimized src={W(n.key)} alt="" fill sizes={`${size}px`} className="object-cover object-[50%_14%] scale-[2.2] origin-[50%_14%]" />
    </span>
  )
}

// スクロール表示の遅延（ms）
const delay = (ms: number) => ({ ['--fx-d' as string]: `${ms}ms` }) as React.CSSProperties

export default function JapanNinjaView() {
  const featured = track.featured
  return (
    <main className={`${display.variable} ${serif.variable} bg-white text-sumi`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <ScrollFx />
      <NinjaHeader home={JAPAN_LAUNCH_PATH_EN} links={ninjaNav} ctaHref={CTA_HREF} ctaLabel={CTA_LABEL} ctaShort={CTA_SHORT} altHref="/" />

      {/* 1. Hero：誰に・何をするかを最初の画面で。主CTA＝問い合わせフォーム。
          背景は LAUNCH NINJA のマークの透過 */}
      <section className="relative overflow-hidden bg-[#141A2E] pt-16 text-white md:pt-[76px]">
        {/* 背景：LAUNCH NINJA のマークを大きく透過させて置く（ゆっくり浮き沈み） */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-seigaiha-light">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_72%_45%,rgba(210,73,43,0.28),transparent_58%)]" />
          <div className="absolute right-[-30%] top-[46%] w-[150%] -translate-y-1/2 opacity-[0.14] sm:right-[-12%] sm:w-[90%] md:right-[-4%] md:top-1/2 md:w-[60%] md:opacity-[0.2] lg:w-[54%]">
            <div className="ninja-float">
              <LaunchNinjaMark tone="dark" className="h-auto w-full" />
            </div>
          </div>
        </div>
        <div className={`${container} relative flex min-h-[calc(100svh-64px)] flex-col justify-center py-12 md:min-h-[640px] md:py-20 lg:min-h-[calc(100svh-76px)]`}>
          <div className="max-w-[640px]">
            <p>
              <LaunchNinjaLogo tone="dark" markClassName="h-11 w-auto md:h-14" textClassName="text-[26px] md:text-[32px]" />
              <span className="sr-only">{ninjaHero.eyebrow}</span>
            </p>
            <p className="mt-6 font-mincho text-[16px] font-bold text-[#F2B4A2] md:text-[18px]">{ninjaHero.kicker}</p>
            <h1 className="mt-3 font-mincho font-bold tracking-[0.005em]">
              <span className="block text-[clamp(34px,9vw,46px)] leading-[1.12] md:text-[clamp(48px,5vw,68px)]">{ninjaHero.h1[0]}</span>
              <span className="mt-3 block text-[clamp(19px,4.8vw,24px)] leading-[1.45] text-white/90 md:text-[clamp(22px,2vw,28px)]">{ninjaHero.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-[34em] text-[16px] leading-[1.8] text-white/85 md:text-[17px]">{ninjaHero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton />
              <a href="#about" className="text-[15px] font-semibold text-white underline decoration-1 underline-offset-[6px] hover:text-[#F2B4A2]">
                Meet the clan
              </a>
            </div>
            <p className="mt-4 text-[13px] text-white/75">{CTA_NOTE}</p>
          </div>
          {/* 信頼バー：実在する会社であることを最初に示す */}
          <ul className="mt-12 flex flex-wrap gap-x-6 gap-y-2 border-t border-white/15 pt-5 text-[13px] text-white/80">
            {trustBar.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.25} aria-hidden="true" className="text-[#F2B4A2]" />
                {t}
              </li>
            ))}
            {CORPORATE_NUMBER && <li>Corporate No. {CORPORATE_NUMBER}</li>}
          </ul>
        </div>
      </section>

      {/* 2. LAUNCH NINJA とは？：大見出し（1文字ずつ表示）＋4人のカード（PCは横並び、スマホはカルーセル）＋流れる帯 */}
      <section id="about" className="relative scroll-mt-16 overflow-hidden bg-washi bg-seigaiha pt-16 md:pt-24">
        <div className={container}>
          <div className="text-center">
            <p data-fx className="flex items-center justify-center gap-3 font-inter text-[12px] font-semibold uppercase tracking-[0.3em] text-beni">
              <span className="h-px w-8 bg-beni/50" />
              {about.label}
              <span className="h-px w-8 bg-beni/50" />
            </p>
            <p data-fx style={delay(80)} className="mt-6 font-mincho text-[clamp(22px,5vw,34px)] font-bold">
              {about.pre}
            </p>
            <h2 data-fx="type" aria-label={`${about.pre} ${about.title}`} className="mt-1 font-display text-[clamp(52px,14vw,128px)] uppercase leading-[0.95] tracking-[0.01em]">
              {about.title.split('').map((ch, i) => (
                <span key={i} aria-hidden="true" className={`fx-ch ${i >= 7 ? 'text-shu' : 'text-sumi'}`} style={{ ['--i' as string]: i }}>
                  {ch === ' ' ? ' ' : ch}
                </span>
              ))}
              <span aria-hidden="true" className="ninja-caret ml-1 inline-block h-[0.75em] w-[0.07em] translate-y-[0.04em] bg-sumi" />
            </h2>
            <p data-fx style={delay(150)} className="mt-6 font-mincho text-[clamp(20px,4.6vw,30px)] font-bold leading-[1.45]">
              {about.lead.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </p>
            <p data-fx style={delay(220)} className="mx-auto mt-5 max-w-[46em] text-[15.5px] leading-[1.85] text-[#555]">
              {ninjaMeta.definition}
            </p>
          </div>
          <div className="mt-12">
            <CardRail label="The four LAUNCH NINJA specialists">
              {clan.map((c, i) => (
                <li key={c.key} data-fx="pop" style={delay(i * 120)} className="w-[78%] shrink-0 snap-center sm:w-[46%] lg:w-auto">
                  <article
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-sumi shadow-[0_10px_24px_rgba(28,25,23,0.18)] transition-transform duration-300 hover:-translate-y-2 hover:-rotate-1"
                    style={{ backgroundColor: c.color }}
                  >
                    <h3 className="whitespace-nowrap px-3 pt-5 text-center font-display text-[22px] uppercase tracking-[0.03em] text-white lg:text-[19px] xl:text-[23px]">#{c.role}</h3>
                    <div className="relative mx-4 mt-3 aspect-[4/5] overflow-hidden rounded-xl border-2 border-sumi bg-washi">
                      <Image unoptimized src={W(c.key)} alt={c.alt} fill sizes="(min-width: 1024px) 22vw, 70vw" className="object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="mt-5 flex flex-1 flex-col border-t-2 border-sumi bg-white px-4 py-4 text-center">
                      <p className="font-inter text-[12px] font-semibold italic text-[#595959]">{c.name}</p>
                      <p className="mt-1 text-[15px] font-bold leading-[1.4]" style={{ color: c.color }}>
                        {c.does}
                      </p>
                      <p className="mt-3 text-[13px] leading-[1.6] text-[#444]">“{c.catch}”</p>
                      <p className="mt-auto pt-3 text-[11.5px] leading-[1.6] text-[#595959]">
                        <span className="font-semibold italic">{clanSection.legendNote}</span> {c.legend}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </CardRail>
          </div>
        </div>
        {/* 流れる帯（装飾） */}
        <div aria-hidden="true" className="mt-14 overflow-hidden border-y-2 border-sumi bg-shu py-3 md:mt-20">
          <div className="ninja-marquee flex w-max">
            {[0, 1].map((k) => (
              <div key={k} className="flex shrink-0">
                {Array.from({ length: 8 }, (_, i) => (
                  <span key={i} className="flex items-center gap-6 px-6 font-display text-[22px] italic uppercase tracking-[0.04em] text-white md:text-[28px]">
                    {about.ribbon}
                    <span className="text-sumi">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Who it's for：Kickstarter などで実績のあるメーカー */}
      <section id="who" className={`${section} scroll-mt-16 bg-white`}>
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
            <div data-fx>
              <Eyebrow seal="客">{whoFor.label}</Eyebrow>
              <H2 lines={whoFor.h2} />
            </div>
            <ul className="space-y-3">
              {whoFor.items.map((it, i) => (
                <li key={it} data-fx="right" style={delay(i * 90)} className="flex gap-3 text-[16px] leading-[1.6]">
                  <Check size={19} strokeWidth={2.25} aria-hidden="true" className="mt-[0.15em] shrink-0 text-beni" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {whoFor.categories.map((a, i) => (
              <li key={a.img} data-fx style={delay(i * 120)}>
                <div className={`group relative aspect-[3/2] overflow-hidden ${print}`}>
                  <Image unoptimized src={W(`edo-${a.img}`)} alt={edoAlt[a.img]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-mincho text-[20px] font-bold">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#555]">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. 5 PROMISES：Myth → So we... */}
      <section id="promises" className={`${section} scroll-mt-16 bg-[#141A2E] bg-seigaiha-light text-white`}>
        <div className={container}>
          <div data-fx className="mx-auto max-w-3xl text-center">
            <p className="flex items-center justify-center gap-3 font-inter text-[12px] font-semibold uppercase tracking-[0.3em] text-[#F2B4A2]">
              <span className="h-px w-8 bg-[#F2B4A2]/60" />
              {promises.label}
              <span className="h-px w-8 bg-[#F2B4A2]/60" />
            </p>
            <H2 lines={promises.h2} light />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-white/80">{promises.lead}</p>
          </div>
          <ol className="mt-12 space-y-5">
            {promises.items.map((p, i) => (
              <li key={i} data-fx={i % 2 ? 'right' : 'left'} className="grid gap-5 rounded-2xl border-2 border-white/15 bg-white/[0.03] p-5 md:grid-cols-[150px_minmax(0,1fr)_40px_minmax(0,1.1fr)] md:items-center md:gap-6 md:p-7">
                <p className="flex items-baseline gap-2 md:block">
                  <span className="font-inter text-[12px] font-bold uppercase tracking-[0.2em] text-white/70">Promise</span>
                  <span className="font-display text-[44px] leading-none text-shu md:block md:text-[64px]">{String(i + 1).padStart(2, '0')}</span>
                </p>
                <div className="rounded-xl border-2 border-white/25 bg-white/5 p-4">
                  <p className="font-inter text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5A3B1]">The myth</p>
                  <p className="mt-1.5 flex gap-2 text-[16px] leading-[1.55] text-white/80">
                    <X size={18} strokeWidth={2.25} aria-hidden="true" className="mt-[0.2em] shrink-0 text-[#F5A3B1]" />“{p.myth}”
                  </p>
                </div>
                <p aria-hidden="true" className="text-center text-[22px] text-[#F2B4A2] md:rotate-[-90deg]">↓</p>
                <div className="flex items-start gap-3">
                  <NinjaAvatar k={p.ninja} size={42} />
                  <p>
                    <span className="inline-block rounded-full bg-beni px-3 py-1 font-inter text-[11.5px] font-bold uppercase tracking-[0.14em] text-white">So we…</span>
                    <span className="mt-2 block text-[17px] font-bold leading-[1.5] text-white">{p.so}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 中間CTA */}
      <section className="relative overflow-hidden bg-beni py-12 text-white md:py-16">
        <div className={`${container} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`}>
          <div data-fx="left">
            <p className="font-mincho text-[clamp(21px,5vw,30px)] font-bold leading-[1.4]">{midCta.h2}</p>
            <p className="mt-2 text-[15px] text-white/85">{midCta.body}</p>
          </div>
          <div data-fx="pop" className="flex shrink-0 flex-wrap items-center gap-x-7 gap-y-4">
            <CtaButton light />
          </div>
        </div>
      </section>

      {/* 5. Case（VOICE）：夜の城下町を背景に、事例カード＋クリエイター動画 */}
      <section id="case" className="relative scroll-mt-16 overflow-hidden bg-[#141A2E] py-20 text-white md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image unoptimized src={W('edo-night-street')} alt="" fill sizes="100vw" className="object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#141A2E]/70 via-[#141A2E]/40 to-[#141A2E]" />
        </div>
        <div className={`${container} relative`}>
          <SectionHead en="Voice" label={featured.label.en} title={featured.title.en} light />
          <div data-fx className="mt-12 grid overflow-hidden rounded-2xl border-2 border-sumi bg-white text-sumi shadow-[0_20px_50px_-20px_rgba(0,0,0,0.6)] md:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <div className="relative flex items-center justify-center bg-washi bg-seigaiha p-8">
              <span className="absolute left-4 top-4 rounded-full border-2 border-sumi bg-white px-3 py-1 font-inter text-[11px] font-bold uppercase tracking-[0.18em]">Case 01</span>
              <Image unoptimized src={W('case-cyspera')} alt={featured.image.alt.en} width={featured.image.w} height={featured.image.h} sizes="200px" className="ninja-bob h-[220px] w-auto object-contain md:h-[280px]" />
            </div>
            <div className="p-6 md:p-10">
              <p className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-beni">{featured.brand}</p>
              <p className="mt-3 text-[16px] leading-[1.85] text-[#333]">{featured.body.en}</p>
              <p className="mt-6 font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-[#666]">{featured.workLabel.en}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {featured.work.map((w) => (
                  <li key={w.en} className="inline-flex items-center gap-1.5 rounded-full border-2 border-sumi bg-washi px-3.5 py-1.5 text-[13.5px] font-semibold">
                    <Check size={14} strokeWidth={2.5} aria-hidden="true" className="text-beni" />
                    {w.en}
                  </li>
                ))}
              </ul>
              {/* 数値枠。TODO: 数値 — caseMetrics の value が確定したものだけ表示される（japan-ninja.ts） */}
              {shownMetrics.length > 0 && (
                <ul className="mt-6 grid grid-cols-2 gap-3">
                  {shownMetrics.map((m) => (
                    <li key={m.label} className="rounded-xl border-2 border-sumi bg-washi p-4">
                      <p className="text-[12.5px] font-medium text-[#555]">{m.label}</p>
                      <p className="mt-1.5 font-display text-[30px] leading-none text-beni">{m.value}</p>
                      <p className="mt-1.5 text-[11.5px] text-[#595959]">{m.note}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="mt-14 md:mx-auto md:max-w-[900px]">
            <p data-fx className="text-center font-mincho text-[20px] font-bold md:text-[22px]">
              {featured.videosLabel.en}
            </p>
            <ul className="no-scrollbar -mx-5 mt-6 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
              {featured.videos.map((v, i) => (
                <li key={i} data-fx="pop" style={delay(i * 120)} className="w-[70%] shrink-0 snap-start sm:w-[44%] md:w-auto">
                  <a href={v.url ?? '#'} target="_blank" rel="noopener" className="group block" aria-label={`${v.platform} — watch the creator video ${i + 1}`}>
                    <div className="relative aspect-[9/16] overflow-hidden rounded-2xl border-2 border-white/80 bg-sumi transition-transform duration-300 group-hover:-translate-y-1.5 group-hover:-rotate-1">
                      <Image unoptimized src={W(`reel-${i + 1}`)} alt={v.alt.en} fill sizes="(min-width: 768px) 30vw, 70vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-inter text-[11px] font-medium text-white">{v.platform}</span>
                      <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-beni shadow-lg transition-transform group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </span>
                      <span className="absolute bottom-3 right-3 text-[12px] text-white">{featured.watch.en} ↗</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Service：4人それぞれの担当（色つきのカード）＋パートナー・販路 */}
      <section id="service" className="relative scroll-mt-16 overflow-hidden bg-washi bg-seigaiha py-20 md:py-28">
        <div className={container}>
          <SectionHead en="Service" label={service.label} title={service.h2} />
          <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {clan.map((c, i) => (
              <li key={c.key} data-fx="pop" style={delay(i * 110)} className="overflow-hidden rounded-2xl border-2 border-sumi bg-white shadow-[0_10px_24px_rgba(28,25,23,0.14)] transition-transform duration-300 hover:-translate-y-1.5">
                <div className="flex items-center gap-3 px-4 py-3.5 text-white" style={{ backgroundColor: c.color }}>
                  <NinjaAvatar k={c.key} size={42} />
                  <div className="min-w-0">
                    <p className="font-display text-[19px] uppercase leading-none tracking-[0.03em]">#{c.role}</p>
                    <p className="mt-1 truncate text-[12px] text-white/85">{c.name}</p>
                  </div>
                </div>
                <ul className="space-y-2.5 p-5">
                  {service.faise
                    .filter((s) => s.ninja === c.key)
                    .map((s) => (
                      <li key={s.name} className="flex gap-2.5 text-[15px] font-medium leading-[1.5]">
                        <Check size={17} strokeWidth={2.5} aria-hidden="true" className="mt-[0.2em] shrink-0" style={{ color: c.color }} />
                        {s.name}
                      </li>
                    ))}
                </ul>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {[
              { title: service.partnerTitle, items: service.partner, icon: <Handshake size={18} strokeWidth={1.75} aria-hidden="true" className="text-beni" /> },
              { title: service.channelsTitle, items: service.channels, icon: <ArrowRight size={18} strokeWidth={2} aria-hidden="true" className="text-beni" /> },
            ].map((g) => (
              <div key={g.title} data-fx className="rounded-2xl border-2 border-dashed border-sumi/40 bg-white/80 p-5">
                <p className="flex items-center gap-2 font-mincho text-[17px] font-bold">
                  {g.icon}
                  {g.title}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((p) => (
                    <span key={p} className="rounded-full border-2 border-sumi bg-white px-3 py-1 text-[13.5px] font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Ways to work：3つのモデル＋Makuake の説明 */}
      <section id="models" className="relative scroll-mt-16 overflow-hidden bg-white py-20 md:py-28">
        <div className={container}>
          <SectionHead en="Plans" label={waysToWork.label} title={waysToWork.h2} />
          <ul className="mt-12 grid gap-6 lg:grid-cols-3">
            {waysToWork.items.map((m, i) => (
              <li key={m.name} data-fx style={delay(i * 120)} className="flex flex-col overflow-hidden rounded-2xl border-2 border-sumi bg-white shadow-[0_10px_24px_rgba(28,25,23,0.14)] transition-transform duration-300 hover:-translate-y-1.5">
                <div className={`flex items-center justify-between px-6 py-4 text-white ${['bg-beni', 'bg-shu', 'bg-sumi'][i]}`}>
                  <p className="font-display text-[22px] uppercase tracking-[0.03em]">{m.name}</p>
                  <span className="font-display text-[34px] leading-none text-white/40">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-mincho text-[21px] font-bold leading-[1.4]">{m.title}</h3>
                  <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">{m.body}</p>
                  <p className="mt-auto flex gap-2 border-t-2 border-dashed border-sumi/15 pt-4 text-[14px] font-semibold">
                    <Check size={17} strokeWidth={2.5} aria-hidden="true" className="mt-[0.15em] shrink-0 text-beni" />
                    {m.best}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-center text-[14px] text-[#595959]">{waysToWork.note}</p>
          <div data-fx className="mt-12 grid overflow-hidden rounded-2xl border-2 border-sumi bg-[#141A2E] text-white md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div className="relative aspect-[16/10] md:aspect-auto">
              <Image unoptimized src={W('edo-market')} alt={edoAlt.market} fill sizes="(min-width: 768px) 45vw, 100vw" className="object-cover" />
            </div>
            <div className="p-6 md:p-10">
              <p className="font-inter text-[11px] font-bold uppercase tracking-[0.22em] text-[#F2B4A2]">Makuake</p>
              <h3 className="mt-2 font-mincho text-[24px] font-bold">{makuake.title}</h3>
              <p className="mt-3 text-[15px] leading-[1.85] text-white/85">{makuake.body}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Flow：問い合わせから拡販まで（PCは横のタイムライン、スマホは縦） */}
      <section id="flow" className="relative scroll-mt-16 overflow-hidden bg-[#141A2E] bg-seigaiha-light py-20 text-white md:py-28">
        <div className={`${container} relative`}>
          <SectionHead en="Flow" label={flow.label} title={flow.h2} light />
          <ol className="relative mt-14 grid gap-5 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-8">
            {/* つなぐ線 */}
            <span aria-hidden="true" className="absolute left-[27px] top-2 h-[calc(100%-1rem)] w-0.5 bg-gradient-to-b from-shu via-shu/60 to-transparent lg:hidden" />
            {flow.steps.map((s, i) => (
              <li key={s.title} data-fx={i % 2 ? 'right' : 'left'} style={delay(i * 90)} className="relative flex gap-4">
                <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-white bg-shu font-display text-[22px] shadow-[0_0_0_6px_#141A2E]">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1 rounded-2xl border-2 border-white/15 bg-white/[0.06] p-5 backdrop-blur-sm">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-mincho text-[17px] font-bold">{s.title}</h3>
                    <NinjaAvatar k={s.ninja} size={30} />
                  </div>
                  <p className="mt-2 text-[14px] leading-[1.7] text-white/75">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <div data-fx className="mt-14 flex justify-center">
            <CtaButton light />
          </div>
        </div>
      </section>

      {/* 9. Founder：the clan leader＋会社情報 */}
      <section id="leader" className="relative scroll-mt-16 overflow-hidden bg-washi bg-seigaiha py-20 md:py-28">
        <div className={`${container} grid gap-12 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] md:items-start lg:gap-16`}>
          <div data-fx="left" className="relative mx-auto w-full max-w-[340px]">
            <span aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl bg-shu" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border-2 border-sumi">
              <Image unoptimized src={W('founder')} alt={images.founder.alt.en} fill sizes="340px" className="object-cover object-top" />
            </div>
          </div>
          <div data-fx="right">
            <Eyebrow seal="頭">{leader.label}</Eyebrow>
            <H2 lines={leader.h2} />
            <div className="relative mt-6 rounded-2xl border-2 border-sumi bg-white p-6 md:p-8">
              <span aria-hidden="true" className="absolute -top-6 left-5 font-mincho text-[72px] leading-none text-shu">“</span>
              {leader.body.map((p, i) => (
                <p key={i} className={`text-[16px] leading-[1.9] text-[#333] ${i ? 'mt-4' : ''}`}>
                  {p}
                </p>
              ))}
              <p className="mt-5 font-mincho text-[16px] font-bold">{leader.signature}</p>
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <ol className="space-y-1.5 text-[14px] text-[#444]">
                {track.founder.career.map((c) => (
                  <li key={c.period}>
                    <span className="mr-3 font-mono text-[13px] text-[#555]">{c.period}</span>
                    {c.org.en}
                  </li>
                ))}
                <li className="pt-2">
                  <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener" className="inline-flex items-center gap-2 font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-beni hover:text-beni-deep">
                    LinkedIn <span aria-hidden="true">↗</span>
                  </a>
                </li>
              </ol>
              <dl id="company" className="space-y-1.5 text-[13.5px]">
                {[...companyFacts.rows, ...(CORPORATE_NUMBER ? [{ k: 'Corporate No.', v: CORPORATE_NUMBER }] : [])]
                  .filter((r) => r.k !== 'Service' && r.k !== 'CEO')
                  .map((r) => (
                    <div key={r.k} className="flex gap-3">
                      <dt className="w-[78px] shrink-0 font-semibold text-[#555]">{r.k}</dt>
                      <dd className="text-[#333]">{r.v}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ（取引条件・法規・既存チャネルの疑問もここで答える）＋ガイドへのリンク */}
      <section id="faq" className="relative scroll-mt-16 overflow-hidden bg-white py-20 md:py-28">
        <div className="mx-auto w-full max-w-[920px] px-5 md:px-10">
          <SectionHead en="Q&A" label={ninjaFaq.label} title={ninjaFaq.h2} />
          <div data-fx className="mt-12 rounded-2xl border-2 border-sumi bg-white px-5 shadow-[0_10px_24px_rgba(28,25,23,0.12)] md:px-8">
            <FaqList items={ninjaFaq.items} divider="divide-[#e6e1da] border-transparent" qClass="text-shu" />
          </div>
          <p className="mt-8 text-center text-[14px] text-[#555]">
            More in our{' '}
            <Link href={GUIDE_BASE} className="font-semibold text-beni underline underline-offset-4">
              guides to entering Japan
            </Link>
            .
          </p>
        </div>
      </section>

      {/* 11. Final CTA：問い合わせフォーム */}
      <section id={SCAN_ANCHOR} className="relative scroll-mt-16 overflow-hidden bg-[#141A2E] py-20 text-white md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-35 bg-[url('/images/japan-ninja/web/hero-bg-sm.webp')] md:bg-[url('/images/japan-ninja/web/hero-bg.webp')]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#141A2E] via-[#141A2E]/85 to-[#141A2E]/60" />
        </div>
        <div className="relative mx-auto grid w-full max-w-[1160px] gap-12 px-5 md:px-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div data-fx="left">
            <LaunchNinjaLogo tone="dark" markClassName="h-10 w-auto" textClassName="text-[24px]" />
            <h2 className="mt-8 font-mincho text-[clamp(30px,7vw,52px)] font-bold leading-[1.2]">
              {finalCta.h2.map((l, i) => (
                <span key={l} className={`block ${i === 2 ? 'mt-2 text-[0.62em] text-[#F2B4A2]' : ''}`}>
                  {l}
                </span>
              ))}
            </h2>
            <p className="mt-6 text-[15.5px] leading-[1.85] text-white/85">{finalCta.body}</p>
            <ul className="mt-8 space-y-3">
              {form.assurances.map((a) => a.en).map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-[1.6]">
                  <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.15em] shrink-0 text-[#F2B4A2]" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div data-fx="right">
            <JapanLaunchForm lang={lang} />
          </div>
        </div>
      </section>

      {/* フッター（共通 Footer の英語版と同じ内容をサーバー側で描画。アニメーション用の JS を読み込まないため） */}
      <footer className="bg-white py-10 pb-28 md:pb-10">
        <div className={`${container} flex flex-col items-start justify-between gap-6 md:flex-row md:items-center`}>
          <div className="flex flex-col gap-3">
            <a href={JAPAN_LAUNCH_PATH_EN} aria-label={`${NINJA_NAME} — top`}>
              <LaunchNinjaLogo markClassName="h-10 w-auto" textClassName="text-[24px]" />
            </a>
            <p className="text-[11px] tracking-[0.04em] text-[#5f5f5f]">A service by Faise Inc. — 4-18-25 Oi, Shinagawa-ku, Tokyo</p>
          </div>
          <div className="flex flex-col gap-3 md:items-end">
            <Link href={GUIDE_BASE} className="text-[12.5px] tracking-[0.04em] text-[#555] transition-colors hover:text-beni">
              Japan market entry guides
            </Link>
            <p className="text-[10.5px] tracking-[0.04em] text-[#666]">© 2025 Faise Inc. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* スマホ：下部固定の CTA（問い合わせフォームへ） */}
      <StickyCta href={CTA_HREF} label={CTA_LABEL} external={false} />
    </main>
  )
}
