import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/cascade-lodge-615-premium-view";
import type { ListingDetailsProps } from "../types";

export default function CascadeLodge615PremiumViewDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
