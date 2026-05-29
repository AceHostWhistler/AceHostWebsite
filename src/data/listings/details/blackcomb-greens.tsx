import React from "react";
import Image from "next/image";
import Link from "next/link";
import PropertyDetails from "@/components/PropertyDetails";
import type { ListingDetailsProps } from "../types";

export default function BlackcombGreensDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      {/* Property Details */}
                <div id="details" className="max-w-7xl mx-auto px-4 mb-16">
                  <PropertyDetails
                    guests={8}
                    bedrooms={3}
                    beds={4}
                    bathrooms={2.5}
                    priceRange="$500-$1,200 per night"
                  />
                </div>
    </>
  );
}
