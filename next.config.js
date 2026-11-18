// 問い合わせページを推測して直接アクセスされる URL（GA4 で 404 を確認済み）を、
// トップの問い合わせフォーム（#contact-form でモーダルが開く）へ転送する。
const contactPaths = [
  '/contact',
  '/contact.html',
  '/contact-us',
  '/contactus',
  '/inquiry',
  '/inquiry.html',
  '/form',
  '/mail',
  '/otoiawase',
  '/toiawase',
  '/お問い合わせ',
  '/%E3%81%8A%E5%95%8F%E3%81%84%E5%90%88%E3%82%8F%E3%81%9B',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  // キレイキャスティングのLP（public/kirei-casting の静的HTML）を /kirei-casting で配信する
  async rewrites() {
    return {
      beforeFiles: [{ source: '/kirei-casting', destination: '/kirei-casting/index.html' }],
    }
  },
  async redirects() {
    // 英語サイトは LAUNCH NINJA の LP（/en/launch-ninja）だけ。旧 URL（/en/japan-launch 以下）は新しい URL へ転送する。
    // 以前の英訳ページ（/en、/en/clinic、/en/services/…、/en/works/…）は LP へ転送する。
    const englishRetired = ['/en', '/en/clinic/:path*', '/en/services/:path*', '/en/works/:path*'].map((source) => ({
      source,
      destination: '/en/launch-ninja',
      permanent: true,
    }))
    const renamed = [
      { source: '/en/japan-launch', destination: '/en/launch-ninja', permanent: true },
      { source: '/en/japan-launch/:path*', destination: '/en/launch-ninja/:path*', permanent: true },
    ]
    // 問い合わせ URL の推測アクセス：日本語はトップのフォーム、英語は LP の問い合わせフォームへ
    const contact = contactPaths.flatMap((source) => [
      { source, destination: '/#contact-form', permanent: true },
      { source: `/en${source}`, destination: '/en/launch-ninja#scan', permanent: true },
    ])
    return [...renamed, ...englishRetired, ...contact]
  },
}

module.exports = nextConfig
