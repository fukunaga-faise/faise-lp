'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import { ArrowLink, container } from './ui'

// ファーストビュー。左にメインコピー、右に複数業種の写真をコラージュ。
// タイルの位置・大きさは % で指定（コンテナ比率に追従）。clip は斜めのカット形状。
// depth はスクロール時の視差（px）。transform のみで動かす。
type Tile = {
  src: string
  alt: { ja: string; en: string }
  l: number
  t: number
  w: number
  h: number
  clip: string
  pos?: string
  z?: number
  depth: number
}

const tiles: Tile[] = [
  { src: 'hero-mall', alt: { ja: '商業施設', en: 'Commercial facility' }, l: 7, t: 22, w: 44, h: 50, clip: 'polygon(6% 0,100% 0,94% 100%,0 100%)', z: 2, depth: 40 },
  { src: 'hero-dining', alt: { ja: '飲食店', en: 'Restaurant' }, l: 38, t: 0, w: 25, h: 21, clip: 'polygon(0 0,100% 0,93% 100%,7% 100%)', z: 3, depth: 90 },
  { src: 'hero-resort', alt: { ja: 'ホテル・リゾート', en: 'Hotel & resort' }, l: 64, t: 0, w: 36, h: 45, clip: 'polygon(9% 0,100% 0,100% 100%,0 100%)', z: 1, depth: 20 },
  { src: 'hero-building', alt: { ja: '商業施設の外観', en: 'Building exterior' }, l: 52, t: 38, w: 26, h: 62, clip: 'polygon(12% 0,100% 0,88% 100%,0 100%)', pos: '55% 50%', z: 3, depth: 70 },
  { src: 'hero-leisure', alt: { ja: 'テーマパーク・レジャー', en: 'Theme park & leisure' }, l: 79.5, t: 47, w: 20.5, h: 24, clip: 'polygon(8% 0,100% 0,100% 100%,0 100%)', pos: '55% 50%', z: 2, depth: 50 },
  { src: 'hero-clinic', alt: { ja: '美容クリニック', en: 'Beauty clinic' }, l: 79.5, t: 73, w: 20.5, h: 27, clip: 'polygon(8% 0,100% 0,100% 100%,0 100%)', pos: '50% 60%', z: 2, depth: 30 },
  { src: 'hero-cosmetics', alt: { ja: 'コスメ・美容ブランド', en: 'Cosmetics & beauty brands' }, l: 17, t: 69, w: 22, h: 31, clip: 'polygon(7% 0,100% 0,93% 100%,0 100%)', pos: '50% 45%', z: 4, depth: 100 },
]

const MARQUEE = ['EXPERIENCE DESIGN MARKETING / EXPERIENCE DESIGN MARKETING / ', 'FAISE INC. — FAISE INC. — FAISE INC. — ']

const t = {
  eyebrow: { ja: 'Experience Design Marketing', en: 'Experience Design Marketing' },
  h1: {
    ja: ['人が集まる理由を、', '設計する。'],
    en: ['The reason people gather,', 'we design it.'],
  },
  sub: {
    ja: ['ブランド、体験、マーケティング。', 'さまざまな事業の集客と成長を支援します。'],
    en: ['Brand, experience, marketing.', 'Supporting customer acquisition and growth across a wide range of businesses.'],
  },
  more: { ja: 'View More', en: 'View More' },
}

function ParallaxTile({ tile, index, progress, reduce, lang, k }: { tile: Tile; index: number; progress: MotionValue<number>; reduce: boolean; lang: 'ja' | 'en'; k: number }) {
  const y = useTransform(progress, [0, 1], [0, tile.depth * k])
  return (
    <motion.div
      className="absolute"
      style={{
        left: `${tile.l}%`,
        top: `${tile.t}%`,
        width: `${tile.w}%`,
        height: `${tile.h}%`,
        zIndex: tile.z ?? 1,
        y: reduce ? 0 : y,
      }}
    >
      <motion.div
        className="absolute inset-0 overflow-hidden bg-[#e9f1fa]"
        style={{ clipPath: tile.clip }}
        initial={reduce ? false : { opacity: 0, y: 22, scale: 1.03 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, delay: 0.15 + index * 0.09, ease: [0.22, 1, 0.36, 1] }}
      >
        <img
          src={`/images/redesign/${tile.src}.jpg`}
          alt={tile.alt[lang]}
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover"
          style={{ objectPosition: tile.pos ?? '50% 50%' }}
        />
      </motion.div>
    </motion.div>
  )
}

