import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/altitude-retreat-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function AltitudeRetreatKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
