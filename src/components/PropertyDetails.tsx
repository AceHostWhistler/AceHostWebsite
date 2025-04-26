import React from 'react';
import { Users, Bed, Bath } from 'lucide-react';

interface PropertyDetailsProps {
  guests: number | string;
  bedrooms: number;
  beds?: number;
  bathrooms: number;
  priceRange?: string;
}

const PropertyDetails: React.FC<PropertyDetailsProps> = ({
  guests,
  bedrooms,
  beds,
  bathrooms,
  priceRange
}) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-6">
      <div className="bg-gray-900 text-white px-3 py-1 text-sm font-medium rounded-md flex items-center">
        <Users size={16} className="mr-2" />
        <span>{guests} {typeof guests === 'number' && guests === 1 ? 'Guest' : 'Guests'}</span>
      </div>
      <div className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md flex items-center">
        <Bed size={16} className="mr-2" />
        <span>{bedrooms} {bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
      </div>
      {beds && (
        <div className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md flex items-center">
          <Bed size={16} className="mr-2" />
          <span>{beds} {beds === 1 ? 'Bed' : 'Beds'}</span>
        </div>
      )}
      <div className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md flex items-center">
        <Bath size={16} className="mr-2" />
        <span>{bathrooms} {bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
      </div>
      {priceRange && (
        <div className="bg-gray-200 text-gray-900 px-3 py-1 text-sm font-medium rounded-md">
          {priceRange}
        </div>
      )}
    </div>
  );
};

export default PropertyDetails; 