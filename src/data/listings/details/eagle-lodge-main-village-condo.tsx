import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/eagle-lodge-main-village-condo";
import type { ListingDetailsProps } from "../types";

export default function EagleLodgeMainVillageCondoDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
