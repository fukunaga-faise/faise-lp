'use client'

import { useLanguage, type Lang } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 強みの裏づけ数値は proof に { value, label } を足すと各カードの下に表示されます。
// ※確認できた数値のみ追加すること（現時点では未掲載）。
type Point = {
  num: string
  title: Record<Lang, string>
  body: Record<Lang, string>
  proof?: { value: Record<Lang, string>; label: Record<Lang, string> }
}

const points: Point[] = [
  {
    num: '01',
    title: { ja: '事業視点の戦略設計', en: 'Strategy from a business point of view' },
    body: {
      ja: '広告施策だけを考えるのではなく、商品やサービスが選ばれる理由から設計。事業の目的に合わせて、必要な施策を組み立てます。',
      en: 'We don’t just think about ads. We start from why your product or service gets chosen, then build the measures your business goals call for.',
    },
  },
  {
    num: '02',
    title: { ja: 'クリエイターネットワーク', en: 'Creator network' },
    body: {
      ja: '幅広いジャンルのインフルエンサーやクリエイターと連携。商材やターゲットに合わせた起用からコンテンツ制作まで対応します。',
      en: 'We work with influencers and creators across a wide range of genres, from casting that fits your product and target to content production.',
    },
  },
  {
    num: '03',
    title: { ja: '成果まで伴走する実行力', en: 'Execution that stays with you to results' },
    body: {
      ja: '企画を提案して終わりにせず、コンテンツ制作・広告配信・改善まで実行。予約や購入などの事業成果を重視します。',
      en: 'We don’t stop at proposing a plan. We carry out content production, ad delivery and improvement, focusing on business results such as bookings and purchases.',
    },
  },
]

const t = {
  h2: { ja: ['考えるだけでも、', 'つくるだけでも、', '終わらない。'], en: ['Not just thinking.', 'Not just making.', 'We see it through.'] },
  lead: {
    ja: '事業の魅力を見つけ、伝わる形にし、成果につなげる。Faiseは戦略から制作・集客まで、必要な専門領域をつなぎ、事業の成長を支援します。',
    en: 'We find what makes a business appealing, shape it so it comes across, and turn it into results. Faise connects the specialist skills needed — from strategy to production to acquisition — to support your growth.',
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
            <h2 className="mt-6 text-[clamp(26px,3.4vw,50px)] font-medium leading-[1.5] tracking-[0.02em] text-[#111]">
              {t.h2[lang][0]}
              <br />
              {t.h2[lang][1]}
              <br />
              <span className="text-brand-gradient">{t.h2[lang][2]}</span>
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
                <p className="mt-4 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">{p.body[lang]}</p>
                {p.proof && (
                  <p className="mt-6 border-t border-[#d9e3f3] pt-4">
                    <span className="font-inter text-[28px] font-light text-brand-gradient">{p.proof.value[lang]}</span>
                    <span className="ml-2 text-[12.5px] text-[#555]">{p.proof.label[lang]}</span>
                  </p>
                )}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
