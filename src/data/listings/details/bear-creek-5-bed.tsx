import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function BearCreek5BedDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Beautifully Renovated & Fully Furnished 5 Bedroom, 4 Bathroom Home in Creekside, Whistler.
                    Available from June 1 Until November 30, 2025. Pricing options: $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum. 
                    Welcome to this stunning, newly renovated luxury home nestled in the quiet neighborhood of 
                    Creekside, Whistler.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[3])}
                          alt="Bear Creek Interior"
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
                        This spacious 5-bedroom, 4-bathroom house is perfect for a family or a quiet group of up to 10 people looking for a peaceful retreat. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer. You'll also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <span className="font-bold">Key Features:</span><br />
                        • 5 Bedrooms, 4 Bathrooms – plenty of space for the whole family or group<br />
                        • Fully Furnished – Includes high-end furniture, kitchenware, and linens<br />
                        • Modern Kitchen – Equipped with luxury appliances including a speed oven, dishwasher, and more<br />
                        • Washer & Dryer – In-unit laundry for your convenience<br />
                        • Two Parking Spots – Available in the driveway<br />
                        • Prime Location – Easy walking distance to the Creekside gondola and close to all amenities<br />
                        • Quiet, Peaceful Neighborhood – Ideal for families or groups who value tranquility
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
                      This beautifully renovated luxury home is nestled in the quiet neighborhood of Creekside, Whistler. With its prime location, the Creekside gondola is just a short walk away, offering easy access to the mountain and all the outdoor activities Whistler has to offer.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      You'll also be close to all the amenities that Creekside has to offer, including shops, restaurants, and recreational facilities. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee. Dine at local favorites like Red Door Bistro, Rimrock Cafe, and Creekbread. The Creekside Market is conveniently located for all your grocery needs.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      This is a true luxury home with everything you need for a comfortable, convenient stay in one of the most sought-after locations in Whistler. Don't miss out on this rare opportunity to live in Whistler's Creekside in a beautifully renovated home!
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      Available from June 1 Until November 30, 2025. $9,775 per month with 6-month minimum or $13,000 per month with 3-month minimum.
                    </p>
                  </div>
                </div>
    </>
  );
}
