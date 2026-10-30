const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const appDir = path.join(__dirname, '..', 'src', 'app');
const storeDir = path.join(__dirname, '..', 'src', 'app', 'store');

// 1. Sleek 100x100 CrazyTech Favicon SVG (Obsidian + Electric Indigo/Violet + Cyber Silver + Neon Cyan Spark)
const crazyFaviconSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100" fill="none">
  <defs>
    <linearGradient id="ctRim" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#818cf8" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.5" />
      <stop offset="100%" stop-color="#a855f7" stop-opacity="0.8" />
    </linearGradient>
    <linearGradient id="ctArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="35%" stop-color="#6366f1" />
      <stop offset="70%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#ec4899" />
    </linearGradient>
    <linearGradient id="ctTBar" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>
    <radialGradient id="ctGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#6366f1" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#6366f1" stop-opacity="0" />
    </radialGradient>
  </defs>

  <!-- Sleek Obsidian Background -->
  <rect width="100" height="100" rx="24" fill="#070b14" />
  <rect x="1" y="1" width="98" height="98" rx="23" stroke="url(#ctRim)" stroke-width="1.5" />
  <circle cx="50" cy="50" r="38" fill="url(#ctGlow)" />

  <!-- "C" Arc: Electric Multi-Hue Energy Curve -->
  <path
    d="M 75 25 A 34 34 0 1 0 75 75"
    fill="none"
    stroke="url(#ctArc)"
    stroke-width="12"
    stroke-linecap="round"
  />

  <!-- "T" Element: Refined Chrome/Silver with Precision Bevel -->
  <path
    d="M 42 38 L 84 38"
    fill="none"
    stroke="url(#ctTBar)"
    stroke-width="10"
    stroke-linecap="round"
  />
  <path
    d="M 63 38 L 63 68"
    fill="none"
    stroke="url(#ctTBar)"
    stroke-width="10"
    stroke-linecap="round"
  />

  <!-- Electric Cyan Pulse Node & Halo -->
  <circle cx="63" cy="38" r="6" fill="#06b6d4" fill-opacity="0.4" />
  <circle cx="63" cy="38" r="4.2" fill="#22d3ee" />
  <circle cx="63" cy="38" r="1.8" fill="#ffffff" />
</svg>`;

// 2. Full Horizontal Brand Logo (CrazyTech)
const crazyLogoHorizontalSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 90" width="480" height="90" fill="none">
  <defs>
    <linearGradient id="ctLogoArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="ctTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="50%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>

  <!-- Freestanding Mark on left -->
  <g transform="translate(10, 8) scale(0.74)">
    <rect width="100" height="100" rx="24" fill="#070b14" />
    <rect x="1" y="1" width="98" height="98" rx="23" stroke="#1e293b" stroke-width="1.5" />
    <path d="M 75 25 A 34 34 0 1 0 75 75" fill="none" stroke="url(#ctLogoArc)" stroke-width="12" stroke-linecap="round" />
    <path d="M 42 38 L 84 38" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <path d="M 63 38 L 63 68" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <circle cx="63" cy="38" r="4.5" fill="#06b6d4" />
    <circle cx="63" cy="38" r="2" fill="#ffffff" />
  </g>

  <!-- Typography -->
  <g transform="translate(98, 51)">
    <text x="0" y="0" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="900" letter-spacing="-0.8">
      <tspan fill="#0f172a">Crazy</tspan><tspan fill="url(#ctTextGrad)">Tech</tspan>
    </text>
    <text x="2" y="24" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800" letter-spacing="2.4" fill="#6366f1">
      HIGH-SPEED TELECOM &amp; AUTOMATION
    </text>
  </g>
</svg>`;

// 3. Dark Horizontal Brand Logo (for dark surfaces)
const crazyLogoHorizontalDarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 90" width="480" height="90" fill="none">
  <defs>
    <linearGradient id="ctDarkArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="ctDarkTextGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="50%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#22d3ee" />
    </linearGradient>
  </defs>

  <!-- Freestanding Mark on left -->
  <g transform="translate(10, 8) scale(0.74)">
    <rect width="100" height="100" rx="24" fill="#0a101d" />
    <rect x="1" y="1" width="98" height="98" rx="23" stroke="#1e293b" stroke-width="1.5" />
    <path d="M 75 25 A 34 34 0 1 0 75 75" fill="none" stroke="url(#ctDarkArc)" stroke-width="12" stroke-linecap="round" />
    <path d="M 42 38 L 84 38" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <path d="M 63 38 L 63 68" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <circle cx="63" cy="38" r="4.5" fill="#06b6d4" />
    <circle cx="63" cy="38" r="2" fill="#ffffff" />
  </g>

  <!-- Typography -->
  <g transform="translate(98, 51)">
    <text x="0" y="0" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="36" font-weight="900" letter-spacing="-0.8">
      <tspan fill="#ffffff">Crazy</tspan><tspan fill="url(#ctDarkTextGrad)">Tech</tspan>
    </text>
    <text x="2" y="24" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="800" letter-spacing="2.4" fill="#818cf8">
      HIGH-SPEED TELECOM &amp; AUTOMATION
    </text>
  </g>
