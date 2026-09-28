import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/panoramic-estate-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function PanoramicEstateKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
