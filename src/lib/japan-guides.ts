// /en/launch-ninja/guide 配下の英語ガイド記事（海外ブランド向けの日本進出ノウハウ）。ページ表示と構造化データで共通利用する。
// ※Faise について書くのは LAUNCH NINJA の LP（japan-ninja.ts）に載っている事実だけ：東京のマーケティング会社、協業の形2つ
//   （Exclusive License／Marketing Only）、Cyspera（scientis）を発売3か月で1万個超（ローカライズ・自社EC・広告・インフルエンサー・配送）、
//   輸入・認証はパートナーと連携、Japan Scan 無料。
// ※市場規模などの数字は出典なしでは書かない。法規制は一般的な解説にとどめ、最終確認は専門家・公式資料を促す。

import { hero, images } from './japan-launch'

// 記事で使う写真（Japan Launch LP と同じイメージ素材。public/images/japan-launch）
export type GuideImageKey = 'hero' | 'gadgets' | 'lifestyle' | 'beauty' | 'tokyo' | 'shoot'
export function guideImage(key: GuideImageKey) {
  const img = key === 'hero' ? hero.image : images[key]
  return { src: img.src, w: img.w, h: img.h, alt: img.alt.en }
}

export type GuideSection = {
  h2: string
  body: string[]
  list?: string[]
  ordered?: boolean
  table?: { caption: string; head: string[]; rows: string[][] }
  // セクション末尾の写真（キャプション付き）
  figure?: { img: GuideImageKey; caption: string }
  // Cyspera の事例ブロック（商品写真・実施内容・実際のインフルエンサー投稿）を表示する
  caseStudy?: boolean
}

export type Guide = {
  slug: string
  title: string
  h1: string
  description: string
  lead: string
  summary: string[]
  published: string
  updated: string
  // 記事冒頭のメイン写真（OG 画像・構造化データの image にも使う）
  cover: GuideImageKey
  sections: GuideSection[]
  faq: { q: string; a: string }[]
}

export const GUIDE_BASE = '/en/launch-ninja/guide'
export const GUIDE_AUTHOR = { name: 'Haruto Fukunaga', jobTitle: 'CEO, Faise Inc.' }

const REG_NOTE =
  'This guide is general information, not legal advice. Rules change and depend on the exact product, so confirm the requirements for your product with a specialist or the relevant Japanese authority before you launch.'

