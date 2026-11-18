import { Noto_Sans_JP } from 'next/font/google'

// 日本語サイト（(ja) レイアウト）だけで読み込む本文フォント。
// Noto Sans JP は @font-face が数百行になるため、英語サイト（(en) レイアウト）では読み込まない。
export const noto = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-noto',
  display: 'swap',
})
