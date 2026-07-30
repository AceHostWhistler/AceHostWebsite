const fs = require('fs');
const path = require('path');
const glob = require('glob');

const SITE_URL = 'https://www.acehost.ca';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
const LISTINGS_INDEX = path.join(process.cwd(), 'src', 'data', 'listings', 'index.ts');
const POST_DIR = path.join(process.cwd(), 'src', 'pages', 'post');

const EXCLUDED_PATHS = [
  '_app.tsx',
  '_document.tsx',
  'api',
  '404.tsx',
  '500.tsx',
  '_error.tsx',
];

const EXCLUDED_ROUTES = new Set([
  '/upload',
  '/services',
  '/services/drywall',
  '/services/flooring',
  '/services/kitchen-bath',
  '/services/mold',
  '/services/structural-drying',
  '/about',
  '/blog',
]);

function getListingSlugs() {
  const content = fs.readFileSync(LISTINGS_INDEX, 'utf8');
  const match = content.match(/export const listingSlugs = \[([\s\S]*?)\] as const/);
  if (!match) return [];
  return match[1]
    .split('\n')
    .map((line) => line.trim().replace(/["',]/g, ''))
    .filter(Boolean);
}

function getBlogPostRoutes() {
  if (!fs.existsSync(POST_DIR)) return [];

  return fs
    .readdirSync(POST_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => {
      const indexPath = path.join(POST_DIR, entry.name, 'index.tsx');
      let lastmod = new Date().toISOString().split('T')[0];
      try {
        if (fs.existsSync(indexPath)) {
          lastmod = fs.statSync(indexPath).mtime.toISOString().split('T')[0];
        }
      } catch {
        // keep default
      }
      return {
        route: `/post/${entry.name}`,
        lastmod,
      };
    });
}

function getAllPages() {
  const files = glob.sync('**/*.{tsx,jsx,ts,js}', { cwd: PAGES_DIR });

  return files
    .filter((file) => !EXCLUDED_PATHS.some((excluded) => file.startsWith(excluded)))
    .filter((file) => !file.includes('['))
    .map((file) => {
      const url = file
        .replace(/\.(tsx|jsx|ts|js)$/, '')
        .replace(/\/index$/, '');

      const route = url === 'index' ? '/' : `/${url}`;
      const absolutePath = path.join(PAGES_DIR, file);
      const lastmod = fs.statSync(absolutePath).mtime.toISOString().split('T')[0];

      return { route, lastmod };
    })
    .filter(({ route }) => !EXCLUDED_ROUTES.has(route))
    .filter(({ route }) => !route.includes('.backup'));
}

function getListingRoutes() {
  const today = new Date().toISOString().split('T')[0];
  return getListingSlugs().map((slug) => ({
    route: `/listings/${slug}`,
    lastmod: today,
  }));
}

function dedupePages(pages) {
  const seen = new Map();
  for (const page of pages) {
    if (!seen.has(page.route)) {
      seen.set(page.route, page);
    }
  }
  return Array.from(seen.values());
}

function generateUrlEntry(route, lastmod, priority = 0.8, changefreq = 'weekly') {
  const url = route === '/' ? SITE_URL : `${SITE_URL}${route}`;

  let finalPriority = priority;
  let finalChangefreq = changefreq;
  if (route === '/') {
    finalPriority = 1.0;
    finalChangefreq = 'weekly';
  } else if (route.includes('/post/')) {
    finalPriority = 0.7;
    finalChangefreq = 'weekly';
  } else if (
    route.includes('/listings/') ||
    route.includes('/worldwide-listings/') ||
    route.includes('/vancouver-listings/')
  ) {
    finalPriority = 0.8;
    finalChangefreq = 'monthly';
  }

  return `  <url>
    <loc>${url}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${finalChangefreq}</changefreq>
    <priority>${finalPriority}</priority>
  </url>`;
}

function generateSitemap() {
  const pages = dedupePages([
    ...getAllPages(),
    ...getListingRoutes(),
    ...getBlogPostRoutes(),
  ]);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => generateUrlEntry(page.route, page.lastmod)).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_PATH} (${pages.length} URLs)`);
}

generateSitemap();
