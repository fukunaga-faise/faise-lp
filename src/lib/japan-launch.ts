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
      'Japan Launch by Faise takes products that already sell overseas to Japanese consumers — market validation, localization, crowdfunding launch on Makuake and CAMPFIRE, influencer marketing, and e-commerce and retail expansion.',
  },
  ja: {
    title: '海外ブランドの日本上陸支援 Japan Launch | 株式会社Faise',
    description:
      '海外で実績のある商品を、日本の消費者に届ける。市場適合性の評価からローカライズ、Makuake・CAMPFIREでのクラウドファンディング、インフルエンサー施策、EC・小売展開までを一気通貫で支援します。',
  },
}

export const breadcrumb = { home: { ja: 'ホーム', en: 'Home' }, here: { ja: '日本上陸支援', en: 'Japan Launch' } }

export const hero = {
  label: SERVICE_NAME,
  h1: { en: ['Proven abroad.', 'Launched in Japan.'], ja: ['海外で売れた商品を、', '日本でも売れる商品に。'] } as LL,
  sub: {
    en: 'We take products that already sell overseas to Japanese consumers — from market validation and crowdfunding launch to influencer marketing and retail.',
    ja: '海外で実績のある商品を、日本の消費者に届けるまでを一気通貫で。市場との相性の見極めから、クラウドファンディングでのローンチ、インフルエンサー施策、EC・小売への展開まで支援します。',
  } as L,
  cta: { en: 'Get a free Japan Fit Check', ja: '無料で Japan Fit Check' } as L,
  note: {
    en: 'For brands with traction on Kickstarter, Indiegogo, or their home market.',
    ja: 'Kickstarter・Indiegogo や自国市場で販売実績のある海外ブランドが対象です。',
  } as L,
  // ヒーロー図の出発点（海外）ラベル。プラットフォーム名のみでブランドロゴは使わない
  origins: ['Kickstarter', 'Indiegogo', 'Home market'],
  originsJa: ['Kickstarter', 'Indiegogo', '自国EC・小売'],
}

// 画像（public/images/japan-launch/*.jpg）は AI 生成のイメージ素材（実在の商品・ブランドではない）。
// 生成: scripts/generate-japan-launch-images.mjs。実案件の写真ができたら差し替える。
type Img = { src: string; w: number; h: number; alt: L }
export const images: Record<'gadgets' | 'lifestyle' | 'beauty' | 'tokyo' | 'shoot' | 'founder', Img> = {
  gadgets: {
    src: '/images/japan-launch/gadgets.jpg', w: 1536, h: 1024,
    alt: { en: 'Minimal wireless earbuds case and a smart device on a desk overlooking Tokyo', ja: '東京の街を望むデスクに置かれた、ワイヤレスイヤホンのケースとスマートデバイス' },
  },
  lifestyle: {
    src: '/images/japan-launch/lifestyle.jpg', w: 1536, h: 1024,
    alt: { en: 'An insulated bottle, a canvas backpack and a small lantern on a café table in Japan', ja: '日本のカフェのテーブルに並ぶ、保温ボトル・キャンバス地のリュック・小型ランタン' },
  },
  beauty: {
    src: '/images/japan-launch/beauty.jpg', w: 1536, h: 1024,
    alt: { en: 'Skincare tube, serum, lotion and cream jar on white stone by the water', ja: '水辺の白い石の上に並ぶ、チューブ・美容液・化粧水・クリームのスキンケア製品' },
  },
  tokyo: {
    src: '/images/japan-launch/tokyo.jpg', w: 1536, h: 864,
    alt: { en: 'Shoppers walking along a tree-lined shopping street in Tokyo at dusk', ja: '夕暮れの東京の並木道の商店街を歩く買い物客' },
  },
  shoot: {
    src: '/images/japan-launch/shoot.jpg', w: 1536, h: 1024,
    alt: { en: 'A creator presenting a gadget to a smartphone on a ring-light tripod for a short video', ja: 'リングライト付きの三脚に固定したスマートフォンに向けて、ガジェットを紹介するショート動画の撮影風景' },
  },
  founder: {
    src: '/images/founder.jpg', w: 2752, h: 1536,
    alt: { en: 'Haruto Fukunaga, CEO of Faise Inc.', ja: '株式会社Faise 代表取締役 福永 遥斗' },
  },
}

