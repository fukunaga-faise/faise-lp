'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import { useLanguage } from '@/lib/language'
import { clients } from '@/lib/clients'
import { container } from './ui'

// ヒーロー直下の取引先ロゴ帯（データは src/lib/clients.ts。CLIENTS セクションと共通）。
// ・全社が横幅に収まるあいだは、流さずに静止表示（すべてのロゴがずっと見える）
// ・収まらなくなったら、ゆっくり流す。帯が画面に入ってから動き出すので、先頭のロゴから見られる
const SPEED = 20 // px / 秒（ゆっくり）

const t = {
  label: { ja: '取引先', en: 'Clients' },
}

export default function ClientStrip() {
  const { lang } = useLanguage()
  const sectionRef = useRef<HTMLElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLUListElement>(null)
  const inView = useInView(sectionRef, { once: true, amount: 0.6 })
  const [mode, setMode] = useState<'static' | 'marquee'>('static')
  const [duration, setDuration] = useState(60)
  const measureRef = useRef<() => void>(() => {})

  useEffect(() => {
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!wrap || !track) return
    const measure = () => {
      // 先頭の1セット分の幅（li は同じ並びを繰り返している）
      const items = Array.from(track.children) as HTMLElement[]
      const set = items.slice(0, clients.length)
      const setWidth = set.reduce((sum, el) => sum + el.offsetWidth, 0)
      if (setWidth <= wrap.clientWidth) {
        setMode('static')
      } else {
        setMode('marquee')
        // 2セット分（=-50%移動）を一定の速さで流す
        setDuration(Math.max((setWidth * 2) / SPEED, 30))
      }
    }
    measureRef.current = measure
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(wrap)
    return () => ro.disconnect()
  }, [])

  const copies = mode === 'marquee' ? 4 : 1
  const list = Array.from({ length: copies }, () => clients).flat()

  return (
    <section ref={sectionRef} aria-label={t.label[lang]} className="bg-white">
      <div className={`${container} flex items-center gap-5 py-5 md:gap-10 md:py-6`}>
        <p className="shrink-0 font-inter text-[10.5px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-brand">
          {t.label[lang]}
        </p>
        <div
          ref={wrapRef}
          className="relative min-w-0 flex-1 overflow-hidden"
          style={
            mode === 'marquee'
              ? { WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)' }
              : undefined
          }
        >
          <ul
            ref={trackRef}
            className={mode === 'marquee' ? 'faise-anim flex w-max items-center will-change-transform hover:[animation-play-state:paused]' : 'flex w-full items-center justify-between'}
            style={mode === 'marquee' ? { animation: `faiseMarqueeL ${duration}s linear infinite`, animationPlayState: inView ? 'running' : 'paused' } : undefined}
          >
            {list.map((c, i) => (
              <li
                key={`${i}-${c.name}`}
                aria-hidden={i >= clients.length ? true : undefined}
                className="flex h-12 shrink-0 items-center px-5 md:px-8"
              >
                <img
                  src={c.logo}
                  alt={i < clients.length ? (lang === 'ja' ? c.name : c.nameEn) : ''}
                  loading="eager"
                  decoding="async"
                  draggable={false}
                  onLoad={() => measureRef.current()}
                  className={`${c.stripClass ?? 'h-7 md:h-8'} w-auto max-w-[150px] object-contain`}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
