'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    num: '01',
    en: 'Strategy',
    title: '事業戦略・コンセプト設計',
    copy: '市場、競合、顧客を分析し、\n誰に、何を、どのような価値として届けるのかを明確にします。',
    body: '事業の「選ばれる理由」を整理し、マーケティングの土台となる戦略を設計します。',
    tags: ['市場分析', '競合分析', '顧客分析', 'ポジショニング設計', 'コンセプト設計', 'ブランド戦略', '価格、商品設計'],
  },
  {
    num: '02',
    en: 'Growth Marketing',
    title: '集客戦略・マーケティング実行',
    copy: '事業の課題やターゲットに合わせて、\n最適なチャネルと施策を組み合わせます。',
    body: '広告、SNS、インフルエンサー、LINEなどを個別に運用するのではなく、成果につながる一つの集客戦略として設計・実行します。',
    tags: ['マーケティング戦略', 'Meta広告運用', 'Google広告運用', 'Instagram、TikTok運用', 'インフルエンサーマーケティング', 'LINEマーケティング', 'CRM施策', 'キャンペーン企画'],
  },
  {
    num: '03',
    en: 'Creative',
    title: 'クリエイティブ・顧客体験設計',
    copy: '事業戦略を、\n顧客に伝わる体験や表現へ落とし込みます。',
    body: '目を引くだけではなく、ブランドの価値が正しく伝わり、顧客の行動につながるクリエイティブを制作します。',
    tags: ['クリエイティブ企画', '動画制作', '写真撮影', '広告クリエイティブ制作', 'LP制作', 'Webサイト制作', 'SNSコンテンツ制作', '顧客体験設計'],
  },
  {
    num: '04',
    en: 'Growth Optimization',
    title: '分析・改善・事業成長支援',
    copy: '施策を実行して終わりにせず、\n数値と顧客行動をもとに継続的な改善を行います。',
    body: '新規顧客の獲得だけでなく、継続率やLTVまで含めて、事業の成長を支援します。',
    tags: ['KPI設計', 'データ分析', '施策の効果検証', 'コンバージョン改善', 'LTV改善', 'CRM改善', 'リピート施策', 'レポーティング、改善提案'],
  },
]

function ServicePanel({ s, i }: { s: typeof services[0]; i: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1 + (i % 2) * 0.08 }}
      className="bg-[#0a0a0a] p-8 md:p-12 lg:p-14 flex flex-col"
    >
      <div className="flex items-baseline gap-3 mb-6">
        <span className="font-inter text-[clamp(32px,4vw,48px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/25">{s.num}</span>
        <span className="font-inter text-[clamp(12px,1vw,15px)] tracking-[0.25em] uppercase text-[#4d7fff]/80">{s.en}</span>
      </div>

      <h3 className="text-[clamp(22px,2.6vw,34px)] font-black leading-[1.3] tracking-tight text-white mb-5">
        {s.title}
      </h3>

      <p className="text-[clamp(16px,1.6vw,20px)] font-medium text-white/80 leading-[1.8] mb-4 whitespace-pre-line">
        {s.copy}
      </p>

      <p className="text-[clamp(14px,1.3vw,17px)] text-white/60 leading-[1.9] mb-8">
        {s.body}
      </p>

      <div className="flex flex-wrap gap-2 mt-auto">
        {s.tags.map((tag) => (
          <span key={tag} className="font-inter text-[clamp(12px,1vw,14px)] tracking-wide text-white/90 border border-white/20 bg-[#4d7fff]/10 px-3 py-1.5 hover:bg-[#4d7fff]/30 transition-colors duration-200">
            {tag}
          </span>
        ))}
      </div>
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
              事業成長に必要な、
              <br />
              <span className="text-white/50">すべてを。</span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="text-[clamp(15px,1.6vw,22px)] text-white/70 leading-[1.9] mt-8"
          >
            事業の戦略設計から、マーケティングの実行、
            <br />
            クリエイティブ制作、データをもとにした改善まで。
            <br />
            <br />
            事業成長に必要な支援を、
            <br />
            一つのチームで一気通貫して提供します。
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#4d7fff]/10 border-t border-[#4d7fff]/20">
          {services.map((s, i) => (
            <ServicePanel key={i} s={s} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
