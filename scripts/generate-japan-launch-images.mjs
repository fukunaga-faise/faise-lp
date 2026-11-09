// Japan Launch LP 用の画像を Imagen で生成し、Web 用に縮小して public/images/japan-launch/ に書き出す。
// 実行: node --env-file=<GEMINI_API_KEY を含む .env> scripts/generate-japan-launch-images.mjs [ファイル名...]
// 生成画像は AI 生成のイメージ素材（実在の商品・ブランド・人物ではない）。ロゴや文字が入らないようにプロンプトで指定している。
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

// 既定は Gemini（GEMINI_API_KEY）。IMAGE_PROVIDER=openai で OpenAI（OPENAI_API_KEY）を使う
const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY && process.env.IMAGE_PROVIDER !== 'openai') throw new Error('GEMINI_API_KEY is not set')

const common = 'no text, no logos, no brand names, no watermark, photorealistic editorial photography, soft natural light, clean bright composition, subtle cool blue accents'

const images = [
  { file: 'gadgets', ratio: '4:3', prompt: `A sleek minimalist consumer electronics gadget (unbranded wireless earbuds case and a small smart device) on a light wooden desk in a bright modern Tokyo apartment, ${common}` },
  { file: 'lifestyle', ratio: '4:3', prompt: `Unbranded lifestyle products: a matte insulated bottle, a minimal canvas backpack and a compact camping lantern arranged on a cafe table near a window in Tokyo, ${common}` },
  { file: 'beauty', ratio: '4:3', prompt: `Unbranded minimalist skincare bottles and a jar on smooth light stone with water reflections, Japanese aesthetic, ${common}` },
  { file: 'tokyo', ratio: '16:9', prompt: `A lively shopping street in Tokyo at early evening, people browsing stores, shallow depth of field, faces not identifiable, ${common}` },
  { file: 'shoot', ratio: '4:3', prompt: `Behind the scenes of a short-form vertical video shoot: a smartphone on a small tripod with a ring light filming an unbranded gadget held by a young Japanese creator's hands at a desk, face out of frame, ${common}` },
  { file: 'launch', ratio: '16:9', prompt: `An unbranded premium product shipping box being opened on a white table, with a soft-focus Tokyo skyline at dusk through a large window behind, sense of arrival, ${common}` },
]

// 背景透過の切り抜き素材（ヒーロー用）。OpenAI のみ・PNG のまま保存する
const cutouts = [
  {
    file: 'hero-torii',
    prompt:
      'Real documentary photograph of an authentic wooden Japanese shrine torii gate freshly maintained with smooth satin vermilion lacquer (deep red-orange, slightly muted), faint wood grain visible under the paint, like a well-kept city shrine in Tokyo, black kasagi top beam, photographed straight-on with a 50mm lens, and in front of it on the ground a small arranged group of unbranded overseas products: a premium white product shipping box, a sleek white wireless earbuds case, a minimal smart speaker and a frosted skincare bottle. Isolated cutout on a fully transparent background, no ground plane, only a very soft contact shadow under the objects, no text, no logos, no brand names, high-end editorial product photography, natural materials and real textures (not a 3D render), crisp clean edges, soft even daylight, centered, the whole gate visible with margin around it',
  },
]

async function generateCutout(prompt) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: 'gpt-image-1.5', prompt, size: '1536x1024', quality: 'high', background: 'transparent', output_format: 'png', n: 1 }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  return Buffer.from((await res.json()).data[0].b64_json, 'base64')
}

// OpenAI（IMAGE_PROVIDER=openai）。横長は 1536x1024 で生成してから切り抜く
async function generateOpenAI(prompt) {
  const res = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.OPENAI_API_KEY}` },
    body: JSON.stringify({ model: process.env.IMAGE_MODEL || 'gpt-image-1', prompt, size: '1536x1024', quality: 'high', n: 1 }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = await res.json()
  return Buffer.from(data.data[0].b64_json, 'base64')
}

async function generate(prompt, aspectRatio) {
  if (process.env.IMAGE_PROVIDER === 'openai') {
    const raw = await generateOpenAI(prompt)
    const [w, h] = aspectRatio.split(':').map(Number)
    const height = Math.round(1536 * (h / w))
    return sharp(raw).resize(1536, Math.min(height, 1024), { fit: 'cover' }).toBuffer()
  }
  const model = process.env.IMAGE_MODEL || 'gemini-3-pro-image'
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${API_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: { responseModalities: ['IMAGE'], imageConfig: { aspectRatio } },
    }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${(await res.text()).slice(0, 300)}`)
  const data = await res.json()
  const part = data.candidates?.[0]?.content?.parts?.find((p) => p.inlineData)
  if (!part) throw new Error(`no image in response: ${JSON.stringify(data).slice(0, 300)}`)
  return Buffer.from(part.inlineData.data, 'base64')
}

const only = process.argv.slice(2)
const out = path.resolve(import.meta.dirname, '..', 'public', 'images', 'japan-launch')
await mkdir(out, { recursive: true })
for (const img of images.filter((i) => !only.length || only.includes(i.file))) {
  process.stdout.write(`→ ${img.file} ... `)
  try {
    const raw = await generate(img.prompt, img.ratio)
    await sharp(raw).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(out, `${img.file}.jpg`))
    console.log('ok')
  } catch (e) {
    console.log(`failed: ${e.message}`)
  }
}

// 切り抜き素材は余白をトリムして WebP（透過）で保存する
for (const c of cutouts.filter((i) => only.includes(i.file))) {
  process.stdout.write(`→ ${c.file} (cutout) ... `)
  try {
    const raw = await generateCutout(c.prompt)
    await sharp(raw).trim().resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 86, alphaQuality: 90 }).toFile(path.join(out, `${c.file}.webp`))
    console.log('ok')
  } catch (e) {
    console.log(`failed: ${e.message}`)
  }
}
