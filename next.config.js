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
  async redirects() {
    return contactPaths.map((source) => ({
      source,
      destination: '/#contact-form',
      permanent: true,
    }))
  },
}

module.exports = nextConfig
