import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/dream-log-chalet-5-bedroom-4-bath-creekside";
import type { ListingDetailsProps } from "../types";

export default function DreamLogChalet5Bedroom4BathCreeksideDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
