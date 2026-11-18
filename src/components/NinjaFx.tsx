'use client'

import { Children, useEffect, useRef, useState, type ReactNode } from 'react'

// LAUNCH NINJA（英語LP）の動き用の小さなクライアント部品。アニメーションライブラリは使わない。

// スクロールで要素を表示する。読み込み時に画面より下にある [data-fx] だけを隠し（.fx-wait）、
// 見えたら .is-in を付ける。最初から見えている要素は隠さないので、ちらつかない。
// prefers-reduced-motion のときは何もしない（CSS 側でも無効）。
export function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-fx]'))
    const vh = window.innerHeight
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
    )
    for (const el of els) {
      if (el.getBoundingClientRect().top < vh * 0.92) continue
      el.classList.add('fx-wait')
      io.observe(el)
    }
    return () => io.disconnect()
  }, [])
  return null
}

// スマホでは横スクロールのカルーセル（ドット付き）、PC（lg 以上）では横並びのグリッド。
// children は 1 枚ずつの <li>。
export function CardRail({ children, label }: { children: ReactNode; label: string }) {
  const ref = useRef<HTMLUListElement>(null)
  const [active, setActive] = useState(0)
  const count = Children.count(children)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      // 画面の中央にいちばん近いカードを「表示中」とする
      const items = Array.from(el.children) as HTMLElement[]
      const center = el.scrollLeft + el.clientWidth / 2
      let best = 0
      let dist = Infinity
      items.forEach((it, i) => {
        const d = Math.abs(it.offsetLeft + it.offsetWidth / 2 - center)
        if (d < dist) {
          dist = d
          best = i
        }
      })
      setActive(best)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  const go = (i: number) => {
    const el = ref.current
    if (!el) return
    const items = Array.from(el.children) as HTMLElement[]
    const it = items[i]
    if (!it) return
    el.scrollTo({ left: it.offsetLeft - (el.clientWidth - it.offsetWidth) / 2, behavior: 'smooth' })
  }

  return (
    <div>
      <ul
        ref={ref}
        aria-label={label}
        className="no-scrollbar relative -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-[11%] pb-6 pt-2 sm:px-5 lg:mx-0 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0"
      >
        {children}
      </ul>
      <div className="mt-2 flex justify-center gap-2 lg:hidden">
        {Array.from({ length: count }, (_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => go(i)}
            aria-label={`Show card ${i + 1} of ${count}`}
            aria-current={active === i}
            className={`h-2.5 rounded-full transition-all duration-300 ${active === i ? 'w-8 bg-sumi' : 'w-2.5 bg-sumi/25'}`}
          />
        ))}
      </div>
    </div>
  )
}

// スマホ用の下部固定CTA。ヒーローを過ぎたら出し、フォーム（#scan）が見えている間は隠す
export function StickyCta({ href, label, external }: { href: string; label: string; external: boolean }) {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const target = document.getElementById('scan')
    let formVisible = false
    const io = target
      ? new IntersectionObserver(([e]) => {
          formVisible = e.isIntersecting
          update()
        })
      : null
    if (target && io) io.observe(target)
    function update() {
      setShow(window.scrollY > window.innerHeight * 0.9 && !formVisible)
    }
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      io?.disconnect()
    }
  }, [])
  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t-2 border-sumi bg-washi/95 px-4 py-3 backdrop-blur transition-transform duration-500 md:hidden ${show ? 'translate-y-0' : 'pointer-events-none translate-y-full'}`}
      aria-hidden={!show}
    >
      <a
        href={href}
        tabIndex={show ? 0 : -1}
        {...(external ? { target: '_blank', rel: 'noopener' } : {})}
        className="ninja-shine relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full border-2 border-sumi bg-beni py-3.5 text-[15px] font-bold text-white shadow-[3px_3px_0_#1D1B1A]"
      >
        {label} →
      </a>
    </div>
  )
}
