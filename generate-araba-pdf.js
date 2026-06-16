/**
 * Araç Kaplama PDF Üretici — ElbLicht Pflegedienst (Citroën C3, DIY uyumlu)
 *
 * Üretilen 4 parça (hepsi Klebefolie / Auto-Aufkleber mit Luftkanälen):
 *   Ön kapı   : 600×400 mm trim  →  606×406 mm PDF (3 mm bleed)
 *   Arka kapı : 500×350 mm trim  →  506×356 mm PDF
 *   Kaput     : 800×250 mm trim  →  806×256 mm PDF (kavissiz orta bant)
 *   Arka cam  : 1100×450 mm trim → 1106×456 mm PDF
 */

const puppeteer = require('puppeteer-core');
const http      = require('http');
const fs        = require('fs');
const path      = require('path');

const CHROME     = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PUBLIC_DIR = path.join(__dirname, 'public');
const OUT_DIR    = path.join(__dirname, 'araba-pdf');

// Bir sonraki sürüm numarasını bul: araba-pdf/v1, v2, v3 ...
function nextVersionDir() {
  if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });
  const versions = fs.readdirSync(OUT_DIR)
    .map(name => name.match(/^v(\d+)$/))
    .filter(Boolean)
    .map(m => parseInt(m[1], 10));
  const next = versions.length === 0 ? 1 : Math.max(...versions) + 1;
  const dir  = path.join(OUT_DIR, `v${next}`);
  fs.mkdirSync(dir);
  return { dir, version: next };
}

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

// Parça tanımları: { htmlFile, pdfFile, width, height } — bleed dahil mm
const PARTS = [
  { htmlFile: 'araba-on-kapi.html',   pdfFile: 'araba-on-kapi.pdf',   width:  '606mm', height: '406mm', label: 'Ön Kapı   (600×400 mm trim)  — Klebefolie' },
  { htmlFile: 'araba-arka-kapi.html', pdfFile: 'araba-arka-kapi.pdf', width:  '506mm', height: '356mm', label: 'Arka Kapı (500×350 mm trim)  — Klebefolie' },
  { htmlFile: 'araba-kaput.html',     pdfFile: 'araba-kaput.pdf',     width:  '806mm', height: '256mm', label: 'Kaput     (800×250 mm trim)  — Klebefolie' },
  { htmlFile: 'araba-arka-cam.html',  pdfFile: 'araba-arka-cam.pdf',  width: '1106mm', height: '456mm', label: 'Arka Cam  (1100×450 mm trim) — Klebefolie' },
];

async function generate() {
  const { dir: outDir, version } = nextVersionDir();
  const { server, port } = await startServer();
  const base    = `http://127.0.0.1:${port}`;
  const logoUrl = `${base}/images/elb-licht-trans.png`;
  const qrUrl   = `${base}/images/el-qr-code.png`;

  console.log(`\n📁 Sürüm: v${version}  →  araba-pdf/v${version}/\n`);

  const browser = await puppeteer.launch({
    executablePath: CHROME,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const part of PARTS) {
    // HTML şablonunu oku, URL placeholder'larını değiştir
    let html = fs.readFileSync(path.join(PUBLIC_DIR, part.htmlFile), 'utf8');
    html = html.replaceAll('__LOGO_URL__', logoUrl);
    html = html.replaceAll('__QR_URL__',   qrUrl);

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: path.join(outDir, part.pdfFile),
      width:  part.width,
      height: part.height,
      printBackground: true,
      margin: { top: 0, right: 0, bottom: 0, left: 0 },
    });
    await page.close();
    console.log(`✓  ${part.label}  →  v${version}/${part.pdfFile}`);
  }

  await browser.close();
  server.close();

  console.log('\nBleed: 3 mm her kenarda');
  console.log('Güvenli alan: 6 mm sayfa kenarından');
  console.log('PDF\'ler hazır:', outDir);
}

generate().catch((err) => { console.error('Hata:', err.message); process.exit(1); });
