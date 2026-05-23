'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Problem', href: '#problem' },
  { label: 'Results', href: '#result' },
  { label: 'Services', href: '#service' },
  { label: 'Founder', href: '#founder' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

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
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-16 transition-all duration-500 ${
          scrolled
            ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.06]'
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="font-inter font-black text-lg tracking-[0.1em] text-white">
          F<span className="text-blue-500">.</span>AISE
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-xs font-semibold tracking-[0.14em] uppercase text-white/50 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="mailto:info@faise.jp"
          className="hidden md:inline-flex items-center gap-2 text-xs font-bold tracking-[0.1em] uppercase text-white border border-blue-500/50 hover:border-blue-500 hover:bg-blue-600 px-5 py-2.5 rounded-sm transition-all duration-300"
        >
          無料相談
        </a>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
          >
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-2xl font-black tracking-wide text-white/80 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="mailto:info@faise.jp"
              className="mt-4 text-sm font-bold uppercase tracking-widest text-white bg-blue-600 px-10 py-4 rounded-sm"
            >
              無料相談
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
