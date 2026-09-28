import { ListingWriteup } from "@/components/listingWriteup";
import bluffsUnit4Writeup from "@/data/listings/writeups/bluffs-unit-4-taluswood";
import type { ListingDetailsProps } from "../types";

export default function BluffsUnit4TaluswoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={bluffsUnit4Writeup} />;
}
