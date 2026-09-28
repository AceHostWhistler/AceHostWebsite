import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/cozy-lakefront-whistler-condo-mountain-view";
import type { ListingDetailsProps } from "../types";

export default function CozyLakefrontWhistlerCondoMountainViewDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