export const audience = {
  label: 'Who it’s for',
  h2: { en: ['Built for brands that', 'already sell abroad.'], ja: ['海外ですでに売れている', 'ブランドのために。'] } as LL,
  lead: {
    en: 'Brands with traction on Kickstarter, Indiegogo, or in their home market — mainly in these categories.',
    ja: 'Kickstarter・Indiegogo や自国市場で実績のあるブランドが対象です。主に次のカテゴリを支援します。',
  } as L,
  items: [
    {
      img: 'gadgets' as const,
      title: { en: 'Gadgets & hardware', ja: 'ガジェット・ハードウェア' },
      body: { en: 'Consumer electronics and smart devices that need clear, detailed explanation for Japanese buyers.', ja: '機能や仕様を、日本の買い手に分かりやすく伝える必要がある家電・スマートデバイス。' },
    },
    {
      img: 'lifestyle' as const,
      title: { en: 'Lifestyle', ja: 'ライフスタイル' },
      body: { en: 'Everyday goods, outdoor and home products with a story worth telling.', ja: '日用品・アウトドア・インテリアなど、語れるストーリーのある商品。' },
    },
    {
      img: 'beauty' as const,
      title: { en: 'Beauty', ja: '美容' },
      body: { en: 'Skincare and beauty products for consumers who read ingredients and reviews closely.', ja: '成分やレビューをしっかり確認する消費者に向けた、スキンケア・美容商品。' },
    },
  ],
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
      title: { en: 'Launch platforms built for new products', ja: '新商品のためのローンチの場がある' },
      body: {
        en: 'Crowdfunding platforms such as Makuake, CAMPFIRE and Kibidango let you test demand and take pre-orders before committing to inventory.',
        ja: 'Makuake・CAMPFIRE・Kibidango などのクラウドファンディングで、在庫を抱える前に需要を確かめ、先行予約を集められます。',
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
  h2: { en: ['From overseas traction', 'to a Japan launch, in five steps.'], ja: ['海外での実績を、', '5つのステップで日本の売上に。'] } as LL,
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
      title: { en: 'Crowdfunding Launch', ja: 'クラウドファンディングでローンチ' },
      body: {
        en: 'We launch on Makuake, CAMPFIRE or Kibidango to test sales and secure pre-orders.',
        ja: 'Makuake・CAMPFIRE・Kibidango でテスト販売を行い、先行予約を獲得します。',
      },
    },
    {
      title: { en: 'Influencer & Content', ja: 'インフルエンサー・コンテンツ' },
      body: {
        en: 'We cast Japanese influencers and produce short-form video to spread the launch.',
        ja: '日本のインフルエンサー起用とショート動画で、ローンチを広げます。',
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
    { name: { en: 'Crowdfunding page & operations', ja: 'クラウドファンディングのページ制作・運営' }, by: 'faise' },
    { name: { en: 'Ads', ja: '広告運用' }, by: 'faise' },
    { name: { en: 'E-commerce & retail expansion', ja: 'EC・小売への展開' }, by: 'faise' },
    { name: { en: 'Import', ja: '輸入' }, by: 'partner' },
    { name: { en: 'Certification (PSE, Giteki, etc.)', ja: '認証（PSE・技適など）' }, by: 'partner' },
    { name: { en: 'Logistics', ja: '物流' }, by: 'partner' },
    { name: { en: 'Japanese customer support', ja: '日本語カスタマーサポート' }, by: 'partner' },
  ] as ScopeItem[],
}

// 契約形態。TODO: 要確認 — 名称・内容とも仮。価格は表示しない
export const models = {
  label: 'Partnership models',
  h2: { en: ['Choose how', 'we work together.'], ja: ['ブランドの状況に合わせて、', '組み方を選べます。'] } as LL,
  note: {
    en: 'Terms are tailored to each brand. Tell us about your product and we’ll suggest the best fit.',
    ja: '条件はブランドごとに個別にご提案します。まずは商品についてお聞かせください。',
  } as L,
  items: [
    {
      name: 'Launch Partner',
      title: { en: 'We run your launch, you own the business', ja: 'ローンチを代行し、事業はブランドが保有' },
      body: {
        en: 'Faise plans and runs the Japan launch for you on a service-fee basis.',
        ja: 'Faiseが日本でのローンチを企画・実行します。代行報酬型の契約です。',
      },
    },
    {
      name: 'Exclusive Distributor',
      title: { en: 'Faise buys and sells in Japan', ja: 'Faiseが日本で仕入れ・販売' },
      body: {
        en: 'Faise becomes your exclusive distributor in Japan, purchasing inventory and selling it locally.',
        ja: 'Faiseが日本の独占販売代理店として、商品を仕入れて販売します。',
      },
    },
    {
      name: 'Revenue Share',
      title: { en: 'Shared upside', ja: '成果を分け合う' },
      body: {
        en: 'We share in the revenue we help generate in Japan, aligning our incentives with yours.',
        ja: '日本で生まれた売上をシェアする形で、ブランドと同じ目標に向かいます。',
      },
    },
  ] as { name: string; title: L; body: L }[],
}

// 実績・Why Faise。既存サイト掲載の事実と、依頼時に提供された事実のみ。ロゴ・お客様の声・架空の事例は入れない。
// TODO: 要確認 — 海外ブランドの日本上陸の実績（事例・ロゴ・お客様の声）ができたら追加する
export const track = {
  label: 'Why Faise',
  h2: { en: ['Japanese consumer marketing,', 'from people who’ve done it.'], ja: ['日本の消費者を動かしてきた', 'チームが、ローンチを担います。'] } as LL,
  founder: {
    name: { en: 'Haruto Fukunaga, CEO', ja: '代表取締役 福永 遥斗' } as L,
    career: [
      { period: '2021–2023', org: { en: 'Sony — marketing & business development', ja: 'ソニー株式会社（マーケティング・事業開発）' } },
      { period: '2023–2025', org: { en: 'Katana Inc.', ja: '株式会社刀' } },
      { period: '2025–', org: { en: 'Founded Faise Inc.', ja: '株式会社Faiseを設立' } },
    ] as { period: string; org: L }[],
  },
  // TODO: 要確認 — イマーシブ・フォート東京の実績を「代表個人（刀在籍時）の経験」と「Faiseとしての実績」のどちらとして書くか、および表記の可否
  launch: {
    title: { en: 'Launch of Immersive Fort Tokyo', ja: 'イマーシブ・フォート東京のローンチ・集客' } as L,
    points: [
      { en: 'Collaborated with 100+ influencers for the launch', ja: '100名以上のインフルエンサーと協業' },
      {
        en: 'Partnered with travel platforms including Trip.com and Klook to bring in visitors from Japan and overseas',
        ja: 'Trip.com・Klook など旅行プラットフォームと連携し、国内外から集客',
      },
    ] as L[],
  },
  strengths: [
    {
      title: { en: 'Japanese consumer marketing', ja: '日本の消費者向けマーケティング' },
      body: { en: 'Marketing built at Sony and Katana Inc., focused on what makes Japanese consumers choose.', ja: 'ソニー、株式会社刀で培った、日本の消費者に選ばれるためのマーケティング。' },
    },
    {
      title: { en: 'Influencers & short-form video', ja: 'インフルエンサー・ショート動画の制作力' },
      body: { en: 'Casting, content production and ad use of influencer content, in-house.', ja: 'キャスティングからコンテンツ制作、広告活用までを自社で。' },
    },
    {
      title: { en: 'Launches that draw crowds', ja: '人を集めるローンチの実績' },
      body: { en: 'From a new immersive theme park to beauty and fitness brands.', ja: '新しいイマーシブ・テーマパークから、美容・フィットネスまで。' },
    },
  ] as { title: L; body: L }[],
  casesLabel: { en: 'Results from our marketing work in Japan', ja: '国内でのマーケティング実績' } as L,
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
        en: 'Mainly gadgets and hardware, lifestyle products and beauty. If your product is in another category, feel free to ask.',
        ja: '主にガジェット・ハードウェア、ライフスタイル、美容の商品です。そのほかのカテゴリもお気軽にご相談ください。',
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
    storeUrl: { en: 'Crowdfunding or store URL', ja: 'クラウドファンディング・ストアのURL' },
    markets: { en: 'Current markets', ja: '現在の販売国・地域' },
    timing: { en: 'Target launch timing', ja: '日本でのローンチ希望時期' },
    message: { en: 'Message', ja: 'ご相談内容' },
  } as Record<string, L>,
  placeholders: {
    markets: { en: 'e.g. US, EU, Korea', ja: '例：アメリカ、EU、韓国' },
    message: { en: 'Anything we should know about your product or goals in Japan', ja: '商品の特徴や、日本での目標などをお聞かせください' },
  } as Record<string, L>,
  categories: [
    { value: 'gadgets', label: { en: 'Gadgets & hardware', ja: 'ガジェット・ハードウェア' } },
    { value: 'lifestyle', label: { en: 'Lifestyle', ja: 'ライフスタイル' } },
    { value: 'beauty', label: { en: 'Beauty', ja: '美容' } },
    { value: 'other', label: { en: 'Other', ja: 'その他' } },
  ],
  timings: [
    { value: 'asap', label: { en: 'As soon as possible', ja: 'できるだけ早く' } },
    { value: '3-6m', label: { en: 'In 3–6 months', ja: '3〜6か月以内' } },
    { value: '6-12m', label: { en: 'In 6–12 months', ja: '6〜12か月以内' } },
    { value: 'exploring', label: { en: 'Just exploring', ja: '情報収集中' } },
  ],
  select: { en: 'Select', ja: '選択してください' } as L,
  send: { en: 'Request my Japan Fit Check', ja: '申し込む' } as L,
  sending: { en: 'Sending...', ja: '送信中...' } as L,
  error: { en: 'Something went wrong. Please try again in a moment.', ja: '送信に失敗しました。時間をおいて再度お試しください。' } as L,
  successTitle: { en: 'Thank you — request received', ja: '送信が完了しました' } as L,
  successBody: { en: 'We’ll get back to you within 2 business days.', ja: '2営業日以内にご連絡いたします。' } as L,
}
