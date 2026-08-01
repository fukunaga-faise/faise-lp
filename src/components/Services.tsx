'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    en: 'Concept Design',
    title: 'コンセプト設計',
    copy: '誰に選ばれる場所かを、\n先に決める。',
    body: '集客が伸びない原因の多くは、施策ではなく前提にあります。誰の、どんな欲求に応える場所なのか。競合ではなく自社が選ばれる理由はどこにあるのか。市場と顧客の構造からポジショニングを定義し、すべての施策が向かう一点をつくります。',
    tags: ['#市場・競合分析', '#ターゲット定義', '#ポジショニング設計', '#ブランドコンセプト策定'],
    img: '/images/service-clinic.jpg',
  },
  {
    num: '02',
    en: 'Experience Design',
    title: '体験設計',
    copy: '「行きたい」が生まれる\n瞬間を、つくる。',
    body: '認知から来店、そして再訪まで。顧客が触れるすべての接点を一本の流れとして設計します。何を見て興味を持ち、何で不安が消え、何が予約の決め手になるのか。感情が動く順序を定義し、必要な体験と接点に落とし込みます。',
    tags: ['#カスタマージャーニー設計', '#来店動機の言語化', '#接点・導線設計', '#世界観設計'],
    img: '/images/service-gym.jpg',
  },
  {
    num: '03',
    en: 'Growth Execution',
    title: '集客戦略・実行',
    copy: '設計を、\n数字に変える。',
    body: '設計した体験を、実際に人が動く形へ。SNS・広告・動画クリエイティブ・キャスティングを、チャネル単位ではなく設計図に沿って組み立て、運用します。数値を見ながら改善し、来店と予約が続く状態をつくります。',
    tags: ['#SNS運用', '#広告運用', '#ショート動画制作', '#キャスティング', '#予約導線設計', '#効果測定・改善'],
    img: '/images/service-casting.jpg',
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
      className="grid md:grid-cols-2 gap-0 border-b border-white/10"
    >
      <div className={`py-16 md:py-24 px-8 md:px-16 flex flex-col justify-center order-2 ${reverse ? 'md:order-2' : 'md:order-1'}`}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <div className="flex items-baseline gap-3 mb-8">
            <span className="font-inter text-[clamp(36px,5vw,56px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/25">{s.num}</span>
            <span className="font-inter text-[clamp(12px,1vw,15px)] tracking-[0.25em] uppercase text-[#4d7fff]/80">{s.en}</span>
          </div>

          <h3 className="text-[clamp(26px,3.5vw,48px)] font-black leading-[1.2] tracking-tight text-white mb-6 whitespace-pre-line">
            {s.title}
          </h3>

          <p className="text-[clamp(18px,2.4vw,32px)] font-medium text-white/80 leading-[1.8] mb-6 whitespace-pre-line">
            {s.copy}
          </p>

          <p className="text-[clamp(15px,1.6vw,22px)] text-white/70 leading-[2] mb-8">
            {s.body}
          </p>

          <div className="flex flex-wrap gap-2">
            {s.tags.map((tag) => (
              <span key={tag} className="font-inter text-[clamp(13px,1.1vw,16px)] tracking-wide text-white border border-white/30 bg-[#4d7fff]/20 px-4 py-2 hover:bg-[#4d7fff]/40 transition-colors duration-200">
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.15 }}
        className={`relative min-h-[300px] md:min-h-[500px] overflow-hidden order-1 ${reverse ? 'md:order-1' : 'md:order-2'}`}
      >
        <img src={s.img} alt={s.en} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>
    </motion.div>
  )
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="services" className="bg-[#0a0a0a]/80 border-t border-[#4d7fff]/20">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="px-8 md:px-20 pt-20 md:pt-28 pb-12 md:pb-16">
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

          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 60, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(28px,4.5vw,54px)] font-black leading-[1.2] tracking-tight text-white"
            >
              設計から、実行まで。
              <br />
              <span className="text-white/50">分断せずに、つなぐ。</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-[clamp(15px,1.6vw,22px)] text-white/70 leading-[1.9] mt-8"
          >
            コンセプトの定義、体験の設計、集客の実行。
            <br />
            この3つを別々の会社に分けないことが、成果の再現性をつくります。
          </motion.p>
        </div>

        {services.map((s, i) => (
          <ServiceRow key={i} s={s} i={i} />
        ))}
      </div>
    </section>
  )
}
