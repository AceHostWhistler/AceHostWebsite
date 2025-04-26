export interface PropertyPhoto {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Room {
  name: string;
  description: string;
  beds: string[];
}

export interface SpaceDetails {
  description: string;
  highlights: string[];
}

export interface BedroomLayout {
  description: string;
  rooms: Room[];
}

export interface Location {
  description: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

export interface PropertyInfo {
  title: string;
  description: string;
  guests: number;
  bedrooms: number;
  beds: number;
  bathrooms: number;
  priceRange: string;
  winterPriceRange: string;
  holidayPriceRange: string;
  minimumStay: string;
  airbnbLink: string;
  photos: PropertyPhoto[];
  spaceDetails: SpaceDetails;
  bedroomLayout: BedroomLayout;
  location: Location;
}

export const defaultPropertyFeatures = {
  privateButler: false,
  skiInSkiOut: false,
  pool: false,
  hotTub: false,
  gym: false,
  sauna: false,
}; 