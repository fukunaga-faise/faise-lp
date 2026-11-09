import type { Lang } from './locale'

// 海外ブランド向け「日本上陸支援」LP（/en/japan-launch がメイン、/japan-launch は日本の代理店・パートナー向け）。
// 文言はすべてここで管理する。事実として確認できていない箇所は TODO コメントを残し、数字・事例・ロゴは創作しないこと。

type L = Record<Lang, string>
type LL = Record<Lang, string[]>

// サービス名（仮）。名称が決まったらここだけ差し替える。 TODO: 要確認（正式サービス名）
export const SERVICE_NAME = 'Japan Launch by Faise'
export const SERVICE_SHORT = 'Japan Launch'

export const JAPAN_LAUNCH_PATH = '/japan-launch'
export const JAPAN_LAUNCH_PATH_EN = '/en/japan-launch'
export const FORM_ANCHOR = 'fit-check'

export const meta: Record<Lang, { title: string; description: string }> = {
  en: {
    title: 'Japan Launch | Bring Your Product to Japan — Faise Inc.',
    description:
      'Japan Launch by Faise helps overseas brands grow in Japan. A team of Japan marketing specialists and working influencers handles localization, influencer promotion through our domestic network, and e-commerce and retail expansion — as your exclusive partner or your marketing agency.',
  },
  ja: {
    title: '海外ブランドの日本上陸支援 Japan Launch | 株式会社Faise',
    description:
      '海外ブランドの日本展開を、マーケティングで支えます。日本市場のマーケティングに強いメンバーと現役インフルエンサーが在籍し、国内インフルエンサーのネットワークを活かしたプロモーションからEC・小売展開まで。独占契約・マーケティング代理の2つの形で支援します。',
  },
}

export const breadcrumb = { home: { ja: 'ホーム', en: 'Home' }, here: { ja: '日本上陸支援', en: 'Japan Launch' } }

export const hero = {
  label: SERVICE_NAME,
  // 縦書きのアクセント（装飾）
  vertical: '日本上陸支援',
  // 左右分割の写真：左が海外の部屋、右が日本の和室に置かれた同じ商品（AI生成のイメージ素材）
  image: {
    src: '/images/japan-launch/hero-abroad-japan.jpg',
    w: 1536,
    h: 1024,
    alt: {
      en: 'The same smart speaker shown twice: on the left in a brick-walled loft abroad, on the right on a low table in a Japanese tatami room with shoji screens',
      ja: '同じスマートスピーカーを左右で比較した写真。左は海外のレンガ壁のロフト、右は障子のある日本の和室の座卓の上',
    } as L,
  },
  split: { abroad: { en: 'Abroad', ja: '海外' } as L, japan: { en: 'Japan', ja: '日本' } as L },
  h1: { en: ['Proven abroad.', 'Launched in Japan.'], ja: ['海外で売れた商品を、', '日本でも売れる商品に。'] } as LL,
  sub: {
    en: 'We help overseas brands grow in Japan. Our team of Japan marketing specialists and working influencers localizes your brand, gets it in front of Japanese consumers, and builds lasting sales.',
    ja: '海外ブランドの日本展開を、マーケティングで支えます。日本市場のマーケティングに強いメンバーと現役インフルエンサーのチームが、ブランドの魅力を日本の消費者に届け、売上につなげます。',
  } as L,
  cta: { en: 'Get a free Japan Fit Check', ja: '無料で Japan Fit Check' } as L,
  note: {
    en: 'For overseas brands in beauty, lifestyle and gadgets.',
    ja: '美容・ライフスタイル・ガジェットなど、海外ブランドの日本展開を支援しています。',
  } as L,
}

