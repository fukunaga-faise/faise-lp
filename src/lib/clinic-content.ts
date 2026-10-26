import type { Lang } from './language'

// /clinic（美容クリニックの集客支援）の文言。ページ表示と構造化データ（FAQ）で共通利用する。
// ※サイトに既に掲載している事実の範囲のみ。新しい数値・実績は追加しないこと。
type L = Record<Lang, string>

export const clinicMeta = {
  title: '美容クリニックの集客支援｜インフルエンサー×広告運用 | 株式会社Faise',
  description:
    '美容インフルエンサーの起用、コンテンツ制作、SNS広告の運用、LP・予約導線の改善まで、美容クリニックの新規集客を支援します。事例：顧客獲得単価（CPA）平均35%削減。',
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
          ja: 'インフルエンサーの投稿や動画を、広告クリエイティブとして活用します。SNSコンテンツの企画・制作にも対応します。',
          en: 'Influencer posts and videos are turned into ad creative. We also plan and produce social content.',
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
          ja: '広告から予約までの導線を見直し、CPA・コンバージョンの改善につなげます。',
          en: 'We review the path from ad to booking to improve CPA and conversion.',
        } as L,
      },
    ],
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
        q: { ja: '費用はどのくらいかかりますか？', en: 'How much does it cost?' } as L,
        a: {
          ja: '施策の内容や規模によって異なります。まずはお問い合わせください。',
          en: 'It depends on the scope and scale of the work. Please get in touch first.',
        } as L,
      },
    ],
  },
}
