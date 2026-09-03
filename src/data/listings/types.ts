import type { ReactNode } from "react";

export interface ListingHeader {
  title: string;
  guests: number | string;
  bedrooms: number | string;
  bathrooms: number | string;
  beds?: number | string;
  priceRange: string;
  winterPrice?: string;
  holidayPrice?: string;
  airbnbLink?: string;
  contactLink?: string;
  contactText?: string;
}

export interface ListingSeo {
  title: string;
  description: string;
  keywords?: string;
}

export interface ListingData {
  slug: string;
  photos: string[];
  seo: ListingSeo;
  header: ListingHeader;
  /** Bullet-list highlights shown in editorial header (optional) */
  amenities?: string[];
  structuredData?: Record<string, unknown>;
  galleryTitle: string;
  photoAltPrefix: string;
  /** Optional Vimeo video id shown above the gallery */
  vimeoVideoId?: string;
  /** Accessible title for the Vimeo embed */
  vimeoTitle?: string;
  /** Optional direct MP4 fallback (legacy) */
  videoUrl?: string;
  /** Keep gallery in source order instead of seeded shuffle. */
  galleryPreserveOrder?: boolean;
  /** Photo paths excluded from the first preview grid and shown at the end. */
  galleryDeferPhotos?: string[];
}

export interface ListingDetailsProps {
  photos: string[];
}

export type ListingDetailsComponent = React.ComponentType<ListingDetailsProps>;

export interface ListingEntry extends ListingData {
  Details: ListingDetailsComponent;
}

export interface ListingPageProps {
  listing: ListingData;
  children?: ReactNode;
}
