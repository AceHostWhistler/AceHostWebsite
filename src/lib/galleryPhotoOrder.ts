export const GALLERY_PREVIEW_LIMIT = 18;

interface GalleryPhotoOrderOptions {
  preserveOrder?: boolean;
  pinFirstPhoto?: boolean;
}

function hashSeed(seed: string): number {
  let hash = 2166136261;
  for (let index = 0; index < seed.length; index += 1) {
    hash ^= seed.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function createSeededRandom(seed: string): () => number {
  let state = hashSeed(seed);
  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

/**
 * Returns a display-only photo order without mutating the canonical photo list.
 * The seeded shuffle is stable across server and client renders.
 */
export function getGalleryPhotoOrder<T>(
  photos: readonly T[],
  seed: string,
  {
    preserveOrder = false,
    pinFirstPhoto = true,
  }: GalleryPhotoOrderOptions = {}
): T[] {
  const orderedPhotos = [...photos];
  if (preserveOrder || orderedPhotos.length < 3) {
    return orderedPhotos;
  }

  const pinnedPhotos = pinFirstPhoto ? orderedPhotos.splice(0, 1) : [];
  const random = createSeededRandom(seed);

  for (let index = orderedPhotos.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(random() * (index + 1));
    [orderedPhotos[index], orderedPhotos[swapIndex]] = [
      orderedPhotos[swapIndex],
      orderedPhotos[index],
    ];
  }

  return [...pinnedPhotos, ...orderedPhotos];
}
