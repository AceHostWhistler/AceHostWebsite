import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/scandinavian-mountainside-retreat-pemberton-meadows-50-acres";
import type { ListingDetailsProps } from "../types";

export default function ScandinavianMountainsideRetreatPembertonMeadows50AcresDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
