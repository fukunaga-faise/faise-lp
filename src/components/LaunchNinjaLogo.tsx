// LAUNCH NINJA のロゴ（マーク＋ロゴタイプ）。
// マーク：日の丸（朱色の円）に忍者の覆面（墨の帯と目）、右上へなびく結び目＝「ローンチ」。
// ロゴタイプは英語LPで読み込み済みの Anton（--font-display）で描画する（画像を使わず軽い）。
// サーバーコンポーネント。JS は不要。

type Tone = 'light' | 'dark' // light = 明るい背景用、dark = 暗い背景用

export function LaunchNinjaMark({ tone = 'light', className = '' }: { tone?: Tone; className?: string }) {
  const tail = tone === 'dark' ? '#FFFFFF' : '#1D1B1A'
  return (
    <svg viewBox="0 0 112 100" className={className} aria-hidden="true" focusable="false">
      <circle cx="50" cy="52" r="44" fill="#D2492B" />
      {/* 覆面の帯は円の内側だけに描く */}
      <path fill="#1D1B1A" d="M8.4 40 H91.6 A44 44 0 0 1 91.6 64 H8.4 A44 44 0 0 1 8.4 40 Z" />
      <path fill="#FFFFFF" d="M28 53 Q37 44 47 51 Q37 57 28 53Z" />
      <path fill="#FFFFFF" d="M72 53 Q63 44 53 51 Q63 57 72 53Z" />
      <path fill={tail} d="M90 44 C99 37 103 26 109 12 L103 10 C98 22 94 31 87 36Z" />
      <path fill={tail} d="M91 52 C101 50 106 41 110 30 L104 28 C100 37 97 43 90 46Z" />
    </svg>
  )
}

export default function LaunchNinjaLogo({
  tone = 'light',
  stacked = false,
  byline = true,
  className = '',
  markClassName = 'h-9 w-auto',
  textClassName = 'text-[22px]',
}: {
  tone?: Tone
  stacked?: boolean // true: LAUNCH / NINJA の2段組
  byline?: boolean // "BY FAISE" を表示するか
  className?: string
  markClassName?: string
  textClassName?: string
}) {
  const ink = tone === 'dark' ? 'text-white' : 'text-sumi'
  const by = tone === 'dark' ? 'text-white/70' : 'text-[#5f5f5f]'
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LaunchNinjaMark tone={tone} className={markClassName} />
      <span className="flex flex-col">
        <span className={`whitespace-nowrap font-display uppercase leading-[0.95] tracking-[0.02em] ${ink} ${textClassName}`}>
          LAUNCH{stacked ? <br /> : ' '}
          <span className="text-shu">NINJA</span>
        </span>
        {byline && <span className={`mt-1 font-inter text-[9px] font-semibold uppercase tracking-[0.32em] ${by}`}>by Faise</span>}
      </span>
    </span>
  )
}
