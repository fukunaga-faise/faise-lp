// JAPAN NINJA（/en/japan-launch）の OGP 画像（1200x630）。clan 画像に "JAPAN NINJA by Faise" をコードで合成する（文字は画像生成で入れない）。
// 実行: node scripts/generate-og-japan-ninja.mjs → public/og/japan-ninja.png
import sharp from 'sharp'
import path from 'node:path'

const W = 1200
const H = 630
const root = path.resolve(import.meta.dirname, '..')
const serif = `'Yu Mincho','YuMincho','Hiragino Mincho ProN',Georgia,serif`

const overlay = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0" stop-color="#141A2E" stop-opacity="0"/>
      <stop offset="0.55" stop-color="#141A2E" stop-opacity="0.15"/>
      <stop offset="1" stop-color="#141A2E" stop-opacity="0.92"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
  <text x="56" y="${H - 104}" font-family="${serif}" font-size="76" font-weight="700" fill="#FFFFFF" letter-spacing="2">JAPAN NINJA</text>
  <text x="58" y="${H - 52}" font-family="Arial, sans-serif" font-size="28" font-weight="700" fill="#F2B4A2" letter-spacing="3">by Faise — your brand’s way into Japan</text>
</svg>`)

const bg = await sharp(path.join(root, 'public/images/japan-ninja/clan.png')).resize(W, H, { fit: 'cover', position: 'top' }).toBuffer()
await sharp(bg).composite([{ input: overlay }]).png({ compressionLevel: 9 }).toFile(path.join(root, 'public/og/japan-ninja.png'))
console.log('wrote public/og/japan-ninja.png')
