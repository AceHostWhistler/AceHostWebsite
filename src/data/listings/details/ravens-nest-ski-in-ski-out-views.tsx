import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function RavensNestSkiInSkiOutViewsDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Escape to luxury in this newly renovated 3-king bedroom chalet in
                    Tantalus, offering ski-in/ski-out convenience and breathtaking
                    mountain views. Each bedroom features a plush brand-new bed for
                    ultimate comfort. Enjoy top-of-the-line finishings, a private hot
                    tub, and a relaxing sauna after a day on the slopes. With garage
                    parking and a prime central location, this home is perfect for
                    both adventure and relaxation. Experience mountain living at its
                    finest!
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[0])}
                          alt="Raven's Nest Interior"
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
                        Experience luxury in this newly renovated, high-end home.
                        Designed for comfort and style, it features built-in Sonos
                        surround sound and state-of-the-art appliances for a truly
                        elevated stay.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <span className="font-bold">
                          SKI IN SKI OUT Instructions:
                        </span>
                        <br />
                        • Walk down the driveway and take a right.
                        <br />
                        • Head slightly uphill to the area between units 21 and 22,
                        where you'll find a set of stairs.
                        <br />
                        • Walk up the stairs and continue a short distance to reach
                        the ski run.
                        <br />• The ski run is approximately 100 meters from the front
                        door (give or take).
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[3])}
                          alt="Raven's Nest Bedroom"
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

                      <p className="mb-4">
                        <span className="font-bold">Top floor:</span>
                        <br />
                        • Living room with gas fireplace and large Smart TV
                        <br />
                        • Dining room
                        <br />
                        • Kitchen
                        <br />
                        • Office space/TV room with large Smart TV
                        <br />
                        • Powder room
                        <br />• Back deck with hot tub
                      </p>
                      <p className="mb-4">
                        <span className="font-bold">Main floor:</span>
                        <br />
                        • Bedroom 1 (Master) with king bed, Smart TV, ensuite bathroom
                        with double vanity, walk-in shower, and sauna.
                        <br />
                        • Bedroom 2<br />
                        • Bedroom 3<br />
                        • Sauna through master bathroom
                        <br />• Washer & dryer
                      </p>
                      <p className="mb-4">
                        <span className="font-bold">Bottom floor:</span>
                        <br />
                        • Mud room with ski storage & boot dryer
                        <br />• Garage
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
                    <p className="text-gray-800 max-w-4xl mb-6">
                      This beautiful chalet is located in the exclusive Tantalus
                      neighborhood of Whistler, offering a perfect blend of privacy
                      and convenience with ski-in/ski-out access to the slopes.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      With its central location, you'll have easy access to all
                      of Whistler's attractions, dining options, and activities.
                      After a day of mountain adventures, return to your private
                      sanctuary with breathtaking mountain views.
                    </p>
                  </div>
                </div>
    </>
  );
}
