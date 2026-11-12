import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Nav from '@/components/Nav'
import { localizePath, type Lang } from '@/lib/locale'

// 存在しない URL 用のページ（HTTP 404 のまま）。
// Next 既定の「404: This page could not be found.」は行き止まりなので、
// トップ・主要ページ・問い合わせへの導線を置いて離脱を防ぐ。
const T = {
  title: { ja: 'ページが見つかりません | 株式会社Faise', en: 'Page not found | Faise Inc.' },
  heading: { ja: 'お探しのページが見つかりませんでした', en: 'We couldn’t find that page' },
  body: {
    ja: 'URL が変わったか、ページが移動・削除された可能性があります。下のリンクからお探しください。',
    en: 'The page may have moved or no longer exists. Try one of the links below.',
  },
  links: {
    ja: [
      { href: '/', label: 'トップページ' },
      { href: '/clinic', label: '美容クリニックの集客支援' },
      { href: '/clinic/guide', label: '美容クリニック集客ガイド' },
    ],
    en: [{ href: '/', label: 'Japan Launch — bring your brand to Japan' }],
  },
  contact: { ja: '無料相談・お問い合わせ', en: 'Free consultation' },
}

export function notFoundMetadata(lang: Lang): Metadata {
  return { title: T.title[lang], robots: { index: false, follow: true } }
}

export default function NotFoundView({ lang }: { lang: Lang }) {
  const loc = (href: string) => localizePath(href, lang)
  return (
    <main className="bg-white text-[#111]">
      <Nav base={loc('/')} />
      <section className="mx-auto w-full max-w-[760px] px-6 pt-36 pb-24 md:px-10 md:pt-48 md:pb-32">
        <p className="font-inter text-[12px] font-medium tracking-[0.28em] uppercase text-brand">404 / Not Found</p>
        <h1 className="mt-5 text-[clamp(22px,4vw,32px)] font-medium leading-[1.55] tracking-[0.02em]">{T.heading[lang]}</h1>
        <p className="mt-5 text-[15px] leading-[2] tracking-[0.03em] text-[#555]">{T.body[lang]}</p>
        <ul className="mt-10 divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
          {T.links[lang].map((l) => (
            <li key={l.href}>
              <Link href={loc(l.href)} className="group flex items-center justify-between py-5 text-[15.5px] hover:text-brand">
                {l.label}
                <ArrowRight size={16} strokeWidth={1.5} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={lang === 'ja' ? '/#contact-form' : '/en/japan-launch#fit-check'}
          className="mt-10 inline-flex items-center gap-3 rounded-sm bg-gradient-to-r from-brand-sky to-brand px-8 py-4 text-sm font-bold tracking-[0.1em] text-white hover:from-brand hover:to-brand-navy"
        >
          {T.contact[lang]} <ArrowRight size={14} />
        </a>
      </section>
    </main>
  )
}
