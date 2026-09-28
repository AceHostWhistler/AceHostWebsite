import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/squamish-retreat-with-the-best-view";
import type { ListingDetailsProps } from "../types";

export default function SquamishRetreatWithTheBestViewDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
