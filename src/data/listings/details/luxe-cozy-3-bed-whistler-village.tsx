import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function LuxeCozy3BedWhistlerVillageDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to our luxurious 3-bedroom, 3-bathroom townhome located in
                    the heart of Blackcomb, Whistler! This end unit offers an ideal
                    mountain retreat for those looking for a unique & cozy log chalet
                    feel. A peaceful location with easy access to the biking/hiking
                    trails at Lost Lake and snowshoe/cross-country trails during the
                    winter. SKI In SKI Out home. Walking distance to the main Whistler
                    Village and ski lifts.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[4])}
                          alt="Luxe-Cozy Whistler Village Interior"
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
                        Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                        townhome nestled in Blackcomb, Whistler. This end unit
                        promises the ultimate retreat with serene surroundings and
                        direct access to the Lost Lake biking and hiking trails. In
                        winter, enjoy the convenience of ski-in access (snow
                        conditions permitting) or hop on the free shuttle to the
                        slopes.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Step inside to find a spacious, inviting living area featuring
                        a cozy wood-burning fireplace and upscale furnishings. The
                        fully equipped kitchen and dining area are perfect for family
                        meals, and the private patio with BBQ grill offers delightful
                        al fresco dining. After a day of adventure, relax in your
                        private hot tub or explore the nearby trails.
                      </p>
                      <p className="text-gray-800">
                        Our townhome comfortably accommodates up to 8 guests, with a
                        king bed in the master suite, a queen bed in the second
                        bedroom, and two singles in the third. Additional amenities
                        include EV charging in the garage (note: adaptor not
                        included). For your comfort and convenience, please note that
                        we do not allow pets, smoking, or parties.
                      </p>
                    </div>
                  </div>

                  {/* Guest Access Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[9])}
                          alt="Luxe-Cozy Whistler Village Living Area"
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
                              d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Guest Access</h2>
                      </div>

                      <p className="text-gray-800 mb-6">
                        Escape to mountain bliss in our stunning 3-bedroom, 3-bathroom
                        townhome nestled in Blackcomb, Whistler. This end unit
                        promises the ultimate retreat with serene surroundings and
                        direct access to the Lost Lake biking and hiking trails. In
                        winter, enjoy the convenience of ski-in access (snow
                        conditions permitting) or hop on the free shuttle to the
                        slopes.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Step inside to find a spacious, inviting living area featuring
                        a cozy wood-burning fireplace and upscale furnishings. The
                        fully equipped kitchen and dining area are perfect for family
                        meals, and the private patio with BBQ grill offers delightful
                        al fresco dining. After a day of adventure, relax in your
                        private hot tub or explore the nearby trails.
                      </p>
                      <p className="text-gray-800">
                        Our townhome comfortably accommodates up to 8 guests, with a
                        king bed in the master suite, a queen bed in the second
                        bedroom, and two singles in the third. Additional amenities
                        include EV charging in the garage (note: adaptor not
                        included). For your comfort and convenience, please note that
                        we do not allow pets, smoking, or parties.
                      </p>
                    </div>
                  </div>

                  {/* Other Things to Note Section */}
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
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Other Things to Note</h2>
                    </div>
                    <ul className="list-disc pl-5 mb-6 text-gray-800">
                      <li className="mb-2">No pets allowed</li>
                      <li className="mb-2">No smoking</li>
                      <li className="mb-2">No party crowds</li>
                    </ul>
                    <p className="text-gray-800 font-medium mb-2">
                      Registration number
                    </p>
                    <p className="text-gray-800">00011803</p>
                  </div>
                </div>
    </>
  );
}
