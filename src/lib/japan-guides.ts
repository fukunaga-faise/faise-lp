// /en/japan-launch/guide 配下の英語ガイド記事（海外ブランド向けの日本進出ノウハウ）。ページ表示と構造化データで共通利用する。
// ※Faise について書くのは Japan Launch LP（japan-launch.ts）に載っている事実だけ：日本チーム（マーケター・現役インフルエンサー）、
//   国内インフルエンサーとのつながり、協業の形2つ、Cyspera（scientis）の支援内容、輸入・認証・物流・CSはパートナーと連携、Fit Check 無料。
// ※市場規模などの数字は出典なしでは書かない。法規制は一般的な解説にとどめ、最終確認は専門家・公式資料を促す。

export type GuideSection = {
  h2: string
  body: string[]
  list?: string[]
  ordered?: boolean
  table?: { caption: string; head: string[]; rows: string[][] }
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
  sections: GuideSection[]
  faq: { q: string; a: string }[]
}

export const GUIDE_BASE = '/en/japan-launch/guide'
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
    updated: '2026-11-12',
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
      },
      {
        h2: '3. Decide who acts for you in Japan',
        body: [
          'Most brands entering Japan do not start with their own entity. Instead, a local party handles the parts that need a presence in Japan, such as import, sales and customer support. What matters is being clear about who does what.',
          'At Faise we offer two models. As your exclusive partner in Japan, we take responsibility for the brand in Japan and drive both sales and marketing over the long term. As your marketing team in Japan, you keep your current sales setup and we plan and run marketing — localization, influencers, content and ads. Import, certification, logistics and Japanese customer support are handled together with specialist partners.',
        ],
        table: {
          caption: 'Two common ways to work with a Japan partner',
          head: ['', 'Exclusive partner', 'Marketing team'],
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
      },
      {
        h2: 'Example: bringing Cyspera by scientis to Japan',
        body: [
          'Faise supports the Japan expansion of Cyspera, a skincare product from the Swiss brand scientis. The work covers sales on Amazon Japan and online stores, ad operations and promotion with Japanese influencers.',
        ],
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
    updated: '2026-11-12',
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
      },
      {
        h2: 'How Faise approaches influencer marketing in Japan',
        body: [
          'Faise’s Japan team includes marketers who specialize in Japanese consumers and active influencers, and through the team’s own connections we work with many influencers across Japan. For Cyspera, a skincare product from the Swiss brand scientis, influencer promotion runs alongside sales on Amazon Japan and online stores and ad operations.',
        ],
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
    updated: '2026-11-12',
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
      },
      {
        h2: 'Example: Cyspera by scientis',
        body: [
          'Faise supports the Japan expansion of Cyspera, a skincare product from the Swiss brand scientis — from selling on Amazon Japan and online stores to ad operations and promotion with Japanese influencers.',
        ],
      },
    ],
    faq: [
      { q: 'Can we sell cosmetics in Japan without a Japanese company?', a: 'A company licensed in Japan must take responsibility for marketing cosmetics there. Many overseas brands work with a Japanese partner that holds the license rather than setting up their own entity.' },
      { q: 'Do product labels need to be in Japanese?', a: 'Yes. Cosmetics sold in Japan need Japanese labeling, including the full ingredient list.' },
      { q: 'What can we claim in ads for skincare in Japan?', a: 'Cosmetics can only use a limited range of claims, and stronger effect claims may require the product to be approved as a quasi-drug. The same limits apply to product pages and influencer posts.' },
    ],
  },
]

export const japanGuideBySlug = (slug: string) => japanGuides.find((g) => g.slug === slug)
