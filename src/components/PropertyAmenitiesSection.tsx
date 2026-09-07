import React from "react";

interface PropertyAmenitiesSectionProps {
  amenities: string[];
}

const PropertyAmenitiesSection: React.FC<PropertyAmenitiesSectionProps> = ({
  amenities,
}) => {
  if (amenities.length === 0) return null;

  return (
    <section className="border-t border-stone-300/50 bg-[#f6f3ed]">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <h2 className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
          Amenities
        </h2>
        <ul className="mt-2 grid gap-x-6 gap-y-1.5 sm:grid-cols-2 lg:grid-cols-3">
          {amenities.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-[12px] leading-snug text-stone-800"
            >
              <span
                className="mt-[0.35rem] h-1 w-1 shrink-0 rounded-full bg-stone-800"
                aria-hidden
              />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PropertyAmenitiesSection;