// 画像（public/images/japan-launch/*.jpg）は AI 生成のイメージ素材（実在の商品・ブランドではない）。
// 生成: scripts/generate-japan-launch-images.mjs。実案件の写真ができたら差し替える。
type Img = { src: string; w: number; h: number; alt: L }
export const images: Record<'gadgets' | 'lifestyle' | 'beauty' | 'tokyo' | 'shoot' | 'founder', Img> = {
  gadgets: {
    src: '/images/japan-launch/gadgets.jpg', w: 1536, h: 1024,
    alt: { en: 'Wireless earbuds and a small smart device on a low wooden table by shoji screens, next to a cup of tea', ja: '障子のそばの座卓に置かれたワイヤレスイヤホンと小型スマートデバイス、湯のみ' },
  },
  lifestyle: {
    src: '/images/japan-launch/lifestyle.jpg', w: 1536, h: 1024,
    alt: { en: 'An insulated bottle, a linen tote and a small lantern on the wooden veranda of a Japanese house facing a moss garden', ja: '苔庭に面した縁側に置かれた保温ボトル・リネンのトートバッグ・小型ランタン' },
  },
  beauty: {
    src: '/images/japan-launch/beauty.jpg', w: 1536, h: 1024,
    alt: { en: 'Skincare bottles and a cream jar on a hinoki wood tray beside a washi paper lamp and a maple branch', ja: '和紙の照明ともみじの枝のそば、ひのきのトレーに並ぶスキンケアボトルとクリーム' },
  },
  tokyo: {
    src: '/images/japan-launch/tokyo.jpg', w: 1536, h: 864,
    alt: { en: 'Shoppers browsing gadgets and lifestyle goods on wooden shelves in a Japanese select shop with a red noren curtain', ja: '赤い暖簾のある日本のセレクトショップで、木の棚の雑貨やガジェットを見る買い物客' },
  },
  shoot: {
    src: '/images/japan-launch/shoot.jpg', w: 1536, h: 1024,
    alt: { en: 'A creator presenting a product to a smartphone on a tripod for a short video, in a Japanese room with shoji screens', ja: '障子のある和室で、三脚に固定したスマートフォンに向けて商品を紹介するショート動画の撮影風景' },
  },
  founder: {
    src: '/images/founder.jpg', w: 2752, h: 1536,
    alt: { en: 'Haruto Fukunaga, CEO of Faise Inc.', ja: '株式会社Faise 代表取締役 福永 遥斗' },
  },
}

export const audience = {
  label: 'Who it’s for',
  h2: { en: ['For overseas brands', 'ready to grow in Japan.'], ja: ['日本で、ブランドを', '育てたい海外企業へ。'] } as LL,
  lead: {
    en: 'We work with overseas brands that want to build their presence in Japan — mainly in these categories.',
    ja: '日本でブランドを広げたい海外企業を支援しています。主に次のカテゴリの商品が対象です。',
  } as L,
  items: [
    {
      img: 'beauty' as const,
      title: { en: 'Beauty & skincare', ja: '美容・スキンケア' },
      body: { en: 'Skincare and beauty brands for consumers who read ingredients and reviews closely.', ja: '成分やレビューをしっかり確認する日本の消費者に向けた、スキンケア・美容ブランド。' },
    },
    {
      img: 'lifestyle' as const,
      title: { en: 'Lifestyle', ja: 'ライフスタイル' },
      body: { en: 'Everyday goods, outdoor and home products with a story worth telling.', ja: '日用品・アウトドア・インテリアなど、語れるストーリーのある商品。' },
    },
    {
      img: 'gadgets' as const,
      title: { en: 'Gadgets & hardware', ja: 'ガジェット・ハードウェア' },
      body: { en: 'Consumer electronics and smart devices that need clear, detailed explanation for Japanese buyers.', ja: '機能や仕様を、日本の買い手に分かりやすく伝える必要がある家電・スマートデバイス。' },
    },
  ],
}

// 和のアクセント：各セクション見出しの英字ラベルに添える漢字（装飾。読み上げ対象外）
export const kanji = {
  audience: '対象',
  problems: '課題',
  whyJapan: '市場',
  steps: '流れ',
  scope: '範囲',
  channels: '販路',
  roles: '役割',
  models: '契約',
  track: '実績',
  faq: '問答',
  form: '相談',
}
export const kanjiNumerals = ['一', '二', '三', '四', '五', '六', '七', '八']

