import { writeFileSync, mkdirSync } from 'fs'
import { join } from 'path'

const API_KEY = process.env.GEMINI_API_KEY

const sections = [
  {
    filename: 'section-hero.jpg',
    prompt: 'Premium dark website hero section mockup, Japanese marketing company, pure black background #0a0a0a, large bold white Japanese typography "エンタメ発想で、人を動かす。" bottom-left aligned, huge semi-transparent blue-glowing letter F watermark right side occupying full height, subtle blue radial glow effect in background, small navigation bar top with white text links, scroll indicator bottom-right, ultra minimal luxury tech aesthetic, 16:9 widescreen, high-fidelity UI design mockup',
  },
  {
    filename: 'section-mission.jpg',
    prompt: 'Premium dark website mission section mockup, pure black background, centered large white Japanese heading "人は、論理だけでは動かない。" with thin horizontal accent line, three principle cards in row: FEEL / MOVE / EXPERIENCE with small Japanese subtitles, dark charcoal card backgrounds, hairline borders, very minimal spacing, luxury editorial layout, subtle blue glow on active card, 16:9 widescreen, high-fidelity UI design mockup',
  },
  {
    filename: 'section-services.jpg',
    prompt: 'Premium dark website services section mockup, black background, editorial full-width alternating layout, left side: cinematic photo of luxury personal training gym with warm lighting, right side: white Japanese heading text "パーソナルジム支援" with service description and thin arrow link, second row reversed: video production studio photo left, text right, hairline dividers between rows, minimal numbered labels 01 02 03, ultra refined luxury dark design, 16:9 widescreen, high-fidelity UI design mockup',
  },
  {
    filename: 'section-works.jpg',
    prompt: 'Premium dark website case study section mockup, near-black background, large dramatic white number stat "CPA ¥1,000" with sub-label, secondary stat "体験予約 20倍" next to it, full-width moody dark cinematic background image of fitness studio, client logos row: Yoshimoto Kogyo, eLife, wellnessplus in white, thin horizontal rule dividers, section label "Works" in tiny uppercase tracking, 16:9 widescreen, high-fidelity UI design mockup',
  },
  {
    filename: 'section-founder.jpg',
    prompt: 'Premium dark website founder section mockup, dark black background, left side: professional dramatic portrait photo of Japanese male founder in dark minimal clothing, right side: name "福永 悠人" in large white Japanese text, career timeline Sony → 株式会社刀 → Faise in small white text with subtle connecting lines, short philosophy quote in Japanese italic, contact CTA button outline style, ultra premium luxury dark editorial design, 16:9 widescreen, high-fidelity UI design mockup',
  },
  {
    filename: 'section-cta.jpg',
    prompt: 'Premium dark website footer CTA section mockup, pure black background, centered large white Japanese text "まず、話を聞かせてください。" as main CTA heading, thin outline button "無料相談を申し込む" below, small Faise logo top, bottom footer with company address and copyright in very small white/50 text, hairline top border, ultra minimal dark luxury design, 16:9 widescreen, high-fidelity UI design mockup',
  },
]

async function generateWithImagen(prompt) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/imagen-4.0-generate-001:predict?key=${API_KEY}`
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      instances: [{ prompt }],
      parameters: { sampleCount: 1, aspectRatio: '16:9' },
    }),
  })
  if (!res.ok) throw new Error(`${res.status}: ${await res.text()}`)
  const data = await res.json()
  return data.predictions[0].bytesBase64Encoded
}

async function main() {
  const outDir = join(process.cwd(), 'public', 'images')
  mkdirSync(outDir, { recursive: true })
  console.log('Generating Premium Dark section mockups...\n')

  for (const section of sections) {
    process.stdout.write(`→ ${section.filename} ... `)
    try {
      const b64 = await generateWithImagen(section.prompt)
      writeFileSync(join(outDir, section.filename), Buffer.from(b64, 'base64'))
      console.log('✓')
    } catch (err) {
      console.log(`✗  ${err.message}`)
    }
  }

  console.log('\nDone. Check public/images/')
}

main()
