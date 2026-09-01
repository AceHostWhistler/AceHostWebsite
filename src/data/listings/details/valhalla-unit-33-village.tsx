import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function ValhallaUnit33VillageDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to Valhalla Peaks, a spacious 3-bedroom Whistler Village
          townhome that gives you the best of both worlds: a quiet place to
          unwind with everything just outside your door. Enjoy your own private
          hot tub with mountain views, a cozy gas fireplace, 3 bathrooms,
          underground parking and room for up to 8 guests. Marketplace and Fresh
          St. Market are directly across the street, while the Village Stroll,
          restaurants, shops, après-ski and ski lifts are accessible right from
          the front door.
        </p>

        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row mb-10">
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
                <h2 className="text-2xl font-bold">The space</h2>
              </div>
              <p className="text-gray-800 mb-6">
                Welcome to your Whistler Village home base. Valhalla Peaks
                combines the space and privacy of a multi-level townhome with a
                location that makes it easy to enjoy Whistler without constantly
                getting in the car.
                <br />
                <br />
                The main living area is designed for relaxing together after a
                day on the mountain, with a cozy gas fireplace, 55&quot; Smart
                TV, comfortable seating and an open connection to the kitchen
                and dining area. The fully equipped kitchen includes
                stainless-steel appliances, cookware and everything needed for
                meals at home, along with drip and French-press coffee options.
                <br />
                <br />
                Step outside to your private balcony and hot tub overlooking the
                surrounding Whistler peaks. Whether it is an early morning soak,
                après-ski with the group or relaxing under the stars, having
                your own private hot tub in the heart of the Village is one of
                the home&apos;s standout features.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <FaBed className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 bedrooms · 5 beds</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 baths</span>
                </div>
              </div>
              <p className="text-gray-800">
                <strong>LOCATION:</strong>
                <br />
                One of the biggest advantages of staying at Valhalla is the
                location. The home sits at the north end of Whistler Village,
                directly across from Marketplace and Fresh St. Market,
                Whistler&apos;s largest full-service grocery store. Cafés,
                restaurants, shops, the liquor store and everyday essentials are
                all just outside the complex.
                <br />
                <br />
                The Village Stroll begins only steps away, so guests can walk
                through the heart of Whistler to restaurants, shopping,
                après-ski and the Whistler and Blackcomb gondolas. The Whistler
                Village Gondola is approximately a 12-minute walk away, and the
                complimentary Village shuttle stops nearby for an easy
                alternative when carrying ski gear.
                <br />
                <br />
                Despite being so central, Valhalla has a quieter residential
                feel compared with staying directly above the busiest sections
                of the pedestrian Village. It is a great balance for families
                and groups who want everything nearby but still appreciate
                having a peaceful home to return to.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 max-w-4xl">
                Bedroom 1:
                <br />
                King bed, mountain views and private ensuite bathroom with
                tub/shower.
                <br />
                <br />
                Bedroom 2:
                <br />
                Queen bed with a full bathroom conveniently located nearby. A
                portable A/C unit is available in this bedroom during the summer
                season.
                <br />
                <br />
                Bedroom 3:
                <br />
                Twin-over-twin bunk bed plus an additional single bed, with the
                third full bathroom located nearby. This setup works especially
                well for children, teens or additional members of a family
                group.
                <br />
                <br />
                Living Room:
                <br />
                Queen pull-out sofa for additional sleeping space, plus gas
                fireplace and 55&quot; Smart TV.
                <br />
                <br />
                The home accommodates up to 8 guests across 3 bedrooms and 5
                beds.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[6])}
                  alt="Valhalla Peaks bedroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-800 mb-6">
                <strong>PRIVATE HOT TUB &amp; OUTDOOR SPACE:</strong>
                <br />
                The private balcony features your own hot tub with views toward
                the surrounding mountains, providing a relaxing outdoor space
                throughout the year. A BBQ is also available for meals at home.
                <br />
                <br />
                <strong>PARKING &amp; GEAR STORAGE:</strong>
                <br />
                One reserved underground parking stall is included with your
                stay, plus access to one visitor parking space. Having secure
                underground parking is especially convenient during snowy Whistler
                winters.
                <br />
                <br />
                A lockable ski and bike storage room is located at entry level,
                making it easy to keep equipment secure without bringing skis or
                bikes through the main living areas.
                <br />
                <br />
                <strong>SUMMER A/C:</strong>
                <br />
                Yes we have Air Conditioning! 2 whisper-quiet portable
                air-conditioning units are available from May 15 through October
                15, with one located in the living room and one in Bedroom 2.
                Combined with Whistler&apos;s generally cooler evenings, these
                help keep the home comfortable during warmer summer days.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[12])}
                  alt="Valhalla Peaks hot tub"
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
            <li>Fast Wi-Fi</li>
            <li>Dedicated laptop/work area</li>
            <li>Board games and streaming apps</li>
            <li>In-suite washer and dryer with detergent provided</li>
            <li>Fully equipped kitchen</li>
            <li>Indoor dining for six</li>
            <li>Private hot tub</li>
            <li>Gas fireplace</li>
            <li>BBQ</li>
            <li>Keyless entry</li>
            <li>24/7 local support from AceHost Whistler</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            The entire 3-bedroom home is exclusively yours during your stay,
            including your private hot tub, so you can enjoy complete privacy.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl">
            Staircase: Please note there is one flight of stairs to enter the
            unit. It is manageable for nearly all guests, including many elderly
            guests, but we like to be upfront so there are no surprises for
            anyone with mobility limitations or personal preferences. The
            benefit is that the home sits slightly elevated, allowing for
            beautiful scenic views over Whistler Village and the surrounding
            mountains.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
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