// 販路（LEAGUE 等の競合LPを参考に追加）。プラットフォーム名は一般名称として記載。数字は出典付きのものだけ。
// TODO: 要確認 — 各チャネルで実際に対応可能か（特に百貨店・専門店、展示会）
export const channels = {
  label: 'Channels',
  h2: { en: ['Where your product', 'can be sold in Japan.'], ja: ['日本で、あなたの商品が', '並ぶ場所。'] } as LL,
  items: [
    {
      title: { en: 'Influencers & social', ja: 'インフルエンサー・SNS' },
      names: 'Instagram / TikTok / YouTube / X',
      body: { en: 'Japanese creators from our own network introduce your brand in a way that feels native.', ja: '自社ネットワークの日本のクリエイターが、ブランドを自然なかたちで紹介します。' },
    },
    {
      title: { en: 'E-commerce marketplaces', ja: 'ECモール' },
      names: 'Amazon / Rakuten',
      body: { en: 'Japanese product pages, reviews and ads to keep selling after the launch.', ja: '日本向けの商品ページ・レビュー・広告で、ローンチ後も売れ続ける状態をつくります。' },
    },
    {
      title: { en: 'Retail & wholesale', ja: '小売・卸' },
      names: { en: 'Specialty & lifestyle stores', ja: '専門店・ライフスタイルショップ' },
      body: { en: 'Using your Japanese sales record to open doors with retailers and wholesalers.', ja: '日本での販売実績をもとに、小売店・卸への展開を進めます。' },
    },
    {
      title: { en: 'Crowdfunding', ja: 'クラウドファンディング' },
      names: 'Makuake / CAMPFIRE',
      body: { en: 'When it fits the product, a launch platform to build early buzz and reviews.', ja: '商品に合う場合は、話題づくりと初期レビューのためのローンチの場として活用します。' },
    },
  ] as { title: L; names: string | L; body: L }[],
}

// 役割分担。TODO: 要確認 — 契約形態（models）によって変わるため、確定したら内容を調整する
export const roles = {
  label: 'Roles',
  h2: { en: ['You make it.', 'We take it to Japan.'], ja: ['つくるのは、ブランド。', '日本に届けるのは、Faise。'] } as LL,
  brand: {
    title: { en: 'Your side', ja: 'ブランドの役割' } as L,
    items: [
      { en: 'Product development and manufacturing', ja: '商品の開発・製造' },
      { en: 'Supplying products for Japan', ja: '日本向けの商品供給' },
      { en: 'Product information, specs and existing assets (images, video)', ja: '商品情報・仕様・既存素材（画像・動画）の提供' },
      { en: 'Final decisions on pricing and brand', ja: '価格・ブランドに関する最終判断' },
    ] as L[],
  },
  faise: {
    title: { en: 'Faise’s side', ja: 'Faiseの役割' } as L,
    items: [
      { en: 'Japan Fit Check and launch strategy', ja: 'Japan Fit Check とローンチ戦略' },
      { en: 'Japanese concept, product pages and video', ja: '日本向けのコンセプト・商品ページ・動画' },
      { en: 'Influencer promotion through our domestic network', ja: '国内インフルエンサーのネットワークを活かしたプロモーション' },
      { en: 'Ads and expansion to e-commerce and retail', ja: '広告運用、EC・小売への展開' },
      { en: 'Coordinating import, certification and logistics with partners', ja: '輸入・認証・物流のパートナー連携' },
    ] as L[],
  },
}

export const problems = {
  label: 'The challenge',
  h2: { en: ['Selling well abroad', 'doesn’t mean selling in Japan.'], ja: ['海外で売れても、', '日本でそのまま売れるとは限らない。'] } as LL,
  items: [
    {
      en: 'Japanese consumers read reviews and details more carefully than almost anyone — direct translation doesn’t convert.',
      ja: '日本の消費者は、レビューや商品の細部まで丁寧に読み込みます。直訳した商品ページでは、なかなか購入につながりません。',
    },
    {
      en: 'Marketplaces and retailers in Japan expect local proof before they list you.',
      ja: '国内のモールや小売店は、取り扱いの前に「日本での実績」を求めます。',
    },
    {
      en: 'Regulations, logistics, and Japanese customer support are hard to manage from abroad.',
      ja: '法規制への対応、物流、日本語でのカスタマーサポートを、海外から管理するのは簡単ではありません。',
    },
    {
      en: 'Influencer and social marketing in Japan run on different platforms and norms.',
      ja: '日本のインフルエンサー・SNSマーケティングは、使われるプラットフォームも作法も海外とは異なります。',
    },
  ] as L[],
}

