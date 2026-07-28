import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function ValhallaUnit33VillageDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Experience the ultimate Whistler escape at Valhalla Peaks! This apartment
          offers ski-in/ski-out access and is steps from the lifts, shops, and
          restaurants. Enjoy a private hot tub, a cozy fireplace, and a chef&apos;s
          kitchen. With three bedrooms, three bathrooms, and underground parking,
          it&apos;s perfect for families or groups. Enjoy mountain views and easy
          access to outdoor adventures.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[3])}
                alt="Valhalla Peaks balcony"
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
              <h2 className="text-2xl font-bold">The Space</h2>
            </div>
            <p className="font-bold mb-2">Layout</p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Bedroom 1:</span> King bed, ensuite
              tub-shower, mountain view
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Bedroom 2:</span> Queen bed, adjacent
              full bath
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Bedroom 3:</span> Single bed plus
              twin-over-twin bunk, next to third full bath
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Living room:</span> Queen pull-out
              sofa, gas fireplace, 55&quot; smart TV
            </p>
            <p className="text-gray-800 mb-6">
              <span className="font-medium">Dining:</span> Indoor table for six
            </p>
            <p className="font-bold mb-2">The Space &amp; Amenities</p>
            <ul className="text-gray-800 mb-6 list-disc pl-6 space-y-1">
              <li>Private balcony hot tub facing Whistler peaks</li>
              <li>
                Fully equipped kitchen, stainless appliances, BBQ, drip and
                French-press coffee
              </li>
              <li>
                Whisper-quiet portable AC units in master and living room (May
                1–Nov 1)
              </li>
              <li>Fast Wi-Fi, laptop nook, board games, streaming apps</li>
              <li>In-suite washer and dryer with detergent supplied</li>
              <li>
                Two reserved underground parking stalls plus ample visitor
                parking
              </li>
              <li>Lockable ski and bike storage room at entry level</li>
              <li>Keyless entry and 24/7 local support from AceHost Whistler</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[12])}
                alt="Valhalla Peaks hot tub"
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
                    d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2ZM12 11.5C10.62 11.5 9.5 10.38 9.5 9C9.5 7.62 10.62 6.5 12 6.5C13.38 6.5 14.5 7.62 14.5 9C14.5 10.38 13.38 11.5 12 11.5Z"
                    fill="white"
                  />
                </svg>
              </div>
              <h2 className="text-2xl font-bold">Air Conditioning</h2>
            </div>
            <p className="text-gray-800 max-w-4xl">
              Brand new AC cooling units. One is located in the living room and one
              located in the master bedroom. This tends to keep the entire home
              cool in the summer months. Whistler at night naturally cools down as
              well :)
            </p>
          </div>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00014368
            <br />
            Provincial registration number: PM535952713
          </p>
        </div>
      </div>
    </>
  );
}
