import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/valhalla-unit-33-village";
import type { ListingDetailsProps } from "../types";

export default function ValhallaUnit33VillageDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