// Why Japan：数字は出典付きのものだけ。現状は定性的な記述のみで、stat は未設定。
// TODO: 出典確認 — 市場規模・EC市場・クラウドファンディング市場などの数字を入れる場合は、出典（URL・調査名・年）とセットで stat / source に設定する
export const whyJapan = {
  label: 'Why Japan',
  h2: { en: ['A market that rewards', 'products done right.'], ja: ['きちんと届けた商品が、', '長く選ばれる市場。'] } as LL,
  items: [
    {
      stat: undefined as string | undefined,
      source: undefined as string | undefined,
      title: { en: 'A large, high-income consumer market', ja: '大きく、購買力のある消費市場' },
      body: {
        en: 'Japan is one of the world’s major consumer economies, with buyers who are willing to pay for quality and design.',
        ja: '日本は世界有数の消費市場で、品質やデザインに対価を払う消費者が多くいます。',
      },
    },
    {
      stat: undefined as string | undefined,
      source: undefined as string | undefined,
      title: { en: 'Discovery driven by creators', ja: 'クリエイター発で、商品が見つかる' },
      body: {
        en: 'Japanese consumers often discover new products through Instagram, TikTok and YouTube creators they trust.',
        ja: '日本の消費者は、信頼するクリエイターのInstagram・TikTok・YouTubeを通じて新しい商品に出会っています。',
      },
    },
    {
      stat: undefined as string | undefined,
      source: undefined as string | undefined,
      title: { en: 'Trust that compounds', ja: '信頼が積み上がる市場' },
      body: {
        en: 'Once Japanese consumers trust a product, reviews and word of mouth keep working for you — across e-commerce, retail and social.',
        ja: '一度信頼を得れば、レビューや口コミがEC・小売・SNSをまたいで広がり、売上を支え続けます。',
      },
    },
  ],
}

export const steps = {
  label: 'How it works',
  h2: { en: ['From your brand abroad', 'to sales in Japan, in five steps.'], ja: ['海外のブランドを、', '5つのステップで日本の売上に。'] } as LL,
  // TODO: 要確認 — タイムラインの目安（例：「最初のローンチまで約90日」）。確定するまで表示しない場合は null にする
  timeline: { en: 'First launch in ~90 days', ja: '最初のローンチまで約90日が目安' } as L | null,
  items: [
    {
      title: { en: 'Japan Fit Check', ja: 'Japan Fit Check' },
      body: {
        en: 'We assess how well your product fits Japan — competitors, pricing, and the most promising target customers.',
        ja: '日本市場との相性、競合、価格帯、狙うべきターゲットを評価します。',
      },
    },
    {
      title: { en: 'Localization', ja: 'ローカライズ' },
      body: {
        en: 'We redesign the concept, messaging, product pages and video for Japan. Not translation — a re-design for Japanese buyers.',
        ja: '日本向けにコンセプト・訴求・商品ページ・動画をつくり直します。翻訳ではなく、日本の買い手に向けた再設計です。',
      },
    },
    {
      title: { en: 'Influencer & Content', ja: 'インフルエンサー・コンテンツ' },
      body: {
        en: 'Creators from our network — including influencers on our own team — show your product the way Japanese consumers respond to.',
        ja: 'チームの現役インフルエンサーを含む自社ネットワークのクリエイターが、日本の消費者に響く見せ方で商品を紹介します。',
      },
    },
    {
      title: { en: 'Launch', ja: 'ローンチ' },
      body: {
        en: 'We launch in the channel that fits — e-commerce, select retail, or a launch platform — and turn buzz into first sales.',
        ja: 'EC・小売・ローンチ向けプラットフォームなど、商品に合う場所で販売を始め、話題を最初の売上につなげます。',
      },
    },
    {
      title: { en: 'Scale', ja: '販売拡大' },
      body: {
        en: 'We expand into e-commerce such as Amazon and Rakuten, and into retail and wholesale.',
        ja: 'Amazon・楽天などのECや、小売・卸へと販路を広げます。',
      },
    },
  ] as { title: L; body: L }[],
}

