'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'
import { BUZZKURU_RELEASE } from '@/lib/press'

// お知らせ。ここに追記すると一覧に反映されます（新しいものを上に）。
// ※掲載は事実のみ。
const news: { date: string; text: Record<Lang, string>; href?: string; label?: Record<Lang, string> }[] = [
  {
    date: '2026.10.27',
    text: { ja: '美容クリニック向け成果報酬型集客サービス「バズクル」の提供を開始しました', en: 'Launched Buzzkuru, a pay-for-performance acquisition service for beauty clinics' },
    href: BUZZKURU_RELEASE.url,
    label: { ja: 'PR TIMES', en: 'PR TIMES' },
  },
  { date: '2025.12', text: { ja: '株式会社Faiseを設立しました', en: 'Faise Inc. was established' } },
]

const t = {
  h2: { ja: 'お知らせ', en: 'News' },
}

export default function News() {
  const { lang } = useLanguage()
  if (news.length === 0) return null

  return (
    <section id="news" className="border-t border-[#ecebe7] bg-white py-12 md:py-20">
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
                  <time className="font-inter text-[12px] font-medium tracking-[0.12em] text-brand">{n.date}</time>
                  <p className="text-[14.5px] md:text-[14px] tracking-[0.04em] text-[#333]">
                    {n.href ? (
                      <a href={n.href} target="_blank" rel="noopener" className="underline decoration-[#cfd8e6] underline-offset-4 transition-colors hover:text-brand">
                        {n.text[lang]}
                      </a>
                    ) : (
                      n.text[lang]
                    )}
                    {n.label && <span className="ml-2 text-[12px] text-[#999]">（{n.label[lang]}）</span>}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
