import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function RavensNestSkiInSkiOutViewsDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to Raven&apos;s Nest, a beautifully renovated Whistler chalet
          with breathtaking mountain views, 3 king bedrooms and an additional
          king-bed den. Enjoy ski-in/ski-out access via a short walk to the run,
          then return to your private hot tub on the upper deck off the living
          room. A sauna, gas fireplace, premium kitchen and Sonos sound complete
          the mountain retreat, with Whistler Village close by for dining,
          shopping and apres.
        </p>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[0])}
                alt="Raven's Nest living room"
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
              Located in the Tantalus neighbourhood on Whistler Mountain, this
              home combines a peaceful hillside setting with convenient access
              to the slopes and the main Whistler Village. The nearby ski run is
              approximately 100 metres from your front door via a short walk,
              while the Village is approximately a 15-minute walk or 2-minute
              drive away.
              <br />
              <br />
              With accommodation for eight guests across three king bedrooms and
              a private, enclosed king-bed den, Raven&apos;s Nest is an inviting
              base for families and friends looking for a beautifully finished
              home close to Whistler&apos;s skiing, restaurants and apres-ski.
              <br />
              <br />
              <strong>Beautifully renovated mountain living</strong>
              <br />
              Raven&apos;s Nest has undergone a pristine renovation, pairing
              quality finishes and premium appliances with the warmth of a
              mountain home. The top-floor living area is the heart of the home.
              Gather beside the gas fireplace, watch a film on the large Smart
              TV or enjoy your favourite music through the built-in Sonos sound
              system. Mountain views provide a spectacular backdrop to morning
              coffee, relaxed afternoons and evenings after skiing.
              <br />
              <br />
              The kitchen features premium appliances and everything you need to
              prepare meals at home. A convenient powder room serves the living
              level.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">4 bedrooms · 4 king beds</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">3.5 baths</span>
              </div>
            </div>
            <p className="text-gray-800">
              <strong>Private hot tub on the upper deck</strong>
              <br />
              Step directly from the top-floor living room onto the outdoor
              deck, where your private hot tub awaits. After a day exploring
              Whistler Blackcomb, put away your ski equipment and settle into
              the warm water while taking in the mountain views. With the living
              room just inside, you can move easily between a soak outdoors and
              a cozy evening beside the fireplace.
              <br />
              <br />
              <strong>Ski-in/ski-out access via a short walk</strong>
              <br />
              The nearby ski run is approximately 100 metres from the front
              door. Access involves a short walk that includes stairs, rather
              than skiing directly from the doorstep. Collect your equipment
              from the mudroom, make your way to the nearby run and enjoy a day
              on Whistler Mountain. When the relevant ski access is open, you
              can return via the nearby run and take the short walk back to the
              home.
              <br />
              <br />
              To reach the ski run:
              <br />
              • Walk down the driveway and turn right.
              <br />
              • Continue slightly uphill to the area between units 21 and 22.
              <br />
              • Take the stairs, then continue a short distance to the ski run.
              <br />
              <br />
              Ski-in/ski-out access depends on snow coverage and the relevant
              run being open. The route includes walking and stairs, so it is
              not step-free.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[3])}
                alt="Raven's Nest bedroom"
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
            <p className="text-gray-800 mb-4">
              Sleeps eight across four king beds.
              <br />
              <br />
              <strong>Bedroom 1: Primary king suite</strong>
              <br />
              A king bed, Smart TV and walk-in closet. The ensuite bathroom
              features a double vanity and walk-in shower. The sauna is accessed
              through this bathroom.
              <br />
              <br />
              <strong>Bedroom 2: King suite</strong>
              <br />
              A king bed, storage space and a private ensuite bathroom.
              <br />
              <br />
              <strong>Bedroom 3: King suite</strong>
              <br />
              A king bed, beautiful views, storage space and a private ensuite
              bathroom.
              <br />
              <br />
              <strong>Bedroom 4: Private king-bed den</strong>
              <br />
              This enclosed den has its own door and a king bed, providing a
              private additional sleeping space for two guests. A bathroom is
              located next door, rather than being an ensuite.
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Sauna and apres-ski comfort</strong>
              <br />
              Alongside the outdoor hot tub, Raven&apos;s Nest features a sauna
              accessed through the primary suite&apos;s ensuite bathroom. After
              skiing, choose a sauna session, a soak on the upper deck or a
              quiet evening beside the gas fireplace.
              <br />
              <br />
              <strong>Garage parking, ski storage and laundry</strong>
              <br />
              Garage parking is available at the home. The mudroom includes ski
              storage and a boot dryer. An in-home washer and dryer are also
              available during your stay.
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
            <h2 className="text-2xl font-bold">Location</h2>
          </div>
          <p className="text-gray-800 max-w-4xl mb-6">
            Raven&apos;s Nest sits in the Tantalus neighbourhood on Whistler
            Mountain. The main Village is approximately a 15-minute walk or
            2-minute drive away, giving you convenient access to restaurants,
            cafes, shops, equipment rentals and apres-ski. Once in the Village,
            the pedestrian Village Stroll makes exploring on foot
            straightforward.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            For ski days, the nearby run provides your slope access when
            conditions permit. For dining, shopping and evenings out, the
            Village is close enough to enjoy throughout your stay. The return
            walk to Raven&apos;s Nest involves an uphill climb, so a taxi or
            drive is a convenient alternative after dinner, when carrying
            equipment or during snowy weather. Travel times are approximate and
            vary with conditions and walking pace.
          </p>
          <p className="text-gray-800 max-w-4xl">
            Guests have access to the entire home.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00013360
          </p>
        </div>
      </div>
    </>
  );
}
