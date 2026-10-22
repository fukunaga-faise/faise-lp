'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 各項目の proof は見出し下に表示する「経験・実績」の要点。
// ※ソニー・刀での経験、100名以上のインフルエンサー施策は代表の過去の経歴・プロジェクト経験であり、
//   Faise設立後の法人実績ではない（下部の注記で明記）。確認できた事実のみ記載すること。
type Point = {
  num: string
  title: Record<Lang, string>
  body: Record<Lang, string>
  proof: { value: Record<Lang, [string, string]>; label: Record<Lang, string> }
}

const points: Point[] = [
  {
    num: '01',
    title: { ja: '事業を動かしてきた経験', en: 'Experience moving businesses forward' },
    proof: {
      value: { ja: ['Sony・刀', ''], en: ['Sony · Katana', ''] },
      label: { ja: '事業会社でのマーケティング／新規事業・施設の立ち上げ', en: 'Marketing at operating companies / launching new businesses and facilities' },
    },
    body: {
      ja: 'ソニーでのマーケティング経験や、刀での新規事業・施設立ち上げに関わった経験を活かし、広告施策だけでなく、事業全体を見据えた集客戦略を設計します。',
      en: 'Drawing on marketing experience at Sony and involvement in launching new businesses and facilities at Katana, we design acquisition strategies that look at the whole business, not just ad campaigns.',
    },
  },
  {
    num: '02',
    title: { ja: '人を動かすコンテンツ制作力', en: 'Content that moves people' },
    proof: {
      value: { ja: ['100', '名以上'], en: ['100', '+'] },
      label: { ja: '新規施設の集客で起用した旅行系インフルエンサー', en: 'Travel influencers used to promote a new facility' },
    },
    body: {
      ja: '新規施設の集客では、100名以上の旅行系インフルエンサーを起用したプロモーションを経験。ターゲットに合ったクリエイターの選定から、SNSコンテンツの企画・制作まで対応します。',
      en: 'For a new facility’s launch, we ran a promotion using more than 100 travel influencers. We handle everything from choosing creators who fit your target to planning and producing social content.',
    },
  },
  {
    num: '03',
    title: { ja: '集客の成果までつなげる実行力', en: 'Execution that carries through to results' },
    proof: {
      value: { ja: ['Google・Meta', ''], en: ['Google · Meta', ''] },
      label: { ja: '広告運用から、LP・予約導線の改善まで', en: 'From ad operations to landing page and booking flow improvements' },
    },
    body: {
      ja: 'コンテンツを制作して終わりにせず、広告配信やLP・予約導線の改善まで対応。認知獲得だけでなく、予約・購入などの成果につなげる施策を実行します。',
      en: 'We don’t stop at producing content. We also handle ad delivery and improvements to landing pages and booking flows, running measures aimed at bookings and purchases, not just awareness.',
    },
  },
]

const t = {
  h2: { ja: ['人が集まる理由をつくり、', '成果につなげる。'], en: ['We build the reason people gather,', 'and turn it into results.'] },
  lead: {
    ja: '事業の立ち上げから、インフルエンサー施策、広告運用まで。事業会社で培ったマーケティング経験と実行力を活かし、集客の課題に向き合います。',
    en: 'From launching a business to influencer campaigns and ad operations. We draw on marketing experience built at operating companies, and on hands-on execution, to take on your acquisition challenges.',
  },
  note: {
    ja: '※ソニー・刀での経験、およびインフルエンサー100名以上の施策は、代表の過去の経歴・プロジェクト経験であり、株式会社Faise設立後の取引実績ではありません。',
    en: '※ The experience at Sony and Katana, and the campaign with more than 100 influencers, are from the representative’s past career and projects. They are not transactions of Faise Inc. since its founding.',
  },
}

export default function WhyFaise() {
  const { lang } = useLanguage()

  return (
    <section id="why" className="border-t border-[#ecebe7] bg-brand-tint py-14 md:py-28">
      <div className={container}>
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-end lg:gap-20">
          <Reveal>
            <Label>Why Faise</Label>
            <h2 className="mt-6 text-[clamp(22px,6.6vw,26px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111] md:text-[clamp(28px,3.4vw,50px)] md:leading-[1.5]">
              {t.h2[lang][0]}
              <br />
              <span className="text-brand-gradient">{t.h2[lang][1]}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="text-[14.5px] md:text-[15px] leading-[2.05] tracking-[0.03em] text-[#555]">{t.lead[lang]}</p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-10 border-t border-[#d9e3f3] pt-2 md:mt-16 md:grid-cols-3 md:gap-0 md:pt-0">
          {points.map((p, i) => (
            <li key={p.num} className="md:border-l md:border-[#d9e3f3] md:px-8 md:py-10 md:first:border-l-0 md:first:pl-0 md:last:pr-0 lg:px-10">
              <Reveal delay={i * 0.08}>
                <p className="font-inter text-[44px] font-light leading-none tracking-[0.02em] text-brand-gradient md:text-[56px]">{p.num}</p>
                <span aria-hidden="true" className="mt-5 block h-[2px] w-10 bg-gradient-to-r from-brand-sky to-brand" />
                <h3 className="mt-5 text-[19px] md:text-[20px] font-medium leading-[1.6] tracking-[0.04em] text-[#111]">{p.title[lang]}</h3>

                <p className="mt-4 flex items-baseline gap-1.5">
                  <span className="font-inter text-[28px] font-light leading-none tracking-[0.01em] text-brand-gradient md:text-[30px]">{p.proof.value[lang][0]}</span>
                  {p.proof.value[lang][1] && <span className="text-[14px] font-medium tracking-[0.04em] text-brand-navy">{p.proof.value[lang][1]}</span>}
                </p>
                <p className="mt-2 text-[13px] md:text-[12.5px] leading-[1.8] tracking-[0.02em] text-[#555] md:min-h-[4.1em]">{p.proof.label[lang]}</p>

                <p className="mt-4 border-t border-[#d9e3f3] pt-4 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{p.body[lang]}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal>
          <p className="mt-10 max-w-3xl text-[12px] leading-[1.9] tracking-[0.02em] text-[#777] md:mt-6">{t.note[lang]}</p>
        </Reveal>
      </div>
    </section>
  )
}
