import { notFound } from 'next/navigation'

// /en 以下の未定義 URL を英語の 404 ページ（(en)/en/not-found.tsx）で表示する。
export default function CatchAll() {
  notFound()
}
