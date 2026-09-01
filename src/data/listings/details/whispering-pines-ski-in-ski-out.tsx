import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function WhisperingPinesSkiInSkiOutDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to one of the most convenient ski-in/ski-out locations on
          Blackcomb Mountain. This ground-floor 2-bedroom home at The Aspens sits
          just steps from the slopes and is the closest unit in the building to
          the pool and three hot tubs.
          <br />
          <br />
          Inside, enjoy a king primary suite, twin bedroom, fireplace, full
          kitchen, patio and BBQ. Ski rentals are available right in the
          building, while Upper Village, Whistler Village, Lost Lake and
          year-round trails are all within easy reach.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[0])}
                alt="The Aspens interior"
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
              If skiing is the priority, The Aspens is difficult to beat. This
              ground-floor home sits directly on Blackcomb Mountain, with true
              ski-in/ski-out access just steps from the unit and some of the best
              on-hill convenience in Whistler.
              <br />
              <br />
              What makes this particular condo even more convenient is its
              position within the building. It is the closest unit in The Aspens
              to both the ski slope access and the pool and hot tub area,
              meaning less time walking through hallways in ski boots and more
              time enjoying the mountain.
              <br />
              <br />
              The open living and dining area provides a comfortable place to
              relax after skiing, centred around a cozy indoor fireplace. Step
              outside onto the patio for fresh mountain air or use the private
              BBQ for an easy meal at home.
              <br />
              <br />
              The kitchen is fully equipped and includes a Keurig coffee machine
              and SodaStream.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2 bedrooms · 3 beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2 baths</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Bedroom layout</h2>
          <p className="text-gray-800 max-w-4xl">
            <strong>Primary Bedroom:</strong>
            <br />
            King bed, Smart TV with cable and private ensuite bathroom featuring
            both a bathtub and shower.
            <br />
            <br />
            <strong>Bedroom 2:</strong>
            <br />
            Two single beds and Smart TV with cable. The second full bathroom,
            featuring a large walk-in shower, is located nearby.
            <br />
            <br />
            <strong>Living Room:</strong>
            <br />
            Additional Smart TV with cable.
            <br />
            <br />
            The home accommodates up to 4 guests across two bedrooms and three
            beds.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>TRUE SKI-IN/SKI-OUT ACCESS:</strong>
            <br />
            The Aspens is located directly on Blackcomb Mountain and offers
            genuine on-hill ski-in/ski-out convenience.
            <br />
            <br />
            Step outside, grab your equipment and access the mountain within
            moments. At the end of the day, ski back to the complex and head
            straight inside without dealing with a vehicle, Village parking or
            transporting equipment back and forth.
            <br />
            <br />
            Ski and snowboard rentals are also available directly within The
            Aspens building, an unusually convenient feature that makes ski
            days even easier.
            <br />
            <br />
            For guests coming primarily to ski, there are few locations in
            Whistler that make the process this simple.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>POOL &amp; THREE HOT TUBS:</strong>
            <br />
            Guests have access to a heated outdoor pool and three hot tubs
            situated directly at the base of Blackcomb Mountain.
            <br />
            <br />
            The pool and hot tub area is only steps from this particular unit,
            making it incredibly easy to head out for a soak after skiing and
            return home without crossing the entire building.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION:</strong>
            <br />
            The Aspens offers the rare combination of being directly on the
            mountain while still keeping Whistler&apos;s restaurants, shops and
            Village atmosphere within walking distance.
            <br />
            <br />
            Upper Village and the Blackcomb Gondola area are nearby, while the
            main Whistler Village can also be reached comfortably on foot.
            <br />
            <br />
            This means guests can enjoy a true ski property without sacrificing
            access to dinner, après-ski, shopping and the rest of Whistler.
            <br />
            <br />
            In summer, Lost Lake, biking and hiking trails, nearby golf courses
            and the Valley Trail make The Aspens equally convenient for
            warm-weather stays.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>PARKING:</strong>
            <br />
            Parking is managed by The Aspens building and is available for
            approximately $26 CAD per vehicle, per day, with ample underground
            spaces available.
            <br />
            <br />
            During summer, limited free street parking may also be available
            nearby on a first-come basis.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>SUMMER A/C:</strong>
            <br />
            A newer, high-performing portable air-conditioning unit is located
            in the primary bedroom and helps circulate cooler air through the
            condo during summer.
            <br />
            <br />
            The unit is available seasonally from approximately May 1 through
            November 1.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>LAUNDRY:</strong>
            <br />A shared laundry facility is conveniently located just around
            the corner from the condo on the same ground floor.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire 2-bedroom condo, including
            the patio and BBQ.
            <br />
            <br />
            You will also have access to The Aspens&apos; heated outdoor pool,
            three hot tubs, fitness facilities, ski-in/ski-out access and
            building ski-rental/ski concierge services.
            <br />
            <br />
            Self check-in is available, with access instructions provided before
            arrival.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00013235
            <br />
            Provincial registration number: PM632041838
          </p>
        </div>
      </div>
    </>
  );
}
