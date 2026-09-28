import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/luxury-3-bed-stunning-views";
import type { ListingDetailsProps } from "../types";

export default function Luxury3BedStunningViewsDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
