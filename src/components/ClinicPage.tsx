'use client'

import Link from 'next/link'
import { ChevronRight, ArrowRight } from 'lucide-react'
import { clinicContent as c } from '@/lib/clinic-content'
import { guides } from '@/lib/clinic-guides'
import Nav from './Nav'
import CTA from './CTA'
import PageCurtain from './PageCurtain'
import { ArrowLink, Reveal, ScrollProgress, container } from './ui'
import FaqList from '@/components/FaqList'

// バズクル（美容クリニック向け成果報酬型集客サービス）の LP。/clinic
// 内容はサービス紹介資料（PDF）とプレスリリースに書かれている事実だけ。
// ※特定のクリニック様の事例（投稿ごとの数値・院名）は掲載しない。
const GOLD = 'text-[#a8854f]'
const img = (n: string) => `/images/buzzkuru/${n}.jpg`

function Kicker({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-inter text-[11px] md:text-[12px] font-medium uppercase tracking-[0.3em] ${GOLD} ${className}`}>
      <span className="block h-px w-8 bg-[#c4a06a]" />
      {children}
    </p>
  )
}

function H2({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`mt-5 text-[clamp(24px,3.2vw,40px)] font-bold leading-[1.5] tracking-[0.06em] text-[#1c1a17] ${className}`}>{children}</h2>
}

function ConsultButton() {
  return (
    <a
      href="#contact"
      className="group inline-flex items-center gap-3 bg-[#1c1a17] px-8 py-4 text-[14px] font-bold tracking-[0.1em] text-white transition-colors duration-300 hover:bg-[#a8854f]"
    >
      集客について相談する
      <ArrowRight size={16} strokeWidth={1.75} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

function Phone({ children, label }: { children: React.ReactNode; label?: string }) {
  return (
    <figure className="flex flex-col items-center">
      {label && <figcaption className="mb-3 text-[13px] font-bold tracking-[0.08em] text-[#1c1a17]">{label}</figcaption>}
      <div className="w-full max-w-[220px] overflow-hidden rounded-[26px] border-[5px] border-[#1c1a17] bg-white shadow-[0_24px_40px_-28px_rgba(0,0,0,0.6)]">{children}</div>
    </figure>
  )
}

// 広告クリエイティブのイメージ（院名は入れない）
function CreativeCard({ src, small, big, sub }: { src: string; small: string; big: string; sub: string }) {
  return (
    <div>
      <div className="relative aspect-[4/5] overflow-hidden">
        <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/25 to-transparent px-3 pb-3 pt-10 font-serif text-white">
          <p className="text-[10px] tracking-[0.06em]">{small}</p>
          <p className="text-[19px] leading-[1.25]">{big}</p>
          <p className="text-[10px]">{sub}</p>
        </div>
      </div>
      <div className="bg-[#f7f3ec] px-3 py-3 text-center">
        <p className="text-[10px] text-[#555]">あなたの肌に、最高の一歩を。</p>
        <p className="mt-2 border border-[#c4a06a] py-1 text-[10px] text-[#1c1a17]">詳しくはこちら</p>
      </div>
    </div>
  )
}

const values = [
  { k: '届ける', v: 'フォロワー以外の見込み患者にも届ける' },
  { k: '測る', v: '再生数ではなく、予約成果で評価する' },
  { k: '伸ばす', v: '成果の良い広告に予算を集中する' },
]

const steps = ['インフルエンサー選定', '来院・施術', 'コンテンツ制作', '広告配信', '効果検証・改善', '予約獲得']

const ads = [
  { name: '広告 A', src: 'face-a', small: '施術体験レポート', big: '人気の施術を', sub: '受けてきました', cost: '高い', count: '少ない', best: false },
  { name: '広告 B', src: 'face-b', small: '施術体験レポート', big: '美肌治療を', sub: '体験してきました', cost: '低い', count: '多い', best: true },
  { name: '広告 C', src: 'face-c', small: 'カウンセリング体験', big: '初めての', sub: 'カウンセリングへ', cost: '高い', count: '少ない', best: false },
]

const fees = [
  { k: '初期費用', v: '0円' },
  { k: 'キャスティング費', v: '0円' },
  { k: '月額固定費', v: '0円' },
]

export default function ClinicPage() {
  return (
    <main className="bg-[#fbf9f5] text-[#1c1a17]">
      <PageCurtain />
      <ScrollProgress />
      <Nav base="/" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#efe9df]">
        <img src={img('hero')} alt="自然光の中で微笑む女性のイメージ" className="absolute inset-y-0 right-0 h-full w-full object-cover object-[70%_center] md:w-[62%]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#efe9df] via-[#efe9df]/85 to-[#efe9df]/10 md:via-[#efe9df]/60 md:to-transparent" />
        <div className={`${container} relative pb-16 pt-28 md:pb-32 md:pt-40`}>
          <nav aria-label="breadcrumb" className="mb-10 flex items-center gap-2 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href="/" className="transition-colors hover:text-[#a8854f]">{c.breadcrumb.home.ja}</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">{c.breadcrumb.here.ja}</span>
          </nav>
          <Reveal className="max-w-[760px]">
            <Kicker>Buzzkuru — 美容クリニックの集客</Kicker>
            <h1 className="mt-7 text-[clamp(26px,3.8vw,50px)] font-bold leading-[1.5] tracking-[0.06em]">
              「実際の施術体験」を、
              <br />
              成果につながる広告へ。
            </h1>
            <p className="mt-7 text-[15px] md:text-[16px] leading-[2.1] tracking-[0.04em] text-[#3d3a35]">
              インフルエンサーのリアルな体験を、広告クリエイティブとして活用。
              <br className="hidden md:block" />
              成果を見ながら改善を重ね、予約につながる広告へ育てます。
            </p>
            <p className="mt-6 inline-block border border-[#c4a06a] bg-white/70 px-4 py-2 text-[13.5px] font-bold tracking-[0.04em] text-[#1c1a17]">
              成果報酬型集客サービス「バズクル」｜初期費用・キャスティング費・月額固定費 0円
            </p>
            <div className="mt-9">
              <ConsultButton />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 予約前に知りたいのは */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-20`}>
          <Reveal className="relative">
            <img src={img('worry')} alt="スマートフォンで口コミを見ている女性のイメージ" loading="lazy" className="w-full" />
            {[
              ['痛みは？', 'left-[6%] top-[12%]'],
              ['雰囲気は？', 'left-[2%] top-[38%]'],
              ['自分にも合う？', 'right-[4%] top-[30%]'],
              ['本当に効果ある？', 'right-[2%] top-[62%]'],
            ].map(([t, pos]) => (
              <span key={t} className={`absolute ${pos} rounded-full bg-white/90 px-3.5 py-1.5 text-[12.5px] font-bold tracking-[0.04em] shadow-sm md:text-[14px]`}>
                {t}
              </span>
            ))}
          </Reveal>
          <Reveal delay={0.1}>
            <Kicker>Insight</Kicker>
            <H2>
              予約前に知りたいのは、
              <br />
              「実際どうだった？」。
            </H2>
            <p className="mt-8 flex items-baseline gap-1 font-inter font-semibold text-[#c4a06a]">
              <span className="text-[88px] leading-none md:text-[112px]">50</span>
              <span className="text-[44px] md:text-[56px]">%</span>
            </p>
            <p className="mt-3 text-[15.5px] font-bold leading-[1.9]">消費者の半数が、第三者のSNSやレビュー投稿を友人・家族からの推薦と同程度に信頼。</p>
            <p className="mt-6 border-t border-[#c4a06a]/60 pt-6 text-[17px] font-bold leading-[1.9] md:text-[19px]">
              だから、第三者のリアルな体験が
              <br />
              予約の後押しになる。
            </p>
          </Reveal>
        </div>
      </section>

      {/* PR投稿を広告に */}
      <section className="bg-[#f4efe7] py-16 md:py-28">
        <div className={container}>
          <Reveal>
            <Kicker>How it works</Kicker>
            <H2>インフルエンサーのPR投稿を、広告に。</H2>
          </Reveal>
          <div className="mt-12 grid items-start gap-12 lg:grid-cols-[minmax(0,2.2fr)_minmax(0,1fr)] lg:gap-14">
            <Reveal className="grid grid-cols-1 items-center gap-6 sm:grid-cols-[1fr_auto_1fr_auto_1fr]">
              <Phone label="実際の投稿">
                <img src={img('post')} alt="インフルエンサーの投稿のイメージ" loading="lazy" className="w-full" />
              </Phone>
              <ArrowRight aria-hidden="true" className="mx-auto rotate-90 text-[#c4a06a] sm:rotate-0" size={28} />
              <Phone label="広告クリエイティブ化">
                <CreativeCard src={img('face-b')} small="施術体験レポート" big="美肌治療を" sub="体験してきました" />
              </Phone>
              <ArrowRight aria-hidden="true" className="mx-auto rotate-90 text-[#c4a06a] sm:rotate-0" size={28} />
              <figure className="flex flex-col items-center">
                <figcaption className="mb-3 text-[13px] font-bold tracking-[0.08em]">多くのユーザーへ配信</figcaption>
                <div className="grid w-full max-w-[230px] grid-cols-3 gap-2">
                  {['face-a', 'face-b', 'face-c', 'face-b', 'face-a', 'face-c'].map((f, i) => (
                    <div key={i} className="overflow-hidden rounded-lg border-[3px] border-[#1c1a17] bg-white">
                      <img src={img(f)} alt="" loading="lazy" className="aspect-[3/4] w-full object-cover" />
                    </div>
                  ))}
                </div>
              </figure>
            </Reveal>
            <Reveal delay={0.1} className="border-l border-[#c4a06a]/60 pl-7">
              <p className={`text-[14px] font-bold tracking-[0.1em] ${GOLD}`}>3つの価値</p>
              <dl className="mt-4 space-y-6">
                {values.map((v) => (
                  <div key={v.k} className="border-b border-[#c4a06a]/30 pb-5">
                    <dt className={`text-[22px] font-bold tracking-[0.1em] ${GOLD}`}>{v.k}</dt>
                    <dd className="mt-1.5 text-[15px] leading-[1.8]">{v.v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
          <Reveal className="mt-12 bg-white px-6 py-5 text-center text-[17px] font-bold tracking-[0.04em] md:text-[20px]">
            一度のPR投稿を、<span className={GOLD}>継続的</span>に集客できる広告クリエイティブへ。
          </Reveal>
        </div>
      </section>

      {/* 投稿で終わらせず、広告で伸ばす */}
      <section className="py-16 md:py-28">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Kicker>Results</Kicker>
            <H2>
              「投稿」で終わらせず、
              <br />
              「広告」でさらに伸ばす。
            </H2>
            <p className="mt-6 text-[15px] leading-[2] text-[#3d3a35]">
              インフルエンサー投稿の反応を確認し、成果の良いクリエイティブを広告として配信。フォロワーの外までリーチを広げ、予約につながる投稿をさらに伸ばします。
            </p>
          </Reveal>
          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
            <Reveal className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 md:gap-6">
              <Phone label="投稿のみ">
                <img src={img('case-post')} alt="インフルエンサー投稿のイメージ" loading="lazy" className="w-full" />
              </Phone>
              <div className="flex flex-col items-center text-center">
                <p className="hidden text-[11.5px] font-bold leading-[1.6] md:block">反応の良い投稿を<br />＋ 広告運用</p>
                <ArrowRight aria-hidden="true" className="mt-1 text-[#c4a06a]" size={30} />
              </div>
              <Phone label="広告として配信">
                <img src={img('case-ad')} alt="広告として配信したクリエイティブのイメージ" loading="lazy" className="w-full" />
              </Phone>
            </Reveal>
            <Reveal delay={0.1} className="bg-[#f4efe7] px-8 py-10 text-center">
              <p className="mx-auto w-fit bg-[#1c1a17] px-6 py-1.5 text-[13px] font-bold tracking-[0.2em] text-white">実績</p>
              <p className="mt-5 font-inter text-[88px] font-semibold leading-none text-[#c4a06a] md:text-[104px]">
                8<span className="text-[0.55em]">倍</span>
              </p>
              <p className="mt-5 text-[17px] font-bold">予約数が最大8倍に増加</p>
              <p className="mt-2 text-[12px] text-[#777]">※投稿のみの期間と、広告配信後の期間の予約数を比較</p>
            </Reveal>
          </div>
          <Reveal className="mt-10 bg-[#c4a06a] px-6 py-4 text-center text-[15px] font-bold tracking-[0.04em] text-white md:text-[17px]">
            同じ投稿でも、“広告”にするだけで成果は数倍〜最大8倍に変わります。
          </Reveal>
        </div>
      </section>

      {/* 1:9 */}
      <section className="bg-[#f4efe7] py-16 md:py-28">
        <div className={container}>
          <Reveal>
            <Kicker>Our role</Kicker>
            <H2>
              クリニック様は、
              <br />
              PRしたい施術を決めるだけ。
            </H2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,3.2fr)]">
            <Reveal className="bg-white px-7 py-8">
              <p className="font-inter text-[14px] tracking-[0.2em] text-[#777]">CLINIC</p>
              <p className="mt-2 flex items-baseline gap-1 font-inter font-semibold text-[#c4a06a]">
                <span className="text-[84px] leading-none">1</span>
                <span className="text-[22px] text-[#1c1a17]">割</span>
              </p>
              <p className="mt-5 border-t border-[#c4a06a] pt-4 text-[15px] font-bold leading-[1.8]">集客を強化したい施術を決める</p>
            </Reveal>
            <Reveal delay={0.08} className="bg-[#ece3d4] px-7 py-8">
              <div className="flex flex-wrap items-end gap-x-8 gap-y-3">
                <div>
                  <p className="font-inter text-[14px] tracking-[0.2em] text-[#777]">FAISE</p>
                  <p className="mt-2 flex items-baseline gap-1 font-inter font-semibold text-[#c4a06a]">
                    <span className="text-[84px] leading-none">9</span>
                    <span className="text-[22px] text-[#1c1a17]">割</span>
                  </p>
                </div>
                <p className="pb-3 text-[16px] font-bold leading-[1.8]">選定・制作・広告運用・改善まで、FAISEが担当します。</p>
              </div>
              <ol className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
                {steps.map((s, i) => (
                  <li key={s} className="bg-white/70 px-3 py-4 text-center">
                    <p className="font-inter text-[24px] font-semibold text-[#c4a06a]">0{i + 1}</p>
                    <p className="mt-1 text-[13px] font-bold leading-[1.6]">{s}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ネットワーク */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-16`}>
          <Reveal>
            <Kicker>Network</Kicker>
            <p className="mt-6 flex items-baseline gap-2 font-inter font-semibold text-[#c4a06a]">
              <span className="text-[24px] text-[#1c1a17]">約</span>
              <span className="text-[96px] leading-none md:text-[120px]">500</span>
              <span className="text-[28px] text-[#1c1a17]">名</span>
            </p>
            <h2 className="mt-6 text-[clamp(22px,2.6vw,30px)] font-bold tracking-[0.06em]">美容系インフルエンサーネットワーク</h2>
            <p className="mt-6 border-t border-[#c4a06a]/60 pt-6 text-[16px] leading-[2]">
              施術内容・ターゲットに合わせて、
              <br />
              予約につながる可能性の高い人を選定。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src={img('network')} alt="美容系インフルエンサーのイメージ" loading="lazy" className="w-full" />
          </Reveal>
        </div>
      </section>

      {/* 予算を集中 */}
      <section className="bg-[#f4efe7] py-16 md:py-28">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Kicker>Optimization</Kicker>
            <H2>
              予約につながる広告に、
              <br />
              予算を集中。
            </H2>
            <p className="mt-6 text-[15px] leading-[2] text-[#3d3a35]">広告ごとの予約成果を比較し、成果の良い広告に予算を集中。</p>
          </Reveal>
          <div className="mt-12 grid items-center gap-8 lg:grid-cols-[minmax(0,2.4fr)_auto_minmax(0,1fr)]">
            <Reveal className="grid grid-cols-3 gap-3 md:gap-5">
              {ads.map((a) => (
                <div key={a.name} className={`px-2 pb-4 pt-2 md:px-4 ${a.best ? 'bg-[#ece3d4] ring-2 ring-[#c4a06a]' : 'bg-white'}`}>
                  <p className={`mx-auto -mt-5 w-fit px-3 py-1 text-[12px] font-bold text-white md:text-[13px] ${a.best ? 'bg-[#c4a06a]' : 'bg-[#1c1a17]'}`}>{a.name}</p>
                  <div className="mx-auto mt-3 max-w-[150px] overflow-hidden rounded-[16px] border-[4px] border-[#1c1a17] bg-white">
                    <CreativeCard src={img(a.src)} small={a.small} big={a.big} sub={a.sub} />
                  </div>
                  <dl className="mt-4 grid gap-2 text-center">
                    <div>
                      <dt className="text-[11px] text-[#666]">予約単価</dt>
                      <dd className={`text-[17px] font-bold md:text-[20px] ${a.best ? GOLD : ''}`}>{a.cost}</dd>
                    </div>
                    <div>
                      <dt className="text-[11px] text-[#666]">予約数</dt>
                      <dd className={`text-[17px] font-bold md:text-[20px] ${a.best ? GOLD : ''}`}>{a.count}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </Reveal>
            <ArrowRight aria-hidden="true" className="mx-auto rotate-90 text-[#c4a06a] lg:rotate-0" size={40} />
            <Reveal delay={0.1} className="border border-[#c4a06a] bg-white px-6 py-8 text-center">
              <p className="text-[15px] font-bold">成果の良い広告へ</p>
              <p className={`mt-1 text-[28px] font-bold tracking-[0.12em] ${GOLD}`}>予算を集中</p>
              <div className="mt-5 bg-[#ece3d4] px-4 py-5">
                <p className={`text-[13px] font-bold ${GOLD}`}>広告 B</p>
                <p className="mt-1 text-[16px] font-bold">
                  予約数 <span className={`text-[34px] ${GOLD}`}>増加</span>
                </p>
              </div>
              <p className="mt-5 text-[13.5px] leading-[1.8]">成果の良い広告へ予算を寄せ、予約数を伸ばしていきます。</p>
            </Reveal>
          </div>
          <p className="mt-6 text-right text-[11.5px] text-[#888]">※広告クリエイティブ・評価はイメージです。</p>
        </div>
      </section>

      {/* 料金 */}
      <section id="price" className="scroll-mt-24 py-16 md:py-28">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <Kicker>Price</Kicker>
            <H2>
              固定費ゼロ。
              <br />
              費用は成果が出た分だけ。
            </H2>
            <p className="mt-6 text-[15px] leading-[2] text-[#3d3a35]">成果が発生した分だけ、FAISEにお支払いいただく料金体系です。</p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {fees.map((f, i) => (
              <Reveal key={f.k} delay={i * 0.06} className="border border-[#e3d7c2] bg-[#f4efe7] px-6 py-7 text-center">
                <p className="text-[14px] font-bold">{f.k}</p>
                <p className="mt-2 font-inter text-[44px] font-semibold leading-none text-[#c4a06a]">
                  0<span className="text-[24px]">円</span>
                </p>
              </Reveal>
            ))}
          </div>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <Reveal className="border border-[#e3d7c2] bg-white px-6 py-6 text-center">
              <p className="text-[14px] font-bold">広告費</p>
              <p className="mt-2 text-[20px] font-bold">クリニック様負担</p>
            </Reveal>
            <Reveal delay={0.06} className="border border-[#e3d7c2] bg-white px-6 py-6 text-center">
              <p className="text-[14px] font-bold">成果報酬</p>
              <p className={`mt-2 text-[20px] font-bold ${GOLD}`}>成果1件ごと 個別設定※</p>
            </Reveal>
          </div>
          <Reveal className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-end">
            <div className="text-[13.5px] leading-[1.9] text-[#444]">
              <p className="font-bold text-[#1c1a17]">成果地点の例</p>
              <p className="mt-1">LINE友だち追加 / カウンセリング予約 など</p>
              <p>クリニック様の予約導線に応じて、成果地点を事前に設定します。</p>
              <p className="mt-2 text-[12px] text-[#777]">※重複予約・既存患者様・虚偽または明らかな対象外予約等は成果対象外</p>
              <p className="mt-1 text-[12px] text-[#777]">※成果地点および成果報酬額は、対象施術・平均単価・予約導線・現在の集客状況等をもとに個別に設定します。</p>
            </div>
            <p className="text-[18px] font-bold leading-[1.7] md:text-right md:text-[20px]">
              成果が出た分だけ。
              <br />
              始めやすい料金体系。
            </p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-[#ece3d4] bg-[#f4efe7] py-16 md:py-24">
        <div className={`${container} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16`}>
          <Reveal>
            <Kicker>FAQ</Kicker>
            <H2>{c.faq.h2.ja}</H2>
          </Reveal>
          <FaqList items={c.faq.items.map((f) => ({ q: f.q.ja, a: f.a.ja }))} divider="divide-[#e3d7c2] border-[#e3d7c2]" />
        </div>
      </section>

      {/* 集客ガイド（解説記事への内部リンク） */}
      <section className="py-16 md:py-24">
        <div className={`${container} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16`}>
          <Reveal>
            <Kicker>Guide</Kicker>
            <H2>集客ガイド</H2>
            <div className="mt-6">
              <ArrowLink href="/clinic/guide">すべて見る</ArrowLink>
            </div>
          </Reveal>
          <ul className="divide-y divide-[#e3d7c2] border-y border-[#e3d7c2]">
            {guides.map((g) => (
              <li key={g.slug}>
                <Link href={`/clinic/guide/${g.slug}`} className="group flex items-center justify-between gap-4 py-5">
                  <span className="text-[15.5px] font-medium leading-[1.7] tracking-[0.02em] text-[#222] group-hover:text-[#a8854f]">{g.h1}</span>
                  <ChevronRight size={16} strokeWidth={1.5} className="shrink-0 text-[#a8854f]" aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* クロージング */}
      <section className="relative overflow-hidden bg-[#efe9df]">
        <img src={img('contact-bg')} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover object-right" />
        <div className={`${container} relative py-20 md:py-32`}>
          <Reveal className="max-w-[640px]">
            <h2 className="text-[clamp(26px,3.6vw,44px)] font-bold leading-[1.5] tracking-[0.06em]">
              まずは、貴院の集客について
              <br />
              ご相談ください。
            </h2>
            <p className="mt-7 text-[15px] leading-[2.1] text-[#3d3a35]">
              集客を強化したい施術や現在の集客状況を伺い、
              <br className="hidden md:block" />
              貴院に合ったインフルエンサー活用・広告施策をご提案します。
            </p>
            <div className="mt-9">
              <ConsultButton />
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  )
}
