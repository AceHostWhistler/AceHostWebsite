import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/timber-haven-luxury-ski-in-ski-out-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function TimberHavenLuxurySkiInSkiOutKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
