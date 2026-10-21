'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 会社概要の内容は現行サイトのまま
const rowsByLang: Record<Lang, { label: string; value: string }[]> = {
  ja: [
    { label: '会社名', value: '株式会社Faise' },
    { label: '代表取締役', value: '福永 遥斗' },
    { label: '設立', value: '2025年12月' },
    { label: '所在地', value: '〒140-0014\n東京都品川区大井4-18-25' },
    { label: '事業内容', value: '集客施設向けマーケティング支援\n（コンセプト設計・体験設計・集客戦略）' },
  ],
  en: [
    { label: 'Company name', value: 'Faise Inc.' },
    { label: 'CEO', value: 'Haruto Fukunaga' },
    { label: 'Founded', value: 'December 2025' },
    { label: 'Address', value: '4-18-25 Oi, Shinagawa-ku,\nTokyo 140-0014, Japan' },
    { label: 'Business', value: 'Marketing support for footfall-driven businesses\n(concept design, experience design, growth strategy)' },
  ],
}

const t = { h2: { ja: '会社概要', en: 'Company Profile' } }

export default function Company() {
  const { lang } = useLanguage()
  const rows = rowsByLang[lang]

  return (
    <section id="company" className="border-t border-[#ecebe7] bg-white py-20 md:py-24">
      <div className={container}>
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>Company</Label>
            <h2 className="mt-5 text-[clamp(20px,1.9vw,26px)] font-medium leading-[1.7] tracking-[0.04em] text-[#111]">{t.h2[lang]}</h2>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="max-w-3xl border-t-2 border-brand-sky/40">
              {rows.map((row) => (
                <div key={row.label} className="grid grid-cols-[110px_1fr] gap-5 border-b border-[#ecebe7] py-5 md:grid-cols-[200px_1fr]">
                  <dt className="text-[12px] md:text-[13px] tracking-[0.08em] text-brand">{row.label}</dt>
                  <dd className="whitespace-pre-line text-[13px] md:text-[14px] leading-[1.95] tracking-[0.04em] text-[#111]">{row.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
