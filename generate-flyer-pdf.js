/**
 * Flyer PDF Üretici
 *
 * Baskı spesifikasyonu: DIN A5 148 × 210 mm, beidseitig bedruckt, 4/4 farbig
 * PDF boyutu: 154 × 216 mm (her kenarda 3 mm Beschnitt / taşma)
 * Trim çizgisi: (3 mm, 3 mm) → (151 mm, 213 mm)
 * Güvenli alan: en az 6 mm sayfa kenarından (3 mm taşma + 3 mm güvenli)
 *
 * NOT: Sadece ön yüz tasarlanmış. Arka yüz tasarlandığında aynı şekilde eklenir.
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
      const filePath = path.join(PUBLIC_DIR, url === '/' ? 'flyer.html' : url);
      const mime = {
        '.html': 'text/html',  '.css':  'text/css',   '.js':   'text/javascript',
        '.png':  'image/png',  '.jpg':  'image/jpeg',  '.svg':  'image/svg+xml',
        '.woff': 'font/woff',  '.woff2':'font/woff2',
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

// ── Flyer ön yüz HTML (154 × 216 mm — bleed dahil) ────────────────────────────
//
// Dikey düzen (flex column, 216 mm):
//   • Hero:      70 mm  (67 mm tasarım + 3 mm üst bleed) — fotoğraf tam kenaralara taşar
//   • Accent:     1 mm
//   • Logo row:  ~20 mm
//   • Leistungen: flex:1  (kalan alanı doldurur)
//   • CTA band:  ~20 mm
//   • Footer:    ~32 mm  (içerik + 3 mm alt bleed)
//
// İçerik yatayda en az 6 mm sayfa kenarından; dikeyde hero/footer'da 6 mm.
// ──────────────────────────────────────────────────────────────────────────────
function flyerFrontHTML(heroUrl, logoUrl) {
  return /* html */`<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,500&family=Inter:wght@300;400;500;600;700;800&display=swap');

*, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

html, body {
  width: 154mm;
  height: 216mm;
  overflow: hidden;
  font-family: 'Inter', sans-serif;
  background: #fff;
}

.page {
  width: 154mm;
  height: 216mm;
  display: flex;
  flex-direction: column;
}

/* ──────────────────────────────────────
   1. HERO — 70 mm (67 tasarım + 3 bleed üst)
   Fotoğraf: x=0…154mm, y=0…70mm — tam bleed
   Metin güvenli alan: 6 mm sayfa kenarından
────────────────────────────────────── */
.hero {
  position: relative;
  height: 70mm;
  flex-shrink: 0;
}
.hero-photo {
  position: absolute;
  inset: 0;
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center 22%;
}
.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(165deg,
    rgba(15,76,129,.55)  0%,
    rgba(13,148,136,.25) 35%,
    rgba(5,12,30,.92)   100%
  );
}
/* Eyebrow: sol üst köşe — yüzlerden uzak */
.hero-eyebrow {
  position: absolute;
  top: 6mm; left: 6mm;
  font-size: 2.4mm;
  font-weight: 700;
  letter-spacing: .26em;
  text-transform: uppercase;
  color: #5eead4;
  background: rgba(5,12,30,.45);
  padding: 1mm 2mm;
  border-radius: 0.8mm;
}
/* Başlık + alt metin: alt kısımda, yüzlerin altında */
.hero-inner {
  position: absolute;
  left: 6mm; right: 6mm; bottom: 5mm;
}
.hero-h1 {
  font-family: 'Playfair Display', serif;
  font-size: 10.5mm;
  font-weight: 700;
  line-height: 1.06;
  letter-spacing: -.025em;
  color: #fff;
  text-shadow: 0 0.8mm 7mm rgba(0,0,0,.5);
}
.hero-h1 em { font-style: italic; color: #7de8e0; }
.hero-sub {
  margin-top: 2.5mm;
  font-size: 3mm;
  font-weight: 300;
  color: rgba(255,255,255,.68);
  letter-spacing: .04em;
}

/* ──────────────────────────────────────
   2. ACCENT STRIPE — tam genişlik, bleed için x=0…154mm
────────────────────────────────────── */
.accent {
  height: 1mm;
  flex-shrink: 0;
  background: linear-gradient(90deg, #0d9488 0%, #1a73b8 55%, transparent 100%);
}

/* ──────────────────────────────────────
   3. LOGO SATIRI
   Sol/sağ: 6 mm güvenli alan
────────────────────────────────────── */
.logo-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 3mm 6mm 2.5mm;
  border-bottom: 0.4mm solid #f1f5f9;
  flex-shrink: 0;
}
.logo-block {
  display: flex;
  flex-direction: column;
  gap: 1mm;
}
.logo-row img {
  height: 13mm;
  width: auto;
  object-fit: contain;
  object-position: left;
}
.geo-label {
  font-size: 2mm;
  font-weight: 500;
  color: #94a3b8;
  letter-spacing: .04em;
}
.sgb-tag {
  font-size: 2.2mm;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
  color: #166534;
  background: #f0fdf4;
  border: 0.25mm solid #bbf7d0;
  border-radius: 100mm;
  padding: 1mm 3mm;
  white-space: nowrap;
  flex-shrink: 0;
}

/* ──────────────────────────────────────
   4. LEISTUNGEN — flex:1, 2-Spalten-Liste
────────────────────────────────────── */
.leistungen {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 3.5mm 6mm 3mm;
  min-height: 0;
}
.section-label {
  font-size: 2.2mm;
  font-weight: 700;
  letter-spacing: .26em;
  text-transform: uppercase;
  color: #0d9488;
  margin-bottom: 3mm;
  flex-shrink: 0;
}
.svc-grid {
  flex: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(3, 1fr);
}
.svc {
  display: flex;
  align-items: flex-start;
  gap: 2.5mm;
  padding: 2.5mm 4mm 2.5mm 0;
  border-bottom: 0.25mm solid #f1f5f9;
}
.svc:nth-child(even) {
  padding-left: 4mm;
  padding-right: 0;
  border-left: 0.25mm solid #f1f5f9;
}
.svc:nth-last-child(-n+2) { border-bottom: none; }

.svc-bullet {
  width: 1.8mm; height: 1.8mm;
  border-radius: 50%;
  flex-shrink: 0;
  margin-top: 1.5mm;
  background: #0d9488;
}
.svc:nth-child(2n)  .svc-bullet { background: #1a73b8; }
.svc:nth-child(5)   .svc-bullet { background: #7c3aed; }
.svc:nth-child(6)   .svc-bullet { background: #0d9488; }

.svc-name {
  font-size: 3.4mm;
  font-weight: 700;
  color: #0f172a;
  line-height: 1.2;
}
.svc-desc {
  font-size: 2.7mm;
  font-weight: 400;
  color: #64748b;
  line-height: 1.45;
  margin-top: 0.5mm;
}

/* ──────────────────────────────────────
   5. CTA BAND — tam genişlik bleed sol/sağ
────────────────────────────────────── */
.cta-band {
  background: linear-gradient(100deg, #0f4c81 0%, #0d9488 100%);
  padding: 3.5mm 6mm;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3mm;
  flex-shrink: 0;
}
.cta-action {
  font-size: 2.5mm;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: rgba(255,255,255,.7);
  margin-bottom: 1mm;
}
.cta-phone {
  font-size: 7mm;
  font-weight: 800;
  color: #fff;
  letter-spacing: -.02em;
  line-height: 1;
}
.cta-note {
  margin-top: 1mm;
  font-size: 2.3mm;
  color: rgba(255,255,255,.6);
  font-weight: 400;
}
.cta-badge {
  flex-shrink: 0;
  background: rgba(255,255,255,.15);
  border: 0.25mm solid rgba(255,255,255,.3);
  border-radius: 2.5mm;
  padding: 2.5mm 3.5mm;
  text-align: center;
}
.cta-badge-line1 {
  font-size: 2mm;
  font-weight: 600;
  color: rgba(255,255,255,.65);
  letter-spacing: .06em;
  text-transform: uppercase;
  display: block;
  margin-bottom: 0.8mm;
}
.cta-badge-langs {
  font-size: 3.2mm;
  font-weight: 700;
  color: #fff;
  letter-spacing: .04em;
}

/* ──────────────────────────────────────
   6. FOOTER — koyu arka plan alt bleed'e kadar uzar
   Alt içerik: 6 mm sayfa altından güvende (3 bleed + 3 safe)
────────────────────────────────────── */
.footer {
  background: #080e20;
  padding: 3.5mm 6mm 6mm;   /* 6mm alt = trim'den 3mm güvenli */
  flex-shrink: 0;
}
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2mm 5mm;
}
.ci { display: flex; flex-direction: column; gap: 0.3mm; }
.ci-span { grid-column: 1 / -1; }
.ci-label {
  font-size: 1.9mm;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.28);
}
.ci-value {
  font-size: 3mm;
  font-weight: 400;
  color: #94a3b8;
  line-height: 1.4;
}
.footer-bottom {
  margin-top: 2.5mm;
  padding-top: 2mm;
  border-top: 0.25mm solid rgba(255,255,255,.06);
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.footer-certs { display: flex; gap: 1.3mm; }
.cert-tag {
  font-size: 2mm;
  font-weight: 600;
  color: rgba(255,255,255,.45);
  background: rgba(255,255,255,.06);
  border: 0.25mm solid rgba(255,255,255,.1);
  border-radius: 1mm;
  padding: 0.5mm 1.8mm;
}
.footer-web {
  font-size: 2mm;
  color: rgba(255,255,255,.2);
  letter-spacing: .09em;
}
</style>
</head>
<body>
<div class="page">

  <!-- 1. HERO -->
  <div class="hero">
    <img class="hero-photo" src="${heroUrl}" alt="">
    <div class="hero-overlay"></div>
    <p class="hero-eyebrow">Ambulanter Pflegedienst · Hamburg</p>
    <div class="hero-inner">
      <h1 class="hero-h1">Ihr Licht in der<br><em>häuslichen</em> Pflege.</h1>
      <p class="hero-sub">Respekt · Empathie · Fachliche Kompetenz</p>
    </div>
  </div>

  <!-- 2. ACCENT -->
  <div class="accent"></div>

  <!-- 3. LOGO -->
  <div class="logo-row">
    <div class="logo-block">
      <img src="${logoUrl}" alt="ElbLicht Pflegedienst">
      <span class="geo-label">St. Pauli · Altona · Eimsbüttel</span>
    </div>
    <span class="sgb-tag">✓ SGB V &amp; SGB XI Zugelassen</span>
  </div>

  <!-- 4. LEISTUNGEN -->
  <div class="leistungen">
    <p class="section-label">Unsere Leistungen</p>
    <div class="svc-grid">
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Grundpflege</div><div class="svc-desc">Körperpflege &amp; Mobilisation</div></div>
      </div>
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Behandlungspflege</div><div class="svc-desc">Medikamente &amp; Verbände</div></div>
      </div>
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Hauswirtschaft</div><div class="svc-desc">Kochen, Einkaufen &amp; Reinigung</div></div>
      </div>
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Pflegeberatung</div><div class="svc-desc">Pflegegrad &amp; Kassenleistungen</div></div>
      </div>
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Betreuung</div><div class="svc-desc">Arztbegleitung &amp; Gedächtnistraining</div></div>
      </div>
      <div class="svc">
        <div class="svc-bullet"></div>
        <div><div class="svc-name">Palliativpflege</div><div class="svc-desc">Lebensqualität bis zuletzt sichern</div></div>
      </div>
    </div>
  </div>

  <!-- 5. CTA -->
  <div class="cta-band">
    <div class="cta-left">
      <div class="cta-action">Jetzt kostenlos beraten lassen</div>
      <div class="cta-phone">040 / 560 69 787</div>
      <div class="cta-note">Mobil 24/7: 0171 / 1500 882 · Kostenfreie Erstberatung</div>
    </div>
    <div class="cta-badge">
      <span class="cta-badge-line1">Wir sprechen</span>
      <span class="cta-badge-langs">DE · TR · EN</span>
    </div>
  </div>

  <!-- 6. FOOTER -->
  <div class="footer">
    <div class="contact-grid">
      <div class="ci">
        <span class="ci-label">E-Mail</span>
        <span class="ci-value">info@pflegedienst-elblicht.de</span>
      </div>
      <div class="ci">
        <span class="ci-label">Fax</span>
        <span class="ci-value">040 / 572 615 24</span>
      </div>
      <div class="ci ci-span">
        <span class="ci-label">Adresse</span>
        <span class="ci-value">Clemens-Schultze-Straße 76 · 20359 Hamburg</span>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-certs">
        <span class="cert-tag">20+ Jahre Erfahrung</span>
        <span class="cert-tag">SGB V</span>
        <span class="cert-tag">SGB XI</span>
      </div>
      <span class="footer-web">www.pflegedienst-elblicht.de</span>
    </div>
  </div>

</div>
</body>
</html>`;
}

// ── Ana üretim fonksiyonu ──────────────────────────────────────────────────────
async function generate() {
  const { server, port } = await startServer();

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const page = await browser.newPage();

  // flyer.html'i doğrudan sunucudan yükle — print CSS bleed'i halleder
  await page.goto(`http://127.0.0.1:${port}/flyer.html`, { waitUntil: 'networkidle0' });

  const outPath = path.join(__dirname, 'flyer-on-yuz-v3.pdf');
  await page.pdf({
    path: outPath,
    width:  '154mm',
    height: '216mm',
    printBackground: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  await page.close();
  console.log('✓  flyer-on-yuz-v3.pdf  (154×216 mm, 3 mm bleed)');
  console.log('   Trim: 148×210 mm (DIN A5)  |  Güvenli alan: sayfa kenarından 6 mm');
  console.log('PDF hazır:', __dirname);

  await browser.close();
  server.close();
}

generate().catch((err) => { console.error('Hata:', err.message); process.exit(1); });
