import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillageViewsLuxury25BedroomDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to this freshly renovated 2.5-bedroom retreat in the heart of
          Whistler Village, overlooking Olympic Plaza and the surrounding
          mountains. Sleeping up to 6 guests, the home features two bathrooms,
          A/C, a full kitchen, in-suite laundry and a cozy living area.
          <br />
          <br />
          Step outside to restaurants, cafés, shops and après-ski, with Fresh St.
          Market nearby and the gondolas an easy walk or free shuttle away. Guests
          also enjoy a shared pool and hot tub, plus one guaranteed underground
          parking space.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[3])}
                alt="Tyndall Stone Lodge interior"
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
              Welcome to your home in the heart of Whistler Village. Recently
              renovated and overlooking Olympic Plaza and the surrounding
              mountains, this bright 2.5-bedroom retreat combines one of
              Whistler&apos;s best locations with a comfortable layout for
              families, couples and smaller groups.
              <br />
              <br />
              The main living area is open and inviting, with large windows
              framing the Village and mountain surroundings. Relax together after
              skiing, enjoy a movie on Netflix, prepare dinner in the fully
              equipped kitchen or simply watch the activity of Olympic Plaza from
              above.
              <br />
              <br />
              The kitchen is fully stocked for meals at home, while in-suite
              laundry makes longer stays especially convenient. A/C provides
              additional comfort during Whistler&apos;s warmer summer months.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2.5 bedrooms · 4 beds</span>
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
                src={getGalleryPhotoSrc(photos[4])}
                alt="Tyndall Stone Lodge bedroom"
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
              Queen bed with views toward Whistler Olympic Plaza.
              <br />
              <br />
              <strong>Bedroom 2:</strong>
              <br />
              Two single beds, ideal for children, friends or individual sleepers.
              <br />
              <br />
              <strong>Additional Sleeping Area:</strong>
              <br />
              Queen pullout sofa in the main living room.
              <br />
              <br />
              The home comfortably accommodates up to 6 guests across 4 beds,
              with two full bathrooms.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION &amp; SKI ACCESS:</strong>
            <br />
            Location is one of the biggest reasons to stay here. Tyndall Stone
            Lodge sits directly in Whistler Village North beside Olympic Plaza,
            putting restaurants, cafés, shopping, groceries, après-ski and
            year-round Village events just outside your door.
            <br />
            <br />
            The Whistler and Blackcomb gondolas are within easy walking distance,
            or guests can use the complimentary Village shuttle that stops nearby
            for an effortless ride to the base of the mountains.
            <br />
            <br />
            Fresh St. Market, Whistler&apos;s largest full-service grocery store,
            is only moments away, making it exceptionally easy to stock the
            kitchen or grab anything you need during your stay.
            <br />
            <br />
            Once you arrive, most guests can park the car and explore Whistler
            almost entirely on foot.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>POOL &amp; HOT TUB:</strong>
            <br />
            Guests have access to Tyndall Stone Lodge&apos;s shared outdoor pool
            and hot tub.
            <br />
            <br />
            After a day skiing, biking or hiking, head downstairs for a soak
            before walking out into the Village for dinner or drinks.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>PARKING:</strong>
            <br />
            One designated underground parking space is reserved and guaranteed
            with every stay.
            <br />
            <br />
            For a property this central in Whistler Village, having guaranteed
            secure parking is an especially valuable convenience. Limited visitor
            parking may also be available on a first-come basis.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>ADDITIONAL FEATURES:</strong>
            <br />
            • A/C
            <br />
            • In-suite washer and dryer
            <br />
            • Fully equipped kitchen
            <br />
            • Netflix
            <br />
            • High-speed Wi-Fi
            <br />
            • Shared pool and hot tub
            <br />
            • Guaranteed underground parking
            <br />
            • Ski and snowboard storage
            <br />
            • Bike storage
            <br />• Keyless self check-in
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire home throughout their stay,
            including both bedrooms, the living and dining areas, kitchen and
            in-suite laundry.
            <br />
            <br />
            You will also have access to Tyndall Stone Lodge&apos;s shared outdoor
            pool and hot tub, secure ski and bike storage, and one guaranteed
            underground parking space.
            <br />
            <br />
            The home uses keyless entry, with access instructions provided before
            arrival.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl">
            Bedside table alarm clocks have USB ports, so do the backs of the sofa
            tables and under the island/bar.
            <br />
            <br />
            Fireplace typically does not work. It is a building issue that
            disconnects the gas. If it does work great! We have amazing central
            heating otherwise.
            <br />
            <br />
            Netflix is available.
            <br />
            <br />
            A/C works well!
            <br />
            <br />
            Washer &amp; Dryer located in the cabinet to the left of the kitchen
            sink.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00013236
            <br />
            Provincial registration number: PM092723067
          </p>
        </div>
      </div>
    </>
  );
}
