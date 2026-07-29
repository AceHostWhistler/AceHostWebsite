export interface PropertyGeo {
  locality: string;
  region: string;
  country: string;
  latitude: number;
  longitude: number;
}

const WHISTLER: PropertyGeo = {
  locality: "Whistler",
  region: "BC",
  country: "CA",
  latitude: 50.1163,
  longitude: -122.9574,
};

const PEMBERTON: PropertyGeo = {
  locality: "Pemberton",
  region: "BC",
  country: "CA",
  latitude: 50.3203,
  longitude: -122.8053,
};

const SQUAMISH: PropertyGeo = {
  locality: "Squamish",
  region: "BC",
  country: "CA",
  latitude: 49.7016,
  longitude: -123.1558,
};

const VANCOUVER: PropertyGeo = {
  locality: "Vancouver",
  region: "BC",
  country: "CA",
  latitude: 49.2827,
  longitude: -123.1207,
};

const MYKONOS: PropertyGeo = {
  locality: "Mykonos",
  region: "South Aegean",
  country: "GR",
  latitude: 37.4467,
  longitude: 25.3289,
};

const SANTORINI: PropertyGeo = {
  locality: "Santorini",
  region: "South Aegean",
  country: "GR",
  latitude: 36.3932,
  longitude: 25.4615,
};

const COTSWOLDS: PropertyGeo = {
  locality: "Cotswolds",
  region: "England",
  country: "GB",
  latitude: 51.833,
  longitude: -1.8433,
};

const PUNTA_MITA: PropertyGeo = {
  locality: "Punta Mita",
  region: "Nayarit",
  country: "MX",
  latitude: 20.773,
  longitude: -105.527,
};

const PHUKET: PropertyGeo = {
  locality: "Phuket",
  region: "Phuket",
  country: "TH",
  latitude: 7.8804,
  longitude: 98.3923,
};

const HOOD_RIVER: PropertyGeo = {
  locality: "Hood River",
  region: "OR",
  country: "US",
  latitude: 45.7085,
  longitude: -121.5215,
};

/** Listing slug overrides (defaults to Whistler). */
const LISTING_GEO: Record<string, PropertyGeo> = {
  "scandinavian-mountainside-retreat-pemberton-meadows-50-acres": PEMBERTON,
  "squamish-retreat-with-the-best-view": SQUAMISH,
};

/** Route path segment overrides for worldwide/vancouver listings. */
const PATH_GEO: Record<string, PropertyGeo> = {
  "cotswolds-uk-soho-farm-house": COTSWOLDS,
  "mykonos-crystal-villa": MYKONOS,
  "villa-oineas-greece-mykonos": MYKONOS,
  "villa-rosabella-mykonos": MYKONOS,
  "helios-estate-mykonos": MYKONOS,
  "santorini-greece-villa-eclipse": SANTORINI,
  "punta-mita---casa-juntos": PUNTA_MITA,
  "super-yacht-thailand": PHUKET,
  "hood-river-luxury-home": HOOD_RIVER,
  "luxe-5-bed-scandinave-retreat": WHISTLER,
  "vancouver-house-corner-unit-30th-floor": VANCOUVER,
};

export function getPropertyGeoBySlug(slug: string): PropertyGeo {
  return LISTING_GEO[slug] ?? WHISTLER;
}

export function getPropertyGeoByPath(path: string): PropertyGeo {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  const segments = normalized.split("/");
  const lastSegment = segments[segments.length - 1] ?? "";

  if (PATH_GEO[lastSegment]) {
    return PATH_GEO[lastSegment];
  }

  if (segments[0] === "listings" && segments[1]) {
    return getPropertyGeoBySlug(segments[1]);
  }

  if (segments[0] === "vancouver-listings") {
    return VANCOUVER;
  }

  return WHISTLER;
}

export const defaultPropertyGeo = WHISTLER;
