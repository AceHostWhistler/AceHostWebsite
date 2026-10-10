import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/woodrun-2-bed";
import type { ListingDetailsProps } from "../types";

export default function Woodrun2BedDetails({ photos }: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
