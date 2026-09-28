import { ListingWriteup } from "@/components/listingWriteup";
import writeup from "@/data/listings/writeups/golf-course-views-luxury-4-bed-whistler-village";
import type { ListingDetailsProps } from "../types";

export default function GolfCourseViewsLuxury4BedWhistlerVillageDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={writeup} />;
}
