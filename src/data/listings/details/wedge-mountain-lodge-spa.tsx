import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/wedge-mountain-lodge-spa";
import type { ListingDetailsProps } from "../types";

export default function WedgeMountainLodgeSpaDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