// 対応範囲。by: 'faise' = 自社対応 / 'partner' = パートナーと連携して対応
// TODO: 要確認 — 各項目が自社対応か連携かは仮。確定したら by を書き換えるだけで表示が切り替わる
export type ScopeItem = { name: L; by: 'faise' | 'partner' }
export const scope = {
  label: 'What we handle',
  h2: { en: ['One team for the launch,', 'trusted partners for the rest.'], ja: ['ローンチはFaiseが一貫して。', '専門領域はパートナーと連携。'] } as LL,
  legend: {
    faise: { en: 'Faise team', ja: 'Faiseが対応' },
    partner: { en: 'With our partners', ja: 'パートナーと連携して対応' },
  },
  items: [
    { name: { en: 'Japan market strategy', ja: '日本市場向けの戦略立案' }, by: 'faise' },
    { name: { en: 'Localization of concept & messaging', ja: 'コンセプト・訴求のローカライズ' }, by: 'faise' },
    { name: { en: 'Content & video production', ja: 'コンテンツ・動画制作' }, by: 'faise' },
    { name: { en: 'Influencer casting', ja: 'インフルエンサーのキャスティング' }, by: 'faise' },
    { name: { en: 'Promotion through our influencer network', ja: '自社ネットワークのインフルエンサーによるプロモーション' }, by: 'faise' },
    { name: { en: 'Ads', ja: '広告運用' }, by: 'faise' },
    { name: { en: 'E-commerce & retail expansion', ja: 'EC・小売への展開' }, by: 'faise' },
    { name: { en: 'Import', ja: '輸入' }, by: 'partner' },
    { name: { en: 'Certification (PSE, Giteki, etc.)', ja: '認証（PSE・技適など）' }, by: 'partner' },
    { name: { en: 'Logistics', ja: '物流' }, by: 'partner' },
    { name: { en: 'Japanese customer support', ja: '日本語カスタマーサポート' }, by: 'partner' },
  ] as ScopeItem[],
}

// 協業の形は2つ（独占契約／マーケティング代理）。価格は表示しない
// TODO: 要確認 — 独占契約で Faise が在庫の仕入れまで行うかどうか（現状は「販売とマーケティングを担う」とだけ記載）
export const models = {
  label: 'Ways to work together',
  h2: { en: ['Two ways', 'to work together.'], ja: ['協業の形は、', '2つから選べます。'] } as LL,
  note: {
    en: 'Terms are tailored to each brand. Tell us about your product and we’ll suggest the best fit.',
    ja: '条件はブランドごとに個別にご提案します。まずは商品についてお聞かせください。',
  } as L,
  items: [
    {
      name: 'Exclusive Partnership',
      title: { en: 'Faise as your exclusive partner in Japan', ja: '独占契約：日本での展開をFaiseに一任' },
      body: {
        en: 'We take exclusive responsibility for your brand in Japan and drive both sales and marketing as a long-term partner.',
        ja: '日本におけるブランド展開をFaiseが独占的に担い、販売とマーケティングの両面から長期的に育てます。',
      },
    },
    {
      name: 'Marketing Agency',
      title: { en: 'Faise as your marketing team in Japan', ja: 'マーケティング代理：日本の集客をFaiseが代行' },
      body: {
        en: 'You keep your current sales setup. We plan and run your marketing in Japan — localization, influencers, content and ads.',
        ja: '販売体制はそのままに、日本でのマーケティング（ローカライズ・インフルエンサー・コンテンツ・広告）をFaiseが企画・実行します。',
      },
    },
  ] as { name: string; title: L; body: L }[],
}

