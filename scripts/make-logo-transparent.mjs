import sharp from 'sharp'

const { data, info } = await sharp('public/logo.png')
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })

const pixels = new Uint8Array(data)

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i], g = pixels[i + 1], b = pixels[i + 2]
  // make near-white pixels transparent
  if (r > 220 && g > 220 && b > 220) {
    pixels[i + 3] = 0
  }
}

await sharp(Buffer.from(pixels), {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toFile('public/logo-transparent.png')

console.log('✓ logo-transparent.png saved')
