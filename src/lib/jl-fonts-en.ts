import { Anton, Fraunces } from 'next/font/google'

// 英語LP（JAPAN NINJA）専用のフォント。日本語用の Shippori Mincho（@font-face が数百行）は読み込まず、
// 見出し用に軽い欧文セリフ（Fraunces）を同じ CSS 変数 --font-mincho に割り当てる（font-mincho クラスはそのまま使える）。
export const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
export const serif = Fraunces({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-mincho', display: 'swap' })
