import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/timbervue-luxury-ski-in-ski-out-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function TimberVueLuxurySkiInSkiOutKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
