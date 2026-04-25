const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Configuration
const SITE_URL = 'https://acehost.ca';
const OUTPUT_PATH = path.join(process.cwd(), 'public', 'sitemap.xml');
const PAGES_DIR = path.join(process.cwd(), 'src', 'pages');
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

// Function to recursively get all pages
function getAllPages() {
  // Get all .tsx and .jsx files in the pages directory
  const files = glob.sync('**/*.{tsx,jsx,ts,js}', { cwd: PAGES_DIR });
  
  // Filter out excluded paths and process the valid ones
  return files
    .filter((file) => !EXCLUDED_PATHS.some((excluded) => file.startsWith(excluded)))
    .map((file) => {
      // Replace index files with directory path
      const url = file
        .replace(/\.(tsx|jsx|ts|js)$/, '')
        .replace(/\/index$/, '');
      
      // Create URL path with leading slash
      const route = url === 'index' ? '/' : `/${url}`;
      const absolutePath = path.join(PAGES_DIR, file);
      const lastmod = fs.statSync(absolutePath).mtime.toISOString().split('T')[0];

      return { route, lastmod };
    })
    .filter(({ route }) => !EXCLUDED_ROUTES.has(route))
    .filter(({ route }) => !route.includes('.backup'));
}

// Generate a single URL entry for the sitemap
function generateUrlEntry(route, lastmod, priority = 0.8, changefreq = 'weekly') {
  const url = route === '/' ? SITE_URL : `${SITE_URL}${route}`;
  
  // Set higher priority for home page and key sections
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

// Generate the complete sitemap XML
function generateSitemap() {
  const pages = getAllPages();
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map((page) => generateUrlEntry(page.route, page.lastmod)).join('\n')}
</urlset>`;

  fs.writeFileSync(OUTPUT_PATH, sitemap);
  console.log(`Sitemap generated at ${OUTPUT_PATH}`);
}

// Generate the sitemap
generateSitemap(); 