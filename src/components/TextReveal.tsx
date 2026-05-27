'use client'

import { motion, Variants, useInView } from 'framer-motion'
import { useRef, ReactNode } from 'react'

// Per-character slide-up reveal (Japanese/English)
export function SplitText({
  text,
  className,
  delay = 0,
  stagger = 0.04,
  duration = 0.9,
  inView: controlled,
}: {
  text: string
  className?: string
  delay?: number
  stagger?: number
  duration?: number
  inView?: boolean
}) {
  const ref = useRef(null)
  const auto = useInView(ref, { once: true, margin: '-60px' })
  const visible = controlled !== undefined ? controlled : auto

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  }
  const char: Variants = {
    hidden: { y: '115%' },
    show: { y: 0, transition: { duration, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <motion.span
      ref={ref}
      aria-label={text}
      variants={container}
      initial="hidden"
      animate={visible ? 'show' : 'hidden'}
      className={`inline-flex flex-wrap ${className ?? ''}`}
    >
      {Array.from(text).map((ch, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={char}>
            {ch === ' ' ? ' ' : ch}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}

// Line-level mask reveal — text slides up from behind overflow:hidden
export function LineReveal({
  children,
  className,
  delay = 0,
  duration = 1.1,
  inView: controlled,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  inView?: boolean
}) {
  const ref = useRef(null)
  const auto = useInView(ref, { once: true, margin: '-60px' })
  const visible = controlled !== undefined ? controlled : auto

  return (
    <div ref={ref} className={`overflow-hidden ${className ?? ''}`}>
      <motion.div
        initial={{ y: '105%' }}
        animate={visible ? { y: 0 } : {}}
        transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  )
}

// Blur-to-clear fade for supporting text / body copy
export function BlurReveal({
  children,
  className,
  delay = 0,
  inView: controlled,
}: {
  children: ReactNode
  className?: string
  delay?: number
  inView?: boolean
}) {
  const ref = useRef(null)
  const auto = useInView(ref, { once: true, margin: '-60px' })
  const visible = controlled !== undefined ? controlled : auto

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
      animate={visible ? { opacity: 1, y: 0, filter: 'blur(0px)' } : {}}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  )
}
