import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function NorthlandsWalkToVillageSlopesLuxury4BedDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to this beautifully located townhome-style condo in the Symphony Building, right in the heart of Whistler Village.
                    <br /><br />
                    This unique 3-level home offers a private entrance from the outside and sits next to the Whistler Racquet & Pickleball Club, with restaurants, shops, and village amenities all around you.
                    <br /><br />
                    The slopes are an easy 12-15 minute walk away, and the main village grocery store, Fresh St. Market, is directly across the street.
                    <br /><br />
                    Perfect location, comfort, and layout for vacation!
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <img
                          src={photos[1]}
                          alt="Northlands Symphony Interior"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                        Hosting up to 6 guests in 2 full bedrooms with ensuite private bathrooms, the home is thoughtfully designed across three levels, creating a comfortable and functional layout for families, couples, and small groups.
                        The primary bedroom features a king bed and a private ensuite bathroom. The second bedroom includes two single Murphy beds, also with its own full ensuite bathroom, making it perfect for kids or friends. The living room offers a pullout sofa bed for additional sleeping space if needed, with a full bathroom as well.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Enjoy a fully equipped kitchen for home-cooked meals, a cozy living area for relaxing after a day on the mountain, and three full bathrooms for added convenience. The private exterior entrance gives the home a true townhome feel, while the multi-level layout creates natural separation between sleeping and living spaces.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Free underground parking for one vehicle is included, with additional paid parking available nearby for extra cars.
                      </p>
                    </div>
                  </div>

                  {/* Property Features Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <img
                          src={photos[4]}
                          alt="Northlands Symphony Features"
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
                              d="M22 9V7h-2V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2v-2h-2V9h2zm-4 10H4V5h14v14zM6 13h5v4H6v-4zm6-6h4v3h-4V7zM6 7h5v5H6V7zm6 4h4v6h-4v-6z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Property Features</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        <strong>Ski Access:</strong><br />
                        This is a walk-to-the-slopes location. The gondolas and lifts are approximately a 12 to 15 minute walk, making it easy to access the mountain without needing a vehicle.
                      </p>
                      <ul className="list-disc pl-5 mb-6 text-gray-800 space-y-2">
                        <li>Sleeps up to 6 guests</li>
                        <li>2 bedrooms + 1 pullout sofa bed in living room. 4 beds total, in 2 full bedrooms.</li>
                        <li>Primary bedroom with king bed and ensuite bathroom</li>
                        <li>Second bedroom with two single Murphy beds</li>
                        <li>3 full bathrooms total. Rare find in a 2 bedroom!</li>
                        <li>Unique three-level townhome layout</li>
                        <li>Private exterior entrance</li>
                        <li>Fully equipped kitchen</li>
                        <li>Cozy living and dining area</li>
                        <li>Free underground parking for 1 vehicle</li>
                        <li>Paid parking nearby for additional vehicles</li>
                        <li>Located in the Symphony Building in Whistler Village</li>
                        <li>Steps from restaurants, shops, and village amenities</li>
                        <li>Fresh St. Market grocery store directly across the street</li>
                        <li>Next to the Whistler Racquet & Pickleball Club</li>
                      </ul>
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
                    <div className="relative aspect-[4/3] mb-6 max-w-3xl">
                      <img
                        src={photos[8]}
                        alt="Northlands Symphony Location"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      You are right in the centre of Whistler Village. The Symphony Building offers one of the most convenient village locations, with dining, shopping, cafés, and entertainment all within walking distance. Fresh St. Market is across the street for groceries and essentials, and the Racquet & Pickleball Club is next door for fitness and recreation.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Walk to the slopes in 12 to 15 minutes, explore the village on foot, enjoy après-ski, boutique shopping, spas, lakes, and trails without ever needing a car. This location is ideal for guests looking for central access, walkability, and a true village experience.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      <strong>Guest access</strong><br />
                      Private exterior entrance with secure code access. Entry instructions and access code will be sent one day prior to arrival.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      <strong>Registration details</strong><br />
                      Municipal registration number: 00015534<br />
                      Provincial registration number: PM817047827
                    </p>
                    <p className="text-gray-800 max-w-4xl mt-6">
                      <strong>Guest access:</strong><br />
                      Private exterior entrance with secure code access. Entry instructions and access code will be sent one day prior to arrival.
                    </p>
                    <p className="text-gray-800 max-w-4xl mt-6">
                      <strong>Registration details:</strong><br />
                      Municipal registration number: 00015534<br />
                      Provincial registration number: PM817047827
                    </p>
                  </div>
                </div>
    </>
  );
}
