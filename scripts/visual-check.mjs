/**
 * visual-check.mjs — verificación visual reproducible del portfolio.
 *
 * Uso:
 *   npm run visual                    # levanta dev server, captura y chequea
 *   npm run visual -- --url http://localhost:5173   # usa un server ya corriendo
 *   npm run visual -- --path /       # ruta a capturar (default: /)
 *
 * Qué hace:
 *   1. Reusa el dev server si responde, o levanta `vite --port 5199` y espera.
 *      Antes de capturar, vacía screenshots/ para que solo queden las de esta corrida.
 *   2. Por cada viewport (375, 768, 1440) y cada idioma (ES, EN):
 *      - screenshot full-page en screenshots/
 *      - chequea overflow horizontal (scrollWidth > innerWidth)
 *      - si hay overflow, lista los elementos culpables con sus anchos
 *   3. Sale con código 1 si algún viewport tiene overflow.
 *
 * Requiere: playwright como devDependency + `npx playwright install chromium`.
 */
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, rmSync } from 'node:fs';

const VIEWPORTS = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
];
const LANGUAGES = ['es', 'en'];
const PORT = 5199;
const OUT_DIR = 'screenshots';

const args = process.argv.slice(2);
const argVal = (flag) => {
  const i = args.indexOf(flag);
  return i !== -1 ? args[i + 1] : undefined;
};
const pagePath = argVal('--path') ?? '/';
let baseUrl = argVal('--url');

async function serverResponds(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(2000) });
    return res.ok;
  } catch {
    return false;
  }
}

async function ensureServer() {
  if (baseUrl) {
    if (!(await serverResponds(baseUrl))) {
      console.error(`✗ No responde nada en ${baseUrl}`);
      process.exit(1);
    }
    return null; // server externo, no lo manejamos nosotros
  }
  baseUrl = `http://localhost:${PORT}`;
  if (await serverResponds(baseUrl)) {
    console.log(`→ Reusando dev server en ${baseUrl}`);
    return null;
  }
  console.log(`→ Levantando vite en :${PORT}...`);
  const proc = spawn('npx', ['vite', '--port', String(PORT), '--strictPort'], {
    stdio: 'ignore',
    detached: false,
  });
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await serverResponds(baseUrl)) return proc;
  }
  proc.kill();
  console.error('✗ El dev server no arrancó en 15s');
  process.exit(1);
}

async function checkOverflow(page) {
  return page.evaluate(() => {
    const doc = document.documentElement;
    const overflow = doc.scrollWidth - window.innerWidth;
    if (overflow <= 0) return { overflow: 0, culprits: [] };
    const culprits = [];
    for (const el of document.querySelectorAll('body *')) {
      const r = el.getBoundingClientRect();
      if (r.right > window.innerWidth + 1 || r.left < -1) {
        const cls = typeof el.className === 'string' ? el.className : '';
        culprits.push(
          `<${el.tagName.toLowerCase()}${cls ? ' class="' + cls.slice(0, 80) + '"' : ''}> ` +
            `left=${Math.round(r.left)} right=${Math.round(r.right)} width=${Math.round(r.width)}`
        );
      }
    }
    return { overflow, culprits: culprits.slice(0, 10) };
  });
}

const server = await ensureServer();
rmSync(OUT_DIR, { recursive: true, force: true });
mkdirSync(OUT_DIR, { recursive: true });

const browser = await chromium.launch();
let failed = false;

try {
  for (const lang of LANGUAGES) {
    for (const vp of VIEWPORTS) {
      const page = await browser.newPage({
        viewport: { width: vp.width, height: vp.height },
        locale: lang === 'es' ? 'es-UY' : 'en-US',
      });
      await page.goto(baseUrl + pagePath, { waitUntil: 'networkidle' });

      // Forzar idioma vía el toggle si el locale no alcanzó
      const current = await page.evaluate(() => document.documentElement.lang);
      if (current && !current.startsWith(lang)) {
        const toggle = page.locator('[aria-label*="language" i], [data-testid="language-toggle"], button:has-text("EN"), button:has-text("ES")').first();
        if (await toggle.count()) {
          await toggle.click();
          await page.waitForTimeout(300);
        }
      }

      const file = `${OUT_DIR}/${vp.name}-${vp.width}px-${lang}.png`;
      await page.screenshot({ path: file, fullPage: true });

      const { overflow, culprits } = await checkOverflow(page);
      if (overflow > 0) {
        failed = true;
        console.log(`✗ ${vp.name} (${vp.width}px, ${lang}): overflow horizontal de ${overflow}px — ${file}`);
        for (const c of culprits) console.log(`    ${c}`);
      } else {
        console.log(`✓ ${vp.name} (${vp.width}px, ${lang}): sin overflow — ${file}`);
      }
      await page.close();
    }
  }
} finally {
  await browser.close();
  if (server) server.kill();
}

console.log(failed ? '\nResultado: HAY overflow horizontal. Revisá los screenshots.' : '\nResultado: todo limpio.');
process.exit(failed ? 1 : 0);
