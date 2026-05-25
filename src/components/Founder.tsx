'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from './ContactModal'

const career = [
  { period: '2022–2024', company: 'ソニー株式会社' },
  { period: '2024–2025', company: '株式会社刀' },
  { period: '2025–', company: '株式会社Faise' },
]

export default function Founder() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="founder" className="bg-[#0a0a0a] border-t border-[#4d7fff]/20 py-32 md:py-52 px-8 md:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto" ref={ref}>

          <div className="overflow-hidden mb-2">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/30 select-none"
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
              <blockquote className="text-[clamp(22px,3.2vw,40px)] font-black leading-[1.7] tracking-tight text-white mb-10">
                人を動かすのは、<br />
                感情だと思っています。
              </blockquote>

              <div className="space-y-6 text-[clamp(15px,1.6vw,22px)] text-white/70 leading-[2.2] max-w-xl mb-12">
                <p>
                  どれだけ情報が溢れる時代でも、<br />
                  人が本当に行動を起こす瞬間には、<br />
                  必ず"心が動く理由"があります。
                </p>
                <p className="text-white/90 font-medium">
                  「この場所に行ってみたい」<br />
                  「この人に会ってみたい」<br />
                  「この体験をしてみたい」
                </p>
                <p>
                  その感情が、<br />
                  予約や来店につながっていく。
                </p>
                <p>
                  FAISEでは、<br />
                  単に広告を出すことを目的にはしていません。
                </p>
                <p>
                  大切にしているのは、<br />
                  施設やブランドが持つ魅力を、<br />
                  "行きたくなる理由"として<br />
                  世の中に届けることです。
                </p>
                <p>
                  映像、世界観、言葉、導線設計。
                </p>
                <p>
                  さまざまな要素を通して、<br />
                  人の感情を動かし、<br />
                  行動につながる体験を設計していく。
                </p>
                <p>
                  それが、<br />
                  FAISEの考えるプロモーションです。
                </p>
                <p className="text-white/90 font-medium">
                  エンターテインメントの力で、<br />
                  集客施設の価値を、<br />
                  もっと世の中に広げていきたい。
                </p>
                <p>
                  FAISEは、<br />
                  そんな想いから生まれました。
                </p>
              </div>

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
                      <p className="font-inter text-[10px] tracking-[0.3em] text-[#4d7fff]/60 mb-2">{c.period}</p>
                      <p className="text-[14px] font-bold text-white/80">{c.company}</p>
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
                {/* Replace with: <img src="/founder.jpg" alt="福永 遥斗" className="w-full h-full object-cover" /> */}
              </div>
              <div>
                <p className="font-inter text-[clamp(11px,1vw,13px)] tracking-[0.25em] uppercase text-[#4d7fff]/70 mb-2">Haruto Fukunaga</p>
                <p className="text-[clamp(22px,2.5vw,32px)] font-black text-white">福永 遥斗</p>
                <p className="text-[clamp(13px,1.2vw,16px)] text-white/70 mt-1">株式会社Faise 代表取締役</p>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="mt-24 md:mt-36 pt-12 border-t border-[#4d7fff]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
          >
            <div>
              <p className="text-[clamp(18px,2.5vw,28px)] font-black text-white leading-snug mb-2">
                まずは、お話を聞かせてください。
              </p>
              <p className="text-[13px] text-white/80">無料相談受付中。2営業日以内にご連絡します。</p>
            </div>
            <button
              onClick={() => setModalOpen(true)}
              className="shrink-0 text-[11px] font-bold tracking-[0.2em] uppercase text-white border border-[#4d7fff]/50 hover:border-[#4d7fff] hover:bg-[#4d7fff] px-10 py-4 transition-all duration-300"
            >
              集客について相談する
            </button>
          </motion.div>
        </div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
