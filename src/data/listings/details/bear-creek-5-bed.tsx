import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/bear-creek-5-bed";
import type { ListingDetailsProps } from "../types";

export default function BearCreek5BedDetails({ photos }: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
