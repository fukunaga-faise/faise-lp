// サーバー・クライアントの両方から使う言語まわりの純粋な関数（'use client' を付けない）

export type Lang = 'ja' | 'en'

// 英語の入口（日本語サイトの「EN」ボタンの行き先）。英語サイトは海外ブランド向けの Japan Launch LP だけ。
export const ENGLISH_ENTRY = '/en/japan-launch'

// 言語は URL で決まる（日本語: /…、英語: /en/…）。検索エンジンが両方を別ページとして読めるようにするため、
// 画面上の切り替えではなく、対応する URL へのリンクで切り替える。

// 英語版があるページ。英語サイトは Japan Launch LP だけ（以前の英訳ページは LP へ転送している）
export function hasEnglish(path: string) {
  const p = path.split('#')[0].split('?')[0]
  return p === '/japan-launch'
}

// 日本語のパス → 表示中の言語のパス（英語でトップを指すリンクは LP へ）
export function localizePath(href: string, lang: Lang) {
  if (lang === 'ja' || !href.startsWith('/') || href.startsWith('/en')) return href
  if (href === '/' || href.startsWith('/#')) return ENGLISH_ENTRY
  if (!hasEnglish(href)) return href
  return `/en${href}`
}


// 表示中のページの、もう一方の言語の URL（言語切り替えボタンの行き先）
export function alternatePath(pathname: string, lang: Lang) {
  if (lang === 'en') {
    const ja = pathname.replace(/^\/en(?=\/|$)/, '')
    return ja === '' ? '/' : ja
  }
  // 日本語サイトのどのページからでも、英語は Japan Launch LP へ
  return ENGLISH_ENTRY
}

