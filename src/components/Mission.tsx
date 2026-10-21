'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { LineReveal, BlurReveal } from './TextReveal'
import { useLanguage } from '@/lib/language'
import { Label, container } from './ui'

const t = {
  body: {
    ja: [
      ['Faiseは広告会社でも、', 'SNS運用会社でもありません。'],
      ['誰が、', '何に価値を感じ、', 'なぜ選ぶのか。'],
      ['その理由を考え、', '形にし、', '届ける。'],
      ['事業が選ばれる仕組みを、', '戦略から実行まで一貫して設計します。'],
    ],
    en: [
      ['Faise isn’t an ad agency,', 'or a social media agency.'],
      ['Who,', 'sees value in what,', 'and chooses why.'],
      ['We think it through,', 'shape it,', 'and deliver it.'],
      ['We design the system behind being chosen,', 'from strategy through execution.'],
    ],
  },
}

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const { lang } = useLanguage()

  return (
    <section id="mission" className="relative border-t border-[#ecebe7] bg-brand-tint py-20 md:py-28 overflow-hidden">
      <img src="/logo-mark.png" alt="" aria-hidden="true" className="pointer-events-none select-none absolute -right-[4%] top-1/2 hidden h-[110%] w-auto -translate-y-1/2 opacity-[0.07] md:block" />
      <div className={`${container} relative`} ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20">
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

          <BlurReveal delay={0.45} inView={inView}>
            <div className="space-y-7 lg:pt-1">
              {t.body[lang].map((lines, i) => (
                <p key={i} className="text-[14px] md:text-[15px] leading-[2.1] tracking-[0.04em] text-[#555]">
                  {lines.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < lines.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              ))}
            </div>
          </BlurReveal>
        </div>
      </div>
    </section>
  )
}
