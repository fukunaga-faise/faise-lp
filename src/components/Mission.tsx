'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const principles = [
  { en: 'Feel', ja: '感情を設計する' },
  { en: 'Move', ja: '人を動かす' },
  { en: 'Experience', ja: '体験の入口をつくる' },
]

export default function Mission() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="mission" className="bg-white py-32 md:py-52 px-8 md:px-20">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="font-inter text-[10px] tracking-[0.4em] uppercase text-[#aaa] mb-16 md:mb-20"
        >
          Mission
        </motion.p>

        <div className="max-w-4xl">
          <div className="overflow-hidden mb-8">
            <motion.h2
              initial={{ y: 70, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(30px,5vw,62px)] font-black leading-[1.2] tracking-[-0.02em] text-[#0f0f0f]"
            >
              人は、論理だけでは動かない。
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="space-y-5 max-w-2xl"
          >
            <p className="text-[clamp(16px,2.2vw,22px)] text-[#333] leading-[1.9] font-medium">
              行きたくなる理由には、感情がある。
            </p>
            <p className="text-[clamp(13px,1.5vw,16px)] text-[#888] leading-[2.2]">
              FAISEは、エンタメ業界で培った「感情を動かす設計」を、集客施設のマーケティングに応用する会社です。
              広告を回す前に、"行きたくなる理由"そのものをつくる。
              それが私たちのアプローチです。
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mt-24 md:mt-36 pt-12 border-t border-[#eaeaea] grid md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#eaeaea]"
        >
          {principles.map((p, i) => (
            <div key={i} className="md:px-12 first:md:pl-0 last:md:pr-0">
              <p className="font-inter text-[10px] tracking-[0.35em] uppercase text-[#bbb] mb-4">{p.en}</p>
              <p className="text-[19px] font-black text-[#0f0f0f] tracking-tight">{p.ja}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
