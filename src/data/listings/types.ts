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
  structuredData?: Record<string, unknown>;
  galleryTitle: string;
  photoAltPrefix: string;
  /** Optional video URL shown above details */
  videoUrl?: string;
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
