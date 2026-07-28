import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function CozyLakefrontWhistlerCondoMountainViewDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Stylish top-floor 2 BDR/2BA + pull out living room bed, located at the prestigious Nicklaus North Golf Course. Recently updated with modern décor, high ceilings, and stunning lake and mountain views from every room.
                  </p>
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Step outside to enjoy cross-country skiing, biking, and lakeside walks, or dine at Table 19, known for Whistler's best fondue, happy hour, lunch & dinner. In summer, golf steps from your door, all just a 7-minute drive to Whistler Village!
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[1])}
                          alt="Cozy Lakefront Condo Interior"
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
                      <div className="space-y-4">
                        <p className="text-gray-800">• 1000 sqft 2BR/2BA</p>
                        <p className="text-gray-800">• Patio (200 sqft)</p>
                        <p className="text-gray-800">• Located at Nicklaus North in Whistler!</p>
                        <p className="text-gray-800">• 7 min drive to Whistler Village</p>
                        <p className="text-gray-800">• Breathtaking view!</p>
                        <p className="text-gray-800">• Amazing outdoor amenities (hike, walk, cross country ski, mountain bike, lakefront, golf, disc golf)</p>
                        <p className="text-gray-800">• Safe and secure neighborhood</p>
                        <p className="text-gray-800">• Free underground parking space. Plenty of free outdoor parking</p>
                      </div>
                    </div>
                  </div>

                  {/* Highlights Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Nick North 2-Bed/03 - 20251006 A7M4 03 A1_03258-Edit.jpg")}
                          alt="Cozy Lakefront Condo Kitchen"
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
                        <h2 className="text-2xl font-bold">Highlights</h2>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Kitchen</p>
                          <p className="text-gray-800">All appliances and plenty of counterspace for cooking. Includes stove, oven, microwave, dishwasher, and all the cookware needed to make a gourmet meal.</p>
                        </div>
                        
                        <div>
                          <p className="font-medium">Patio</p>
                          <p className="text-gray-800">Enough room to relax and soak up the sun. This is a great place to soak up the view, read a book, or watch golfers drive into the fairway!</p>
                        </div>

                        <div>
                          <p className="font-medium">Master Bedroom</p>
                          <p className="text-gray-800">King size, high-end mattress with new linens and a large walk-in closet</p>
                        </div>

                        <div>
                          <p className="font-medium">Master Bathroom</p>
                          <p className="text-gray-800">Bath tub and shower and plenty of towels.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Amenities Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Nick North 2-Bed/07 - 20251006 A7M4 03 A1_03439.jpg")}
                          alt="Cozy Lakefront Condo Bedroom"
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
                        <h2 className="text-2xl font-bold">Additional Amenities</h2>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <p className="font-medium">Second Bedroom</p>
                          <p className="text-gray-800">Two twin beds, mattresses with new linens. Large closet for all your clothing needs.</p>
                        </div>

                        <div>
                          <p className="font-medium">Second Bathroom</p>
                          <p className="text-gray-800">Bathroom featuring walk-in shower.</p>
                        </div>

                        <div>
                          <p className="font-medium">Entertainment</p>
                          <p className="text-gray-800">Ultra High Speed Fibre Optic WIFI (300mbps) and 1 Smart TV (main room), and 1 Bose Bluetooth Speaker.</p>
                        </div>

                        <div>
                          <p className="font-medium">Laundry</p>
                          <p className="text-gray-800">Washer and dryer with all the detergent and fabric softener you'll need.</p>
                        </div>

                        <p className="text-gray-800 italic">*Complimentary coffee, tea, salt, pepper, olive oil, soap, shampoo, conditioner, and body wash is provided.</p>
                      </div>
                    </div>
                  </div>

                  {/* Guest Access & Rules Section */}
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
                        <h2 className="text-2xl font-bold">Guest Access & Important Notes</h2>
                      </div>
                    
                    <div className="space-y-6 max-w-4xl">
                      <div>
                        <h3 className="font-medium text-lg mb-2">Guest Access</h3>
                        <p className="text-gray-800 mb-2">1. Rotating Buzzer code to enter the building will be provided</p>
                        <p className="text-gray-800 mb-2">2. Rotating Front door of unit code will be provided</p>
                        <p className="text-gray-800">3. Key & Fob will be left in the unit on the counter for remainder of your stay!</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-lg mb-2">Rules</h3>
                        <p className="text-gray-800 mb-2">No smoking.</p>
                        <p className="text-gray-800 mb-2">No pets.</p>
                        <p className="text-gray-800">No parties.</p>
                      </div>

                      <div>
                        <h3 className="font-medium text-lg mb-2">Registration Details</h3>
                        <p className="text-gray-800 mb-1">Municipal registration number: 00013056</p>
                        <p className="text-gray-800">Provincial registration number: H874382751</p>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  );
}
