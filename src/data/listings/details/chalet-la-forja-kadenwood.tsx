import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function ChaletLaForjaKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Welcome to Chalet La Forja in Kadenwood, one of Whistler’s most prestigious luxury rentals. This 10,000+ sq. ft. ski-in/ski-out estate is designed for unforgettable family stays, with 9 bedrooms, expansive living spaces, a heated outdoor pool, hot tub, sauna, gym and private gondola access to Creekside. Perfect for one or two families wanting exceptional space, privacy and service.
                    <br />
                    <br />
                    Housekeeping included every other day
                    <br />
                    Daily Butler Included in Winter
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[10])}
                          alt="Chalet La Forja living space and kitchen"
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
                        <h2 className="text-2xl font-bold">The space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        Chalet La Forja delivers the scale and service of a private alpine resort, exclusively for your group. More than 10,000 sq. ft. of living space provides room to gather, entertain and retreat in privacy. The home features nine bedrooms, generous living areas, a gourmet chef’s kitchen with butler’s pantry, two private offices, Sonos audio throughout and exceptional indoor-outdoor entertaining spaces. Outside, a private heated swimming pool and hot tub create one of Kadenwood’s most impressive après-ski settings. Inside, guests can enjoy a private gym, sauna, multiple lounge spaces and extensive amenities throughout the residence. True ski-in/ski-out access connects the home to Whistler Mountain, while Kadenwood’s private gondola provides convenient access to Creekside.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Ranked among Top 10 Vacation Rentals in 2023 in all of Canada.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <strong>Location:</strong><br />
                        Chalet La Forja is perched high on Whistler Mountain in Kadenwood, a private mountainside community above Creekside. In winter, guests can access Whistler Mountain directly from the neighbourhood or take the private Kadenwood Gondola down to Creekside in approximately five minutes. It is a rare combination of estate-level privacy and convenient access to skiing, dining, groceries and the rest of Whistler.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Private butler service is included from December 1 through April 30, and complimentary housekeeping is included every other day throughout the year.
                      </p>
                      <p className="text-gray-800">
                        In addition to serving breakfast, lunch, and dinner, the butler is responsible for all food and drink service throughout the day as well as cleanup and set up of dining table and kitchen area. To create the perfect ambiance, they will set up the hot tub, light the fire, and adjust the music and household functions. Get your daily dose of caffeine from your own personal barista. Overall, the butler is there to make your stay as smooth and comfortable as possible.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[14])}
                          alt="Chalet La Forja bedroom suite"
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
                        <h2 className="text-2xl font-bold">BEDROOM LAYOUT:</h2>
                      </div>

                      <p className="mb-4">
                        Full 8+1 bedroom home.
                      </p>

                      <p className="font-bold mb-2">UPPER LEVEL (level located below the main floor):</p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 1 -</span> Master bedroom with a beautiful King bed with an ensuite shower and bathtub as well as a private patio with 2 day lounge beds.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 2 -</span> Second master bedroom situated next to the master. It has a King bed with an ensuite bathroom that has a shower and bath with private patio access.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 3 -</span> Located at the end of the corridor the room has a King bed, an ensuite bathroom that has a shower and bath and private patio access.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 4 -</span> Very large room with a King bed, ensuite bathroom with a shower and is located next to bedroom 3.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 7 -</span> This hybrid office space has a Twin bed, large window and connects to bedroom 2. It has its own private entrance leading from the hallway and shares a bathroom with bedroom 2.
                      </p>

                      <p className="font-bold mb-2">MIDDLE LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 5 -</span> Located on its own level this bunk bed room has 6 Queen beds with a spacious ensuite bathroom that has a shower and a bath.
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 6 -</span> Has a King bed and 2 twins and is tucked away down on the lower level for ultimate privacy with an ensuite bathroom and shower. Enjoy private access to the pool, hot tub and backyard.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 8 -</span> Has a King bed and is connected with bedroom 6 (walk through bedroom 6 to exit the rooms into the rec room). They share the same bathroom. Option for one of these rooms to use the large shower with a steam function located in the rec room just off these bedrooms.
                      </p>

                      <p className="font-bold mb-2">MAIN FLOOR (Includes kitchen, living room, tv lounge room, & garage):</p>
                      <p className="mb-4">
                        <span className="font-medium">•Bedroom 9 -</span> Has a Queen bed and is located on the Main Floor. Bathroom & shower located adjacent to the bedroom, and is not a private ensuite. This bathroom is shared with others on the main kitchen/living room level. Perfect for elderly looking to walk less steps to their bedroom, as there are only 5 steps to enter the house & this floor.
                      </p>

                      <p className="font-bold mb-2">Bonus (optional):</p>
                      <p className="mb-4">
                        For a small daily fee, the pool can be set to hot tub temperatures.
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
                      <h2 className="text-2xl font-bold">Guest access</h2>
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                      <div className="md:w-1/2">
                        <p className="text-gray-800 mb-6">
                          Guest have access to the entire private home to themselves including all amenities such as the heated pool, hot tub, sauna, garage, gym, etc..
                        </p>
                        <h3 className="text-xl font-bold mb-4">Neighbourhood highlights</h3>
                        <p className="text-gray-800 mb-6">
                          Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.
                        </p>
                        <p className="text-gray-800 mb-6">
                          The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.
                        </p>
                        <p className="text-gray-800 mb-6">
                          For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.
                        </p>
                        <p className="text-gray-800 mb-6">
                          Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler’s favourite restaurants and cafés, including Red Door Bistro, Rimrock Café, Creekbread, Dusty’s, BReD and Rockit Coffee.
                        </p>
                        <p className="text-gray-800 mb-6">
                          Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.
                        </p>
                        <h3 className="text-xl font-bold mb-4">Getting around</h3>
                        <p className="text-gray-800">
                          Can access Creekside &amp; Whistler village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski since the property is located right on Whistler mountain.
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={getGalleryPhotoSrc(photos[1])}
                            alt="Chalet La Forja exterior in Kadenwood"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Additional Services Section */}
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
                            d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 7H13V13H11V7ZM11 15H13V17H11V15Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Other things to note</h2>
                    </div>

                    <p className="text-gray-800 mb-6">
                      Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.
                    </p>
                    <p className="text-gray-800 mb-6">
                      Ben is happy to join you on the first day to show you the ski in ski out trail, as well as show you the mountain, if time permits.
                    </p>
                    <p className="text-gray-800 mb-6">
                      Ski lift pass booking &amp; delivery: One of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
                    </p>
                    <p className="text-gray-800 mb-6">
                      Optional third-party services are charged separately unless specifically stated as included with your reservation.
                    </p>
                    <p className="text-gray-800 mb-6">
                      Please don&apos;t hesitate to reach out if you need anything!
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Included in your stay:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                          <li>Host/Butler for the whole stay (10-12 hours per day). December 1-April 30.</li>
                          <li>Full complimentary VIP concierge service</li>
                          <li>Restaurant reservations and recommendations</li>
                          <li>Ski lift pass pick up and delivery</li>
                          <li>Chalet food &amp; beverage stocking upon arrival</li>
                          <li>Complimentary housekeeping is included every other day throughout the year.</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Additional at cost services:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                          <li>Airport Transfers</li>
                          <li>Private Chef (Highly recommended)</li>
                          <li>Private Driver</li>
                          <li>Massages</li>
                          <li>Ski equipment rental delivery</li>
                          <li>Childcare</li>
                          <li>Ski Instructors</li>
                          <li>Helicopter/snowmobile experiences</li>
                          <li>Absolutely anything you need, you let us know and we will arrange for you</li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-gray-800">
                      <strong>Registration details:</strong><br />
                      Municipal registration number: 00013213<br />
                      Provincial registration number: PM244679712
                    </p>
                  </div>
                </div>
    </>
  );
}
