import type { Lang } from './language'

// /clinic（美容クリニックの集客支援）の文言。ページ表示と構造化データ（FAQ）で共通利用する。
// ※サイトに既に掲載している事実の範囲のみ。新しい数値・実績は追加しないこと。
type L = Record<Lang, string>

export const clinicMeta = {
  title: '美容クリニックの集客支援｜インフルエンサー×広告運用 | 株式会社Faise',
  description:
    '美容インフルエンサーが来院・施術の様子を紹介する投稿を広告に活用し、美容クリニックの新規患者獲得を支援。キャスティングから広告運用、予約導線の改善まで一貫対応。成果報酬型サービス「バズクル」は初期費用・キャスティング費・月額固定費0円。事例：CPA平均35%削減。',
}

export const clinicContent = {
  breadcrumb: { home: { ja: 'ホーム', en: 'Home' } as L, here: { ja: '美容クリニックの集客支援', en: 'Marketing for beauty clinics' } as L },
  hero: {
    label: 'Beauty Clinic' as string,
    h1: { ja: ['美容クリニックの', '集客支援'], en: ['Marketing support', 'for beauty clinics'] } as Record<Lang, string[]>,
    lead: {
      ja: '美容インフルエンサーの起用から、コンテンツ制作、SNS広告の運用、LP・予約導線の改善まで。新規来院につながる集客の課題に、実行まで向き合います。',
      en: 'From casting beauty influencers and producing content to running social ads and improving landing pages and booking flows. We take on your clinic’s acquisition challenges, through to execution.',
    } as L,
    cta: { ja: 'このテーマで相談する', en: 'Talk to us about this' } as L,
  },
  worries: {
    label: 'Challenges',
    h2: { ja: ['こんなお悩み、', 'ありませんか。'], en: ['Do any of these', 'sound familiar?'] } as Record<Lang, string[]>,
    items: {
      ja: [
        '美容インフルエンサーを活用したいが、誰を起用すべきか分からない',
        '広告のCPAが上がり続けている',
        'SNSや動画は出しているが、予約や来院につながらない',
        '新規開院・新メニューの認知を広げたい',
      ],
      en: [
        'I want to use beauty influencers, but I don’t know who to cast.',
        'My ad CPA keeps rising.',
        'We post on social and video, but it doesn’t lead to bookings or visits.',
        'I want to build awareness for a new clinic or a new treatment.',
      ],
    } as Record<Lang, string[]>,
  },
  support: {
    label: 'What we do',
    h2: { ja: ['インフルエンサーと広告運用を、', 'つなげて支援します。'], en: ['Influencers and ad operations,', 'working together.'] } as Record<Lang, string[]>,
    lead: {
      ja: 'インフルエンサーのコンテンツを広告に活用し、予約までの導線も含めて改善します。',
      en: 'We put influencer content to work in ads and improve the path through to booking.',
    } as L,
    items: [
      {
        title: { ja: '美容インフルエンサーの起用', en: 'Casting beauty influencers' } as L,
        body: {
          ja: 'ターゲットや施術内容に合わせて、魅力を伝えられる美容インフルエンサーを選定・起用します。',
          en: 'We select and cast beauty influencers who can convey your treatments’ appeal to your target.',
        } as L,
      },
      {
        title: { ja: 'インフルエンサーコンテンツの広告活用', en: 'Using influencer content in ads' } as L,
        body: {
          ja: 'インフルエンサーが来院・施術の様子を紹介する投稿や動画を、広告クリエイティブとして活用します。投稿は医療広告ガイドラインに沿って、効果の感想ではなくカウンセリングや施術の流れ、院内の様子など事実を中心に制作し、公開前に表現を確認します。',
          en: 'Influencer posts and videos showing the clinic visit and treatment are turned into ad creative. Following Japan’s medical advertising guidelines, they focus on facts — the counseling, the procedure, the clinic — rather than claims about results, and we review the wording before anything is published.',
        } as L,
      },
      {
        title: { ja: 'SNS広告運用・クリエイティブ改善', en: 'Social ad operations and creative improvement' } as L,
        body: {
          ja: 'Google・Metaなどの広告を運用し、ターゲットに合った訴求を検証しながらクリエイティブを改善します。',
          en: 'We run ads on Google, Meta and more, testing messages that fit your target and improving creatives.',
        } as L,
      },
      {
        title: { ja: 'LP・予約導線の改善', en: 'Landing page and booking flow improvements' } as L,
        body: {
          ja: '広告から予約までの導線を見直し、LINE登録や予約の獲得、CPA・コンバージョンの改善につなげます。',
          en: 'We review the path from ad to booking to win LINE sign-ups and bookings and improve CPA and conversion.',
        } as L,
      },
    ],
  },
  pricing: {
    label: 'Pricing',
    // 2026-10-27 PR TIMES リリース「バズクル」提供開始 に記載の条件
    name: 'バズクル',
    text: { ja: '成果報酬型集客サービス「バズクル」', en: 'Buzzkuru — a pay-for-performance acquisition service' } as L,
    lead: {
      ja: 'インフルエンサーが来院・施術の様子を紹介する投稿を、医療広告ガイドラインに沿った表現で広告として配信し、再生数ではなく予約の成果で評価します。固定費は0円で、費用は成果が出た分だけです。',
      en: 'We run influencer posts showing the clinic visit and treatment as ads, worded to follow medical advertising guidelines, and measure results by bookings, not views. No fixed fees — you pay only for results.',
    } as L,
    terms: [
      { k: { ja: '初期費用', en: 'Initial fee' } as L, v: { ja: '0円', en: '¥0' } as L },
      { k: { ja: 'キャスティング費', en: 'Casting fee' } as L, v: { ja: '0円', en: '¥0' } as L },
      { k: { ja: '月額固定費', en: 'Fixed monthly fee' } as L, v: { ja: '0円', en: '¥0' } as L },
      { k: { ja: '広告費', en: 'Ad spend' } as L, v: { ja: 'クリニック様負担', en: 'Paid by the clinic' } as L },
      { k: { ja: '成果報酬', en: 'Performance fee' } as L, v: { ja: '成果1件ごとに個別設定', en: 'Set individually per result' } as L },
      { k: { ja: '成果地点の例', en: 'Example conversion points' } as L, v: { ja: 'LINE友だち追加、カウンセリング予約など（予約導線に合わせて事前に設定）', en: 'LINE friend adds, counseling bookings, etc. (agreed in advance to fit your booking flow)' } as L },
      { k: { ja: '成果の対象外', en: 'Not counted' } as L, v: { ja: '重複予約、既存患者様、虚偽または明らかに対象外の予約など', en: 'Duplicate bookings, existing patients, false or clearly ineligible bookings, etc.' } as L },
    ],
    note: { ja: '※提供内容：インフルエンサー選定、来院・施術調整、コンテンツ制作、広告配信、効果検証・改善', en: '※Includes influencer selection, visit and treatment coordination, content production, ad delivery, and measurement and improvement.' } as L,
  },
  case: {
    label: 'Case Study',
    h2: { ja: ['事例：', '美容クリニック'], en: ['Case study:', 'a beauty clinic'] } as Record<Lang, string[]>,
    metricLabel: { ja: '顧客獲得単価（CPA）平均', en: 'Cost per acquisition (CPA), average' } as L,
    value: '35',
    unit: { ja: '%削減', en: '% lower' } as L,
    body: {
      ja: '美容インフルエンサーを活用した広告クリエイティブの制作・配信と、SNS広告の運用改善を実施。ターゲットに合った訴求を検証し、顧客獲得単価（CPA）を平均35%削減しました。',
      en: 'Produced and ran ad creatives featuring beauty influencers and improved social ad operations. By testing messages that fit the target, we cut cost per acquisition (CPA) by 35% on average.',
    } as L,
    actionsLabel: { ja: '実施施策', en: 'What we did' } as L,
    actions: {
      ja: ['美容インフルエンサーの起用', 'インフルエンサーコンテンツの広告活用', 'SNS広告運用・クリエイティブ改善'],
      en: ['Casting beauty influencers', 'Using influencer content in ads', 'Social ad operations and creative improvement'],
    } as Record<Lang, string[]>,
  },
  // 2026-10-27 PR TIMES リリース「バズクル」提供開始 に記載の実績・体制
  buzz: {
    label: 'Results',
    h2: { ja: ['同じ投稿でも、', '広告にすると予約は最大8倍に。'], en: ['The same post,', 'up to 8x the bookings as an ad.'] } as Record<Lang, string[]>,
    lead: {
      ja: 'インフルエンサー投稿の反応を確認し、成果の良いクリエイティブを広告として配信したところ、投稿だけの期間と比べて予約数が最大8倍に増えました。',
      en: 'After checking how influencer posts performed and running the best creatives as ads, bookings rose by up to 8x compared with the post-only period.',
    } as L,
    value: '8',
    unit: { ja: '倍', en: 'x' } as L,
    metricLabel: { ja: '予約数（最大）', en: 'Bookings (max)' } as L,
    note: { ja: '※投稿のみの期間と、広告配信後の期間の予約数を比較', en: '※Compares bookings in the post-only period with the period after ads ran.' } as L,
    exampleLabel: { ja: '都内の美容クリニック様の事例', en: 'Example: a beauty clinic in Tokyo' } as L,
    exampleHead: { ja: ['', 'フォロワー', '再生', '予約'], en: ['', 'Followers', 'Views', 'Bookings'] } as Record<Lang, string[]>,
    examples: [
      { name: { ja: '投稿A', en: 'Post A' } as L, cells: { ja: ['1.4万人', '4.2万回', '21件'], en: ['14k', '42k', '21'] } as Record<Lang, string[]> },
      { name: { ja: '投稿B', en: 'Post B' } as L, cells: { ja: ['4.2万人', '34.5万回', '86件'], en: ['42k', '345k', '86'] } as Record<Lang, string[]> },
    ],
    networkLabel: { ja: '美容系インフルエンサーのネットワーク', en: 'Beauty influencer network' } as L,
    network: { ja: '約500名', en: 'About 500' } as L,
    networkBody: {
      ja: '施術内容とターゲットに合わせて、予約につながる可能性の高いインフルエンサーを選びます。配信後は広告ごとの予約単価・予約数を比べ、成果の良い広告に予算を集中させます。',
      en: 'We choose the influencers most likely to drive bookings for your treatment and target, then compare cost per booking and bookings by ad and focus budget on the winners.',
    } as L,
    stepsLabel: { ja: 'クリニック様は、PRしたい施術を決めるだけ', en: 'You just pick the treatment to promote' } as L,
    steps: {
      ja: ['インフルエンサー選定', '来院・施術', 'コンテンツ制作', '広告配信', '効果検証・改善', '予約獲得'],
      en: ['Influencer selection', 'Visit & treatment', 'Content production', 'Ad delivery', 'Measurement & improvement', 'Bookings'],
    } as Record<Lang, string[]>,
  },
  faq: {
    label: 'FAQ',
    h2: { ja: 'よくあるご質問', en: 'Frequently asked questions' } as L,
    items: [
      {
        q: { ja: 'インフルエンサーの起用だけでも依頼できますか？', en: 'Can we ask for influencer casting only?' } as L,
        a: {
          ja: 'はい、可能です。各サービスは単体でもご相談いただけます。課題やフェーズに応じて、必要な領域からご相談ください。',
          en: 'Yes. Each service is available on its own — start with the area that fits your challenge and stage.',
        } as L,
      },
      {
        q: { ja: '広告運用だけでも依頼できますか？', en: 'Can we ask for ad operations only?' } as L,
        a: {
          ja: 'はい、SNS広告の運用やクリエイティブの改善のみのご相談にも対応しています。',
          en: 'Yes. We also take requests for social ad operations or creative improvement alone.',
        } as L,
      },
      {
        q: { ja: '開院前や新規開院でも相談できますか？', en: 'Can we consult before or at the opening of a new clinic?' } as L,
        a: {
          ja: '可能です。新規事業や施設の立ち上げ時の集客戦略から、実行までを支援しています。',
          en: 'Yes. We support acquisition strategy and execution when launching a new business or facility.',
        } as L,
      },
      {
        q: { ja: '成果報酬型で依頼できますか？', en: 'Can we work on a pay-for-performance basis?' } as L,
        a: {
          ja: 'はい、成果報酬型集客サービス「バズクル」で対応しています。初期費用・キャスティング費・月額固定費は0円で、広告費はクリニック様のご負担です。成果報酬は成果1件ごとに個別に設定し、成果地点（LINE友だち追加、カウンセリング予約など）は予約導線に合わせて事前に決めます。',
          en: 'Yes, through our pay-for-performance service Buzzkuru. Initial, casting and fixed monthly fees are ¥0; ad spend is paid by the clinic. The fee per result is set individually, and the conversion point (such as LINE friend adds or counseling bookings) is agreed in advance.',
        } as L,
      },
      {
        q: { ja: '医療広告ガイドラインには対応していますか？', en: 'Do you follow medical advertising guidelines?' } as L,
        a: {
          ja: 'はい。インフルエンサーの投稿や広告は、効果に関する体験談や誇大な表現を使わず、カウンセリングや施術の流れ、院内の様子など事実を中心に制作し、公開前に表現を確認します。依頼した投稿には「PR」などの表記を入れます。',
          en: 'Yes. Influencer posts and ads avoid testimonials about results and exaggerated claims, focus on facts such as the counseling, the procedure and the clinic, and are reviewed before publishing. Commissioned posts are labeled as PR.',
        } as L,
      },
      {
        q: { ja: '費用はどのくらいかかりますか？', en: 'How much does it cost?' } as L,
        a: {
          ja: '施策の内容や規模によって異なります。成果報酬型集客サービス「バズクル」なら、初期費用・キャスティング費・月額固定費は0円です（広告費はクリニック様負担。成果報酬は成果1件ごとに個別設定）。まずはお問い合わせください。',
          en: 'It depends on the scope and scale of the work. With our pay-for-performance service Buzzkuru, initial, casting and fixed monthly fees are ¥0 (ad spend is paid by the clinic; the fee per result is set individually). Please get in touch first.',
        } as L,
      },
    ],
  },
}
