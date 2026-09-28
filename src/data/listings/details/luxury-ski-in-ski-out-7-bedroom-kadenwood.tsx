import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/luxury-ski-in-ski-out-7-bedroom-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function LuxurySkiInSkiOut7BedroomKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
