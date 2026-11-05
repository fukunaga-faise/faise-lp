'use client'

import { useLanguage } from '@/lib/language'
import { companyFaq } from '@/lib/company-faq'
import { Label, Reveal, container } from './ui'

// トップの FAQ（構造化データ FAQPage と同じ内容。常に展開して表示する）
export default function CompanyFaq() {
  const { lang } = useLanguage()

  return (
    <section id="faq" className="border-t border-[#ecebe7] bg-brand-tint py-14 md:py-24">
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
          <Reveal>
            <Label>FAQ</Label>
            <h2 className="mt-6 text-[clamp(20px,5.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(24px,2.4vw,34px)]">
              {lang === 'ja' ? 'よくあるご質問' : 'Frequently asked questions'}
            </h2>
          </Reveal>
          <dl className="divide-y divide-[#e3e2dd] border-y border-[#e3e2dd]">
            {companyFaq.map((f, i) => (
              <div key={f.q.ja} className="py-6">
                <Reveal delay={i * 0.04}>
                  <dt className="flex gap-3 text-[16px] font-medium leading-[1.7] tracking-[0.03em] text-[#111]">
                    <span className="font-inter text-brand-sky">Q.</span>
                    {f.q[lang]}
                  </dt>
                  <dd className="mt-3 flex gap-3 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">
                    <span className="font-inter text-brand">A.</span>
                    {f.a[lang]}
                  </dd>
                </Reveal>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
