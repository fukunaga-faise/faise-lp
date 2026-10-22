'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { LineReveal, BlurReveal } from './TextReveal'
import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

const t = {
  not: {
    ja: ['Faiseは', '広告会社でも、', 'SNS運用会社でもありません。'],
    en: ['Faise is', 'not an ad agency,', 'or a social media agency.'],
  },
  ask: {
    ja: [
      { k: '誰が、', d: 'Who' },
      { k: '何に価値を感じ、', d: 'What' },
      { k: 'なぜ選ぶのか。', d: 'Why' },
    ],
    en: [
      { k: 'Who,', d: 'Who' },
      { k: 'sees value in what,', d: 'What' },
      { k: 'and chooses why.', d: 'Why' },
    ],
  },
  stepLead: { ja: 'その理由を', en: 'The reason —' },
  steps: {
    ja: ['考え、', '形にし、', '届ける。'],
    en: ['We think it through,', 'shape it,', 'and deliver it.'],
  },
  close: {
    ja: ['事業が選ばれる仕組みを、', '戦略から実行まで一貫して設計します。'],
    en: ['We design the system behind being chosen,', 'from strategy through execution.'],
  },
}

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()

  return (
    <section id="mission" className="relative border-t border-[#ecebe7] bg-brand-tint py-14 md:py-28 overflow-hidden">
      <img src="/logo-mark.png" alt="" aria-hidden="true" className="pointer-events-none select-none absolute -right-[4%] top-1/2 hidden h-[110%] w-auto -translate-y-1/2 opacity-[0.07] md:block" />
      <div className={`${container} relative`} ref={ref}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
          <div>
            <LineReveal delay={0} inView={inView}>
              <Label>What We Do</Label>
            </LineReveal>

            <LineReveal className="mt-6" delay={0.1} inView={inView}>
              <h2 className="text-[clamp(26px,3vw,44px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111]">
                {lang === 'ja' ? (
                  <>
                    人が集まる理由は、
                    <br />
                    設計できる。
                  </>
                ) : (
                  <>
                    The reason people gather
                    <br />
                    can be designed.
                  </>
                )}
              </h2>
            </LineReveal>

            <BlurReveal className="mt-10" delay={0.3} inView={inView}>
              <div className="flex items-stretch gap-4">
                <div className="w-[3px] shrink-0 rounded-full bg-gradient-to-b from-brand-sky to-brand" />
                <p className="text-[clamp(16px,1.5vw,21px)] font-medium leading-[1.9] tracking-[0.03em] text-[#111]">
                  {lang === 'ja' ? (
                    <>
                      「行きたい」と思う理由は、
                      <br />
                      偶然生まれるものではありません。
                    </>
                  ) : (
                    <>
                      The reason someone wants to go
                      <br />
                      isn’t born by chance.
                    </>
                  )}
                </p>
              </div>
            </BlurReveal>
          </div>

          <div className="space-y-4 md:space-y-5 lg:pt-1">
            {/* 1. What we are not */}
            <Reveal>
              <div className="relative overflow-hidden rounded-sm border border-brand/15 bg-white px-6 py-6 shadow-[0_18px_40px_-26px_rgba(37,99,214,0.45)] md:px-8 md:py-7">
                <span aria-hidden="true" className="absolute inset-y-0 left-0 w-[4px] bg-gradient-to-b from-brand-sky to-brand" />
                <p className="font-inter text-[11px] font-medium tracking-[0.26em] text-brand-sky">{t.not[lang][0]}</p>
                <p className="mt-3 text-[clamp(19px,1.8vw,26px)] font-bold leading-[1.7] tracking-[0.03em] text-[#111]">
                  <span>{t.not[lang][1]}</span>
                  <br />
                  <span>{t.not[lang][2]}</span>
                </p>
              </div>
            </Reveal>

            {/* 2. The three questions */}
            <ul className="space-y-2.5">
              {t.ask[lang].map((q, i) => (
                <li key={q.d}>
                  <Reveal delay={0.05 + i * 0.08}>
                    <div className={`group flex items-center gap-4 rounded-sm bg-white px-5 py-4 shadow-[0_14px_32px_-24px_rgba(20,24,92,0.5)] transition-transform duration-500 hover:translate-x-1 md:gap-6 md:px-7 md:py-5 ${["", "md:ml-6", "md:ml-12"][i]}`}>
                      <span className="w-[3.4rem] shrink-0 font-inter text-[15px] font-bold tracking-[0.1em] text-brand-gradient md:w-20 md:text-[18px]">{q.d}</span>
                      <span className="text-[clamp(17px,1.6vw,22px)] font-bold tracking-[0.03em] text-[#111]">{q.k}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>

            {/* 3. Think -> shape -> deliver */}
            <Reveal delay={0.1}>
              <div className="rounded-sm bg-white px-5 py-6 shadow-[0_14px_32px_-24px_rgba(20,24,92,0.5)] md:px-8 md:py-7">
                <p className="mb-4 text-[14px] font-medium tracking-[0.06em] text-brand md:text-[15px]">{t.stepLead[lang]}</p>
                <ol className="grid grid-cols-3 gap-2 md:gap-4">
                  {t.steps[lang].map((st, i) => (
                    <li key={st} className="relative border-t-2 border-brand-sky/50 pt-3">
                      <span className="font-inter text-[28px] font-light leading-none text-brand-gradient md:text-[34px]">0{i + 1}</span>
                      {i < 2 && <span aria-hidden="true" className="absolute -right-2 top-[-9px] text-[15px] leading-none text-brand md:-right-3">›</span>}
                      <p className="mt-2 text-[clamp(15px,1.4vw,19px)] font-bold leading-[1.55] tracking-[0.02em] text-[#111]">{st}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>

            {/* 4. Conclusion */}
            <Reveal delay={0.15}>
              <div className="relative overflow-hidden rounded-sm bg-gradient-to-br from-brand-sky via-brand to-brand-navy px-5 py-7 text-white md:px-8 md:py-9">
                <span aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 h-52 w-52 rounded-full bg-white/10 blur-2xl" />
                <p className="relative text-[clamp(14.5px,1.5vw,21px)] font-medium leading-[1.9] tracking-[0.02em] md:tracking-[0.04em]">
                  {t.close[lang][0]}
                  <br />
                  <span className="font-bold">{t.close[lang][1]}</span>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
