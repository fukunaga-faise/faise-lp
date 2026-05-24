'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'

const stats = [
  { value: '¥1,000', label: 'CPA（体験予約1件あたり）', sub: 'Cost Per Acquisition' },
  { value: '20×', label: '体験予約数（広告運用開始初月）', sub: 'Trial Booking Increase' },
  { value: '一気通貫', label: '動画制作〜広告運用まで', sub: 'End-to-End Support' },
]

function CountUp({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const count = useMotionValue(0)
  const display = useTransform(count, (v) => `${prefix}${Math.round(v).toLocaleString()}${suffix}`)

  useEffect(() => {
    if (!inView) return
    const stop = animate(count, target, { duration: 2, ease: [0.16, 1, 0.3, 1] })
    return stop.stop
  }, [inView, count, target])

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function CaseStudy() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section id="result" className="bg-[#f5f5f5] py-16 md:py-32 px-6 border-t border-[#eaeaea]">
        <div className="max-w-5xl mx-auto" ref={ref}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-[#0050d0] mb-6"
          >
            Case Study
          </motion.p>

          <div className="overflow-hidden mb-10">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(26px,4.5vw,52px)] font-black leading-[1.1] tracking-tight text-[#0f0f0f]"
            >
              パーソナルジム支援実績
            </motion.h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-8">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className="bg-white border border-[#e8e8e8] rounded-sm p-6 shadow-[0_1px_4px_rgba(0,0,0,0.06)]"
              >
                <p className="font-inter text-[clamp(28px,5vw,44px)] font-black text-gradient leading-none mb-3">
                  {s.value}
                </p>
                <p className="text-[13px] font-bold text-[#0f0f0f] mb-1">{s.label}</p>
                <p className="font-inter text-[10px] tracking-widest uppercase text-[#bbb]">{s.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-white border border-[#e8e8e8] rounded-sm p-7 md:p-10 shadow-[0_1px_4px_rgba(0,0,0,0.06)] mb-6"
          >
            <p className="font-inter text-[10px] tracking-[0.2em] uppercase text-[#0050d0] mb-4">支援内容</p>
            <p className="text-[clamp(14px,1.8vw,17px)] text-[#333] leading-[2] mb-6">
              動画制作のディレクションから広告運用まで一気通貫で支援。
              ターゲットに刺さるクリエイティブと広告戦略を継続的に最適化した結果、
              <strong className="text-[#0050d0]">CPA1,000円を実現</strong>。
              広告運用開始初月で体験予約数は<strong className="text-[#0050d0]">従来比20倍</strong>に増加しました。
            </p>
            <div className="flex flex-wrap gap-2">
              {['動画制作ディレクション', 'Meta広告運用', 'TikTok広告', '広告クリエイティブ制作', '体験予約導線設計'].map((tag) => (
                <span key={tag} className="text-[11px] text-[#0050d0] border border-[#bfdbfe] bg-[#eff6ff] px-2.5 py-1 rounded-sm font-medium">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-[11px] text-[#aaa] leading-relaxed mb-8"
          >
            ※本実績は特定の案件における一例です。支援成果は施設の状況・競合環境・予算等の条件により異なり、同様の効果を保証するものではありません。
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            onClick={() => setModalOpen(true)}
            className="group inline-flex items-center gap-3 bg-[#0050d0] hover:bg-[#003fa8] text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors duration-200"
          >
            体験予約を増やす施策を相談する
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </motion.button>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
