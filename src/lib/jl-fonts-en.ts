import { Anton, Noto_Serif } from 'next/font/google'

// 英語LP（LAUNCH NINJA）専用のフォント。日本語用の Shippori Mincho（@font-face が数百行）は読み込まず、
// 見出し用に欧文セリフ（Noto Serif）を同じ CSS 変数 --font-mincho に割り当てる（font-mincho クラスはそのまま使える）。
// ※ 以前の Fraunces は「J」の尾が大きく曲がって歪んで見えたため、J がベースラインに素直に収まる Noto Serif に変更
export const display = Anton({ weight: '400', subsets: ['latin'], variable: '--font-display', display: 'swap' })
export const serif = Noto_Serif({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-mincho', display: 'swap' })
