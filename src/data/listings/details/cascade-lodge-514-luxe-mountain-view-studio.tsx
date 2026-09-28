import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/cascade-lodge-514-luxe-mountain-view-studio";
import type { ListingDetailsProps } from "../types";

export default function CascadeLodge514LuxeMountainViewStudioDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
