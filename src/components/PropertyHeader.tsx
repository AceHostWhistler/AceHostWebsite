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
      <div className="flex justify-center mb-6">
        <div className="bg-black text-white rounded-full py-2 px-4 sm:px-6 flex flex-col sm:flex-row items-center space-y-1 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
          <span>{guests} guests</span>
          <span className="hidden sm:inline">•</span>
          <span>{bedrooms} bedrooms</span>
          {beds && (
            <>
              <span className="hidden sm:inline">•</span>
              <span>{beds} beds</span>
            </>
          )}
          <span className="hidden sm:inline">•</span>
          <span>{bathrooms} bathrooms</span>
          <span className="hidden sm:inline">•</span>
          <span>{priceRange}</span>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6 sm:mb-8">
        {title}
      </h1>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
        <button
          onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' }) }
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
        >
          More Photos
        </button>
        <Link
          href="#details"
          className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white border border-gray-700 rounded font-medium hover:bg-gray-800 text-sm sm:text-base"
        >
          Details
        </Link>
        {contactLink ? (
          <Link
            href={contactLink}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
          >
            Contact Us
          </Link>
        ) : airbnbLink ? (
          <a
            href={airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
          >
            Book on Airbnb
          </a>
        ) : (
          <Link
            href="/contact"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-black hover:bg-gray-900 text-white rounded font-medium text-sm sm:text-base"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default PropertyHeader; 