// 実績・Why Faise。既存サイト掲載の事実と、代表者から提供された事実のみ。ロゴ・お客様の声・架空の事例は入れない。
export const track = {
  label: 'Why Faise',
  h2: { en: ['A team built for marketing', 'to Japanese consumers.'], ja: ['日本の消費者に届ける、', 'マーケティングのチーム。'] } as LL,
  founder: {
    name: { en: 'Haruto Fukunaga, CEO', ja: '代表取締役 福永 遥斗' } as L,
    career: [
      { period: '2021–2023', org: { en: 'Sony — marketing & business development', ja: 'ソニー株式会社（マーケティング・事業開発）' } },
      { period: '2023–2025', org: { en: 'Katana Inc.', ja: '株式会社刀' } },
      { period: '2025–', org: { en: 'Founded Faise Inc.', ja: '株式会社Faiseを設立' } },
    ] as { period: string; org: L }[],
  },
  strengths: [
    {
      title: { en: 'Japan marketing specialists', ja: '日本市場のマーケティングに強いメンバー' },
      body: {
        en: 'Our team is made up of marketers who specialize in Japanese consumers — what they look for, and what makes them choose.',
        ja: '日本の消費者が何を見て、何を決め手に選ぶのか。日本市場のマーケティングを得意とするメンバーが多数在籍しています。',
      },
    },
    {
      title: { en: 'Working influencers on the team', ja: '現役インフルエンサーが在籍' },
      body: {
        en: 'Some of our team are active influencers themselves, so we catch trends early and know how to show a product on Japanese social.',
        ja: 'チームには現役で活動するインフルエンサーも在籍。トレンドの早いキャッチや、SNSで映える商品の見せ方を得意としています。',
      },
    },
    {
      title: { en: 'A wide domestic influencer network', ja: '国内インフルエンサーとの幅広いつながり' },
      body: {
        en: 'Through the team’s own connections we work with many influencers across Japan — ideal for promoting products like yours.',
        ja: 'メンバー自身のつながりを含め、多くの国内インフルエンサーと連携。海外ブランドの商品プロモーションを得意としています。',
      },
    },
  ] as { title: L; body: L }[],
  // 海外ブランドの日本展開の実績（2026-11-09 代表者から提供）。
  // TODO: 要確認 — Faiseの担当範囲・開始時期・契約形態・成果、ブランド名とロゴ/商品画像の掲載許諾、scientis の本社国（スイスと記載）
  featured: {
    label: { en: 'Case', ja: '実績' } as L,
    brand: 'scientis',
    product: { en: 'Cyspera', ja: 'Cyspera（シスペラ）' } as L,
    title: { en: 'Bringing Cyspera by scientis to Japan', ja: 'scientis「シスペラ」の日本展開' } as L,
    body: {
      en: 'Faise supports the Japan expansion of Cyspera, a skincare product from the Swiss brand scientis — bringing the brand to Japanese consumers through localization and influencer promotion.',
      ja: 'スイスのスキンケアブランド scientis の「シスペラ」の日本展開を支援。ローカライズとインフルエンサーによるプロモーションで、日本の消費者にブランドを届けています。',
    } as L,
    tags: [
      { en: 'Beauty & skincare', ja: '美容・スキンケア' },
      { en: 'Japan expansion', ja: '日本展開' },
    ] as L[],
    image: {
      src: '/images/japan-launch/case-cyspera.jpg',
      w: 292,
      h: 801,
      alt: { en: 'Cyspera by scientis, a white skincare tube', ja: 'scientis の「シスペラ」（白いチューブのスキンケア製品）' } as L,
    },
  },
}

export const faq = {
  label: 'FAQ',
  h2: { en: 'Frequently asked questions', ja: 'よくあるご質問' } as L,
  items: [
    {
      q: { en: 'Do we need a Japanese entity?', ja: '日本法人は必要ですか？' },
      // TODO: 要確認 — 日本法人なしでの販売スキーム（輸入者・販売者を誰が担うか）の正式な回答
      a: {
        en: 'Not necessarily. Depending on the partnership model, Faise or our partners can act as the local party in Japan. We’ll confirm the right setup during the Japan Fit Check.',
        ja: '必ずしも必要ではありません。契約形態によっては、Faiseまたはパートナーが日本側の窓口を担います。最適な形は Japan Fit Check の中でご提案します。',
      },
    },
    {
      q: { en: 'How long until launch?', ja: 'ローンチまでどのくらいかかりますか？' },
      // TODO: 要確認 — 期間の目安
      a: {
        en: 'It depends on the product, certification needs and launch channel. We’ll give you a timeline after the Japan Fit Check.',
        ja: '商品や必要な認証、ローンチするチャネルによって異なります。Japan Fit Check の後に、スケジュールの目安をお伝えします。',
      },
    },
    {
      q: { en: 'Which product categories do you work with?', ja: 'どんな商品カテゴリに対応していますか？' },
      a: {
        en: 'Mainly beauty and skincare, lifestyle products, and gadgets. If your product is in another category, feel free to ask.',
        ja: '主に美容・スキンケア、ライフスタイル、ガジェットの商品です。そのほかのカテゴリもお気軽にご相談ください。',
      },
    },
    {
      q: { en: 'Do you handle certification and import?', ja: '認証や輸入の手続きも対応できますか？' },
      // TODO: 要確認 — 自社対応か連携かの最終判断（scope の by と合わせる）
      a: {
        en: 'We coordinate import and certification such as PSE and Giteki together with our specialist partners.',
        ja: '輸入やPSE・技適などの認証は、専門のパートナーと連携して対応します。',
      },
    },
    {
      q: { en: 'What does it cost?', ja: '費用はどのくらいかかりますか？' },
      a: {
        en: 'It depends on the partnership model and scope. The Japan Fit Check is free — we’ll propose terms after reviewing your product.',
        ja: '契約形態と支援範囲によって異なります。Japan Fit Check は無料で、商品を確認したうえで条件をご提案します。',
      },
    },
    {
      q: { en: 'Can you work with our existing distributor?', ja: '既存の代理店と一緒に進めることはできますか？' },
      // TODO: 要確認 — 既存代理店との協業可否の正式な方針
      a: {
        en: 'Yes, we’re open to it. Tell us about your current setup and we’ll discuss how to divide the roles.',
        ja: 'はい、ご相談可能です。現在の体制をお聞かせいただければ、役割分担をご提案します。',
      },
    },
  ] as { q: L; a: L }[],
}

