import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function SquamishRetreatWithTheBestViewDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Stylish Squamish house with breathtaking views! Your house is a 3000 sqft 3BR/3BA located in the heart of Squamish, BC. Squamish is home to legendary hikes, mountain biking, and skiing with Whistler only a quick 45-min drive away. New-ish house with a ski/mountain bike mud room, sauna, games room, free parking, dedicated workspace and multiple patios looking towards the mountains make the house unique and perfect for a work trip or vacation with family or friends.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col mb-20">
                    <div className="flex flex-col md:flex-row mb-10">
                      <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                        <div className="relative aspect-[4/3] mb-2">
                          <Image
                            src={getGalleryPhotoSrc(photos[0])}
                            alt="Squamish Retreat Interior"
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
                        <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                          <li>3000 sqft 3BR/3BA</li>
                          <li>2 Patios (500-1000 sqft)</li>
                          <li>Located in Suqmish!</li>
                          <li>5 min drive to Squamish</li>
                          <li>Breathtaking view!</li>
                          <li>Amazing amenities (sauna, games room, ski/mountain bike storage)</li>
                          <li>Safe and secure neighborhood</li>
                          <li>Free parking</li>
                        </ul>
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
                          src={getGalleryPhotoSrc(photos[4])}
                          alt="Living space"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getGalleryPhotoSrc(photos[5])}
                          alt="Kitchen area"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getGalleryPhotoSrc(photos[8])}
                          alt="Mountain view"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Highlights Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Highlights</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Kitchen & Living Areas</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Kitchen - Newly finished w/ stainless steel appliances and modern counters. Includes gas stove, oven, microwave, dishwasher, and all the cookware needed to make a gourmet meal.</li>
                          <li>Patios - Enough room to relax and soak up the sun. This is a great place to tan, read a book, or eat your sunset meal!</li>
                          <li>Entertainment - Ultra High Speed Fibre Optic WIFI (300mbps) and 1 Smart TV (games room), 1 Smart TV in the Master Bedroom, 1 Smart TV in Second Bedroom, 1 Smart TV in Third Bedroom.</li>
                          <li>Remote Workspace - Ergonomic chair, and monitor for connecting to a laptop. The perfect set-up for a remote worker.</li>
                        </ul>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                            src={getGalleryPhotoSrc(photos[10])}
                            alt="Kitchen area"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Bedrooms & Bathrooms</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Master Bedroom - King size, high-end mattress with new linens.</li>
                          <li>Master Bathroom - Newly finished bath tub and shower.</li>
                          <li>Second Bed - Queen size, high-end mattress with new linens. Large closet for all your clothing needs.</li>
                          <li>Second Bathroom - Newly finished bathroom featuring walk-in shower.</li>
                          <li>Third Bed - Queen size, high-end mattress with new linens. Large closet for all your clothing needs.</li>
                          <li>Third Bathroom - Newly finished bathroom.</li>
                          <li>Laundry: Washer and dryer with all the detergent and fabric softener you'll need.</li>
                        </ul>
                        <p className="mt-4 text-gray-800">*Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner, and body wash is provided.</p>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                            src={getGalleryPhotoSrc(photos[12])}
                            alt="Master bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guest Access Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Guest Access</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-gray-800">
                          Remote access through your phone.
                          <br /><br />
                          1. After check-in I will ask for you phone # to provide you with your unique check in code
                          <br />
                          2. Your phone will unlock the key box
                          <br />
                          3. Use the keys for your stay and enjoy!
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <div className="relative aspect-[3/4] h-full">
                          <Image
                            src={getGalleryPhotoSrc(photos[15])}
                            alt="House exterior"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Things to Note Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Other Things to Note</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-gray-800">
                          Please ensure that you carefully read and understand the House Rules.
                          <br /><br />
                          Smoking/drugs in unit or in the common areas of the building are NOT allowed.
                          <br /><br />
                          Pets are NOT allowed.
                          <br /><br />
                          All-out parties and binge-drinking types of events are NOT allowed. I live in a nice building with quiet neighbors and would like to keep it that way.
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <div className="relative aspect-[3/4] h-full">
                          <Image
                            src={getGalleryPhotoSrc(photos[18])}
                            alt="Mountain view"
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
                      <strong>Municipal registration number:</strong> 00010283<br />
                      <strong>Provincial registration number:</strong> H328839808
                    </p>
                    <p className="mt-4 text-gray-800">
                      NOTE: This is a LEGAL Airbnb with a LEGAL license. There is NO concern with you booking here as per the provincial changes. Thank you :)
                    </p>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
