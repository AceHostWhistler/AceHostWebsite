import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/luxury-6-bedroom-whistler-village-blueberry";
import type { ListingDetailsProps } from "../types";

export default function Luxury6BedroomWhistlerVillageBlueberryDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
