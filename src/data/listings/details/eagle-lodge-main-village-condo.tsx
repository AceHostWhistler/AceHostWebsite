import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function EagleLodgeMainVillageCondoDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Stay directly in the centre of Whistler Village in this renovated
          1-bedroom condo at Eagle Lodge. Walk approximately seven minutes to
          the gondolas, with restaurants, cafes, groceries, shops and Olympic
          Plaza just outside. The home features a king bedroom, sofa bed, full
          kitchen, gas fireplace, in-suite laundry, mountain views, a private
          balcony, seasonal portable air conditioning and one free underground
          parking space.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[1] ?? photos[0])}
                alt="Eagle Lodge living room with gas fireplace"
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
              Eagle Lodge 238 is a renovated, approximately 600-square-foot
              condo on the second floor. It offers a comfortable single-level
              layout and a convenient location directly within Whistler&apos;s
              main pedestrian Village. Once you arrive and park, you can walk to
              the ski lifts, restaurants, cafes, groceries, shops and most of
              Whistler&apos;s central attractions.
              <br />
              <br />
              <strong>Living area</strong>
              <br />
              The open-plan living room is a comfortable place to relax after
              skiing, biking or exploring the Village. Settle in beside the gas
              fireplace, watch a movie on the large television or enjoy the
              mountain views through the windows. The living room includes a
              futon-style sofa bed, with sheets, a duvet and pillows provided.
              <br />
              <br />
              <strong>Kitchen and dining</strong>
              <br />
              The full kitchen makes it easy to prepare breakfast before heading
              to the mountain, pack lunches or enjoy a relaxed dinner at home.
              It includes a refrigerator, stove and oven, microwave, dishwasher,
              coffee maker, kettle, toaster, cookware, dishes and essential
              utensils. The dining table seats 4 guests.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">1 bedroom · 2 beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">1 bath</span>
              </div>
            </div>
            <p className="text-gray-800">
              <strong>Private balcony</strong>
              <br />
              Step onto the private balcony for fresh mountain air and
              surrounding views. It is a lovely place to start the morning with
              coffee before walking through the Village to the gondolas.
              <br />
              <br />
              <strong>Air conditioning</strong>
              <br />A portable air-conditioning unit is available seasonally
              from May 1 through November 1.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[9] ?? photos[0])}
                alt="Eagle Lodge king bedroom"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl font-bold mb-6">Bedroom layout</h2>
            <p className="text-gray-800 mb-4">
              Sleeps four guests.
              <br />
              <br />
              <strong>Bedroom</strong>
              <br />
              King-size bed, television, bedside tables, reading lamps, a
              full-size closet and clothing storage, with fresh linens, a duvet
              and pillows.
              <br />
              <br />
              <strong>Living room</strong>
              <br />
              Sofa bed for two additional guests. Sheets, a duvet and pillows
              are provided.
              <br />
              <br />
              <strong>Bathroom</strong>
              <br />
              One full bathroom with a bathtub and shower combination. Towels,
              shampoo, soap and a hair dryer are provided.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Location</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Eagle Lodge sits in Town Plaza, directly on the Whistler Village
            Stroll. You are staying within Whistler&apos;s main Village, rather
            than in a surrounding neighbourhood that requires driving or a
            shuttle into town.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Step outside the building and you are immediately surrounded by
            restaurants, coffee shops, grocery stores, boutiques and apres
            spots. Olympic Plaza is only moments away, while the Whistler
            Village and Excalibur gondolas are approximately a seven-minute walk
            through the Village.
          </p>
          <p className="text-gray-800 max-w-4xl">
            For ski days, walk from the condo to the gondolas without needing to
            drive or wait for a shuttle. At the end of the day, walk back
            through the Village to the gas fireplace and your private balcony.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire condo, including the
            bedroom, bathroom, kitchen, living and dining area, private balcony
            and in-suite laundry. The reservation includes one complimentary
            underground parking space. An elevator connects the underground
            parking area to the residential floors. Detailed check-in, entrance
            and parking instructions will be sent before arrival.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl">
            The underground parking area can be tight for larger vehicles, so
            please drive carefully and follow the instructions provided before
            arrival.
            <br />
            <br />
            The building&apos;s shared hot tub, fitness room and changing rooms
            are currently closed for renovations until further notice. These
            facilities are not included as available amenities at this time.
            <br />
            <br />
            This is a privately managed vacation rental and does not operate
            like a traditional hotel.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00013149
            <br />
            Provincial registration number: PM895816775
          </p>
        </div>
      </div>
    </>
  );
}
