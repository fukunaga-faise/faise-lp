'use client'

import { useEffect, useState } from 'react'
import { terminal } from '@/lib/japan-ninja'

// ターミナル風アニメーション：1行ずつタイプしてループ。prefers-reduced-motion なら全行を静止表示。
// 画面読み上げ向けには全文を sr-only で渡し、アニメーション部分は aria-hidden にする。
const toneClass: Record<string, string> = {
  indigo: 'text-[#9DB0F0]',
  moss: 'text-[#C3D08F]',
  crimson: 'text-[#F5A3B1]',
  orange: 'text-[#F6A15C]',
}

const rows = [
  { kind: 'cmd' as const, text: terminal.command },
  ...terminal.lines.map((l) => ({ kind: 'line' as const, ...l })),
  { kind: 'done' as const, text: terminal.done },
]
const fullText = (r: (typeof rows)[number]) => (r.kind === 'line' ? `${r.who} ${r.label} ${r.value}` : r.text)

export default function NinjaTerminal() {
  const [reduce, setReduce] = useState(false)
  const [row, setRow] = useState(rows.length) // SSR では全行を表示（JS無効・クローラーでも内容が見える）
  const [chars, setChars] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    if (mq.matches) return
    setRow(0)
    setChars(0)
  }, [])

  useEffect(() => {
    if (reduce || row >= rows.length + 1) return
    if (row === rows.length) {
      // 全行表示したら少し待ってから最初へ
      const t = setTimeout(() => {
        setRow(0)
        setChars(0)
      }, 2600)
      return () => clearTimeout(t)
    }
    const len = fullText(rows[row]).length
    if (chars < len) {
      const t = setTimeout(() => setChars((c) => Math.min(c + (rows[row].kind === 'cmd' ? 1 : 3), len)), rows[row].kind === 'cmd' ? 45 : 18)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setRow((r) => r + 1)
      setChars(0)
    }, rows[row].kind === 'cmd' ? 500 : 260)
    return () => clearTimeout(t)
  }, [row, chars, reduce])

  const visible = (i: number) => (reduce || i < row ? Infinity : i === row ? chars : -1)

  return (
    <figure className="w-full overflow-hidden rounded-lg border border-white/10 bg-[#0D0F14] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.7)]">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-2.5" aria-hidden="true">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/45">ninja — japan-scan</span>
      </div>
      <p className="sr-only">{rows.map(fullText).join('. ')}</p>
      <div aria-hidden="true" className="min-h-[244px] px-4 py-4 font-mono text-[11.5px] leading-[1.75] text-white/85 sm:min-h-[232px] sm:text-[12.5px]">
        {rows.map((r, i) => {
          const n = visible(i)
          if (n < 0) return null
          const cursor = !reduce && i === row && <span className="ml-0.5 inline-block h-[1em] w-[0.55em] translate-y-[2px] animate-pulse bg-white/70" />
          if (r.kind !== 'line') {
            const text = r.text.slice(0, n)
            return (
              <div key={i} className={r.kind === 'done' ? 'mt-1 text-[#6EE7A0]' : 'text-white'}>
                {text}
                {cursor}
              </div>
            )
          }
          const head = `${r.who} ${r.label} `
          const shown = fullText(r).slice(0, n)
          return (
            <div key={i} className="flex flex-wrap gap-x-2">
              <span className={toneClass[r.tone]}>{shown.slice(0, r.who.length)}</span>
              <span className="text-white/70">{shown.slice(r.who.length + 1, head.length - 1)}</span>
              <span className="text-white">{shown.slice(head.length)}</span>
              {cursor}
            </div>
          )
        })}
      </div>
      <figcaption className="border-t border-white/10 px-4 py-2 text-right font-mono text-[10.5px] text-white/50">{terminal.note}</figcaption>
    </figure>
  )
}
