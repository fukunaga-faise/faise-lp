import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const API_KEY = process.env.GEMINI_API_KEY

const images = [
  {
    filename: 'service-gym.jpg',
    prompt: 'High-end luxury personal training gym interior, professional personal trainer coaching client, warm cinematic golden lighting, modern minimalist fitness studio, aspirational lifestyle photography, wide shot, editorial style, japanese aesthetic',
  },
  {
    filename: 'service-clinic.jpg',
    prompt: 'Luxury beauty aesthetic clinic interior, clean white minimalist treatment room, soft natural diffused lighting, high-end medical spa atmosphere, elegant sophisticated clinical environment, professional, editorial photography, japanese high-end clinic',
  },
  {
    filename: 'service-video.jpg',
    prompt: 'Professional video production behind the scenes, cinema camera rig on set, creative director working, dramatic cinematic lighting, modern content creation studio, dark moody atmosphere, film production team, artistic',
  },
]

async function generateWithImagen(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '4:3' },
    }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  const data = await res.json()
  return data.predictions[0].bytesBase64Encoded
}

async function main() {
  const outDir = join(process.cwd(), 'public', 'images')
  mkdirSync(outDir, { recursive: true })
  console.log('Generating images with Imagen 3...\n')

  for (const img of images) {
    process.stdout.write(`→ ${img.filename} ... `)
    try {
      const b64 = await generateWithImagen(img.prompt)
      writeFileSync(join(outDir, img.filename), Buffer.from(b64, 'base64'))
      console.log('✓')
    } catch (err) {
      console.log(`✗  ${err.message}`)
    }
  }

  console.log('\nDone. Check public/images/')
}

main()
