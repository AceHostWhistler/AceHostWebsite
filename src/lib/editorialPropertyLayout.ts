/** Shared layout tokens for editorial property pages (header + gallery) */

/** Desktop-only wider 3-column gallery; mobile matches the original layout. */
export const editorialGalleryGridClass =
  "grid grid-cols-2 sm:grid-cols-2 gap-2 sm:gap-4 md:grid-cols-3 md:gap-3 lg:gap-4";

export const editorialGalleryWrapperClass =
  "max-w-7xl mx-auto px-4 mb-10 sm:mb-16 md:w-full md:max-w-[min(100%,1920px)] md:px-6 lg:px-8";

export const editorialGalleryModalWrapperClass =
  "max-w-7xl mx-auto py-6 px-4 md:w-full md:max-w-[min(100%,1920px)] md:px-6 lg:px-8";

/** Original 2-col mobile sizing; 3-col on md+ */
export const editorialGalleryImageSizes =
  "(max-width: 768px) 50vw, (max-width: 1024px) 50vw, 33vw";

/** 4:3 on mobile (original); 3:2 on md+ */
export const editorialGalleryTileClass =
  "aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md md:aspect-[3/2] md:rounded-lg";

export const editorialGalleryModalTileClass =
  "relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer md:aspect-[3/2] md:rounded-lg";

export const editorialMainClass = "font-futura";
