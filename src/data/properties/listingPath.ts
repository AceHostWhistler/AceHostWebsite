import type { PropertyFeature } from "@/data/properties/catalog";

/** Resolves the listing URL used by property cards on /properties. */
export function getPropertyListingPath(property: PropertyFeature): string {
  if (property.link) {
    return property.link;
  }

  switch (property.id) {
    case "two-cedars":
      return "/listings/two-cedars-kadenwood";
    case "chalet-la-forja":
      return "/listings/chalet-la-forja-kadenwood";
    case "slopeside-villa":
      return "/listings/slopeside-villa-kadenwood";
    case "panoramic-estate":
      return "/listings/panoramic-estate-kadenwood";
    case "heron-views-whistler":
      return "/listings/heron-views-whistler-village";
    case "ravens-nest":
      return "/listings/ravens-nest-ski-in-ski-out-views";
    case "falcon-blueberry-drive":
      return "/listings/falcon-blueberry-drive";
    case "snow-pine":
      return "/listings/snow-pine";
    case "wedge-mountain-lodge-spa":
      return "/listings/wedge-mountain-lodge-spa";
    case "luxe-cozy-3-bed-whistler-village":
      return "/listings/luxe-cozy-3-bed-whistler-village";
    case "dream-log-chalet-5-bedroom-4-bath-creekside":
      return "/listings/dream-log-chalet-5-bedroom-4-bath-creekside";
    case "the-nest":
      return "/listings/the-nest-ski-in-ski-out";
    case "whispering-pines":
      return "/listings/whispering-pines-ski-in-ski-out";
    case "whistler-village-views":
    case "whistler-village-views-luxury-2-5-bedroom":
      return "/listings/whistler-village-views-luxury-2-5-bedroom";
    case "marquise-2-bed":
      return "/listings/marquise-2-bed-ski-in-ski-out";
    case "ski-in-ski-out-walk-to-lifts-2-bed":
      return "/listings/ski-in-ski-out-walk-to-lifts-2-bed";
    case "scandinavian-mountainside-retreat-pemberton-meadows-50-acres":
      return "/listings/scandinavian-mountainside-retreat-pemberton-meadows-50-acres";
    case "vancouver-house-corner":
      return "/vancouver-listings/vancouver-house-corner-unit-30th-floor";
    case "santorini-greece-villa-eclipse":
      return "/worldwide-listings/santorini-greece-villa-eclipse";
    case "villa-oineas-greece-mykonos":
      return "/worldwide-listings/villa-oineas-greece-mykonos";
    case "yacht-thailand":
      return "/worldwide-listings/super-yacht-thailand";
    case "villa-aegean-greece":
      return "/worldwide-listings/mykonos-crystal-villa";
    case "punta-mita":
      return "/worldwide-listings/punta-mita---casa-juntos";
    case "hood-river-luxury-home":
      return "/worldwide-listings/hood-river-luxury-home";
    default:
      return `/listings/${property.id}`;
  }
}
