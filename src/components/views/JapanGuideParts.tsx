import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import Nav from '@/components/Nav'
import { Footer } from '@/components/CTA'
import { navLinks } from '@/components/views/JapanLaunchView'
import { JAPAN_LAUNCH_PATH_EN, FORM_ANCHOR } from '@/lib/japan-launch'
import { GUIDE_BASE } from '@/lib/japan-guides'

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

export { Footer }
