'use client'

import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'

const career = [
  { period: '2021–2023', company: 'ソニー株式会社' },
  { period: '2023–2025', company: '株式会社刀' },
  { period: '2025–', company: '株式会社Faise' },
]

const phrases = [
  '「ここに行ってみたい。」',
  '「この体験をしてみたい。」',
]

const fullMessage = [
  'これまで私は、テーマパークや集客施設のマーケティングに携わってきました。',
  'その中で何度も感じたのは、どれだけ魅力のある施設でも、その魅力が正しく伝わらなければ、人は集まらないということです。',
  '一方で、伝え方やコンセプトを少し見直すだけで、施設の魅力が伝わり、驚くほど人の流れが変わる瞬間も何度も見てきました。',
  '私は、すべての施設には、それぞれの魅力があると信じています。',
  '大切なのは、その魅力を見つけ、誰に、どのように届けるかを設計することです。',
  '人が集まれば、施設はもっと活気づき、街も地域も少しずつ豊かになっていく。',
  '私たちは、一つでも多くの施設が、その魅力にふさわしく選ばれる世界をつくっていきたいと考えています。',
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      <section id="founder" className="bg-[#0a0a0a]/80 border-t border-[#4d7fff]/20 py-32 md:py-52 px-8 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto" ref={ref}>

          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/60 select-none"
            >
              Message
            </motion.p>
          </div>

          <div className="grid md:grid-cols-[1fr_320px] gap-16 md:gap-28 items-start">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.1 }}
            >
              {/* Core quote */}
              <blockquote className="text-[clamp(22px,3.2vw,40px)] font-black leading-[1.7] tracking-tight text-white mb-10">
                良い施設が、<br />
                正しく選ばれる世界へ。
              </blockquote>

              {/* Key phrases — large typography */}
              <div className="space-y-3 mb-10 pl-4 border-l-2 border-[#4d7fff]/60">
                {phrases.map((phrase, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.1 }}
                    className="text-[clamp(16px,2vw,26px)] font-bold text-white/90 leading-[1.6]"
                  >
                    {phrase}
                  </motion.p>
                ))}
              </div>

              {/* Summary — always visible */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-[clamp(14px,1.5vw,19px)] text-white/60 leading-[2] mb-6"
              >
                そう思われる理由をつくること。<br />
                それが、Faiseの仕事です。
              </motion.p>

              {/* Expand button */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.7 }}
                onClick={() => setExpanded(v => !v)}
                className="group flex items-center gap-3 text-[clamp(11px,1vw,13px)] font-semibold tracking-[0.2em] uppercase text-[#4d7fff]/70 hover:text-[#4d7fff] transition-colors duration-300 mb-10"
              >
                <span>{expanded ? '閉じる' : '全文を読む'}</span>
                <motion.span
                  animate={{ rotate: expanded ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-lg leading-none"
                >
                  +
                </motion.span>
              </motion.button>

              {/* Full message — expandable */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="space-y-5 text-[clamp(14px,1.5vw,19px)] text-white/60 leading-[2] mb-12 border-t border-[#4d7fff]/20 pt-8">
                      {fullMessage.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Career timeline — desktop only */}
              <div className="relative pt-8 hidden md:block">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#4d7fff]/30" />
                <div className="flex flex-row gap-0">
                  {career.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                      className="flex-1 pr-8 last:pr-0 relative"
                    >
                      <div className="absolute -top-[calc(2rem+1px)] left-0 w-px h-4 bg-[#4d7fff]" />
                      <p className="font-inter text-[clamp(11px,1vw,13px)] tracking-[0.3em] text-[#4d7fff]/80 mb-2">{c.period}</p>
                      <p className="text-[clamp(15px,1.4vw,20px)] font-bold text-white">{c.company}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.25 }}
              className="flex flex-col gap-5"
            >
              <div className="w-full aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                <img src="/images/founder.jpg" alt="福永 遥斗" className="w-full h-full object-cover object-center" />
              </div>
              <div>
                <p className="font-inter text-[clamp(11px,1vw,13px)] tracking-[0.25em] uppercase text-[#4d7fff]/70 mb-2">Haruto Fukunaga</p>
                <p className="text-[clamp(22px,2.5vw,32px)] font-black text-white">福永 遥斗</p>
                <p className="text-[clamp(13px,1.2vw,16px)] text-white/90 mt-1">株式会社Faise 代表取締役</p>
              </div>

              {/* Career timeline — mobile only */}
              <div className="relative pt-6 md:hidden">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#4d7fff]/30" />
                <div className="flex flex-col gap-5">
                  {career.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                      className="relative pl-4"
                    >
                      <div className="absolute left-0 top-0 w-px h-full bg-[#4d7fff]/40" />
                      <p className="font-inter text-[10px] tracking-[0.3em] text-[#4d7fff]/60 mb-1">{c.period}</p>
                      <p className="text-[14px] font-bold text-white/80">{c.company}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </>
  )
}
