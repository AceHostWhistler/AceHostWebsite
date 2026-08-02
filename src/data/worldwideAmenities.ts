/** Amenity highlights for standalone worldwide / vancouver listing pages */
export const worldwideListingAmenities: Record<string, string[]> = {
  "mykonos-crystal-villa": [
    "Private luxury estate",
    "Infinity pool",
    "Sea views",
    "10 bedrooms",
    "5 minutes from Mykonos Town",
    "Traditional Cycladic architecture",
  ],
  "cotswolds-uk-soho-farm-house": [
    "Soho Farm House estate",
    "Outdoor heated pool",
    "Air conditioning",
    "Extensive grounds",
    "Event-ready layout",
    "UK countryside retreat",
    "Premium interiors",
  ],
  "helios-estate-mykonos": [
    "Helios Estate Mykonos",
    "Luxury villa",
    "Sea views",
    "Private estate",
    "Ideal for large groups",
  ],
  "hood-river-luxury-home": [
    "Columbia River Gorge",
    "Luxury home",
    "Mountain & river views",
    "Premium finishes",
    "Pacific Northwest escape",
  ],
  "luxe-5-bed-scandinave-retreat": [
    "Creekside, Whistler",
    "3 bedrooms · 5 beds",
    "Whistler Creekside · 400 m to gondola",
    "8-minute walk to Creekside Gondola",
    "Tantalus Range & lake views",
    "Heated floors & steam shower",
  ],
  "punta-mita---casa-juntos": [
    "Punta Mita resort",
    "Ocean views",
    "Luxury villa",
    "Beach club access",
    "Private staffed estate",
  ],
  "santorini-greece-villa-eclipse": [
    "Santorini caldera views",
    "Infinity pool",
    "5 bedrooms",
    "Private chef available",
    "Multiple terraces",
    "Five-star services",
  ],
  "super-yacht-thailand": [
    "130-ft motor yacht",
    "8-member crew",
    "VIP cabins & suites",
    "Water toys & wake boats",
    "Gym & main salon",
    "Thailand & SE Asia cruising",
  ],
  "villa-oineas-greece-mykonos": [
    "Mykonos vineyard estate",
    "Heated infinity pool",
    "Tennis court",
    "Total privacy",
    "Panoramic views",
    "Five-star services",
  ],
  "villa-rosabella-mykonos": [
    "Mykonos luxury villa",
    "Sea views",
    "Private pool",
    "Estate grounds",
    "Ideal for groups",
  ],
  "vancouver-house-corner-unit-30th-floor": [
    "30th-floor corner unit",
    "Vancouver House",
    "City & water views",
    "Premium downtown location",
    "Luxury high-rise living",
    "Full building amenities",
  ],
};

export function getWorldwideAmenities(pageKey: string): string[] {
  return worldwideListingAmenities[pageKey] ?? [];
}
