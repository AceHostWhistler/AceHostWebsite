import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { PropertyFeature } from "@/data/properties/catalog";
import { getPropertyListingPath } from "@/data/properties/listingPath";

type PortfolioTab = "homes" | "condos";

interface ListPropertyPortfolioSectionProps {
  homes: PropertyFeature[];
  condos: PropertyFeature[];
}

function PortfolioCard({ property }: { property: PropertyFeature }) {
  const href = getPropertyListingPath(property);

  return (
    <Link
      href={href}
      className="group relative block shrink-0 w-[280px] sm:w-[300px] snap-start overflow-hidden rounded-2xl bg-stone-800 ring-1 ring-white/10 transition-transform hover:-translate-y-1 hover:ring-white/25"
    >
      <div className="relative aspect-[4/5]">
        <Image
          src={property.images[0]}
          alt={`${property.name} — managed by AceHost`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="300px"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {property.guests != null && (
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {property.guests} guests
              </span>
            )}
            {property.bedrooms != null && (
              <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
                {property.bedrooms} bed
              </span>
            )}
          </div>
          <h3 className="text-base font-semibold leading-snug text-white line-clamp-2 group-hover:text-amber-100 transition-colors">
            {property.name}
          </h3>
          <p className="mt-1 text-xs text-stone-300">{property.location}</p>
          <span className="mt-3 inline-flex items-center text-xs font-medium text-white/90 opacity-0 group-hover:opacity-100 transition-opacity">
            View listing
            <ArrowUpRight className="ml-1 h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ListPropertyPortfolioSection({
  homes,
  condos,
}: ListPropertyPortfolioSectionProps) {
  const [tab, setTab] = useState<PortfolioTab>("homes");
  const activeList = tab === "homes" ? homes : condos;
  const totalCount = homes.length + condos.length;

  return (
    <section className="relative bg-stone-950 text-white py-20 sm:py-28 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(180,83,9,0.12),transparent_60%)]"
        aria-hidden
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
          <div className="max-w-xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-stone-500 mb-3">
              The portfolio
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Properties managed by AceHost
            </h2>
            <p className="mt-4 text-stone-400 leading-relaxed">
              Premium Whistler homes and condos already earning with our local
              team — from Kadenwood chalets to Village penthouses.
            </p>
          </div>

          <div className="flex rounded-full bg-white/5 p-1 ring-1 ring-white/10 self-start lg:self-auto">
            <button
              type="button"
              onClick={() => setTab("homes")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "homes"
                  ? "bg-white text-stone-950"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              Luxury homes
            </button>
            <button
              type="button"
              onClick={() => setTab("condos")}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${
                tab === "condos"
                  ? "bg-white text-stone-950"
                  : "text-stone-400 hover:text-white"
              }`}
            >
              Condos &amp; apartments
            </button>
          </div>
        </div>

        <div
          key={tab}
          className="flex gap-5 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {activeList.map((property) => (
            <PortfolioCard key={property.id} property={property} />
          ))}
        </div>

        <p className="mt-4 text-center text-xs text-stone-500 lg:hidden">
          ← Swipe to browse →
        </p>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-6 pt-10 border-t border-white/10">
          <p className="text-stone-400 text-sm text-center sm:text-left">
            Showing a curated selection of {totalCount} featured properties.
          </p>
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100"
          >
            View full collection
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
