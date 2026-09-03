import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";
import {
  BLUFFS_AIRBNB_LINK,
} from "../bluffsAirbnbLink";
import { airbnbButtonSm } from "@/lib/airbnbButtonStyles";

export default function BluffsUnit4TaluswoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Perched in Taluswood&apos;s Bluffs, this 2-bedroom retreat drops you onto
          the Dave Murray Downhill for true ski-in ski-out days and sunset
          mountain-view evenings.
        </p>
        <p className="text-gray-800 mb-16 max-w-4xl">
          A King and Queen suite, a Queen sofa, a common area hot tub, quiet
          portable AC units that cool the living room (from May 1–Nov 1), Smart
          TVs, a gas fireplace, a BBQ and a chef-ready kitchen keep every season
          comfortable.
        </p>
        <p className="text-gray-800 mb-16 max-w-4xl">
          Underground parking for two cars and secure ski &amp; bike storage make
          arrivals effortless.
        </p>

        <div className="flex justify-center mb-16">
          <a
            href={BLUFFS_AIRBNB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={airbnbButtonSm}
          >
            View on Airbnb
          </a>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[4])}
                alt="Bluffs Unit 4 living area"
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
              Step through the front door into a warm, tiled mudroom with a
              ski-boot dryer. Hooks, shelves, and a bench make it easy to gear up
              or peel off layers without tracking snow through the home. Heated
              floors here (and in every bathroom) keep toes toasty.
            </p>
            <p className="font-bold mb-2">Main Living Level</p>
            <p className="text-gray-800 mb-6">
              Enjoy same-floor living to the entire home (only 2 steps down after
              entering the home, otherwise would be step free) and bedrooms from
              the front door. An open-concept kitchen, dining, and living area
              with a gas fireplace and a portable AC unit (from May 1–Nov 1). The
              living room features two couches, including a queen pull-out sofa
              facing a gas fireplace and a 65-inch Smart TV with Netflix, Amazon
              Prime, and HDMI ports for your own devices. Sliding doors lead to a
              covered balcony where you will find a four-burner BBQ and an outdoor
              dining space.
            </p>
            <p className="font-bold mb-2">Kitchen &amp; Dining</p>
            <p className="text-gray-800 mb-4">
              The chef&apos;s kitchen is fully stocked for longer stays:
            </p>
            <ul className="text-gray-800 mb-6 list-disc pl-6 space-y-1">
              <li>Full-size fridge with bottom freezer</li>
              <li>
                Five-burner electric range, convection oven, microwave, and
                dishwasher
              </li>
              <li>Nespresso original machine &amp; drip coffee machine</li>
              <li>
                High-end cookware, chef&apos;s knives, spice rack, baking basics,
                and ample glassware
              </li>
            </ul>
            <p className="text-gray-800 mb-6">
              A solid wood dining table seats six comfortably indoors.
            </p>
            <p className="font-bold mb-2">Climate &amp; Comfort</p>
            <p className="text-gray-800 mb-6">
              Portable, whisper-quiet AC units keep the living room cool from May 1
              to November 1. In-floor heating in bathrooms and efficient baseboard
              heaters throughout the unit. The unit features high-speed Wi-Fi
              ideal for remote work or streaming.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[7])}
                alt="Bluffs Unit 4 bedroom"
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
              <h2 className="text-2xl font-bold">Sleeping Quarters</h2>
            </div>
            <p className="text-gray-800 mb-4">
              All of our beds come with premium sheets and bedding.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Primary Suite:</span> King bed with
              hybrid mattress, 100 percent cotton linens, blackout blinds,
              oversized closet, a 47&quot; Smart TV, and an ensuite bath with deep
              soaker tub &amp; shower, and heated floors.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Second Bedroom:</span> Queen bed with
              a 58&quot; Smart TV, with access to the shared unit bathroom with a
              standing shower.
            </p>
            <p className="text-gray-800 mb-4">
              <span className="font-medium">Living Room:</span> Queen pull-out
              sofa with a nice duvet. Sofa bed guests can use the shared bathroom
              in the unit.
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
            The hot tub is private to the complex and looks directly toward the
            snow-capped Coast Mountains. Enjoy sunrise soaks or starlit sessions
            after a day on the slopes.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Storage &amp; Parking</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Underground parking offers two stalls for the unit, and secure gear
            storage in the underground garage allows guests to lock bikes and ski
            &amp; snowboard gear. In the summer, you can rinse bikes on the
            communal wash-down pad near the garage entrance.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Laundry &amp; Essentials</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            A full-size front-load washer and dryer are tucked in a hallway closet
            with detergent, iron, and drying rack provided. We stock eco-friendly
            toiletries, basic cleaning supplies, spare bath and hot-tub towels,
            and starter packs of coffee, tea, and condiments so you can settle in
            before your first grocery run.
          </p>
          <p className="text-gray-800 max-w-4xl">
            Everything is designed for effortless mountain living. Arrive, unload
            in the mudroom, relax in the living room, and let the views remind you
            why you chose Whistler!
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration Details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00015824
            <br />
            Provincial registration number: PM274988523
          </p>
        </div>
      </div>
    </>
  );
}
