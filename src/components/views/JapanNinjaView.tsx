import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Handshake, X } from 'lucide-react'
import Nav from '@/components/Nav'
import { Footer } from '@/components/CTA'
import FaqList from '@/components/FaqList'
import JapanLaunchForm from '@/components/JapanLaunchForm'
import NinjaTerminal from '@/components/NinjaTerminal'
import { display, serif } from '@/lib/jl-fonts-en'
import { SITE_URL, ORG_ID, FOUNDER_LINKEDIN_URL } from '@/lib/site'
import { GUIDE_BASE, japanGuides } from '@/lib/japan-guides'
import { JAPAN_LAUNCH_PATH, JAPAN_LAUNCH_PATH_EN, audience, channels, faq, form, images, models, track, whyJapan } from '@/lib/japan-launch'
import {
  CTA_LABEL,
  NINJA_NAME,
  SCAN_ANCHOR,
  caseMetrics,
  clan,
  clanSection,
  finalCta,
  flow,
  handle,
  leader,
  midCta,
  ninjaHero,
  ninjaMeta,
  ninjaNav,
  promises,
  type NinjaKey,
} from '@/lib/japan-ninja'

// JAPAN NINJA：英語LP（/en/japan-launch）。日本語版（/japan-launch）は JapanLaunchView のまま。
const lang = 'en' as const
const url = `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}`
const OG = '/og/japan-ninja.png' // 生成: node scripts/generate-og-japan-ninja.mjs

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
  }
}

const ld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Service',
      '@id': `${url}#service`,
      name: NINJA_NAME,
      serviceType: 'Japan market entry for overseas brands',
      description: ninjaMeta.description,
      url,
      inLanguage: 'en',
      provider: { '@id': ORG_ID },
      areaServed: { '@type': 'Country', name: 'Japan' },
      audience: { '@type': 'BusinessAudience', name: 'Overseas consumer brands expanding into Japan' },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'What the clan handles',
        itemListElement: handle.faise.items.map((s) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: s.name } })),
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.items.map((f) => ({ '@type': 'Question', name: f.q.en, acceptedAnswer: { '@type': 'Answer', text: f.a.en } })),
    },
  ],
}

// 画像は表示サイズに変換済みの WebP を直接配信する（next/image の最適化 /_next/image を通さない）。
// 生成: node scripts/build-japan-ninja-webp.mjs → public/images/japan-ninja/web/
const W = (name: string) => `/images/japan-ninja/web/${name}.webp`

const container = 'mx-auto w-full max-w-[1280px] px-5 md:px-10'
const section = 'py-16 md:py-24'
const ninjaByKey = Object.fromEntries(clan.map((c) => [c.key, c])) as Record<NinjaKey, (typeof clan)[number]>

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 font-inter text-[11px] font-semibold uppercase tracking-[0.26em] md:text-[12px] ${light ? 'text-[#F2B4A2]' : 'text-beni'}`}>
      <span className={`h-px w-8 ${light ? 'bg-[#F2B4A2]/60' : 'bg-beni/50'}`} />
      {children}
    </p>
  )
}

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

function CtaButton({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <a
      href={`#${SCAN_ANCHOR}`}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[15px] font-bold tracking-[0.02em] transition-colors ${
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

