import { Anton, Shippori_Mincho } from 'next/font/google'

// Japan Launch LP 専用のフォント（このページでだけ読み込む）
// display: 大きな英字（ヒーローの「JAPAN」など） / mincho: 漢字ラベル・見出しの和のアクセント
export const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
export const mincho = Shippori_Mincho({ weight: ['500', '700'], subsets: ['latin'], variable: '--font-mincho', display: 'swap' })
