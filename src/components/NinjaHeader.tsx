'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import LaunchNinjaLogo from '@/components/LaunchNinjaLogo'

// LAUNCH NINJA（英語LP）用の軽量ヘッダー。共通の Nav（framer-motion を使用）と同じ見た目・リンクを、
// アニメーションライブラリなしで実装して、ページの JavaScript を減らす。
// CTA はただのページ内リンク（#scan）なので JS なしでも動く。JS はモバイルメニューの開閉だけ。
type Props = {
  home: string
  links: { label: string; href: string }[]
  ctaHref: string
  ctaLabel: string
  ctaShort?: string // スマホ用の短い表記
  altHref: string // 言語切り替え（日本語の会社サイト）
}

export default function NinjaHeader({ home, links, ctaHref, ctaLabel, ctaShort = ctaLabel, altHref }: Props) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-[#ecebe7] bg-white/95 px-5 backdrop-blur-md md:h-[76px] md:px-10 lg:px-14">
        <a href={home} aria-label="LAUNCH NINJA by Faise — home">
          <LaunchNinjaLogo markClassName="h-7 w-auto md:h-9" textClassName="text-[17px] md:text-[22px]" />
        </a>

        <nav aria-label="Page sections" className="hidden xl:block">
          <ul className="flex items-center gap-9">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-inter text-[14px] font-medium uppercase tracking-[0.18em] text-[#111]/75 transition-colors hover:text-beni">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3 xl:gap-6">
          <a href={altHref} hrefLang="ja" aria-label="日本語" className="hidden font-inter text-[13px] font-medium uppercase tracking-[0.2em] text-[#111]/60 hover:text-beni xl:inline">
            JA
          </a>
          <a
            href={ctaHref}
            className="group inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-beni px-3.5 py-2 text-[11.5px] font-semibold text-white transition-colors hover:bg-beni-deep xl:px-7 xl:py-3.5 xl:text-[13px]"
          >
            {/* スマホはロゴと並ぶので短い表記にする（読み上げは正式な文言） */}
            <span className="sm:hidden" aria-hidden="true">{ctaShort}</span>
            <span className="sr-only sm:not-sr-only">{ctaLabel}</span>
            <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" className="hidden transition-transform group-hover:translate-x-1 xl:block" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="-mr-2 flex flex-col gap-1.5 p-2 xl:hidden"
            aria-label="menu"
            aria-expanded={open}
            aria-controls="ninja-menu"
          >
            <span className={`block h-px w-6 bg-[#111] transition-transform duration-300 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
            <span className={`block h-px w-6 bg-[#111] transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
            <span className={`block h-px w-6 bg-[#111] transition-transform duration-300 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
          </button>
        </div>
      </header>

      <div
        id="ninja-menu"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-7 bg-white transition-opacity duration-300 xl:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        aria-hidden={!open}
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="font-inter text-[22px] font-medium uppercase tracking-[0.18em] text-[#111]/80 hover:text-beni">
            {l.label}
          </a>
        ))}
        <a href={ctaHref} tabIndex={open ? 0 : -1} onClick={() => setOpen(false)} className="mt-4 inline-flex items-center gap-3 rounded-full bg-beni px-9 py-4 text-[13px] font-semibold text-white">
          {ctaLabel}
          <ArrowRight size={15} strokeWidth={1.5} aria-hidden="true" />
        </a>
        <a href={altHref} hrefLang="ja" tabIndex={open ? 0 : -1} className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-[#111]/60 hover:text-[#111]">
          日本語
        </a>
      </div>
    </>
  )
}
