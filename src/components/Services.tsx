'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    en: 'Personal Gym',
    title: 'パーソナルジム\nプロモーション',
    copy: '人と空間の魅力を、\n予約につながる体験へ。',
    body: 'トレーナーの人柄と施設の空気感を、"会いに行きたい"という感情へ変換する。ブランディング設計から動画・広告・体験予約導線まで、一気通貫でご支援します。',
    tags: ['トレーナーブランディング', 'SNS動画企画', '広告運用', '体験予約導線設計'],
    // Replace src with: /images/service-gym.jpg
    imgStyle: { background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)' },
    dark: false,
  },
  {
    num: '02',
    en: 'Beauty Clinic',
    title: '美容クリニック\nプロモーション',
    copy: '価格ではなく、\n"選ばれる理由"をつくる。',
    body: '安心感と上質感を、来院動機として言語化・映像化する。クリニックの世界観を、SNS・広告・LP全体で一貫したブランド体験として設計します。',
    tags: ['世界観設計', 'SNS / 広告クリエイティブ', '来院導線設計', 'ブランディング支援'],
    // Replace src with: /images/service-clinic.jpg
    imgStyle: { background: 'linear-gradient(135deg, #f0f0f0 0%, #e8e8e8 50%, #d8d8d8 100%)' },
    dark: false,
  },
  {
    num: '03',
    en: 'Video & Casting',
    title: '動画広告制作・\nキャスティング',
    copy: '広告ではなく、\n"見たくなるコンテンツ"を。',
    body: '思わず止まり、続きが見たくなる。エンタメ発想でショート動画・広告クリエイティブを企画・制作。キャスティングからSNS施策まで対応します。',
    tags: ['ショート動画制作', '広告クリエイティブ', 'キャスティング', 'SNS施策'],
    // Replace src with: /images/service-video.jpg
    imgStyle: { background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #111827 100%)' },
    dark: false,
  },
]

function ServiceRow({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reverse = i % 2 === 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className={`grid md:grid-cols-2 gap-0 border-b border-[#eaeaea] ${reverse ? '' : ''}`}
    >
      {/* Text block */}
      <div className={`py-16 md:py-24 px-8 md:px-16 flex flex-col justify-center ${reverse ? 'md:order-2' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="flex items-center gap-4 mb-8">
            <span className="font-inter text-[11px] font-bold tracking-[0.3em] text-[#bbb]">{s.num}</span>
            <span className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#bbb]">{s.en}</span>
          </div>

          <h3 className="text-[clamp(24px,3.5vw,42px)] font-black leading-[1.2] tracking-tight text-[#0f0f0f] mb-6 whitespace-pre-line">
            {s.title}
          </h3>

          <p className="text-[clamp(15px,1.8vw,19px)] font-medium text-[#444] leading-[1.8] mb-6 whitespace-pre-line">
            {s.copy}
          </p>

          <p className="text-[13px] text-[#888] leading-[2] mb-8 max-w-sm">
            {s.body}
          </p>

          <div className="flex flex-wrap gap-2">
            {s.tags.map((tag) => (
              <span key={tag} className="font-inter text-[10px] tracking-wide text-[#666] border border-[#ddd] px-3 py-1.5 rounded-sm">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Image block */}
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.15 }}
        className={`relative min-h-[300px] md:min-h-[500px] overflow-hidden ${reverse ? 'md:order-1' : ''}`}
        style={s.imgStyle}
      >
        {/* Replace this div with <img src="/images/..." className="absolute inset-0 w-full h-full object-cover" /> */}
        <div className="absolute inset-0 flex items-end p-8 md:p-12">
          <p className="font-inter text-[9px] tracking-[0.3em] uppercase text-white/20">{s.en}</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-white border-t border-[#eaeaea]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={ref} className="px-8 md:px-20 pt-20 md:pt-28 pb-12 md:pb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#aaa] mb-6"
          >
            Services
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,4.5vw,54px)] font-black leading-[1.2] tracking-tight text-[#0f0f0f]"
            >
              人が行きたくなる設計を、
              <br />
              <span className="text-[#aaa]">すべての施設へ。</span>
            </motion.h2>
          </div>
        </div>

        {/* Services */}
        {services.map((s, i) => (
          <ServiceRow key={i} s={s} i={i} />
        ))}
      </div>
    </section>
  )
}
