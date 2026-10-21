'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Shared building blocks for the light, editorial layout (brand blue accents).

export const container = 'mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-14'

// Small uppercase English section label with a short brand-blue rule
export function Label({
  children,
  className = '',
  tone = 'default',
}: {
  children: ReactNode
  className?: string
  tone?: 'default' | 'light'
}) {
  const light = tone === 'light'
  return (
    <p className={`flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase ${light ? 'text-white' : 'text-brand'} ${className}`}>
      <span className={`block h-px w-7 ${light ? 'bg-white/70' : 'bg-gradient-to-r from-brand-sky to-brand'}`} />
      {children}
    </p>
  )
}

// Restrained fade/slide-in once the element scrolls into view
export function Reveal({
  children,
  delay = 0,
  y = 18,
  className = '',
}: {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

// Text link with a thin arrow (in-page anchors only — no dead URLs)
export function ArrowLink({
  href,
  children,
  className = '',
}: {
  href: string
  children: ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-[#111] transition-colors duration-300 hover:text-brand ${className}`}
    >
      <span className="relative">
        {children}
        <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-500 group-hover:scale-x-100" />
      </span>
      <ArrowRight size={15} strokeWidth={1.25} className="text-brand transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

// Number that counts up from 0 when it scrolls into view
export function CountUp({
  to,
  prefix = '',
  suffix = '',
  comma = false,
  duration = 1.6,
  className = '',
}: {
  to: number
  prefix?: string
  suffix?: string
  comma?: boolean
  duration?: number
  className?: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const reduce = useReducedMotion()
  const [val, setVal] = useState(reduce ? to : 0)

  useEffect(() => {
    if (reduce) {
      setVal(to)
      return
    }
    if (!inView) return
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, reduce, to, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {comma ? val.toLocaleString() : val}
      {suffix}
    </span>
  )
}

// Thin brand-blue reading progress bar at the very top of the page
export function ScrollProgress() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })
  if (reduce) return null
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="pointer-events-none fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand-sky via-brand to-brand-navy"
    />
  )
}
