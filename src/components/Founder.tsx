'use client'

import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import ContactModal from './ContactModal'

const career = [
  { period: '2022–2024', company: 'ソニー株式会社', role: '法人店舗コンサルティング' },
  { period: '2024–2025', company: '株式会社刀', role: '新規テーマパーク マーケティング' },
  { period: '2025–', company: '株式会社Faise', role: '代表取締役 就任' },
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

              <div className="space-y-5 text-[clamp(15px,1.6vw,22px)] text-white/70 leading-[2.2] max-w-xl mb-12">
                <p>
                  ただ広告を出すのではなく、"行きたくなる理由"をつくりたい。
                  ソニーの店頭で「人が止まる瞬間」を研究し、テーマパークで「また来たい感情」を設計した経験が、その確信を深めました。
                </p>
                <p>
                  集客施設の魅力を、もっと世の中に伝えていきたい。
                  FAISEはその思いから生まれました。
                </p>
              </div>

              {/* Career timeline */}
              <div className="relative pt-8">
                <div className="absolute top-0 left-0 right-0 h-px bg-[#4d7fff]/30" />
                <div className="flex flex-col md:flex-row gap-8 md:gap-0">
                  {career.map((c, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 12 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.7, delay: 0.4 + i * 0.12 }}
                      className="flex-1 md:pr-8 last:pr-0 relative"
                    >
                      <div className="absolute -top-[calc(2rem+1px)] left-0 w-px h-4 bg-[#4d7fff]" />
                      <p className="font-inter text-[10px] tracking-[0.3em] text-[#4d7fff]/60 mb-2">{c.period}</p>
                      <p className="text-[14px] font-bold text-white/80 mb-0.5">{c.company}</p>
                      <p className="text-[12px] text-white/80">{c.role}</p>
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
                <p className="font-inter text-[10px] tracking-[0.25em] uppercase text-[#4d7fff]/50 mb-1">Haruto Fukunaga</p>
                <p className="text-[18px] font-black text-white">福永 遥斗</p>
                <p className="text-[12px] text-white/80 mt-1">株式会社Faise 代表取締役</p>
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
