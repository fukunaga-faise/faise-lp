'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

type Service = {
  number: string
  verb: string
  description: string
  items: string[]
}

const services: Service[] = [
  {
    number: '01',
    verb: '選ばれる理由をつくる',
    description: 'その事業ならではの強みを整理し、\nお客様から選ばれる理由を明確にします。',
    items: ['市場・競合分析', '顧客分析', 'ポジショニング設計', 'コンセプト設計', 'ブランド戦略', '商品・価格設計'],
  },
  {
    number: '02',
    verb: '伝わる形にする',
    description: '決めたコンセプトを、\n伝わる体験やクリエイティブへ落とし込みます。',
    items: ['動画制作', '写真撮影', '広告クリエイティブ制作', 'LP・Webサイト制作', 'SNSコンテンツ制作', '来店体験設計'],
  },
  {
    number: '03',
    verb: '人を集める',
    description: '最適な手段を組み合わせ、\n人が集まる仕組みをつくります。',
    items: ['Meta広告運用', 'Google広告運用', 'Instagram・TikTok運用', 'インフルエンサーマーケティング', 'LINEマーケティング', 'キャンペーン企画'],
  },
  {
    number: '04',
    verb: '成果を伸ばす',
    description: '数字をもとに改善を重ね、\n継続的な事業成長につなげます。',
    items: ['KPI設計', 'データ分析', '効果検証', 'コンバージョン改善', 'CRM改善', 'LTV改善'],
  },
]

const faqs = [
  'インフルエンサーを使いたいが、誰を起用すべきか分からない',
  '広告のCPAが上がり続けている',
  '動画は出しているが、予約につながらない',
  '開業したが、認知が広がらない',
]

function useCountUp(target: number, inView: boolean, reduceMotion: boolean, duration = 0.6) {
  const [value, setValue] = useState(reduceMotion ? target : 0)
  const started = useRef(false)

  useEffect(() => {
    if (reduceMotion) {
      setValue(target)
      return
    }
    if (!inView || started.current) return
    started.current = true
    const start = performance.now()
    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1)
      setValue(Math.round(progress * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, reduceMotion, target, duration])

  return value
}

function ServiceStep({ s, isLast }: { s: Service; isLast: boolean }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })
  const reduceMotion = useReducedMotion()
  const count = useCountUp(Number(s.number), inView, !!reduceMotion)

  return (
    <motion.div
      ref={ref}
      whileHover={reduceMotion ? undefined : { x: 6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative pl-10 md:pl-24 lg:pl-32 ${isLast ? '' : 'pb-20 md:pb-28 lg:pb-36'}`}
    >
      {/* Timeline node */}
      <motion.div
        initial={reduceMotion ? false : { scale: 0 }}
        animate={inView ? { scale: 1 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
        className="absolute left-1 md:left-6 lg:left-10 top-1 md:top-2 -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full border-2 border-[#4d7fff] bg-[#0a0a0a] z-10 transition-shadow duration-300 group-hover:shadow-[0_0_16px_4px_rgba(77,127,255,0.5)]"
      />

      {/* Number — large, low-contrast, decorative */}
      <motion.span
        initial={reduceMotion ? false : { opacity: 0, x: -20, scale: 0.85 }}
        animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
        className="block font-inter font-black leading-none tracking-[-0.03em] text-[56px] md:text-[90px] lg:text-[120px] text-[#4d7fff]/30 select-none -mb-3 md:-mb-6 lg:-mb-9 transition-colors duration-300 group-hover:text-[#4d7fff]/50"
      >
        {String(count).padStart(2, '0')}
      </motion.span>

      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <h3 className="text-[clamp(30px,4.5vw,60px)] font-black leading-[1.15] tracking-tight text-white">
          {s.verb}
        </h3>
      </motion.div>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-4 md:mt-6 text-[clamp(15px,1.4vw,19px)] text-white/85 leading-[1.9] max-w-xl whitespace-pre-line"
      >
        {s.description}
      </motion.p>

      <motion.p
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="mt-6 md:mt-8 font-inter text-[11px] md:text-[12px] font-bold tracking-[0.15em] uppercase text-white/40"
      >
        できること
      </motion.p>

      <div className="mt-3 flex flex-wrap gap-2">
        {s.items.map((item, idx) => (
          <motion.span
            key={item}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.25 + idx * 0.03 }}
            className="font-inter text-[12px] md:text-[13px] tracking-wide text-white/75 border border-white/25 px-2.5 py-1"
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const reduceMotion = useReducedMotion()

  const timelineRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start end', 'end start'],
  })
  const lineProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const arcProgress = useTransform(lineProgress, [0.75, 1], [0, 1])

  return (
    <section id="services" className="relative bg-[#0a0a0a] border-t border-[#4d7fff]/20 py-20 md:py-32 px-8 md:px-20 overflow-hidden">
      <div className="max-w-5xl mx-auto">

        <div className="overflow-hidden mb-2">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/50 select-none"
          >
            Our Services
          </motion.p>
        </div>

        <div className="overflow-hidden mb-20 md:mb-28" ref={ref}>
          <motion.h2
            initial={{ y: 60, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(28px,4.5vw,54px)] font-black leading-[1.2] tracking-tight text-white"
          >
            やっているのは、この4つです。
          </motion.h2>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Base line */}
          <div className="absolute left-1 md:left-6 lg:left-10 top-0 bottom-0 w-[2px] bg-white/10" />
          {/* Scroll-linked progress line */}
          <motion.div
            style={reduceMotion ? undefined : { scaleY: lineProgress }}
            className="absolute left-1 md:left-6 lg:left-10 top-0 bottom-0 w-[2px] origin-top bg-gradient-to-b from-[#27CBCF] to-[#1FA8DE]"
          />

          {/* 04 → 01 loop arc (desktop only, decorative) */}
          {!reduceMotion && (
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="hidden lg:block absolute -left-16 top-0 w-16 h-full pointer-events-none"
            >
              <defs>
                <linearGradient id="services-loop-arc" x1="0" y1="1" x2="0" y2="0">
                  <stop offset="0" stopColor="#1FA8DE" />
                  <stop offset="1" stopColor="#27CBCF" />
                </linearGradient>
              </defs>
              <motion.path
                d="M 41 97 C -30 97, -30 3, 41 3"
                fill="none"
                stroke="url(#services-loop-arc)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                vectorEffect="non-scaling-stroke"
                style={{ pathLength: arcProgress }}
              />
            </svg>
          )}

          {services.map((s, i) => (
            <ServiceStep key={s.number} s={s} isLast={i === services.length - 1} />
          ))}
        </div>

        {/* Below the list */}
        <p className="mt-20 md:mt-28 text-[clamp(15px,1.4vw,19px)] text-white/70 leading-[1.9] max-w-xl">
          「動画だけ」「広告だけ」のご相談もお受けしています。
          <br />
          ただ、理由が決まっていないまま進めると成果が出にくいので、
          <br />
          その場合は01からご提案します。
        </p>

        <div className="mt-16 md:mt-20">
          <h3 className="text-[clamp(18px,2vw,24px)] font-black text-white mb-6">
            よくいただくご相談
          </h3>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <p key={faq} className="text-[clamp(14px,1.3vw,17px)] text-white/60 leading-[1.9]">
                ・{faq}
              </p>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
