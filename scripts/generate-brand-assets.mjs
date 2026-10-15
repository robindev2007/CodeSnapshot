import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

// SVG definition for Syntax logo (512x512)
const svgLogo = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <!-- Background gradients -->
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="45%" stop-color="#0a0f1d" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="innerGlow" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="rgba(255,255,255,0.15)" />
      <stop offset="100%" stop-color="rgba(255,255,255,0.02)" />
    </linearGradient>

    <!-- Syntax token gradients -->
    <linearGradient id="cyanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>
    
    <linearGradient id="slashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a78bfa" />
      <stop offset="50%" stop-color="#818cf8" />
      <stop offset="100%" stop-color="#6366f1" />
    </linearGradient>

    <linearGradient id="pinkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#e11d48" />
    </linearGradient>

    <!-- Ambient glow filter -->
    <filter id="ambientGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="28" result="blur" />
    </filter>
  </defs>

  <!-- Squircle Base with high-end tech styling -->
  <rect x="20" y="20" width="472" height="472" rx="112" fill="url(#bgGrad)" />
  <rect x="20" y="20" width="472" height="472" rx="112" fill="none" stroke="url(#innerGlow)" stroke-width="3" />

  <!-- Subtle glow beneath tokens -->
  <g filter="url(#ambientGlow)" opacity="0.45">
    <path d="M 185 175 L 105 256 L 185 337" fill="none" stroke="#38bdf8" stroke-width="44" stroke-linecap="round" stroke-linejoin="round" />
    <path d="M 295 145 L 217 367" fill="none" stroke="#818cf8" stroke-width="44" stroke-linecap="round" />
    <path d="M 327 175 L 407 256 L 327 337" fill="none" stroke="#f43f5e" stroke-width="44" stroke-linecap="round" stroke-linejoin="round" />
  </g>

  <!-- Foreground crisp Syntax glyphs -->
  <g>
    <!-- Left Angle Bracket < (representing code input / cyan token) -->
    <path d="M 185 175 L 105 256 L 185 337" 
          fill="none" 
          stroke="url(#cyanGrad)" 
          stroke-width="38" 
          stroke-linecap="round" 
          stroke-linejoin="round" />

    <!-- Center Slash / (representing syntax parser / violet token) -->
    <path d="M 295 145 L 217 367" 
          fill="none" 
          stroke="url(#slashGrad)" 
          stroke-width="38" 
          stroke-linecap="round" />

    <!-- Right Angle Bracket > (representing code output / rose token) -->
    <path d="M 327 175 L 407 256 L 327 337" 
          fill="none" 
          stroke="url(#pinkGrad)" 
          stroke-width="38" 
          stroke-linecap="round" 
          stroke-linejoin="round" />
  </g>
</svg>`;

// Function to create an ICO buffer containing multiple PNGs
function createIco(images) {
  // images: Array<{ width, height, buffer }>
  const count = images.length;
  let offset = 6 + count * 16;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type 1 = ICO
  header.writeUInt16LE(count, 4); // number of images

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(16);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // palette colors
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.buffer.length, 8); // size of image
    entry.writeUInt32LE(offset, 12); // offset of image data
    dirEntries.push(entry);
    offset += img.buffer.length;
  }

  return Buffer.concat([header, ...dirEntries, ...images.map((img) => img.buffer)]);
}

async function run() {
  const publicDir = path.resolve('public');
  const appDir = path.resolve('src/app');

  // 1. Save SVG
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), svgLogo, 'utf-8');
  console.log('Saved public/logo.svg');

  const svgBuffer = Buffer.from(svgLogo);

  // 2. Generate PNGs
  const p512 = await sharp(svgBuffer).resize(512, 512).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-512x512.png'), p512);

  const p192 = await sharp(svgBuffer).resize(192, 192).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'android-chrome-192x192.png'), p192);

  const p180 = await sharp(svgBuffer).resize(180, 180).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), p180);

  const p32 = await sharp(svgBuffer).resize(32, 32).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-32x32.png'), p32);

  const p16 = await sharp(svgBuffer).resize(16, 16).png().toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-16x16.png'), p16);

  const p48 = await sharp(svgBuffer).resize(48, 48).png().toBuffer();

  // 3. Generate multi-resolution favicon.ico (16, 32, 48)
  const icoBuffer = createIco([
    { width: 16, height: 16, buffer: p16 },
    { width: 32, height: 32, buffer: p32 },
    { width: 48, height: 48, buffer: p48 },
  ]);

  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Saved favicons and app icons successfully');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
