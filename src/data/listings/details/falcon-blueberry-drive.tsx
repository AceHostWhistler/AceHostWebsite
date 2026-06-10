import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function FalconBlueberryDriveDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Cozy chalet in an amazing location! Beautiful views of the
                    mountain in the prestigious, quiet and family orientated Blueberry
                    Hill. Perfect for a large group or one family.{" "}
                    <strong>
                      ***New Outdoor Wood Barrel Sauna & Hot tub for ultimate relaxation!*** Easy to use, and a great way to relax after a long day.
                    </strong>{" "}
                    25 minute walk to the village through the most beautiful trails or catch the local
                    bus just two steps away from the front door, which comes by every
                    15 minutes.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[1]}
                          alt="Falcon Blueberry Drive Interior"
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
                      <p className="text-gray-800">
                        As you enter through the unique West Coast native hand-carved
                        front door, you'll be greeted by a heated slate entrance.
                        This remarkable property boasts 7 spacious bedrooms, providing
                        ample space and comfort for your stay, with 9 stylish beds and
                        3.5 well-appointed bathrooms. Find comfort and warmth by the
                        crackling wood-burning natural fireplace in the spacious
                        living room, creating an inviting and welcoming ambiance for
                        relaxing after a day of enjoying Whistler's outdoors.
                        Savour the outdoors with a generous and inviting outdoor
                        dining space with a spacious deck, a dining table, and a
                        barbecue. There is plenty of space in the driveway to fit 4-5
                        vehicles. The garage is not available for use in winter, the
                        garage is available for up to 7 bikes as storage only in the
                        Summer. Not large enough for a vehicle. Whether you opt for al
                        fresco dining, unwind in the hot tub, or gather around the
                        fireplace, this exceptional property offers the perfect spaces
                        for memorable moments.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/Falcon/Outdoor shot falcon.png"
                          alt="Falcon Blueberry Drive Bedroom"
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
                        <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                      </div>

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Master Bedroom 1-</span> The
                        spacious master bedroom has a gorgeous king bed and is located
                        on the top floor, with an ensuite large bath and shower, walk
                        in wardrobe and private deck with beautiful mountain views.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2-</span> At the other
                        end of the floor to the master, this beautiful bright and
                        spacious room has a queen bed and large windows allowing for
                        ample natural light.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3-</span> A stylish
                        queen bed and vast windows with gorgeous views, the room is
                        the same size as bedroom 3. Both bedrooms 2 and 3 share a
                        bathroom with a shower and bath tub.
                      </p>

                      <p className="font-bold mb-2">MID LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4-</span> A lovely large
                        bedroom equipped with a gorgeous queen bed, with a sofa for
                        lounging and desk space. Adjacent to the room is a powder
                        bathroom and the outdoor hot tub is accessed through this room
                        on the back deck.
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 5-</span> A stylish king
                        bed in this inviting and cozy space.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 6-</span> Twin bunk bed
                        + twin bed. (3 total beds).
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 7-</span> Has a king
                        bed.
                      </p>
                      <p className="mb-4">
                        All three bedrooms share a spacious bathroom, 1 sink, and a
                        large shower.
                      </p>
                      <p className="mb-4 italic">* No pets allowed*</p>
                    </div>
                  </div>

                  {/* Exterior Views Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/Falcon/Cover photo Falcon.png"
                          alt="Falcon Blueberry Drive Exterior"
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
                              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Exterior Views</h2>
                      </div>
                      <p className="text-gray-800">
                        Nestled in the prestigious Blueberry Hill neighborhood, this beautiful chalet offers stunning mountain views and a peaceful setting. The spacious exterior features a generous deck perfect for outdoor dining and entertaining.
                      </p>
                      <p className="text-gray-800 mt-4">
                        Enjoy the natural surroundings and mountain air from the comfort of your private outdoor space. The property's location offers the perfect balance of tranquility and convenience, with easy access to all that Whistler has to offer.
                      </p>
                    </div>
                  </div>

                  {/* Living Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/Falcon/Outdoor shot falcon zoomed out.png"
                          alt="Falcon Blueberry Drive Living Space"
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
                              d="M20 4v16H4V4h16m2-2H2v20h20V2zM18 6h-7v4h7V6zm-9 0H6v12h3V6zm9 6h-7v6h7v-6z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Living Space</h2>
                      </div>
                      <p className="text-gray-800">
                        The inviting interior features an open-concept design with plenty of natural light. The spacious living area is perfect for gathering with family and friends, with comfortable furnishings and a warm, welcoming atmosphere.
                      </p>
                      <p className="text-gray-800 mt-4">
                        High ceilings and large windows create a sense of space and connection to the beautiful mountain surroundings. The wood-burning fireplace serves as a cozy focal point, perfect for relaxing after a day of outdoor adventures.
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
                      <h2 className="text-2xl font-bold">Location</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      The best part of this chalet is the location! A scenic 25-minute
                      stroll around the Whistler Golf course brings you straight into
                      Whistler Village. Alternatively, it's a 3-4 minute drive to
                      the village, or hop on the local bus a stone's throw away
                      from the front door, running every 10-15 minutes. The drive to
                      the village is just 3 minutes away. This is the ideal home for
                      your holiday!
                    </p>
                  </div>
                </div>
    </>
  );
}
