import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function Luxury3BedStunningViewsDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to this spacious 1,100 sq. ft. Marquise penthouse-style retreat
          with some of the best Fairmont and mountain views in Whistler. Enjoy 2
          bedrooms, 2 bathrooms, a cozy fireplace, private patio, full kitchen and
          A/C, with room for up to 6 guests. After skiing, relax in the
          glass-domed hot tub, outdoor pool, sauna or gym.
          <br />
          <br />
          The slopes, Upper Village, Lost Lake and Whistler Village are all close
          by, making this an exceptional year-round base on Blackcomb Mountain.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[7])}
                alt="Marquise Penthouse interior"
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
              Welcome to a spacious 1,100 sq. ft. retreat on Blackcomb Mountain,
              combining beautiful mountain views, resort-style amenities and
              convenient ski access with considerably more room than a typical
              Whistler condo.
              <br />
              <br />
              One of the first things you will notice is the outlook. The home
              looks toward the Fairmont Chateau Whistler and surrounding
              mountains, creating a classic Whistler backdrop from both the living
              spaces and private patio.
              <br />
              <br />
              The main living area features a cozy gas fireplace, comfortable
              seating and plenty of room to relax together after a day outdoors. A
              queen sleeper sofa provides additional sleeping space, while cable
              TV, Netflix and fast Wi-Fi make evenings at home easy.
              <br />
              <br />
              The fully equipped kitchen includes a stove, oven, microwave,
              refrigerator, coffee maker and cooking essentials. The dining area
              offers generous seating for family meals, takeout nights or
              entertaining.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2 bedrooms · 3 beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2 baths</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[12])}
                alt="Marquise Penthouse bedroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-6">Bedroom layout</h2>
            <p className="text-gray-800 max-w-4xl">
              <strong>Primary Bedroom:</strong>
              <br />
              King bed, private patio access with views, vanity area and direct
              access to a full bathroom.
              <br />
              <br />
              <strong>Bedroom 2:</strong>
              <br />
              Queen bed with private ensuite bathroom and bathtub.
              <br />
              <br />
              <strong>Living Room:</strong>
              <br />
              Queen pullout sofa for additional guests.
              <br />
              <br />
              The home accommodates up to 6 guests across 2 bedrooms and 3 beds,
              with two full bathrooms.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>SKI ACCESS &amp; LOCATION:</strong>
            <br />
            The Marquise is positioned on Blackcomb Mountain with convenient
            access to the slopes, making it an excellent base for ski-focused
            trips.
            <br />
            <br />
            Guests can access Blackcomb without needing to drive, while Upper
            Village and the Blackcomb Gondola area are only a short distance
            away.
            <br />
            <br />
            When the ski day ends, return to the quieter Benchlands setting,
            relax by the fireplace or head downstairs to the hot tub, pool and
            sauna.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>RESORT AMENITIES:</strong>
            <br />
            One of the biggest advantages of staying at The Marquise is the
            collection of resort-style amenities included with your stay.
            <br />
            <br />
            Guests have access to:
            <br />
            • Glass-domed hot tub
            <br />
            • Heated outdoor pool
            <br />
            • Sauna
            <br />
            • Fitness centre
            <br />• Secure ski, snowboard and bike storage
            <br />
            <br />
            The glass-domed hot tub is particularly enjoyable during winter,
            offering a warm place to relax after skiing while still feeling
            connected to the mountain environment outside.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION:</strong>
            <br />
            The home enjoys a quieter Blackcomb setting while keeping the resort
            close.
            <br />
            <br />
            Upper Village, the Blackcomb Gondola, Fairmont Chateau Whistler and
            surrounding restaurants are nearby, while the main Whistler Village
            can be reached by walking or using the complimentary local shuttle.
            <br />
            <br />
            Lost Lake, walking trails, biking routes and parks are also close by,
            making this a strong location throughout summer as well as winter.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>PARKING:</strong>
            <br />
            Covered parking is available in the building for approximately $26
            CAD per night, payable through the building.
            <br />
            <br />
            The underground parkade has a height clearance of approximately
            6&apos;6&quot;.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>SUMMER A/C:</strong>
            <br />A newer air-conditioning unit is located in the main living
            area and provides cooling throughout the condo during warmer summer
            days.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire condo, including both
            bedrooms, bathrooms, living spaces, kitchen and private patio.
            <br />
            <br />
            You will also have full access to The Marquise&apos;s shared outdoor
            pool, glass-domed hot tub, sauna, fitness centre and secure gear
            storage.
            <br />
            <br />
            Self check-in is available via smart lock, making arrival simple and
            flexible.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00011211
            <br />
            Provincial registration number: PM910753876
          </p>
        </div>
      </div>
    </>
  );
}
