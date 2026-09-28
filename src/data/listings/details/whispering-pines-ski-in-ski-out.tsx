import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/whispering-pines-ski-in-ski-out";
import type { ListingDetailsProps } from "../types";

export default function WhisperingPinesSkiInSkiOutDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
