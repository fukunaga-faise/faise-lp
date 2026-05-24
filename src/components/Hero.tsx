'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ContactModal from './ContactModal'

const tags = ['動画制作ディレクション', 'Meta / TikTok広告', 'LP・予約導線設計', 'LINE運用']

const stats = [
  { value: '¥1,000', label: 'CPA達成実績' },
  { value: '20×', label: '体験予約増加' },
  { value: '一気通貫', label: '動画〜広告〜導線' },
]

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center overflow-hidden bg-[#0a0a0a]">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.8) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.8) 1px,transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(0,80,208,0.12) 0%, transparent 70%)' }}
        />

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-24 pb-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-[10px] tracking-[0.32em] uppercase text-[#4d9fff] mb-8"
          >
            For Personal Gyms &amp; Beauty Clinics
          </motion.p>

          <div className="overflow-hidden mb-3">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(34px,8vw,84px)] font-black leading-[1.08] tracking-tight text-white"
            >
              エンタメ発想で、
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(34px,8vw,84px)] font-black leading-[1.08] tracking-tight text-gradient"
            >
              行きたくなる理由をつくる。
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-[clamp(13px,1.8vw,17px)] text-white/55 max-w-2xl mx-auto leading-[2] mb-8"
          >
            パーソナルジム・美容クリニックの体験予約を伸ばす、
            <br className="hidden sm:block" />
            動画×広告×導線設計。企画から一気通貫でご支援します。
          </motion.p>

          {/* Service tags */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap justify-center gap-2 mb-10"
          >
            {tags.map((tag, i) => (
              <span key={i} className="font-inter text-[10px] tracking-wide text-white/40 border border-white/15 px-3 py-1 rounded-sm">
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.15 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto text-center bg-[#0050d0] hover:bg-[#003fa8] text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors duration-200"
            >
              無料相談する
            </button>
            <a
              href="#result"
              className="w-full sm:w-auto text-center text-sm font-bold tracking-[0.1em] uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-8 py-4 rounded-sm transition-all duration-200"
            >
              支援実績を見る
            </a>
          </motion.div>
        </div>

        {/* Quick stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="relative z-10 w-full max-w-2xl mx-auto px-6 mb-20"
        >
          <div className="border border-white/10 bg-white/[0.04] rounded-sm flex divide-x divide-white/10">
            {stats.map((s, i) => (
              <div key={i} className="flex-1 text-center py-4 px-3">
                <p className="font-inter text-[clamp(16px,2.5vw,22px)] font-black text-white leading-none mb-1">{s.value}</p>
                <p className="font-inter text-[9px] tracking-widest uppercase text-white/35">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-gradient-to-b from-white/25 to-transparent" />
          <ArrowDown size={12} className="text-white/20" />
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
