'use client'

import { useLanguage } from '@/lib/language'
import { companyFaq } from '@/lib/company-faq'
import { Label, Reveal, container } from './ui'
import FaqList from '@/components/FaqList'

// トップの FAQ（構造化データ FAQPage と同じ内容。プルダウンで開閉）
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
          <FaqList items={companyFaq.map((f) => ({ q: f.q[lang], a: f.a[lang] }))} divider="divide-[#e3e2dd] border-[#e3e2dd]" />
        </div>
      </div>
    </section>
  )
}
