// Legacy API route. Canonical sitemap is generated at build time by scripts/generate-sitemap.js
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getBlogPostSlugsWithLastMod } from '../../lib/getBlogPostSlugsFromFilesystem';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Set appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, max-age=86400, s-maxage=86400'); // 24 hour cache

  // Get current date in YYYY-MM-DD format
  const today = new Date().toISOString().split('T')[0]!;
  const postEntries = getBlogPostSlugsWithLastMod();
  
  // Start building the sitemap XML
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://acehost.ca</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1</priority>
  </url>
  <url>
    <loc>https://acehost.ca/blogs</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://acehost.ca/properties</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://acehost.ca/our-story</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://acehost.ca/contact</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://acehost.ca/list-property</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://acehost.ca/concierge-service</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;

  // All blog posts from filesystem (keeps sitemap in sync with published routes; critical for Google)
  postEntries.forEach(({ slug, lastmod }) => {
    sitemap += `
  <url>
    <loc>https://acehost.ca/post/${slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.75</priority>
  </url>`;
  });

  // Add property listings
  // Read the listings directory to get all property files
  const listingsDir = path.join(process.cwd(), 'src', 'pages', 'listings');
  
  try {
    const listings = fs.readdirSync(listingsDir)
      .filter(file => !file.startsWith('.')) // Skip hidden files
      .filter(file => fs.statSync(path.join(listingsDir, file)).isDirectory());
    
    listings.forEach(listing => {
      sitemap += `
  <url>
    <loc>https://acehost.ca/listings/${listing}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`;
    });
  } catch (error) {
    console.error('Error reading listings directory:', error);
  }

  // Close the sitemap XML
  sitemap += `
</urlset>`;

  // Write the sitemap to the public directory
  try {
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), sitemap);
  } catch (error) {
    console.error('Error writing sitemap file:', error);
  }

  // Return the sitemap
  res.status(200).send(sitemap);
} 