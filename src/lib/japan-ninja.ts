// LAUNCH NINJA by Faise（/en/japan-launch の英語LP。旧仮称 JAPAN NINJA）専用の文言とデータ。
// 日本語版（/japan-launch）は従来の JapanLaunchView のまま。共通の内容（対象・Why Japan・契約形態・販路・事例・FAQ・フォーム）は japan-launch.ts を使う。
// 方針：自分たちを笑えるユーモアで見せつつ、数字と中身は真面目に出す。史実は断定しない（"Legend says..." の書き方）。
// 数字は創作しない。未確定の数値は {{TODO: 数値}} のプレースホルダーで表示し、コメントで明示する。

export const NINJA_NAME = 'LAUNCH NINJA by Faise'
export const SCAN_ANCHOR = 'scan'
export const CTA_LABEL = 'Get your free Japan Scan'

export const ninjaMeta = {
  title: 'LAUNCH NINJA by Faise | Japan Market Entry & Influencer Marketing for Overseas Brands',
  description:
    'Japan has unwritten rules. Faise is a Tokyo team that knows them — reviews, ingredients, Rakuten and Amazon, PSE and Giteki, Japanese social. We take overseas beauty, lifestyle and gadget brands into Japan. Start with a free Japan Scan.',
}

// 上部メニュー（LP 内のセクションへ）
export const ninjaNav = [
  { label: 'The Clan', href: '#clan' },
  { label: 'Promises', href: '#promises' },
  { label: 'Case', href: '#case' },
  { label: 'Flow', href: '#flow' },
  { label: 'FAQ', href: '#faq' },
]

export const ninjaHero = {
  eyebrow: NINJA_NAME,
  h1: ['Japan has unwritten rules.', 'Your brand needs a ninja.'],
  sub: 'We already know who’ll buy it, what they’ll say in reviews, and which hook makes them click.',
  note: 'For overseas brands in beauty, lifestyle and gadgets. No Japan plan needed.',
  clanAlt:
    'Illustration of the four Faise ninjas standing together in front of a night Tokyo skyline: Hanzo in indigo at the center, Basho in moss green, Chiyome in crimson and Kotaro in charcoal and orange',
}

// ターミナル風アニメーション（イメージ。実際の診断結果ではない）
export const terminal = {
  command: '$ ninja --scan yourbrand.com',
  lines: [
    { who: '[Hanzo]', label: 'Mapping the market...', value: 'Target: women 27–39, ingredient-savvy', tone: 'indigo' },
    { who: '[Hanzo]', label: 'Price band:', value: '¥4,000–6,000', tone: 'indigo' },
    { who: '[Basho]', label: 'Claim that lands:', value: '"transparent formula"', tone: 'moss' },
    { who: '[Basho]', label: 'Claim that won’t:', value: '"clean beauty"  ✗', tone: 'moss' },
    { who: '[Chiyome]', label: 'Creator fit:', value: 'skincare micro-creators (10–80k), high saves', tone: 'crimson' },
    { who: '[Kotaro]', label: 'Channel route:', value: 'Instagram → Rakuten → Amazon', tone: 'orange' },
  ],
  done: '✔ Japan Scan ready.',
  note: '※ Illustrative',
}

export type NinjaKey = 'hanzo' | 'basho' | 'chiyome' | 'kotaro'

// 4人のキャラクター。逸話は伝承として書く（史実と断定しない）。色はテーマカラー。
export const clan: {
  key: NinjaKey
  name: string
  role: string
  legend: string
  catch: string
  color: string
  accent: string
  img: string
  alt: string
}[] = [
  {
    key: 'hanzo',
    name: 'Hattori Hanzo',
    role: 'Strategist',
    legend: 'Guided Tokugawa Ieyasu safely through hostile Iga in 1582.',
    catch: 'Guided a shogun through enemy land. Now guides your brand through Japan.',
    color: '#2B3A67',
    accent: '#8EA2E0',
    img: '/images/japan-ninja/hanzo',
    alt: 'Illustration of Hanzo, a calm strategist ninja in indigo holding a tablet with a map of Japan',
  },
  {
    key: 'basho',
    name: 'Matsuo Basho',
    role: 'Localizer',
    legend: 'Born in Iga; legend says the haiku master was a ninja.',
    catch: 'Said everything in 17 syllables. Rewrites your story for Japanese hearts.',
    color: '#4F5D2F',
    accent: '#B7C48A',
    img: '/images/japan-ninja/basho',
    alt: 'Illustration of Basho, a poet-ninja copywriter in moss green holding a brush pen and a laptop',
  },
  {
    key: 'chiyome',
    name: 'Mochizuki Chiyome',
    role: 'Creator Caster',
    legend: 'Said to have led a nationwide network of traveling messengers for Takeda Shingen.',
    catch: 'Ran a nationwide network of messengers. Now runs ours: creators who move buyers.',
    color: '#9E1F35',
    accent: '#F29AAA',
    img: '/images/japan-ninja/chiyome',
    alt: 'Illustration of Chiyome, a kunoichi in crimson holding a smartphone on a mini ring light',
  },
  {
    key: 'kotaro',
    name: 'Fuma Kotaro',
    role: 'Commerce Operator',
    legend: 'Leader of the Fuma clan, famed for night raids for the Hojo.',
    catch: 'Raided at night. Now raids Rakuten rankings.',
    color: '#2E2E2E',
    accent: '#F08A3C',
    img: '/images/japan-ninja/kotaro',
    alt: 'Illustration of Kotaro, a growth-hacker ninja in charcoal and orange holding a kunai and a rising sales chart',
  },
]

