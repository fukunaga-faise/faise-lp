// Japan Launch LP の OGP 画像（1200x630）。ヒーローと同じ「巨大な JAPAN × 鳥居」のトンマナ。
// 実行: node scripts/generate-og-japan-launch.mjs
// 文字は Windows の Impact / 游明朝 で描画する（生成済み画像をコミットする運用）。
import sharp from 'sharp'
import path from 'node:path'

const W = 1200
const H = 630
const root = path.resolve(import.meta.dirname, '..')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const pages = [
  { file: 'japan-launch.jpg', lines: ['海外で売れた商品を、', '日本でも売れる商品に。'], company: '株式会社Faise', size: 40 },
  { file: 'japan-launch-en.jpg', lines: ['Proven abroad.', 'Launched in Japan.'], company: 'Faise Inc.', size: 44 },
]

const mincho = `'Yu Mincho','YuMincho','Hiragino Mincho ProN',serif`

function base() {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect width="100%" height="100%" fill="#EEECE7"/>
  <text x="${W / 2}" y="392" text-anchor="middle" font-family="Impact, 'Arial Black', sans-serif" font-size="330" fill="#7A302D" textLength="1080" lengthAdjust="spacingAndGlyphs">JAPAN</text>
  <text x="60" y="62" font-family="Arial, sans-serif" font-size="18" font-weight="700" letter-spacing="5" fill="#7A302D">JAPAN LAUNCH BY FAISE</text>
</svg>`)
}

function overlay(p) {
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <text x="60" y="${H - 92}" font-family="${mincho}" font-size="${p.size}" font-weight="700" fill="#1D1B1A">${esc(p.lines[0])}</text>
  <text x="60" y="${H - 40}" font-family="${mincho}" font-size="${p.size}" font-weight="700" fill="#7A302D">${esc(p.lines[1])}</text>
  <text x="${W - 60}" y="62" text-anchor="end" font-family="${mincho}" font-size="22" font-weight="700" fill="#1D1B1A">${esc(p.company)}</text>
</svg>`)
}

const torii = await sharp(path.join(root, 'public/images/japan-launch/hero-torii.webp')).resize({ height: 430 }).png().toBuffer()
const tm = await sharp(torii).metadata()
for (const p of pages) {
  await sharp(base())
    .composite([
      { input: torii, left: W - tm.width - 50, top: H - tm.height - 24 },
      { input: overlay(p), left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(root, 'public', 'og', p.file))
  console.log('wrote', p.file)
}
