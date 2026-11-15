import Image from 'next/image'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import { Footer } from '@/components/CTA'
import { navLinks } from '@/components/views/JapanLaunchView'
import { JAPAN_LAUNCH_PATH_EN, FORM_ANCHOR, images, track } from '@/lib/japan-launch'
import { GUIDE_AUTHOR, GUIDE_BASE, guideImage, type GuideImageKey } from '@/lib/japan-guides'
import { FOUNDER_LINKEDIN_URL } from '@/lib/site'

// 英語ガイド記事の共通パーツ（メニュー・パンくず・LP への誘導・フッター）
export const lpNavLinks = navLinks.map((l) => ({ ...l, href: `${JAPAN_LAUNCH_PATH_EN}${l.href}` }))
export const FIT_CHECK_HREF = `${JAPAN_LAUNCH_PATH_EN}#${FORM_ANCHOR}`

export function GuideNav() {
  return <Nav base={JAPAN_LAUNCH_PATH_EN} links={lpNavLinks} contactHref={FIT_CHECK_HREF} />
}

export function GuideBreadcrumb({ current }: { current?: string }) {
  return (
    <nav aria-label="breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
      <Link href={JAPAN_LAUNCH_PATH_EN} className="transition-colors hover:text-brand">Japan Launch</Link>
      <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
      {current ? (
        <>
          <Link href={GUIDE_BASE} className="transition-colors hover:text-brand">Guides</Link>
          <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
          <span aria-current="page" className="text-[#111]">{current}</span>
        </>
      ) : (
        <span aria-current="page" className="text-[#111]">Guides</span>
      )}
    </nav>
  )
}

export function FitCheckBox() {
  return (
    <div className="mt-14 rounded-sm bg-brand-tint px-6 py-7 md:px-8">
      <p className="text-[16px] font-medium leading-[1.7] text-brand-navy">Thinking about Japan for your brand?</p>
      <p className="mt-2 text-[14.5px] leading-[1.85] text-[#555]">
        The Japan Fit Check is free. Share a product link and a short overview, and Faise’s Japan team will tell you honestly whether Japan makes sense for your brand — and how to start.
      </p>
      <div className="mt-5 flex flex-wrap gap-x-8 gap-y-3 text-[13px] font-medium tracking-[0.04em]">
        <Link href={FIT_CHECK_HREF} className="text-brand hover:text-brand-navy">Get a free Japan Fit Check →</Link>
        <Link href={JAPAN_LAUNCH_PATH_EN} className="text-[#333] hover:text-brand">How Japan Launch works →</Link>
      </div>
    </div>
  )
}

// 写真（キャプション付き）。イメージ素材なので、実在の商品・案件の写真だと読める書き方はしない
export function GuideFigure({ img, caption, priority = false }: { img: GuideImageKey; caption?: string; priority?: boolean }) {
  const i = guideImage(img)
  return (
    <figure className="mt-8">
      <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[#f3f1ec]">
        <Image src={i.src} alt={i.alt} fill priority={priority} sizes="(min-width: 860px) 760px, 100vw" className="object-cover" />
      </div>
      {caption && <figcaption className="mt-3 text-[13px] leading-[1.7] text-[#777]">{caption}</figcaption>}
    </figure>
  )
}

// 事例：Cyspera（scientis）。LP と同じ事実・同じ実際の投稿だけを表示する
export function CaseStudyBlock() {
  const f = track.featured
  return (
    <div className="mt-8 rounded-sm border border-[#ecebe7] bg-[#fbfaf8] p-5 md:p-7">
      <div className="flex gap-5 md:gap-7">
        <div className="relative w-[72px] shrink-0 md:w-[92px]">
          <Image src={f.image.src} alt={f.image.alt.en} width={f.image.w} height={f.image.h} className="h-auto w-full" />
        </div>
        <div>
          <p className="font-inter text-[11px] font-medium uppercase tracking-[0.24em] text-brand">Case · {f.brand}</p>
          <p className="mt-1.5 text-[17px] font-medium leading-[1.5]">{f.title.en}</p>
          <p className="mt-3 text-[13px] font-medium text-[#555]">{f.workLabel.en}</p>
          <ul className="mt-1.5 flex flex-wrap gap-2">
            {f.work.map((w) => (
              <li key={w.en} className="rounded-full border border-[#e3e2dd] bg-white px-3 py-1 text-[12.5px] text-[#444]">{w.en}</li>
            ))}
          </ul>
        </div>
      </div>
      <p className="mt-6 text-[13px] font-medium text-[#555]">{f.videosLabel.en} · Instagram Reels</p>
      <ul className="mt-3 grid grid-cols-3 gap-3">
        {f.videos.map((v) => {
          const thumb = (
            <div className="relative aspect-[9/16] overflow-hidden rounded-sm bg-[#eee]">
              <Image src={v.thumb} alt={v.alt.en} fill sizes="(min-width: 860px) 240px, 30vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
              {v.url && (
                <span className="absolute bottom-2 right-2 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white">{f.watch.en} ↗</span>
              )}
            </div>
          )
          return (
            <li key={v.thumb}>
              {v.url ? (
                <a href={v.url} target="_blank" rel="noopener" className="group block" aria-label={`${v.platform} — ${f.watch.en}`}>{thumb}</a>
              ) : (
                thumb
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

// 筆者紹介（顔写真・経歴・LinkedIn）。経歴は LP の track.career と代表メッセージに載っている事実のみ
export function AuthorBox() {
  const p = images.founder
  return (
    <aside aria-label="About the author" className="mt-14 flex gap-5 border-y border-[#ecebe7] py-7 md:gap-7">
      <div className="relative h-[84px] w-[68px] shrink-0 overflow-hidden rounded-sm md:h-[104px] md:w-[84px]">
        <Image src={p.src} alt={p.alt.en} fill sizes="84px" className="object-cover" />
      </div>
      <div>
        <p className="text-[12px] font-medium uppercase tracking-[0.2em] text-[#999]">About the author</p>
        <p className="mt-1 text-[16px] font-medium">{GUIDE_AUTHOR.name}, {GUIDE_AUTHOR.jobTitle}</p>
        <p className="mt-2 text-[14px] leading-[1.8] text-[#555]">
          Grew up partly in the United States (seven years of childhood). Worked at Sony in marketing and business development (2021–2023) and at Katana Inc. (2023–2025), then founded Faise in 2025 to bring great products from abroad to Japanese consumers.
        </p>
        <a href={FOUNDER_LINKEDIN_URL} target="_blank" rel="noopener" className="mt-2 inline-block text-[13px] font-medium text-brand hover:text-brand-navy">LinkedIn ↗</a>
      </div>
    </aside>
  )
}

export { Footer }
