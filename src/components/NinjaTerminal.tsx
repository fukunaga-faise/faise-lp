'use client'

import { useEffect, useState } from 'react'
import { terminal } from '@/lib/japan-ninja'

// ヒーローの「密書（巻物）」：忍者たちが Japan Scan の結果を1行ずつ書き込んでいく演出。ループする。
// prefers-reduced-motion なら全行を静止表示。画面読み上げ向けには全文を sr-only で渡し、演出部分は aria-hidden にする。
// （中身はイメージ。実際の診断結果ではないことを下に明記する）
const inkClass: Record<string, string> = {
  indigo: 'text-[#2B3A67]',
  moss: 'text-[#4F5D2F]',
  crimson: 'text-[#9E1F35]',
  orange: 'text-[#B3541E]',
}

const rows = [
  { kind: 'cmd' as const, text: terminal.command },
  ...terminal.lines.map((l) => ({ kind: 'line' as const, ...l })),
  { kind: 'done' as const, text: terminal.done },
]
const name = (who: string) => who.replace(/[[\]]/g, '')
const fullText = (r: (typeof rows)[number]) => (r.kind === 'line' ? `${name(r.who)}: ${r.label} — ${r.value}` : r.text)

export default function NinjaTerminal() {
  const [reduce, setReduce] = useState(false)
  const [row, setRow] = useState(rows.length) // SSR では全行を表示（JS無効・クローラーでも内容が見える）
  const [chars, setChars] = useState(0)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduce(mq.matches)
    if (mq.matches) return
    // 読み込み直後は全行を静止表示し、ページの読み込みが落ち着いてから書き込みを始める（初期表示の負荷を避ける）
    const t = setTimeout(() => {
      setRow(0)
      setChars(0)
    }, 2500)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (reduce || row >= rows.length + 1) return
    if (row === rows.length) {
      // 全行そろったら少し待ってから最初へ
      const t = setTimeout(() => {
        setRow(0)
        setChars(0)
      }, 3200)
      return () => clearTimeout(t)
    }
    const r = rows[row]
    const len = r.kind === 'line' ? r.value.length : r.text.length
    if (chars < len) {
      const t = setTimeout(() => setChars((c) => Math.min(c + (r.kind === 'cmd' ? 1 : 2), len)), r.kind === 'cmd' ? 45 : 24)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setRow((x) => x + 1)
      setChars(0)
    }, r.kind === 'cmd' ? 500 : 320)
    return () => clearTimeout(t)
  }, [row, chars, reduce])

  // その行を何文字まで見せるか（-1 = まだ出さない）
  const visible = (i: number) => (reduce || i < row ? Infinity : i === row ? chars : -1)
  const brush = <span className="ml-0.5 inline-block h-[0.95em] w-[3px] translate-y-[2px] animate-pulse rounded-full bg-sumi/70" />
  const rod = (
    <>
      <span className="absolute -left-2.5 top-1/2 h-6 w-3 -translate-y-1/2 rounded-sm bg-[#C9A24B] shadow-[inset_0_-2px_0_rgba(0,0,0,0.25)]" />
      <span className="absolute -right-2.5 top-1/2 h-6 w-3 -translate-y-1/2 rounded-sm bg-[#C9A24B] shadow-[inset_0_-2px_0_rgba(0,0,0,0.25)]" />
    </>
  )

  return (
    <figure className="relative mx-auto w-full max-w-[560px] py-2">
      {/* 巻物の軸（上） */}
      <div aria-hidden="true" className="absolute inset-x-1 top-0 z-10 h-4 rounded-full bg-gradient-to-b from-[#7A4A2E] to-[#3A1F12] shadow-[0_3px_6px_rgba(0,0,0,0.45)]">
        {rod}
      </div>

      <div className="relative overflow-hidden border-x-[6px] border-beni bg-[#F3EEE3] px-5 pb-4 pt-6 text-sumi shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] sm:px-7">
        {/* 和紙のかすれ（装飾） */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(122,48,45,0.10),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(29,27,26,0.07),transparent_60%)]" />

        <div aria-hidden="true" className="relative flex items-center justify-between gap-3 border-b-2 border-sumi/80 pb-3">
          <p className="font-mincho text-[18px] font-bold leading-tight">
            Secret Scroll
            <span className="mt-0.5 block font-inter text-[10.5px] font-semibold uppercase tracking-[0.24em] text-beni">The clan’s Japan Scan · sample</span>
          </p>
          <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[3px] bg-shu font-mincho text-[18px] font-bold text-white shadow-[2px_2px_0_#1D1B1A]">密</span>
        </div>

        <p className="sr-only">{rows.map(fullText).join('. ')}</p>

        <div aria-hidden="true" className="relative min-h-[318px] pt-3 sm:min-h-[300px]">
          {rows.map((r, i) => {
            const n = visible(i)
            if (n < 0) return null
            const writing = !reduce && i === row
            if (r.kind === 'cmd') {
              return (
                <p key={i} className="pb-1 font-mincho text-[15px] italic text-[#555]">
                  {r.text.slice(0, n)}
                  {writing && brush}
                </p>
              )
            }
            if (r.kind === 'done') {
              // 最後は落款（はんこ）を押す
              return (
                <div key={i} className="mt-3 flex items-center justify-end gap-3">
                  <p className="font-mincho text-[15px] font-bold text-beni">
                    {r.text.slice(0, n)}
                    {writing && brush}
                  </p>
                  {n >= r.text.length && (
                    <span className="ninja-stamp inline-flex h-11 w-11 rotate-[-8deg] items-center justify-center rounded-[4px] border-[3px] border-shu font-mincho text-[21px] font-bold text-shu">忍</span>
                  )}
                </div>
              )
            }
            return (
              <div key={i} className="flex items-start gap-3 border-b border-dashed border-sumi/20 py-2">
                <img
                  src={`/images/japan-ninja/web/${name(r.who).toLowerCase()}.webp`}
                  alt=""
                  width={30}
                  height={30}
                  className="mt-0.5 h-[30px] w-[30px] shrink-0 rounded-full object-cover object-[50%_12%] ring-2 ring-sumi/70"
                />
                <p className="min-w-0 text-[13.5px] leading-[1.55] sm:text-[14px]">
                  <span className={`font-mincho font-bold ${inkClass[r.tone]}`}>{name(r.who)}</span>
                  <span className="text-[#666]"> · {r.label} — </span>
                  <span className="font-semibold">
                    {r.value.slice(0, n)}
                    {writing && brush}
                  </span>
                </p>
              </div>
            )
          })}
        </div>
        <figcaption className="relative mt-1 text-right text-[11px] text-[#666]">{terminal.note}</figcaption>
      </div>

      {/* 巻物の軸（下） */}
      <div aria-hidden="true" className="absolute inset-x-1 bottom-0 z-10 h-4 rounded-full bg-gradient-to-b from-[#7A4A2E] to-[#3A1F12] shadow-[0_-2px_6px_rgba(0,0,0,0.35)]">
        {rod}
      </div>
    </figure>
  )
}