export default function Hero() {
  const { lang } = useLanguage()
  const reduce = !!useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  // Smaller parallax on stacked (phone/tablet) layouts so tiles never collide
  const [k, setK] = useState(1)
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 1023px)')
    const apply = () => setK(mq.matches ? 0.3 : 1)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })

  return (
    <section id="hero" ref={ref} className="relative overflow-hidden bg-white">
      {/* Ambient: drifting brand-blue light + flowing outline text (as on the current site) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div
          className="faise-anim absolute -left-[18vmax] -top-[24vmax] h-[62vmax] w-[62vmax] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(31,172,224,.30) 0%, rgba(31,172,224,.12) 36%, rgba(31,172,224,0) 70%)', animation: 'faiseWashA 30s ease-in-out infinite' }}
        />
        <div
          className="faise-anim absolute -bottom-[22vmax] left-[20%] h-[58vmax] w-[58vmax] rounded-full will-change-transform"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(37,99,214,.20) 0%, rgba(37,99,214,.07) 40%, rgba(37,99,214,0) 70%)', animation: 'faiseWashB 38s ease-in-out infinite' }}
        />
        <div className="absolute left-0 right-0 top-[22%] flex flex-col gap-[1.6vh] opacity-[0.065]">
          {MARQUEE.map((text, i) => (
            <div
              key={i}
              className="faise-anim flex w-max will-change-transform"
              style={{ animation: `${i === 0 ? 'faiseMarqueeL 46s' : 'faiseMarqueeR 60s'} linear infinite` }}
            >
              {[0, 1].map((k) => (
                <span
                  key={k}
                  className={`whitespace-nowrap pr-[.28em] font-inter text-[clamp(44px,8vw,112px)] font-extrabold leading-[1.04] tracking-[-0.02em] ${i === 0 ? 'text-brand-gradient' : ''}`}
                  style={i === 1 ? { color: 'transparent', WebkitTextStroke: '2px #2563d6' } : undefined}
                >
                  {text}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-col lg:block lg:h-[clamp(560px,43vw,800px)]">
        {/* Large faint brand mark (existing logo data) */}
        <img
          src="/logo-mark.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute left-[-4%] bottom-[-8%] hidden h-[70%] w-auto opacity-[0.09] lg:block"
        />

        {/* Copy */}
        <div className="relative z-20 lg:absolute lg:inset-0">
          <div className={`${container} pt-28 md:pt-32 lg:pt-0 lg:h-full lg:flex lg:items-center`}>
            <div className="lg:w-[46%] lg:pt-10">
              <p className="mb-6 md:mb-8 flex items-center gap-2.5 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] text-brand">
                <span className="block h-[7px] w-[7px] rounded-full bg-gradient-to-br from-brand-sky to-brand" />
                {t.eyebrow[lang]}
              </p>
              <h1 className={`font-medium tracking-[0.02em] text-[#111] ${lang === 'ja' ? 'whitespace-nowrap text-[clamp(32px,3.9vw,60px)] leading-[1.5] lg:text-[clamp(40px,3.9vw,60px)]' : 'text-[clamp(30px,3vw,46px)] leading-[1.4]'}`}>
                {t.h1[lang][0]}
                <br />
                <span className="text-brand-gradient">{t.h1[lang][1]}</span>
              </h1>
              <p className="mt-6 md:mt-8 text-[12.5px] md:text-[14px] leading-[2] tracking-[0.03em] md:tracking-[0.06em] text-[#555]">
                {t.sub[lang][0]}
                <br />
                {t.sub[lang][1]}
              </p>
              <div className="mt-8 md:mt-10">
                <ArrowLink href="#service">{t.more[lang]}</ArrowLink>
              </div>
            </div>
          </div>
        </div>

        {/* Collage */}
        <div className="relative mt-12 aspect-[1.2/1] w-full lg:absolute lg:right-0 lg:top-0 lg:mt-0 lg:aspect-auto lg:h-full lg:w-[66%]">
          {tiles.map((tile, i) => (
            <ParallaxTile key={tile.src} tile={tile} index={i} progress={scrollYProgress} reduce={reduce} lang={lang} k={k} />
          ))}

          {/* White fade so the copy stays readable over the photos */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-[48%] bg-gradient-to-r from-white via-white/80 to-transparent lg:block" />
        </div>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-brand-sky/60 via-[#ecebe7] to-transparent" />
    </section>
  )
}
