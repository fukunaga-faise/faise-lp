// LAUNCH NINJA by Faise（/en/launch-ninja の英語LP。旧仮称 JAPAN NINJA）専用の文言とデータ。
// 日本語版（/japan-launch）は従来の JapanLaunchView のまま。共通の内容（対象・Why Japan・契約形態・販路・事例・FAQ・フォーム）は japan-launch.ts を使う。
// 方針：自分たちを笑えるユーモアで見せつつ、数字と中身は真面目に出す。史実は断定しない（"Legend says..." の書き方）。
// 数字は創作しない。未確定の数値は {{TODO: 数値}} のプレースホルダーで表示し、コメントで明示する。

export const NINJA_NAME = 'LAUNCH NINJA by Faise'
export const SCAN_ANCHOR = 'scan'
export const CTA_LABEL = 'Contact us' // 主CTA：ページ下部の問い合わせフォーム（#scan）へ
export const CTA_SHORT = 'Contact' // スマホのヘッダー用
// TODO: 要記入 — 法人番号（13桁）。入れると信頼バーと会社情報・構造化データに表示される
export const CORPORATE_NUMBER = ''
export const CTA_NOTE = 'Free · Reply within 2 business days · NDA on request'

export const ninjaMeta = {
  title: 'Japan Market Entry & Exclusive Distribution Partner | LAUNCH NINJA by Faise',
  description:
    'Tokyo-based partner for overseas consumer brands. Take an exclusive Japan license or keep your setup and let us run the marketing: e-commerce, Amazon & Rakuten, ads and influencers. Get a free Japan Scan.',
  // AI 検索・要約で引用されやすい定義文（ページ上部にも表示）
  definition:
    'LAUNCH NINJA by Faise is a Tokyo-based Japan market entry service for overseas consumer brands. Faise either takes an exclusive license and launches the product across Japanese channels (its own online store, Amazon, Rakuten, retail and more), or runs the Japan marketing for a brand’s existing setup — localization, ads and influencer marketing, with import and certification handled together with partners.',
}

// 上部メニュー（LP 内のセクションへ）
export const ninjaNav = [
  { label: 'About', href: '#about' },
  { label: 'Promises', href: '#promises' },
  { label: 'Case', href: '#case' },
  { label: 'Service', href: '#service' },
  { label: 'Flow', href: '#flow' },
  { label: 'FAQ', href: '#faq' },
]

export const ninjaHero = {
  eyebrow: NINJA_NAME,
  kicker: 'Japan has unwritten rules. Your brand needs a ninja.',
  h1: ['Launch your product in Japan.', 'Exclusive licensing or marketing — handled by a Tokyo team.'],
  sub: 'We take overseas consumer products to Japan — localization, our own online stores, Amazon and Rakuten, ads and influencers, with import and certification handled together with partners. You keep making great products.',
  note: 'For makers of gadgets, lifestyle and beauty products. No Japanese entity needed.',
  clanAlt:
    'Illustration of the four Faise ninjas standing together in front of a night Tokyo skyline: Hanzo in indigo at the center, Basho in moss green, Chiyome in crimson and Kotaro in charcoal and orange',
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
    { name: 'Launch campaigns & PR', ninja: 'chiyome' as NinjaKey },
    { name: 'Influencer casting', ninja: 'chiyome' as NinjaKey },
    { name: 'Ads (Meta, Google, Amazon)', ninja: 'kotaro' as NinjaKey },
    { name: 'Amazon & Rakuten operations', ninja: 'kotaro' as NinjaKey },
    { name: 'Retail expansion', ninja: 'kotaro' as NinjaKey },
  ],
  partnerTitle: 'With our partners',
  partner: ['Import', 'PSE & Giteki', 'Logistics', 'Japanese customer support'],
  channelsTitle: 'Where we sell',
  channels: ['Our own online stores', 'Amazon Japan', 'Rakuten Ichiba', 'Instagram · TikTok · YouTube', 'Crowdfunding (when it fits)', 'Specialty & lifestyle stores'],
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
  h2: 'Curious what the clan would do with your product?',
  body: 'Send us a message. We reply within 2 business days with a free one-page Japan Scan.',
}

