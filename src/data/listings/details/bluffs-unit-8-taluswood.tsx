import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Script from "next/script";
import type { ListingDetailsProps } from "../types";
import {
  BLUFFS_UNIT_8_AIRBNB_LINK,
  BLUFFS_UNIT_8_AIRBNB_ROOM_ID,
} from "../bluffsUnit8AirbnbLink";
import { airbnbButtonSm } from "@/lib/airbnbButtonStyles";

export default function BluffsUnit8TaluswoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Perched in Taluswood&apos;s Bluffs, this 3-bedroom retreat puts you right
          on the Dave Murray Downhill for true ski-in ski-out days and beautiful
          mountain-view evenings. With a King suite, Queen bedroom, four Twin bunk
          beds, and a Queen sofa bed, the home sleeps up to 10 guests and is ideal for
          families and groups. A
          common-area hot tub, portable AC, Smart TVs, gas fireplace, BBQ,
          chef-ready kitchen, generous parking, and secure ski &amp; bike storage
          make every season comfortable and effortless.
        </p>

        <div className="flex justify-center mb-16">
          <div className="w-full max-w-md text-center">
            <div
              className="airbnb-embed-frame mx-auto"
              data-id={BLUFFS_UNIT_8_AIRBNB_ROOM_ID}
              data-view="home"
              data-hide-price="true"
              style={{ width: "450px", height: "300px", margin: "auto" }}
            />
            <a
              href={BLUFFS_UNIT_8_AIRBNB_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`mt-4 inline-block ${airbnbButtonSm}`}
            >
              View on Airbnb
            </a>
          </div>
        </div>
        <Script
          src="https://www.airbnb.ca/embeddable/airbnb_jssdk"
          strategy="afterInteractive"
        />

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[1])}
                alt="Bluffs Unit 8 living area"
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
            <p className="text-gray-800 mb-6">
              Step inside to a warm and welcoming mountain home designed for easy
              Whistler stays. With plenty of space for families and groups, the home
              combines comfortable bedrooms, an open-concept living area, a fully
              equipped kitchen, beautiful views, and convenient access to the slopes.
            </p>
            <p className="font-bold mb-2">Main Living Level</p>
            <p className="text-gray-800 mb-6">
              The main floor features the open-concept kitchen, dining, and living
              area, along with the Queen bedroom and bunk room. The living room
              includes a Queen pull-out sofa, gas fireplace, Smart TV, and a portable
              AC unit from May 1 to November 1. Sliding doors open to the covered
              balcony, where you can enjoy the mountain air, BBQ, and outdoor dining
              space.
            </p>
            <p className="font-bold mb-2">Kitchen &amp; Dining</p>
            <p className="text-gray-800 mb-4">
              The chef&apos;s kitchen is fully stocked for longer stays:
            </p>
            <ul className="text-gray-800 mb-6 list-disc pl-6 space-y-1">
              <li>Full-size fridge and freezer</li>
              <li>Electric range, oven, microwave, and dishwasher</li>
              <li>Nespresso Original machine &amp; drip coffee machine</li>
              <li>
                High-end cookware, chef&apos;s knives, spice rack, baking basics,
                and ample glassware
              </li>
            </ul>
            <p className="text-gray-800 mb-6">
              The dining area provides plenty of room for the group to gather for
              meals after a day on the mountain.
            </p>
            <p className="font-bold mb-2">Climate &amp; Comfort</p>
            <p className="text-gray-800 mb-6">
              Portable, whisper-quiet AC helps keep the main living area cool from
              May 1 to November 1. Thanks to Whistler&apos;s cooler evenings and
              mountain climate, the home remains comfortable throughout the summer
              season. Bathrooms feature in-floor heating, with efficient baseboard
              heating throughout the rest of the home. High-speed Wi-Fi is included
              for remote work, streaming, and staying connected during your stay.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[21])}
                alt="Bluffs Unit 8 master bedroom"
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
              <h2 className="text-2xl font-bold">Bedroom Layout &amp; Beds</h2>
            </div>
            <p className="text-gray-800 mb-4">
              All of our beds come with premium sheets and bedding.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Primary Suite, Top Floor:</span> King
              bed in a private upper-level bedroom.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Queen Bedroom, Main Floor:</span> Queen
              bed conveniently located on the main living level.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Bunk Room, Main Floor:</span> Four Twin
              bunk beds, perfect for children, friends, or larger groups.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Living Room:</span> Queen pull-out sofa
              with comfortable bedding.
            </p>
          </div>
        </div>

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
            <h2 className="text-2xl font-bold">Outdoor Space</h2>
          </div>
          <p className="text-gray-800 max-w-4xl mb-8">
            The hot tub is private to the complex and looks toward the surrounding
            Coast Mountains. Enjoy a morning soak before heading out for the day or
            relax under the stars after skiing.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Parking &amp; Storage</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            The unit includes two guaranteed underground parking spaces, with a
            maximum garage clearance of 6 feet 8 inches. In addition to the
            underground stalls, there are plenty of outdoor parking spaces directly
            outside the unit that guests are welcome to use throughout both winter
            and summer. This is a great bonus for groups travelling with several
            vehicles or anyone bringing an overheight vehicle that cannot fit in
            the underground garage.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Secure gear storage in the underground garage provides space for ski,
            snowboard, and bike equipment. During summer, guests can also use the
            communal bike wash-down area near the garage entrance.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Laundry &amp; Essentials</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            A full-size washer and dryer are provided along with detergent, an
            iron, and drying rack. We stock eco-friendly toiletries, basic cleaning
            supplies, spare bath and hot-tub towels, and starter supplies of coffee,
            tea, and condiments so you can settle in before your first grocery run.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Please Note About the Stairs</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            There is one flight of stairs to enter the unit. It is manageable for
            nearly all guests, including many elderly guests, but we like to be
            upfront so there are no surprises for anyone with mobility limitations
            or personal preferences. The benefit is that the home sits slightly
            elevated, allowing for beautiful scenic views over Whistler Village and
            the surrounding mountains.
          </p>
          <p className="text-gray-800 max-w-4xl">
            Everything is designed for effortless mountain living. Ski straight into
            the neighbourhood, come home to plenty of space for the entire group,
            relax by the fireplace or in the hot tub, and enjoy the elevated views
            over Whistler and the surrounding mountains.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00015954
            <br />
            Provincial registration number: PM930192813
          </p>
        </div>
      </div>
    </>
  );
}
