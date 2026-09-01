import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillagePenthouseDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to this Whistler Village penthouse, a 2-level alpine retreat
          steps from the gondolas and surrounded by the best of the Village.
          High ceilings, exposed log beams, a stone fireplace and mountain views
          create a true Whistler atmosphere, while your private balcony hot tub
          is perfect after a day on the slopes. Whistler Grocery Store and BC
          Liquor are directly downstairs, top restaurants are steps away, and
          free parking is included, so once you arrive, you can walk almost
          everywhere.
        </p>

        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={getGalleryPhotoSrc(photos[2])}
                  alt="Hearthstone penthouse interior"
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
                Welcome to a true Whistler ski retreat in one of the most
                convenient locations in the Village. Hearthstone Lodge puts you
                just moments from the Whistler and Blackcomb gondolas, making
                morning ski days incredibly easy. Grab your gear, walk out the
                door and be at the lifts within minutes, then return after your
                final run to your own private hot tub in the heart of Whistler
                Village.
                <br />
                <br />
                The 2-level penthouse has the warmth and character guests look
                for in a classic Whistler ski chalet, with soaring ceilings,
                exposed log beams, a stone fireplace, skylights and mountain
                views. After a full day on the slopes, gather around the
                fireplace, relax in the living room or step onto the balcony for
                a private hot-tub soak.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <FaBed className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">2 bedrooms · 4 beds</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">2 baths</span>
                </div>
              </div>
              <p className="text-gray-800">
                <strong>SKI ACCESS &amp; LOCATION:</strong>
                <br />
                For skiers, this is one of the home&apos;s biggest advantages.
                You are staying directly in Whistler Village with exceptionally
                easy access to both Whistler and Blackcomb mountains. The
                gondolas and ski lifts are only a short walk through the Village,
                making it easy to head out in ski gear in the morning, come back
                to the property during the day if needed, and walk home after
                skiing without arranging transportation.
                <br />
                <br />
                The location gives you much of the convenience guests look for
                in a ski-in/ski-out stay, while also putting the restaurants,
                shopping and après-ski of Whistler Village directly outside your
                door. Once your vehicle is parked, there is very little reason
                to use it during your stay.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 max-w-4xl">
                Primary Bedroom:
                <br />
                King bed plus a single pullout bed.
                <br />
                <br />
                Bedroom 2:
                <br />
                Queen bed.
                <br />
                <br />
                Living Room:
                <br />
                Double pullout sofa bed for additional sleeping space.
                <br />
                <br />
                The home accommodates up to 7 guests across 2 bedrooms and 4
                beds.
                <br />
                <br />
                <strong>BATHROOMS:</strong>
                <br />
                Two full bathrooms are available, each with a shower, making the
                layout convenient for families and groups.
                <br />
                <br />
                <strong>KITCHEN &amp; DINING:</strong>
                <br />
                The home includes a fully equipped kitchen for preparing meals
                during your stay, with dining space for up to 6 guests. With the
                grocery store directly downstairs, stocking the kitchen could not
                be much easier.
              </p>
            </div>
            <div>
              <p className="text-gray-800 mb-6">
                <strong>PRIVATE HOT TUB:</strong>
                <br />
                After skiing, step directly onto your private balcony and into
                your own professionally maintained hot tub. There are few better
                ways to finish a Whistler ski day than coming home, putting the
                gear away and soaking outside without having to leave the
                property again.
                <br />
                <br />
                <strong>PARKING &amp; GEAR STORAGE:</strong>
                <br />
                One complimentary parking space is included in the Rainbow
                Parkade directly below the Village. The parkade clearance is
                approximately 6&apos;10&quot;. Additional paid parking is
                available nearby if your group is travelling with another
                vehicle.
                <br />
                <br />
                Guests also have access to secure ski and bike storage in the
                parkade, making it easy to keep mountain equipment safely stored
                between adventures.
                <br />
                <br />
                <strong>SUMMER A/C:</strong>
                <br />
                Air conditioning is provided in the main living area during
                warmer periods. The cool air flows toward the bedrooms,
                particularly as Whistler temperatures drop during the evening, but
                there are no dedicated A/C units inside the bedrooms.
              </p>
              <div className="relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[19])}
                  alt="Hearthstone private hot tub"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Guests have private access to the entire two-level penthouse for the
            duration of their stay, including the private balcony and private hot
            tub. One complimentary parking space is included in the underground
            parkade, along with secure ski and bike storage for your equipment.
            The building entrance and suite use keyless access, making check-in
            easy and allowing your group to come and go throughout the stay.
          </p>
          <p className="text-gray-800 max-w-4xl">
            <strong>ACCESSIBILITY &amp; STAIRS:</strong>
            <br />
            Please note that Hearthstone Lodge does not have an elevator. The
            suite is located on the third floor and guests must walk up three
            flights of stairs to reach it. There is also one additional flight
            of stairs inside the two-level home, so guests should be comfortable
            with stairs before booking.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00012619
            <br />
            Provincial registration number: H213461779
          </p>
        </div>
      </div>
    </>
  );
}