export const japanGuides: Guide[] = [
  {
    slug: 'japan-market-entry',
    title: 'How to Enter the Japanese Market: A Step-by-Step Guide for Consumer Brands',
    h1: 'How to enter the Japanese market: a step-by-step guide for consumer brands',
    description:
      'A practical guide to Japan market entry for overseas consumer brands: checking product fit, regulations and certification, choosing a local partner model, localization, influencer marketing, and sales channels such as Amazon Japan and Rakuten.',
    lead:
      'Many overseas brands never planned to sell in Japan — and then find Japanese customers ordering from abroad, or a distributor asking about rights. Entering the Japanese market does not require opening an office on day one, but it does require getting a few things right in the right order. This guide walks through the steps we see matter most for consumer brands in beauty, lifestyle and gadgets.',
    summary: [
      'Start with fit, not paperwork: check whether your product, price and story make sense for Japanese consumers before investing in a full launch.',
      'Find out early which rules apply — cosmetics, electrical products and radio devices each have their own requirements in Japan.',
      'Decide who acts for you locally: an exclusive partner who drives sales and marketing, or a marketing team that works alongside your existing sales setup.',
      'Localize the story, not just the words, and build trust through Japanese creators and reviews before scaling to marketplaces and retail.',
    ],
    published: '2026-11-12',
    updated: '2026-11-23',
    cover: 'hero',
    sections: [
      {
        h2: '1. Check whether your product fits Japan',
        body: [
          'Japanese consumers tend to research carefully before buying. They read ingredient lists, specifications and reviews, and they notice details such as packaging, instructions and after-sales support. A product that does well elsewhere is not automatically a fit, and a product that seems niche can find a loyal audience.',
          'Before committing budget, check a few things: whether similar products already sell in Japan and at what price, whether your product needs changes (labels, sizes, instructions), and whether your brand story will make sense to Japanese buyers.',
        ],
        list: [
          'Category demand: are Japanese consumers already buying products like yours online or in stores?',
          'Price position: after shipping, import costs and margins, where will your price sit against local alternatives?',
          'Product changes: Japanese labeling, manuals and support, plus any certification the product needs.',
          'Story: what is the one reason a Japanese customer should choose you?',
        ],
        figure: { img: 'tokyo', caption: 'Japanese shoppers compare products carefully, in stores and online.' },
      },
      {
        h2: '2. Understand the rules that apply to your product',
        body: [
          'Requirements in Japan depend on the product category. Checking them early avoids the most expensive surprise: products held up after they have already been made or shipped.',
          REG_NOTE,
        ],
        table: {
          caption: 'Common requirements by product category (overview)',
          head: ['Category', 'What to check', 'Notes'],
          rows: [
            ['Cosmetics and skincare', 'Pharmaceuticals and Medical Devices Act (PMD Act)', 'A licensed company in Japan is responsible for marketing the product; ingredients and Japanese labeling must meet the cosmetics standards, and advertising claims are limited.'],
            ['Electrical products', 'PSE mark (Electrical Appliance and Material Safety Act)', 'Many electrical products and some batteries need PSE marking before they can be sold.'],
            ['Wireless devices', 'Giteki certification (Radio Act)', 'Products using Bluetooth, Wi-Fi or other radio functions generally need Japanese radio certification.'],
            ['All products', 'Labeling and advertising rules', 'Product pages, ads and influencer posts must not mislead, and paid promotions must be disclosed as ads.'],
          ],
        },
        figure: { img: 'gadgets', caption: 'Gadgets with Bluetooth or Wi-Fi usually need Japanese radio certification (Giteki) before sale.' },
      },
      {
        h2: '3. Decide who acts for you in Japan',
        body: [
          'Most brands entering Japan do not start with their own entity. Instead, a local party handles the parts that need a presence in Japan, such as import, sales and customer support. What matters is being clear about who does what.',
          'At Faise we offer two models. With an Exclusive License, you license your brand to us for Japan and we run the whole launch — our own online store, Amazon and Rakuten, ads, influencers and retail. With Marketing Only, you keep your current sales setup and we run your marketing in Japan: localization, influencers, content and ads. Import, certification, logistics and Japanese customer support are handled with specialist partners.',
        ],
        table: {
          caption: 'Two common ways to work with a Japan partner',
          head: ['', 'Exclusive license', 'Marketing only'],
          rows: [
            ['Who sells', 'The partner, as your representative in Japan', 'You or your existing distributor'],
            ['Who markets', 'The partner', 'The partner'],
            ['Best for', 'Brands with no Japan setup yet', 'Brands that already sell in Japan or have a distributor'],
            ['Your role', 'Product supply, information and key approvals', 'Sales operations, plus approvals on marketing'],
          ],
        },
      },
      {
        h2: '4. Localize the story, not just the words',
        body: [
          'A translated product page is rarely enough. Japanese buyers respond to clear explanations, careful details and a story told in a way that feels natural in Japanese. That usually means rewriting the concept and key messages for Japan, re-shooting or re-editing content, and preparing answers to the questions Japanese customers actually ask.',
        ],
        list: [
          'Rewrite the main message for Japanese consumers instead of translating your global tagline.',
          'Prepare detailed product pages: specifications, how to use, ingredients or materials, and support information.',
          'Create content that shows the product in a Japanese setting and lifestyle.',
        ],
        figure: { img: 'lifestyle', caption: 'Show the product in a Japanese setting, not just a translated catalog photo.' },
      },
      {
        h2: '5. Build trust first, then scale sales',
        body: [
          'Japanese consumers often discover new products through Instagram, TikTok and YouTube creators they trust, and reviews keep working long after launch. A practical order is to build awareness and early reviews with creators, then use that proof to grow on marketplaces and, later, in retail.',
        ],
        ordered: true,
        list: [
          'Launch with Japanese creators who genuinely fit the product, with ads disclosed properly.',
          'Turn the best-performing creator content into ads and product page assets.',
          'Grow on e-commerce marketplaces such as Amazon Japan and Rakuten, plus your own online store.',
          'Use your Japanese sales record to approach specialty stores, retailers and wholesalers.',
        ],
        figure: { img: 'shoot', caption: 'Short videos from trusted Japanese creators are often where discovery starts.' },
      },
      {
        h2: 'Example: 10,000+ units of Cyspera sold in Japan in three months',
        body: [
          'We led the Japan launch of Cyspera, a skincare brand from the Swiss company scientis, and sold more than 10,000 units within three months of launch. Faise handled localization and positioning, the Japanese online store, ad creatives and paid campaigns, influencer marketing and fulfillment.',
        ],
        caseStudy: true,
      },
    ],
    faq: [
      { q: 'Do we need a Japanese company to sell in Japan?', a: 'Not necessarily. Depending on the setup, a partner in Japan can act as the local party for import and sales. The right structure depends on your product and how you want to work.' },
      { q: 'How long does it take to enter the Japanese market?', a: 'It depends on the product, whether certification is needed and which sales channel you start with. Products that need certification or regulatory steps take longer than those that can be sold as they are.' },
      { q: 'Which products do well in Japan?', a: 'There is no single answer, but products with clear quality, careful design and a story that makes sense to Japanese consumers tend to do well. Beauty and skincare, lifestyle goods and gadgets are common categories for overseas brands.' },
    ],
  },
  {
    slug: 'influencer-marketing-japan',
    title: 'Influencer Marketing in Japan: A Guide for Overseas Brands',
    h1: 'Influencer marketing in Japan: a guide for overseas brands',
    description:
      'How influencer marketing works in Japan: which platforms matter, how to choose Japanese creators, ad disclosure rules (stealth marketing regulation), and how to turn creator content into sales on Amazon Japan and other channels.',
    lead:
      'For many overseas brands, Japanese creators are the fastest way to be discovered in Japan. But influencer marketing in Japan has its own platforms, tone and rules. This guide covers what to know before you start working with Japanese influencers — and how to make the content keep working after the post goes live.',
    summary: [
      'Japanese consumers often discover products through creators they already trust on Instagram, TikTok and YouTube; X is also widely used in Japan.',
      'Choose creators for fit and trust, not follower count alone — detailed, honest reviews work better than hard selling.',
      'Paid posts must be clearly disclosed as ads: Japan regulates stealth marketing under its misleading-representations law.',
      'Plan for reuse: good creator content can become ads, product page assets and proof for marketplaces and retailers.',
    ],
    published: '2026-11-12',
    updated: '2026-11-23',
    cover: 'shoot',
    sections: [
      {
        h2: 'Which platforms matter in Japan',
        body: [
          'The main platforms for product discovery in Japan overlap with other markets, but how people use them differs. Choosing the platform depends on your category and who you want to reach.',
        ],
        table: {
          caption: 'How major platforms are typically used for products in Japan',
          head: ['Platform', 'Typical use', 'Good for'],
          rows: [
            ['Instagram', 'Visual discovery, saving posts, short videos', 'Beauty, skincare, lifestyle goods'],
            ['TikTok', 'Short videos that spread quickly', 'Products with a visible effect or a clear "wow" moment'],
            ['YouTube', 'Longer reviews and explanations', 'Gadgets and products that need detailed explanation'],
            ['X', 'Real-time conversation and word of mouth', 'Launches, gadgets, products with a fan community'],
          ],
        },
      },
      {
        h2: 'How to choose Japanese creators',
        body: [
          'Follower count alone is a weak signal. What matters is whether the creator’s audience matches your customers and whether their followers trust their recommendations. In Japan, careful and honest reviews tend to work better than aggressive selling.',
        ],
        list: [
          'Audience fit: age, interests and lifestyle that match your product.',
          'Trust: comments and saves that show followers act on recommendations.',
          'Content style: does the creator explain products in detail, or just show them?',
          'Track record: past product posts that look natural rather than scripted.',
        ],
        figure: { img: 'beauty', caption: 'For beauty products, creators who show texture and how they use the product in a daily routine tend to earn more trust.' },
      },
      {
        h2: 'Disclosure rules: avoid stealth marketing',
        body: [
          'Japan regulates stealth marketing. Since October 2023, advertising that hides the fact that it is an ad is treated as a misleading representation under the Act against Unjustifiable Premiums and Misleading Representations. In practice, paid or gifted posts should be clearly labeled as ads or promotions, and the claims in the post must also be accurate.',
          'Categories such as cosmetics also have limits on what can be claimed in advertising, and those limits apply to influencer posts as well.',
          REG_NOTE,
        ],
      },
      {
        h2: 'Make creator content work beyond the post',
        body: [
          'A single post fades quickly. The brands that get the most from Japanese creators plan for the content to be reused — with the creator’s permission and proper disclosure.',
        ],
        ordered: true,
        list: [
          'Brief creators on the product and the key points Japanese buyers care about, then let them speak in their own words.',
          'Find the posts that perform best and run them as ads to reach more people.',
          'Use creator content and the reviews it generates on product pages for Amazon Japan, Rakuten or your own store.',
          'Use the results as proof when talking to Japanese retailers and wholesalers.',
        ],
        figure: { img: 'tokyo', caption: 'Creator content can keep working long after the post: on product pages, marketplaces and in conversations with retailers.' },
      },
      {
        h2: 'How Faise approaches influencer marketing in Japan',
        body: [
          'Faise’s Japan team includes marketers who specialize in Japanese consumers and active influencers, and through the team’s own connections we work with many influencers across Japan. For Cyspera, a skincare brand from the Swiss company scientis, we cast Japanese influencers and managed their content alongside the Japanese online store and paid ads — and sold more than 10,000 units within three months of launch.',
        ],
        caseStudy: true,
      },
    ],
    faq: [
      { q: 'Do Japanese influencers need to disclose sponsored posts?', a: 'Yes. Japan regulates stealth marketing, so posts that are paid for or otherwise arranged by a brand should be clearly identified as ads or promotions.' },
      { q: 'Should we work with large or small influencers in Japan?', a: 'It depends on the goal. Large creators reach many people quickly, while smaller creators with a close audience can drive trust and detailed reviews. Many launches combine both.' },
      { q: 'Can we run influencer marketing in Japan without a Japanese team?', a: 'Yes, by working with a partner in Japan who handles creator selection, Japanese briefing, content checks and reporting.' },
    ],
  },
  {
    slug: 'launch-beauty-brand-japan',
    title: 'How to Launch a Beauty or Skincare Brand in Japan',
    h1: 'How to launch a beauty or skincare brand in Japan',
    description:
      'What overseas beauty and skincare brands need to know to launch in Japan: cosmetics regulations under the PMD Act, Japanese labeling, advertising claims, review culture, influencer marketing, and channels such as Amazon Japan, Rakuten and Qoo10.',
    lead:
      'Japan is one of the most demanding beauty markets in the world: consumers compare ingredients, textures and reviews in detail. That makes it hard to enter casually — and rewarding once your brand earns trust. This guide covers the regulations, marketing and sales channels to plan for when launching a beauty or skincare brand in Japan.',
    summary: [
      'Cosmetics sold in Japan fall under the PMD Act: a licensed company in Japan takes responsibility for the product, and ingredients and Japanese labeling must meet the standards.',
      'Advertising claims for cosmetics are limited, and the same limits apply to product pages and influencer posts.',
      'Japanese beauty buyers rely heavily on reviews and trusted creators — build those before scaling.',
      'Common launch channels include Amazon Japan, Rakuten, Qoo10 and your own online store, followed by specialty retail.',
    ],
    published: '2026-11-12',
    updated: '2026-11-23',
    cover: 'beauty',
    sections: [
      {
        h2: 'Regulations: cosmetics under the PMD Act',
        body: [
          'In Japan, cosmetics are regulated under the Pharmaceuticals and Medical Devices Act (PMD Act). A company licensed in Japan must take responsibility for marketing the product, the formula must comply with Japan’s cosmetics standards on ingredients, and the packaging needs Japanese labeling, including the full ingredient list.',
          'Products that claim specific effects beyond cosmetics — for example some whitening or anti-acne claims — may fall into the quasi-drug category, which requires approval. Check where your product falls before planning your messages.',
          REG_NOTE,
        ],
        table: {
          caption: 'Key points to check before launching skincare in Japan',
          head: ['Item', 'What to check'],
          rows: [
            ['Responsible company', 'Who in Japan holds the license and takes responsibility for the product'],
            ['Ingredients', 'Whether every ingredient is allowed under Japan’s cosmetics standards'],
            ['Labeling', 'Japanese labels, including the full ingredient list and required information'],
            ['Category', 'Whether the product is a cosmetic or a quasi-drug, based on its claims'],
            ['Claims', 'Whether ad copy, product pages and influencer posts stay within permitted claims'],
          ],
        },
      },
      {
        h2: 'Marketing: earn trust through reviews and creators',
        body: [
          'Japanese beauty consumers read reviews closely and often discover products through creators they trust on Instagram, TikTok and YouTube. Review platforms such as @cosme are also part of how many people research beauty products. For a new overseas brand, the first goal is credible proof: honest creator content and real customer reviews.',
        ],
        list: [
          'Work with creators whose skin concerns and audience match your product.',
          'Show texture, how to use and how the product fits into a Japanese routine.',
          'Keep every claim within what is allowed for cosmetics, and disclose sponsored posts as ads.',
          'Collect reviews early and feature them on your product pages.',
        ],
        figure: { img: 'shoot', caption: 'Showing texture and how the product is used works better than bold claims, which cosmetics rules limit anyway.' },
      },
      {
        h2: 'Sales channels for beauty brands in Japan',
        body: [
          'Most overseas beauty brands start online, where they can test demand and build reviews, and move into retail once they have a sales record in Japan.',
        ],
        table: {
          caption: 'Common channels for launching beauty products in Japan',
          head: ['Channel', 'Role in the launch'],
          rows: [
            ['Amazon Japan', 'Broad reach and convenient purchasing; reviews matter'],
            ['Rakuten Ichiba', 'Large marketplace with its own shopper base and campaigns'],
            ['Qoo10', 'Popular with beauty shoppers looking for overseas brands'],
            ['Your own online store', 'Brand experience, customer data and repeat purchases'],
            ['Specialty and lifestyle stores', 'Physical presence once you have proof of demand'],
          ],
        },
        figure: { img: 'tokyo', caption: 'Retail usually comes after online sales and reviews have proven demand in Japan.' },
      },
      {
        h2: 'Example: Cyspera by scientis',
        body: [
          'We led the Japan launch of Cyspera, a skincare brand from the Swiss company scientis, and sold more than 10,000 units within three months of launch. Faise handled localization and positioning, the Japanese online store, ad creatives and paid campaigns, influencer marketing and fulfillment.',
        ],
        caseStudy: true,
      },
    ],
    faq: [
      { q: 'Can we sell cosmetics in Japan without a Japanese company?', a: 'A company licensed in Japan must take responsibility for marketing cosmetics there. Many overseas brands work with a Japanese partner that holds the license rather than setting up their own entity.' },
      { q: 'Do product labels need to be in Japanese?', a: 'Yes. Cosmetics sold in Japan need Japanese labeling, including the full ingredient list.' },
      { q: 'What can we claim in ads for skincare in Japan?', a: 'Cosmetics can only use a limited range of claims, and stronger effect claims may require the product to be approved as a quasi-drug. The same limits apply to product pages and influencer posts.' },
    ],
  },
  {
    slug: 'marketing-in-japan',
    title: 'Marketing in Japan: A Practical Guide for Overseas Brands',
    h1: 'Marketing in Japan: a practical guide for overseas brands',
    description:
      'How marketing in Japan works for overseas consumer brands: what Japanese buyers expect, which channels matter (Instagram, X, YouTube, TikTok, LINE, Amazon Japan, Rakuten), localization, influencer marketing, advertising rules and how to measure results.',
    lead:
      'Japan rewards brands that do their homework. Japanese buyers read product details closely, trust reviews and recommendations from people they follow, and notice when a brand has simply translated its English page. This guide covers how marketing in Japan differs from other markets, and what overseas brands should get right first.',
    summary: [
      'Japanese buyers research carefully: detailed Japanese product pages, clear specifications and genuine reviews often matter as much as the ad that brought them there.',
      'Discovery is creator-led: Instagram, X, YouTube and TikTok are central to how people find new products, and LINE is part of everyday communication.',
      'Marketplaces are where many purchases happen: Amazon Japan and Rakuten Ichiba sit alongside brands’ own online stores.',
      'Localize the message, not just the language — and follow Japan’s rules on ad disclosure and product claims.',
    ],
    published: '2026-11-23',
    updated: '2026-11-23',
    cover: 'tokyo',
    sections: [
      {
        h2: '1. What makes marketing in Japan different',
        body: [
          'Many of the tools are familiar — social media, search, marketplaces, influencers — but the way Japanese consumers use them is different. Three patterns come up again and again for consumer brands.',
        ],
        list: [
          'Detail builds trust: buyers expect complete information in natural Japanese, including specifications, how to use the product and what is in the box.',
          'Reviews and word of mouth carry weight: early reviews on marketplaces and honest creator content often decide whether a new brand gets a chance.',
          'Quality signals matter: packaging, customer support in Japanese and reliable delivery are part of the brand, not afterthoughts.',
        ],
      },
      {
        h2: '2. The channels that matter',
        body: [
          'Most consumer brands in Japan combine discovery channels, where people first see the product, with sales channels, where they buy it. The mix depends on the category and the price point.',
        ],
        table: {
          caption: 'Common marketing and sales channels for consumer brands in Japan',
          head: ['Channel', 'Typical role', 'Notes'],
          rows: [
            ['Instagram', 'Visual discovery and saved posts', 'Strong for beauty, skincare and lifestyle goods'],
            ['X', 'Real-time conversation and word of mouth', 'Widely used in Japan; good for launches and fan communities'],
            ['YouTube', 'Longer reviews and how-to videos', 'Useful for gadgets and products that need explaining'],
            ['TikTok', 'Short videos that spread quickly', 'Works well when the product has a visible effect'],
            ['LINE', 'Messaging and brand accounts', 'Part of everyday communication; used for customer relationships'],
            ['Amazon Japan, Rakuten Ichiba', 'Marketplaces where many purchases happen', 'Product pages, reviews and marketplace ads drive sales'],
            ['Your own online store', 'Brand experience and direct customer data', 'Often launched alongside marketplaces'],
          ],
        },
      },
      {
        h2: '3. Localize the story, not just the words',
        body: [
          'A direct translation of an English product page rarely works. Japanese copy needs a different rhythm, a different level of detail and claims that fit local expectations and rules. The most effective approach is to decide what Japanese buyers need to hear first — the problem the product solves, how it fits into daily life, why it can be trusted — and rebuild the page around that.',
        ],
        figure: { img: 'lifestyle', caption: 'Showing how a product fits into everyday life in Japan often works better than listing features.' },
      },
      {
        h2: '4. Influencer marketing and advertising',
        body: [
          'Creator content is one of the fastest ways for a new brand to be discovered in Japan, and the best-performing posts can be reused as ads and on product pages. Paid or gifted posts must be clearly disclosed: since October 2023, stealth marketing has been regulated under Japan’s Act against Unjustifiable Premiums and Misleading Representations.',
          'Some categories also have strict limits on claims. Cosmetics, for example, are regulated under the Pharmaceutical and Medical Device Act, and the same limits apply to ads, product pages and influencer posts.',
          REG_NOTE,
        ],
      },
      {
        h2: '5. Measure what matters',
        body: [
          'Track the whole path from discovery to purchase rather than likes alone. Useful measures include saves and comments on creator posts, click-through to product pages, marketplace conversion, review volume and rating, and repeat purchases. Reviewing these together shows which creators, messages and channels actually sell.',
        ],
      },
      {
        h2: '6. How LAUNCH NINJA by Faise runs marketing in Japan',
        body: [
          'LAUNCH NINJA by Faise is a Tokyo-based marketing agency for overseas brands. We localize your brand story and product pages, cast and manage Japanese influencers, produce ad creatives and run paid campaigns, and manage Amazon Japan, Rakuten and Japanese online stores. For Cyspera, a skincare brand from the Swiss company scientis, we sold more than 10,000 units within three months of launch.',
        ],
        caseStudy: true,
      },
    ],
    faq: [
      { q: 'What is the best way to market a foreign product in Japan?', a: 'Start by localizing the story and product pages for Japanese buyers, then combine creator content on platforms such as Instagram, X, YouTube and TikTok with paid ads, and sell through Amazon Japan, Rakuten Ichiba or your own store. Early reviews matter a lot.' },
      { q: 'Which social media platforms are most important in Japan?', a: 'Instagram, X, YouTube and TikTok are central to product discovery, and LINE is part of everyday communication. The right mix depends on the product category and the audience.' },
      { q: 'Do we need a Japanese team to market in Japan?', a: 'Not necessarily. Many overseas brands work with a marketing agency based in Japan that handles Japanese copy, creators, ads and marketplaces while the brand works with the agency in English.' },
    ],
  },
  {
    slug: 'choose-marketing-agency-japan',
    title: 'How to Choose a Marketing Agency in Japan: A Guide for Overseas Brands',
    h1: 'How to choose a marketing agency in Japan: a guide for overseas brands',
    description:
      'What to look for when choosing a marketing agency in Japan as an overseas brand: types of agencies, the services you need, questions to ask, warning signs, and how pricing and contracts usually work.',
    lead:
      'Choosing a marketing agency in Japan is one of the most important decisions an overseas brand makes when entering the market. The right partner knows Japanese buyers, creators and marketplaces and can work with you in English; the wrong one can burn budget on tactics that do not fit Japan. This guide explains the options and the questions to ask.',
    summary: [
      'Decide what you need first: full market entry, or marketing for a product that already sells in Japan.',
      'Agencies in Japan range from large advertising groups to digital, influencer and market entry specialists — each fits a different stage.',
      'Ask for real case studies, who will actually work on your account, and how results will be measured.',
      'Make sure the agency can communicate in English and that every cost line is written into the proposal before you sign.',
    ],
    published: '2026-11-23',
    updated: '2026-11-23',
    cover: 'shoot',
    sections: [
      {
        h2: '1. Start with what you need',
        body: [
          'Before comparing agencies, be clear about the job. A brand that has never sold in Japan needs help with positioning, localization, sales channels and often import and certification. A brand that already sells in Japan usually needs better marketing: stronger Japanese content, influencer campaigns, ads and marketplace optimization.',
        ],
      },
      {
        h2: '2. Types of marketing agencies in Japan',
        body: ['Different types of agencies fit different stages and budgets.'],
        table: {
          caption: 'Common types of marketing partners in Japan',
          head: ['Type', 'Strengths', 'Best for'],
          rows: [
            ['Large advertising agencies', 'Mass media, large campaigns, broad networks', 'Big brands with large budgets'],
            ['Digital and performance agencies', 'Paid search and social ads, analytics', 'Brands that already have product pages and distribution'],
            ['Influencer marketing agencies', 'Creator casting and campaign management', 'Brands that need awareness and content'],
            ['Market entry agencies', 'Localization, channels and marketing combined', 'Overseas brands launching or relaunching in Japan'],
            ['Distributors', 'Import, wholesale and retail relationships', 'Products ready for retail distribution'],
          ],
        },
      },
      {
        h2: '3. Questions to ask an agency',
        ordered: true,
        list: [
          'Which overseas brands have you launched or grown in Japan, and what were the results?',
          'Who will work on our account day to day, and will they communicate with us in English?',
          'How will you localize our brand story — not just translate it?',
          'How do you choose influencers, and how do you handle ad disclosure rules?',
          'Which channels would you start with for our product, and why?',
          'How will results be reported, and how often?',
          'What exactly is included in the fee, and what costs extra?',
        ],
        body: ['A good agency will answer these clearly and specifically for your product.'],
      },
      {
        h2: '4. Warning signs',
        body: ['Be careful if an agency:'],
        list: [
          'Proposes only translation of your existing materials.',
          'Chooses influencers by follower count alone.',
          'Cannot explain how it handles stealth marketing rules or product claim limits.',
          'Guarantees sales results before reviewing your product.',
          'Leaves key costs vague until after you sign.',
        ],
      },
      {
        h2: '5. Pricing and contracts',
        body: [
          'Agencies in Japan charge in different ways: monthly retainers, project fees, a share of ad spend, performance-based fees, or a mix. For market entry, some partners also take an exclusive license or distribution rights and earn from product sales. Whatever the model, ask for a written proposal that lists every cost line, the term, and how either side can review or end the agreement.',
        ],
      },
      {
        h2: '6. Where LAUNCH NINJA by Faise fits',
        body: [
          'LAUNCH NINJA by Faise is a Tokyo-based marketing agency for overseas consumer brands. You can keep your current setup and have us run your marketing in Japan, or license your brand to us for Japan and let us run the whole launch. We work in English, and the first step — a one-page Japan Scan — is free. For Cyspera by scientis, we sold more than 10,000 units within three months of launch.',
        ],
        caseStudy: true,
      },
    ],
    faq: [
      { q: 'How do I find a good marketing agency in Japan?', a: 'Start by defining whether you need full market entry or marketing for an existing setup, then ask agencies for relevant case studies, who will work on your account, how they localize content and how they report results.' },
      { q: 'Do marketing agencies in Japan work in English?', a: 'Some do. If your team does not speak Japanese, choose an agency that can communicate in English while running the work in Japanese.' },
      { q: 'How much does a marketing agency in Japan cost?', a: 'It varies widely by agency type, channels and scope. Ask for a written proposal that lists every cost line before you sign.' },
    ],
  },
]

export const japanGuideBySlug = (slug: string) => japanGuides.find((g) => g.slug === slug)
