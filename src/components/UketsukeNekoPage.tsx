'use client'

import Link from 'next/link'
import { ChevronRight, PawPrint, Check, ArrowRight } from 'lucide-react'
import Nav from './Nav'
import CTA from './CTA'
import PageCurtain from './PageCurtain'
import FaqList from '@/components/FaqList'
import { Reveal, ScrollProgress, container } from './ui'
import { neko } from '@/lib/uketsuke-neko'

// 受付ネコの手（クリニックのLINE返信をAIが下書き）の LP。
// 内容はご紹介資料（PDF）に書かれている事実だけ。画面はイメージとして表示する。
const TEAL = 'text-[#2b6d65]'

function NekoLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className={`flex items-center gap-2.5 font-inter text-[11px] md:text-[12px] font-medium tracking-[0.26em] uppercase ${TEAL}`}>
      <PawPrint size={14} strokeWidth={2} aria-hidden="true" />
      {children}
    </p>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-5 text-[clamp(22px,3vw,36px)] font-bold leading-[1.55] tracking-[0.02em] text-[#1d2b29]">{children}</h2>
}

function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-bold tracking-[0.04em] text-[#1f4f49] ${className}`}>
      <PawPrint className="h-[1.1em] w-[1.1em]" strokeWidth={2.2} aria-hidden="true" />
      受付ネコの手
    </span>
  )
}

function ConsultButton({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#contact"
      className={`group inline-flex items-center gap-3 rounded-full px-8 py-4 text-[14px] font-bold tracking-[0.06em] transition-all duration-300 hover:shadow-[0_14px_30px_-14px_rgba(31,79,73,0.6)] ${
        light ? 'bg-white text-[#1f4f49]' : 'bg-[#2b6d65] text-white hover:bg-[#1f4f49]'
      }`}
    >
      {neko.cta}
      <ArrowRight size={16} strokeWidth={2} className="transition-transform duration-300 group-hover:translate-x-1" />
    </a>
  )
}

function Avatar() {
  return <img src="/images/uketsuke-neko/avatar.png" alt="" className="h-9 w-9 shrink-0 rounded-full" />
}

// 資料 2 ページ目「スタッフ画面」のイメージを HTML で再現
function StaffScreen() {
  return (
    <div className="overflow-hidden rounded-xl border border-[#e2dccd] bg-white shadow-[0_24px_60px_-36px_rgba(31,79,73,0.55)]">
      <div className="flex items-center justify-between border-b border-[#ece6d8] bg-[#f8f4ec] px-5 py-3">
        <p className="text-[12.5px] tracking-[0.04em] text-[#666]">LINE 問い合わせ｜スタッフ画面</p>
        <span className="rounded-full border border-[#2b6d65] px-3 py-0.5 text-[11px] font-medium text-[#2b6d65]">画面イメージ</span>
      </div>
      <div className="grid gap-5 p-5 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)] md:p-6">
        <div>
          <p className="flex items-center gap-2 text-[13px] font-bold text-[#333]">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2b6d65] text-[11px] text-white">1</span>患者さまの質問
          </p>
          <p className="mt-2.5 inline-block rounded-2xl rounded-tl-sm bg-[#f0efec] px-4 py-3 text-[14.5px] text-[#222]">「明日の予約を別の日に変えたいです」</p>

          <div className="mt-5 rounded-lg border-2 border-dashed border-[#9cc3bc] bg-[#eef6f4] p-4">
            <div className="flex flex-wrap items-center gap-2">
              <Avatar />
              <p className="flex items-center gap-2 text-[13px] font-bold text-[#2b6d65]">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2b6d65] text-[11px] text-white">2</span>AI の返信案
              </p>
              <span className="rounded-full border border-[#2b6d65]/50 bg-white px-2.5 py-0.5 text-[11px] text-[#2b6d65]">未送信</span>
              <span className="rounded-full border border-[#2b6d65]/50 bg-white px-2.5 py-0.5 text-[11px] text-[#2b6d65]">貴院の案内・キャンセル規定を反映</span>
            </div>
            <p className="mt-3 text-[14px] leading-[1.9] text-[#333]">
              「ご連絡ありがとうございます。ご予約の変更は、ご希望の日時をいくつかお送りいただければ、スタッフが確認してご案内いたします。なお、
              <span className="font-bold text-[#2b6d65]">〇日前以降</span>の変更・キャンセルは<span className="font-bold text-[#2b6d65]">当院のキャンセル規定</span>の対象となります。」
            </p>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
            <p className="flex items-center gap-2 text-[13px] font-bold text-[#333]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-[#2b6d65] text-[11px] text-white">3</span>スタッフの操作
            </p>
            <div className="flex gap-2.5">
              <span className="rounded-full border-2 border-[#2b6d65] px-5 py-2 text-[13px] font-bold text-[#2b6d65]">編集する</span>
              <span className="rounded-full bg-[#2b6d65] px-5 py-2 text-[13px] font-bold text-white">確認して送信</span>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-[#f8f4ec] p-4">
          <p className="text-[13px] font-bold text-[#555]">医療寄りの質問の場合</p>
          <p className="mt-2.5 rounded-xl bg-white px-4 py-3 text-[14px] leading-[1.8] text-[#222] shadow-sm">「ダウンタイム中にメイクしてもいいですか？」</p>
          <p className="mx-auto mt-3 w-fit rounded-full border-2 border-[#e5b94a] bg-[#fdf3d4] px-5 py-1.5 text-[13.5px] font-bold text-[#6b5313]">スタッフ確認</p>
          <p className="mt-3 text-[13.5px] font-bold leading-[1.8] text-[#1f4f49]">AI は自動送信しません。スタッフが確認して返信します。</p>
        </div>
      </div>
    </div>
  )
}

