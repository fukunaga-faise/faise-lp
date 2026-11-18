// JAPAN NINJA（/en/japan-launch）で使う画像を、表示サイズに合わせた WebP に変換して public/images/japan-ninja/web/ に書き出す。
// ページ側は next/image の最適化（/_next/image）を通さず（unoptimized）、この静的ファイルを直接配信する。
// 実行: node scripts/build-japan-ninja-webp.mjs
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

const root = path.resolve(import.meta.dirname, '..')
const out = path.join(root, 'public/images/japan-ninja/web')
await mkdir(out, { recursive: true })

// [出力名, 元画像, 幅, 画質（省略時 78。浮世絵は紙の質感で重くなるので低め）]
const jobs = [
  ['clan', 'public/images/japan-ninja/clan.png', 1200, 66],
  ['hero-bg', 'public/images/japan-ninja/hero-bg.png', 1600, 60],
  ['hero-bg-sm', 'public/images/japan-ninja/hero-bg.png', 900, 55],
  ['edo-market', 'public/images/japan-ninja/edo-market.png', 1000, 66],
  ['edo-beauty', 'public/images/japan-ninja/edo-beauty.png', 800, 66],
  ['edo-lifestyle', 'public/images/japan-ninja/edo-lifestyle.png', 800, 66],
  ['edo-gadgets', 'public/images/japan-ninja/edo-gadgets.png', 800, 66],
  ['edo-night-street', 'public/images/japan-ninja/edo-night-street.png', 1400, 58],
  ['hanzo', 'public/images/japan-ninja/hanzo.png', 560, 66],
  ['basho', 'public/images/japan-ninja/basho.png', 560, 66],
  ['chiyome', 'public/images/japan-ninja/chiyome.png', 560, 66],
  ['kotaro', 'public/images/japan-ninja/kotaro.png', 560, 66],
  ['tokyo', 'public/images/japan-launch/tokyo.jpg', 1000],
  ['beauty', 'public/images/japan-launch/beauty.jpg', 800],
  ['lifestyle', 'public/images/japan-launch/lifestyle.jpg', 800],
  ['gadgets', 'public/images/japan-launch/gadgets.jpg', 800],
  ['bg-street', 'public/images/japan-launch/bg-street.jpg', 1400],
  ['case-cyspera', 'public/images/japan-launch/case-cyspera.jpg', 320],
  ['reel-1', 'public/images/japan-launch/cyspera-reel-1.jpg', 540],
  ['reel-2', 'public/images/japan-launch/cyspera-reel-2.jpg', 540],
  ['reel-3', 'public/images/japan-launch/cyspera-reel-3.jpg', 540],
  ['founder', 'public/images/japan-launch/founder-portrait.jpg', 680],
]

for (const [name, src, width, quality = 78] of jobs) {
  const info = await sharp(path.join(root, src))
    .resize({ width, withoutEnlargement: true })
    .webp({ quality })
    .toFile(path.join(out, `${name}.webp`))
  console.log(name, `${info.width}x${info.height}`, `${Math.round(info.size / 1024)}KB`)
}
