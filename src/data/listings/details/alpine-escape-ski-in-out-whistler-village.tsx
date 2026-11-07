import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/alpine-escape-ski-in-out-whistler-village";
import type { ListingDetailsProps } from "../types";

export default function AlpineEscapeSkiInOutWhistlerVillageDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
