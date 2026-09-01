import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function Rare3BedroomWhistlerVillageWalkToHillDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          A rare Whistler Village chalet with the space and privacy of a home,
          just steps from restaurants, shops and the mountain. Spread across two
          levels, this 3-bedroom retreat features oversized wraparound
          balconies, mountain views, a private hot tub and cozy fireplace. One
          of its standout features is two guaranteed designated underground
          parking spaces, exceptionally rare for a central Village property, so
          groups arriving in multiple vehicles can park with ease and walk
          almost everywhere.
        </p>

        {/* The Space Section */}
        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={getGalleryPhotoSrc(photos[0])}
                  alt="3-BDRM | Whistler Village | Walk to Hill | Hot Tub"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover"
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
                Step into a true Whistler classic reimagined for modern comfort.
                Spread across two spacious levels, the home combines the privacy
                and space of a chalet with one of the most convenient locations
                in Whistler Village.
                <br />
                <br />
                The main living level features an open-concept living and dining
                area, cozy indoor fireplace and large windows that bring in
                plenty of natural light. Comfortable furnishings create an easy
                gathering space for families and groups after a day on the
                mountain.
                <br />
                <br />
                Two oversized wraparound balconies provide exceptional outdoor
                living space with views over Whistler Village and the
                surrounding mountains. The highlight is your own private hot
                tub (with the best views), the only private hot tub in the
                complex, creating the perfect place to unwind after skiing,
                biking or exploring Whistler.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <FaBed className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 bedrooms</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 baths</span>
                </div>
              </div>
              <p className="text-gray-800">
                <strong>LOCATION:</strong>
                <br />
                One of the biggest advantages of this home is its location
                directly in Whistler Village. Restaurants, cafés, shops and
                groceries are all within easy walking distance, while the ski
                lifts are approximately 7–10 minutes away on foot. Once you
                arrive, most guests rarely need to use a vehicle during their
                stay.
                <br />
                <br />
                <strong>PARKING:</strong>
                <br />
                An especially rare feature for a 3-bedroom home in central
                Whistler Village is that two designated underground parking
                spaces are guaranteed with every stay. Many Village properties
                offer only one stall, visitor parking subject to availability
                or paid public parking, making two guaranteed stalls
                particularly valuable for families and groups arriving in
                multiple vehicles.
                <br />
                <br />
                Both vehicles can remain securely parked underground while you
                walk to the lifts, restaurants, shops and other Village
                amenities. The underground parkade has approximately 7 feet of
                clearance.
                <br />
                <br />
                Private locked ski and bike storage is also available for guest
                use.
              </p>
            </div>
          </div>

          {/* Additional photos in description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="relative aspect-[4/3]">
              <Image
                src={getGalleryPhotoSrc(photos[8])}
                alt="Living room"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={getGalleryPhotoSrc(photos[16])}
                alt="Exterior"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="relative aspect-[4/3]">
              <Image
                src={getGalleryPhotoSrc(photos[24])}
                alt="Bedroom 1"
                width={1920}
                height={1080}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Bedroom Layout Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 max-w-4xl">
                Primary Bedroom:
                <br />
                Queen bed with private ensuite bathroom.
                <br />
                <br />
                Bedroom 2:
                <br />
                King bed.
                <br />
                <br />
                Bedroom 3:
                <br />
                Double bed.
                <br />
                <br />
                Living Room:
                <br />
                Queen pullout sofa.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[33])}
                  alt="Bedroom 3"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-800 mb-6">
                <strong>SUMMER A/C:</strong>
                <br />
                Portable air-conditioning units are available from May 15
                through October 15, with one located in the main living area and
                one in the primary bedroom. Whistler evenings are generally
                cooler, and the units provide additional comfort during warmer
                summer periods.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[37])}
                  alt="Bedroom 2"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Guest Access Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Staircase: Please note there is one flight of stairs to enter the
            unit. It is manageable and convenient for nearly all guests,
            including most elderly guests, but we like to be upfront so there
            are no surprises for anyone with mobility limitations or personal
            preferences. The benefit here is that the home sits slightly
            elevated, allowing for beautiful scenic views over Whistler Village
            and the surrounding mountains.
            <br />
            <br />
            The entire home and hot tub is private to your group/booking.
          </p>
        </div>

        {/* Location Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">
            Neighbourhood highlights
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <p className="text-gray-800">
                Granite Court is ideally located in the heart of Whistler
                Village, offering the convenience of a central location with a
                quieter residential feel. Restaurants, cafés, shops and Village
                amenities are all within easy walking distance, while the
                Whistler and Blackcomb gondolas are approximately a 7–10 minute
                walk from the home.
                <br />
                <br />
                Fresh St. Market, Whistler’s largest and best full-service
                grocery store, is directly across the street, making it
                incredibly convenient to stock up on groceries, drinks, snacks
                and anything else needed during your stay without having to
                drive.
                <br />
                <br />
                The location makes it especially easy to enjoy Whistler without
                relying on a vehicle. Guests can walk to breakfast, après-ski,
                dinner, shopping and the lifts, then return to a more peaceful
                setting away from the busiest parts of the Village.
                <br />
                <br />
                The Valley Trail and nearby pedestrian paths also make it easy
                to explore Whistler on foot or by bike, with quick connections
                toward Lost Lake, the golf course and surrounding
                neighbourhoods. For guests arriving by car, the home’s two
                guaranteed underground parking spaces are an especially
                valuable bonus in such a central Village location.
              </p>
            </div>
            <div className="md:col-span-1">
              <div className="relative aspect-[3/4] h-full">
                <Image
                  src={getGalleryPhotoSrc(photos[20])}
                  alt="Whistler, British Columbia, Canada"
                  width={1920}
                  height={1080}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Registration Details Section */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00015503
            <br />
            Provincial registration number: PM526794239
          </p>
        </div>
      </div>

      {/* Photos Modal - Show all photos */}
    </>
  );
}
