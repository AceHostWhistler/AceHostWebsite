import fs from "fs";
import path from "path";
import { allArticles, type Article } from "./blogArticles";

export interface BlogPostListing {
  slug: string;
  title: string;
  category: string;
  readTime: string;
  heroImage: string;
  publishedAt: string;
}

const POSTS_DIR = path.join(process.cwd(), "src/pages/post");

const articleBySlug = new Map<string, Article>(
  allArticles.map((article) => [article.link.replace(/^\/post\//, ""), article])
);

function parsePublishedAt(content: string): string {
  const iso =
    content.match(/ISO_MOD(?:IFIED)?\s*=\s*"([^"]+)"/)?.[1] ??
    content.match(/"datePublished":\s*"([^"]+)"/)?.[1] ??
    content.match(/"dateModified":\s*"([^"]+)"/)?.[1];

  if (iso) {
    const parsed = Date.parse(iso);
    if (!Number.isNaN(parsed)) {
      return new Date(parsed).toISOString();
    }
  }

  const publishDate =
    content.match(/PUBLISH_DATE\s*=\s*"([^"]+)"/)?.[1] ??
    content.match(/publishDate\s*=\s*"([^"]+)"/)?.[1] ??
    content.match(/Published on[\s\S]*?<span[^>]*>\s*([^<]+)\s*<\/span>/)?.[1]?.trim();

  if (publishDate) {
    const parsed = Date.parse(publishDate);
    if (!Number.isNaN(parsed)) {
      return new Date(parsed).toISOString();
    }
  }

  return new Date(0).toISOString();
}

function parseTitle(content: string, slug: string): string {
  const metaBlock = content.match(/const META\s*=\s*\{([\s\S]*?)\n\};/);
  if (metaBlock) {
    const metaTitle = metaBlock[1].match(/title:\s*\n?\s*"([^"]+)"/)?.[1];
    if (metaTitle) {
      return metaTitle.trim();
    }
  }

  const headTitle = content
    .match(/<title>\s*([\s\S]*?)\s*<\/title>/)?.[1]
    ?.replace(/\s+/g, " ")
    .trim();
  if (headTitle) {
    return headTitle;
  }

  const headline = content.match(/"headline":\s*"([^"]+)"/)?.[1];
  if (headline) {
    return headline;
  }

  const h1 = content
    .match(/<h1[^>]*>\s*([\s\S]*?)\s*<\/h1>/)?.[1]
    ?.replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  if (h1) {
    return h1;
  }

  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function parseHeroImage(content: string, slug: string): string {
  const objectHero = content.match(
    /(?:const|export const)\s+(?:HERO|HERO_IMAGE|COVER_IMAGE)\s*=\s*\{[\s\S]*?src:\s*"([^"]+)"/
  )?.[1];
  if (objectHero) {
    return objectHero;
  }

  const constantHero =
    content.match(/const (?:HERO|HERO_IMAGE|COVER_IMAGE)\s*=\s*\n?\s*"([^"]+)"/)?.[1] ??
    content.match(/const (?:HERO|HERO_IMAGE|COVER_IMAGE)\s*=\s*\n?\s*'([^']+)'/)?.[1];

  if (constantHero) {
    return constantHero;
  }

  const ogImage =
    content.match(/property="og:image"\s+content="https:\/\/acehost\.ca([^"]+)"/)?.[1] ??
    content.match(/content="https:\/\/acehost\.ca([^"]+)"\s*\/?>\s*\n?\s*<meta property="og:image"/)?.[1] ??
    content.match(/"image":\s*"https:\/\/acehost\.ca([^"]+)"/)?.[1];

  if (ogImage) {
    return decodeURI(ogImage);
  }

  return `/photos/post/${slug}/hero.jpg`;
}

function parseReadTime(content: string): string {
  const readTime =
    content.match(/(\d+\s*(?:min(?:ute)?(?:\s*read)?))/i)?.[1] ??
    content.match(/readTime:\s*"([^"]+)"/)?.[1];

  if (!readTime) {
    return "10 min read";
  }

  return readTime.toLowerCase().includes("read") ? readTime : `${readTime} read`;
}

function parseCategory(content: string): string {
  const badge = content.match(
    /rounded-full">\s*\n?\s*([^<]+?)\s*\n?\s*<\/span>/
  )?.[1];

  if (badge && !badge.toLowerCase().includes("min")) {
    return badge.trim();
  }

  return "Blog";
}

function discoverPost(slug: string): BlogPostListing {
  const filePath = path.join(POSTS_DIR, slug, "index.tsx");
  const content = fs.readFileSync(filePath, "utf8");
  const registry = articleBySlug.get(slug);

  return {
    slug,
    title: registry?.title ?? parseTitle(content, slug),
    category: registry?.category ?? parseCategory(content),
    readTime: registry?.readTime ?? parseReadTime(content),
    heroImage: registry?.coverImage ?? parseHeroImage(content, slug),
    publishedAt: parsePublishedAt(content),
  };
}

/** All blog posts discovered from src/pages/post, newest first. */
export function discoverBlogPosts(): BlogPostListing[] {
  if (!fs.existsSync(POSTS_DIR)) {
    return [];
  }

  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((entry) => fs.statSync(path.join(POSTS_DIR, entry)).isDirectory())
    .filter((entry) =>
      fs.existsSync(path.join(POSTS_DIR, entry, "index.tsx"))
    );

  return slugs
    .map(discoverPost)
    .sort(
      (a, b) =>
        Date.parse(b.publishedAt) - Date.parse(a.publishedAt) ||
        a.slug.localeCompare(b.slug)
    );
}

/** Most recent blog article for navigation highlights. */
export function getLatestBlogArticle(): Article | undefined {
  const latest = discoverBlogPosts()[0];
  if (!latest) {
    return allArticles[0];
  }

  const registry = articleBySlug.get(latest.slug);
  if (registry) {
    return registry;
  }

  return {
    title: latest.title,
    category: latest.category,
    readTime: latest.readTime,
    link: `/post/${latest.slug}`,
    coverImage: latest.heroImage,
  };
}
