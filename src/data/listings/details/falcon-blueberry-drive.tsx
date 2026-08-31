import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function FalconBlueberryDriveDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Falcon is a spacious 7-bedroom Blueberry Hill chalet for up to 15
                    guests, combining a peaceful mountain setting with easy access to
                    Whistler Village. Central air conditioning keeps the home
                    comfortable in summer, while the private hot tub, outdoor barrel
                    sauna, and generous deck create an inviting place to unwind
                    year-round. The Village is about a 25-minute walk, a 3–4-minute
                    drive, or a convenient ride on the Route 6 local bus.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[1])}
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
                        3.5 well-appointed bathrooms, plus central air conditioning.
                        Find comfort and warmth by the
                        crackling wood-burning natural fireplace in the spacious
                        living room, creating an inviting and welcoming ambiance for
                        relaxing after a day of enjoying Whistler's outdoors.
                        Savour the outdoors with a generous and inviting outdoor
                        dining space with a spacious deck, a dining table, and a
                        barbecue. Whether you dine al fresco, unwind in the hot tub or
                        barrel sauna, or gather around the fireplace, the home offers
                        comfortable spaces for memorable group stays.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Falcon/Outdoor shot falcon.png")}
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
                        spacious room has a king bed and large windows allowing for
                        ample natural light.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3-</span> A stylish
                        king bed and vast windows with gorgeous views. This room is
                        the same size as Bedroom 2. Both bedrooms 2 and 3 share a
                        bathroom with a shower and bath tub.
                      </p>

                      <p className="font-bold mb-2">MID LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4-</span> A lovely large
                        bedroom equipped with a gorgeous king bed, with a sofa for
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
                      <p className="mb-4 italic">
                        One pet is allowed with advance notice; an additional pet fee
                        applies.
                      </p>
                    </div>
                  </div>

                  {/* Exterior Views Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Falcon/Cover photo Falcon.png")}
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
                          src={getGalleryPhotoSrc("/photos/properties/Falcon/Outdoor shot falcon zoomed out.png")}
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
                        High ceilings and large windows create a sense of space and connection to the beautiful mountain surroundings. The wood-burning fireplace serves as a cozy focal point, while central air conditioning provides summer comfort.
                      </p>
                    </div>
                  </div>

                  {/* Guest Access Section */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Guest Access</h2>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Guests have private access to the entire home, hot tub, sauna,
                      deck, and driveway, which accommodates 4–5 vehicles. The garage
                      may be used to store up to 7 bikes or ski gear, but it cannot
                      accommodate a vehicle.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">Additional Services</h2>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Ski-pass booking and delivery can be arranged when passes are
                      purchased through AceHost in advance.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      Municipal registration number: 00013305
                      <br />
                      Provincial registration number: PM665790127
                    </p>
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
                      Blueberry Hill offers a quiet residential setting close to
                      Whistler Village. Follow the scenic route by the Whistler Golf
                      Course for an approximately 25-minute walk, drive to the Village
                      in about 3–4 minutes, or take the Route 6 local bus from the
                      nearby stop.
                    </p>
                  </div>
                </div>
    </>
  );
}
