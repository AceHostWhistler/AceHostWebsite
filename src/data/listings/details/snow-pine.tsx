import { ListingWriteup } from "@/components/listingWriteup";
import snowPineWriteup from "@/data/listings/writeups/snow-pine";
import type { ListingDetailsProps } from "../types";

export default function SnowPineDetails({ photos }: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={snowPineWriteup} />;
}
