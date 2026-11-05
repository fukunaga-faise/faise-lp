// SNSシェア用のOGP画像（1200x630）を生成して public/og/ に書き出す。
// 文言や写真を変えたらこのスクリプトを再実行する: node scripts/generate-og.mjs
// 日本語は Windows の Noto Sans JP / 游ゴシック で描画する（生成済みPNGをコミットする運用）。
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const W = 1200
const H = 630
const root = path.resolve(import.meta.dirname, '..')
const out = path.join(root, 'public', 'og')

const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const pages = [
  {
    file: 'home.jpg',
    photo: 'public/images/redesign/hero-building.jpg',
    eyebrow: 'EXPERIENCE DESIGN MARKETING',
    lines: ['人が集まる理由を、', '設計する。'],
    sub: ['ブランド・体験・マーケティングで、', '事業が選ばれる仕組みをつくる。'],
  },
  {
    file: 'clinic.jpg',
    photo: 'public/images/redesign/beauty-clinic.jpg',
    eyebrow: 'FOR BEAUTY CLINIC',
    lines: ['美容クリニックの', '集客支援'],
    sub: ['インフルエンサー × SNS広告で新規患者を獲得。', '初期費用・月額固定費0円の成果報酬型プランあり。'],
  },
  {
    file: 'home-en.jpg',
    photo: 'public/images/redesign/hero-building.jpg',
    eyebrow: 'EXPERIENCE DESIGN MARKETING',
    lines: ['The reason people', 'gather, designed.'],
    sub: ['Brand, experience and marketing that', 'get businesses chosen. Tokyo, Japan.'],
    company: 'Faise Inc.',
  },
  {
    file: 'clinic-en.jpg',
    photo: 'public/images/redesign/beauty-clinic.jpg',
    eyebrow: 'FOR BEAUTY CLINIC',
    lines: ['Marketing for', 'beauty clinics'],
    sub: ['Influencers × social ads to win new patients.', 'Pay-for-performance plan available.'],
    company: 'Faise Inc.',
  },
]

const PANEL = 700 // 左側の白いパネル幅

function overlay({ eyebrow, lines, sub, company = '株式会社Faise' }) {
  const font = `'Noto Sans JP','Yu Gothic','Meiryo',sans-serif`
  const title = lines
    .map((l, i) => `<text x="72" y="${250 + i * 92}" font-family="${font}" font-size="68" font-weight="700" fill="${i === lines.length - 1 ? 'url(#g)' : '#111111'}">${esc(l)}</text>`)
    .join('')
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#1FACE0"/><stop offset="1" stop-color="#2563D6"/></linearGradient>
    <linearGradient id="fade" x1="0" x2="1" y1="0" y2="0"><stop offset="0" stop-color="#ffffff" stop-opacity="1"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></linearGradient>
  </defs>
  <rect x="0" y="0" width="${PANEL}" height="${H}" fill="#ffffff"/>
  <rect x="${PANEL}" y="0" width="140" height="${H}" fill="url(#fade)"/>
  <rect x="0" y="${H - 10}" width="${W}" height="10" fill="url(#g)"/>
  <text x="72" y="150" font-family="Arial, sans-serif" font-size="20" font-weight="700" letter-spacing="5" fill="#1FACE0">${esc(eyebrow)}</text>
  ${title}
  ${sub.map((t, i) => `<text x="72" y="${250 + lines.length * 92 + 6 + i * 40}" font-family="${font}" font-size="24" font-weight="500" fill="#555555">${esc(t)}</text>`).join('')}
  <text x="72" y="560" font-family="${font}" font-size="26" font-weight="700" fill="#14185C">${esc(company)}</text>
</svg>`)
}

await mkdir(out, { recursive: true })
for (const p of pages) {
  const photo = await sharp(path.join(root, p.photo))
    .resize(W - PANEL + 140, H, { fit: 'cover', position: 'centre' })
    .toBuffer()
  const logo = await sharp(path.join(root, 'public/logo-mark.png')).resize({ height: 56 }).toBuffer()
  await sharp({ create: { width: W, height: H, channels: 3, background: '#ffffff' } })
    .composite([
      { input: photo, left: PANEL - 140, top: 0 },
      { input: overlay(p), left: 0, top: 0 },
      { input: logo, left: 72, top: 52 },
    ])
    .jpeg({ quality: 86, mozjpeg: true })
    .toFile(path.join(out, p.file))
  console.log('wrote', path.join('public/og', p.file))
}
