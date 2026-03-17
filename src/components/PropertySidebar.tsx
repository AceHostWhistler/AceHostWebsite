import React from "react";

/**
 * Ivory Homes-style vertical branding sidebar for property pages.
 * Displays "LR Luxury Rentals", "RE Real Estate", "Design Arch" along the left margin.
 */
const PropertySidebar = () => {
  const brandingItems = [
    { initials: "AH", text: "ace host" },
    { initials: "LR", text: "luxury rentals" },
    { initials: "PM", text: "property management" },
  ];

  return (
    <div className="hidden lg:block fixed left-4 xl:left-8 top-1/2 -translate-y-1/2 z-10 pointer-events-none">
      <div className="flex flex-col gap-20">
        {brandingItems.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="font-display text-4xl xl:text-5xl font-normal text-charcoal-muted tracking-luxury leading-none">
              {item.initials}
            </span>
            <span className="font-sans text-xs xl:text-sm font-light text-charcoal-muted tracking-luxury uppercase mt-1">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertySidebar;
