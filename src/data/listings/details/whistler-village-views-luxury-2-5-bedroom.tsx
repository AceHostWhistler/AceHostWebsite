import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/whistler-village-views-luxury-2-5-bedroom";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillageViewsLuxury25BedroomDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
