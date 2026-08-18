/**
 * Maps original property photo paths to pre-optimized WebP variants.
 * Falls back to the original when no optimized version exists.
 */

import {
  getCotswoldsFullSrc,
  getCotswoldsGallerySrc,
} from "@/data/cotswoldsPhotos";
import optimizedFolders from "@/data/optimizedPropertyFolders.json";
import photoManifest from "@/data/optimizedPhotoManifest.json";

const PHOTO_PREFIX = "/photos/properties/";
const optimizedFolderSet = new Set<string>(optimizedFolders.folders);

const galleryManifest = photoManifest.gallery as Record<string, string>;
const fullManifest = photoManifest.full as Record<string, string>;

function isCotswoldsPath(src: string): boolean {
  return src.includes("Cotswolds UK - Soho Farm House");
}

function getPropertyFolder(src: string): string | null {
  if (!src.startsWith(PHOTO_PREFIX)) return null;
  const rest = src.slice(PHOTO_PREFIX.length);
  const slash = rest.indexOf("/");
  if (slash === -1) return null;
  return rest.slice(0, slash);
}

function toWebpPath(src: string, variant: "gallery" | "full"): string {
  if (!src.startsWith(PHOTO_PREFIX)) return src;
  const relative = src.slice(PHOTO_PREFIX.length);
  const baseName = relative.replace(/\.[^.]+$/, "");
  const prefix =
    variant === "gallery"
      ? "/high-quality/property-gallery/"
      : "/high-quality/property-full/";
  return `${prefix}${baseName}.webp`;
}

function isOptimizedFolder(src: string): boolean {
  const folder = getPropertyFolder(src);
  return folder !== null && optimizedFolderSet.has(folder);
}

function resolveOptimizedSrc(
  src: string,
  variant: "gallery" | "full"
): string {
  const manifest = variant === "gallery" ? galleryManifest : fullManifest;
  return manifest[src] ?? toWebpPath(src, variant);
}

export function getGalleryPhotoSrc(src: string): string {
  if (isCotswoldsPath(src)) return getCotswoldsGallerySrc(src);
  if (!isOptimizedFolder(src)) return src;
  const optimized = resolveOptimizedSrc(src, "gallery");
  return galleryManifest[src] ? optimized : src;
}

export function getFullPhotoSrc(src: string): string {
  if (isCotswoldsPath(src)) return getCotswoldsFullSrc(src);
  if (!isOptimizedFolder(src)) return src;
  const optimized = resolveOptimizedSrc(src, "full");
  return fullManifest[src] ? optimized : src;
}

export function mapGalleryPhotos(photos: string[]): string[] {
  return photos.map(getGalleryPhotoSrc);
}

export function mapFullPhotos(photos: string[]): string[] {
  return photos.map(getFullPhotoSrc);
}
