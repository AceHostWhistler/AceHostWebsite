import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function CascadeLodge615PremiumViewDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Find ease, comfort and spectacular mountain beauty at this sixth-floor
          getaway in Cascade Lodge, wonderfully positioned at the gateway to
          Whistler Village. Enjoy premium forest and mountain views from your
          private balcony, a well-equipped full kitchen, a cozy gas fireplace,
          and the convenience of in-unit washer and dryer.
          <br />
          <br />
          Whether you plan to spend your days skiing, mountain biking or
          exploring the Village, you will be within walking distance of shops,
          restaurants and lifts, with shared on-site amenities that include a
          heated outdoor pool, hot tubs, saunas and a fitness room.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[4])}
                alt="Cascade Lodge #615 living area"
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
              This premium one-bedroom condo on the sixth floor offers an
              elevated perspective over the forest and mountains surrounding
              Whistler Village. The living area is designed for relaxing après
              with a gas fireplace, dining table and comfortable seating, while
              the full kitchen gives you everything you need for home-cooked
              meals between mountain adventures.
              <br />
              <br />
              Step out onto the private balcony to take in the views, or unwind
              inside after a day on the slopes. In-unit laundry makes longer
              stays easy, and the updated interior features modern finishes
              throughout.
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
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Sleeping layout</h2>
          <p className="text-gray-800 max-w-4xl">
            <strong>Bedroom:</strong>
            <br />A comfortable primary sleeping area for two guests.
            <br />
            <br />
            <strong>Living area:</strong>
            <br />
            Additional sleeping space for up to two more guests, ideal for couples,
            friends or a small family.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>BUILDING AMENITIES:</strong>
            <br />
            Guests enjoy shared access to Cascade Lodge&apos;s heated outdoor
            pool, hot tubs, saunas and fitness room. Complimentary ski valet in
            the lobby makes storing and retrieving equipment easy during winter
            stays.
            <br />
            <br />
            The pool and hot tubs are outdoor facilities. Availability may vary
            during heavy snow, cold temperatures or icy conditions for guest
            safety.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION:</strong>
            <br />
            Cascade Lodge sits on Northlands Boulevard at the gateway to
            Whistler Village, putting shops, restaurants, the Whistler Museum
            and Village strolls within easy reach.
            <br />
            <br />
            During winter, ski lifts are within a short walk or complimentary
            Village shuttle ride. Whistler and Blackcomb mountains offer more
            than 8,100 acres of terrain, with the Peak 2 Peak Gondola nearby
            for unforgettable alpine views.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>PARKING:</strong>
            <br />
            Paid parking is available for one vehicle. Additional vehicles may
            require separate arrangements.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire condo throughout their stay,
            plus shared building amenities including the pool, hot tubs, saunas,
            fitness room and ski valet.
            <br />
            <br />
            Self check-in makes arrival easy, with access instructions provided
            before your stay.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Other things to note</h2>
          <p className="text-gray-800">
            No pets allowed.
            <br />
            Check-in after 4:00 PM · Check-out before 10:00 AM · 4 guests
            maximum.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00010692
            <br />
            Provincial registration number: ST626835225
          </p>
        </div>
      </div>
    </>
  );
}
