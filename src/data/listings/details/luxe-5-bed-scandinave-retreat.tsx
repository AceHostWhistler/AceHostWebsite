import React from "react";
import Image from "next/image";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import { airbnbButtonLg } from "@/lib/airbnbButtonStyles";
import { getPropertyAirbnbLink } from "@/data/propertyAirbnbLinks";
import type { ListingDetailsProps } from "../types";

export default function Luxe5BedScandinaveRetreatDetails({
  photos,
}: ListingDetailsProps) {
  const airbnbLink = getPropertyAirbnbLink("luxe-5-bed-scandinave-retreat");

  return (
    <>
      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
        <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
          An ideal family ski home just 400m (8 min walk) to Whistler Creekside
          Gondola. Stunning, unobstructed views of the Tantalus Range, Alpha &
          Nita Lakes. Perfect for 1 large family, 3 couples, or 2 families.
          <br />
          <br />
          This 1,450 sqft, 3-bedroom, 5-bed, architecturally designed home
          features; vaulted ceilings, a steam shower, kids&apos; triple bunk
          room, heated floors, a cozy living area with fireplace, and a kitchen
          for family dinners.
          <br />
          <br />
          Enjoy 2 free parking spots, A/C, & ski storage!
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The space</h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            This 1,450 sqft townhouse offers privacy and comfort across 6 unique
            half-levels. Renovated professionally, it combines luxury with
            family-friendly design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-50 rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Location:</h3>
            <p className="text-gray-700 mb-6">
              One of the biggest advantages of this home is how easily you can
              enjoy Creekside without needing to stay right in the centre of it.
              The Creekside Gondola is approximately 400 metres away, making ski
              days simple, while Alpha Lake and Nita Lake are also close by for
              walking, biking and summer days by the water. Restaurants,
              cafés, groceries and the rest of Creekside Village are all within
              easy reach.
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
              <li>Entry: Boot/glove dryers & ample space for gear.</li>
              <li>
                Kitchen/Dining: Open-concept, seats 10, stocked with essentials
                (salt, oils, flour, sugar, etc.).
              </li>
              <li>
                Living Area: Large custom couch, gas fireplace, HD TV, and
                private deck.
              </li>
            </ul>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 md:p-10">
            <h3 className="text-2xl font-bold mb-6">Bedroom layout:</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
              <li>
                Bedroom 1 - Master Suite: King bed, antique desk, cozy reading
                chair, ensuite with steam shower & in-suite laundry. Central Air
                conditioning available in this bedroom.
              </li>
              <li>
                Bedroom 2 - Kids&apos; Room: Unique triple bunk (queen + 2
                singles), daybed with trundle. Central Air conditioning available
                in this bedroom.
              </li>
              <li>
                Bedroom 3 - Loft Suite Room: Queen bed, ensuite, HD TV, and
                lounge couch. Central Air conditioning available in this
                bedroom.
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-6 mt-8">Where you&apos;ll sleep</h3>
            <ul className="list-disc pl-5 space-y-2 mb-6 text-gray-700">
              <li>
                <span className="font-semibold">Bedroom 1</span>
                <br />1 king bed
              </li>
              <li>
                <span className="font-semibold">Bedroom 2</span>
                <br />1 queen bed
                <br />1 bunk bed
              </li>
              <li>
                <span className="font-semibold">Bedroom 3</span>
                <br />1 queen bed
              </li>
            </ul>
            <h3 className="text-2xl font-bold mb-6 mt-8">Other Features:</h3>
            <p className="text-gray-700 mb-6">
              Heated floors, Central Air Conditioning A/C throughout the home and
              bedrooms, board games, kids&apos; books/crafts, Amazon Prime,
              Disney+, Netflix, 2 parking spots, and secure ski/bike storage.
            </p>
            <p className="text-gray-700 mb-6">
              Ski bike storage: Private storage area for skis and bikes. Very
              rare to have your own private shed with plenty of room for multiple
              bikes/skis!
              <br />
              Room for 2 bikes in storage + room to lock up more outside.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg bg-gray-200">
              <Image
                src={getGalleryPhotoSrc(photos[2])}
                alt="Luxe 5-BED Scandinave Retreat - Premium Amenities"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
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
                    d="M13 4.06871V2H11V4.06871C7.38128 4.56343 4.56343 7.38128 4.06871 11H2V13H4.06871C4.56343 16.6187 7.38128 19.4366 11 19.9313V22H13V19.9313C16.6187 19.4366 19.4366 16.6187 19.9313 13H22V11H19.9313C19.4366 7.38128 16.6187 4.56343 13 4.06871ZM12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18Z"
                    fill="white"
                  />
                  <path
                    d="M12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Neighbourhood highlights</h2>
            </div>
            <p className="text-gray-700 mb-6">
              Creekside Village is a quiet, family-friendly alternative to
              Whistler Village, just minutes away. It includes a grocery store,
              liquor store, ski rentals, Whistler Kids programs, Dusty&apos;s Pub,
              and Starbucks.
            </p>
            <p className="text-gray-700 mb-6">
              The Creekside Gondola is only an 8-minute walk (400m) away.
            </p>
            <p className="text-gray-700">
              Free day parking is available nearby if you prefer to drive. Enjoy
              mountain views and lakeside access with Alpha and Nita Lakes close
              by for year-round activities.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 rounded-xl p-10">
        <h2 className="text-2xl font-bold mb-8 text-center">Guest access</h2>
        <p className="text-gray-700">
          Guests have access to the entire townhouse, including a private deck, 2
          parking spots, secure outdoor storage for skis/bikes, and high-speed
          WiFi with streaming services. A foldable travel cot for infants is
          available upon request.
        </p>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">
          Other things to note
        </h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
          No pets, no smoking.
          <br />
          <br />
          The road to Creekside Village/Gondola is downhill. After a long ski
          day, it may be a challenge for younger kids or tired adults to walk.
        </p>
        <h3 className="text-2xl font-bold mb-6">Registration details</h3>
        <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
          Municipal registration number: 00013716
          <br />
          Provincial registration number: PM853760155
        </p>
        {airbnbLink && (
          <a
            href={airbnbLink}
            target="_blank"
            rel="noopener noreferrer"
            className={airbnbButtonLg}
          >
            Book on Airbnb
          </a>
        )}
      </div>
    </>
  );
}
