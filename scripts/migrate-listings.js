/**
 * One-time migration: extract listing metadata and detail sections from page files.
 * Run: node scripts/migrate-listings.js
 */
const fs = require("fs");
const path = require("path");

const LISTINGS_DIR = path.join(process.cwd(), "src/pages/listings");
const META_DIR = path.join(process.cwd(), "src/data/listings/meta");
const DETAILS_DIR = path.join(process.cwd(), "src/data/listings/details");

const EXCLUDED = new Set(["hotel-booking-assistance"]);
const REDIRECT_SLUGS = new Set([
  "punta-mita",
  "punta-mita---casa-juntos",
  "villa-aegean-greece",
  "villa-oineas-greece-mykonos",
  "super-yacht-thailand",
  "mykonos-crystal-villa",
  "cotswolds-uk-soho-farm-house",
  "hood-river-luxury-home",
  "santorini-greece-villa-eclipse",
]);

function getListingFiles() {
  const files = [];
  for (const entry of fs.readdirSync(LISTINGS_DIR, { withFileTypes: true })) {
    if (entry.isDirectory() && entry.name !== "[slug]") {
      const indexPath = path.join(LISTINGS_DIR, entry.name, "index.tsx");
      if (fs.existsSync(indexPath)) files.push({ slug: entry.name, filePath: indexPath });
    } else if (entry.isFile() && entry.name.endsWith(".tsx")) {
      const slug = entry.name.replace(/\.tsx$/, "");
      files.push({ slug, filePath: path.join(LISTINGS_DIR, entry.name) });
    }
  }
  return files.filter((f) => !EXCLUDED.has(f.slug) && !REDIRECT_SLUGS.has(f.slug));
}

function extractBalancedObject(content, startMarker) {
  const idx = content.indexOf(startMarker);
  if (idx === -1) return null;
  const start = content.indexOf("{", idx);
  if (start === -1) return null;
  let depth = 0;
  for (let i = start; i < content.length; i++) {
    if (content[i] === "{") depth++;
    else if (content[i] === "}") {
      depth--;
      if (depth === 0) return content.slice(start, i + 1);
    }
  }
  return null;
}

function extractPhotos(content) {
  const match = content.match(
    /const (?:photos|images)(?:\s*:\s*[^=]+)?\s*=\s*(\[[\s\S]*?\]);/
  );
  if (!match) return [];
  try {
    return Function(`"use strict"; return (${match[1]});`)();
  } catch {
    return [];
  }
}

function extractProp(content, prop) {
  const re = new RegExp(`${prop}=\\{?([^}\\n>]+)\\}?`);
  const m = content.match(re);
  if (!m) return undefined;
  let val = m[1].trim();
  if (val.startsWith('"') && val.endsWith('"')) return val.slice(1, -1);
  if (/^\d+(\.\d+)?$/.test(val)) return Number(val);
  return val;
}

function extractDetailsJsx(content) {
  const startMarkers = [
    "{/* Property Description */}",
    'id="details"',
    "{/* The Space Section */}",
    "<PropertyDetails",
    "{/* Property Details */}",
    "{/* Video */}",
    'className="prose max-w-4xl',
    "<div className=\"mb-12\">",
    "<div className=\"max-w-6xl mx-auto px-4 mb-",
  ];
  const endMarkers = [
    "{/* Photo Gallery Modal */}",
    "{showAllPhotos &&",
    "{/* Full-screen Photo View */}",
    "</main>",
  ];

  let start = -1;
  for (const marker of startMarkers) {
    const i = content.indexOf(marker);
    if (i !== -1 && (start === -1 || i < start)) start = i;
  }

  if (start === -1) {
    const photosEnd = content.indexOf('id="photos"');
    if (photosEnd !== -1) {
      const gridClose = content.indexOf("</div>", content.indexOf("View all", photosEnd));
      if (gridClose !== -1) start = gridClose + 6;
    }
  }

  if (start === -1) return null;

  let end = content.length;
  for (const marker of endMarkers) {
    const i = content.indexOf(marker, start + 10);
    if (i !== -1 && i < end) end = i;
  }

    let jsx = content.slice(start, end).trim();
    if (jsx.startsWith("{/* Property Description */}")) {
      jsx = jsx.replace("{/* Property Description */}", "").trim();
    }
    // Remove PropertyGallery blocks (handled by PropertyListingLayout)
    jsx = jsx.replace(/<div ref=\{photosRef\}>[\s\S]*?<\/div>\s*/g, "");
    jsx = jsx.replace(/<PropertyGallery[\s\S]*?\/>/g, "");
    // Normalize images -> photos for detail components
    jsx = jsx.replace(/\bimages\b/g, "photos");
    return jsx || null;
}

function toComponentName(slug) {
  return (
    slug
      .split(/[-_]/)
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
      .join("") + "Details"
  );
}

