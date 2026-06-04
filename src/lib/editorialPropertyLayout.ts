/** Shared layout tokens for editorial property pages (header + gallery) */

/**
 * Mobile / iPhone gallery — matches the original pre-editorial layout exactly.
 * Desktop overrides (md+) add wider 3-column tiles only.
 */

const mobileGalleryGridClass = "grid grid-cols-2 gap-2 sm:gap-4";
const mobileGalleryWrapperClass = "max-w-7xl mx-auto px-4 mb-10 sm:mb-16";
const mobileGalleryModalWrapperClass = "max-w-7xl mx-auto py-6 px-4";
const mobileGalleryTileClass =
  "aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md";
const mobileGalleryModalTileClass =
  "relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer";
const mobileGalleryImageSizes =
  "(max-width: 640px) 50vw, (max-width: 768px) 50vw";

const desktopGalleryGridClass = "md:grid-cols-3 md:gap-3 lg:gap-4";
const desktopGalleryWrapperClass =
  "md:w-full md:max-w-[min(100%,1920px)] md:px-6 lg:px-8";
const desktopGalleryModalWrapperClass =
  "md:w-full md:max-w-[min(100%,1920px)] md:px-6 lg:px-8";
const desktopGalleryTileClass = "md:aspect-[3/2]";
const desktopGalleryModalTileClass = "md:aspect-[3/2]";
const desktopGalleryImageSizes = "(max-width: 1024px) 50vw, 33vw";

export const editorialGalleryGridClass = `${mobileGalleryGridClass} ${desktopGalleryGridClass}`;

export const editorialGalleryWrapperClass = `${mobileGalleryWrapperClass} ${desktopGalleryWrapperClass}`;

export const editorialGalleryModalWrapperClass = `${mobileGalleryModalWrapperClass} ${desktopGalleryModalWrapperClass}`;

export const editorialGalleryImageSizes = `${mobileGalleryImageSizes}, ${desktopGalleryImageSizes}`;

export const editorialGalleryTileClass = `${mobileGalleryTileClass} ${desktopGalleryTileClass}`;

export const editorialGalleryModalTileClass = `${mobileGalleryModalTileClass} ${desktopGalleryModalTileClass}`;

export const editorialMainClass = "font-futura";
