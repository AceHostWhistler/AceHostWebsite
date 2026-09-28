import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/whistler-village-penthouse";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillagePenthouseDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
