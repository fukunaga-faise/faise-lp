'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import ContactModal from './ContactModal'
import { useLanguage } from '@/lib/language'

const links = [
  { label: 'About', href: '#mission' },
  { label: 'Service', href: '#service' },
  { label: 'Works', href: '#works' },
  { label: 'Message', href: '#founder' },
  { label: 'News', href: '#news' },
  { label: 'Company', href: '#company' },
]

const t = {
  contact: { ja: 'Contact', en: 'Contact' },
  mobileCta: { ja: '集客について相談する', en: 'Talk to us' },
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // faise-inc.com/#contact-form で問い合わせフォームを直接開く（PR TIMES等の外部リンク用）
  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === '#contact-form') setModalOpen(true)
    }
    openFromHash()
    window.addEventListener('hashchange', openFromHash)
    return () => window.removeEventListener('hashchange', openFromHash)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 lg:px-14 h-16 md:h-[76px] transition-all duration-500 ${
          scrolled || open ? 'bg-white/90 backdrop-blur-md border-b border-[#ecebe7]' : 'bg-gradient-to-b from-white/90 via-white/45 to-transparent'
        }`}
      >
        <a href="#" className="flex items-center gap-2.5" aria-label="Faise">
          <img src="/logo-mark.png" alt="" className="h-7 md:h-8 w-auto" />
          <span className="font-inter font-semibold tracking-[0.14em] text-[18px] md:text-[20px] text-[#111]">Faise</span>
        </a>

        <ul className="hidden xl:flex items-center gap-9 2xl:gap-12">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="relative font-inter text-[14px] 2xl:text-[15px] font-medium tracking-[0.18em] uppercase text-[#111]/75 hover:text-brand transition-colors duration-300 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-brand after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden xl:flex items-center gap-6">
          <button
            onClick={toggleLang}
            aria-label="Switch language"
            className="font-inter text-[13px] font-medium tracking-[0.2em] uppercase text-[#111]/60 hover:text-brand transition-colors duration-300"
          >
            {lang === 'ja' ? 'EN' : 'JA'}
          </button>

          <button
            onClick={() => setModalOpen(true)}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-brand-sky via-brand to-brand-navy bg-[length:140%_100%] bg-left text-white font-inter text-[12px] 2xl:text-[13px] font-medium tracking-[0.22em] uppercase pl-7 pr-6 py-3.5 transition-all duration-500 hover:bg-right hover:shadow-[0_10px_28px_-10px_rgba(37,99,214,0.7)]"
          >
            <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/4 bg-white/30 opacity-0 group-hover:opacity-100 group-hover:[animation:faiseShine_.9s_ease]" />
            {t.contact[lang]}
            <ArrowRight size={15} strokeWidth={1.25} className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="xl:hidden flex flex-col gap-1.5 p-2 -mr-2"
          aria-label="menu"
          aria-expanded={open}
        >
          <span className={`block h-px w-6 bg-[#111] transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-px w-6 bg-[#111] transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-px w-6 bg-[#111] transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white flex flex-col items-center justify-center gap-7 xl:hidden"
          >
            {links.map((l, i) => (
              <motion.a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="font-inter text-[22px] font-medium tracking-[0.18em] uppercase text-[#111]/80 hover:text-brand transition-colors"
              >
                {l.label}
              </motion.a>
            ))}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              onClick={() => { setOpen(false); setModalOpen(true) }}
              className="mt-4 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-brand-sky via-brand to-brand-navy text-white font-inter text-[12px] font-medium tracking-[0.2em] uppercase px-9 py-4"
            >
              {t.mobileCta[lang]}
              <ArrowRight size={15} strokeWidth={1.25} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.42 }}
              onClick={toggleLang}
              className="font-inter text-[12px] font-medium uppercase tracking-[0.2em] text-[#111]/50 hover:text-[#111] transition-colors duration-300"
            >
              {lang === 'ja' ? 'English' : '日本語'}
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}