</svg>`;

// 4. Square Stacked Logo (Light & Dark)
const crazyLogoSquareSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="600" height="500" fill="none">
  <defs>
    <linearGradient id="ctSqArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="ctSqText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#6366f1" />
      <stop offset="50%" stop-color="#8b5cf6" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>

  <g transform="translate(190, 40) scale(2.2)">
    <rect width="100" height="100" rx="24" fill="#070b14" />
    <rect x="1" y="1" width="98" height="98" rx="23" stroke="#1e293b" stroke-width="1.5" />
    <path d="M 75 25 A 34 34 0 1 0 75 75" fill="none" stroke="url(#ctSqArc)" stroke-width="12" stroke-linecap="round" />
    <path d="M 42 38 L 84 38" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <path d="M 63 38 L 63 68" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <circle cx="63" cy="38" r="4.5" fill="#06b6d4" />
    <circle cx="63" cy="38" r="2" fill="#ffffff" />
  </g>

  <g transform="translate(300, 335)">
    <text text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" letter-spacing="-1.5">
      <tspan fill="#0f172a">Crazy</tspan><tspan fill="url(#ctSqText)">Tech</tspan>
    </text>
    <text y="50" text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="800" letter-spacing="6" fill="#6366f1">
      DATA TELECOM NETWORK
    </text>
    <text y="90" text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="2.5" fill="#64748b">
      EMPOWERING DIGITAL CONNECTIVITY
    </text>
  </g>
</svg>`;

const crazyLogoSquareDarkSvg = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 500" width="600" height="500" fill="none">
  <defs>
    <linearGradient id="ctSqDarkArc" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="40%" stop-color="#6366f1" />
      <stop offset="100%" stop-color="#a855f7" />
    </linearGradient>
    <linearGradient id="ctSqDarkText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#818cf8" />
      <stop offset="50%" stop-color="#a78bfa" />
      <stop offset="100%" stop-color="#22d3ee" />
    </linearGradient>
  </defs>

  <g transform="translate(190, 40) scale(2.2)">
    <rect width="100" height="100" rx="24" fill="#070b14" />
    <rect x="1" y="1" width="98" height="98" rx="23" stroke="#1e293b" stroke-width="1.5" />
    <path d="M 75 25 A 34 34 0 1 0 75 75" fill="none" stroke="url(#ctSqDarkArc)" stroke-width="12" stroke-linecap="round" />
    <path d="M 42 38 L 84 38" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <path d="M 63 38 L 63 68" fill="none" stroke="#ffffff" stroke-width="10" stroke-linecap="round" />
    <circle cx="63" cy="38" r="4.5" fill="#06b6d4" />
    <circle cx="63" cy="38" r="2" fill="#ffffff" />
  </g>

  <g transform="translate(300, 335)">
    <text text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="64" font-weight="900" letter-spacing="-1.5">
      <tspan fill="#ffffff">Crazy</tspan><tspan fill="url(#ctSqDarkText)">Tech</tspan>
    </text>
    <text y="50" text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="800" letter-spacing="6" fill="#818cf8">
      DATA TELECOM NETWORK
    </text>
    <text y="90" text-anchor="middle" font-family="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="13" font-weight="700" letter-spacing="2.5" fill="#94a3b8">
      EMPOWERING DIGITAL CONNECTIVITY
    </text>
  </g>
</svg>`;

async function buildAssets() {
  console.log("⚡ Building CrazyTech assets...");

  // Write SVGs to public/
  fs.writeFileSync(path.join(publicDir, 'favicon.svg'), crazyFaviconSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'icon.svg'), crazyFaviconSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo.svg'), crazyLogoSquareSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-dark.svg'), crazyLogoSquareDarkSvg, 'utf8');
  fs.writeFileSync(path.join(publicDir, 'logo-horizontal.svg'), crazyLogoHorizontalSvg, 'utf8');

  // Also write SVGs to src/app/
  fs.writeFileSync(path.join(appDir, 'icon.svg'), crazyFaviconSvg, 'utf8');

  // Render PNGs via Sharp
  const svgBuf = Buffer.from(crazyFaviconSvg);

  // 1. icon.png (32x32)
  await sharp(svgBuf).resize(32, 32).png().toFile(path.join(publicDir, 'icon.png'));
  await sharp(svgBuf).resize(32, 32).png().toFile(path.join(appDir, 'icon.png'));

  // 2. apple-icon.png (180x180)
  await sharp(svgBuf).resize(180, 180).png().toFile(path.join(publicDir, 'apple-icon.png'));
  await sharp(svgBuf).resize(180, 180).png().toFile(path.join(appDir, 'apple-icon.png'));

  // 3. icon-192.png and icon-512.png
  await sharp(svgBuf).resize(192, 192).png().toFile(path.join(publicDir, 'icon-192.png'));
  await sharp(svgBuf).resize(512, 512).png().toFile(path.join(publicDir, 'icon-512.png'));

  // 4. favicon.ico (generate 32x32 PNG as ico)
  await sharp(svgBuf).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));
  await sharp(svgBuf).resize(32, 32).png().toFile(path.join(appDir, 'favicon.ico'));

  // 5. logo.png and logo-horizontal.png
  const logoSquareBuf = Buffer.from(crazyLogoSquareSvg);
  await sharp(logoSquareBuf).resize(600, 500).png().toFile(path.join(publicDir, 'logo.png'));

  const logoHBuf = Buffer.from(crazyLogoHorizontalSvg);
  await sharp(logoHBuf).resize(960, 180).png().toFile(path.join(publicDir, 'logo-horizontal.png'));

  console.log("✅ CrazyTech brand assets generated successfully!");
}

buildAssets().catch(err => {
  console.error("Asset build error:", err);
  process.exit(1);
});

