import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function HeronViewsWhistlerVillageDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to Heron Views, a beautiful and inviting traditional log
                    chalet in the prestigious Blueberry Hill neighborhood. This
                    spectacular property offers breathtaking views of the Whistler
                    Golf Course, Blackcomb, and Whistler Mountain. Spanning 7,800 sq
                    ft, this spacious retreat sleeps 11 guests in 5 large bedrooms and
                    5.5 baths.
                    <br />
                    <br />
                    Just a 3–4-minute drive to the village and slopes, or a 15-minute
                    walk through trails, with a local bus stop steps away. Enjoy AC
                    during summer, a rare find in Whistler.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[2])}
                          alt="Heron Views Interior"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover"
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
                        Outdoor enthusiasts will love the two newly renovated modern
                        and spacious decks, with 2,400 sq ft of space, providing ample
                        room for entertaining and taking in breathtaking views. Enjoy
                        the 14-person hot tub, fire table, and BBQ for unforgettable
                        gatherings.
                      </p>
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center">
                          <FaBed className="text-gray-600 mr-2" size={20} />
                          <span className="text-gray-800">5 Bedrooms</span>
                        </div>
                        <div className="flex items-center">
                          <FaBath className="text-gray-600 mr-2" size={20} />
                          <span className="text-gray-800">5.5 Bathrooms</span>
                        </div>
                      </div>
                      <p className="text-gray-800">
                        Inside, discover soaring ceilings, exposed beams, a modern
                        kitchen with Miele appliances, and a dining room with valley
                        views. The home features a grand living room, five bedrooms, a
                        theater room, and a unique bar area with aquarium, delivering
                        mountain luxury at its finest.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
