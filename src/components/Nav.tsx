'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal'

const links = [
  { label: 'Mission', href: '#mission' },
  { label: 'Services', href: '#services' },
  { label: 'Works', href: '#works' },
  { label: 'Founder', href: '#founder' },
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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-20 h-16 transition-all duration-500 ${
          scrolled ? 'bg-white/97 backdrop-blur-xl border-b border-[#eaeaea]' : 'bg-transparent'
        }`}
      >
        <a href="#">
          <img
            src="/logo.png"
            alt="Faise"
            className={`h-8 w-auto transition-all duration-500 ${scrolled ? '' : 'brightness-0 invert'}`}
          />
        </a>

        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`text-[11px] font-semibold tracking-[0.15em] uppercase transition-colors duration-300 ${
                  scrolled ? 'text-[#888] hover:text-[#0f0f0f]' : 'text-white/50 hover:text-white'
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setModalOpen(true)}
          className={`hidden md:inline-flex items-center text-[11px] font-bold tracking-[0.18em] uppercase px-6 py-2.5 transition-all duration-300 ${
            scrolled
              ? 'bg-[#0f0f0f] text-white hover:bg-[#0050d0]'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
          }`}
        >
          相談する
        </button>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block h-px w-6 transition-all duration-300 ${open ? 'bg-[#0f0f0f] rotate-45 translate-y-2' : scrolled ? 'bg-[#0f0f0f]' : 'bg-white'}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${open ? 'opacity-0' : scrolled ? 'bg-[#0f0f0f]' : 'bg-white'}`} />
          <span className={`block h-px w-6 transition-all duration-300 ${open ? 'bg-[#0f0f0f] -rotate-45 -translate-y-2' : scrolled ? 'bg-[#0f0f0f]' : 'bg-white'}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="text-[28px] font-black tracking-tight text-[#0f0f0f] hover:text-[#0050d0] transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setOpen(false); setModalOpen(true) }}
              className="mt-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white bg-[#0f0f0f] px-10 py-4"
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
