'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useLanguage } from '@/lib/language'
import { clinicContent as c } from '@/lib/clinic-content'
import Nav from './Nav'
import CTA from './CTA'
import PageCurtain from './PageCurtain'
import { ArrowLink, CountUp, Label, Reveal, ScrollProgress, container } from './ui'

// 美容クリニックの集客支援（SEO用の専用ページ）。デザインは既存トップのデザインシステムに合わせる。
export default function ClinicPage() {
  const { lang } = useLanguage()

  return (
    <main className="bg-white text-[#111]">
      <PageCurtain />
      <ScrollProgress />
      <Nav base="/" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-white pt-28 pb-14 md:pt-40 md:pb-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div
            className="faise-anim absolute -left-[18vmax] -top-[24vmax] h-[60vmax] w-[60vmax] rounded-full will-change-transform"
            style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,172,224,.24) 0%, rgba(31,172,224,.09) 36%, rgba(31,172,224,0) 70%)', animation: 'faiseWashA 30s ease-in-out infinite' }}
          />
        </div>
        <div className={`${container} relative`}>
          <nav aria-label="breadcrumb" className="mb-8 flex items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href="/" className="transition-colors hover:text-brand">{c.breadcrumb.home[lang]}</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{c.breadcrumb.here[lang]}</span>
          </nav>
          <Reveal className="max-w-3xl">
            <Label>{c.hero.label}</Label>
            <h1 className="mt-6 text-[clamp(30px,5.4vw,56px)] font-medium leading-[1.45] tracking-[0.02em] text-[#111]">
              {c.hero.h1[lang][0]}
              <br />
              <span className="text-brand-gradient">{c.hero.h1[lang][1]}</span>
            </h1>
            <p className="mt-7 text-[14.5px] md:text-[15px] leading-[2.05] tracking-[0.03em] text-[#555]">{c.hero.lead[lang]}</p>
            <div className="mt-9">
              <ArrowLink href="/#contact-form">{c.hero.cta[lang]}</ArrowLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Challenges */}
      <section className="border-t border-[#ecebe7] bg-brand-tint py-14 md:py-24">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <Label>{c.worries.label}</Label>
              <h2 className="mt-6 text-[clamp(20px,5.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(24px,2.4vw,34px)]">
                {c.worries.h2[lang][0]}
                <br />
                {c.worries.h2[lang][1]}
              </h2>
            </Reveal>
            <ul className="space-y-3">
              {c.worries.items[lang].map((item, i) => (
                <li key={item}>
                  <Reveal delay={i * 0.06}>
                    <p className="rounded-sm border-l-[3px] border-brand-sky bg-white px-5 py-4 text-[15px] md:text-[15px] font-medium leading-[1.8] tracking-[0.02em] text-[#222] shadow-[0_14px_32px_-26px_rgba(20,24,92,0.5)]">{item}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="border-t border-[#ecebe7] bg-white py-14 md:py-24">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Label>{c.support.label}</Label>
            <h2 className="mt-6 text-[clamp(20px,5.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(26px,2.8vw,38px)]">
              {c.support.h2[lang][0]}
              <br />
              {c.support.h2[lang][1]}
            </h2>
            <p className="mt-6 text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]">{c.support.lead[lang]}</p>
          </Reveal>
          <ol className="mt-12 grid gap-x-10 gap-y-10 md:mt-16 md:grid-cols-2">
            {c.support.items.map((it, i) => (
              <li key={i} className="border-t border-[#ecebe7] pt-6">
                <Reveal delay={i * 0.06}>
                  <p className="font-inter text-[34px] font-light leading-none text-brand-gradient md:text-[40px]">0{i + 1}</p>
                  <h3 className="mt-4 text-[18px] md:text-[19px] font-medium leading-[1.6] tracking-[0.04em] text-[#111]">{it.title[lang]}</h3>
                  <p className="mt-3 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{it.body[lang]}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Case */}
      <section className="border-t border-[#ecebe7] bg-brand-tint py-14 md:py-24">
        <div className={container}>
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <Label>{c.case.label}</Label>
              <h2 className="mt-6 text-[clamp(20px,5.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(24px,2.4vw,34px)]">
                {c.case.h2[lang][0]}
                <br />
                {c.case.h2[lang][1]}
              </h2>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-sm bg-white px-6 py-8 shadow-[0_18px_40px_-28px_rgba(20,24,92,0.5)] md:px-10 md:py-10">
                <p className="text-[13px] md:text-[13.5px] font-medium tracking-[0.04em] text-[#555]">{c.case.metricLabel[lang]}</p>
                <p className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
                  <span className="font-inter text-[64px] font-light leading-none tracking-[-0.01em] text-brand-gradient md:text-[84px]">
                    <CountUp to={Number(c.case.value)} />
                  </span>
                  <span className="text-[22px] md:text-[26px] font-medium tracking-[0.04em] text-brand-navy">{c.case.unit[lang]}</span>
                </p>
                <p className="mt-6 border-t border-[#ecebe7] pt-6 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{c.case.body[lang]}</p>
                <p className="mt-6 font-inter text-[11px] font-medium tracking-[0.24em] text-brand">{c.case.actionsLabel[lang]}</p>
                <ul className="mt-3 space-y-2">
                  {c.case.actions[lang].map((a) => (
                    <li key={a} className="flex gap-2.5 text-[14px] md:text-[13.5px] leading-[1.75] tracking-[0.02em] text-[#222]">
                      <span aria-hidden="true" className="mt-[0.75em] h-[5px] w-[5px] shrink-0 rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ（構造化データの FAQPage と同じ内容。常に展開して表示する） */}
      <section className="border-t border-[#ecebe7] bg-white py-14 md:py-24">
        <div className={container}>
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16">
            <Reveal>
              <Label>{c.faq.label}</Label>
              <h2 className="mt-6 text-[clamp(20px,5.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(24px,2.4vw,34px)]">{c.faq.h2[lang]}</h2>
            </Reveal>
            <dl className="divide-y divide-[#ecebe7] border-y border-[#ecebe7]">
              {c.faq.items.map((f, i) => (
                <div key={i} className="py-6">
                  <Reveal delay={i * 0.05}>
                    <dt className="flex gap-3 text-[16px] md:text-[16px] font-medium leading-[1.7] tracking-[0.03em] text-[#111]">
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

      <CTA />
    </main>
  )
}
