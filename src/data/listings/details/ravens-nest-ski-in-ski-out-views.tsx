import { ListingWriteup } from "@/components/listingWriteup";
import ravensNestViewsWriteup from "@/data/listings/writeups/ravens-nest-ski-in-ski-out-views";
import type { ListingDetailsProps } from "../types";

export default function RavensNestSkiInSkiOutViewsDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <ListingWriteup photos={photos} content={ravensNestViewsWriteup} />
  );
}
