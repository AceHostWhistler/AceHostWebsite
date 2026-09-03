import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function NorthlandsWalkToVillageSlopesLuxury4BedDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to this unique 3-level townhome-style retreat in Whistler
          Village, offering more space and privacy than a typical condo. With 2
          bedrooms, 4 beds and 3 full bathrooms, it is ideal for families,
          couples and small groups. Enjoy a shared hot tub steps from the front
          door, a private exterior entrance and free underground parking. Fresh
          St Market is directly across the street, restaurants and shops
          surround you, and the gondolas and ski lifts are an easy walk away, so
          a car is rarely needed.
        </p>

        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={getGalleryPhotoSrc(photos[1])}
                  alt="Symphony interior"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="flex items-center mb-6">
                <div className="bg-black text-white p-4 rounded-full mr-4">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V20H20V18C20 15.34 14.67 14 12 14Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold">The space</h2>
              </div>
              <p className="text-gray-800 mb-6">
                This unique three-level home gives you the convenience of a
                central Whistler Village condo with much more separation and
                privacy than a typical single-level unit. A private exterior
                entrance adds to the townhome feel, while the layout works
                especially well for families, couples and small groups travelling
                together.
                <br />
                <br />
                The main living level features a comfortable lounge and dining
                area where the group can gather after a day on the mountain,
                along with a fully equipped kitchen for breakfast, dinner or an
                easy night at home.
                <br />
                <br />
                One of the biggest advantages of the layout is having three full
                bathrooms for only two bedrooms, a rare convenience in a Whistler
                Village property and especially useful when everyone is getting
                ready for the mountain or an evening out.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <FaBed className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">2 bedrooms · 4 beds</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 baths</span>
                </div>
              </div>
              <p className="text-gray-800">
                <strong>LOCATION:</strong>
                <br />
                The Symphony complex is exceptionally well positioned in
                Whistler Village North, with Marketplace and Fresh St. Market
                directly across the street. Groceries, restaurants, cafés, shops
                and everyday essentials are all within easy walking distance.
                <br />
                <br />
                The pedestrian Village Stroll begins nearby and leads through
                the heart of Whistler toward restaurants, shopping, après-ski
                and the mountain. The Whistler and Blackcomb gondolas and ski
                lifts are approximately a 12–15 minute walk away, making it easy
                to enjoy the resort without relying on a vehicle.
                <br />
                <br />
                The Whistler Racquet &amp; Pickleball Club is immediately next
                door for guests looking for additional recreation, while the
                surrounding Village paths make it easy to explore Whistler on
                foot throughout the year.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 max-w-4xl">
                Primary Bedroom:
                <br />
                King bed with private ensuite bathroom.
                <br />
                <br />
                Bedroom 2:
                <br />
                Two single Murphy beds with private ensuite bathroom, creating a
                flexible setup for children, friends or individual sleepers.
                <br />
                <br />
                Living Room:
                <br />
                Pullout sofa bed for additional sleeping space, with access to
                the home&apos;s third full bathroom.
                <br />
                <br />
                The home accommodates up to 6 guests across 2 bedrooms and 4
                beds.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[4])}
                  alt="Symphony bedroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-800 mb-6">
                <strong>SHARED HOT TUB:</strong>
                <br />
                Guests have access to the Symphony complex hot tub located just
                steps from the home&apos;s front entrance. It is an easy place to
                unwind after skiing, hiking or biking before heading back inside
                for the evening.
                <br />
                <br />
                <strong>PARKING:</strong>
                <br />
                One complimentary underground parking space is included with your
                stay. The parkade has approximately 6&apos;8&quot; of clearance.
                <br />
                <br />
                Additional paid parking is available nearby if your group is
                travelling with more than one vehicle. Given the central
                location and walkability, many guests find they rarely need their
                car once they have arrived.
                <br />
                <br />
                <strong>SUMMER A/C:</strong>
                <br />
                A powerful air-conditioning system is located in the main living
                area, providing additional comfort throughout the home during
                Whistler&apos;s warmer summer periods.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[8])}
                  alt="Symphony living area"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Additional features</h2>
          <ul className="text-gray-800 list-disc pl-6 space-y-1 max-w-4xl">
            <li>Primary bedroom with king bed and ensuite bathroom</li>
            <li>Private exterior entrance</li>
            <li>Three-level townhome-style layout</li>
            <li>3 full bathrooms</li>
            <li>Fully equipped kitchen</li>
            <li>Shared hot tub steps from the home</li>
            <li>Complimentary underground parking</li>
            <li>Fresh St. Market directly across the street</li>
            <li>Whistler Racquet &amp; Pickleball Club next door</li>
            <li>Easy walking access to restaurants, shops and ski lifts</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have exclusive access to the entire three-level home during
            their stay, including the private exterior entrance and all three
            levels of living space. You will also have access to the Symphony
            complex hot tub, located just steps from the front door, as well as
            one complimentary designated underground parking space. The home has
            its own private entrance rather than a shared interior hotel-style
            hallway, giving it more of a true townhome feel while still offering
            the convenience of a central Whistler Village location. The building
            and home are accessed using the entry instructions provided before
            check-in, allowing for a simple and flexible arrival.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00015534
            <br />
            Provincial registration number: PM817047827
          </p>
        </div>
      </div>
    </>
  );
}
