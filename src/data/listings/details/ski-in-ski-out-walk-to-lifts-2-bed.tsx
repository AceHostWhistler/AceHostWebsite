import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function SkiInSkiOutWalkToLifts2BedDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to Le Chamois, one of Whistler&apos;s most sought-after ski
          locations at the base of Blackcomb Mountain. The Blackcomb Gondola and
          ski-out are only about a 2-minute walk away, making mountain days
          effortless. This contemporary 2-bedroom, 2-bath retreat features a king
          suite, flexible Murphy bedroom, free underground parking and an EV
          charger.
          <br />
          <br />
          After skiing, enjoy the outdoor pool, hot tub and gym, with the
          Fairmont, Upper Village dining and Whistler Village all within easy
          walking distance.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[2])}
                alt="Le Chamois interior"
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
              Welcome to your Blackcomb mountain base at Le Chamois. Set directly
              in Upper Village at the foot of Blackcomb Mountain, this
              contemporary 638 sq. ft. retreat is designed for guests who want
              skiing, restaurants and resort amenities right outside the door.
              <br />
              <br />
              The living area offers a comfortable place to relax after skiing,
              with the flexible second Murphy bedroom folding away when not in use
              to create additional daytime living space.
              <br />
              <br />
              The kitchen includes a stovetop, refrigerator, air fryer and
              combination microwave/convection oven with roasting and baking
              functions, providing everything needed for breakfast, après-ski
              snacks or meals at home.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">2 bedrooms · 2 beds</span>
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
            Stylish king bed, large Smart TV and dedicated workspace. The private
            ensuite features a spacious walk-in shower, new fixtures and a Toto
            Japanese toilet.
            <br />
            <br />
            <strong>Bedroom 2:</strong>
            <br />
            Double Murphy bed that folds conveniently into the wall when not in
            use, allowing the room to function as additional living space during
            the day.
            <br />
            <br />A second full bathroom is located directly off the main living
            area and includes a bathtub and shower.
            <br />
            <br />
            The home accommodates up to 4 guests across two sleeping areas and two
            full bathrooms.
          </p>
        </div>

        <div className="mb-20">
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>SKI-IN/SKI-OUT &amp; BLACKCOMB GONDOLA:</strong>
            <br />
            For ski access, Le Chamois is exceptionally difficult to beat.
            <br />
            <br />
            The Blackcomb Gondola is only about a 2-minute walk from the building,
            putting Blackcomb Mountain practically outside your front door.
            Ski-out access is also approximately two minutes away, making it
            incredibly easy to get onto the mountain in the morning and return home
            after your final run.
            <br />
            <br />
            There is no need to load skis into a vehicle, search for parking at
            the mountain or commute from another neighbourhood. Grab your gear,
            walk outside and be at the lifts within minutes.
            <br />
            <br />A personal ski locker is included with your stay, so equipment
            can remain securely stored and ready for the next mountain day.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>POOL, HOT TUB &amp; GYM:</strong>
            <br />
            Guests have access to Le Chamois&apos; outdoor pool, hot tub and
            fitness centre.
            <br />
            <br />
            After skiing, head back to the building for a soak in the hot tub or
            relax by the pool before walking out into Upper Village for dinner and
            après-ski.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>LOCATION:</strong>
            <br />
            Le Chamois sits directly at the base of Blackcomb Mountain in the
            heart of Upper Village, beside the Fairmont Chateau Whistler and only
            moments from the Blackcomb Gondola.
            <br />
            <br />
            Restaurants, cafés, ski shops and après-ski are all immediately
            nearby, while the main Whistler Village is also an easy walk away.
            <br />
            <br />
            The location offers the best of both worlds: immediate access to
            Blackcomb and the quieter atmosphere of Upper Village, while keeping
            the energy, restaurants, shops and nightlife of Whistler Village close
            enough to enjoy on foot.
            <br />
            <br />
            In summer, Lost Lake, biking and hiking trails, golf and
            Blackcomb&apos;s alpine adventures are also easily accessible.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>PARKING &amp; EV CHARGING:</strong>
            <br />
            One complimentary underground parking space is included with your stay,
            another valuable feature in such a central location.
            <br />
            <br />
            An EV charger is also available in the underground garage for guests
            travelling with an electric vehicle.
            <br />
            <br />
            Because skiing, dining and both Upper Village and Whistler Village are
            accessible on foot, many guests can park when they arrive and use
            their vehicle very little during the stay.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            <strong>GEAR STORAGE:</strong>
            <br />A personal ski locker is included for convenient and secure ski
            and snowboard storage.
            <br />
            <br />A secured bike room is also available, making Le Chamois an
            excellent base for Whistler&apos;s summer biking season.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>LAUNDRY:</strong>
            <br />
            Laundry facilities are shared with the hotel and available for
            approximately $2.50 per load.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guests have private access to the entire apartment for the duration of
            their stay.
            <br />
            <br />
            You will also have access to Le Chamois&apos; outdoor pool, hot tub,
            fitness centre, personal ski locker, secure bike room and underground
            parking garage.
            <br />
            <br />
            One complimentary underground parking space is included, along with
            access to the building&apos;s EV charger.
            <br />
            <br />
            The home uses self check-in, with access instructions provided prior
            to arrival.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00013237
            <br />
            Provincial registration number: PM775035019
          </p>
        </div>
      </div>
    </>
  );
}
