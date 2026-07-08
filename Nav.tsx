'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactModal from './ContactModal'

const links = [
  { label: 'アプローチ', href: '#mission' },
  { label: 'サービス', href: '#services' },
  { label: '実績', href: '#works' },
  { label: 'メッセージ', href: '#founder' },
  { label: '会社概要', href: '#company' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 md:px-14 h-16 md:h-20 transition-all duration-500 ${
          scrolled
            ? 'bg-white/85 backdrop-blur-xl border-b hairline border-[#e7e9ee]'
            : 'bg-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2">
          <img src="/logo-fmark.png" alt="Faise" className="h-7 md:h-8 w-auto" />
        </a>

        <div className="hidden md:flex items-center gap-9">
          <ul className="flex items-center gap-8">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-[13px] font-medium tracking-[0.02em] text-[#101318]/80 hover:text-[#0050d0] transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2.5 text-[13px] font-bold text-white grad-bg rounded-full px-7 py-3 hover:opacity-90 hover:shadow-[0_8px_24px_rgba(0,80,208,0.35)] transition-all duration-300"
          >
            お問い合わせ
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-1"
          aria-label="menu"
        >
          <span className={`block h-px w-6 bg-[#101318] transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block h-px w-6 bg-[#101318] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#101318] transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-start justify-center gap-8 px-10 md:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="flex items-center gap-3 text-[26px] font-black tracking-tight text-[#101318]"
              >
                <span className="w-2 h-2 rounded-full bg-[#0050d0]" />
                {l.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setOpen(false); setModalOpen(true) }}
              className="mt-4 inline-flex items-center gap-2.5 text-[14px] font-bold text-white grad-bg rounded-full px-9 py-4"
            >
              お問い合わせ
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
