import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function Rare3BedroomWhistlerVillageWalkToHillDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    A rare gem in the heart of Whistler Village! This 3-bedroom chalet-style retreat offers two oversized wraparound balconies with breathtaking mountain views, your own private hot tub (the only one in the entire complex), and 2 guaranteed underground parking spots.
                    <br /><br />
                    Spread across two spacious floors, you'll enjoy the cozy charm of a log chalet paired with modern luxury furnishings, a fireplace, and unbeatable convenience, all just steps from restaurants, lifts, and shops.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col mb-20">
                    <div className="flex flex-col md:flex-row mb-10">
                      <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                        <div className="relative aspect-[4/3] mb-2">
                          <Image
                            src={photos[0]}
                            alt="Rare 3-bedroom Interior"
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
                          Step into a true Whistler classic reimagined for modern comfort. This spacious two-level home features an inviting open-concept living and dining area, a warm indoor fireplace, and two massive wraparound balconies perfect for morning coffee or après-ski lounging.
                          <br /><br />
                          The highlight? Your own private hot tub with unobstructed Whistler Mountain views, a feature you won't find anywhere else in this complex.
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center">
                            <FaBed className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">3 Bedrooms</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">3 Bathrooms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional photos in description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photos[8]}
                          alt="Living space"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photos[16]}
                          alt="Hot tub view"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photos[24]}
                          alt="Bedroom"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Bedroom Layout</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                          <li>Primary Bedroom: King bed</li>
                          <li>Second Bedroom: Queen bed</li>
                          <li>Third Bedroom: Full bed</li>
                          <li>Living Room: Queen pullout sofa</li>
                        </ul>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                            src={photos[33]}
                            alt="Primary bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-800 mb-6">
                          With luxury touches throughout, this home offers everything you need for an unforgettable Whistler stay, style, comfort, and location all in one.
                        </p>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                            src={photos[37]}
                            alt="Second bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                          <li>Private hot tub (the only one in the entire complex)</li>
                          <li>Two oversized wraparound balconies</li>
                          <li>Breathtaking mountain views</li>
                          <li>2 guaranteed underground parking spots</li>
                          <li>Two spacious floors</li>
                          <li>Cozy fireplace</li>
                          <li>Modern luxury furnishings</li>
                          <li>Steps from restaurants, lifts, and shops</li>
                        </ul>
                      </div>
                      <div className="md:col-span-1">
                        <div className="relative aspect-[3/4] h-full">
                          <Image
                            src={photos[12]}
                            alt="Balcony view"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Location</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-gray-800">
                          Located in the heart of Whistler Village, this property offers unbeatable convenience. You'll be just steps away from the best restaurants, shops, and most importantly, the ski lifts.
                          <br /><br />
                          Enjoy the perfect balance of village energy and mountain tranquility, with easy access to all that Whistler has to offer while still having your own private retreat to return to.
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <div className="relative aspect-[3/4] h-full">
                          <Image
                            src={photos[20]}
                            alt="View from property"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registration Details Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Registration Details</h2>
                    <p className="text-gray-800">
                      <strong>Municipal registration number:</strong> 00015503<br />
                      <strong>Provincial registration number:</strong> PM526794239
                    </p>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
