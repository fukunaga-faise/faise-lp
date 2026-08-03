'use client'

import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { LineReveal, BlurReveal } from './TextReveal'

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="relative bg-[#0a0a0a]/80 py-32 md:py-52 px-8 md:px-20 overflow-hidden">

      <div className="absolute top-1/2 right-[-6vw] -translate-y-1/2 pointer-events-none select-none">
        <span className="font-black text-[clamp(320px,40vw,560px)] leading-none text-white/[0.03]">F</span>
      </div>

      <div className="relative max-w-7xl mx-auto" ref={ref}>

        {/* Large decorative label */}
        <LineReveal className="mb-2" delay={0} inView={inView}>
          <p className="font-inter text-[clamp(48px,10vw,120px)] font-black leading-none tracking-[-0.03em] text-[#4d7fff]/50 select-none">
            What We Do
          </p>
        </LineReveal>

        <div className="max-w-3xl space-y-10">

          {/* Main heading — line reveal */}
          <LineReveal delay={0.1} inView={inView}>
            <h2 className="text-[clamp(28px,4.5vw,58px)] font-black leading-[1.2] tracking-[-0.02em] text-white break-keep">
              事業成長に<wbr />必要なものを、<br />
              一つの戦略として。
            </h2>
          </LineReveal>

          {/* Accent quote — blur reveal */}
          <BlurReveal delay={0.35} inView={inView}>
            <div className="flex items-start gap-4">
              <div className="w-0.5 h-auto self-stretch bg-[#4d7fff]/80 shrink-0 mt-1" />
              <p className="text-[clamp(20px,2.8vw,40px)] text-white/90 leading-[1.9] font-medium">
                Faiseは、広告会社でも、<br />
                SNS運用会社でもありません。
              </p>
            </div>
          </BlurReveal>

          {/* Body — line by line blur reveals */}
          <BlurReveal delay={0.55} inView={inView}>
            <div className="space-y-6">
              <p className="text-[clamp(16px,1.8vw,28px)] text-white/90 leading-[2.4] pl-5">
                事業のコンセプト設計から、<br />
                マーケティングの実行、継続的な改善まで。
              </p>
              <p className="text-[clamp(16px,1.8vw,28px)] text-white/90 leading-[2.4] pl-5">
                事業成長に必要なプロセスを、<br />
                一つの戦略として設計します。
              </p>
            </div>
          </BlurReveal>

        </div>
      </div>
    </section>
  )
}
