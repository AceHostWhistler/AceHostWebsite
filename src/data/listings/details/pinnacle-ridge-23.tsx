import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/pinnacle-ridge-23";
import type { ListingDetailsProps } from "../types";

export default function PinnacleRidge23Details({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
