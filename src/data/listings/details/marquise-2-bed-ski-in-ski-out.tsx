import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/marquise-2-bed-ski-in-ski-out";
import type { ListingDetailsProps } from "../types";

export default function Marquise2BedSkiInSkiOutDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
