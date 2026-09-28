import { ListingWriteup } from "@/components/listingWriteup";
import northlandsWriteup from "@/data/listings/writeups/northlands-walk-to-village-slopes-luxury-4-bed";
import type { ListingDetailsProps } from "../types";

export default function NorthlandsWalkToVillageSlopesLuxury4BedDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={northlandsWriteup} />;
}
