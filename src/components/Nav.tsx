'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Solution', href: '#solution' },
  { label: 'Results', href: '#result' },
  { label: 'Founder', href: '#founder' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-xl border-b border-[#e8e8e8]'
            : 'bg-white/95 border-b border-[#e8e8e8]'
        }`}
      >
        <a href="#">
          <img src="/logo.png" alt="Faise" className="h-9 w-auto" />
        </a>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-semibold tracking-[0.12em] uppercase text-[#666] hover:text-[#0f0f0f] transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white bg-[#0050d0] hover:bg-[#003fa8] px-5 py-2.5 rounded-sm transition-colors duration-200"
        >
          無料相談
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block h-px w-6 bg-[#0f0f0f] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#0f0f0f] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#0f0f0f] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black tracking-wide text-[#0f0f0f] hover:text-[#0050d0]"
              >
                {l.label}
              </a>
            ))}
            <button
              onClick={() => { setOpen(false); setModalOpen(true) }}
              className="mt-4 text-sm font-bold uppercase tracking-widest text-white bg-[#0050d0] px-10 py-4 rounded-sm"
            >
              無料相談
            </button>
            <img src="/logo.png" alt="Faise" className="h-12 w-auto mt-6 opacity-60" />
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