export default function UketsukeNekoPage() {
  const n = neko
  return (
    <main className="bg-white text-[#1d2b29]">
      <PageCurtain />
      <ScrollProgress />
      <Nav base="/" />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#f8f4ec] pt-24 md:pt-28">
        <div className={`${container} relative`}>
          <nav aria-label="breadcrumb" className="mb-6 flex items-center gap-2 pt-4 text-[12.5px] tracking-[0.04em] text-[#777]">
            <Link href="/" className="transition-colors hover:text-[#2b6d65]">ホーム</Link>
            <ChevronRight size={13} strokeWidth={1.5} aria-hidden="true" />
            <span aria-current="page" className="text-[#111]">受付ネコの手</span>
          </nav>
        </div>
        <div className="relative">
          <div className="absolute inset-0 md:left-[38%]">
            <img src="/images/uketsuke-neko/hero.jpg" alt="受付カウンターで前足を差し出すナース服のネコのイメージ" className="h-full w-full object-cover object-[70%_center]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f8f4ec] via-[#f8f4ec]/70 to-transparent md:via-[#f8f4ec]/10" />
          </div>
          <div className={`${container} relative py-14 md:py-28`}>
            <Reveal className="max-w-[560px]">
              <Logo className="text-[20px] md:text-[24px]" />
              <h1 className="mt-6 text-[clamp(34px,5.6vw,60px)] font-bold leading-[1.35] tracking-[0.02em]">
                忙しい受付に、
                <br />
                ネコの手を。
              </h1>
              <p className="mt-6 text-[15.5px] md:text-[17px] font-medium leading-[1.95] text-[#333]">
                クリニックの LINE 返信を、AI が下書き。
                <br />
                毎回一から書く手間を減らします。
              </p>
              <div className="mt-6 rounded-lg bg-white/85 px-5 py-4 backdrop-blur-sm md:bg-white/70">
                <p className={`text-[15px] font-bold ${TEAL}`}>乗り換え不要。</p>
                <p className="mt-1 text-[13.5px] leading-[1.85] text-[#333]">Lステップ・エルメ・LINE公式アカウントを、今の運用を変えずにそのままお使いいただけます。</p>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <ConsultButton />
                <a href="#price" className="text-[13.5px] font-medium text-[#2b6d65] underline decoration-[#2b6d65]/40 underline-offset-4">料金を見る</a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* お悩み */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <NekoLabel>Problem</NekoLabel>
            <H2>
              受付やお会計の合間に、
              <br />
              LINE の返信文を
              <br />
              毎回考えていませんか？
            </H2>
            <p className="mt-6 text-[15px] leading-[2] text-[#444]">
              返信の下書きは AI に。スタッフは必要な情報を確認し、文面を整えて送信できます。
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-2xl bg-[#eef6f4] p-6 md:p-8">
              <p className="text-[13px] font-bold text-[#2b6d65]">患者さまから届く LINE の例</p>
              <ul className="mt-4 space-y-3">
                {n.messages.map((m) => (
                  <li key={m} className="w-fit max-w-full rounded-2xl rounded-tl-sm bg-white px-5 py-3.5 text-[15px] leading-[1.75] shadow-[0_8px_20px_-16px_rgba(0,0,0,0.4)]">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 返信案ができるまで */}
      <section id="how" className="scroll-mt-24 bg-[#f8f4ec] py-16 md:py-28">
        <div className={container}>
          <Reveal className="max-w-4xl">
            <NekoLabel>How it works</NekoLabel>
            <H2>LINE が届くと、返信案がここまでできています。</H2>
            <p className="mt-5 text-[15px] leading-[2] text-[#444]">
              患者さまの質問に、貴院の案内やキャンセル規定を反映した返信案を AI が用意します。スタッフは内容を確認し、必要なら編集して送信するだけ。症状などの医療寄りの質問は、必ずスタッフが確認して返信します。
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-10 md:mt-14">
            <StaffScreen />
          </Reveal>
        </div>
      </section>

      {/* お会計中 → あと */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal className="lg:order-2">
            <NekoLabel>Timing</NekoLabel>
            <H2>
              お会計中に届いた LINE も、
              <br />
              手が空いたときには、
              <br />
              返信案ができています。
            </H2>
            <p className="mt-6 text-[15px] leading-[2] text-[#444]">LINE を開いたら、もう下書きがある。受付スタッフは、内容の確認から始められます。</p>
            <ol className="mt-8 grid gap-3 sm:grid-cols-2">
              <li className="rounded-xl border border-[#e2dccd] bg-white p-5">
                <p className="text-[12px] font-bold tracking-[0.08em] text-[#999]">お会計中</p>
                <p className="mt-2 rounded-2xl rounded-tl-sm bg-[#f0efec] px-4 py-2.5 text-[14px]">明日の予約を別の日に変えたいです</p>
                <p className="mt-3 text-[13px] font-medium text-[#2b6d65]">返信案を準備中…</p>
              </li>
              <li className="rounded-xl border-2 border-[#2b6d65]/50 bg-[#eef6f4] p-5">
                <p className="text-[12px] font-bold tracking-[0.08em] text-[#2b6d65]">お会計のあと</p>
                <p className="mt-2 text-[13.5px] leading-[1.8] text-[#333]">AI の返信案ができています。内容を確認して、編集・送信。</p>
              </li>
            </ol>
          </Reveal>
          <Reveal delay={0.1} className="lg:order-1">
            <img src="/images/uketsuke-neko/busy.jpg" alt="電話とパソコン対応に追われる受付のネコのイラスト" loading="lazy" className="w-full rounded-2xl object-cover" />
          </Reveal>
        </div>
      </section>

      {/* 採点と自動送信 */}
      <section className="bg-[#f8f4ec] py-16 md:py-28">
        <div className={container}>
          <Reveal className="max-w-3xl">
            <NekoLabel>Score &amp; Auto-send</NekoLabel>
            <H2>
              返信案をどれだけ書き直したか。
              <br />
              その差をもとに、AI が採点します。
            </H2>
          </Reveal>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-2xl border-2 border-[#2b6d65] bg-white p-6 md:p-8">
              <p className="w-fit rounded-full bg-[#2b6d65] px-4 py-1 text-[13px] font-bold text-white">最初の1カ月</p>
              <ol className="mt-6 grid gap-3 sm:grid-cols-3">
                {['AI が下書き', 'スタッフが必要に応じて修正・送信', 'AI が下書きと送信文を比較して採点'].map((s, i) => (
                  <li key={s} className="flex items-center gap-3 rounded-xl bg-[#f8f4ec] p-4 text-[14px] font-medium leading-[1.7] sm:flex-col sm:text-center">
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#2b6d65] text-[12px] font-bold text-white">{i + 1}</span>
                    {s}
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-[16px] font-bold leading-[1.8] text-[#1f4f49]">
                そのまま送れた返信案や、修正が少なかった返信案ほど、高いスコアが付きます。
              </p>
            </Reveal>
            <Reveal delay={0.1} className="rounded-2xl bg-white p-6 md:p-8">
              <p className="flex flex-wrap items-center gap-3">
                <span className="rounded-full bg-[#2b6d65] px-4 py-1 text-[13px] font-bold text-white">2カ月目以降</span>
                <span className="text-[15px] font-bold">自動送信は貴院が選べます</span>
              </p>
              <div className="mt-5 flex items-center gap-4 rounded-xl bg-[#f6f5f2] p-4">
                <span className="w-12 shrink-0 text-center text-[13px] font-bold text-[#888]">OFF</span>
                <p className="text-[14px] leading-[1.75]">これまでどおり、すべてスタッフが確認して送信</p>
              </div>
              <div className="mt-3 rounded-xl border border-[#9cc3bc] bg-[#eef6f4] p-4">
                <p className="flex items-center gap-4">
                  <span className="w-12 shrink-0 text-center text-[13px] font-bold text-[#2b6d65]">ON</span>
                  <span className="text-[14px] font-bold leading-[1.75]">次の2つを両方満たすときだけ自動送信</span>
                </p>
                <ul className="mt-3 space-y-2 pl-16 text-[14px] leading-[1.75]">
                  <li className="flex gap-2"><Check size={16} className="mt-1 shrink-0 text-[#2b6d65]" />院が許可した項目だけ（アクセス・持ち物・営業時間など）</li>
                  <li className="flex gap-2"><Check size={16} className="mt-1 shrink-0 text-[#2b6d65]" />設定した点数以上（例：8点以上）</li>
                </ul>
                <p className="mt-2 pl-16 text-[12.5px] text-[#666]">満たさないものは、スタッフが確認して送信</p>
              </div>
              <p className="mt-4 rounded-xl border-2 border-[#e5b94a] bg-[#fdf3d4] px-4 py-3 text-[14px] font-bold leading-[1.8] text-[#5a4510]">
                症状・副作用・施術を受けてよいかの判断・空き状況は、必ずスタッフが確認して送信
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 学習 */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid items-center gap-12 lg:grid-cols-2 lg:gap-20`}>
          <Reveal>
            <NekoLabel>Learning</NekoLabel>
            <H2>
              いつもの返信から AI が学び、
              <br />
              同じ一言を書き足す手間が
              <br className="hidden md:block" />
              減っていきます。
            </H2>
            <div className="mt-8 space-y-3 rounded-2xl bg-[#f8f4ec] p-6">
              <p className="text-[12px] font-bold tracking-[0.06em] text-[#888]">利用を重ねた場合のイメージ</p>
              <p className="rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-[14.5px]">「初回のカウンセリングは、どれくらいかかりますか？」</p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-[12px] font-bold text-[#888]">最初の下書き</p>
                  <p className="mt-1.5 text-[14.5px]">「約30分です。」</p>
                </div>
                <div className="rounded-xl border border-[#9cc3bc] bg-[#eef6f4] p-4">
                  <p className="text-[12px] font-bold text-[#2b6d65]">スタッフが送った返信</p>
                  <p className="mt-1.5 text-[14.5px]">「約30分です。<span className="bg-[#fdf3d4] font-bold">受付・問診を含めると約1時間です。</span>」</p>
                </div>
              </div>
              <p className="text-[14.5px] font-bold text-[#1f4f49]">次からは、この一言も下書きに入ります。</p>
            </div>
            <p className="mt-5 text-[14.5px] leading-[1.9] text-[#444]">効果は毎月レポートでお届けします。</p>
          </Reveal>
          <Reveal delay={0.1}>
            <img src="/images/uketsuke-neko/growth.jpg" alt="伸びていくグラフの横で喜ぶ受付のネコのイラスト" loading="lazy" className="w-full rounded-2xl object-cover" />
          </Reveal>
        </div>
      </section>

      {/* 料金 */}
      <section id="price" className="scroll-mt-24 bg-[#1f4f49] py-16 text-white md:py-28">
        <div className={container}>
          <Reveal className="text-center">
            <p className="flex items-center justify-center gap-2.5 font-inter text-[12px] font-medium uppercase tracking-[0.26em] text-white/80">
              <PawPrint size={14} strokeWidth={2} aria-hidden="true" />
              Price
            </p>
            <h2 className="mt-5 text-[clamp(22px,3vw,36px)] font-bold tracking-[0.04em]">ご利用料金</h2>
          </Reveal>
          <div className="mx-auto mt-10 grid max-w-[960px] gap-6 md:grid-cols-2">
            <Reveal className="rounded-2xl bg-white p-7 text-center text-[#1d2b29] md:p-9">
              <p className="text-[14px] font-bold text-[#666]">1院あたり</p>
              <p className="mt-2 text-[15px] font-bold">
                月額 <span className="font-inter text-[44px] font-bold tracking-tight text-[#2b6d65] md:text-[52px]">50,000</span> 円<span className="text-[13px]">（税込）</span>
              </p>
              <div className="mt-6 rounded-xl bg-[#fdf3d4] px-5 py-4">
                <p className="text-[13px] font-bold text-[#6b5313]">サービス開始記念｜先着50院</p>
                <p className="mt-1 text-[22px] font-bold">初期費用 0円</p>
              </div>
              <p className="mt-4 text-[12.5px] leading-[1.8] text-[#666]">先着50院の受付終了後は、初期費用300,000円（税込330,000円）です。</p>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-center rounded-2xl border border-white/25 bg-white/10 p-7 md:p-9">
              <p className="text-[14px] font-bold text-white/85">初月の月額利用料は</p>
              <p className="mt-2 text-[28px] font-bold leading-[1.4] md:text-[34px]">全額返金保証</p>
              <p className="mt-4 text-[14.5px] leading-[1.95] text-white/85">
                最初の1カ月、実際の受付業務でお使いいただき、貴院に合わない場合は初月の月額利用料を全額返金します。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-28">
        <div className={`${container} grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16`}>
          <Reveal>
            <NekoLabel>FAQ</NekoLabel>
            <H2>よくあるご質問</H2>
          </Reveal>
          <FaqList items={n.faq} />
        </div>
      </section>

      {/* クロージング */}
      <section className="relative overflow-hidden bg-[#f8f4ec]">
        <div className="grid lg:grid-cols-2">
          <img src="/images/uketsuke-neko/reception.jpg" alt="受付スタッフが来院した患者さまを笑顔で案内しているイメージ" loading="lazy" className="h-full max-h-[520px] w-full object-cover" />
          <div className="px-6 py-14 md:px-14 md:py-20">
            <Reveal>
              <h2 className="text-[clamp(22px,2.8vw,34px)] font-bold leading-[1.6] tracking-[0.02em]">
                LINE に追われる時間を減らし、
                <br />
                目の前の患者さまに
                <br />
                向き合える受付に。
              </h2>
              <p className="mt-6 text-[15px] leading-[2] text-[#444]">
                受付やお会計の合間に、何度も返信文を考える。「受付ネコの手」は、その手間を減らし、スタッフが来院された患者さまのご案内に時間を使えるよう支援します。
              </p>
              <p className="mt-6 text-[16px] font-bold leading-[1.8] text-[#1f4f49]">貴院の LINE 対応について、15分ほどお聞かせください。</p>
              <div className="mt-7">
                <ConsultButton />
              </div>
              <p className="mt-6 text-[12px] text-[#888]">提供：株式会社Faise</p>
            </Reveal>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  )
}
