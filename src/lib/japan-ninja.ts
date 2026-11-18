// LAUNCH NINJA by Faise（/en/japan-launch の英語LP。旧仮称 JAPAN NINJA）専用の文言とデータ。
// 日本語版（/japan-launch）は従来の JapanLaunchView のまま。共通の内容（対象・Why Japan・契約形態・販路・事例・FAQ・フォーム）は japan-launch.ts を使う。
// 方針：自分たちを笑えるユーモアで見せつつ、数字と中身は真面目に出す。史実は断定しない（"Legend says..." の書き方）。
// 数字は創作しない。未確定の数値は {{TODO: 数値}} のプレースホルダーで表示し、コメントで明示する。

export const NINJA_NAME = 'LAUNCH NINJA by Faise'
export const SCAN_ANCHOR = 'scan'
export const CTA_LABEL = 'Book a 30-min call' // 主CTA：オンライン面談
export const SCAN_LABEL = 'Get a free Japan Scan' // 副CTA
// TODO: 要記入 — 面談予約ページ（Calendly / TimeRex / Google カレンダーの予約ページなど）の URL。
// 空のあいだは、主CTAもページ下部のフォーム（#scan：面談のリクエスト）へ移動する
export const BOOKING_URL = ''
// TODO: 要記入 — 法人番号（13桁）。入れると信頼バーと会社情報・構造化データに表示される
export const CORPORATE_NUMBER = ''
export const CTA_NOTE = 'English · Zoom or Google Meet · No commitment · NDA on request'

export const ninjaMeta = {
  title: 'Japan Distributor & Makuake Launch Partner | LAUNCH NINJA by Faise',
  description:
    'Tokyo-based partner for overseas consumer brands. Exclusive distribution, Makuake launches, Amazon & Rakuten, and Giteki/PSE coordination. Book a free 30-min call.',
  // AI 検索・要約で引用されやすい定義文（ページ上部にも表示）
  definition:
    'LAUNCH NINJA by Faise is a Tokyo-based Japan market entry service for overseas consumer brands, offering exclusive distribution, Makuake crowdfunding launches, Amazon and Rakuten sales, influencer marketing, and Giteki/PSE coordination with partners.',
}

// 上部メニュー（LP 内のセクションへ）
export const ninjaNav = [
  { label: 'About', href: '#about' },
  { label: 'Promises', href: '#promises' },
  { label: 'Case', href: '#case' },
  { label: 'Terms', href: '#terms' },
  { label: 'Flow', href: '#flow' },
  { label: 'FAQ', href: '#faq' },
]

export const ninjaHero = {
  eyebrow: NINJA_NAME,
  kicker: 'Japan has unwritten rules. Your brand needs a ninja.',
  h1: ['Launch your product in Japan.', 'Exclusive distribution and Makuake, handled by a Tokyo team.'],
  sub: 'We take overseas consumer products to Japan: exclusive distribution, Makuake launches, Amazon and Rakuten, and Giteki/PSE coordination with our partners. You keep making great products.',
  note: 'For makers of gadgets, lifestyle and beauty products. No Japanese entity needed.',
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
  title: 'sample — japan-scan',
  note: '※ Sample output — illustrative, not real data',
}

export type NinjaKey = 'hanzo' | 'basho' | 'chiyome' | 'kotaro'

// 4人のキャラクター。逸話は伝承として書く（史実と断定しない）。色はテーマカラー。
export const clan: {
  key: NinjaKey
  name: string
  role: string
  does: string // カード下部の担当業務（短く）
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
    does: 'Japan strategy · pricing · channels',
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
    does: 'Story · product pages · video',
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
    does: 'Influencers · creator content',
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
    role: 'Growth Marketer',
    does: 'Ads · Amazon & Rakuten · retail',
    legend: 'Leader of the Fuma clan, famed for night raids for the Hojo.',
    catch: 'Raided at night. Now raids Rakuten rankings.',
    color: '#2E2E2E',
    accent: '#F08A3C',
    img: '/images/japan-ninja/kotaro',
    alt: 'Illustration of Kotaro, a growth-marketer ninja in charcoal and orange holding a kunai and a rising sales chart',
  },
]

// 「LAUNCH NINJA とは？」（ファーストビュー直下の大見出し＋4人のカード）
export const about = {
  label: 'Who we are',
  pre: 'What is',
  title: 'LAUNCH NINJA?',
  lead: ['A strangely quiet clan', 'that launches brands in Japan.'],
  ribbon: 'Who are we?',
}

