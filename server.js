import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const isProduction = process.env.NODE_ENV === 'production';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const localDevSubmissions = [];

function sanitizeString(value, maxLen = 2000) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

const DEFAULT_SITE_URL = 'https://www.cbsoftlabs.com';
const SITEMAP_LASTMOD = '2026-11-26';

function escapeXml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function resolveSiteUrl() {
  const configured = sanitizeString(process.env.SITE_URL, 300).replace(/\/+$/, '');
  return configured || DEFAULT_SITE_URL;
}

async function extractSlugsFromFile(relativePath, fallbackSlugs) {
  try {
    const content = await fs.readFile(path.join(__dirname, relativePath), 'utf-8');
    const matches = [...content.matchAll(/slug:\s*'([a-z0-9-]+)'/g)].map((m) => m[1]);
    return matches.length > 0 ? [...new Set(matches)] : fallbackSlugs;
  } catch {
    return fallbackSlugs;
  }
}

async function getSitemapEntries() {
  const [serviceSlugs, productSlugs, blogSlugs] = await Promise.all([
    extractSlugsFromFile('src/data/services.ts', [
      'web-development',
      'mobile-development',
      'software-development',
      'ui-ux-design',
      'digital-solutions',
      'it-consulting',
    ]),
    extractSlugsFromFile('src/data/products.ts', [
      'noza-ai',
      'medibot',
      'autocut-ai',
      'toolmora',
      'ikobuild',
      'unimarket',
    ]),
    extractSlugsFromFile('src/data/blog.ts', [
      'engineering-resilient-web-platforms',
      'scalable-architecture-for-growing-teams',
      'human-centered-design-in-enterprise-software',
      'pragmatic-digital-transformation-roadmap',
    ]),
  ]);

  return [
    { path: '/', changefreq: 'weekly', priority: '1.0' },
    { path: '/about', changefreq: 'monthly', priority: '0.8' },
    { path: '/services', changefreq: 'weekly', priority: '0.9' },
    ...serviceSlugs.map((slug) => ({
      path: `/services/${slug}`,
      changefreq: 'monthly',
      priority: '0.8',
    })),
    { path: '/products', changefreq: 'weekly', priority: '0.9' },
    ...productSlugs.map((slug) => ({
      path: `/products/${slug}`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
    { path: '/blog', changefreq: 'weekly', priority: '0.8' },
    ...blogSlugs.map((slug) => ({
      path: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: '0.7',
    })),
    { path: '/contact', changefreq: 'monthly', priority: '0.8' },
    { path: '/sitemap', changefreq: 'weekly', priority: '0.5' },
  ];
}

async function startServer() {
  const app = express();
  app.use(express.json({ limit: '64kb' }));

  app.get('/api/health', (_req, res) => {
    res.json({
      status: 'ok',
      contactIntegrationConfigured: Boolean(process.env.CONTACT_WEBHOOK_URL),
    });
  });

  app.get('/sitemap.xml', async (_req, res) => {
    const baseUrl = resolveSiteUrl();
    const entries = await getSitemapEntries();
    const xml = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
      ...entries.map(
        (entry) =>
          `  <url>\n    <loc>${escapeXml(`${baseUrl}${entry.path}`)}</loc>\n    <lastmod>${SITEMAP_LASTMOD}</lastmod>\n    <changefreq>${entry.changefreq}</changefreq>\n    <priority>${entry.priority}</priority>\n  </url>`
      ),
      '</urlset>',
      '',
    ].join('\n');

    res.status(200).set('Content-Type', 'application/xml; charset=utf-8').send(xml);
  });

  app.get('/robots.txt', (_req, res) => {
    const baseUrl = resolveSiteUrl();
    const txt = `User-agent: *\nAllow: /\n\nSitemap: ${baseUrl}/sitemap.xml\n`;
    res.status(200).set('Content-Type', 'text/plain; charset=utf-8').send(txt);
  });

  app.post('/api/contact', async (req, res) => {
    const body = req.body && typeof req.body === 'object' ? req.body : {};

    // Honeypot spam protection
    if (sanitizeString(body.website, 200)) {
      return res.status(400).json({
        ok: false,
        error: 'Unable to process submission.',
      });
    }

    const fullName = sanitizeString(body.fullName, 120);
    const email = sanitizeString(body.email, 180);
    const phone = sanitizeString(body.phone, 40);
    const company = sanitizeString(body.company, 140);
    const inquiryType = sanitizeString(body.inquiryType, 40) || 'general';
    const subject = sanitizeString(body.subject, 160);
    const service = sanitizeString(body.service, 100);
    const budget = sanitizeString(body.budget, 80);
    const message = sanitizeString(body.message, 4000);

    const fieldErrors = {};
    if (fullName.length < 2) fieldErrors.fullName = 'Please enter your full name.';
    if (!EMAIL_RE.test(email)) fieldErrors.email = 'Please enter a valid email address.';
    if (subject.length < 3) fieldErrors.subject = 'Please enter a short subject.';
    if (!service) fieldErrors.service = 'Please select a service area.';
    if (message.length < 15) {
      fieldErrors.message = 'Please provide at least 15 characters describing your request.';
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({
        ok: false,
        error: 'Please review the highlighted form fields.',
        fieldErrors,
      });
    }

    const payload = {
      id: `inq_${Date.now()}`,
      submittedAt: new Date().toISOString(),
      inquiryType,
      fullName,
      email,
      phone: phone || null,
      company: company || null,
      subject,
      service,
      budget: budget || null,
      message,
    };

    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const upstream = await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!upstream.ok) {
          return res.status(502).json({
            ok: false,
            error: `Configured contact webhook returned status ${upstream.status}.`,
          });
        }
        return res.status(200).json({
          ok: true,
          mode: 'webhook',
          referenceId: payload.id,
          message: 'Your inquiry was delivered to the configured Cbsoft webhook endpoint.',
        });
      } catch (err) {
        console.error('[cbsoft-web] Webhook delivery error:', err);
        return res.status(502).json({
          ok: false,
          error: 'Could not reach the configured contact delivery webhook.',
        });
      }
    }

    // Local development adapter: validate and record in memory, never claim external email delivery
    localDevSubmissions.unshift(payload);
    if (localDevSubmissions.length > 50) localDevSubmissions.pop();
    console.info('[cbsoft-web] Contact inquiry recorded in local development adapter:', payload.id);

    return res.status(202).json({
      ok: true,
      mode: 'local_dev',
      configured: false,
      referenceId: payload.id,
      message:
        'Validated and recorded in local development mode only. External email/webhook delivery is not configured yet (set CONTACT_WEBHOOK_URL in .env to enable live forwarding).',
    });
  });

  if (!isProduction) {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.join(__dirname, 'dist');
    app.use(express.static(distDir));
    app.use(async (_req, res) => {
      const html = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');
      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    });
  }

  app.listen(PORT, HOST, () => {
    console.log(`Cbsoft website running at http://${HOST}:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error('Failed to start Cbsoft server:', err);
  process.exit(1);
});
