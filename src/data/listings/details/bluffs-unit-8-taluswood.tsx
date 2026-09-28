import { ListingWriteup } from "@/components/listingWriteup";
import bluffsUnit8Writeup from "@/data/listings/writeups/bluffs-unit-8-taluswood";
import type { ListingDetailsProps } from "../types";

export default function BluffsUnit8TaluswoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={bluffsUnit8Writeup} />;
}
