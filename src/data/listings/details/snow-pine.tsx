import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function SnowPineDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to Snowpine, a modern 3-bedroom Creekside retreat just a
          5-minute walk from the Creekside Gondola. Designed for up to 6 guests,
          the home features three spacious bedrooms with private ensuite
          bathrooms, a private hot tub, fireplace, covered patio, BBQ and outdoor
          fire pit.
          <br />
          <br />A private garage with Tesla charging adds convenience, while
          Creekside restaurants, cafés and groceries are close by. Nita Lake,
          Alpha Lake and the Valley Trail make the location just as strong in
          summer.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[2])}
                alt="Snowpine interior"
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
              Welcome to Snowpine, a contemporary Creekside mountain home
              designed for families and groups who want the space and privacy of a
              chalet while staying within an easy 5-minute walk of the Creekside
              Gondola.
              <br />
              <br />
              The bright open-concept main level brings the kitchen, dining and
              living areas together, creating a comfortable space for everyone to
              gather after a day on the mountain. Modern finishes and appliances
              are complemented by a cozy fireplace, plenty of natural light and a
              relaxed Whistler atmosphere.
              <br />
              <br />
              Outside, enjoy your private hot tub, covered patio, BBQ and outdoor
              fire pit. Whether you are soaking after skiing, having dinner
              outside or relaxing around the fire, the outdoor spaces make the
              home especially enjoyable throughout the year.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">3 bedrooms · 3 beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">3.5 baths</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[8])}
                alt="Snowpine bedroom"
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
              <h2 className="text-2xl font-bold">Bedroom layout</h2>
            </div>

            <p className="text-gray-800 mb-6">
              All three bedrooms have their own private ensuite bathroom,
              providing an excellent layout for couples, families or groups
              travelling together.
            </p>

            <p className="font-bold mb-2">UPPER LEVEL:</p>
            <p className="mb-4">
              <span className="font-medium">Primary bedroom:</span> King bed with
              private ensuite bathroom featuring a large walk-in shower and
              heated floors. Access to a private balcony.
            </p>
            <p className="mb-4">A powder room is also located on the upper level.</p>

            <p className="font-bold mb-2">LOWER LEVEL:</p>
            <p className="mb-4">
              <span className="font-medium">Bedroom 2:</span> King bed with a
              dedicated desk/work area and private ensuite bathroom featuring both
              a bathtub and shower. Direct access to the balcony and private hot
              tub.
            </p>
            <p className="mb-4">
              <span className="font-medium">Bedroom 3:</span> Queen bed with
              private ensuite bathroom featuring a bathtub and shower.
            </p>
            <p className="mb-4">
              The home comfortably accommodates up to 6 guests across 3 bedrooms
              and 3 beds, with 3.5 bathrooms.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>SKI ACCESS &amp; CREEKSIDE GONDOLA:</strong>
            <br />
            One of Snowpine&apos;s biggest advantages is its Creekside location.
            The Creekside Gondola is only approximately a 5-minute walk from the
            home, making it incredibly easy to head to Whistler Mountain without
            driving or dealing with ski-day parking.
            <br />
            <br />A dedicated ski locker at the base of Creekside is included
            with your stay, so you can store skis and snowboards beside the
            mountain rather than carrying equipment back to the home every day.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>PRIVATE HOT TUB &amp; OUTDOOR SPACE:</strong>
            <br />
            Snowpine features a private outdoor hot tub, perfect for relaxing
            after skiing, hiking or biking. The covered patio also includes a BBQ
            and outdoor fire pit, creating another gathering space for the group
            throughout the year.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>GARAGE, PARKING &amp; EV CHARGING:</strong>
            <br />
            The home includes a single-car garage with plenty of additional space
            for storing skis, bikes and other outdoor equipment. A dedicated
            Tesla charger is available in the garage for guests travelling with an
            electric vehicle.
          </p>
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
            <h2 className="text-2xl font-bold">Location</h2>
          </div>
          <p className="text-gray-800 max-w-4xl">
            Snowpine is located in Whistler Creekside, one of the resort&apos;s
            most convenient and popular year-round neighbourhoods. The Creekside
            Gondola is approximately a 5-minute walk away, while Creekside
            Village offers groceries, ski rentals, cafés, restaurants and
            everyday essentials within easy walking distance.
            <br />
            <br />
            Some of Whistler&apos;s best-known restaurants are nearby, including
            Red Door Bistro, Rimrock Café, Creekbread and Dusty&apos;s, along
            with the restaurants and spa at Nita Lake Lodge. Creekside Market is
            also nearby for groceries, while the Co-Op convenience store and gas
            station are just a short walk from the home.
            <br />
            <br />
            The Valley Trail is nearby, with Nita Lake approximately a 2-minute
            walk away and Alpha Lake only a few minutes farther — excellent for
            walking, biking and summer days on the water.
          </p>
        </div>
      </div>
    </>
  );
}
