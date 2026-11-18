import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Minus, X } from 'lucide-react'
import NinjaHeader from '@/components/NinjaHeader'
import LaunchNinjaLogo from '@/components/LaunchNinjaLogo'
import FaqList from '@/components/FaqList'
import JapanLaunchForm from '@/components/JapanLaunchForm'
import NinjaTerminal from '@/components/NinjaTerminal'
import { display, serif } from '@/lib/jl-fonts-en'
import { SITE_URL, ORG_ID, FOUNDER_LINKEDIN_URL } from '@/lib/site'
import { GUIDE_BASE, japanGuides } from '@/lib/japan-guides'
import { JAPAN_LAUNCH_PATH, JAPAN_LAUNCH_PATH_EN, channels, form, images, track, whyJapan } from '@/lib/japan-launch'
import {
  BOOKING_URL,
  CORPORATE_NUMBER,
  CTA_LABEL,
  CTA_NOTE,
  NINJA_NAME,
  SCAN_ANCHOR,
  SCAN_LABEL,
  caseMetrics,
  clan,
  clanSection,
  companyFacts,
  compliance,
  existing,
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
  terms,
  trustBar,
  waysToWork,
  whoFor,
  type NinjaKey,
} from '@/lib/japan-ninja'

// LAUNCH NINJA by Faise：英語LP（/en/japan-launch）。日本語版（/japan-launch）は JapanLaunchView のまま。
// 構成：海外メーカーの実際の質問（独占条件・費用・支払・売れる根拠・法規・既存チャネル・会社の信頼性）に、上から順に答える。
const lang = 'en' as const
const url = `${SITE_URL}${JAPAN_LAUNCH_PATH_EN}`
const OG = '/og/launch-ninja.jpg' // 生成: node scripts/generate-launch-ninja-brand.mjs
// 主CTA（面談予約）の行き先。予約ページの URL が未設定のあいだはページ下部のフォームへ
const BOOK_HREF = BOOKING_URL || `#${SCAN_ANCHOR}`
const BOOK_EXTERNAL = Boolean(BOOKING_URL)

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

