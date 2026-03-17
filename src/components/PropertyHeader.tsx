import React from 'react';
import { Users, Bed, Bath, Square, MapPin, MessageCircle, Share2, Mail } from 'lucide-react';
import Link from 'next/link';

interface PropertyHeaderProps {
  title: string;
  guests: number | string;
  bedrooms: number | string;
  beds?: number | string;
  bathrooms: number | string;
  priceRange: string;
  winterPrice?: string;
  holidayPrice?: string;
  airbnbLink?: string;
  contactLink?: string;
  contactText?: string;
  location?: string;
  status?: 'available' | 'rented';
  rentedUntil?: string;
  sqm?: number;
}

const PropertyHeader: React.FC<PropertyHeaderProps> = ({
  title,
  guests,
  bedrooms,
  beds,
  bathrooms,
  priceRange,
  winterPrice,
  holidayPrice,
  airbnbLink,
  contactLink,
  contactText = 'Contact Us',
  location,
  status = 'available',
  rentedUntil,
  sqm,
}) => {
  return (
    <div className="max-w-6xl mx-auto px-4 pt-8 pb-6">
      {/* Property Title - Ivory Homes style: uppercase, elegant, pronounced */}
      <h1 className="text-3xl md:text-4xl font-display font-extralight text-charcoal-dark tracking-luxury uppercase mb-4">
        {title}
      </h1>

      {/* Status & Location Row */}
      <div className="flex flex-wrap items-center gap-4 mb-6">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              status === 'available' ? 'bg-green-600' : 'bg-red-600'
            }`}
          />
          <span className="text-charcoal-muted text-sm font-normal">
            {status === 'rented' && rentedUntil
              ? `Rented until ${rentedUntil}`
              : 'Available'}
          </span>
        </div>
        {location && (
          <span className="text-charcoal-muted text-sm font-normal">
            {location}
          </span>
        )}
        {/* Action buttons - right aligned on desktop */}
        <div className="flex items-center gap-4 ml-auto">
          <button
            onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-2 text-charcoal-muted hover:text-charcoal text-sm font-normal transition-colors"
          >
            <MessageCircle size={16} />
            Review
          </button>
          <button
            onClick={() => navigator.clipboard?.writeText(window.location.href)}
            className="flex items-center gap-2 text-charcoal-muted hover:text-charcoal text-sm font-normal transition-colors"
          >
            <Share2 size={16} />
            Share
          </button>
          <Link
            href={contactLink || '/contact'}
            className="flex items-center gap-2 text-charcoal-muted hover:text-charcoal text-sm font-normal transition-colors"
          >
            <Mail size={16} />
            Contact
          </Link>
        </div>
      </div>

      {/* Key Metrics Bar - Ivory Homes style: horizontal with icons */}
      <div className="flex flex-wrap items-center gap-6 md:gap-8 py-4 border-y border-cream-300 mb-8">
        {sqm && (
          <div className="flex items-center gap-2">
            <Square size={18} className="text-charcoal-muted" />
            <span className="text-charcoal text-sm">{sqm} m²</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <Bed size={18} className="text-charcoal-muted" />
          <span className="text-charcoal text-sm">
            {bedrooms} {Number(bedrooms) === 1 ? 'room' : 'rooms'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Bath size={18} className="text-charcoal-muted" />
          <span className="text-charcoal text-sm">
            {bathrooms} {Number(bathrooms) === 1 ? 'bathroom' : 'bathrooms'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={18} className="text-charcoal-muted" />
          <span className="text-charcoal text-sm">
            {guests} {typeof guests === 'number' && guests === 1 ? 'person' : 'people'}
          </span>
        </div>
        <Link
          href="#location"
          className="flex items-center gap-2 text-charcoal text-sm underline hover:text-charcoal-light ml-auto"
        >
          <MapPin size={18} />
          View map
        </Link>
      </div>

      {/* Pricing */}
      <div className="flex flex-wrap gap-4 mb-6">
        <p className="text-charcoal font-medium">{priceRange}</p>
        {winterPrice && (
          <p className="text-charcoal-muted text-sm">{winterPrice}</p>
        )}
        {holidayPrice && (
          <p className="text-charcoal-muted text-sm">{holidayPrice}</p>
        )}
      </div>

      {/* Primary CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => document.getElementById('photos')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-charcoal text-cream px-6 py-3 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal-light transition-colors"
        >
          See more
        </button>
        <Link
          href="#details"
          className="border border-charcoal text-charcoal px-6 py-3 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal hover:text-cream transition-colors"
        >
          Details
        </Link>
        {airbnbLink ? (
          <a
            href={airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-charcoal text-cream px-6 py-3 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal-light transition-colors"
          >
            Book on Airbnb
          </a>
        ) : contactLink ? (
          <Link
            href={contactLink}
            className="bg-charcoal text-cream px-6 py-3 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal-light transition-colors"
          >
            {contactText}
          </Link>
        ) : (
          <Link
            href="/contact"
            className="bg-charcoal text-cream px-6 py-3 text-sm font-normal tracking-luxury uppercase hover:bg-charcoal-light transition-colors"
          >
            Book Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default PropertyHeader;
