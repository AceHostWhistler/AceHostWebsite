import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/luxe-5-bed-scandinave-retreat";
import type { ListingDetailsProps } from "../types";

export default function Luxe5BedScandinaveRetreatDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
