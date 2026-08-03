'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal'

const links = [
  { label: 'Approach', href: '#mission' },
  { label: 'Services', href: '#services' },
  // { label: 'Works', href: '#works' }, // Worksセクション非表示中。復活させる場合はこの行を戻す
  { label: 'Message', href: '#founder' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 h-20 transition-all duration-500 ${
          scrolled ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img
            src="/logo-fmark.png"
            alt="Faise"
            className="h-8 w-auto"
          />
          <span className={`font-inter font-black tracking-[0.12em] text-[15px] uppercase transition-colors duration-300 ${scrolled ? 'text-white' : 'text-[#0B0B12]'}`}>Faise</span>
        </a>

        <ul className="hidden md:flex items-center gap-12">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-[19px] font-bold tracking-[0.04em] uppercase transition-colors duration-300 ${scrolled ? 'text-white/80 hover:text-white' : 'text-[#0B0B12]/80 hover:text-[#0B0B12]'}`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className={`hidden md:inline-flex items-center text-[14px] font-bold tracking-[0.12em] uppercase px-9 py-3.5 border transition-all duration-300 ${
            scrolled
              ? 'text-white border-white/50 hover:border-white hover:bg-white hover:text-[#0a0a0a]'
              : 'text-[#0B0B12] border-[#0B0B12]/40 hover:border-[#0B0B12] hover:bg-[#0B0B12] hover:text-white'
          }`}
        >
          問い合わせ
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-[#0B0B12]'} ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-[#0B0B12]'} ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${scrolled || open ? 'bg-white' : 'bg-[#0B0B12]'} ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a] flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[28px] font-black tracking-tight text-white/70 hover:text-white transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setOpen(false); setModalOpen(true) }}
              className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white border border-white/30 px-10 py-4 hover:bg-white hover:text-[#0a0a0a] transition-all duration-300"
            >
              集客について相談する
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
