'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Eyebrow from './Eyebrow'

const services = [
  {
    en: 'Personal Gym',
    title: 'パーソナルジム プロモーション',
    copy: '人と空間の魅力を、予約につながる体験へ。',
    body: 'トレーナーの人柄と施設の空気感を、"会いに行きたい"という感情へ変換する。ブランディング設計から動画・広告・体験予約導線まで、一気通貫でご支援します。',
    tags: ['トレーナーブランディング', 'SNS動画企画', '広告運用', '体験予約導線設計'],
    img: '/images/service-gym.jpg',
  },
  {
    en: 'Beauty Clinic',
    title: '美容クリニック プロモーション',
    copy: '価格ではなく、"選ばれる理由"をつくる。',
    body: '安心感と上質感を、来院動機として言語化・映像化する。クリニックの世界観を、SNS・広告・LP全体で一貫したブランド体験として設計します。',
    tags: ['世界観設計', 'SNS広告クリエイティブ', '来院導線設計', 'ブランディング支援'],
    img: '/images/service-clinic.jpg',
  },
  {
    en: 'Video & Casting',
    title: '動画広告制作・キャスティング',
    copy: '広告ではなく、"見たくなるコンテンツ"を。',
    body: '思わず止まり、続きが見たくなる。エンタメ発想でショート動画・広告クリエイティブを企画・制作。キャスティングからSNS施策まで対応します。',
    tags: ['ショート動画制作', '広告クリエイティブ', 'キャスティング', 'SNS施策'],
    img: '/images/service-casting.jpg',
  },
]

function ServiceRow({ s, i }: { s: (typeof services)[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.05 * i, ease: [0.16, 1, 0.3, 1] }}
      className="grid md:grid-cols-[240px_1fr_1.35fr] gap-6 md:gap-12 items-start py-10 md:py-14 border-t hairline border-[#e7e9ee]"
    >
      <div className="overflow-hidden rounded-xl">
        <img
          src={s.img}
          alt={s.title}
          className="w-full aspect-[16/10] md:aspect-[4/3] object-cover hover:scale-[1.04] transition-transform duration-700"
        />
      </div>

      <div>
        <h3 className="text-[20px] md:text-[23px] font-black leading-[1.5] tracking-tight text-[#101318]">
          {s.title}
        </h3>
        <p className="mt-2 font-inter text-[12px] md:text-[13px] tracking-[0.08em] text-[#9aa0aa]">
          {s.en}
        </p>
      </div>

      <div>
        <p className="text-[15px] md:text-[16px] font-bold text-[#0050d0] leading-[1.9]">
          {s.copy}
        </p>
        <p className="mt-3 text-[14px] md:text-[15px] text-[#6d7480] leading-[2.1]">
          {s.body}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {s.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] md:text-[12px] font-medium text-[#6d7480] border hairline border-[#e7e9ee] rounded-full px-3.5 py-1.5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-white px-6 md:px-14 py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto">
        <div ref={ref} className="grid md:grid-cols-[280px_1fr] gap-8 md:gap-16 mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Eyebrow>Service</Eyebrow>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="text-[clamp(24px,6vw,42px)] font-black leading-[1.5] tracking-tight text-[#101318]">
              人が行きたくなる設計を、
              <br />
              すべての施設へ。
            </h2>
            <p className="mt-5 text-[14px] md:text-[15px] text-[#6d7480] leading-[2.1] max-w-xl">
              パーソナルジム・美容クリニックをはじめとした店舗型ビジネスの集客を、体験設計とクリエイティブの力でご支援しています。
            </p>
          </motion.div>
        </div>

        <div className="border-b hairline border-[#e7e9ee]">
          {services.map((s, i) => (
            <ServiceRow key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
