const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(
  path.join(process.cwd(), "src/pages/properties/index.tsx"),
  "utf8"
);

const start = src.indexOf("const propertyCategories = useMemo<PropertyCategory[]>(");
const arrayStart = src.indexOf("() => [", start) + "() => ".length;
const arrayEnd = src.indexOf("],\n    []\n  );", arrayStart);
const arrayContent = src.slice(arrayStart, arrayEnd + 1);

const types = `export interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number | string;
  bedrooms: number | null;
  bathrooms: number | null;
  description: string;
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
  priceRange?: string;
  winterPrice?: string;
  holidayPrice?: string;
  isPetFriendly?: boolean;
  isSkiInSkiOut?: boolean;
  link?: string;
  country?: string;
  airbnbLink?: string;
  contactLink?: string;
  beds?: number | null;
}

export interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export const TOWNHOME_IDS = new Set([
  "ravens-nest",
  "snow-pine",
  "rare-3-bedroom-whistler-village",
  "luxe-cozy-3-bed-whistler-village",
  "luxe-5-bed-scandinave-retreat",
  "northlands-walk-to-village-slopes-luxury-4-bed",
]);

export const CONDO_IDS = new Set([
  "whispering-pines",
  "marquise-2-bed",
  "ski-in-ski-out-walk-to-lifts-2-bed",
  "whistler-village-views-luxury-2-5-bedroom",
  "luxury-3-bed-stunning-views",
  "cozy-lakefront-whistler-condo",
  "whistler-village-penthouse",
  "whistler-village-penthouse-3-bdr",
  "blackcomb-greens",
]);

export const HOME_IDS = new Set([
  "two-cedars",
  "chalet-la-forja",
  "altitude-retreat",
  "timber-haven-luxury-ski-in-ski-out-kadenwood",
  "luxury-ski-in-ski-out-7-bedroom-kadenwood",
  "panoramic-estate",
  "slopeside-villa",
  "heron-views-whistler",
  "luxury-6-bedroom-blueberry",
  "golf-course-views",
  "falcon-blueberry-drive",
  "wedge-mountain-lodge-spa",
  "squamish-retreat",
  "hood-river-luxury-home",
  "cotswolds-uk-soho-farm-house",
  "mykonos-crystal-villa",
  "villa-oineas-greece-mykonos",
  "helios-estate-mykonos",
  "villa-rosabella-mykonos",
  "punta-mita---casa-juntos",
]);

export function getPropertyType(
  property: PropertyFeature
): "home" | "townhome" | "condo" {
  const id = property.id;
  const name = property.name.toLowerCase();

  if (TOWNHOME_IDS.has(id)) return "townhome";
  if (CONDO_IDS.has(id)) return "condo";
  if (HOME_IDS.has(id)) return "home";
  if (name.includes("townhome")) return "townhome";
  if (name.includes("condo") || name.includes("penthouse")) return "condo";
  if (
    name.includes("chalet") ||
    name.includes("estate") ||
    name.includes("villa") ||
    name.includes("house") ||
    name.includes("home")
  ) {
    return "home";
  }
  return "home";
}

export const propertyCategories: PropertyCategory[] = `;

const out = types + arrayContent + ";\n";
const outDir = path.join(process.cwd(), "src/data/properties");
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "catalog.ts"), out);
console.log("Wrote catalog.ts", out.length, "bytes");
