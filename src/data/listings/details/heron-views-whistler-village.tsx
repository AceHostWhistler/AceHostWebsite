import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/heron-views-whistler-village";
import type { ListingDetailsProps } from "../types";

export default function HeronViewsWhistlerVillageDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
