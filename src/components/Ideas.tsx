'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ideas = [
  {
    num: '01',
    title: '変身体験ドキュメント',
    desc: '実際の会員の変化をドキュメンタリーとして撮影。"自分も変われる"感情を引き出す。',
    tag: '動画企画',
  },
  {
    num: '02',
    title: 'トレーナー密着企画',
    desc: '思想・哲学・人生観を発信し「この人に教わりたい」を設計する。',
    tag: 'IP化',
  },
  {
    num: '03',
    title: '医師の思想ショート動画',
    desc: '技術の説明ではなく、医師の価値観・こだわりを伝えることでブランドの信頼を醸成。',
    tag: '医師ブランディング',
  },
  {
    num: '04',
    title: '会員ストーリー',
    desc: '入会前後の感情の変化にフォーカス。共感ファーストで予約意欲を高める。',
    tag: 'UGC設計',
  },
  {
    num: '05',
    title: '紹介したくなるキャンペーン',
    desc: 'ただのポイント制ではなく、「友達に話したくなる」設計で自然な口コミを生む。',
    tag: 'キャンペーン',
  },
  {
    num: '06',
    title: 'SNS参加型企画',
    desc: 'ユーザーが主役になれる仕掛けで、フォロワーがコンテンツを作ってくれる仕組みを設計。',
    tag: 'UGC',
  },
  {
    num: '07',
    title: 'ビフォーアフターのブランド化',
    desc: '単なるBefore/Afterではなく、「感情の変化」を軸にした物語として設計する。',
    tag: 'クリエイティブ',
  },
]

export default function Ideas() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section className="bg-[#f5f5f5] py-16 md:py-36 px-0 md:px-6 border-t border-[#eaeaea]">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <div className="px-6 md:px-0 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
          >
            Idea Examples
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(24px,4vw,52px)] font-black leading-[1.15] tracking-tight text-[#0f0f0f]"
            >
              &ldquo;広告素材&rdquo;ではなく、
              <br />
              <span className="text-gradient">&ldquo;見たくなる企画&rdquo;</span>をつくる。
            </motion.h2>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="md:hidden flex items-center justify-end gap-1.5 px-6 mb-4"
        >
          <span className="text-[11px] text-[#999] tracking-widest">Swipe</span>
          <span className="text-[#999] text-sm">→</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="
            flex overflow-x-auto snap-x snap-mandatory no-scrollbar
            gap-3 pl-6 pr-6 pb-2
            md:grid md:grid-cols-3 md:overflow-visible md:pl-0 md:pr-0 md:pb-0
          "
        >
          {ideas.map((idea) => (
            <div
              key={idea.num}
              className="
                snap-start shrink-0 w-[72vw] sm:w-64
                md:w-auto md:shrink
                group border border-[#e8e8e8] bg-white
                hover:bg-[#f8fbff] hover:border-[#0050d0]/20
                p-5 rounded-sm transition-all duration-300
                shadow-[0_1px_4px_rgba(0,0,0,0.04)]
              "
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-inter text-[11px] font-bold text-[#ccc]">{idea.num}</span>
                <span className="text-[10px] font-bold tracking-widest uppercase text-[#0050d0] border border-[#bfdbfe] bg-[#eff6ff] px-2 py-0.5 rounded-sm whitespace-nowrap ml-2">
                  {idea.tag}
                </span>
              </div>
              <h3 className="text-[15px] font-black text-[#0f0f0f] mb-2 leading-snug">{idea.title}</h3>
              <p className="text-[12px] text-[#666] leading-[1.8]">{idea.desc}</p>
            </div>
          ))}
        </motion.div>

        <div className="md:hidden flex justify-center gap-1.5 mt-5">
          {ideas.map((_, i) => (
            <div key={i} className={`h-px w-4 rounded-full ${i === 0 ? 'bg-[#0050d0]' : 'bg-[#ddd]'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
