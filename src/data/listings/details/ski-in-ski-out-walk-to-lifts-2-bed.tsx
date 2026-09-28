import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/ski-in-ski-out-walk-to-lifts-2-bed";
import type { ListingDetailsProps } from "../types";

export default function SkiInSkiOutWalkToLifts2BedDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
