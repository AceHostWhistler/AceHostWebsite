import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function Marquise2BedSkiInSkiOutDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to this ski-in/ski-out retreat at The Marquise, perfectly
          positioned on Blackcomb Mountain. This main-floor condo features a
          brand-new Puffy Royal King bed, Queen pullout sofa, fireplace, private
          ski storage and free parking.
          <br />
          <br />
          After skiing, unwind in the heated outdoor pool, hot tub or gym, then
          walk to Upper Village, the Fairmont and Four Seasons in about 5
          minutes. In summer, Whistler Village, Lost Lake, biking trails and
          mountain adventures are all close by and walking distance.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[4])}
                alt="Marquise ski-in ski-out interior"
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
              Welcome to your ski retreat at The Marquise, ideally positioned on
              Blackcomb Mountain for guests who want mountain access to be the
              centre of their Whistler stay.
              <br />
              <br />
              Being on the main floor makes coming and going with skis and gear
              especially convenient. In winter, head out for a day on Blackcomb
              without getting in the car, then return home and transition straight
              into après-ski mode with the building&apos;s heated pool, hot tub
              and fitness centre nearby.
              <br />
              <br />
              Inside, the condo is comfortable and well equipped for couples,
              small families or friends. The living area provides a relaxing
              place to unwind after the mountain, while the full kitchen gives
              you the option of cooking at home when you are not exploring
              Whistler&apos;s restaurants.
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
            <strong>Primary Bedroom:</strong>
            <br />
            Brand-new Puffy Royal King mattress designed for an exceptionally
            comfortable night&apos;s sleep.
            <br />
            <br />
            <strong>Living Room:</strong>
            <br />
            Queen pullout sofa that converts the living area into an additional
            sleeping space at night.
            <br />
            <br />
            The bathroom also features a bidet toilet for an added touch of
            comfort.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>SKI-IN/SKI-OUT ACCESS:</strong>
            <br />
            The location is built around skiing. The Marquise sits directly on
            Blackcomb Mountain with convenient ski access, allowing guests to
            get onto the mountain without driving or dealing with Village
            parking.
            <br />
            <br />
            Secure ski storage is included, so equipment can stay safely stored
            and easily accessible between mountain days.
            <br />
            <br />
            For guests who prioritize skiing, this is one of the biggest
            advantages of staying here. Wake up, grab your gear and get onto
            Blackcomb, then return to the building at the end of the day and
            head straight for the hot tub.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>POOL, HOT TUB &amp; GYM:</strong>
            <br />
            Guests have access to The Marquise&apos;s year-round heated outdoor
            pool, hot tub and fitness centre.
            <br />
            <br />
            After a cold day on the mountain, the hot tub and heated pool make
            for an easy après-ski option without having to leave the property.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION:</strong>
            <br />
            Although the setting feels like a mountain retreat, Upper Village is
            only approximately a 5-minute walk away.
            <br />
            <br />
            The Fairmont Chateau Whistler, Four Seasons, restaurants, cafés, ski
            shops and the Blackcomb Gondola area are all nearby, while the main
            Whistler Village can be reached on foot in approximately 15 minutes.
            <br />
            <br />
            This creates an excellent balance between direct mountain access and
            Village convenience. You can spend the day skiing from the property,
            walk into Upper Village for dinner or drinks, and return to a quieter
            Blackcomb setting at night.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>PARKING:</strong>
            <br />
            One complimentary parking space is included with your stay.
            <br />
            <br />
            Additional paid parking is available in the building for extra
            vehicles at approximately $26 CAD per vehicle, per day. During
            summer, free street parking may also be available nearby on a
            first-come basis.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire condo throughout their stay.
            <br />
            <br />
            You will also have access to the building&apos;s heated outdoor
            pool, hot tub, fitness centre and ski storage facilities.
            <br />
            <br />
            One complimentary parking space is included.
            <br />
            <br />
            Self check-in makes arrival easy, with access instructions provided
            before your stay.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00014807
            <br />
            Provincial registration number: PM129480632
          </p>
        </div>
      </div>
    </>
  );
}
