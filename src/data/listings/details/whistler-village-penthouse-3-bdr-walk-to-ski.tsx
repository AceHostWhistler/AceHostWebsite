import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/whistler-village-penthouse-3-bdr-walk-to-ski";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillagePenthouse3BdrWalkToSkiDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
