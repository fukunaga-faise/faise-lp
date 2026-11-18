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
export const CTA_NOTE = 'Free · We reply within 2 business days · NDA available'

export const ninjaMeta = {
  title: 'Japan Market Entry & Exclusive Distribution Partner | LAUNCH NINJA by Faise',
  description:
    'A Tokyo-based partner for overseas consumer brands. License your brand to us for Japan, or keep your current setup and let us run your marketing: e-commerce, Amazon and Rakuten, ads and influencers. Get a free Japan Scan.',
  // AI 検索・要約で引用されやすい定義文（ページ上部にも表示）
  definition:
    'LAUNCH NINJA by Faise is a Tokyo-based Japan market entry service for overseas consumer brands. Brands can either grant Faise an exclusive license for Japan, and Faise launches the product across its own online store, Amazon, Rakuten and retail, or keep their current setup and have Faise run their marketing in Japan: localization, ads and influencer marketing. Import and certification are handled with partners.',
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
  h1: ['Launch your product in Japan.', 'As your exclusive partner or your marketing team, based in Tokyo.'],
  sub: 'We bring overseas consumer products to Japan: localization, e-commerce, Amazon and Rakuten, ads and influencers. Import and certification are handled with trusted partners, so you can stay focused on your product.',
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
    catch: 'Said everything in 17 syllables. Now retells your story for Japanese buyers.',
    color: '#4F5D2F',
    accent: '#B7C48A',
    img: '/images/japan-ninja/basho',
    alt: 'Illustration of Basho, a poet-ninja copywriter in moss green holding a brush pen and a laptop',
  },
  {
    key: 'chiyome',
    name: 'Mochizuki Chiyome',
    role: 'Influencer Lead',
    does: 'Influencers · creator content',
    legend: 'Said to have led a nationwide network of traveling messengers for Takeda Shingen.',
    catch: 'Once ran a nationwide network of messengers. Now runs ours: creators who get people buying.',
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
  lead: ['A small, quiet clan of specialists', 'who launch overseas brands in Japan.'],
  ribbon: 'Who are we?',
}

