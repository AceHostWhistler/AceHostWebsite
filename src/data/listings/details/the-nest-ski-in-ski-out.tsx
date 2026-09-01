import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function TheNestSkiInSkiOutDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to The Nest, a newly renovated 5-bedroom mountain home in
                    Whistler’s peaceful Nordic neighbourhood, ideally positioned
                    between Creekside and Whistler Village. Enjoy mountain views,
                    beautiful sunsets, spacious living areas, high-end furnishings
                    and a private hot tub after a day on the slopes. Ski access is
                    only a short walk away, with the option to ski back toward the
                    home, while Creekside Village, restaurants, cafés, groceries and
                    the gondola are just a few minutes away by car.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[4])}
                          alt="The Nest Interior"
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
                        The Nest is designed for families and groups who want plenty
                        of space while staying close to the mountain. The open-concept
                        main living area features high-end furnishings, a gas
                        fireplace and generous seating, creating a comfortable
                        gathering space after a day of skiing or exploring Whistler.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Step outside to the private hot tub and take in the
                        surrounding mountain setting and evening sunsets. Multiple
                        patios and large windows throughout the home bring in natural
                        light and make the most of the alpine surroundings.
                      </p>
                      <p className="font-bold mb-2">
                        LOCATION &amp; SKI ACCESS
                      </p>
                      <p className="text-gray-800 mb-6">
                        The Nest is located in Nordic, a peaceful residential
                        neighbourhood positioned between Creekside and Whistler
                        Village. Ski access to the Dave Murray trail is approximately
                        a 7-minute walk from the home, with the ability to ski toward
                        Creekside and return close to the property.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Creekside Village is approximately a 3-minute drive away and
                        offers the Creekside Gondola, groceries, cafés, restaurants,
                        ski rentals and après-ski options. Whistler Village is
                        approximately a 7-minute drive away. Local bus connections
                        are also available for guests who prefer not to drive.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Wolverine Crescent/31 - 20251220 A7M4 01 A1_00918.jpg")}
                          alt="The Nest Bedroom"
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
                        <h2 className="text-2xl font-bold">BEDROOM LAYOUT:</h2>
                      </div>

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">
                          Bedroom 1, Primary Suite:
                        </span>
                        <br />
                        King bed, floor-to-ceiling windows, private patio and gas
                        fireplace. The spacious ensuite bathroom includes a bathtub,
                        large walk-in shower and double vanity.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2:</span>
                        <br />
                        King bed with private patio access and ensuite bathroom
                        featuring both a bathtub and shower.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3:</span>
                        <br />
                        King bed with private ensuite bathroom featuring a bathtub
                        and shower.
                      </p>
                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4:</span>
                        <br />
                        Two twin beds. This bedroom shares a full bathroom located
                        just outside the room with Bedroom 5.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 5:</span>
                        <br />
                        King bed plus one twin bed, providing a flexible sleeping
                        arrangement for families or groups. This bedroom also
                        features a gas fireplace and shares the nearby full bathroom
                        with Bedroom 4.
                      </p>
                      <p className="font-bold mb-2">MAIN LIVING LEVEL:</p>
                      <p className="mb-4">
                        A powder room is conveniently located beside the main living
                        area.
                      </p>
                      <p className="font-bold mb-2">PARKING:</p>
                      <p className="mb-4">
                        The driveway accommodates two vehicles. Additional vehicles
                        can be parked using the garage, allowing approximately 3–4
                        vehicles between the driveway and garage depending on vehicle
                        size. One additional visitor parking space may also be
                        available with the supplied parking pass.
                      </p>
                    </div>
                  </div>

                  {/* Location Section */}
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
                      <h2 className="text-2xl font-bold">
                        Neighbourhood highlights
                      </h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-8">
                      The best part of this chalet is the location! Nordic is a real
                      gem. It’s just a short distance from both Creekside and Whistler
                      Village! Enjoy just a 7 minute stroll to access the Dave Murray
                      Ski trail and ski out to the Creekside Gondola and village. The
                      house is just a 3-minute drive to Creekside Village or a 17
                      minutes walk. For Whistler Village, the drive is 7 minutes. Easy
                      access to the lakes in the Summer. Stroll into Creekside and
                      enjoy delicious coffee and pastries at Bred Bakery and Rock-It
                      Coffee co, the creekside market for groceries, BC liquor stores,
                      and Dusty’s for Après. Great restaurants Rim Rock, Red door,
                      Creekbread and Nita Lake lodge located in Creekside. This is the
                      ideal home for your holiday!
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Getting around</h2>
                    <p className="text-gray-800 max-w-4xl">
                      Ride the local bus if you don’t want to use your car. For
                      Whistler Village it’s an 8-minute walk to the Eva Lake Road bus
                      stop, catch the 20, 21, or 25 and the journey is only 7 minutes.
                      For Creekside village walk 9 minutes to Highlands bus stop and
                      catch the 20 and 21 buses. The buses come every 10 or 15
                      minutes.
                    </p>
                  </div>
                  
                  {/* Exterior View Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Wolverine Crescent/66 - 20251220 A7M4 01 A1_00781.jpg")}
                          alt="The Nest Exterior"
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
                              d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Guest access</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        Guests have full access to the entire home, including garage
                        parking, private hot tub, and all amenities.
                      </p>
                      <h2 className="text-2xl font-bold mb-4">
                        Other things to note
                      </h2>
                      <p className="text-gray-800">
                        **Utilities fully included! Heat, gas, water, Hot tub weekly
                        cleaning, wifi, etc.**
                      </p>
                    </div>
                  </div>

                  <div className="mb-16 border-t border-gray-200 pt-8">
                    <h2 className="text-2xl font-bold mb-4">
                      Registration details
                    </h2>
                    <p className="text-gray-800">
                      Municipal registration number: 00011803
                    </p>
                  </div>
                </div>
    </>
  );
}