// 業務対応範囲（Faise／パートナー）。Faise の担当には忍者を添える
// TODO: 要確認 — 自社対応か連携かの最終判断
export const service = {
  label: 'Service',
  h2: ['Everything from strategy to sales —', 'the clan handles it.'],
  faise: [
    { name: 'Japan market strategy', ninja: 'hanzo' as NinjaKey },
    { name: 'Pricing & positioning', ninja: 'hanzo' as NinjaKey },
    { name: 'Localization of story & claims', ninja: 'basho' as NinjaKey },
    { name: 'Japanese product pages', ninja: 'basho' as NinjaKey },
    { name: 'Short video & content', ninja: 'basho' as NinjaKey },
    { name: 'Makuake page & launch', ninja: 'chiyome' as NinjaKey },
    { name: 'Influencer casting', ninja: 'chiyome' as NinjaKey },
    { name: 'Ads (Meta, Google, Amazon)', ninja: 'kotaro' as NinjaKey },
    { name: 'Amazon & Rakuten operations', ninja: 'kotaro' as NinjaKey },
    { name: 'Retail expansion', ninja: 'kotaro' as NinjaKey },
  ],
  partnerTitle: 'With our partners',
  partner: ['Import', 'PSE & Giteki', 'Logistics', 'Japanese customer support'],
}

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
  h2: 'Questions about terms, costs or compliance?',
  body: 'Talk to us for 30 minutes. We’ll answer them for your product — and send a free Japan Scan after the call.',
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
// TODO: 要記入 — 各ステップの目安期間（週）。決まったら step に when を足して表示する
export const flow = {
  label: 'How it works',
  h2: ['From first call', 'to launch day.'],
  note: 'Timing depends mostly on certification. You get a week-by-week timeline in the proposal.',
  steps: [
    { title: 'Call (30 min)', body: 'Your product, current channels and goals. Ask us anything.', ninja: 'hanzo' as NinjaKey },
    { title: 'Free Japan Scan', body: 'Buyer, price band, claims that land, channels and compliance flags.', ninja: 'hanzo' as NinjaKey },
    { title: 'Proposal & terms', body: 'Model, deal terms and every cost line, in writing.', ninja: 'hanzo' as NinjaKey },
    { title: 'NDA & agreement', body: 'Exclusivity scope, pricing and exit terms signed.', ninja: 'hanzo' as NinjaKey },
    { title: 'Compliance & import', body: 'PSE, Giteki, labels and import run with our partners.', ninja: 'hanzo' as NinjaKey },
    { title: 'Localize', body: 'Story, product pages, Makuake page and video for Japanese buyers.', ninja: 'basho' as NinjaKey },
    { title: 'Launch', body: 'Makuake or marketplace launch, with creators going first.', ninja: 'chiyome' as NinjaKey },
    { title: 'Scale', body: 'Amazon, Rakuten, ads, then retail.', ninja: 'kotaro' as NinjaKey },
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
  label: 'Book a call',
  h2: 'Let’s see if Japan fits your product.',
  body: 'Book a 30-minute call. We’ll ask about your product, current channels and goals, and tell you honestly whether Japan makes sense. After the call you get a free one-page Japan Scan within 2 business days: your Japanese buyer, price band, claims that land, best channels and compliance flags.',
  formNote: 'Prefer email? Send the form — we’ll reply with times for a call within 2 business days.',
}

// 信頼バー（ヒーロー直下）。事実のみ
export const trustBar = ['Faise Inc. — registered in Japan', 'Based in Tokyo', 'Founded December 2025', 'CEO: ex-Sony, ex-Katana marketer', 'NDA on request', 'We work in English']

// 対象（Kickstarter などで実績のあるメーカー）
export const whoFor = {
  label: 'Who it’s for',
  h2: ['Built for makers who are ready for Japan —', 'even if Japan wasn’t in the plan.'],
  items: [
    'You’ve proven demand on Kickstarter, Indiegogo or your own store.',
    'You don’t have a Japanese entity, team or importer.',
    'You make consumer products: gadgets, lifestyle or beauty.',
    'You’d rather not spend months learning Japan’s rules yourself.',
  ],
  categories: [
    { img: 'gadgets', title: 'Gadgets & hardware', body: 'Audio, smart home, outdoor tech, accessories — including Giteki and PSE products.' },
    { img: 'lifestyle', title: 'Lifestyle', body: 'Home, kitchen, travel and outdoor goods with a story worth retelling.' },
    { img: 'beauty', title: 'Beauty & skincare', body: 'Skincare and beauty devices for ingredient-savvy Japanese buyers.' },
  ],
}

// 協業の形（3つ）
export const waysToWork = {
  label: 'Ways to work',
  h2: ['Three ways to', 'launch in Japan.'],
  items: [
    {
      name: 'Exclusive Distribution',
      title: 'We become your exclusive partner in Japan.',
      body: 'Import (with our partners), launch, sales and marketing — handled as one team, for an agreed term.',
      best: 'Best if you want Japan handled end-to-end.',
    },
    {
      name: 'Makuake Launch',
      title: 'We launch you on Makuake.',
      body: 'We plan and run your launch on Makuake, one of Japan’s best-known crowdfunding platforms for new products, then carry the momentum into Amazon, Rakuten and retail.',
      best: 'Best if you’ve just finished a Kickstarter or Indiegogo campaign.',
    },
    {
      name: 'Marketing Only',
      title: 'You keep your setup. We run the marketing.',
      body: 'Keep your current distributor or Amazon setup. We run localization, influencers, content and ads in Japan.',
      best: 'Best if you already sell in Japan but sales are flat.',
    },
  ],
  note: 'Models can be combined — for example, a Makuake launch first, then exclusive distribution.',
}

// 取引条件の目安。
// TODO: 要記入 — 標準の独占期間・最低発注数の有無・モデル別の費用・支払条件（前払い/後払い・サイト）・解約条件が決まったら、value を具体的な条件に差し替える。
// 現在の value は「契約で何を決めるか」の説明のみで、数値や約束は入れていない
export const terms = {
  label: 'Deal terms',
  h2: 'Deal terms, in plain English.',
  lead: 'Every deal is tailored to the product, but these are the points we agree in writing — before anything ships.',
  rows: [
    { item: 'Exclusivity term', value: 'A fixed, renewable term written into the agreement. The length is agreed per product.' },
    { item: 'Territory & scope', value: 'Japan. Exclusivity can be scoped by channel (for example, online only) so it fits your existing setup.' },
    { item: 'Minimum commitment', value: 'Discussed openly up front. Any first-order quantity is based on the Japan Scan, not a fixed number.' },
    { item: 'Costs', value: 'Depends on the model. Every cost line is in the proposal before you sign — no surprises later.' },
    { item: 'Wholesale pricing', value: 'A wholesale price per SKU, set from the Japanese retail price band we propose together.' },
    { item: 'Payment terms', value: 'Timing and method are agreed in the contract. Tell us your standard terms and we start from there.' },
    { item: 'Review & exit', value: 'Review points and exit terms are written into the agreement, so neither side is locked in blindly.' },
  ],
}

// 法規対応の分担。lead = 主担当、support = 協力
// TODO: 要確認 — 輸入者（Importer of record）・PSE 届出事業者・技適の申請者を、自社かパートナーかで確定させる
export const compliance = {
  label: 'Compliance',
  h2: ['Giteki, PSE, labels and import —', 'who does what.'],
  lead: 'Requirements depend on the product. We flag them in the Japan Scan and confirm them before anything ships.',
  cols: ['Faise', 'You', 'Our partners'],
  rows: [
    { item: 'Checking which rules apply', cells: ['lead', 'support', 'support'] },
    { item: 'Importer of record', cells: ['support', '', 'lead'] },
    { item: 'PSE (electrical products)', cells: ['support', 'support', 'lead'] },
    { item: 'Giteki (Bluetooth, Wi-Fi and other radio)', cells: ['support', 'support', 'lead'] },
    { item: 'Japanese labels & manuals', cells: ['lead', 'support', ''] },
    { item: 'Customs & logistics', cells: ['support', '', 'lead'] },
    { item: 'Japanese customer support', cells: ['support', '', 'lead'] },
  ] as { item: string; cells: ('lead' | 'support' | '')[] }[],
  legend: { lead: 'Leads', support: 'Supports' },
  youNote: 'From you: technical documents and test reports you already have (for example FCC/CE reports), product samples and approvals.',
}

// 既存チャネルとの関係
export const existing = {
  label: 'Your current channels',
  h2: ['Already on Amazon, or working', 'with a distributor? That’s fine.'],
  items: [
    'We map your current channels first — Amazon Japan, cross-border sellers and any distributors in Asia.',
    'Exclusivity can be scoped by channel, so it doesn’t clash with what already works.',
    'Pricing rules are agreed in writing to protect your existing partners and your brand.',
  ],
}

// Makuake の説明（数字は出典付きで確定してから足す）
// TODO: 要記入 — Makuake の規模（プロジェクト数・応援総額など）を、出典と年月つきで追加する
export const makuake = {
  title: 'What is Makuake?',
  body: 'Makuake is one of Japan’s best-known crowdfunding platforms for launching new products to early adopters. It works like a Japanese Kickstarter, and many buyers and retailers watch it for what’s new. A strong Makuake launch gives you Japanese reviews, buzz and a sales record to take to Amazon, Rakuten and stores.',
}

// 会社情報
export const companyFacts = {
  label: 'Company',
  h2: 'Who you’ll be working with.',
  rows: [
    { k: 'Company', v: 'Faise Inc. (株式会社Faise)' },
    { k: 'Service', v: 'LAUNCH NINJA by Faise' },
    { k: 'Founded', v: 'December 2025' },
    { k: 'Address', v: '4-18-25 Oi, Shinagawa-ku, Tokyo 140-0014, Japan' },
    { k: 'CEO', v: 'Haruto Fukunaga (ex-Sony, ex-Katana)' },
    { k: 'Languages', v: 'English and Japanese' },
  ],
  verifyNote: 'You can verify Faise Inc. on Japan’s National Tax Agency corporate number registry.',
}

// FAQ（英語LP専用。日本語ページの faq とは別）
// 回答は最初の一文で結論を言う（AI 検索に引用されやすい書き方）。未確定の条件は断定しない
export const ninjaFaq = {
  label: 'FAQ',
  h2: 'Frequently asked questions about selling in Japan',
  items: [
    {
      q: 'What does exclusive distribution in Japan look like with you?',
      a: 'Faise becomes your single partner for Japan for an agreed, renewable term. The term, territory and channel scope are written into a distribution agreement before anything ships, and exclusivity can be limited to specific channels if you already sell in Japan.',
    },
    {
      q: 'Is there a minimum order or sales commitment?',
      a: 'We agree it openly before signing. If a first order is needed, the quantity is based on the Japan Scan and the launch plan, not a fixed number.',
    },
    {
      q: 'Who pays for what? Are there upfront costs or risks for us?',
      a: 'It depends on the model you choose. Every cost line — what you pay, what Faise pays and what goes to partners — is listed in the proposal before you sign, so you can judge the risk up front.',
    },
    {
      q: 'What are the wholesale pricing and payment terms?',
      a: 'We agree a wholesale price per SKU, based on the Japanese retail price band we propose together. Payment timing and method are agreed in the contract; tell us your standard terms and we start from there.',
    },
    {
      q: 'Why do you think our product will sell in Japan?',
      a: 'We don’t guess. The free Japan Scan compares your product with local competitors, price bands and the claims Japanese buyers respond to. If we don’t think it will work, we say so before you spend anything.',
    },
    {
      q: 'What have you done before?',
      a: 'We run the Japan expansion of Cyspera, a skincare product from the Swiss brand scientis: sales on Amazon Japan and online stores, ad operations and creator content with Japanese influencers. Our CEO also brings marketing experience from Sony and Katana, a Japanese marketing firm.',
    },
    {
      q: 'What is Makuake?',
      a: 'Makuake is one of Japan’s best-known crowdfunding platforms for launching new products. It works like a Japanese Kickstarter: early adopters back new products, and a strong launch gives you Japanese reviews and a sales record to take to Amazon, Rakuten and retailers.',
    },
    {
      q: 'We already ran a Kickstarter or Indiegogo campaign. Can we still launch on Makuake?',
      a: 'In many cases, yes — Makuake is about launching to Japanese buyers. Makuake has its own rules, for example on products already sold in Japan, so we check your product’s eligibility before planning the launch.',
    },
    {
      q: 'Who handles Giteki, PSE, Japanese labels and import?',
      a: 'Our partners lead import, PSE, Giteki, logistics and customer support; Faise checks which rules apply, coordinates the work and handles Japanese labels and manuals. From you we need the technical documents and test reports you already have, and product samples.',
    },
    {
      q: 'Do we need a Japanese company to sell in Japan?',
      a: 'No. A partner in Japan can act as the importer of record, so you don’t need your own Japanese entity to start.',
    },
    {
      q: 'We already sell on Amazon Japan or have a distributor. Will this conflict?',
      a: 'Not if we plan it together. We map your current channels first, scope exclusivity by channel where needed, and agree pricing rules in writing so existing partners are protected.',
    },
    {
      q: 'How long does it take to launch?',
      a: 'It depends mostly on certification. Products that already meet Japanese requirements can move much faster than ones that need Giteki or PSE work. You get a week-by-week timeline in the proposal.',
    },
    {
      q: 'Who will we work with, and in what language?',
      a: 'You work directly with the Faise team in Tokyo, led by CEO Haruto Fukunaga. We work in English, by email and video call.',
    },
    {
      q: 'How do we know Faise is a real, reliable company?',
      a: 'Faise Inc. is a company registered in Japan, founded in December 2025 and based in Tokyo. You can verify it on Japan’s National Tax Agency corporate number registry, and our CEO’s background is public on LinkedIn. We’re happy to sign an NDA before you share anything.',
    },
  ],
}
