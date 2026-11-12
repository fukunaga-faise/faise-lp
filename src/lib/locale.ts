// サーバー・クライアントの両方から使う言語まわりの純粋な関数（'use client' を付けない）

export type Lang = 'ja' | 'en'

// 言語は URL で決まる（日本語: /…、英語: /en/…）。検索エンジンが両方を別ページとして読めるようにするため、
// 画面上の切り替えではなく、対応する URL へのリンクで切り替える。

// 英語版があるページ（それ以外の日本語ページから英語に切り替えると /en トップへ）
export function hasEnglish(path: string) {
  const p = path.split('#')[0].split('?')[0]
  return p === '/' || p === '' || p === '/clinic' || p === '/japan-launch' || p.startsWith('/services/') || p.startsWith('/works/')
}

// 日本語のパス → 表示中の言語のパス
export function localizePath(href: string, lang: Lang) {
  if (lang === 'ja' || !href.startsWith('/') || href.startsWith('/en')) return href
  if (!hasEnglish(href)) return href
  if (href === '/') return '/en'
  if (href.startsWith('/#')) return `/en${href.slice(1)}`
  return `/en${href}`
}

// 英語の入口（日本語サイトの「EN」ボタンの行き先）。英語サイトは海外ブランド向けの Japan Launch LP が主役。
export const ENGLISH_ENTRY = '/en/japan-launch'

// 表示中のページの、もう一方の言語の URL（言語切り替えボタンの行き先）
export function alternatePath(pathname: string, lang: Lang) {
  if (lang === 'en') {
    const ja = pathname.replace(/^\/en(?=\/|$)/, '')
    return ja === '' ? '/' : ja
  }
  // 日本語サイトのどのページからでも、英語は Japan Launch LP へ
  return ENGLISH_ENTRY
}

