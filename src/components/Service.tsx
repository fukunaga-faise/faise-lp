'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Megaphone, Camera, Layout, Navigation, Sparkles, Lightbulb } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    en: 'Advertising',
    title: '広告運用',
    desc: '戦略設計から入稿・改善まで。"人が止まる訴求"にこだわります。',
    tags: ['Meta広告', 'Google広告', 'TikTok広告'],
  },
  {
    icon: Camera,
    en: 'SNS',
    title: 'SNS企画',
    desc: 'バズるではなく、予約・来店に繋がるコンテンツを設計します。',
    tags: ['Instagram', 'TikTok', 'ショート動画'],
  },
  {
    icon: Layout,
    en: 'Creative',
    title: 'クリエイティブ制作',
    desc: '広告・LP・SNS素材を「見たくなる」レベルで制作します。',
    tags: ['動画', 'バナー', 'LP素材'],
  },
  {
    icon: Navigation,
    en: 'Funnel',
    title: '導線改善',
    desc: 'LPからLINE、予約フォームまで。成約率を上げます。',
    tags: ['LP', 'LINE', '予約導線'],
  },
  {
    icon: Sparkles,
    en: 'Experience',
    title: '体験設計',
    desc: '来店前後のコミュニケーション設計で成約率・リピートを高めます。',
    tags: ['来店体験', '成約導線', 'ファン化'],
  },
  {
    icon: Lightbulb,
    en: 'Planning',
    title: '企画開発',
    desc: '「一度見たら忘れられない企画」でブランドを差別化します。',
    tags: ['体験企画', 'IP化', 'キャンペーン'],
  },
]

export default function Service() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <section id="service" className="section-divider bg-[#050505] py-16 md:py-36 px-0 md:px-6">
      <div className="max-w-5xl mx-auto" ref={ref}>

        <div className="px-6 md:px-0 mb-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="font-inter text-[11px] tracking-[0.28em] uppercase text-blue-500 mb-6"
          >
            Services
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(30px,5vw,60px)] font-black leading-[1.1] tracking-tight"
            >
              支援領域
            </motion.h2>
          </div>
        </div>

        {/* Swipe hint - mobile only */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="md:hidden flex items-center justify-end gap-1.5 px-6 mb-4"
        >
          <span className="text-[11px] text-white/25 tracking-widest">Swipe</span>
          <span className="text-white/25 text-sm">→</span>
        </motion.div>

        {/* Carousel on mobile / grid on desktop */}
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
          {services.map((s, i) => (
            <div
              key={i}
              className="
                snap-start shrink-0 w-[76vw] sm:w-72
                md:w-auto md:shrink
                group border border-white/[0.07] bg-white/[0.02] hover:bg-blue-950/25
                hover:border-blue-500/25 p-6 rounded-sm
                transition-all duration-400
              "
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-9 h-9 rounded-sm bg-blue-600/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <s.icon size={16} className="text-blue-400" />
                </div>
                <span className="font-inter text-[10px] tracking-[0.14em] uppercase text-white/20 group-hover:text-blue-400/60 transition-colors">
                  {s.en}
                </span>
              </div>
              <h3 className="text-[17px] font-black text-white mb-2">{s.title}</h3>
              <p className="text-[13px] text-white/50 leading-[1.8] mb-4">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {s.tags.map((t) => (
                  <span key={t} className="text-[11px] text-white/35 border border-white/[0.07] px-2 py-0.5 rounded-sm">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Dot indicator - mobile only */}
        <div className="md:hidden flex justify-center gap-1.5 mt-5">
          {services.map((_, i) => (
            <div key={i} className={`h-px w-5 rounded-full ${i === 0 ? 'bg-blue-500' : 'bg-white/15'}`} />
          ))}
        </div>
      </div>
    </section>
  )
}
