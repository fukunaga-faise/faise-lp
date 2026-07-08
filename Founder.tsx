'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Eyebrow from './Eyebrow'

const career = [
  { period: '2021–2023', company: 'ソニー株式会社' },
  { period: '2023–2025', company: '株式会社刀' },
  { period: '2025–', company: '株式会社Faise' },
]

const phrases = [
  '「この場所に行ってみたい」',
  '「この人に会ってみたい」',
  '「この体験をしてみたい」',
]

const fullMessage = [
  'どれだけ情報が溢れる時代でも、人が本当に行動を起こす瞬間には、必ず"心が動く理由"があります。その感情が、予約や来店につながっていく。',
  'Faiseでは、単に広告を出すことを目的にはしていません。大切にしているのは、施設やブランドが持つ魅力を、"行きたくなる理由"として世の中に届けることです。',
  '映像、世界観、言葉、導線設計——さまざまな要素を通して、人の感情を動かし、行動につながる体験を設計していく。それが、Faiseの考えるプロモーションです。',
  'エンターテインメントの力で、集客施設の価値を、もっと世の中に広げていきたい。Faiseは、そんな想いから生まれました。',
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <section id="founder" className="bg-[#f7f8fa] px-6 md:px-14 py-20 md:py-32">
      <div className="max-w-[1240px] mx-auto" ref={ref}>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>Message</Eyebrow>
        </motion.div>

        <div className="mt-10 md:mt-14 grid md:grid-cols-[1fr_300px] gap-12 md:gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.1 }}
          >
            <blockquote className="text-[clamp(24px,6vw,40px)] font-black leading-[1.7] tracking-tight text-[#101318] mb-9">
              人を動かすのは、
              <br />
              感情だと思っています。
            </blockquote>

            <div className="space-y-3 mb-9 pl-5 border-l-2 border-[#0050d0]">
              {phrases.map((phrase, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                  className="text-[15px] md:text-[18px] font-bold text-[#101318] leading-[1.8]"
                >
                  {phrase}
                </motion.p>
              ))}
            </div>

            <p className="text-[14px] md:text-[15px] text-[#6d7480] leading-[2.2] mb-6">
              その感情が、予約や来店につながっていく。
              <br />
              Faiseは、&quot;行きたくなる理由&quot;を設計する会社です。
            </p>

            <button
              onClick={() => setExpanded((v) => !v)}
              className="group flex items-center gap-2.5 text-[12px] md:text-[13px] font-bold text-[#0050d0] hover:opacity-70 transition-opacity duration-300 mb-8"
            >
              <span>{expanded ? '閉じる' : '全文を読む'}</span>
              <motion.span
                animate={{ rotate: expanded ? 45 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg leading-none"
              >
                +
              </motion.span>
            </button>

            <AnimatePresence>
              {expanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-5 text-[14px] md:text-[15px] text-[#6d7480] leading-[2.2] mb-10 border-t hairline border-[#e7e9ee] pt-8">
                    {fullMessage.map((p, i) => (
                      <p key={i}>{p}</p>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="relative pt-7 border-t hairline border-[#e7e9ee]">
              <div className="flex flex-col md:flex-row gap-5 md:gap-0">
                {career.map((c, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                    className="md:flex-1 md:pr-8 last:md:pr-0"
                  >
                    <p className="font-inter text-[11px] md:text-[12px] tracking-[0.18em] text-[#0050d0] font-bold mb-1.5">
                      {c.period}
                    </p>
                    <p className="text-[14px] md:text-[16px] font-bold text-[#101318]">{c.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.25 }}
            className="flex flex-col gap-5 order-first md:order-none"
          >
            <div className="w-full aspect-[3/4] max-w-[300px] overflow-hidden rounded-2xl bg-[#e7e9ee]">
              <img src="/images/founder.jpg" alt="福永 遥斗" className="w-full h-full object-cover object-center" />
            </div>
            <div>
              <p className="font-inter text-[11px] md:text-[12px] tracking-[0.18em] uppercase text-[#9aa0aa] mb-1.5">
                Haruto Fukunaga
              </p>
              <p className="text-[20px] md:text-[24px] font-black text-[#101318]">福永 遥斗</p>
              <p className="text-[12px] md:text-[13px] text-[#6d7480] mt-1">株式会社Faise 代表取締役</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
