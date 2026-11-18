// LAUNCH NINJA by Faise のブランド素材を書き出す。
//  - ファビコン:  public/images/japan-ninja/launch-ninja-icon.svg / -192.png / -512.png / launch-ninja-apple.png
//  - ロゴ画像:    public/images/japan-ninja/launch-ninja-logo-light.png / -dark.png（透過・資料用）
//  - OGP:         public/og/launch-ninja.jpg（1200x630）
// ロゴタイプは Anton（Google Fonts）なので、ロゴ画像と OGP は Edge（ヘッドレス）で HTML を描画して作る。
// マーク（図形のみ）は src/components/LaunchNinjaLogo.tsx と同じ形。変えるときは両方そろえる。
// 実行: node scripts/generate-launch-ninja-brand.mjs
import sharp from 'sharp'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'

const root = path.resolve(import.meta.dirname, '..')
const out = (p) => path.join(root, 'public', p)

const markPaths = (tail) => `
  <circle cx="50" cy="52" r="44" fill="#D2492B"/>
  <path fill="#1D1B1A" d="M8.4 40 H91.6 A44 44 0 0 1 91.6 64 H8.4 A44 44 0 0 1 8.4 40 Z"/>
  <path fill="#FFFFFF" d="M28 53 Q37 44 47 51 Q37 57 28 53Z"/>
  <path fill="#FFFFFF" d="M72 53 Q63 44 53 51 Q63 57 72 53Z"/>
  <path fill="${tail}" d="M90 44 C99 37 103 26 109 12 L103 10 C98 22 94 31 87 36Z"/>
  <path fill="${tail}" d="M91 52 C101 50 106 41 110 30 L104 28 C100 37 97 43 90 46Z"/>`
const markSvg = (tail = '#1D1B1A', viewBox = '0 0 112 100') => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}">${markPaths(tail)}</svg>`

// --- ファビコン（正方形に収める）
const squareMark = markSvg('#1D1B1A', '-1 -4 114 112')
fs.writeFileSync(out('images/japan-ninja/launch-ninja-icon.svg'), squareMark)
for (const s of [192, 512]) await sharp(Buffer.from(squareMark), { density: 600 }).resize(s, s).png().toFile(out(`images/japan-ninja/launch-ninja-icon-${s}.png`))
// iOS ホーム画面用：和紙色の背景に余白をとって配置
const appleInner = await sharp(Buffer.from(squareMark), { density: 600 }).resize(132, 132).png().toBuffer()
await sharp({ create: { width: 180, height: 180, channels: 4, background: '#EEECE7' } })
  .composite([{ input: appleInner, top: 24, left: 24 }])
  .png()
  .toFile(out('images/japan-ninja/launch-ninja-apple.png'))

// --- Edge で HTML を描画
const edge = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe'].find((p) => fs.existsSync(p))
if (!edge) throw new Error('Microsoft Edge が見つかりません')
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'launch-ninja-'))
const shot = (name, html, w, h, transparent = false) => {
  const file = path.join(tmp, `${name}.html`)
  fs.writeFileSync(file, html)
  const png = path.join(tmp, `${name}.png`)
  execFileSync(edge, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', `--user-data-dir=${path.join(tmp, 'profile')}`,
    '--virtual-time-budget=6000', `--window-size=${w},${h}`, `--screenshot=${png}`,
    ...(transparent ? ['--default-background-color=00000000'] : []),
    pathToFileURL(file).href,
  ])
  // Windows の msedge.exe は描画の完了を待たずに戻ることがあるので、書き出されるまで待つ
  const until = Date.now() + 30000
  while (!(fs.existsSync(png) && fs.statSync(png).size > 0)) {
    if (Date.now() > until) throw new Error(`screenshot timed out: ${name}`)
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 300)
  }
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 500)
  return png
}
const head = `<meta charset="utf-8"><link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@600;700&display=block" rel="stylesheet">
<style>*{margin:0;box-sizing:border-box}html,body{background:transparent}
.logo{display:inline-flex;align-items:center;gap:26px;padding:24px}
.logo svg{height:150px;width:auto}
.wm{font-family:Anton;font-size:96px;line-height:.95;letter-spacing:.02em}
.wm .n{color:#D2492B}
.by{font:600 22px Inter;letter-spacing:.32em;margin-top:10px}</style>`

for (const tone of ['light', 'dark']) {
  const ink = tone === 'dark' ? '#FFFFFF' : '#1D1B1A'
  const by = tone === 'dark' ? 'rgba(255,255,255,.7)' : '#5f5f5f'
  const html = `<!doctype html><html><head>${head}</head><body><div class="logo">${markSvg(tone === 'dark' ? '#FFFFFF' : '#1D1B1A')}
    <div><div class="wm" style="color:${ink}">LAUNCH <span class="n">NINJA</span></div><div class="by" style="color:${by}">BY FAISE</div></div></div></body></html>`
  const png = shot(`logo-${tone}`, html, 1100, 260, true)
  await sharp(png).trim().png().toFile(out(`images/japan-ninja/launch-ninja-logo-${tone}.png`))
}

// --- OGP：4人の集合イラストの上にロゴとキャッチ
const clan = pathToFileURL(out('images/japan-ninja/web/clan.webp')).href
const og = `<!doctype html><html><head>${head}<style>
body{width:1200px;height:630px;position:relative;overflow:hidden;background:#141A2E}
.bg{position:absolute;inset:0;background:url('${clan}') center top/cover}
.fade{position:absolute;inset:0;background:linear-gradient(180deg,rgba(20,26,46,0) 0%,rgba(20,26,46,.15) 45%,rgba(20,26,46,.94) 100%)}
.box{position:absolute;left:52px;bottom:44px}
.box .logo{padding:0}.box svg{height:118px}.box .wm{font-size:84px;color:#fff}.box .by{color:rgba(255,255,255,.75);font-size:18px}
.tag{margin-top:18px;font:700 28px Inter;letter-spacing:.02em;color:#F2B4A2}
</style></head><body><div class="bg"></div><div class="fade"></div>
<div class="box"><div class="logo">${markSvg('#FFFFFF')}<div><div class="wm">LAUNCH <span class="n">NINJA</span></div><div class="by">BY FAISE</div></div></div>
<p class="tag">Japan has unwritten rules. Your brand needs a ninja.</p></div></body></html>`
const ogPng = shot('og', og, 1200, 630)
await sharp(ogPng).resize(1200, 630, { fit: 'cover', position: 'top' }).jpeg({ quality: 84, mozjpeg: true }).toFile(out('og/launch-ninja.jpg'))

fs.rmSync(tmp, { recursive: true, force: true })
console.log('wrote favicon, logo images and public/og/launch-ninja.jpg')
