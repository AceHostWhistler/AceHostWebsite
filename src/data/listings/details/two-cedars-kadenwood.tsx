import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function TwoCedarsKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Welcome to Two Cedars, a one-of-a-kind architectural masterpiece in Whistler’s prestigious Kadenwood neighbourhood. Designed by OpenSpace, this striking modern chalet blends dramatic mountain architecture, warm natural materials, soaring spaces, and refined luxury in a way rarely found in vacation rentals. Sleeps 17 with ski-in/ski-out access and private Kadenwood Gondola service to Creekside.
                  </p>
                  <p className="text-gray-800 mb-16 max-w-4xl font-semibold">
                    Daily Butler Included in Winter
                  </p>

                  {/* The Space Section */}
                  <div className="mb-20">
                    <div>
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
                        Designed by OpenSpace, Two Cedars is one of Kadenwood’s most distinctive private residences, combining bold contemporary architecture with the warmth of a true mountain home.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Across approximately 10,000 sq. ft., soaring ceilings, expansive glass, natural materials, curated artwork and beautifully considered interiors create spaces that feel dramatic yet inviting. Floor-to-ceiling windows frame the surrounding mountains and forest, while generous living and entertaining areas give larger groups the ability to gather without sacrificing privacy.
                      </p>
                      <p className="text-gray-800 mb-6">
                        7 bedrooms are spread throughout the residence, each with access to a private ensuite bathroom. The home also features a private theatre, fully equipped gym, infrared sauna, indoor hot tub, outdoor hot tub, foosball and multiple spaces for relaxing after a day on the mountain.
                      </p>
                      <p className="text-gray-800 mb-6">
                        True ski-in/ski-out access connects the home directly to Whistler Mountain, while Kadenwood’s private gondola provides convenient access to Creekside Village.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Winter stays include private butler service from December 1 through April 30.
                      </p>
                      <p className="text-gray-800 mb-6">
                        <strong>Location &amp; Kadenwood Access:</strong><br />
                        Two Cedars sits high above Creekside in Kadenwood, one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Guests have access to the private Kadenwood Gondola, connecting the neighbourhood with Creekside Village in approximately five minutes. This gives you the privacy of a secluded mountain estate while keeping the Creekside Gondola, restaurants, cafés and groceries conveniently close, with Whistler Village approximately a 10-minute drive away.
                      </p>
                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center">
                          <FaBed className="text-gray-600 mr-2" size={20} />
                          <span className="text-gray-800">7 Bedrooms</span>
                        </div>
                        <div className="flex items-center">
                          <FaBath className="text-gray-600 mr-2" size={20} />
                          <span className="text-gray-800">8.5 Bathrooms</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Two Cedars New/24-2934 Ancient Cedars-24.jpg")}
                          alt="Two Cedars Bedroom"
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
                        <h2 className="text-2xl font-bold">Bed Configuration (12 beds total):</h2>
                      </div>

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        •Master bedroom 1- has a plush king bed, located at the end of the top floor corridor for ultimate privacy. With an en-suite shower and bathtub and walk-in wardrobe.
                      </p>
                      <p className="mb-4">
                        •Bedroom 6- has a queen bed, room is located on the top floor at the other end of the corridor to the master bedroom and next to bedroom 7.
                      </p>
                      <p className="mb-4">
                        •Bedroom 7- has a king bed, this room is located at the other end of the corridor to the Master bedroom on the top floor. En-suite bathroom with a shower and bath. Very near to bedroom 6.
                      </p>
                      <p className="mb-4">
                        •Additionally a powder room on the main floor.
                      </p>

                      <p className="font-bold mb-2">MID-LEVEL:</p>
                      <p className="mb-4">
                        •Bedroom 2-is located on the main floor at the end of the corridor, far away from the kitchen and living room. It&apos;s the room on the left, with a king bed an en-suite bathroom, and a bathtub.
                      </p>
                      <p className="mb-4">
                        •Bedroom 3- is on the main floor at the end of the corridor, opposite bedroom 2. With a queen bed with an en-suite bathroom that has a shower.
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        •Bedroom 4- includes 2 x double beds, 2 x twin beds above. Located on the basement level at the opposite end of the corridor to the media room. It has an en-suite bathroom with a shower.
                      </p>
                      <p className="mb-4">
                        •Bedroom 5- is on the basement level and opens into bedroom 4 through a sliding door partition. 1 x double bed and 1 x twin bunk bed. With an en-suite shower with a bath.
                      </p>
                      <p className="mb-4">
                        •There is an additional full bathroom on the basement level with a large<br />
                        bathroom with a walk-in shower.
                      </p>
                    </div>
                  </div>

                  {/* Location Section */}
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
                          Guests have private access to the residence and its advertised amenities. Please note that the garage is not available for guest use.
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
                        <p className="text-gray-800 mb-6">
                          Access the main Whistler village via car, private driver/shuttle, taxi, ride app, or access Creekside village via your own private gondola exclusively for Kadenwood residents and guests.
                        </p>
                      </div>
                      <div className="md:w-1/2">
                        <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-lg">
                          <Image
                            src={getGalleryPhotoSrc("/photos/properties/Two Cedars New/31-2934 Ancient Cedars-31.jpg")}
                            alt="Two Cedars Location"
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
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-4">Included in your stay:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>Host/Butler for the whole stay (10-12 hours per day). December 1-April 30.</li>
                        <li>Full complimentary VIP concierge service</li>
                        <li>Restaurant reservations and recommendations</li>
                        <li>Ski lift pass pick up and delivery</li>
                        <li>Chalet food &amp; beverage stocking upon arrival</li>
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
                        <li>Daily cleaning</li>
                        <li>Absolutely anything you need, you let us know and we will arrange for you</li>
                      </ul>
                    </div>
                    
                    <div className="mt-6">
                      <p className="text-gray-800">
                        <strong>Registration details:</strong><br />
                        Municipal registration number: 00013206<br />
                        Provincial registration number: PM225242595
                      </p>
                    </div>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
