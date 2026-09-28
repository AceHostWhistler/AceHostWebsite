import { ListingWriteup } from "@/components/listingWriteup";
import blackcombGreensWriteup from "@/data/listings/writeups/blackcomb-greens";
import type { ListingDetailsProps } from "../types";

export default function BlackcombGreensDetails({ photos }: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={blackcombGreensWriteup} />;
}
