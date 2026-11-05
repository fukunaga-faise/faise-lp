import { ChevronDown } from 'lucide-react'

// よくあるご質問のプルダウン（開閉式）表示。
// <details> を使うので、閉じていても回答は HTML に含まれ、検索エンジン・AI にも読まれる。
// サーバー・クライアントどちらのコンポーネントからも使える（'use client' 不要）。
export default function FaqList({
  items,
  className = '',
  divider = 'divide-[#ecebe7] border-[#ecebe7]',
}: {
  items: { q: string; a: string }[]
  className?: string
  divider?: string
}) {
  return (
    <div className={`divide-y border-y ${divider} ${className}`}>
      {items.map((f) => (
        <details key={f.q} className="group">
          <summary className="flex cursor-pointer list-none items-start gap-3 py-5 text-[15.5px] md:text-[16px] font-medium leading-[1.7] tracking-[0.03em] text-[#111] transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
            <span className="font-inter text-brand-sky">Q.</span>
            <span className="flex-1">{f.q}</span>
            <ChevronDown
              size={18}
              strokeWidth={1.75}
              aria-hidden="true"
              className="mt-[0.3em] shrink-0 text-brand transition-transform duration-300 group-open:rotate-180"
            />
          </summary>
          <div className="flex gap-3 pb-6 pr-8 text-[14.5px] md:text-[14px] leading-[2] tracking-[0.03em] text-[#555]">
            <span className="font-inter text-brand">A.</span>
            <p>{f.a}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
