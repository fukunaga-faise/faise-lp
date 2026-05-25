import sharp from 'sharp'

const meta = await sharp('public/logo-transparent.png').metadata()
const cropHeight = Math.round(meta.height * 0.62)

// crop to F mark area then trim transparent edges
await sharp('public/logo-transparent.png')
  .extract({ left: 0, top: 0, width: meta.width, height: cropHeight })
  .trim()
  .png()
  .toFile('public/logo-fmark.png')

const out = await sharp('public/logo-fmark.png').metadata()
console.log(`✓ logo-fmark.png saved (${out.width}×${out.height})`)
