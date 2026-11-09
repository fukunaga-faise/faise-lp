// Japan Launch LP の OGP 画像（1200x630）。ヒーローと同じ「海外｜日本」の左右分割写真を右に置く。
// 実行: node scripts/generate-og-japan-launch.mjs
// 文字は Windows の 游明朝 で描画する（生成済み画像をコミットする運用）。
import sharp from 'sharp'
import path from 'node:path'

const W = 1200
const H = 630
const PANEL = 520
const root = path.resolve(import.meta.dirname, '..')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const mincho = `'Yu Mincho','YuMincho','Hiragino Mincho ProN',serif`

const pages = [
  { file: 'japan-launch.jpg', lines: ['海外で売れた商品を、', '日本でも売れる', '商品に。'], size: 46, company: '株式会社Faise', chips: ['海外', '日本'] },
  { file: 'japan-launch-en.jpg', lines: ['Proven abroad.', 'Launched', 'in Japan.'], size: 56, company: 'Faise Inc.', chips: ['Abroad', 'Japan'] },
]

function overlay(p) {
  const lh = p.size * 1.32
  const y0 = 236
  const lines = p.lines
    .map((l, i) => `<text x="56" y="${y0 + i * lh}" font-family="${mincho}" font-size="${p.size}" font-weight="700" fill="${i === 0 ? '#1D1B1A' : '#7A302D'}">${esc(l)}</text>`)
    .join('')
  const cx = PANEL + (W - PANEL) / 2
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <rect x="0" y="0" width="${PANEL}" height="${H}" fill="#EEECE7"/>
  <rect x="56" y="70" width="44" height="44" rx="3" fill="none" stroke="#D2492B" stroke-width="2.5"/>
  <text x="78" y="89" text-anchor="middle" font-family="${mincho}" font-size="15" font-weight="700" fill="#D2492B">上</text>
  <text x="78" y="107" text-anchor="middle" font-family="${mincho}" font-size="15" font-weight="700" fill="#D2492B">陸</text>
  <text x="118" y="98" font-family="Arial, sans-serif" font-size="16" font-weight="700" letter-spacing="4" fill="#7A302D">JAPAN LAUNCH BY FAISE</text>
  ${lines}
  <text x="56" y="${H - 52}" font-family="${mincho}" font-size="22" font-weight="700" fill="#1D1B1A">${esc(p.company)}</text>
  <rect x="${cx - 150}" y="${H - 74}" width="120" height="40" rx="20" fill="#000" fill-opacity=".55"/>
  <text x="${cx - 90}" y="${H - 47}" text-anchor="middle" font-family="${mincho}" font-size="19" font-weight="700" fill="#fff">${esc(p.chips[0])}</text>
  <text x="${cx}" y="${H - 46}" text-anchor="middle" font-family="Arial" font-size="20" font-weight="700" fill="#fff">→</text>
  <rect x="${cx + 30}" y="${H - 74}" width="120" height="40" rx="20" fill="#7A302D"/>
  <text x="${cx + 90}" y="${H - 47}" text-anchor="middle" font-family="${mincho}" font-size="19" font-weight="700" fill="#fff">${esc(p.chips[1])}</text>
</svg>`)
}

// 分割線（元画像の中央）が写真エリアの中央に来るように切り抜く
const photo = await sharp(path.join(root, 'public/images/japan-launch/hero-abroad-japan.jpg')).resize(W - PANEL, H, { fit: 'cover', position: 'centre' }).toBuffer()
for (const p of pages) {
  await sharp({ create: { width: W, height: H, channels: 3, background: '#EEECE7' } })
    .composite([
      { input: photo, left: PANEL, top: 0 },
      { input: overlay(p), left: 0, top: 0 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(root, 'public', 'og', p.file))
  console.log('wrote', p.file)
}
