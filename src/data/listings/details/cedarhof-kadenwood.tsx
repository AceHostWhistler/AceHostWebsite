import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function CedarhofKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to your dream escape in Kadenwood, Whistler's most exclusive ski-in/ski-out enclave. This luxury mountain retreat features a private gondola, heated pool, hot tub, and stunning views over Whistler Peak. With sleek design, cozy elegance, and all-day sun, it's perfect for après-ski lounging, summer barbecues, or wine nights in the tasting room. Pure Whistler magic.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[6]}
                          alt="Cedarhof Interior"
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
                        Merging contemporary design with world-class craftsmanship, this newly built residence is set against dramatic granite rock and lush old-growth rainforest, with panoramic views of Whistler Peak and the Tantalus Range.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Designed by Brent Murdoch and built by Gavan Construction Ltd, every detail was carefully considered, from the custom Shinnoki Oak millwork and Caesarstone quartz finishes to the chef's kitchen equipped with premium Gaggenau appliances.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Inside, enjoy multiple living spaces including a cozy media room, wine cellar, and tasting lounge. An elevator services all levels, and the oversized double garage includes a ski/boot room perfect for mountain adventures.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Outdoors, unwind on heated patios, soak in the hot tub, or swim in the pool as the sun sets over the peaks. Located in the prestigious Kadenwood neighbourhood, this home offers true ski-in/ski-out convenience with access to a private gondola and close proximity to Creekside and Whistler Village.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Whether you're here to relax, entertain, or explore this is mountain living at its finest.
                      </p>
                      <p className="text-gray-800">
                        Enhancing your stay and included in the reservation, a private butler is available to serve meals, fine drinks, and barista-made coffee throughout the day. They'll set the scene, lighting the fireplace, prepping the hot tub, and tuning the music, ensuring your experience is as seamless as it is unforgettable.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[2]}
                          alt="Cedarhof Bedroom"
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

                      <p className="font-bold mb-2">Bed Configuration: Total Bedrooms: 7, 6 Beds</p>
                      
                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Primary Bedroom 1 - (A)</span>
                        <br />
                        • King bed
                        <br />
                        • Open-concept layout with walk-in closet and en suite bathroom
                        <br />
                        • Bathroom features: double sink, stand-up shower, bathtub, private toilet section
                        <br />
                        • TV
                        <br />
                        • Blackout blinds
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Guest Bedroom 2 - (B)</span>
                        <br />
                        • Queen bed
                        <br />
                        • En suite bathroom with stand-up shower and single sink
                        <br />
                        • Desk
                        <br />
                        • TV
                        <br />
                        • Closest to elevator
                        <br />
                        • Blackout blinds
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Guest Bedroom 3 - (C)</span>
                        <br />
                        • Two single beds
                        <br />
                        • En suite bathroom with tub, shower, and single sink
                        <br />
                        • Desk
                        <br />
                        • TV
                        <br />
                        • Ideal for young children
                        <br />
                        • Closest to upper-level laundry room
                        <br />
                        • Blackout blinds
                      </p>

                      <p className="font-bold mb-2">MID LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Gym (No Bed) - Bedroom 4 - (D)</span>
                        <br />
                        • Equipment includes: treadmill, stationary bike, weight bench, fitness balls, dumbbells (5–35 lbs), multiple fitness mats
                        <br />
                        • TV
                        <br />
                        • En suite bathroom with stand-up shower and single sink
                        <br />
                        • Access to wraparound deck
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Guest Bedroom 5 - (E)</span>
                        <br />
                        • King bed
                        <br />
                        • En suite bathroom with tub, shower, and double sink
                        <br />
                        • TV
                        <br />
                        • Access to wraparound deck
                        <br />
                        • Blackout blinds
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Guest Bedroom 6 - (F)</span>
                        <br />
                        • European-style king bed
                        <br />
                        • En suite bathroom with stand-up shower and single sink
                        <br />
                        • TV
                        <br />
                        • Closest to wine cellar
                        <br />
                        • Blackout blinds
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Guest Bedroom 7 - (G)</span>
                        <br />
                        • Queen bed
                        <br />
                        • En suite bathroom with stand-up shower and single sink
                        <br />
                        • Double desk
                        <br />
                        • TV
                        <br />
                        • Closest to media room and elevator
                        <br />
                        • Blackout blinds
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Laundry:</span>
                        <br />
                        • Laundry available on both upper and lower levels
                        <br />
                        • Each laundry room includes washer, dryer, and ample folding space
                      </p>
                    </div>
                  </div>

                  {/* Additional Photos */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={photos[8]}
                        alt="Cedarhof Hot Tub and Pool"
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={photos[9]}
                        alt="Cedarhof Pool"
                        fill
                        className="object-cover rounded-lg"
                      />
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
                      Sitting almost 1,000 feet above the valley floor, Kadenwood is undoubtedly Whistler's
                      top SKI IN/SKI OUT neighbourhood. Guests have access to the Kadenwood residents and
                      "guests only" private Kadenwood Gondola. The neighbourhood is located a 5-minute drive up a
                      private road. Can also be accessed via the private gondola, and a quick ski ride down will bring
                      you to all the amenities in Creekside Village, including the ski gondola.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      On your doorstep, you have some of Whistler's best restaurants. Enjoy quality coffee and delicious breads and pastries
                      at Rockit Coffee and Bred coffee shop. Red Door Bistro, Rimrock Cafe, Cure Lounge (my
                      favourite), Creekbread, Mekong, and Dusty's are all other great options for dining. Shop at 122
                      West for beautiful home decor and Bask & Co for stylish clothing. The Husky gas station has a
                      24-hour convenience store. For groceries, the Creekside Market. All can be accessed via the
                      private gondola and a short walk, or a short drive from the home.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photos[16]}
                          alt="Cedarhof Wine Room"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={photos[7]}
                          alt="Cedarhof Media Room"
                          fill
                          className="object-cover rounded-lg"
                        />
                      </div>
                    </div>
                    
                    <p className="text-gray-800 max-w-4xl mb-6">
                      We will cater to ANYTHING you need.
                      Included VIP Concierge service is provided for any special requests such as the top private
                      chefs in Whistler, restaurant reservations, assistance with vehicles and shuttle service, bookings
                      with extra experiences, etc... Ben is happy to join you on the hill to show you the mountain as
                      well as show the ski in ski out.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      <span className="font-bold">*Included in price:*</span>
                      <br />
                      Host/Butler for the whole stay (10-12 hours per day).
                      <br />
                      Full complimentary VIP concierge service
                      <br />
                      Restaurant reservations and recommendations
                      <br />
                      Ski lift pass pick up and delivery
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      <span className="font-bold">Additional at-cost services:</span>
                      <br />
                      Airport Transfers
                      <br />
                      Private Chef (Highly recommended)
                      <br />
                      Chalet food & beverage stocking upon arrival
                      <br />
                      Private Driver
                      <br />
                      Massages
                      <br />
                      Ski equipment rental
                      <br />
                      Childcare
                      <br />
                      Ski Instructors
                      <br />
                      Heli/snowmobile Experiences
                    </p>
                  </div>
                </div>
    </>
  );
}
