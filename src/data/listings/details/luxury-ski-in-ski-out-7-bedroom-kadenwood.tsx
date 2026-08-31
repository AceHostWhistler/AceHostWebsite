import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function LuxurySkiInSkiOut7BedroomKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Located in Kadenwood, Whistler's prestigious ski-in/ski-out neighbourhood, this home offers 6,200 square feet of refined mountain living with expansive mountain and valley views.
                    <br /><br />
                    The open-concept main level features a chef's kitchen with Wolf, Sub-Zero and Miele appliances, quartz countertops, generous prep space and a separate prep kitchen. A hot tub, fire pits, ping pong table, wet bar, steam room and two 90-inch TVs make the home an inviting year-round Whistler retreat.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <img
                          src={getGalleryPhotoSrc(photos[6])}
                          alt="Luxury Kadenwood Property Interior"
                          className="w-full h-full object-cover rounded-lg"
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
                        Sleeping Arrangements & Layout:
                        <br /><br />
                        Designed for comfort, privacy and flexibility, the home is thoughtfully laid out across multiple levels, making it ideal for families, groups and multi-generational stays. Each bedroom offers beautiful mountain views, and several feature private ensuite bathrooms or deck access. The mix of primary suites, queen rooms and bunk accommodations ensures everyone has their own space while still feeling connected.
                        <br /><br />
                        <strong>Top Floor-</strong>
                        <br />
                        -Bedroom 7: 1 Murphy queen bed in the office space
                        <br />
                        -1 powder bathroom
                        <br />
                        -Large ski boot dryer located in the garage
                        <br /><br />
                        <strong>Main Floor-</strong>
                        <br />
                        -1 detached bathroom, 1 shower, 1 sink
                        <br />
                        -Master Bedroom 1: 1 King bed, ensuite, 1 bath, 1 shower, 2 sinks
                        <br />
                        -Bedroom 2: Queen size bed, no ensuite, no closet, 1 dresser
                        <br />
                        -Bedroom 3: 1 King bed, ensuite, 1 shower, 2 sink
                        <br />
                        -Bedroom 4: 1 King bed, ensuite, 1 shower, 1 sink
                        <br />
                        -Laundry, 1 washer, 1 dryer
                        <br /><br />
                        <strong>Lower Floor-</strong>
                        <br />
                        -Steam shower, 2 sink bathroom
                        <br />
                        -Bedroom 5: 1 queen bed, ensuite, 2 sink, 1 shower
                        <br />
                        -Bedroom 6: 2 queen bunk beds, shared ensuite
                        <br />
                        *Bedroom 5 & Bedroom 6 share/connected bathrooms
                        <br /><br />
                        <strong>Outdoor Amenities</strong>
                        <br />
                        After a day on the slopes, relax in the outdoor hot tub or unwind in the XL wood-barrel sauna located beside it.
                        <br /><br />
                        <strong>Air Conditioning</strong>
                        <br />
                        A powerful air-conditioning system serves the main living area, providing a refreshing escape and helping maintain a comfortable temperature throughout the home during summer.
                      </p>
                    </div>
                  </div>

                  {/* Guest Access Section */}
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
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Guest Access</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      Guests have private access to the entire home, including the garage, driveway, hot tub, sauna, ski room, gym and all advertised living spaces and amenities.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <p className="text-gray-800">
                          Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler's most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers privacy, old-growth forest, mountain views and access to the private Kadenwood Gondola for residents and guests.
                          <br /><br />
                          The gondola reaches Creekside Village in approximately five minutes, while Whistler Village is about a 10-minute drive away. Creekside provides direct access to Whistler Mountain; its upgraded 10-person gondola increased out-of-base capacity by approximately 35%, and the upgraded Big Red Express increased uphill capacity by approximately 30%.
                          <br /><br />
                          Creekside Village offers groceries at Creekside Market along with restaurants and cafés including Red Door Bistro, Rimrock Café, Creekbread, Dusty's, BReD and Rockit Coffee.
                        </p>
                      </div>
                      <div className="relative aspect-[4/3]">
                        <img
                          src="/optimized/2919-Heritage/description-2.jpg"
                          alt="Kadenwood Location"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Concierge Services Section */}
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
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 5C13.66 5 15 6.34 15 8C15 9.66 13.66 11 12 11C10.34 11 9 9.66 9 8C9 6.34 10.34 5 12 5ZM12 19.2C9.5 19.2 7.29 17.92 6 15.98C6.03 13.99 10 12.9 12 12.9C13.99 12.9 17.97 13.99 18 15.98C16.71 17.92 14.5 19.2 12 19.2Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">***Concierge Services***</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div className="relative aspect-[4/3]">
                        <img
                          src="/optimized/2919-Heritage/description-3.jpg"
                          alt="Concierge Services"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <p className="text-gray-800">
                          Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team can assist with restaurant reservations and recommendations, private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.
                          <br /><br />
                          We can also arrange complimentary ski-pass delivery directly to the home for day, multi-day or season passes booked through our team. Please contact us before purchasing so we can coordinate delivery. Optional third-party services are charged separately unless specifically stated as included with your reservation.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Features Section */}
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
                            d="M19 5H5C3.9 5 3 5.9 3 7V17C3 18.1 3.9 19 5 19H19C20.1 19 21 18.1 21 17V7C21 5.9 20.1 5 19 5ZM19 17H5V7H19V17Z"
                            fill="white"
                          />
                          <path
                            d="M8.5 12C9.33 12 10 11.33 10 10.5C10 9.67 9.33 9 8.5 9C7.67 9 7 9.67 7 10.5C7 11.33 7.67 12 8.5 12Z"
                            fill="white"
                          />
                          <path
                            d="M17 14.5L13.5 9.5L11 12.51L9.5 10.5L6 15H18L17 14.5Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Additional Features</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-800 mb-4">
                          This 6,200-square-foot mountain retreat offers a wealth of premium amenities:
                        </p>
                        <ul className="list-disc pl-5 space-y-2 text-gray-800">
                          <li>Renovated chef's kitchen with Wolf, Subzero & Miele appliances</li>
                          <li>Quartz countertops and separate prep kitchen</li>
                          <li>Outdoor hot tub</li>
                          <li>XL outdoor wood-barrel sauna beside the hot tub</li>
                          <li>Fire pits</li>
                          <li>Ping pong table</li>
                          <li>Wet bar</li>
                          <li>Steam room</li>
                          <li>Two 90-inch TVs</li>
                          <li>Garage ski boot dryer</li>
                          <li>Private Kadenwood Gondola access for residents and guests</li>
                        </ul>
                      </div>
                      <div className="relative aspect-[4/3]">
                        <img
                          src="/optimized/2919-Heritage/description-4.jpg"
                          alt="Additional Features"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Registration Details */}
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
                            d="M14 2H6C4.9 2 4.01 2.9 4.01 4L4 20C4 21.1 4.89 22 5.99 22H18C19.1 22 20 21.1 20 20V8L14 2ZM16 18H8V16H16V18ZM16 14H8V12H16V14ZM13 9V3.5L18.5 9H13Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Registration Details</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      <strong>Municipal registration number:</strong> 00015634
                      <br />
                      <strong>Provincial registration number:</strong> PM846619574
                    </p>
                  </div>
                </div>
    </>
  );
}
