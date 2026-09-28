import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/slopeside-villa-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function SlopesideVillaKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
