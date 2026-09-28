import { ListingWriteup } from "@/components/listingWriteup";
import theRavenNestWriteup from "@/data/listings/writeups/the-raven-nest";
import type { ListingDetailsProps } from "../types";

export default function TheRavenNestDetails({ photos }: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={theRavenNestWriteup} />;
}
