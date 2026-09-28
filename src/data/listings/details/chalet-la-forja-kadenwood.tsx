import React from "react";
import { ListingWriteup } from "@/components/listingWriteup";
import chaletLaForjaWriteup from "@/data/listings/writeups/chalet-la-forja-kadenwood";
import type { ListingDetailsProps } from "../types";

export default function ChaletLaForjaKadenwoodDetails({
  photos,
}: ListingDetailsProps) {
  return <ListingWriteup photos={photos} content={chaletLaForjaWriteup} />;
}
