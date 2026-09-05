import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function FalconBlueberryDriveDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-8 max-w-4xl">
          Welcome to Falcon, a spacious 7-bedroom Whistler chalet in prestigious Blueberry Hill, minutes from Whistler Village and the slopes. Designed for families and groups of up to 15, the home features a large indoor dining table seating 14, mountain views, a wood-burning fireplace, central A/C, outdoor sauna, private hot tub and large deck.
        </p>
        <p className="text-gray-800 mb-16 max-w-4xl">
          Walk the Valley Trail to the Village in about 25 minutes, drive in 3–4 minutes, or take the Route 6 bus from a stop steps away.
        </p>

        {/* The Space Section */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[1])}
                alt="Falcon Blueberry Drive Interior"
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
              Falcon is a spacious Whistler chalet designed for families and groups to enjoy time together while still having plenty of room to spread out across three levels. Enter through the unique hand-carved West Coast front door into a heated slate entrance. The main living area is warm and inviting, with high ceilings, large windows, mountain views and a beautiful wood-burning fireplace at the centre of the room. The home features seven generous bedrooms, multiple gathering spaces and central air conditioning throughout for comfortable summer stays. At the heart of the main level, the oversized dining table seats 14 guests, making Falcon especially well suited to group meals, celebrations and private-chef dinners.
            </p>
            <p className="text-gray-800 mb-6">
              Outside, the large deck offers plenty of room to enjoy Whistler year-round, with a private hot tub, outdoor wood-barrel sauna, dining area and barbecue. After a day skiing, biking or exploring the mountains, relax in the sauna, soak in the hot tub or gather around the fireplace inside.
            </p>
            <p className="text-gray-800 mb-6">
              Falcon is particularly well suited for both small or larger groups with bedrooms spread across the upper, main and lower levels.
            </p>
            <p className="text-gray-800 mb-6">
              ***NEW Air Conditioning***: Recently installed central Air Conditioning throughout the entire home, for a more comfortable summer vacation.
            </p>
            <p className="text-gray-800">
              ***New Outdoor Wood Barrel Sauna &amp; Hot tub for ultimate relaxation!*** Easy to use, and a great way to relax after a long day.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Location &amp; Getting Around:</h2>
          <p className="text-gray-800 max-w-4xl">
            Falcon is located in peaceful Blueberry Hill, just outside Whistler Village with quick access to both the Village and the mountains. The Valley Trail and Whistler Golf Course are approximately a one-minute walk from the home, and the scenic trail into Whistler Village takes about 25 minutes. For quicker access, the Village and gondolas are approximately a 3–4 minute drive away, and the Route 6 public bus stops just steps from the property.
          </p>
        </div>

        {/* Bedroom Layout Section */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc("/photos/properties/Falcon/Outdoor shot falcon.webp")}
                alt="Falcon Blueberry Drive Bedroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-2 md:order-1">
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
                    d="M7 13C8.66 13 10 11.66 10 10C10 8.34 8.66 7 7 7C5.34 7 4 8.34 4 10C4 11.66 5.34 13 7 13ZM19 13C20.66 13 22 11.66 22 10C22 8.34 20.66 7 19 7C17.34 7 16 8.34 16 10C16 11.66 17.34 13 19 13ZM7 15C4.67 15 0 16.17 0 18.5V20H14V18.5C14 16.17 9.33 15 7 15ZM19 15C18.71 15 18.38 15.02 18.03 15.05C19.19 15.89 20 17.02 20 18.5V20H24V18.5C24 16.17 21.33 15 19 15Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">UPPER LEVEL:</h2>
            </div>

            <p className="mb-4">
              •Master Bedroom 1- The spacious master bedroom has a gorgeous King bed and is located on the top floor, with an ensuite large bath and shower, walk-in wardrobe, and private deck with beautiful mountain views.
            </p>
            <p className="mb-4">
              •Bedroom 2- At the other end of the floor to the master, this beautiful bright, and spacious room has a King bed and large windows allowing for ample natural light.
            </p>
            <p className="mb-4">
              •Bedroom 3- A stylish King bed and vast windows with gorgeous views, the room is the same size as bedroom 2. Both bedrooms 2 and 3 share a bathroom with a shower and bathtub.
            </p>

            <p className="font-bold mb-2">MID-LEVEL:</p>
            <p className="mb-4">
              •Bedroom 4- A lovely large bedroom equipped with a gorgeous King bed, with a sofa for lounging and desk space. Adjacent to the room is a powder bathroom and the outdoor hot tub is accessed through this room on the back deck.
            </p>

            <p className="font-bold mb-2">LOWER LEVEL:</p>
            <p className="mb-4">
              •Bedroom 5- A stylish King bed in this inviting and cozy space.
            </p>
            <p className="mb-4">
              •Bedroom 6- Twin bunk bed + twin bed. (3 total beds)
            </p>
            <p className="mb-4">
              •Bedroom 7- Has a King bed
            </p>
            <p className="mb-4">
              All 3 bedrooms share a spacious bathroom, 1 sink, and a large shower.
            </p>
          </div>
        </div>

        {/* Guest Access Section */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc("/photos/properties/Falcon/Cover photo Falcon.webp")}
                alt="Falcon Blueberry Drive Exterior"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Guest access</h2>
            <p className="text-gray-800 mb-6">
              Guests have private access to the entire home, including the hot tub, outdoor sauna, deck and driveway. The driveway comfortably accommodates approximately 4-5 vehicles.
            </p>
            <p className="text-gray-800">
              Garage is available for up to 7 bikes or ski gear as storage. Garage is not large enough for a vehicle to fit.
            </p>
          </div>
        </div>

        {/* Other things to note */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc("/photos/properties/Falcon/Outdoor shot falcon zoomed out.webp")}
                alt="Falcon Blueberry Drive Living Space"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-4">Other things to note</h2>
            <p className="text-gray-800 mb-6">
              Falcon is located in Blueberry Hill, one of Whistler’s most established and peaceful residential neighbourhoods. The elevated setting offers beautiful mountain views while keeping guests remarkably close to Whistler Village and the slopes.
            </p>
            <p className="text-gray-800 mb-6">
              One of the best features of the location is the ability to reach the Village without needing a car. The Valley Trail and Whistler Golf Course are approximately a one-minute walk from the home, and a beautiful scenic walk of about 25 minutes brings you directly into Whistler Village.
            </p>
            <p className="text-gray-800 mb-6">
              For a quicker trip, Whistler Village and the gondolas are approximately a 3-4 minute drive away.
            </p>
            <p className="text-gray-800 mb-6">
              The Route 6 Blueberry/Tapley’s bus also stops just steps from the property and provides convenient service directly into Whistler Village.
            </p>
            <p className="text-gray-800 mb-6">
              This makes Falcon an excellent option for groups who want the space, privacy and mountain setting of a large chalet without feeling far removed from the restaurants, skiing, shopping and energy of Whistler Village.
            </p>
            <p className="text-gray-800 mb-6">
              **Parking on the driveway fits 4-5 vehicles**
            </p>
            <p className="text-gray-800">
              Ski lift pass booking &amp; delivery: One of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
            </p>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-16">
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
                  d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold">Neighbourhood highlights</h2>
          </div>
          <p className="text-gray-800 max-w-4xl mb-8">
            Very prestigious, quiet, and family-orientated area Blueberry Hill. Very convenient location close to Whistler Village.
          </p>
          <h2 className="text-2xl font-bold mb-4">During your stay</h2>
          <p className="text-gray-800 max-w-4xl mb-2">Pets allowed</p>
          <p className="text-gray-800 max-w-4xl mb-2">(1 pet allowed with a fee).</p>
          <p className="text-gray-800 max-w-4xl mb-8">
            Assistance animals are always allowed
          </p>
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800 max-w-4xl">
            Municipal registration number: 00013305
            <br />
            Provincial registration number: PM665790127
          </p>
        </div>
      </div>
    </>
  );
}