// 実績：Cyspera（英語LP専用。日本語ページは japan-launch.ts の track.featured のまま）
export const cyspera = {
  stat: { value: '10,000+', label: 'units sold within three months of launch' },
  lead: 'We led the Japan launch of Cyspera, a skincare brand from the Swiss company scientis, and sold more than 10,000 units within three months of launch.',
  workLabel: 'Faise handled every part of the Japan go-to-market',
  work: [
    { title: 'Localization & positioning', body: 'We adapted the brand message and product information for Japanese consumers.' },
    { title: 'E-commerce', body: 'We built and ran the Japanese online store.', link: { href: 'https://www.luxora.shop/products/cyspera-dark-spot-treatment', label: 'luxora.shop' } },
    { title: 'Advertising', body: 'We produced the ad creatives in-house and ran the paid campaigns.' },
    { title: 'Influencer marketing', body: 'We cast Japanese influencers and planned and managed their content.' },
    { title: 'Fulfillment', body: 'We managed shipping to customers in Japan.' },
  ] as { title: string; body: string; link?: { href: string; label: string } }[],
}

// 流れ（問い合わせから拡販まで）
// TODO: 要記入 — 各ステップの目安期間（週）
export const flow = {
  label: 'Flow',
  h2: ['From one message', 'to launch day.'],
  steps: [
    { title: 'Contact', body: 'Tell us about your product through the form.', ninja: 'hanzo' as NinjaKey },
    { title: 'Free Japan Scan', body: 'Within 2 business days: buyer, price band, claims that land and best channels.', ninja: 'hanzo' as NinjaKey },
    { title: 'Meeting & proposal', body: 'An online meeting, then a proposal with the model and terms in writing.', ninja: 'hanzo' as NinjaKey },
    { title: 'Prepare', body: 'Compliance and import with partners; story, pages and video localized.', ninja: 'basho' as NinjaKey },
    { title: 'Launch', body: 'Online store, Amazon and Rakuten go live, with creators going first.', ninja: 'chiyome' as NinjaKey },
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
  label: 'Contact',
  h2: ['Your product.', 'Japan.', 'Leave the rest to the clan.'],
  body: 'Tell us about your product. Within 2 business days we reply with a free one-page Japan Scan — your Japanese buyer, price band, claims that land and best channels — and honest advice on whether Japan makes sense.',
}

// 信頼バー（ヒーロー直下）。事実のみ
export const trustBar = ['Faise Inc. — registered in Japan', 'Based in Tokyo', 'Founded December 2025', 'CEO: ex-Sony, ex-Katana marketer', 'NDA on request', 'We work in English']

// 対象（海外で売れている商品を持つメーカー）
export const whoFor = {
  label: 'Who it’s for',
  h2: ['Built for makers who are ready for Japan —', 'even if Japan wasn’t in the plan.'],
  items: [
    'Your product already sells abroad — on your own store, Amazon or Kickstarter.',
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

// 協業の形（2つ）
export const waysToWork = {
  label: 'Ways to work',
  h2: ['Two ways to', 'launch in Japan.'],
  items: [
    {
      name: 'Exclusive License',
      title: 'We license your brand for Japan and launch it everywhere.',
      body: 'We take an exclusive license for Japan and run the whole launch as one team: import (with our partners), our own online store, Amazon and Rakuten, ads, influencers and retail — for an agreed term.',
      best: 'Best if you want Japan handled end-to-end.',
    },
    {
      name: 'Marketing Only',
      title: 'You keep your setup. We run the marketing.',
      body: 'Keep your current distributor, Amazon or online store. We run localization, ad creatives and campaigns, and influencer marketing in Japan.',
      best: 'Best if you already sell in Japan but sales are flat.',
    },
  ],
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
      a: 'Faise takes an exclusive license and becomes your single partner for Japan for an agreed, renewable term. The term, territory and channel scope are written into a distribution agreement before anything ships, and exclusivity can be limited to specific channels if you already sell in Japan.',
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
      a: 'We led the Japan launch of Cyspera, a skincare brand from the Swiss company scientis, and sold more than 10,000 units within three months of launch. We handled localization, the Japanese online store, ad creatives and campaigns, influencer marketing and fulfillment. Our CEO also brings marketing experience from Sony and Katana, a Japanese marketing firm.',
    },
    {
      q: 'Where will our product be sold in Japan?',
      a: 'Wherever your buyers are. Usually that means our own Japanese online store, Amazon Japan and Rakuten Ichiba, backed by ads and influencer content — then specialty and lifestyle retail. Crowdfunding platforms are an option when they fit the product, not a requirement.',
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
