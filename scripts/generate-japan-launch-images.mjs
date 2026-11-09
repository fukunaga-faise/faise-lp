// Japan Launch LP 用の画像を Imagen で生成し、Web 用に縮小して public/images/japan-launch/ に書き出す。
// 実行: node --env-file=<GEMINI_API_KEY を含む .env> scripts/generate-japan-launch-images.mjs [ファイル名...]
// 生成画像は AI 生成のイメージ素材（実在の商品・ブランド・人物ではない）。ロゴや文字が入らないようにプロンプトで指定している。
import sharp from 'sharp'
import { mkdir } from 'node:fs/promises'
import path from 'node:path'

// 既定は Gemini（GEMINI_API_KEY）。IMAGE_PROVIDER=openai で OpenAI（OPENAI_API_KEY）を使う
const API_KEY = process.env.GEMINI_API_KEY
if (!API_KEY && process.env.IMAGE_PROVIDER !== 'openai') throw new Error('GEMINI_API_KEY is not set')

// トンマナ：ヒーロー（海外の部屋 | 日本の和室 の対比）に合わせ、温かい自然光・木・障子・畳・和紙・陶器の質感で統一する
const common = 'no text, no letters, no logos, no brand names, no watermark, photorealistic high-end editorial photography, warm soft natural daylight, natural materials (wood, paper, ceramic, linen), muted warm palette with deep red accents, calm and refined'

const images = [
  {
    file: 'hero-abroad-japan',
    ratio: '3:2',
    prompt: `A split-screen diptych photograph divided exactly in the middle by a thin vertical line. Left half: an unbranded white cylindrical smart speaker on a pale desk in a moody western loft studio with dark brick wall and steel-framed window, dim light, the product placed near the center line, the left part of the left half mostly dark empty wall. Right half: the exact same product, same size and same camera angle, on a low dark wooden table in a bright Japanese tatami room with shoji screens, a cast-iron teapot and a ceramic tea cup beside it, soft warm daylight. ${common}`,
  },
  { file: 'gadgets', ratio: '3:2', prompt: `An unbranded white wireless earbuds case and a small minimal smart device on a low wooden table in a Japanese room with shoji screens behind, a ceramic tea cup nearby, ${common}` },
  { file: 'lifestyle', ratio: '3:2', prompt: `Unbranded lifestyle products — a matte insulated bottle, a linen tote bag and a compact lantern — on the wooden engawa veranda of a Japanese house facing a small moss garden, ${common}` },
  { file: 'beauty', ratio: '3:2', prompt: `Unbranded frosted skincare bottles and a cream jar on a hinoki wood tray beside a Japanese washi paper lamp and a small ikebana branch, ${common}` },
  { file: 'tokyo', ratio: '16:9', prompt: `Inside a refined Japanese select shop with wooden shelves and noren curtain, a few shoppers browsing unbranded modern gadgets and lifestyle goods, faces not identifiable, shallow depth of field, ${common}` },
  // セクション背景用（ページ上では半透明で重ねる）。低コントラスト・余白多め・人物なし
  { file: 'bg-shoji', ratio: '3:2', prompt: `Soft shadows of bamboo leaves falling on a large white shoji paper screen, gentle morning light, very low contrast, mostly empty paper texture, subtle, suitable as a faint website background, no people, ${common}` },
  { file: 'bg-path', ratio: '3:2', prompt: `A Japanese sumi-e ink wash painting of misty layered mountains and a winding path leading into the distance, on warm off-white washi paper, very sparse and airy with large empty areas, soft grey ink, subtle, suitable as a faint website background, no people` },
  { file: 'bg-street', ratio: '3:2', prompt: `A traditional Japanese shopping street at dusk with indigo and red noren curtains and glowing paper lanterns, heavily out of focus with soft bokeh, low contrast, no readable signs, no people in focus, suitable as a faint website background, ${common}` },
  { file: 'bg-garden', ratio: '3:2', prompt: `A quiet Japanese garden with a small arched wooden bridge over a pond in soft morning mist, muted tones, very low contrast, calm and spacious, no people, suitable as a faint website background, ${common}` },
  { file: 'bg-torii', ratio: '3:2', prompt: `A long tunnel of vermilion torii gates in soft light, slightly out of focus, depth receding into the distance, no people, no writing on the gates, suitable as a faint website background, ${common}` },
  { file: 'bg-kumiko', ratio: '3:2', prompt: `Close-up of a Japanese kumiko wooden lattice screen with intricate interlocking geometric pattern, soft warm backlight through paper, shallow depth of field, very low contrast, suitable as a faint website background, no people, ${common}` },
  { file: 'bg-tea', ratio: '3:2', prompt: `A quiet Japanese tea room prepared for a tea ceremony: tatami mats, a kettle on the hearth, a tea bowl and whisk set for a guest, shoji light, calm and spacious with empty areas, no people, suitable as a faint website background, ${common}` },
  { file: 'shoot', ratio: '3:2', prompt: `Behind the scenes of a short-form vertical video shoot in a Japanese room with shoji screens: a smartphone on a small tripod with a soft light filming an unbranded gadget held by a creator's hands on a low wooden table, face out of frame, ${common}` },
]

// 背景透過の切り抜き素材（ヒーロー用）。OpenAI のみ・PNG のまま保存する
// 例: { file: 'hero-xxx', prompt: '... isolated cutout on a fully transparent background ...' }
const cutouts = []

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
// 並列に生成する
await Promise.all(
  images
    .filter((i) => !only.length || only.includes(i.file))
    .map(async (img) => {
      try {
        const raw = await generate(img.prompt, img.ratio)
        await sharp(raw).resize({ width: 1600, withoutEnlargement: true }).jpeg({ quality: img.file.startsWith('hero') ? 86 : 80, mozjpeg: true }).toFile(path.join(out, `${img.file}.jpg`))
        console.log(`→ ${img.file} ok`)
      } catch (e) {
        console.log(`→ ${img.file} failed: ${e.message}`)
      }
    }),
)

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
