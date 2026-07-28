/**
 * Pre-generates WebP gallery + full variants for large property photo folders.
 * Run: node scripts/optimize-property-photos.js
 * Options: --min-folder-mb 50 (default)
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const PROPERTIES_DIR = path.join(process.cwd(), "public/photos/properties");
const GALLERY_ROOT = path.join(process.cwd(), "public/high-quality/property-gallery");
const FULL_ROOT = path.join(process.cwd(), "public/high-quality/property-full");
const MANIFEST_PATH = path.join(process.cwd(), "src/data/optimizedPropertyFolders.json");
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const SKIP_FOLDERS = new Set(["Cotswolds UK - Soho Farm House"]);

const VARIANTS = {
  gallery: { root: GALLERY_ROOT, maxWidth: 1280, quality: 82 },
  full: { root: FULL_ROOT, maxWidth: 1920, quality: 85 },
};

function parseMinFolderMb() {
  const arg = process.argv.find((a) => a.startsWith("--min-folder-mb="));
  if (arg) return Number(arg.split("=")[1]) || 50;
  return 50;
}

function folderSizeMb(folderPath) {
  let total = 0;
  for (const entry of fs.readdirSync(folderPath, { withFileTypes: true })) {
    const full = path.join(folderPath, entry.name);
    if (entry.isFile()) total += fs.statSync(full).size;
  }
  return total / (1024 * 1024);
}

function listImageFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listImageFiles(full));
    } else if (IMAGE_EXT.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

async function optimizeFile(sourcePath, folderName) {
  const fileName = path.basename(sourcePath);
  const baseName = fileName.replace(/\.[^.]+$/, "");

  for (const [name, config] of Object.entries(VARIANTS)) {
    const outputDir = path.join(config.root, folderName);
    fs.mkdirSync(outputDir, { recursive: true });
    const outputPath = path.join(outputDir, `${baseName}.webp`);

    if (fs.existsSync(outputPath)) {
      const sourceMtime = fs.statSync(sourcePath).mtimeMs;
      const outputMtime = fs.statSync(outputPath).mtimeMs;
      if (outputMtime >= sourceMtime) continue;
    }

    await sharp(sourcePath)
      .rotate()
      .resize({ width: config.maxWidth, withoutEnlargement: true, fit: "inside" })
      .webp({ quality: config.quality, effort: 4 })
      .toFile(outputPath);
  }
}

async function main() {
  const minFolderMb = parseMinFolderMb();
  if (!fs.existsSync(PROPERTIES_DIR)) {
    console.error("Properties directory not found.");
    process.exit(1);
  }

  const folders = fs
    .readdirSync(PROPERTIES_DIR, { withFileTypes: true })
    .filter((e) => e.isDirectory())
    .map((e) => e.name)
    .filter((name) => !SKIP_FOLDERS.has(name))
    .filter((name) => folderSizeMb(path.join(PROPERTIES_DIR, name)) >= minFolderMb)
    .sort();

  console.log(
    `Optimizing ${folders.length} property folders (>= ${minFolderMb}MB)...`
  );

  let totalFiles = 0;
  for (const folder of folders) {
    const folderPath = path.join(PROPERTIES_DIR, folder);
    const images = listImageFiles(folderPath);
    console.log(`\n${folder} (${images.length} images)`);
    for (let i = 0; i < images.length; i++) {
      process.stdout.write(`  [${i + 1}/${images.length}]\r`);
      await optimizeFile(images[i], folder);
      totalFiles++;
    }
  }

  const manifest = {
    folders,
    generatedAt: new Date().toISOString(),
    minFolderMb,
  };
  fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + "\n");

  const gallerySize = dirSize(GALLERY_ROOT);
  const fullSize = dirSize(FULL_ROOT);
  console.log(
    `\nDone. ${totalFiles} images across ${folders.length} folders.`
  );
  console.log(`Gallery total: ${formatBytes(gallerySize)} | Full total: ${formatBytes(fullSize)}`);
  console.log(`Manifest: ${MANIFEST_PATH}`);
}

function dirSize(dir) {
  if (!fs.existsSync(dir)) return 0;
  let total = 0;
  const walk = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else total += fs.statSync(full).size;
    }
  };
  walk(dir);
  return total;
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
