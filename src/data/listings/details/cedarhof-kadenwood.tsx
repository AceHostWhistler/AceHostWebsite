import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/cedarhof-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function CedarhofKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
