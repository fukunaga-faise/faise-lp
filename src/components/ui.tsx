'use client'

import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

// Shared building blocks for the light, editorial layout.

export const container = 'mx-auto w-full max-w-[1360px] px-6 md:px-10 lg:px-14'

// Small uppercase English section label
export function Label({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <p className={`font-inter text-[11px] md:text-[12px] font-medium tracking-[0.28em] uppercase text-[#111] ${className}`}>
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
      className={`group inline-flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.22em] uppercase text-[#111] ${className}`}
    >
      <span>{children}</span>
      <ArrowRight size={15} strokeWidth={1.25} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}
