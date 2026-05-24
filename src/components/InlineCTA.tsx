'use client'

import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'

interface Props {
  text: string
  subtext?: string
}

export default function InlineCTA({ text, subtext }: Props) {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <section className="bg-[#0050d0] py-12 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-black text-[clamp(18px,2.5vw,26px)] leading-tight">{text}</p>
            {subtext && <p className="text-white/70 text-sm mt-1">{subtext}</p>}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="group shrink-0 inline-flex items-center gap-2 bg-white text-[#0050d0] text-sm font-bold tracking-[0.1em] uppercase px-8 py-4 rounded-sm hover:bg-[#f0f6ff] transition-colors duration-200 whitespace-nowrap"
          >
            集客について相談する
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </div>
      </section>
      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