// 業務対応範囲（Faise／パートナー）。Faise の担当には忍者を添える
// TODO: 要確認 — 自社対応か連携かの最終判断
export const service = {
  label: 'Service',
  h2: ['From strategy to sales,', 'the clan has it covered.'],
  faise: [
    { name: 'Japan market strategy', ninja: 'hanzo' as NinjaKey },
    { name: 'Pricing & positioning', ninja: 'hanzo' as NinjaKey },
    { name: 'Brand story & messaging', ninja: 'basho' as NinjaKey },
    { name: 'Japanese product pages', ninja: 'basho' as NinjaKey },
    { name: 'Short-form video & content', ninja: 'basho' as NinjaKey },
    { name: 'Launch campaigns & PR', ninja: 'chiyome' as NinjaKey },
    { name: 'Influencer casting', ninja: 'chiyome' as NinjaKey },
    { name: 'Ads (Meta, Google, Amazon)', ninja: 'kotaro' as NinjaKey },
    { name: 'Amazon & Rakuten store management', ninja: 'kotaro' as NinjaKey },
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

// 5 PROMISES：「Myth（海外ブランドの思い込み）」→「Our promise（We で始まる文）」
export const promises = {
  label: 'Why a ninja?',
  h2: ['Five myths.', 'Five promises.'],
  lead: 'Most overseas brands come to Japan with the same five assumptions. Here’s what we do instead.',
  items: [
    { myth: 'Translate the English page and it’ll sell.', so: 'We rewrite your story for Japanese buyers, not just translate the words.', ninja: 'basho' as NinjaKey },
    { myth: 'A hit abroad is a hit in Japan.', so: 'We study local competitors and find the messages that work before launch.', ninja: 'hanzo' as NinjaKey },
    { myth: 'Pick influencers by follower count.', so: 'We choose creators by saves, comments and audience fit.', ninja: 'chiyome' as NinjaKey },
    { myth: 'List it on Amazon and it will sell.', so: 'We build genuine early reviews before scaling up.', ninja: 'kotaro' as NinjaKey },
    { myth: 'Deal with certification and logistics later.', so: 'We start on PSE, Giteki, import and customer support with partners from day one.', ninja: 'hanzo' as NinjaKey },
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
  label: 'How it works',
  h2: ['From one message', 'to launch day.'],
  steps: [
    { title: 'Contact', body: 'Tell us about your product through the form.', ninja: 'hanzo' as NinjaKey },
    { title: 'Free Japan Scan', body: 'Within 2 business days: your target buyer, price range, key selling points and best channels.', ninja: 'hanzo' as NinjaKey },
    { title: 'Meeting & proposal', body: 'An online meeting, then a written proposal with the model and terms.', ninja: 'hanzo' as NinjaKey },
    { title: 'Get ready', body: 'Import and certification with partners; brand story, product pages and videos localized.', ninja: 'basho' as NinjaKey },
    { title: 'Launch', body: 'Your online store and Amazon and Rakuten listings go live, with creator content leading the way.', ninja: 'chiyome' as NinjaKey },
    { title: 'Scale', body: 'Grow through ads and marketplaces, then expand into retail.', ninja: 'kotaro' as NinjaKey },
  ],
}

// 創業者（the clan leader）。事実は経歴と「幼少期にアメリカで7年間」のみ
export const leader = {
  label: 'The clan leader',
  h2: 'Raised between two countries. Now building the bridge between them.',
  body: [
    'I spent seven years of my childhood in the United States. After coming back to Japan, I kept noticing great products that never made it here — and the ones that did often got lost in translation.',
    'Japanese buyers are demanding about quality and detail. A brand’s story has to be retold in Japanese words and Japanese culture. That’s what our clan does.',
  ],
  signature: 'Haruto Fukunaga — CEO, Faise Inc. (the clan leader)',
}

// 最後の CTA（フォーム）
export const finalCta = {
  label: 'Contact',
  h2: ['Your product.', 'Japan.', 'Leave the rest to the clan.'],
  body: 'Tell us about your product. Within 2 business days, we’ll send you a free one-page Japan Scan covering your target buyer, price range, key selling points and best channels, along with our honest view on whether Japan is right for you.',
}

// 信頼バー（ヒーロー直下）。事実のみ
export const trustBar = ['Faise Inc. — registered in Japan', 'Based in Tokyo', 'Founded December 2025', 'CEO: ex-Sony, ex-Katana marketer', 'NDA on request', 'We work in English']

// 対象（海外で売れている商品を持つメーカー）
export const whoFor = {
  label: 'Who it’s for',
  h2: ['For brands whose products could sell in Japan —', 'even if Japan wasn’t part of the plan.'],
  items: [
    'Your product already sells abroad, whether through your own store, on Amazon or on Kickstarter.',
    'You don’t have a Japanese entity, team or importer.',
    'You make consumer products: gadgets, lifestyle or beauty.',
    'You’d rather not spend months learning Japan’s rules yourself.',
  ],
  categories: [
    { img: 'gadgets', title: 'Gadgets & hardware', body: 'Audio, smart home, outdoor tech and accessories, including products that need Giteki or PSE certification.' },
    { img: 'lifestyle', title: 'Lifestyle', body: 'Home, kitchen, travel and outdoor goods with a story worth retelling.' },
    { img: 'beauty', title: 'Beauty & skincare', body: 'Skincare and beauty devices for Japanese buyers who read every ingredient.' },
  ],
}

// 協業の形（2つ）
export const waysToWork = {
  label: 'Ways to work',
  h2: ['Two ways to', 'launch in Japan.'],
  items: [
    {
      name: 'Exclusive License',
      title: 'You license your brand to us for Japan. We launch it everywhere.',
      body: 'For an agreed term, we take on the entire Japan launch as one team: import (with our partners), e-commerce, Amazon and Rakuten, ads, influencers and retail.',
      best: 'Best if you want Japan handled end-to-end.',
    },
    {
      name: 'Marketing Only',
      title: 'You keep your setup. We run the marketing.',
      body: 'Keep your current distributor, Amazon listings or online store. We handle localization, ad creatives and campaigns, and influencer marketing in Japan.',
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
  verifyNote: 'You can look up Faise Inc. in the National Tax Agency’s corporate number registry.',
}

// FAQ（英語LP専用。日本語ページの faq とは別）
// 回答は最初の一文で結論を言う（AI 検索に引用されやすい書き方）。未確定の条件は断定しない
export const ninjaFaq = {
  label: 'FAQ',
  h2: 'Frequently asked questions about selling in Japan',
  items: [
    {
      q: 'How does exclusive distribution in Japan work with you?',
      a: 'You grant Faise an exclusive license for Japan for an agreed, renewable term, and we become your single partner there. The term, territory and channels are set out in a distribution agreement before anything ships. If you already sell in Japan, exclusivity can be limited to specific channels.',
    },
    {
      q: 'Is there a minimum order or sales commitment?',
      a: 'We agree on this up front, before anything is signed. If a first order is needed, the quantity is based on the Japan Scan and the launch plan, not a fixed number.',
    },
    {
      q: 'Who pays for what? Are there upfront costs or risks for us?',
      a: 'It depends on the model you choose. Every cost line — what you pay, what Faise pays and what goes to partners — is listed in the proposal before you sign, so you can judge the risk up front.',
    },
    {
      q: 'What are the wholesale pricing and payment terms?',
      a: 'We agree on a wholesale price for each SKU, based on the Japanese retail price range we set together. Payment timing and method are written into the contract. Tell us your standard terms and we’ll start from there.',
    },
    {
      q: 'Why do you think our product will sell in Japan?',
      a: 'We don’t guess. The free Japan Scan compares your product with local competitors, price ranges and the messages Japanese buyers respond to. If we don’t think it will work, we’ll tell you before you spend anything.',
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
      a: 'Our partners handle import, PSE, Giteki, logistics and customer support. Faise checks which rules apply, coordinates the work, and takes care of Japanese labels and manuals. From you, we need any technical documents and test reports you already have, plus product samples.',
    },
    {
      q: 'Do we need a Japanese company to sell in Japan?',
      a: 'No. A partner in Japan can act as the importer of record, so you don’t need your own Japanese entity to start.',
    },
    {
      q: 'We already sell on Amazon Japan or have a distributor. Will this conflict?',
      a: 'Not if we plan it together. We review your current channels first, limit exclusivity to specific channels where needed, and agree on pricing rules in writing to protect your existing partners.',
    },
    {
      q: 'How long does it take to launch?',
      a: 'It depends mostly on certification. Products that already meet Japanese requirements can launch much sooner than those that still need Giteki or PSE certification. You get a week-by-week timeline in the proposal.',
    },
    {
      q: 'Who will we work with, and in what language?',
      a: 'You work directly with the Faise team in Tokyo, led by CEO Haruto Fukunaga. We work in English, by email and video call.',
    },
    {
      q: 'How do we know Faise is a legitimate, reliable company?',
      a: 'Faise Inc. is a company registered in Japan, founded in December 2025 and based in Tokyo. You can look us up in the National Tax Agency’s corporate number registry, and our CEO’s background is public on LinkedIn. We’re happy to sign an NDA before you share anything.',
    },
  ],
}
