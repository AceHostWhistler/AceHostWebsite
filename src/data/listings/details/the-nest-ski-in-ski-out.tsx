import { ListingWriteup } from "@/components/listingWriteup";
import theNestWriteup from "@/data/listings/writeups/the-nest-ski-in-ski-out";
import type { ListingDetailsProps } from "../types";

export default function TheNestSkiInSkiOutDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={theNestWriteup} />;
}
