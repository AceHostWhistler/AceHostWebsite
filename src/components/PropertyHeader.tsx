import React from 'react';
import { Users, Bed, Bath } from 'lucide-react';
import Link from 'next/link';

interface PropertyHeaderProps {
  title: string;
  guests: number | string;
  bedrooms: number | string;
  beds?: number | string;
  bathrooms: number | string;
  priceRange: string;
  airbnbLink?: string;
  contactLink?: string;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  title,
  guests,
  bedrooms,
  beds,
  bathrooms,
  priceRange,
  airbnbLink,
  contactLink,
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-8">
        {title}
      </h1>

      {/* Property Stats */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-gray-900 text-white px-4 py-2 rounded-md flex items-center gap-2">
          <Users size={20} />
          <span>{guests} Guests</span>
        </div>
        <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md flex items-center gap-2">
          <Bed size={20} />
          <span>{bedrooms} Bedrooms</span>
        </div>
        {beds && (
          <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md flex items-center gap-2">
            <Bed size={20} />
            <span>{beds} Beds</span>
          </div>
        )}
        <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md flex items-center gap-2">
          <Bath size={20} />
          <span>{bathrooms} Bathrooms</span>
        </div>
        <div className="bg-gray-200 text-gray-900 px-4 py-2 rounded-md">
          <span>{priceRange}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          More Photos
        </button>
        <Link
          href="#details"
          className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
        >
          Details
        </Link>
        {airbnbLink ? (
          <a
            href={airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book on Airbnb
          </a>
        ) : contactLink ? (
          <Link
            href={contactLink}
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Contact Us
          </Link>
        ) : (
          <Link
            href="/contact"
            className="bg-black text-white px-8 py-3 rounded-md hover:bg-gray-800 transition-colors"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default PropertyHeader; 