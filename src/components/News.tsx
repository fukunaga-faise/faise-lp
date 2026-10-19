'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// お知らせ。ここに追記すると一覧に反映されます（新しいものを上に）。
// ※掲載は事実のみ。現時点では会社概要に記載済みの「設立」のみ。
const news: { date: string; text: Record<Lang, string> }[] = [
  { date: '2025.12', text: { ja: '株式会社Faiseを設立しました', en: 'Faise Inc. was established' } },
]

const t = {
  h2: { ja: 'お知らせ', en: 'News' },
}

export default function News() {
  const { lang } = useLanguage()
  if (news.length === 0) return null

  return (
    <section id="news" className="border-t border-[#ecebe7] bg-white py-16 md:py-20">
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>News</Label>
            <h2 className="mt-5 text-[clamp(20px,1.9vw,26px)] font-medium leading-[1.7] tracking-[0.04em] text-[#111]">{t.h2[lang]}</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {news.map((n) => (
                <li key={n.date + n.text.ja} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-10">
                  <time className="font-inter text-[12px] tracking-[0.12em] text-[#999]">{n.date}</time>
                  <p className="text-[13px] md:text-[14px] tracking-[0.04em] text-[#333]">{n.text[lang]}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
