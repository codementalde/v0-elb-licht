/**
 * Kartvizit PDF Üretici
 *
 * Baskı spesifikasyonu: 85 × 55 mm, 4/4 farbig, Ecken abrunden
 * PDF boyutu: 91 × 61 mm (her kenarda 3 mm taşma / Beschnitt)
 * Trim çizgisi: (3 mm, 3 mm) → (88 mm, 58 mm)
 * Güvenli alan (içerik): en az 6 mm sayfa kenarından (3 mm taşma + 3 mm boşluk)
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME     = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PUBLIC_DIR = path.join(__dirname, 'public');

// ── Statik sunucu ──────────────────────────────────────────────────────────────
function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url      = req.url.split('?')[0];
      const filePath = path.join(PUBLIC_DIR, url === '/' ? 'index.html' : url);
      const mime = {
        '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript',
        '.png': 'image/png',  '.jpg': 'image/jpeg', '.svg': 'image/svg+xml',
        '.woff': 'font/woff', '.woff2': 'font/woff2',
      }[path.extname(filePath).toLowerCase()] || 'application/octet-stream';

      fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': mime });
        res.end(data);
      });
    });
    server.listen(0, '127.0.0.1', () =>
      resolve({ server, port: server.address().port }));
  });
}

// ── Ön yüz HTML (91 × 61 mm — bleed dahil) ────────────────────────────────────
// Trim:   x=3mm…88mm, y=3mm…58mm  →  kart 85×55 mm
// Bleed:  her kenarda 3 mm renkli arka plan taşar
// İçerik: en az 6 mm sayfa kenarından (= 3 mm trim den)
function frontHTML(logoUrl) {
  return /* html */`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
html, body {
  width: 91mm; height: 61mm;
  background: #ffffff;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
}

/* ── Üst mavi şerit: y=0 → y=4mm (3 mm bleed + 1 mm görünür) ── */
.top-strip {
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4mm;
  background: linear-gradient(90deg, #0F2952, #2A5298, #4A90D9);
}

/* ── Alt koyu panel: içerik 49.5 mm'den başlar, bleed ile 61 mm'e uzar ── */
/* Görünür panel: trim(58mm) - 8.5mm = 49.5mm → 58mm  |  Bleed: 58mm → 61mm */
.bottom-panel {
  position: absolute;
  left: 0; right: 0; bottom: 0;
  height: 11.5mm;          /* 8.5 mm görünür + 3 mm bleed */
  background: #0F2952;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 3mm;     /* bleed alanını içerikten ayır */
}

/* Trim çizgisindeki ince ayraç */
.bottom-panel::before {
  content: '';
  position: absolute;
  top: 0; left: 12%; right: 12%;
  height: 0.3mm;
  background: linear-gradient(90deg, transparent, rgba(74,144,217,0.45) 40%, rgba(74,144,217,0.45) 60%, transparent);
}

.slogan-row {
  display: flex;
  align-items: center;
  gap: 2.5mm;
}
.foot-line {
  display: block;
  width: 6mm; height: 0.3mm;
  background: rgba(255,255,255,0.2);
  flex-shrink: 0;
}
.slogan {
  font-size: 2.7mm;
  font-weight: 300;
  font-style: italic;
  color: rgba(255,255,255,0.55);
  letter-spacing: 0.03em;
  white-space: nowrap;
}
.slogan em {
  font-style: normal;
  font-weight: 500;
  color: rgba(255,255,255,0.82);
}

/* ── Logo: güvenli alanda ortala ── */
/* Üst: 6 mm (3 bleed + 3 safe)  Alt: 11.5 mm (panel) + 3 mm safe = 14.5 mm */
.logo-zone {
  position: absolute;
  top: 6mm; left: 8mm; right: 8mm;
  bottom: 14.5mm;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo-zone img {
  width: 62mm;
  height: auto;
  max-height: 100%;
}
</style>
</head>
<body>
  <div class="top-strip"></div>
  <div class="logo-zone">
    <img src="${logoUrl}" alt="ElbLicht Pflegedienst">
  </div>
  <div class="bottom-panel">
    <div class="slogan-row">
      <span class="foot-line"></span>
      <span class="slogan">Ihr Licht in der <em>häuslichen Pflege.</em></span>
      <span class="foot-line"></span>
    </div>
  </div>
</body>
</html>`;
}

// ── Kart sahipleri ────────────────────────────────────────────────────────────
const PEOPLE = [
  {
    slug:   'ebru-medik',
    name:   'Ebru Medik',
    title:  'Pflegedienstleiterin',
    mobile: '+49 174 9483 704',
    email:  'e.medik@pflegedienst-elblicht.de',
  },
  {
    slug:   'gulay-patan',
    name:   'Gülay Patan',
    title:  'Stellv. Pflegedienstleiterin',
    mobile: '+49 176 4836 0190',
    email:  'g.patan@pflegedienst-elblicht.de',
  },
];

