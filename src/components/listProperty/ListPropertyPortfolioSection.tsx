import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PropertyCoverImage from "@/components/PropertyCoverImage";
import type { PropertyFeature } from "@/data/properties/catalog";
import { getPropertyListingPath } from "@/data/properties/listingPath";
import {
  getPropertyAirbnbLink,
  getPropertyContactLink,
  shouldUseContactForBooking,
} from "@/data/propertyAirbnbLinks";

type PortfolioTab = "homes" | "condos";

interface ListPropertyPortfolioSectionProps {
  homes: PropertyFeature[];
  condos: PropertyFeature[];
}

function tabButtonClass(active: boolean): string {
  return `px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
    active
      ? "bg-black text-white shadow-md"
      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm ring-1 ring-gray-200"
  }`;
}

function PropertyShowcaseCard({
  property,
  imagePriority = false,
}: {
  property: PropertyFeature;
  imagePriority?: boolean;
}) {
  const href = getPropertyListingPath(property);
  const airbnbLink = getPropertyAirbnbLink(property.id, property.airbnbLink);
  const useContact = shouldUseContactForBooking(
    property.id,
    property.contactLink,
    property.airbnbLink
  );

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col h-full">
      <div className="relative h-56">
        <Link href={href} className="block relative h-full w-full">
          <PropertyCoverImage
            src={property.images[0]}
            alt={`${property.name} — Whistler property managed by AceHost`}
            priority={imagePriority}
            className="object-cover"
          />
        </Link>

        <div className="absolute bottom-4 right-4 z-10">
          {useContact ? (
            <Link
              href={getPropertyContactLink(property.id, property.contactLink)}
              className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Contact Us
            </Link>
          ) : airbnbLink ? (
            <a
              href={airbnbLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
            >
              Book Now
            </a>
          ) : (
            <Link
              href={href}
              className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              Book Now
            </Link>
          )}
        </div>
      </div>

      <div className="px-4 pt-3 pb-4 flex-grow flex flex-col">
        <div className="flex flex-wrap gap-2 mb-2.5">
          {property.guests != null && (
            <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md">
              {property.guests}{" "}
              {property.guests === 1 ? "Guest" : "Guests"}
            </span>
          )}
          {property.bedrooms != null && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.bedrooms}{" "}
              {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </span>
          )}
          {property.beds != null && (
            <span className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
              {property.beds} {property.beds === 1 ? "Bed" : "Beds"}
            </span>
          )}
        </div>

        <h3 className="text-xl font-medium text-gray-900 mb-1.5 leading-snug line-clamp-2">
          {property.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2.5">{property.location}</p>

        <Link
          href={href}
          className="mt-auto inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
        >
          View Property
          <ArrowRight size={18} className="ml-2" />
        </Link>
      </div>
    </div>
  );
}

export default function ListPropertyPortfolioSection({
  homes,
  condos,
}: ListPropertyPortfolioSectionProps) {
  const [tab, setTab] = useState<PortfolioTab>("homes");
  const activeList = tab === "homes" ? homes : condos;

  return (
    <section className="py-20 sm:py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 mb-4">
            Properties Managed by AceHost
          </h2>
          <p className="text-lg text-gray-600">
            A selection of premium Whistler homes and condos already entrusted to
            our local property management team.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            type="button"
            onClick={() => setTab("homes")}
            className={tabButtonClass(tab === "homes")}
          >
            Luxury homes
          </button>
          <button
            type="button"
            onClick={() => setTab("condos")}
            className={tabButtonClass(tab === "condos")}
          >
            Condos &amp; apartments
          </button>
        </div>

        <div
          key={tab}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {activeList.map((property, index) => (
            <PropertyShowcaseCard
              key={property.id}
              property={property}
              imagePriority={index < 3}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center rounded-lg bg-black px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-gray-800"
          >
            View full collection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
