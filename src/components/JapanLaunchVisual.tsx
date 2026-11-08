import type { Lang } from '@/lib/locale'
import { hero } from '@/lib/japan-launch'

// 「海外 → 日本」をひと目で伝えるヒーロー図（SVG のみ、画像なし）。
// 左の3つの出発点（海外での販売実績）から、右の日本へ弧を描いて集まる。
export default function JapanLaunchVisual({ lang }: { lang: Lang }) {
  const origins = lang === 'ja' ? hero.originsJa : hero.origins
  const ys = [62, 150, 238]
  const jp = { x: 392, y: 150 }
  const title = lang === 'ja' ? '海外の販売実績から日本でのローンチへ向かう図' : 'Diagram: overseas traction flowing into a launch in Japan'

  return (
    <svg viewBox="0 0 480 300" role="img" aria-labelledby="jl-visual-title" className="h-auto w-full">
      <title id="jl-visual-title">{title}</title>
      <defs>
        <linearGradient id="jl-arc" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#1FACE0" stopOpacity="0.35" />
          <stop offset="1" stopColor="#2563D6" />
        </linearGradient>
        <radialGradient id="jl-glow">
          <stop offset="0" stopColor="#1FACE0" stopOpacity="0.35" />
          <stop offset="1" stopColor="#1FACE0" stopOpacity="0" />
        </radialGradient>
        <pattern id="jl-dots" width="16" height="16" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#14185C" fillOpacity="0.08" />
        </pattern>
      </defs>

      <rect x="0" y="0" width="480" height="300" fill="url(#jl-dots)" />

      {/* Arcs: overseas -> Japan */}
      {ys.map((y, i) => (
        <path
          key={y}
          d={`M70 ${y} C ${180} ${y + (i - 1) * -40}, ${300} ${jp.y + (i - 1) * 30}, ${jp.x - 22} ${jp.y + (i - 1) * 6}`}
          fill="none"
          stroke="url(#jl-arc)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="6 8"
          className="faise-anim"
          style={{ animation: `faiseDash ${2.4 + i * 0.4}s linear infinite` }}
        />
      ))}

      {/* Origins */}
      {ys.map((y, i) => (
        <g key={origins[i]}>
          <circle cx="70" cy={y} r="11" fill="#fff" stroke="#1FACE0" strokeOpacity="0.5" />
          <circle cx="70" cy={y} r="5" fill="#1FACE0" />
          <text x="70" y={y - 20} textAnchor="middle" fontSize="12.5" fontWeight="500" fill="#333" fontFamily="var(--font-inter), var(--font-noto), sans-serif">
            {origins[i]}
          </text>
        </g>
      ))}

      {/* Japan: stylized archipelago */}
      <circle cx={jp.x} cy={jp.y} r="70" fill="url(#jl-glow)" />
      <g fill="#2563D6">
        <ellipse cx="428" cy="84" rx="15" ry="11" transform="rotate(-20 428 84)" />
        <ellipse cx="406" cy="132" rx="11" ry="34" transform="rotate(32 406 132)" />
        <ellipse cx="374" cy="184" rx="9" ry="22" transform="rotate(62 374 184)" />
        <ellipse cx="380" cy="201" rx="7" ry="4" transform="rotate(-20 380 201)" fillOpacity="0.8" />
        <ellipse cx="350" cy="208" rx="8" ry="11" transform="rotate(20 350 208)" />
      </g>
      <circle cx={jp.x} cy={jp.y} r="6" fill="#fff" stroke="#14185C" strokeWidth="2.5" />
      <text x="436" y="214" textAnchor="middle" fontSize="13" fontWeight="600" letterSpacing="3" fill="#14185C" fontFamily="var(--font-inter), sans-serif">
        JAPAN
      </text>
      <text x="436" y="232" textAnchor="middle" fontSize="11" fill="#555" fontFamily="var(--font-noto), sans-serif">
        日本
      </text>

      {/* Middle pill */}
      <g transform="translate(176 270)">
        <rect x="-4" y="-15" width="168" height="26" rx="13" fill="#fff" stroke="#e3e6ec" />
        <text x="80" y="3" textAnchor="middle" fontSize="11" fontWeight="500" letterSpacing="1" fill="#2563D6" fontFamily="var(--font-inter), var(--font-noto), sans-serif">
          {lang === 'ja' ? '検証 → ローンチ → 拡大' : 'Validate → Launch → Scale'}
        </text>
      </g>
    </svg>
  )
}
