import fs from "node:fs";
import path from "node:path";

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

export function getHomeSliderImages() {
  const relativeDir = "media/home-slider";
  const absoluteDir = path.join(process.cwd(), "public", relativeDir);
  try {
    return fs.readdirSync(absoluteDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry) => `/${relativeDir}/${encodeURIComponent(entry.name)}`)
      .sort((a, b) => a.localeCompare(b, "tr", { numeric: true }));
  } catch {
    return [];
  }
}

export function getProjectImages(category) {
  const relativeDir = `media/projects/${category}`;
  const absoluteDir = path.join(process.cwd(), "public", relativeDir);
  try {
    return fs.readdirSync(absoluteDir, { withFileTypes: true })
      .filter((entry) => entry.isFile() && IMAGE_EXTENSIONS.has(path.extname(entry.name).toLowerCase()))
      .map((entry, index) => ({
        id: `${category}-${index + 1}`,
        category,
        title: filenameToTitle(entry.name),
        image: `/${relativeDir}/${encodeURIComponent(entry.name)}`,
      }))
      .sort((a, b) => a.image.localeCompare(b.image, "tr", { numeric: true }));
  } catch {
    return [];
  }
}

function filenameToTitle(filename) {
  const raw = path.basename(filename, path.extname(filename));
  return raw
    .replace(/^\d+[\s_-]*/, "")
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\p{L}/gu, (letter) => letter.toLocaleUpperCase("tr-TR")) || "LOBİ Projesi";
}
