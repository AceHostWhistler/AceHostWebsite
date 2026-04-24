import fs from "fs";
import path from "path";

const POST_DIR = path.join(process.cwd(), "src", "pages", "post");

export type BlogSitemapEntry = { slug: string; lastmod: string };

/**
 * Every /post/* page on disk, with lastmod from the route file mtime.
 * Used so the sitemap always matches published routes (indexation for Google).
 */
export function getBlogPostSlugsWithLastMod(): BlogSitemapEntry[] {
  if (!fs.existsSync(POST_DIR)) return [];

  return fs
    .readdirSync(POST_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const slug = d.name;
      const indexPath = path.join(POST_DIR, slug, "index.tsx");
      let lastmod = new Date().toISOString().split("T")[0]!;
      try {
        if (fs.existsSync(indexPath)) {
          lastmod = fs.statSync(indexPath).mtime.toISOString().split("T")[0]!;
        }
      } catch {
        // keep default
      }
      return { slug, lastmod };
    })
    .sort((a, b) => a.slug.localeCompare(b.slug));
}
