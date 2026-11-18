// JAPAN NINJA（/en/japan-launch）のキャラクター画像を OpenAI で生成し、PNG と WebP で public/images/japan-ninja/ に保存する。
// 実行: node --env-file=<OPENAI_API_KEY を含む .env> scripts/generate-japan-ninja-images.mjs [hanzo basho chiyome kotaro clan]
// - 4人は同じ共通スタイル指定（レトロな浮世絵・木版画風）で、背景込みの縦長の「一枚絵」として生成する
//   （特定の作品・作家の模写はしない。ジャンルとしての浮世絵の特徴のみを指定）
// - clan は4人の生成済み画像を参照画像として渡し（images/edits）、絵柄と配色をそろえる
// - 既存のゲーム・アニメ・映画のキャラクターに似せない（プロンプトで明示）
import sharp from 'sharp'
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'

const KEY = process.env.OPENAI_API_KEY
if (!KEY) throw new Error('OPENAI_API_KEY is not set')

const STYLE =
  'Original illustration in the style of a traditional Japanese ukiyo-e woodblock print, Edo-period kabuki actor print aesthetic: bold black key lines, flat areas of muted color, limited palette of Prussian blue, indigo, vermilion, ochre and sumi black, visible washi paper grain and slight registration offset, stylized clouds, waves or lightning in the background, tall vertical print composition, full body, a fusion of a historical Japanese ninja and a modern marketing professional with modern props drawn in the same woodblock style, witty and confident expression. No text, no kanji, no letters, no seals, no signature, no cartouches with writing, no logos. Do not copy any specific existing artwork or artist, and do not resemble any existing game, anime or film character.'

const chars = {
  hanzo:
    'Hattori Hanzo as a calm strategist ninja leader, indigo ninja outfit with subtle modern tailoring, short dark hair tied back, holding a glowing tablet showing a map of Japan with data overlays, a small folded map scroll at the belt, steady commanding pose, background of a misty mountain pass at dusk with stylized clouds.',
  basho:
    "Matsuo Basho as a poet-ninja copywriter, moss green ninja outfit with a traveler's straw hat on his back, gentle older face with a neat topknot, holding a brush pen in one hand and a laptop in the other, floating blank paper cards (no writing), thoughtful smile, background of a moonlit pond with willow branches.",
  chiyome:
    'Mochizuki Chiyome as a kunoichi network leader, crimson ninja outfit inspired by shrine-maiden elements with full-length wide hakama-style trousers and a practical professional look (no short skirt, no thigh-high stockings), long black hair in a high ponytail, holding a smartphone on a mini ring light, small round floating portraits of creators around her, confident charismatic pose, background of swirling clouds and falling cherry blossom petals.',
  kotaro:
    'Fuma Kotaro as a bold growth-hacker ninja, charcoal ninja outfit with orange accents, tall with wild spiky hair, holding a kunai in one hand and a rising sales chart hologram in the other, dynamic action pose, background of a stormy night sea with great curling waves and lightning.',
}
const CLAN =
  'All four characters above standing together as a team in one wide ukiyo-e print, in front of a night Tokyo skyline with Tokyo Tower rendered in woodblock style, stylized clouds and a full moon, Hanzo in the center, each keeping their colors and props, playful heroic group pose.'

const out = path.resolve(import.meta.dirname, '..', 'public', 'images', 'japan-ninja')
await mkdir(out, { recursive: true })

async function save(name, buf, { maxH = 1200 } = {}) {
  const img = sharp(buf)
  await img.clone().resize({ height: maxH, withoutEnlargement: true }).png({ compressionLevel: 9 }).toFile(path.join(out, `${name}.png`))
  await img.clone().resize({ height: maxH, withoutEnlargement: true }).webp({ quality: 84, alphaQuality: 90 }).toFile(path.join(out, `${name}.webp`))
}

async function generateChar(name) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
    body: JSON.stringify({
      model: process.env.CHAR_MODEL || 'gpt-image-2',
      prompt: `${STYLE} ${chars[name]}`,
      size: '1024x1536',
      quality: 'high',
      n: 1,
    }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  const buf = Buffer.from((await res.json()).data[0].b64_json, 'base64')
  await save(name, buf, { maxH: 1400 })
}

async function generateClan() {
  const fd = new FormData()
  fd.append('model', process.env.CLAN_MODEL || 'gpt-image-2')
  fd.append('prompt', `${STYLE.replace('tall vertical print composition, full body, ', 'wide horizontal print composition, full body group shot, ')} The four reference images are the exact characters (same faces, outfits, colors and props): Hattori Hanzo (indigo), Matsuo Basho (moss green), Mochizuki Chiyome (crimson), Fuma Kotaro (charcoal and orange). ${CLAN}`)
  fd.append('size', '1536x1024')
  fd.append('quality', 'high')
  for (const n of ['hanzo', 'basho', 'chiyome', 'kotaro']) {
    const png = await readFile(path.join(out, `${n}.png`))
    fd.append('image[]', new Blob([png], { type: 'image/png' }), `${n}.png`)
  }
  const res = await fetch('https://api.openai.com/v1/images/edits', { method: 'POST', headers: { Authorization: `Bearer ${KEY}` }, body: fd })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  const buf = Buffer.from((await res.json()).data[0].b64_json, 'base64')
  // 16:9 に切り抜いて保存
  await save('clan', await sharp(buf).resize(1536, 864, { fit: 'cover', position: 'centre' }).toBuffer(), { maxH: 864 })
}

const only = process.argv.slice(2)
const want = (n) => !only.length || only.includes(n)
const names = Object.keys(chars).filter(want)
await Promise.all(
  names.map(async (n) => {
    try {
      await generateChar(n)
      console.log(`→ ${n} ok`)
    } catch (e) {
      console.log(`→ ${n} failed: ${e.message}`)
    }
  }),
)
if (want('clan')) {
  try {
    await generateClan()
    console.log('→ clan ok')
  } catch (e) {
    console.log(`→ clan failed: ${e.message}`)
  }
}

// ヒーロー背景（人物なしの情景。左側は見出しを載せるので暗く空けておく）
const HERO_BG =
  'Original wide landscape illustration in the style of a traditional Japanese ukiyo-e woodblock print: a deep indigo night over the tiled rooftops of an Edo-period town, a large pale full moon on the right, stylized swirling clouds, three small black ninja silhouettes leaping between rooftops on the right half, a few shuriken flying through the air, subtle washi paper grain, limited palette of Prussian blue, indigo and sumi black with faint vermilion accents. The left half is mostly calm dark night sky with clouds and no figures, leaving empty space for text. No text, no kanji, no letters, no seals, no signature, no logos. Do not copy any specific existing artwork or artist.'

if (want('hero-bg')) {
  try {
    const res = await fetch('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${KEY}` },
      body: JSON.stringify({ model: 'gpt-image-2', prompt: HERO_BG, size: '1536x1024', quality: 'high', n: 1 }),
    })
    if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
    const buf = Buffer.from((await res.json()).data[0].b64_json, 'base64')
    await save('hero-bg', buf, { maxH: 1024 })
    console.log('→ hero-bg ok')
  } catch (e) {
    console.log(`→ hero-bg failed: ${e.message}`)
  }
}
