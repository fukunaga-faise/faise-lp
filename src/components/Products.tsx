'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/language'
import { Label, Reveal, container } from './ui'

// 自社サービス（日本語サイトのみ）。画像・タイトルをクリックすると各サービスの LP へ。
// 画像は各 LP のファーストビューのスクリーンショット。
const products = [
  {
    name: 'バズクル',
    href: '/clinic',
    img: '/images/products/buzzkuru.jpg',
    body: '美容クリニック向けの成果報酬型集客サービスです。美容インフルエンサーが来院・施術の様子を紹介する投稿を広告に活用し、新規患者の獲得を支援します。初期費用・キャスティング費・月額固定費は0円です。',
  },
  {
    name: '受付ネコの手',
    href: '/uketsuke-neko',
    img: '/images/products/uketsuke-neko.jpg',
    body: 'クリニックのLINE返信をAIが下書きするサービスです。Lステップ・エルメ・LINE公式アカウントを乗り換えずにそのまま使え、返信はスタッフが確認して送信します。',
  },
  {
    name: 'LAUNCH NINJA',
    href: '/en/launch-ninja',
    img: '/images/products/launch-ninja.jpg',
    body: '海外の消費者向けブランドの日本進出を支援するサービスです（英語サイト）。日本での独占ライセンスを受けて自社EC・Amazon・楽天・小売まで展開するか、ローカライズ・広告・インフルエンサーなどのマーケティングだけを担うかを選べます。輸入や技適・PSEはパートナーと連携し、東京のチームが担当します。',
  },
]

export default function Products() {
  const { lang } = useLanguage()
  if (lang !== 'ja') return null

  return (
    <section id="products" className="border-t border-[#ecebe7] bg-white py-14 md:py-24">
      <div className={container}>
        <Reveal className="max-w-3xl">
          <Label>Our Products</Label>
          <h2 className="mt-6 text-[clamp(24px,2.6vw,38px)] font-medium leading-[1.55] tracking-[0.02em] text-[#111]">自社サービス</h2>
          <p className="mt-5 text-[14.5px] md:text-[15px] leading-[2] tracking-[0.03em] text-[#555]">Faiseでは、自社サービスの開発・運営も行っています。</p>
        </Reveal>

        <ul className="mt-10 grid gap-12 md:mt-14 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-x-10">
          {products.map((p, i) => (
            <li key={p.href}>
              <Reveal delay={i * 0.08}>
                <Link href={p.href} className="group block">
                  <div className="relative aspect-[16/10] overflow-hidden border border-[#e3e2dd] bg-[#f6f5f2]">
                    <img
                      src={p.img}
                      alt={`${p.name}のサービスページ`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                    <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-gradient-to-r from-brand-sky to-brand transition-transform duration-500 group-hover:scale-x-100" />
                  </div>
                  <h3 className="mt-5 inline-flex items-center gap-2 border-b border-[#111]/70 pb-0.5 text-[17px] md:text-[18px] font-bold tracking-[0.04em] text-[#111] transition-colors duration-300 group-hover:border-brand group-hover:text-brand">
                    {p.name}
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </h3>
                  <p className="mt-3 text-[14px] md:text-[13.5px] leading-[1.95] tracking-[0.03em] text-[#555]">{p.body}</p>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
