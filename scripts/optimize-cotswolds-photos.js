/**
 * Generates WebP gallery + full-size variants for Cotswolds listing photos.
 * Run manually or when source photos change: node scripts/optimize-cotswolds-photos.js
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const SOURCE_DIR = path.join(
  process.cwd(),
  "public/photos/properties/Cotswolds UK - Soho Farm House"
);
const GALLERY_DIR = path.join(
  process.cwd(),
  "public/high-quality/cotswolds-gallery"
);
const FULL_DIR = path.join(process.cwd(), "public/high-quality/cotswolds-full");
const IMAGE_EXT = /\.(jpe?g|png|webp)$/i;

const VARIANTS = {
  gallery: { dir: GALLERY_DIR, maxWidth: 1280, quality: 82 },
  full: { dir: FULL_DIR, maxWidth: 1920, quality: 85 },
};

async function optimizeFile(filename) {
  const sourcePath = path.join(SOURCE_DIR, filename);
  const baseName = filename.replace(/\.[^.]+$/, "");

  for (const [name, config] of Object.entries(VARIANTS)) {
    const outputPath = path.join(config.dir, `${baseName}.webp`);

    if (fs.existsSync(outputPath)) {
      const sourceMtime = fs.statSync(sourcePath).mtimeMs;
      const outputMtime = fs.statSync(outputPath).mtimeMs;
      if (outputMtime >= sourceMtime) {
        continue;
      }
    }

    await sharp(sourcePath)
      .rotate()
      .resize({
        width: config.maxWidth,
        withoutEnlargement: true,
        fit: "inside",
      })
      .webp({ quality: config.quality, effort: 4 })
      .toFile(outputPath);
  }
}

async function main() {
  if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Source directory not found: ${SOURCE_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(GALLERY_DIR, { recursive: true });
  fs.mkdirSync(FULL_DIR, { recursive: true });

  const files = fs
    .readdirSync(SOURCE_DIR)
    .filter((file) => IMAGE_EXT.test(file))
    .sort((a, b) => a.localeCompare(b));

  console.log(`Optimizing ${files.length} Cotswolds photos...`);

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    process.stdout.write(`  [${i + 1}/${files.length}] ${file}\r`);
    await optimizeFile(file);
  }

  const gallerySize = directorySize(GALLERY_DIR);
  const fullSize = directorySize(FULL_DIR);
  console.log(
    `\nDone. Gallery: ${formatBytes(gallerySize)} | Full: ${formatBytes(fullSize)}`
  );
}

function directorySize(dir) {
  return fs
    .readdirSync(dir)
    .reduce((total, file) => total + fs.statSync(path.join(dir, file)).size, 0);
}

function formatBytes(bytes) {
  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
