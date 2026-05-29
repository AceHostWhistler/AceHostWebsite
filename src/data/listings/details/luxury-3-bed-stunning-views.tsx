import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function Luxury3BedStunningViewsDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Contemporary 3 bed, 2 bath, 2 full bedroom retreat, steps from Whistler Village and the slopes. Enjoy some of if not the best views you can find in and apartment in Whistler; of Chateau Fairmont and mountains. A cozy fireplace, hot tub, sauna, gym, and pool.
                    <br /><br />
                    Includes covered parking, gear storage, full kitchen, fast Wi-Fi, and Netflix. Walk to the hill, lakes, shops, and dining. Ideal for families or couples seeking the perfect blend of comfort, style, and location in the heart of Whistler.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
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
                        This spacious and stylish 1,100 sq ft condo is your ideal home base for a luxurious Whistler escape. With 2 bedrooms, 2 full bathrooms, and sleeping arrangements for up to 6 guests, the unit offers both comfort and convenience just steps from the action.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <strong>Living & Dining</strong><br />
                        Relax in the cozy living area featuring a gas fireplace, plush seating, and a queen sleeper sofa. Enjoy movie nights with cable TV, Netflix, and high-speed Wi-Fi. The dining area comfortably seats up to 10, making it perfect for family meals or entertaining.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <strong>Kitchen</strong><br />
                        The full kitchen is thoughtfully stocked with everything you need, including a stove, oven, microwave, fridge, coffee maker, and essentials for cooking or reheating meals from Whistler's top restaurants.
                      </p>
                    </div>
                    <div className="md:w-1/2 pl-0 md:pl-12 mt-8 md:mt-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[7]} // Using a different interior photo for this section
                          alt="Luxury 3-Bed Property Interior"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[12]} // Using a different bedroom photo for this section
                          alt="Luxury 3-Bed Property Bedroom"
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
                        <h2 className="text-2xl font-bold">Bedrooms & Bathrooms</h2>
                      </div>

                      <p className="mb-6">
                        <strong>Primary Bedroom:</strong> King bed, private patio with views, vanity sink, and direct access to a full ensuite bathroom with dual entry.
                        <br /><br />
                        <strong>Second Bedroom:</strong> Queen bed and a private ensuite bathroom with a bathtub.
                        <br /><br />
                        <strong>Living Room:</strong> Queen pullout sofa for additional guests.
                        <br /><br />
                        Fresh linens, cozy bedding, and plush mattress toppers ensure restful nights for all.
                      </p>
                    </div>
                  </div>

                  {/* Resort Amenities Section */}
                  <div className="mb-20">
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
                            d="M20 12C20 16.42 16.42 20 12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Resort Amenities</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Unwind after a day on the mountain in the building's glass-domed hot tub, outdoor pool, sauna, or fitness room, all included with your stay.
                      Secure gear storage is provided so your skis, boards, or bikes are safely stowed and easily accessible.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      <strong>Parking</strong><br />
                      Our unit includes the only designated parking spot near the building's main entrance, ideal for easy loading/unloading. Covered parking is $25/night, payable via the lobby ticket machine.
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
                      <h2 className="text-2xl font-bold">Location Highlights</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      The location is hard to beat, tucked away in a quiet, scenic corner overlooking Chateau Fairmont, yet only a short walk or free shuttle to:
                    </p>
                    <ul className="list-disc pl-6 text-gray-800 max-w-4xl mb-6">
                      <li className="mb-2">Whistler & Blackcomb gondolas</li>
                      <li className="mb-2">Whistler Village (dining, shopping, nightlife)</li>
                      <li className="mb-2">Lakes, trails & parks for summer adventures</li>
                    </ul>
                    <p className="text-gray-800 max-w-4xl">
                      Whether you're skiing, biking, hiking, or relaxing by the fire, this is the perfect launchpad for your Whistler experience.
                    </p>
                    <p className="text-gray-800 max-w-4xl mt-6">
                      <strong>Registration details</strong><br />
                      Municipal registration number: 00011211<br />
                      Provincial registration number: H952351829
                    </p>
                  </div>

                  {/* Pricing Section */}
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
                            d="M20 8H4V6H20V8ZM20 18H4V12H20V18ZM20 4H4C2.89 4 2 4.89 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V6C22 5.46957 21.7893 4.96086 21.4142 4.58579C21.0391 4.21071 20.5304 4 20 4ZM12 16H6V14H12V16Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Pricing</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-3">
                      <strong>Winter (Regular Season):</strong> $650-$1,000+ per night
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      <strong>Christmas & New Year's:</strong> $1,000-$1,280+ per night
                    </p>
                  </div>
                </div>
    </>
  );
}
