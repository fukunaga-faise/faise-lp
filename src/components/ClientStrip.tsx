'use client'

import { useLanguage } from '@/lib/language'
import { clients } from '@/lib/clients'
import { container } from './ui'

// ヒーロー直下の取引先ロゴ帯。ゆっくり横に流れ、取引先が増えても全社が順に見える。
// データは src/lib/clients.ts（CLIENTS セクションと共通）。
const t = {
  label: { ja: '取引先', en: 'Clients' },
}

export default function ClientStrip() {
  const { lang } = useLanguage()
  // 半分（-50%）移動でつなぎ目が出ないよう、同じ並びを2回ずつ並べたものを2組作る
  const half = [...clients, ...clients]
  const duration = `${Math.max(clients.length * 9, 36)}s`

  return (
    <section aria-label={t.label[lang]} className="bg-white">
      <div className={`${container} flex items-center gap-5 py-5 md:gap-10 md:py-6`}>
        <p className="shrink-0 font-inter text-[10.5px] md:text-[11px] font-medium tracking-[0.26em] uppercase text-brand">
          {t.label[lang]}
        </p>
        <div
          className="relative min-w-0 flex-1 overflow-hidden"
          style={{ WebkitMaskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)', maskImage: 'linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)' }}
        >
          <ul
            className="faise-anim flex w-max items-center will-change-transform hover:[animation-play-state:paused]"
            style={{ animation: `faiseMarqueeL ${duration} linear infinite` }}
          >
            {[0, 1].map((copy) =>
              half.map((c, i) => (
                <li
                  key={`${copy}-${i}`}
                  aria-hidden={copy === 1 ? true : undefined}
                  className="flex h-12 shrink-0 items-center px-7 md:px-12"
                >
                  <img
                    src={c.logo}
                    alt={copy === 0 ? (lang === 'ja' ? c.name : c.nameEn) : ''}
                    loading="eager"
                    decoding="async"
                    draggable={false}
                    className={`${c.stripClass ?? 'h-7 md:h-8'} w-auto max-w-[150px] object-contain`}
                  />
                </li>
              )),
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}
