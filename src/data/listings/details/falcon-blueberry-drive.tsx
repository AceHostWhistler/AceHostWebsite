import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/falcon-blueberry-drive";
import type { ListingDetailsProps } from "../types";

export default function FalconBlueberryDriveDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
