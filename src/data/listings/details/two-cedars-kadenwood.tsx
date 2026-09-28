import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/two-cedars-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function TwoCedarsKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
