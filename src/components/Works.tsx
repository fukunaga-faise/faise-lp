'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

const industries: { img: string; label: Record<Lang, string> }[] = [
  { img: 'works-fitness', label: { ja: 'フィットネス', en: 'Fitness' } },
  { img: 'beauty-clinic', label: { ja: '美容・ヘルスケア', en: 'Beauty & Healthcare' } },
  { img: 'hero-leisure', label: { ja: 'エンタメ・レジャー', en: 'Entertainment & Leisure' } },
  { img: 'hero-mall', label: { ja: '商業施設', en: 'Commercial Facilities' } },
  { img: 'hero-resort', label: { ja: 'ホテル・観光', en: 'Hotels & Tourism' } },
]

const stats = [
  { to: 558, prefix: '¥', comma: true, label: { ja: 'CPA', en: 'CPA' }, sub: { ja: '体験予約 1件あたり', en: 'Per trial booking' } },
  { to: 530, prefix: '', comma: false, label: { ja: '体験予約数', en: 'Trial bookings' }, sub: { ja: '広告運用開始から3ヶ月', en: 'In the first 3 months of ad operations' } },
  { to: 300, prefix: '', comma: false, label: { ja: '会員数', en: 'Members' }, sub: { ja: '施策開始後の純増', en: 'Net increase since launch' } },
]

const t = {
  h2: { ja: ['さまざまな業界で、', '確かな成果を。'], en: ['Solid results', 'across many industries.'] },
  lead: {
    ja: '美容・ヘルスケア領域をはじめ、さまざまな業界での支援実績をご紹介します。',
    en: 'Focusing on beauty and healthcare, here are examples of our work across industries.',
  },
  caseLabel: { ja: 'Case — Personal Fitness Studio / Tokyo', en: 'Case — Personal Fitness Studio / Tokyo' },
  caseTitle: {
    ja: ['広告ではなく、', '"続きが見たくなるコンテンツ"として届ける。'],
    en: ['Not as an ad,', 'but as content people want to keep watching.'],
  },
  body: {
    ja: [
      '吉本興業運営のクリスタルジムにて、出演者の魅力設計から動画構成・広告クリエイティブ・運用までを一気通貫で支援。',
      '単にサービス内容を伝えるのではなく、「この人に会ってみたい」「この空間を体験してみたい」と感じてもらえるよう、コンテンツ設計・感情設計をベースに、"行きたくなる理由"を企画段階から構築。',
      '実際のレッスン風景や指導シーンを活用し、SNS投稿と広告配信を連動。広告としてではなく、ファン心理を活かした体験価値の伝達として機能させることで、自然な予約導線を形成しました。',
    ],
    en: [
      'At Crystal Gym, operated by Yoshimoto Kogyo, we supported everything end to end — from designing the appeal of the on-screen talent to video structure, ad creative, and operations.',
      'Rather than simply describing the service, we built the reason to visit from the planning stage — grounded in content and emotional design — so people would feel “I want to meet this person” and “I want to experience this space.”',
      'Using real lesson and coaching footage, we linked social posts with ad delivery. By having it work not as advertising but as a way to convey experiential value that taps into fan psychology, we created a natural path to booking.',
    ],
  },
  disclaimer: {
    ja: '※実績の一例です。成果を保証するものではありません。',
    en: '※This is one example and does not guarantee results.',
  },
  industryNote: { ja: '対応業種の一例', en: 'Examples of industries we support' },
}

function CountUp({ to, prefix = '', comma = false, inView }: { to: number; prefix?: string; comma?: boolean; inView: boolean }) {
  const [val, setVal] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const duration = 1600
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])

  return (
    <>
      {prefix}
      {comma ? val.toLocaleString() : val.toString()}
    </>
  )
}

export default function Works() {
  const { lang } = useLanguage()
  const caseRef = useRef(null)
  const caseInView = useInView(caseRef, { once: true, margin: '-80px' })

  return (
    <section id="works" className="border-t border-[#ecebe7] bg-white py-20 md:py-28">
      <div className={container}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label>Works</Label>
            <h2 className="mt-6 text-[clamp(22px,1.9vw,28px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
            </h2>
            <p className="mt-6 max-w-[22em] text-[13px] leading-[2] tracking-[0.04em] text-[#666]">{t.lead[lang]}</p>
          </Reveal>

          <div>
            <p className="mb-4 font-inter text-[10px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-[#999]">{t.industryNote[lang]}</p>
            <ul className="no-scrollbar -mx-6 flex snap-x gap-4 overflow-x-auto px-6 md:-mx-10 md:px-10 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-3 sm:gap-x-4 sm:gap-y-8 sm:overflow-visible sm:px-0 lg:grid-cols-5 lg:gap-x-5">
              {industries.map((it, i) => (
                <li key={it.img} className="w-[58%] shrink-0 snap-start sm:w-auto">
                  <Reveal delay={i * 0.07}>
                    <div className="aspect-[4/3] overflow-hidden bg-[#f1f0ec] lg:aspect-[3/4]">
                      <img
                        src={`/images/redesign/${it.img}.jpg`}
                        alt=""
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                      />
                    </div>
                    <p className="mt-3 text-[12.5px] md:text-[13px] font-medium tracking-[0.06em] text-[#111]">{it.label[lang]}</p>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Featured case (existing content) */}
        <div ref={caseRef} className="mt-20 grid gap-10 border-t border-[#ecebe7] pt-14 md:mt-24 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-14">
          <Reveal>
            <Label className="!text-[10px] md:!text-[11px] !leading-[1.9] !tracking-[0.2em]">{t.caseLabel[lang]}</Label>
          </Reveal>

          <div>
            <Reveal>
              <h3 className="text-[clamp(20px,2vw,28px)] font-medium leading-[1.7] tracking-[0.03em] text-[#111]">
                {t.caseTitle[lang][0]}
                <br />
                {t.caseTitle[lang][1]}
              </h3>
            </Reveal>

            <ul className="mt-10 grid divide-y divide-[#ecebe7] border-y border-[#ecebe7] md:grid-cols-3 md:divide-x md:divide-y-0">
              {stats.map((s, i) => (
                <li key={i} className="py-7 md:px-8 md:first:pl-0">
                  <p className="font-inter text-[10px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-[#999]">{s.label[lang]}</p>
                  <p className="mt-3 font-inter text-[clamp(38px,4vw,56px)] font-light leading-none tracking-[0.01em] text-[#111]">
                    <CountUp to={s.to} prefix={s.prefix} comma={s.comma} inView={caseInView} />
                  </p>
                  <p className="mt-3 text-[12px] leading-[1.8] tracking-[0.03em] text-[#666]">{s.sub[lang]}</p>
                </li>
              ))}
            </ul>

            <Reveal className="mt-10 max-w-3xl space-y-5 text-[13px] md:text-[14px] leading-[2.05] tracking-[0.04em] text-[#555]">
              {t.body[lang].map((p) => (
                <p key={p}>{p}</p>
              ))}
              <p className="pt-2 text-[11px] text-[#999]">{t.disclaimer[lang]}</p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
