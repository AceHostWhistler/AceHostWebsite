const fs = require("fs");
const path = require("path");

const META_DIR = path.join(process.cwd(), "src/data/listings/meta");

for (const file of fs.readdirSync(META_DIR)) {
  if (!file.endsWith(".ts")) continue;
  let content = fs.readFileSync(path.join(META_DIR, file), "utf8");
  const photosMatch = content.match(/photos: (\[[\s\S]*?\]),/);
  if (!photosMatch) continue;
  let photos;
  try {
    photos = Function(`"use strict"; return (${photosMatch[1]});`)();
  } catch {
    continue;
  }
  let changed = false;
  for (let i = 0; i < photos.length; i++) {
    const re = new RegExp(`photos\\[${i}\\]`, "g");
    if (content.match(re)) {
      content = content.replace(re, JSON.stringify(photos[i]));
      changed = true;
    }
  }
  if (changed) {
    fs.writeFileSync(path.join(META_DIR, file), content);
    console.log("Fixed meta:", file);
  }
}
