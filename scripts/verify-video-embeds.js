/**
 * Ensures every video embed host used in the codebase is allowed by CSP.
 * Run: node scripts/verify-video-embeds.js
 */
const fs = require("fs");
const path = require("path");
const {
  buildContentSecurityPolicy,
  EMBED_FRAME_SOURCES,
} = require("./csp");

const SRC_ROOT = path.join(process.cwd(), "src");
const EMBED_URL_RE =
  /https:\/\/(?:player\.vimeo\.com|www\.youtube(?:-nocookie)?\.com|www\.instagram\.com)[^\s"'`<>)\\]+/g;

function hostnameFromSource(source) {
  if (source.startsWith("'")) {
    return null;
  }

  try {
    return new URL(source).hostname;
  } catch {
    return null;
  }
}

function collectSourceFiles(dirPath, files = []) {
  for (const entry of fs.readdirSync(dirPath, { withFileTypes: true })) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      collectSourceFiles(fullPath, files);
      continue;
    }

    if (/\.(tsx?|jsx?)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
}

function main() {
  console.log("Running video embed verification...");
  const csp = buildContentSecurityPolicy();
  const allowedHostnames = new Set(
    EMBED_FRAME_SOURCES.map(hostnameFromSource).filter(Boolean)
  );
  const errors = [];

  for (const source of EMBED_FRAME_SOURCES) {
    if (!csp.includes(source)) {
      errors.push(`CSP is missing required frame source: ${source}`);
    }
  }

  const files = collectSourceFiles(SRC_ROOT);
  const usedHostnames = new Set();

  for (const filePath of files) {
    const content = fs.readFileSync(filePath, "utf8");
    const matches = content.match(EMBED_URL_RE) ?? [];

    for (const match of matches) {
      let hostname;
      try {
        hostname = new URL(match).hostname;
      } catch {
        errors.push(`${path.relative(process.cwd(), filePath)}: invalid embed URL ${match}`);
        continue;
      }

      usedHostnames.add(hostname);

      if (!allowedHostnames.has(hostname)) {
        errors.push(
          `${path.relative(process.cwd(), filePath)} uses ${hostname}, which is not in scripts/csp.js EMBED_FRAME_SOURCES`
        );
      }
    }
  }

  if (errors.length > 0) {
    console.error("Video embed verification failed:\n");
    for (const error of errors) {
      console.error(`  - ${error}`);
    }
    process.exit(1);
  }

  console.log(
    `Video embed verification passed (${usedHostnames.size} embed host(s), ${files.length} source file(s) scanned).`
  );
}

main();
