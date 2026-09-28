import { ListingWriteup } from "@/components/listingWriteup";
import luxeCozyWriteup from "@/data/listings/writeups/luxe-cozy-3-bed-whistler-village";
import type { ListingDetailsProps } from "../types";

export default function LuxeCozy3BedWhistlerVillageDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={luxeCozyWriteup} />;
}