// 主CTA：オンライン面談の予約
function CtaButton({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <a
      href={BOOK_HREF}
      {...(BOOK_EXTERNAL ? { target: '_blank', rel: 'noopener' } : {})}
      className={`group inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-[15px] font-bold tracking-[0.02em] transition-colors ${
        light ? 'bg-white text-beni hover:bg-washi' : 'bg-beni text-white hover:bg-beni-deep'
      } ${className}`}
    >
      {CTA_LABEL}
      <ArrowRight size={17} strokeWidth={2} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}

// 副CTA：無料の Japan Scan（フォームへ）
function ScanLink({ light = false, className = '' }: { light?: boolean; className?: string }) {
  return (
    <a href={`#${SCAN_ANCHOR}`} className={`inline-flex items-center gap-2 text-[15px] font-semibold underline decoration-1 underline-offset-[6px] ${light ? 'text-white hover:text-[#F2B4A2]' : 'text-beni hover:text-beni-deep'} ${className}`}>
      {SCAN_LABEL}
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

// 法規対応表のセル（主担当／協力／なし）
function Role({ v }: { v: 'lead' | 'support' | '' }) {
  if (v === 'lead')
    return (
      <span className="inline-flex items-center gap-1.5 font-semibold text-beni">
        <span aria-hidden="true" className="h-3 w-3 rounded-full bg-beni" />
        {compliance.legend.lead}
      </span>
    )
  if (v === 'support')
    return (
      <span className="inline-flex items-center gap-1.5 text-[#444]">
        <span aria-hidden="true" className="h-3 w-3 rounded-full border-2 border-beni" />
        {compliance.legend.support}
      </span>
    )
  return (
    <span className="text-[#888]">
      <Minus size={14} aria-hidden="true" />
      <span className="sr-only">Not involved</span>
    </span>
  )
}

export default function JapanNinjaView() {
  const featured = track.featured
  return (
    <main className={`${display.variable} ${serif.variable} bg-white text-sumi`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
      <NinjaHeader home={JAPAN_LAUNCH_PATH_EN} links={ninjaNav} ctaHref={BOOK_HREF} ctaLabel={CTA_LABEL} altHref="/" />

      {/* Hero：誰に・何をするかを最初の画面で。主CTA＝面談予約、副CTA＝無料 Japan Scan */}
      <section className="relative overflow-hidden bg-[#141A2E] pt-16 text-white md:pt-[76px]">
        {/* 背景：浮世絵風の夜の城下町（満月・屋根の上を跳ぶ忍者・手裏剣）。見出しの左側は濃い色を重ねて読みやすくする */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[1100px] overflow-hidden md:h-[900px]">
          {/* CSS の背景画像にして、見出し（LCP）より後に読み込ませる。スマホは小さい画像 */}
          <div className="absolute inset-0 bg-cover bg-[position:78%_center] bg-no-repeat bg-[url('/images/japan-ninja/web/hero-bg-sm.webp')] md:bg-[url('/images/japan-ninja/web/hero-bg.webp')] md:bg-[position:right_top]" />
          <div className="absolute inset-0 bg-[#141A2E]/60 lg:bg-transparent lg:bg-gradient-to-r lg:from-[#141A2E]/90 lg:via-[#141A2E]/50 lg:to-[#141A2E]/10" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-[#141A2E]" />
        </div>
        <div className={`${container} relative grid gap-10 py-12 md:py-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14`}>
          <div>
            <p>
              <LaunchNinjaLogo tone="dark" markClassName="h-11 w-auto md:h-14" textClassName="text-[26px] md:text-[32px]" />
              <span className="sr-only">{ninjaHero.eyebrow}</span>
            </p>
            <p className="mt-6 font-mincho text-[16px] font-bold text-[#F2B4A2] md:text-[18px]">{ninjaHero.kicker}</p>
            <h1 className="mt-3 font-mincho font-bold tracking-[0.005em]">
              <span className="block text-[clamp(32px,8.6vw,44px)] leading-[1.15] md:text-[clamp(44px,4.6vw,62px)]">{ninjaHero.h1[0]}</span>
              <span className="mt-3 block text-[clamp(19px,4.8vw,24px)] leading-[1.45] text-white/90 md:text-[clamp(22px,2vw,28px)]">{ninjaHero.h1[1]}</span>
            </h1>
            <p className="mt-6 max-w-[36em] text-[16px] leading-[1.8] text-white/85 md:text-[17px]">{ninjaHero.sub}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <CtaButton />
              <ScanLink light />
            </div>
            <p className="mt-4 text-[13px] text-white/75">{CTA_NOTE}</p>
          </div>
          <NinjaTerminal />
        </div>
        {/* 信頼バー：実在する会社であることを最初に示す */}
        <div className={`${container} relative`}>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 border-y border-white/15 py-4 text-[13px] text-white/80">
            {trustBar.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <Check size={14} strokeWidth={2.25} aria-hidden="true" className="text-[#F2B4A2]" />
                {t}
              </li>
            ))}
            {CORPORATE_NUMBER && <li>Corporate No. {CORPORATE_NUMBER}</li>}
          </ul>
          <p className="mt-6 max-w-[60em] text-[14px] leading-[1.8] text-white/70">{ninjaMeta.definition}</p>
        </div>
        <div className={`${container} relative pb-12 pt-10 md:pb-16`}>
          <div className="relative aspect-[16/9] overflow-hidden rounded-lg border border-white/10">
            <Image unoptimized src={W('clan')} alt={ninjaHero.clanAlt} fill sizes="(min-width: 1280px) 1200px, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* Who it's for：Kickstarter などで実績のあるメーカー */}
      <section id="who" className={`${section} scroll-mt-16 bg-washi bg-seigaiha`}>
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end lg:gap-14">
            <div>
              <Eyebrow seal="客">{whoFor.label}</Eyebrow>
              <H2 lines={whoFor.h2} />
            </div>
            <ul className="space-y-3">
              {whoFor.items.map((it) => (
                <li key={it} className="flex gap-3 text-[16px] leading-[1.6]">
                  <Check size={19} strokeWidth={2.25} aria-hidden="true" className="mt-[0.15em] shrink-0 text-beni" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {whoFor.categories.map((a) => (
              <li key={a.img}>
                <div className={`relative aspect-[3/2] overflow-hidden ${print}`}>
                  <Image unoptimized src={W(`edo-${a.img}`)} alt={edoAlt[a.img]} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                </div>
                <h3 className="mt-4 font-mincho text-[20px] font-bold">{a.title}</h3>
                <p className="mt-2 text-[15px] leading-[1.8] text-[#555]">{a.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Japan */}
      <section id="why-japan" className={`${section} scroll-mt-16 bg-white`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] lg:gap-14`}>
          <div>
            <Eyebrow seal="機">{whyJapan.label}</Eyebrow>
            <H2 lines={whyJapan.h2.en} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{whyJapan.lead.en}</p>
            <div className={`relative mt-8 aspect-[16/9] overflow-hidden ${print}`}>
              <Image unoptimized src={W('edo-market')} alt={edoAlt.market} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            </div>
          </div>
          <ul className="grid gap-5 self-start md:grid-cols-3">
            {whyJapan.items.map((w, i) => (
              <li key={i} className={`h-full bg-washi p-6 ${print}`}>
                <h3 className="font-mincho text-[19px] font-bold leading-[1.45]">{w.title.en}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">{w.body.en}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ways to work：3つのモデル＋Makuake の説明 */}
      <section id="models" className={`${section} scroll-mt-16 bg-washi bg-seigaiha`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow seal="契">{waysToWork.label}</Eyebrow>
            <H2 lines={waysToWork.h2} />
          </div>
          <ul className="mt-10 grid gap-5 lg:grid-cols-3">
            {waysToWork.items.map((m) => (
              <li key={m.name} className={`flex flex-col bg-white p-6 md:p-8 ${print}`}>
                <p className="font-inter text-[12.5px] font-bold uppercase tracking-[0.18em] text-beni">{m.name}</p>
                <h3 className="mt-2 font-mincho text-[21px] font-bold leading-[1.4]">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.85] text-[#555]">{m.body}</p>
                <p className="mt-auto pt-5 text-[14px] font-semibold text-sumi">{m.best}</p>
              </li>
            ))}
          </ul>
          <p className="mt-5 text-[14px] text-[#595959]">{waysToWork.note}</p>
          <div className={`mt-10 bg-[#141A2E] p-6 text-white md:p-8 ${print}`}>
            <h3 className="font-mincho text-[20px] font-bold">{makuake.title}</h3>
            <p className="mt-3 max-w-[60em] text-[15px] leading-[1.85] text-white/85">{makuake.body}</p>
          </div>
        </div>
      </section>

      {/* Deal terms：独占・最低数量・費用・卸値・支払・解約 */}
      <section id="terms" className={`${section} scroll-mt-16 bg-white`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-14`}>
          <div>
            <Eyebrow seal="約">{terms.label}</Eyebrow>
            <H2 lines={terms.h2} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{terms.lead}</p>
          </div>
          <dl className={`divide-y divide-[#e6e1da] bg-white ${print}`}>
            {terms.rows.map((r) => (
              <div key={r.item} className="grid gap-1 p-5 sm:grid-cols-[180px_minmax(0,1fr)] sm:gap-6">
                <dt className="font-mincho text-[16.5px] font-bold">{r.item}</dt>
                <dd className="text-[15px] leading-[1.75] text-[#444]">{r.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Compliance：技適・PSE・表示・輸入の分担表 */}
      <section id="compliance" className={`${section} scroll-mt-16 bg-washi bg-seigaiha`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow seal="法">{compliance.label}</Eyebrow>
            <H2 lines={compliance.h2} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{compliance.lead}</p>
          </div>
          {/* スマホ：項目ごとのカード（横に広い表は使わない） */}
          <ul className="mt-10 space-y-4 md:hidden">
            {compliance.rows.map((r) => (
              <li key={r.item} className={`bg-white p-5 ${print}`}>
                <p className="font-mincho text-[16px] font-bold">{r.item}</p>
                <dl className="mt-3 space-y-1.5 text-[14px]">
                  {compliance.cols.map((c, i) => (
                    <div key={c} className="flex items-center justify-between gap-4">
                      <dt className="text-[#555]">{c}</dt>
                      <dd>
                        <Role v={r.cells[i]} />
                      </dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
          {/* PC：分担表 */}
          <div className={`mt-10 hidden bg-white md:block ${print}`}>
            <table className="w-full text-left text-[14.5px]">
              <thead>
                <tr className="border-b-2 border-sumi">
                  <th scope="col" className="p-4 font-mincho text-[15px] font-bold">
                    Item
                  </th>
                  {compliance.cols.map((c) => (
                    <th key={c} scope="col" className="p-4 font-mincho text-[15px] font-bold">
                      {c}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e6e1da]">
                {compliance.rows.map((r) => (
                  <tr key={r.item}>
                    <th scope="row" className="p-4 font-medium">
                      {r.item}
                    </th>
                    {r.cells.map((v, i) => (
                      <td key={i} className="p-4">
                        <Role v={v} />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-5 max-w-[60em] text-[14px] leading-[1.75] text-[#555]">{compliance.youNote}</p>
        </div>
      </section>

      {/* 既存チャネル（Amazon・他代理店）との関係 */}
      <section className={`${section} bg-white`}>
        <div className={`${container} grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-center lg:gap-14`}>
          <div>
            <Eyebrow seal="路">{existing.label}</Eyebrow>
            <H2 lines={existing.h2} />
          </div>
          <ul className="space-y-4">
            {existing.items.map((it) => (
              <li key={it} className={`flex gap-3 bg-washi p-5 text-[15.5px] leading-[1.7] ${print}`}>
                <Check size={19} strokeWidth={2.25} aria-hidden="true" className="mt-[0.15em] shrink-0 text-beni" />
                {it}
              </li>
            ))}
          </ul>
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

      {/* Case：Cyspera（数値は確定したものだけ表示 + Reels 3本） */}
      <section id="case" className={`${section} scroll-mt-16 bg-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow seal="績">{featured.label.en}</Eyebrow>
            <H2 lines={featured.title.en} />
          </div>
          <div className={`mt-10 overflow-hidden bg-beni text-white md:flex ${print}`}>
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

          {/* 数値枠。TODO: 数値 — caseMetrics の value が確定したものだけ表示される（japan-ninja.ts） */}
          {shownMetrics.length > 0 && (
            <ul className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {shownMetrics.map((m) => (
                <li key={m.label} className={`bg-washi p-5 ${print}`}>
                  <p className="text-[13px] font-medium text-[#555]">{m.label}</p>
                  <p className="mt-2 font-display text-[clamp(22px,5vw,34px)] leading-none text-beni">{m.value}</p>
                  <p className="mt-2 text-[12px] text-[#595959]">{m.note}</p>
                </li>
              ))}
            </ul>
          )}

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
          <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4">
            <CtaButton />
            <ScanLink />
          </div>
        </div>
      </section>

      {/* How it works：面談から発売まで */}
      <section id="flow" className={`${section} scroll-mt-16 bg-washi bg-seigaiha`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow seal="流">{flow.label}</Eyebrow>
            <H2 lines={flow.h2} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{flow.note}</p>
          </div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {flow.steps.map((s, i) => (
              <li key={s.title} className={`relative bg-white p-5 ${print}`}>
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

      {/* Meet the Clan：チーム */}
      <section id="clan" className={`${section} scroll-mt-16 bg-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow seal="忍">{clanSection.label}</Eyebrow>
            <H2 lines={clanSection.h2} />
            <p className="mt-5 text-[15.5px] leading-[1.9] text-[#555]">{clanSection.lead}</p>
          </div>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clan.map((c) => (
              <li key={c.key}>
                <article className={`flex h-full flex-col overflow-hidden bg-white ${print}`}>
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
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5 PROMISES：Myth → So we... */}
      <section id="promises" className={`${section} scroll-mt-16 bg-[#141A2E] bg-seigaiha-light text-white`}>
        <div className={container}>
          <div className="max-w-3xl">
            <Eyebrow light seal="誓">{promises.label}</Eyebrow>
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

      {/* Channels：日本の販路 */}
      <section className={`${section} relative bg-sumi text-white`}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <Image unoptimized src={W('edo-night-street')} alt="" fill sizes="100vw" className="object-cover opacity-55" />
        </div>
        <div className={`${container} relative`}>
          <div className="max-w-3xl">
            <Eyebrow light seal="市">{channels.label}</Eyebrow>
            <H2 lines={channels.h2.en} light />
          </div>
          <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {channels.items.map((c, i) => (
              <li key={i} className={`bg-white p-6 text-sumi ${print}`}>
                <h3 className="font-mincho text-[19px] font-bold">{c.title.en}</h3>
                <p className="mt-1.5 font-inter text-[12.5px] font-semibold text-beni">{typeof c.names === 'string' ? c.names : c.names.en}</p>
                <p className="mt-3 text-[14.5px] leading-[1.8] text-[#555]">{c.body.en}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Founder：the clan leader */}
      <section id="leader" className={`${section} scroll-mt-16 bg-white`}>
        <div className={`${container} grid gap-10 md:grid-cols-[minmax(0,0.6fr)_minmax(0,1.4fr)] md:items-center lg:gap-14`}>
          <div className={`relative mx-auto aspect-[4/5] w-full max-w-[340px] overflow-hidden ${print}`}>
            <Image unoptimized src={W('founder')} alt={images.founder.alt.en} fill sizes="340px" className="object-cover object-top" />
          </div>
          <div>
            <Eyebrow seal="頭">{leader.label}</Eyebrow>
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

      {/* Company：会社情報 */}
      <section id="company" className="scroll-mt-16 bg-white pb-16 md:pb-24">
        <div className={container}>
          <div className={`grid gap-8 bg-washi p-6 md:p-10 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-14 ${print}`}>
            <div>
              <Eyebrow seal="社">{companyFacts.label}</Eyebrow>
              <H2 lines={companyFacts.h2} />
              <p className="mt-5 text-[14.5px] leading-[1.8] text-[#555]">{companyFacts.verifyNote}</p>
            </div>
            <dl className="divide-y divide-[#ddd6cd] border-y border-[#ddd6cd]">
              {[...companyFacts.rows, ...(CORPORATE_NUMBER ? [{ k: 'Corporate No.', v: CORPORATE_NUMBER }] : [])].map((r) => (
                <div key={r.k} className="grid gap-1 py-3.5 sm:grid-cols-[140px_minmax(0,1fr)] sm:gap-6">
                  <dt className="text-[14px] font-semibold text-[#555]">{r.k}</dt>
                  <dd className="text-[15px] leading-[1.7]">{r.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* FAQ + Guides */}
      <section id="faq" className={`${section} scroll-mt-16 bg-washi bg-seigaiha`}>
        <div className="mx-auto w-full max-w-[860px] px-5 md:px-10">
          <Eyebrow seal="問">{ninjaFaq.label}</Eyebrow>
          <H2 lines={ninjaFaq.h2} />
          <FaqList items={ninjaFaq.items} className="mt-8" divider="divide-[#ddd6cd] border-[#ddd6cd]" qClass="text-beni" />
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

      {/* Final CTA：面談予約（予約ページが未設定のあいだはフォームで面談をリクエスト） */}
      <section id={SCAN_ANCHOR} className="relative scroll-mt-16 overflow-hidden bg-[#141A2E] py-16 text-white md:py-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(122,48,45,0.55),transparent_60%)]" />
        <div className="relative mx-auto grid w-full max-w-[1120px] gap-10 px-5 md:px-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-14">
          <div>
            <Eyebrow light seal="密">{finalCta.label}</Eyebrow>
            <H2 lines={finalCta.h2} light />
            <p className="mt-5 text-[15.5px] leading-[1.85] text-white/85">{finalCta.body}</p>
            {BOOK_EXTERNAL && <CtaButton light className="mt-8" />}
            <ul className="mt-8 space-y-3">
              {[CTA_NOTE, ...form.assurances.map((a) => a.en)].map((a) => (
                <li key={a} className="flex gap-3 text-[15px] leading-[1.6]">
                  <Check size={18} strokeWidth={2} aria-hidden="true" className="mt-[0.15em] shrink-0 text-[#F2B4A2]" />
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-[14px] leading-[1.75] text-white/70">{finalCta.formNote}</p>
          </div>
          <JapanLaunchForm lang={lang} />
        </div>
      </section>

      {/* フッター（共通 Footer の英語版と同じ内容をサーバー側で描画。アニメーション用の JS を読み込まないため） */}
      <footer className="bg-white py-10">
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
    </main>
  )
}
