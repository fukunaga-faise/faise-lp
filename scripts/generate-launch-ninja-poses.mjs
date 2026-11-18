// LAUNCH NINJA（/en/launch-ninja）の各セクションに登場させる、4人の「ポーズ違い」の切り抜きイラスト（背景透過）を生成する。
// 各キャラの既存の一枚絵（public/images/japan-ninja/<name>.png）を参照画像として渡し（images/edits）、顔・衣装・配色をそろえる。
// 実行: node --env-file=<OPENAI_API_KEY を含む .env> scripts/generate-launch-ninja-poses.mjs [ポーズ名 ...]（省略で全部）
// 出力: public/images/japan-ninja/poses/<pose>.png（透過）と web/pose-<pose>.webp（表示用）
// - 特定の作品・作家の模写はしない。既存のゲーム・アニメ・映画のキャラクターに似せない
// - 文字・漢字・ロゴ・ブランド名は入れない
import sharp from 'sharp'
import { mkdir, readFile } from 'node:fs/promises'
import path from 'node:path'

const KEY = process.env.OPENAI_API_KEY
if (!KEY) throw new Error('OPENAI_API_KEY is not set')

const root = path.resolve(import.meta.dirname, '..', 'public', 'images', 'japan-ninja')
const outDir = path.join(root, 'poses')
const webDir = path.join(root, 'web')
await mkdir(outDir, { recursive: true })

const STYLE =
  'Redraw the exact same character from the reference image (same face, hair, outfit, colors and woodblock line style) as a single full-body cut-out figure in a new pose, in the style of a traditional Japanese ukiyo-e woodblock print: bold black key lines, flat muted colors, washi grain inside the figure. Transparent background: no scenery, no ground, no frame, no shadow box — only the character and the props they hold. Modern props drawn in the same woodblock style. No text, no kanji, no letters, no seals, no logos, no brand names. Do not copy any existing artwork and do not resemble any existing game, anime or film character.'

const poses = {
  'hanzo-map': ['hanzo', 'Hanzo unrolls a long paper scroll map of Japan with one hand and points at it with the other, calm and confident, looking at the viewer.'],
  'hanzo-contract': ['hanzo', 'Hanzo bows slightly and holds out a rolled scroll tied with a vermilion cord in both hands, offering a partnership agreement, respectful and trustworthy.'],
  'hanzo-shield': ['hanzo', 'Hanzo stands guard holding a round vermilion lacquered shield in one hand and a checklist clipboard in the other, protective and reliable.'],
  'basho-write': ['basho', 'Basho writes with a large brush pen on a floating blank sheet of paper beside a laptop, focused, a gentle smile, mid brush stroke.'],
  'basho-read': ['basho', 'Basho sits cross-legged reading an open paper scroll, one finger raised as if explaining something kindly, a cup of tea beside him.'],
  'chiyome-film': ['chiyome', 'Chiyome films with a smartphone on a small handheld gimbal, winking, one knee forward in a dynamic pose, a few cherry blossom petals around her.'],
  'chiyome-letter': ['chiyome', 'Chiyome holds up a folded letter sealed with a vermilion wax seal and waves cheerfully with the other hand, as if saying send us a message.'],
  'kotaro-leap': ['kotaro', 'Kotaro leaps high through the air in a dynamic jump, one arm thrown forward holding a kunai, a big rising arrow chart drawn as a hologram behind him.'],
  'kotaro-box': ['kotaro', 'Kotaro runs fast carrying a plain cardboard delivery box under one arm, scarf flying, grinning, like an Edo courier.'],
  'kotaro-megaphone': ['kotaro', 'Kotaro shouts through a red megaphone while holding up a smartphone showing an ad with a play button, energetic.'],
}

const only = process.argv.slice(2)
const names = Object.keys(poses).filter((n) => only.length === 0 || only.includes(n))

async function generate(name) {
  const [ref, pose] = poses[name]
  const fd = new FormData()
  fd.append('model', process.env.POSE_MODEL || 'gpt-image-1.5')
  fd.append('prompt', `${STYLE} ${pose}`)
  fd.append('size', '1024x1536')
  fd.append('quality', 'high')
  fd.append('background', 'transparent')
  fd.append('output_format', 'png')
  fd.append('image[]', new Blob([await readFile(path.join(root, `${ref}.png`))], { type: 'image/png' }), `${ref}.png`)
  const res = await fetch('https://api.openai.com/v1/images/edits', { method: 'POST', headers: { Authorization: `Bearer ${KEY}` }, body: fd })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  const buf = Buffer.from((await res.json()).data[0].b64_json, 'base64')
  // 余白を切り詰めて保存（透過PNG）。表示用は高さ 600px の WebP
  const trimmed = await sharp(buf).trim().png().toBuffer()
  await sharp(trimmed).png({ compressionLevel: 9 }).toFile(path.join(outDir, `${name}.png`))
  await sharp(trimmed).resize({ height: 600, withoutEnlargement: true }).webp({ quality: 74, alphaQuality: 85 }).toFile(path.join(webDir, `pose-${name}.webp`))
}

await Promise.all(
  names.map(async (n) => {
    try {
      await generate(n)
      console.log(`→ ${n} ok`)
    } catch (e) {
      console.log(`→ ${n} failed: ${e.message}`)
    }
  }),
)
