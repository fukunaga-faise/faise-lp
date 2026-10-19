'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useLanguage, type Lang } from '@/lib/language'
import { Label, container } from './ui'

// 代表メッセージの文章・経歴・写真は現行サイトのまま（デザインのみ変更）
const career = [
  { period: '2021–2023', company: { ja: 'ソニー株式会社', en: 'Sony Corporation' } },
  { period: '2023–2025', company: { ja: '株式会社刀', en: 'Katana Inc.' } },
  { period: '2025–', company: { ja: '株式会社Faise', en: 'Faise Inc.' } },
]

const phrasesByLang: Record<Lang, string[]> = {
  ja: ['「ここに行ってみたい。」', '「この体験をしてみたい。」'],
  en: ['“I want to go here.”', '“I want to try this experience.”'],
}

const fullMessageByLang: Record<Lang, string[]> = {
  ja: [
    'これまで私は、テーマパークや集客施設のマーケティングに携わってきました。',
    'その中で何度も感じたのは、どれだけ魅力のある施設でも、その魅力が正しく伝わらなければ、人は集まらないということです。',
    '一方で、伝え方やコンセプトを少し見直すだけで、施設の魅力が伝わり、驚くほど人の流れが変わる瞬間も何度も見てきました。',
    '私は、すべての施設には、それぞれの魅力があると信じています。',
    '大切なのは、その魅力を見つけ、誰に、どのように届けるかを設計することです。',
    '人が集まれば、施設はもっと活気づき、街も地域も少しずつ豊かになっていく。',
    '私たちは、一つでも多くの施設が、その魅力にふさわしく選ばれる世界をつくっていきたいと考えています。',
  ],
  en: [
    'I’ve spent my career in marketing for theme parks and footfall-driven businesses.',
    'Time and again, I saw that no matter how appealing a place is, people won’t gather if that appeal isn’t communicated properly.',
    'At the same time, I’ve also seen how a small shift in messaging or concept can get that appeal across and change the flow of people dramatically.',
    'I believe every place has its own appeal.',
    'What matters is finding that appeal and designing who to reach with it, and how.',
    'When people gather, a place gains more energy — and its town, its community, grows a little richer too.',
    'We want to help build a world where as many places as possible are chosen in a way that matches their true appeal.',
  ],
}

const t = {
  h2: { ja: '代表メッセージ', en: 'Message from the CEO' },
  blockquote: {
    ja: ['良い施設が、', '正しく選ばれる世界へ。'],
    en: ['Toward a world where great places', 'get chosen for the right reasons.'],
  },
  summary: {
    ja: ['そう思われる理由をつくること。', 'それが、Faiseの仕事です。'],
    en: ['Creating the reason people feel that way —', 'that’s Faise’s work.'],
  },
  readMore: { ja: '全文を読む', en: 'Read more' },
  close: { ja: '閉じる', en: 'Close' },
  founderName: { ja: '福永 遥斗', en: 'Haruto Fukunaga' },
  founderTitle: { ja: '株式会社Faise 代表取締役', en: 'CEO, Faise Inc.' },
}

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)
  const { lang } = useLanguage()
  const phrases = phrasesByLang[lang]
  const fullMessage = fullMessageByLang[lang]

  return (
    <section id="founder" className="border-t border-[#ecebe7] bg-white py-20 md:py-28">
      <div className={container} ref={ref}>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Label>Message</Label>
            <h2 className="mt-6 text-[clamp(24px,2.3vw,34px)] font-medium leading-[1.6] tracking-[0.02em] text-[#111]">{t.h2[lang]}</h2>

            <blockquote className="mt-8 text-[clamp(18px,1.7vw,24px)] font-medium leading-[1.9] tracking-[0.03em] text-[#111]">
              {t.blockquote[lang][0]}
              <br />
              {t.blockquote[lang][1]}
            </blockquote>

            <div className="mt-8 space-y-2 border-l border-[#111] pl-5">
              {phrases.map((phrase) => (
                <p key={phrase} className="text-[14px] md:text-[15px] font-medium leading-[1.9] tracking-[0.04em] text-[#333]">
                  {phrase}
                </p>
              ))}
            </div>

            <p className="mt-8 text-[13px] md:text-[14px] leading-[2.1] tracking-[0.04em] text-[#666]">
              {t.summary[lang][0]}
              <br />
              {t.summary[lang][1]}
            </p>

            <button
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              className="group mt-8 inline-flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-[#111]"
            >
              <span>{expanded ? t.close[lang] : t.readMore[lang]}</span>
              <motion.span animate={{ rotate: expanded ? 45 : 0 }} transition={{ duration: 0.3 }} className="text-lg leading-none">
                +
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 space-y-5 border-t border-[#ecebe7] pt-6 text-[13px] md:text-[14px] leading-[2.05] tracking-[0.04em] text-[#555]">
                    {fullMessage.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#f1f0ec] md:aspect-[4/3]">
              <Image
                src="/images/founder.jpg"
                alt={t.founderName[lang]}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover object-center"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-4">
              <div>
                <p className="text-[18px] font-medium tracking-[0.06em] text-[#111]">{t.founderName[lang]}</p>
                <p className="mt-1 text-[12.5px] tracking-[0.04em] text-[#666]">{t.founderTitle[lang]}</p>
              </div>
              <p className="font-inter text-[11px] font-medium tracking-[0.22em] uppercase text-[#999]">Haruto Fukunaga</p>
            </div>

            <ul className="mt-8 grid grid-cols-3 gap-4 border-t border-[#ecebe7] pt-6">
              {career.map((c) => (
                <li key={c.period}>
                  <p className="font-inter text-[11px] tracking-[0.16em] text-[#999]">{c.period}</p>
                  <p className="mt-1.5 text-[12.5px] md:text-[13px] font-medium leading-[1.6] tracking-[0.03em] text-[#111]">{c.company[lang]}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
