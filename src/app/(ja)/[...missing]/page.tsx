import { notFound } from 'next/navigation'

// ルートグループ構成では未定義 URL が既定の 404 になるため、
// 残りの URL をすべてここで受けて (ja)/not-found.tsx を表示させる（ステータスは 404）。
export default function CatchAll() {
  notFound()
}
