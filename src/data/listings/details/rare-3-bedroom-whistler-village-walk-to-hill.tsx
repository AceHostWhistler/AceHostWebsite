import { ListingWriteup } from "@/components/listingWriteup";
import rare3BedVillageWriteup from "@/data/listings/writeups/rare-3-bedroom-whistler-village-walk-to-hill";
import type { ListingDetailsProps } from "../types";

export default function Rare3BedroomWhistlerVillageWalkToHillDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <ListingWriteup photos={photos} content={rare3BedVillageWriteup} />
  );
}