// ── Arka yüz HTML (91 × 61 mm — bleed dahil) ──────────────────────────────────
// Sol mavi şerit: x=0 → x=3.75mm (3 mm bleed + 0.75 mm görünür), tam yükseklik
// İçerik: x ≥ 6.5 mm, y: 6 mm…55 mm  (6 mm = 3 bleed + 3 safe her yanda)
function backHTML(logoUrl, person) {
  return /* html */`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');
* { margin:0; padding:0; box-sizing:border-box; }
html, body {
  width: 91mm; height: 61mm;
  background: #ffffff;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  position: relative;
}

/* ── Sol mavi şerit: tam yükseklik, 3 mm bleed soldan ── */
/* x=0 → x=3.75mm; trim sonrası görünür: x=3mm → x=3.75mm = 0.75mm */
.left-stripe {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 3.75mm;
  background: linear-gradient(180deg, #4A90D9, #2A5298, #0F2952);
}

/* ── İçerik alanı ── */
/* x: 6.5mm (3 bleed + 3 safe + 0.5 boşluk)   */
/* y: 6mm (3 bleed + 3 safe) → 55mm (3 safe + 3 bleed alttan) */
.content {
  position: absolute;
  top: 6mm; left: 6.5mm; right: 6mm; bottom: 6mm;
  display: flex;
  flex-direction: column;
}

/* İsim + logo */
.head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 2.5mm;
  border-bottom: 0.25mm solid #EBF0F6;
  margin-bottom: 2.5mm;
}

.name-block { display: flex; flex-direction: column; gap: 1.3mm; }

.person-name {
  font-size: 6mm;
  font-weight: 800;
  color: #0F2952;
  letter-spacing: -0.03em;
  line-height: 1;
}

.title-row {
  display: flex;
  align-items: center;
  gap: 1.8mm;
}
.title-dash {
  width: 3.5mm; height: 0.5mm;
  background: #4A90D9;
  flex-shrink: 0;
  border-radius: 0.25mm;
}
.person-title {
  font-size: 1.7mm;
  font-weight: 600;
  color: #7A90A8;
  text-transform: uppercase;
  letter-spacing: 0.13em;
}

.head-logo img {
  width: 20mm;
  height: auto;
  margin-top: 0.5mm;
}

/* İletişim */
.contacts {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5mm;
}

.crow {
  display: flex;
  align-items: flex-start;
  gap: 2.3mm;
}
.crow-label {
  font-size: 1.6mm;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #4A90D9;
  min-width: 9mm;
  flex-shrink: 0;
  padding-top: 0.3mm;
}
.crow-val {
  font-size: 2.2mm;
  font-weight: 400;
  color: #1E293B;
  line-height: 1.45;
}

/* Website */
.foot {
  padding-top: 2mm;
  border-top: 0.25mm solid #EBF0F6;
}
.website {
  font-size: 2mm;
  font-weight: 600;
  color: #2A5298;
  letter-spacing: 0.01em;
}
</style>
</head>
<body>
  <div class="left-stripe"></div>
  <div class="content">
    <div class="head">
      <div class="name-block">
        <div class="person-name">${person.name}</div>
        <div class="title-row">
          <div class="title-dash"></div>
          <div class="person-title">${person.title}</div>
        </div>
      </div>
      <div class="head-logo">
        <img src="${logoUrl}" alt="ElbLicht Pflegedienst">
      </div>
    </div>
    <div class="contacts">
      <div class="crow">
        <span class="crow-label">Tel</span>
        <span class="crow-val">040 / 423 26 735</span>
      </div>
      <div class="crow">
        <span class="crow-label">Mobil</span>
        <span class="crow-val">${person.mobile}</span>
      </div>
      <div class="crow">
        <span class="crow-label">E-Mail</span>
        <span class="crow-val">${person.email}</span>
      </div>
      <div class="crow">
        <span class="crow-label">Adresse</span>
        <span class="crow-val">Clemens-Schultz-Str. 76, 20359 Hamburg</span>
      </div>
    </div>
    <div class="foot">
      <span class="website">pflegedienst-elblicht.de</span>
    </div>
  </div>
</body>
</html>`;
}

// ── Ana üretim fonksiyonu ──────────────────────────────────────────────────────
async function generate() {
  const { server, port } = await startServer();
  const logoUrl = `http://127.0.0.1:${port}/images/elb-licht-trans.png`;

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  async function pdfFromHTML(html, file) {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.join(__dirname, file),
      width:  '91mm',   // 85 mm trim + 3 mm bleed her iki yanda
      height: '61mm',   // 55 mm trim + 3 mm bleed üst + alt
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
  }

  // Her kişi için ön + arka — toplam 4 PDF
  for (const person of PEOPLE) {
    const front = `kartvizit-${person.slug}-on-yuz.pdf`;
    const back  = `kartvizit-${person.slug}-arka-yuz.pdf`;

    await pdfFromHTML(frontHTML(logoUrl),         front);
    await pdfFromHTML(backHTML(logoUrl, person),  back);

    console.log(`✓  ${person.name.padEnd(14)}  →  ${front}`);
    console.log(`                  →  ${back}`);
  }

  await browser.close();
  server.close();
  console.log('\nFormat: 91×61 mm (85×55 mm trim + 3 mm Beschnitt rundum)');
  console.log('Güvenli alan: sayfa kenarından 6 mm');
  console.log('PDF\'ler hazır:', __dirname);
}

generate().catch((err) => { console.error('Hata:', err.message); process.exit(1); });