export const form = {
  label: 'Japan Fit Check',
  h2: { en: 'Get a free Japan Fit Check', ja: '無料の Japan Fit Check' } as L,
  lead: {
    en: 'Tell us about your product. We’ll review it and get back to you within 2 business days.',
    ja: '商品について教えてください。内容を確認のうえ、2営業日以内にご連絡いたします。',
  } as L,
  fields: {
    name: { en: 'Name', ja: 'お名前' },
    company: { en: 'Company / Brand', ja: '会社名・ブランド名' },
    email: { en: 'Email', ja: 'メールアドレス' },
    website: { en: 'Website', ja: 'Webサイト' },
    category: { en: 'Product category', ja: '商品カテゴリ' },
    storeUrl: { en: 'Product or store URL', ja: '商品・ストアのURL' },
    markets: { en: 'Current markets', ja: '現在の販売国・地域' },
    timing: { en: 'Target launch timing', ja: '日本でのローンチ希望時期' },
    message: { en: 'Message', ja: 'ご相談内容' },
  } as Record<string, L>,
  placeholders: {
    markets: { en: 'e.g. US, EU, Korea', ja: '例：アメリカ、EU、韓国' },
    message: { en: 'Anything we should know about your product or goals in Japan', ja: '商品の特徴や、日本での目標などをお聞かせください' },
  } as Record<string, L>,
  categories: [
    { value: 'beauty', label: { en: 'Beauty & skincare', ja: '美容・スキンケア' } },
    { value: 'lifestyle', label: { en: 'Lifestyle', ja: 'ライフスタイル' } },
    { value: 'gadgets', label: { en: 'Gadgets & hardware', ja: 'ガジェット・ハードウェア' } },
    { value: 'other', label: { en: 'Other', ja: 'その他' } },
  ],
  timings: [
    { value: 'asap', label: { en: 'As soon as possible', ja: 'できるだけ早く' } },
    { value: '3-6m', label: { en: 'In 3–6 months', ja: '3〜6か月以内' } },
    { value: '6-12m', label: { en: 'In 6–12 months', ja: '6〜12か月以内' } },
    { value: 'exploring', label: { en: 'Just exploring', ja: '情報収集中' } },
  ],
  // フォーム横の安心材料。TODO: 要確認 — NDA締結の可否・英語対応の可否
  assurances: [
    { en: 'The Japan Fit Check is free', ja: 'Japan Fit Check は無料です' },
    { en: 'NDA available on request', ja: 'ご希望に応じてNDAを締結します' },
    { en: 'English is fine', ja: '英語でのやりとりも可能です' },
    { en: 'A product link and a short overview are enough to start', ja: '商品URLと簡単な概要だけで始められます' },
  ] as L[],
  select: { en: 'Select', ja: '選択してください' } as L,
  send: { en: 'Request my Japan Fit Check', ja: '申し込む' } as L,
  sending: { en: 'Sending...', ja: '送信中...' } as L,
  error: { en: 'Something went wrong. Please try again in a moment.', ja: '送信に失敗しました。時間をおいて再度お試しください。' } as L,
  successTitle: { en: 'Thank you — request received', ja: '送信が完了しました' } as L,
  successBody: { en: 'We’ll get back to you within 2 business days.', ja: '2営業日以内にご連絡いたします。' } as L,
}
