/**
 * Sync listing meta photo arrays with every image file in each property folder.
 * Preserves existing order, appends newly discovered files with natural sort.
 *
 * Run: node scripts/sync-listing-photos-from-disk.js
 */
const fs = require("fs");
const path = require("path");

const META_DIR = path.join(process.cwd(), "src/data/listings/meta");
const PROPERTIES_DIR = path.join(process.cwd(), "public/photos/properties");
const IMAGE_EXT = /\.(avif|jpe?g|png|webp|gif)$/i;

/** Listings that use /optimized/ paths — sync via optimize scripts instead */
const SKIP_SLUGS = new Set(["whistler-village-penthouse-3-bdr-walk-to-ski"]);

function getActiveSlugs() {
  const indexSource = fs.readFileSync(
    path.join(process.cwd(), "src/data/listings/index.ts"),
    "utf8"
  );
  const match = indexSource.match(/listingSlugs = \[([\s\S]*?)\] as const;/);
  return [...match[1].matchAll(/"([^"]+)"/g)].map((entry) => entry[1]);
}

function naturalCompare(a, b) {
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: "base" });
}

function listImagesInFolder(folderName) {
  const dir = path.join(PROPERTIES_DIR, folderName);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((file) => IMAGE_EXT.test(file))
    .sort(naturalCompare);
}

function extractExistingPaths(metaSource) {
  const baseMatch = metaSource.match(/const base = "([^"]+)"/);
  const base = baseMatch ? baseMatch[1] : null;
  const paths = [];

  for (const match of metaSource.matchAll(
    /`(\$\{base\}\/[^`]+)`|"(\/photos\/[^"]+|\/optimized\/[^"]+)"/g
  )) {
    if (match[1]) paths.push(match[1].replace("${base}", base));
    else if (match[2]) paths.push(match[2]);
  }

  return { paths, base };
}

function getPropertyFolderFromPaths(paths) {
  for (const photoPath of paths) {
    if (photoPath.startsWith("/photos/properties/")) {
      return photoPath.split("/")[3];
    }
  }
  return null;
}

function buildPhotoPaths(folderName, filenames, prefix) {
  return filenames.map(
    (file) => `${prefix}/${folderName}/${file.replace(/\\/g, "/")}`
  );
}

function mergePhotoLists(existingPaths, allPaths) {
  const seen = new Set();
  const merged = [];

  for (const photoPath of existingPaths) {
    if (!seen.has(photoPath)) {
      seen.add(photoPath);
      merged.push(photoPath);
    }
  }

  const extras = allPaths.filter((photoPath) => !seen.has(photoPath)).sort(naturalCompare);
  for (const photoPath of extras) {
    seen.add(photoPath);
    merged.push(photoPath);
  }

  return merged;
}

function formatPhotoEntry(photoPath, useBase, indent) {
  if (useBase) {
    const filename = photoPath.split("/").pop();
    return `${indent}\`${"${base}/"}${filename}\``;
  }
  return `${indent}"${photoPath}"`;
}

function replacePhotosArray(metaSource, mergedPaths, base) {
  const photosStart = metaSource.indexOf("photos:");
  if (photosStart === -1) throw new Error("photos: not found");

  const arrayStart = metaSource.indexOf("[", photosStart);
  let depth = 0;
  let arrayEnd = -1;
  for (let i = arrayStart; i < metaSource.length; i += 1) {
    if (metaSource[i] === "[") depth += 1;
    if (metaSource[i] === "]") {
      depth -= 1;
      if (depth === 0) {
        arrayEnd = i;
        break;
      }
    }
  }

  const before = metaSource.slice(0, arrayStart + 1);
  const after = metaSource.slice(arrayEnd);
  const useBase = Boolean(base);
  const indent = useBase ? "    " : "  ";
  const body = mergedPaths.map((photoPath) => formatPhotoEntry(photoPath, useBase, indent)).join(",\n");
  const closeIndent = useBase ? "  " : "";

  return `${before}\n${body}\n${closeIndent}${after}`;
}

function syncSlug(slug) {
  if (SKIP_SLUGS.has(slug)) return null;

  const metaPath = path.join(META_DIR, `${slug}.ts`);
  if (!fs.existsSync(metaPath)) return null;

  let metaSource = fs.readFileSync(metaPath, "utf8");
  const { paths: existingPaths, base } = extractExistingPaths(metaSource);

  if (existingPaths.some((photoPath) => photoPath.startsWith("/optimized/"))) {
    return null;
  }

  const folderName = getPropertyFolderFromPaths(existingPaths);
  if (!folderName) return null;

  const filenames = listImagesInFolder(folderName);
  if (filenames.length === 0) return null;

  const prefix = "/photos/properties";
  const allPaths = buildPhotoPaths(folderName, filenames, prefix);
  const mergedPaths = mergePhotoLists(existingPaths, allPaths);

  if (mergedPaths.length === existingPaths.length) {
    return { slug, folderName, before: existingPaths.length, after: mergedPaths.length, changed: false };
  }

  const updated = replacePhotosArray(metaSource, mergedPaths, base);
  fs.writeFileSync(metaPath, updated);

  return {
    slug,
    folderName,
    before: existingPaths.length,
    after: mergedPaths.length,
    changed: true,
  };
}

function main() {
  const results = getActiveSlugs()
    .map(syncSlug)
    .filter(Boolean);

  const changed = results.filter((result) => result.changed);
  if (changed.length === 0) {
    console.log("All listing photo arrays already match their property folders.");
    return;
  }

  console.log(`Updated ${changed.length} listing(s):`);
  for (const result of changed) {
    console.log(
      `  ${result.slug}: ${result.before} -> ${result.after} (${result.folderName})`
    );
  }
}

main();
