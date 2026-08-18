/**
 * Validates referenced property photo paths exist on disk.
 * Run: node scripts/verify-property-photos.js
 */
const fs = require("fs");
const path = require("path");

const PUBLIC = path.join(process.cwd(), "public");
const optimizedFolders = require("../src/data/optimizedPropertyFolders.json");
const photoManifest = require("../src/data/optimizedPhotoManifest.json");

const optimizedFolderSet = new Set(optimizedFolders.folders);

function getActiveListingSlugs() {
  const indexSource = fs.readFileSync(
    path.join(process.cwd(), "src/data/listings/index.ts"),
    "utf8"
  );
  const match = indexSource.match(
    /export const listingSlugs = \[([\s\S]*?)\] as const;/
  );
  if (!match) return [];
  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function exists(webPath) {
  return fs.existsSync(path.join(PUBLIC, webPath.replace(/^\//, "")));
}

function collectPathsFromFile(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  return [...text.matchAll(/"(\/photos\/[^"]+)"/g)].map((match) => match[1]);
}

function collectPathsFromDir(dirPath) {
  const paths = [];
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const full = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      paths.push(...collectPathsFromDir(full));
    } else if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      paths.push(...collectPathsFromFile(full));
    }
  }
  return paths;
}

const listingSlugs = getActiveListingSlugs();
const sourceRoots = [
  ...listingSlugs.map((slug) => `src/data/listings/meta/${slug}.ts`),
  "src/data/properties/catalog.ts",
  "src/pages/worldwide-listings",
  "src/data/blog",
];

const referenced = new Set();
for (const root of sourceRoots) {
  const full = path.join(process.cwd(), root);
  if (!fs.existsSync(full)) continue;
  if (fs.statSync(full).isDirectory()) {
    collectPathsFromDir(full).forEach((p) => referenced.add(p));
  } else {
    collectPathsFromFile(full).forEach((p) => referenced.add(p));
  }
}

const missingSource = [];
const missingOptimized = [];

for (const src of referenced) {
  if (!exists(src)) {
    missingSource.push(src);
    continue;
  }

  const folder = src.split("/")[3];
  if (!optimizedFolderSet.has(folder)) continue;

  const gallery = photoManifest.gallery[src];
  if (gallery && !exists(gallery)) {
    missingOptimized.push({ src, optimized: gallery });
  }
}

if (missingSource.length === 0 && missingOptimized.length === 0) {
  console.log(`All ${referenced.size} referenced property photo paths are valid.`);
  process.exit(0);
}

if (missingSource.length > 0) {
  console.error(`Missing source files (${missingSource.length}):`);
  missingSource.forEach((p) => console.error(`  ${p}`));
}

if (missingOptimized.length > 0) {
  console.error(`Missing optimized gallery files (${missingOptimized.length}):`);
  missingOptimized.slice(0, 20).forEach(({ src, optimized }) => {
    console.error(`  ${src} -> ${optimized}`);
  });
  if (missingOptimized.length > 20) {
    console.error(`  ...and ${missingOptimized.length - 20} more`);
  }
}

process.exit(1);