export const clanSection = {
  label: 'Meet the Clan',
  h2: ['Four specialists.', 'One very quiet team.'],
  lead: 'Every Japan launch needs the same four skills. We gave each one a ninja — partly for fun, mostly so you remember who does what.',
  legendNote: 'Legend says...',
}

// 5 PROMISES：「Myth（海外ブランドの思い込み）」→「So we...」（so は "So we…" に続く文として、主語を省いて書く）
export const promises = {
  label: 'Why a ninja?',
  h2: ['5 promises', 'against 5 myths.'],
  lead: 'Most overseas brands arrive in Japan with the same five assumptions. Here’s what we do instead.',
  items: [
    { myth: 'Translate the English page and it’ll sell.', so: 'Rewrite your story for Japanese buyers, not just the words.', ninja: 'basho' as NinjaKey },
    { myth: 'A hit abroad is a hit in Japan.', so: 'Map local competitors and the claims that land before launch.', ninja: 'hanzo' as NinjaKey },
    { myth: 'Pick influencers by follower count.', so: 'Pick by saves, comments and buyer fit.', ninja: 'chiyome' as NinjaKey },
    { myth: 'List on Amazon and it sells.', so: 'Engineer the first reviews before we scale.', ninja: 'kotaro' as NinjaKey },
    { myth: 'Deal with certification and logistics later.', so: 'Run PSE, Giteki, import and CS in parallel with partners from day one.', ninja: 'hanzo' as NinjaKey },
  ],
}

// 中間CTA（PROMISES の後）
export const midCta = {
  h2: 'Curious what the ninjas would say about your brand?',
  body: 'Send us a product URL. We’ll send back a one-page Japan Scan — free.',
}

// What we handle：役割分担（ブランド／Faise／パートナー）。Faise の担当には対応する忍者を添える
// TODO: 要確認 — 自社対応か連携かの最終判断（japan-launch.ts の scope と合わせる）
export const handle = {
  label: 'What we handle',
  h2: ['You make it.', 'The clan takes it to Japan.'],
  brand: {
    title: 'Your side',
    items: ['Supplying products for Japan', 'Product information and existing assets (images, video)', 'Approving key decisions on pricing and brand'],
  },
  faise: {
    title: 'The clan',
    items: [
      { name: 'Japan market strategy', ninja: 'hanzo' as NinjaKey },
      { name: 'Localization of story, claims and pages', ninja: 'basho' as NinjaKey },
      { name: 'Content & short-video production', ninja: 'basho' as NinjaKey },
      { name: 'Influencer casting & promotion', ninja: 'chiyome' as NinjaKey },
      { name: 'Ads', ninja: 'kotaro' as NinjaKey },
      { name: 'Amazon, Rakuten & e-commerce operations', ninja: 'kotaro' as NinjaKey },
      { name: 'Retail expansion', ninja: 'kotaro' as NinjaKey },
    ],
  },
  partner: {
    title: 'With our partners',
    items: ['Import', 'Certification (PSE, Giteki, etc.)', 'Logistics', 'Japanese customer support'],
  },
}

// Cyspera の数値枠。
// TODO: 数値 — 以下の value はすべて未確定のプレースホルダー。実数（と期間・比較条件）が確定したら差し替える。数字は創作しないこと
export const caseMetrics = [
  { label: 'Monthly sales growth', value: '{{TODO: 数値}}', note: 'vs. launch month' },
  { label: 'Reels views', value: '{{TODO: 数値}}', note: 'across 3 creator posts' },
  { label: 'Reels saves', value: '{{TODO: 数値}}', note: 'across 3 creator posts' },
  { label: 'Reviews', value: '{{TODO: 数値}}', note: 'Amazon & online store' },
]

// FLOW：6ステップ
export const flow = {
  label: 'Flow',
  h2: ['From one URL', 'to a Japan launch.'],
  steps: [
    { title: 'Scan', body: 'Send a product URL. We return a free one-page Japan Scan.', ninja: 'hanzo' as NinjaKey },
    { title: 'Call', body: 'A short call to walk through the Scan and your goals.', ninja: 'hanzo' as NinjaKey },
    { title: 'Japan Plan', body: 'Target, price band, claims, channels and the partnership model.', ninja: 'hanzo' as NinjaKey },
    { title: 'Localize', body: 'Story, product pages and video rebuilt for Japanese buyers.', ninja: 'basho' as NinjaKey },
    { title: 'Creator launch', body: 'Creators from our network go first — and earn the first reviews.', ninja: 'chiyome' as NinjaKey },
    { title: 'Scale', body: 'Ads, Rakuten and Amazon, then retail.', ninja: 'kotaro' as NinjaKey },
  ],
}

// 創業者（the clan leader）。事実は経歴と「幼少期にアメリカで7年間」のみ
export const leader = {
  label: 'The clan leader',
  h2: 'Grew up between two countries. Now builds the bridge.',
  body: [
    'I spent seven years of my childhood in the United States. After coming back to Japan, I kept noticing great products that never made it here — and the ones that did often got lost in translation.',
    'Japanese buyers are demanding about quality and detail. A brand’s story has to be retold in Japanese words and Japanese culture. That’s the job of our clan.',
  ],
  signature: 'Haruto Fukunaga — CEO, Faise Inc. (the clan leader)',
}

// 最後の CTA（フォーム）
export const finalCta = {
  label: 'Free Japan Scan',
  h2: 'Get your free Japan Scan',
  body: 'Send us your product URL. Within 2 business days, you get a one-page Japan Scan: who your Japanese buyer is, which claims will land (and which won’t), price band, best channels, and the creator types to start with. Free. NDA on request.',
}
