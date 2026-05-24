'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import ContactModal from './ContactModal'

const floatingWords = [
  { text: '認知', x: '8%',  y: '18%', delay: 0.2, size: 'text-xs' },
  { text: '体験設計', x: '82%', y: '14%', delay: 0.5, size: 'text-xs' },
  { text: 'SNS', x: '15%', y: '72%', delay: 0.8, size: 'text-xs' },
  { text: '予約', x: '78%', y: '68%', delay: 0.3, size: 'text-xs' },
  { text: '集客', x: '5%',  y: '44%', delay: 1.0, size: 'text-xs' },
  { text: 'ファン化', x: '88%', y: '42%', delay: 0.6, size: 'text-xs' },
  { text: '広告', x: '25%', y: '85%', delay: 0.9, size: 'text-xs' },
  { text: '成約', x: '68%', y: '82%', delay: 0.4, size: 'text-xs' },
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

        {/* Floating keyword labels */}
        {floatingWords.map((w, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: [8, 0, 8] }}
            transition={{ duration: 4 + i * 0.5, delay: w.delay, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute font-inter font-bold tracking-widest uppercase text-white/15 pointer-events-none hidden md:block ${w.size}`}
            style={{ left: w.x, top: w.y }}
          >
            {w.text}
          </motion.span>
        ))}

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto pt-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-inter text-[10px] tracking-[0.32em] uppercase text-[#4d9fff] mb-8"
          >
            Experience Design Marketing
          </motion.p>

          <div className="overflow-hidden mb-2">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,10vw,100px)] font-black leading-[1.05] tracking-tight text-white"
            >
              人が動く理由を
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(40px,10vw,100px)] font-black leading-[1.05] tracking-tight text-gradient"
            >
              設計する。
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="text-[clamp(13px,1.8vw,17px)] text-white/50 max-w-xl mx-auto leading-[2] mb-12"
          >
            広告運用ではなく、SNS・体験・導線・企画を横断し、
            &ldquo;行きたくなる理由&rdquo;から店舗の成長をつくるマーケティングチーム。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="w-full sm:w-auto text-center bg-[#0050d0] hover:bg-[#003fa8] text-white text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm transition-colors duration-200"
            >
              無料相談する
            </button>
            <a
              href="#problem"
              className="w-full sm:w-auto text-center text-sm font-bold tracking-[0.1em] uppercase text-white/50 hover:text-white border border-white/20 hover:border-white/50 px-8 py-4 rounded-sm transition-all duration-200"
            >
              サービスを見る
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
          <ArrowDown size={12} className="text-white/25" />
        </motion.div>
      </section>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