export default function JapanNinjaView() {
  const featured = track.featured
  return (
    <main className={`${display.variable} ${serif.variable} bg-white text-sumi`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <Nav base={JAPAN_LAUNCH_PATH_EN} links={ninjaNav} contactHref={`#${SCAN_ANCHOR}`} contactLabel={CTA_LABEL} ctaTone="beni" solid />

      {/* Hero：見出し・CTA・ターミナル風アニメーション、下に4人の集合イラスト */}
      <section className="relative overflow-hidden bg-[#141A2E] pt-16 text-white md:pt-[76px]">
        {/* 背景：浮世絵風の夜の城下町（満月・屋根の上を跳ぶ忍者・手裏剣）。見出しの左側は濃い色を重ねて読みやすくする */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden md:h-[900px]">
          <Image unoptimized src={W('hero-bg')} alt="" fill loading="eager" sizes="100vw" className="object-cover object-[78%_center] md:object-right-top" />
          <div className="absolute inset-0 bg-[#141A2E]/55 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#141A2E]/90 lg:via-[#141A2E]/45 lg:to-[#141A2E]/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#141A2E]" />
        </div>
        <div className={`${container} relative grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14`}>
          <div>
            <Eyebrow light>{ninjaHero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-mincho text-[clamp(32px,8.6vw,44px)] font-bold leading-[1.18] tracking-[0.005em] md:text-[clamp(44px,4.6vw,64px)]">
              <span className="block">{ninjaHero.h1[0]}</span>
              <span className="block text-[#F2B4A2]">{ninjaHero.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-[34em] text-[16px] leading-[1.8] text-white/85 md:text-[17px]">{ninjaHero.sub}</p>
            <CtaButton className="mt-8" />
            <p className="mt-4 text-[13px] text-white/70">{ninjaHero.note}</p>
          </div>
          <NinjaTerminal />
        </div>
        <div className={`${container} relative pb-12 md:pb-16`}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
            <Image unoptimized src={W('clan')} alt={ninjaHero.clanAlt} fill loading="eager" sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Meet the Clan */}
      <section id="clan" className={`${section} scroll-mt-16 bg-washi`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{clanSection.label}</Eyebrow>
            <H2 lines={clanSection.h2} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{clanSection.lead}</p>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clan.map((c, i) => (
              <li key={c.key}>
                <div className="h-full">
                  <article className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-[0_20px_40px_-30px_rgba(20,26,46,0.6)]">
                    <div className="relative aspect-[2/3]">
                      <Image unoptimized src={W(c.key)} alt={c.alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                    </div>
                    <div className="flex flex-1 flex-col border-t-4 p-5" style={{ borderColor: c.color }}>
                      <p className="font-inter text-[11px] font-bold uppercase tracking-[0.2em]" style={{ color: c.color }}>
                        {c.role}
                      </p>
                      <h3 className="mt-1.5 font-mincho text-[21px] font-bold">{c.name}</h3>
                      <p className="mt-3 text-[15px] font-medium leading-[1.65] text-sumi">“{c.catch}”</p>
                      <p className="mt-auto pt-4 text-[12.5px] leading-[1.7] text-[#595959]">
                        <span className="font-semibold italic">{clanSection.legendNote}</span> {c.legend}
                      </p>
                    </div>
                  </article>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Japan */}
      <section id="why-japan" className={`${section} scroll-mt-16 bg-white`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14`}>
          <div>
            <Eyebrow>{whyJapan.label}</Eyebrow>
            <H2 lines={whyJapan.h2.en} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{whyJapan.lead.en}</p>
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
              <Image unoptimized src={W('tokyo')} alt={images.tokyo.alt.en} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid gap-5 self-start md:grid-cols-3">
            {whyJapan.items.map((w, i) => (
              <li key={i} className="h-full rounded-lg border-t-2 border-beni bg-washi p-6">
                <h3 className="font-mincho text-[19px] font-bold leading-[1.45]">{w.title.en}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">{w.body.en}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Who it's for */}
      <section className={`${section} bg-washi`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{audience.label}</Eyebrow>
            <H2 lines={audience.h2.en} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{audience.lead.en}</p>
          </div>
          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {audience.items.map((a) => {
              const img = images[a.img]
              return (
                <li key={a.img}>
                  <div className="relative aspect-[3/2] overflow-hidden rounded-lg">
                    <Image unoptimized src={W(a.img)} alt={img.alt.en} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  </div>
                  <h3 className="mt-4 font-mincho text-[20px] font-bold">{a.title.en}</h3>
                  <p className="mt-2 text-[15px] leading-[1.8] text-[#555]">{a.body.en}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </section>

      {/* 5 PROMISES：Myth → So we... */}
      <section id="promises" className={`${section} scroll-mt-16 bg-[#141A2E] text-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow light>{promises.label}</Eyebrow>
            <H2 lines={promises.h2} light />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-white/80">{promises.lead}</p>
          </div>
          <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {promises.items.map((p, i) => (
              <li key={i} className="grid gap-4 py-6 md:grid-cols-[110px_minmax(0,1fr)_minmax(0,1.15fr)] md:items-center md:gap-8">
                <p className="font-mono text-[13px] font-semibold tracking-[0.12em] text-[#F2B4A2]">MYTH {String(i + 1).padStart(2, '0')}</p>
                <p className="flex gap-3 text-[16px] leading-[1.6] text-white/70">
                  <X size={18} strokeWidth={2.25} aria-hidden="true" className="mt-[0.2em] shrink-0 text-[#F5A3B1]" />
                  <span>“{p.myth}”</span>
                </p>
                <p className="flex items-start gap-3 text-[16px] font-medium leading-[1.6] text-white">
                  <NinjaAvatar k={p.ninja} size={34} />
                  <span>
                    <span className="block font-mono text-[11.5px] font-semibold uppercase tracking-[0.14em] text-[#F2B4A2]">So we…</span>
                    {p.so}
                  </span>
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 中間CTA */}
      <section className="bg-beni py-12 text-white md:py-14">
        <div className={`${container} flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between`}>
          <div>
            <p className="font-mincho text-[clamp(21px,5vw,28px)] font-bold leading-[1.4]">{midCta.h2}</p>
            <p className="mt-2 text-[15px] text-white/85">{midCta.body}</p>
          </div>
          <CtaButton light className="shrink-0" />
        </div>
      </section>

      {/* What we handle：ブランド／Faise（忍者アイコン付き）／パートナー */}
      <section className={`${section} bg-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{handle.label}</Eyebrow>
            <H2 lines={handle.h2} />
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.3fr)_minmax(0,0.8fr)]">
            <div className="rounded-lg border border-[#e6e1da] p-6">
              <h3 className="font-mincho text-[19px] font-bold">{handle.brand.title}</h3>
              <ul className="mt-4 space-y-3">
                {handle.brand.items.map((it) => (
                  <li key={it} className="flex gap-3 text-[15px] leading-[1.6]">
                    <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.15em] shrink-0 text-beni" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg bg-[#141A2E] p-6 text-white">
              <h3 className="font-mincho text-[19px] font-bold">{handle.faise.title}</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {handle.faise.items.map((it) => (
                  <li key={it.name} className="flex items-center gap-3 text-[15px] leading-[1.5]">
                    <NinjaAvatar k={it.ninja} size={30} />
                    {it.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-dashed border-beni/50 p-6">
              <h3 className="flex items-center gap-2 font-mincho text-[19px] font-bold">
                <Handshake size={18} strokeWidth={1.75} aria-hidden="true" className="text-beni" />
                {handle.partner.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {handle.partner.items.map((it) => (
                  <li key={it} className="text-[15px] leading-[1.6] text-[#444]">
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Two ways to work */}
      <section id="partnership" className={`${section} scroll-mt-16 bg-washi`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{models.label}</Eyebrow>
            <H2 lines={models.h2.en} />
          </div>
          <ul className="mt-10 grid gap-5 md:grid-cols-2">
            {models.items.map((m) => (
              <li key={m.name} className="rounded-lg border-t-4 border-beni bg-white p-6 md:p-8">
                <p className="font-inter text-[12.5px] font-bold uppercase tracking-[0.18em] text-beni">{m.name}</p>
                <h3 className="mt-2 font-mincho text-[21px] font-bold leading-[1.4]">{m.title.en}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">{m.body.en}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] text-[#595959]">{models.note.en}</p>
        </div>
      </section>

      {/* Channels */}
      <section className={`${section} relative bg-sumi text-white`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image unoptimized src={W('bg-street')} alt="" fill sizes="100vw" className="object-cover opacity-40" />
        </div>
        <div className={`${container} relative`}>
          <div className="max-w-3xl">
            <Eyebrow light>{channels.label}</Eyebrow>
            <H2 lines={channels.h2.en} light />
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {channels.items.map((c, i) => (
              <li key={i} className="rounded-lg bg-white p-6 text-sumi">
                <h3 className="font-mincho text-[19px] font-bold">{c.title.en}</h3>
                <p className="mt-1.5 font-inter text-[12.5px] font-semibold text-beni">{typeof c.names === 'string' ? c.names : c.names.en}</p>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-[#555]">{c.body.en}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Case：Cyspera（数値枠 + Reels 3本） */}
      <section id="case" className={`${section} scroll-mt-16 bg-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{featured.label.en}</Eyebrow>
            <H2 lines={featured.title.en} />
          </div>
          <div className="mt-10 overflow-hidden rounded-lg bg-beni text-white md:flex">
            <div className="flex items-center justify-center bg-white p-6 md:w-[28%] md:shrink-0">
              <Image unoptimized src={W('case-cyspera')} alt={featured.image.alt.en} width={featured.image.w} height={featured.image.h} sizes="160px" className="h-[230px] w-auto object-contain md:h-[280px]" />
            </div>
            <div className="p-6 md:p-10">
              <p className="font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">Case — {featured.brand}</p>
              <p className="mt-3 text-[15.5px] leading-[1.85] text-white/95">{featured.body.en}</p>
              <p className="mt-6 font-inter text-[11px] font-semibold uppercase tracking-[0.22em] text-white/80">{featured.workLabel.en}</p>
              <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
                {featured.work.map((w) => (
                  <li key={w.en} className="flex gap-2.5 text-[15px] leading-[1.6]">
                    <Check size={17} strokeWidth={2} aria-hidden="true" className="mt-[0.2em] shrink-0" />
                    {w.en}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 数値枠。TODO: 数値 — caseMetrics の value はすべてプレースホルダー（japan-ninja.ts） */}
          <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {caseMetrics.map((m) => (
              <li key={m.label} className="rounded-lg bg-washi p-5">
                <p className="text-[13px] font-medium text-[#555]">{m.label}</p>
                <p className="mt-2 font-display text-[clamp(22px,5vw,34px)] leading-none text-beni">{m.value}</p>
                <p className="mt-2 text-[12px] text-[#595959]">{m.note}</p>
              </li>
            ))}
          </ul>

          <div className="mt-10 md:mx-auto md:max-w-[880px]">
            <p className="font-mincho text-[19px] font-bold md:text-[21px]">{featured.videosLabel.en}</p>
            <ul className="no-scrollbar -mx-5 mt-5 flex snap-x snap-mandatory scroll-pl-5 gap-4 overflow-x-auto px-5 pb-2 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0">
              {featured.videos.map((v, i) => (
                <li key={i} className="w-[72%] shrink-0 snap-start sm:w-[44%] md:w-auto">
                  <a href={v.url ?? '#'} target="_blank" rel="noopener" className="group block" aria-label={`${v.platform} — watch the creator video ${i + 1}`}>
                    <div className="relative aspect-[9/16] overflow-hidden rounded-lg bg-sumi">
                      <Image unoptimized src={W(`reel-${i + 1}`)} alt={v.alt.en} fill sizes="(min-width: 768px) 30vw, 72vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/20" />
                      <span className="absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-inter text-[11px] font-medium text-white">{v.platform}</span>
                      <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-beni shadow-lg transition-transform group-hover:scale-110">
                        <svg viewBox="0 0 24 24" className="ml-0.5 h-6 w-6" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
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

      {/* FLOW */}
      <section id="flow" className={`${section} scroll-mt-16 bg-washi`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow>{flow.label}</Eyebrow>
            <H2 lines={flow.h2} />
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {flow.steps.map((s, i) => (
              <li key={s.title} className="relative rounded-lg bg-white p-5">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[13px] font-bold text-beni">{String(i + 1).padStart(2, '0')}</span>
                  <NinjaAvatar k={s.ninja} size={32} />
                </div>
                <h3 className="mt-3 font-mincho text-[18px] font-bold">{s.title}</h3>
                <p className="mt-2 text-[14px] leading-[1.7] text-[#555]">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Founder：the clan leader */}
      <section id="leader" className={`${section} scroll-mt-16 bg-white`}>
        <div className={`${container} grid gap-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] md:items-center lg:gap-14`}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden rounded-lg">
            <Image unoptimized src={W('founder')} alt={images.founder.alt.en} fill sizes="340px" className="object-cover object-top" />
          </div>
          <div>
            <Eyebrow>{leader.label}</Eyebrow>
            <H2 lines={leader.h2} />
            {leader.body.map((p, i) => (
              <p key={i} className="mt-5 text-[16px] leading-[1.9] text-[#444]">
                {p}
              </p>
            ))}
            <p className="mt-6 font-mincho text-[16px] font-bold">{leader.signature}</p>
            <ol className="mt-4 space-y-1.5 text-[14px] text-[#555]">
              {track.founder.career.map((c) => (
                <li key={c.period}>
                  <span className="mr-3 font-mono text-[13px] text-[#555]">{c.period}</span>
                  {c.org.en}
                </li>
              ))}
            </ol>
            <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener" className="mt-5 inline-flex items-center gap-2 font-inter text-[13px] font-semibold uppercase tracking-[0.18em] text-beni hover:text-beni-deep">
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ + Guides */}
      <section id="faq" className={`${section} scroll-mt-16 bg-washi`}>
        <div className="mx-auto w-full max-w-[860px] px-5 md:px-10">
          <Eyebrow>{faq.label}</Eyebrow>
          <H2 lines={faq.h2.en} />
          <FaqList items={faq.items.map((f) => ({ q: f.q.en, a: f.a.en }))} className="mt-8" divider="divide-[#ddd6cd] border-[#ddd6cd]" qClass="text-beni" />
          <div className="mt-14">
            <p className="text-[14px] font-semibold tracking-[0.04em] text-[#555]">
              Guides for entering Japan ·{' '}
              <Link href={GUIDE_BASE} className="text-beni underline underline-offset-4">
                See all
              </Link>
            </p>
            <ul className="mt-3 divide-y divide-[#ddd6cd] border-y border-[#ddd6cd]">
              {japanGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={`${GUIDE_BASE}/${g.slug}`} className="group flex items-center justify-between gap-4 py-4 text-[15.5px] leading-[1.6] hover:text-beni">
                    {g.h1}
                    <ArrowRight size={16} strokeWidth={1.75} aria-hidden="true" className="shrink-0 transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Final CTA + Form */}
      <section id={SCAN_ANCHOR} className="relative scroll-mt-16 overflow-hidden bg-[#141A2E] py-16 text-white md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,48,45,0.55),transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-[1120px] gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <Eyebrow light>{finalCta.label}</Eyebrow>
            <H2 lines={finalCta.h2} light />
            <p className="mt-5 text-[15.5px] leading-[1.85] text-white/85">{finalCta.body}</p>
            <ul className="mt-8 space-y-3">
              {form.assurances.map((a) => (
                <li key={a.en} className="flex gap-3 text-[15px] leading-[1.6]">
                  <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.15em] shrink-0 text-[#F2B4A2]" />
                  {a.en}
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