function migrate() {
  fs.mkdirSync(META_DIR, { recursive: true });
  fs.mkdirSync(DETAILS_DIR, { recursive: true });

  const files = getListingFiles();
  const slugs = [];
  const failures = [];

  for (const { slug, filePath } of files) {
    const content = fs.readFileSync(filePath, "utf8");

    if (content.includes("getServerSideProps") && content.includes("redirect:")) {
      continue;
    }

    const photos = extractPhotos(content);
    if (!photos.length) {
      failures.push({ slug, reason: "no photos" });
      continue;
    }

    const titleMatch = content.match(/<title>([^<]+)<\/title>/);
    const descMatch = content.match(/name="description"\s*\n?\s*content="([^"]+)"/);
    const keywordsMatch = content.match(/name="keywords"\s*\n?\s*content="([^"]+)"/);

    const headerBlock = content.match(/<PropertyHeader[\s\S]*?\/>/)?.[0] || "";
    const h1Title = content.match(/<h1[^>]*>([^<]+)<\/h1>/)?.[1];
    const structuredRaw = extractBalancedObject(content, "const structuredData");

    const detailsJsx = extractDetailsJsx(content);
    if (!detailsJsx) {
      failures.push({ slug, reason: "no details section" });
      continue;
    }

    const galleryTitle =
      titleMatch?.[1]?.split("|")[0]?.trim() || slug.replace(/-/g, " ");
    const photoAltPrefix = galleryTitle.split("|")[0].trim();

    const meta = {
      slug,
      photos,
      seo: {
        title: titleMatch?.[1] || slug,
        description: descMatch?.[1] || "",
        ...(keywordsMatch ? { keywords: keywordsMatch[1] } : {}),
      },
      header: {
        title:
          extractProp(headerBlock, "title") || h1Title || galleryTitle,
        guests: extractProp(headerBlock, "guests") ?? "—",
        bedrooms: extractProp(headerBlock, "bedrooms") ?? "—",
        bathrooms: extractProp(headerBlock, "bathrooms") ?? "—",
        priceRange:
          extractProp(headerBlock, "priceRange") || "Contact for pricing",
        ...(extractProp(headerBlock, "beds") !== undefined
          ? { beds: extractProp(headerBlock, "beds") }
          : {}),
        ...(extractProp(headerBlock, "winterPrice")
          ? { winterPrice: extractProp(headerBlock, "winterPrice") }
          : {}),
        ...(extractProp(headerBlock, "holidayPrice")
          ? { holidayPrice: extractProp(headerBlock, "holidayPrice") }
          : {}),
        ...(extractProp(headerBlock, "airbnbLink")
          ? { airbnbLink: extractProp(headerBlock, "airbnbLink") }
          : {}),
        ...(extractProp(headerBlock, "contactLink")
          ? { contactLink: extractProp(headerBlock, "contactLink") }
          : {}),
      },
      galleryTitle,
      photoAltPrefix,
      ...(structuredRaw
        ? { structuredData: `__STRUCTURED__${structuredRaw}` }
        : {}),
    };

    const metaContent = `import type { ListingData } from "../types";

const listing: ListingData = ${JSON.stringify(
      {
        ...meta,
        structuredData: structuredRaw
          ? undefined
          : undefined,
      },
      null,
      2
    ).replace(
      structuredRaw ? `"structuredData": undefined` : "",
      structuredRaw ? `"structuredData": ${structuredRaw}` : ""
    )};

export default listing;
`;

    // Fix structured data in meta file
    let metaFile = `import type { ListingData } from "../types";

const listing: ListingData = {
  slug: ${JSON.stringify(slug)},
  photos: ${JSON.stringify(photos, null, 2)},
  seo: {
    title: ${JSON.stringify(meta.seo.title)},
    description: ${JSON.stringify(meta.seo.description)},${
      meta.seo.keywords
        ? `\n    keywords: ${JSON.stringify(meta.seo.keywords)},`
        : ""
    }
  },
  header: ${JSON.stringify(meta.header, null, 4).replace(/^/gm, "  ")},
  galleryTitle: ${JSON.stringify(galleryTitle)},
  photoAltPrefix: ${JSON.stringify(photoAltPrefix)},${
      structuredRaw ? `\n  structuredData: ${structuredRaw},` : ""
    }
};

export default listing;
`;

    fs.writeFileSync(path.join(META_DIR, `${slug}.ts`), metaFile);

    const componentName = toComponentName(slug);
    const detailsContent = `import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyDetails from "@/components/PropertyDetails";
import LazyVimeoPlayer from "@/components/LazyVimeoPlayer";
import type { ListingDetailsProps } from "../types";

export default function ${componentName}({ photos }: ListingDetailsProps) {
  return (
    <>
${detailsJsx
  .split("\n")
  .map((line) => (line ? "      " + line : line))
  .join("\n")}
    </>
  );
}
`;

    fs.writeFileSync(path.join(DETAILS_DIR, `${slug}.tsx`), detailsContent);
    slugs.push(slug);
    console.log(`Migrated: ${slug}`);
  }

  // Generate index.ts registry
  const imports = slugs
    .map(
      (slug) =>
        `import ${toComponentName(slug)} from "./details/${slug}";
import ${slug.replace(/[^a-zA-Z0-9]/g, "_")}Meta from "./meta/${slug}";`
    )
    .join("\n");

  const entries = slugs
    .map((slug) => {
      const varName = slug.replace(/[^a-zA-Z0-9]/g, "_");
      return `  "${slug}": { ...${varName}Meta, Details: ${toComponentName(slug)} },`;
    })
    .join("\n");

  const indexContent = `${imports}

import type { ListingEntry } from "./types";

export const listingSlugs = ${JSON.stringify(slugs, null, 2)} as const;

export type ListingSlug = (typeof listingSlugs)[number];

export const listings: Record<string, ListingEntry> = {
${entries}
};

export function getListing(slug: string): ListingEntry | undefined {
  return listings[slug];
}
`;

  fs.writeFileSync(path.join(process.cwd(), "src/data/listings/index.ts"), indexContent);

  console.log(`\nDone: ${slugs.length} listings migrated`);
  if (failures.length) {
    console.log("Failures:", failures);
  }
}

migrate();
