import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import { airbnbButtonInline } from "@/lib/airbnbButtonStyles";
import LazyInstagramEmbed from "@/components/LazyInstagramEmbed";
import type { ListingDetailsProps } from "../types";

export default function PanoramicEstateKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to Panoramic Estate in Kadenwood, a true Whistler-style luxury log chalet with soaring timber ceilings, warm wood finishes, stone fireplaces and incredible mountain views. This expansive 8-bedroom ski-in/ski-out home is perfect for families and groups, with multiple living spaces, large outdoor decks, a private elevator, hot tub, sauna and media room, all surrounded by the peaceful mountain setting of exclusive Kadenwood.
                  </p>

                  {/* Instagram Reel Video - Centered and Larger */}
                  <div className="flex justify-center mb-16">
                    <div className="w-full max-w-lg">
                      <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                        <div className="flex flex-col h-full">
                          <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-white">
                            <h3 className="text-xl font-bold text-center text-gray-900">
                              Panoramic Estate Walk Through
                            </h3>
                          </div>

                          <div
                            className="aspect-w-9 aspect-h-16 relative"
                            style={{ minHeight: "690px" }}
                          >
                            <LazyInstagramEmbed
                              reelId="DOoXPbrj_UV"
                              title="Panoramic Estate Walk Through Video"
                              loadStrategy="inView"
                              className="absolute inset-0 h-full w-full"
                            />
                          </div>

                          <div className="p-4 border-t bg-gradient-to-r from-gray-50 to-white">
                            <a
                              href="https://www.instagram.com/reel/DOoXPbrj_UV/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                              className="text-blue-600 text-sm font-medium block text-center hover:text-blue-800 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              View more on Instagram
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[4])}
                          alt="Panoramic Estate Interior"
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
                        Panoramic Estate is designed for families and groups who value both time together and room to spread out. 8 bedrooms and multiple living areas are arranged across several levels, all conveniently connected by a private elevator. The layout works particularly well for multi-generational families and groups travelling together, providing generous communal spaces alongside quieter private areas. Large outdoor decks showcase the surrounding mountain scenery, while multiple fireplaces create a warm alpine atmosphere indoors. A private extra large hot tub, indoor sauna, media room, ping pong, built-in sound system and fitness equipment provide entertainment and relaxation throughout the home.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Ski-in/ski-out access and Kadenwood’s private gondola complete the experience, combining the privacy of a large mountain estate with convenient access to Creekside and Whistler Mountain. Nestled high on the mountainside within the prestigious and secluded Kadenwood community, Panoramic Estate also offers exclusive access to the residents & guest only Private Kadenwood gondola.
                      </p>
                      <p className="text-gray-800">
                        <strong>Location:</strong>
                        <br />
                        Set high above Creekside in Kadenwood, Panoramic Estate combines a private alpine setting with exceptional access to Whistler Mountain. Guests can use Kadenwood’s private residents-and-guests-only gondola to reach Creekside Village in approximately five minutes, or enjoy ski-in/ski-out access during the winter when conditions permit. Creekside offers lifts, restaurants, cafés and groceries, while Whistler Village is approximately a 10-minute drive away.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[14])}
                          alt="Panoramic Estate Bedroom"
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

                      <p className="font-bold mb-2">TOP LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">• Master Bedroom 1-</span> has a beautiful King bed with a walk-in closet, chaise lounge, telescope, and outdoor patio. It is located at the end of the corridor for ultimate privacy. With a spacious ensuite walk-in shower and a stand-alone bathtub. This bedroom has central AC.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">• Master Bedroom 2-</span> Has a plush King bed, with an ensuite bathroom with a walk-in shower and outdoor patio. This bedroom has central AC.
                      </p>
                      <p className="mb-4">
                        • Washer and dryer located on this floor.
                        <br />
                        <span className="font-medium">• Bedroom 3-</span> Bunk room with two queen beds and an ensuite bathroom with a walk-in shower.
                      </p>

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">• Bedroom 4-</span> Full bed with a bathroom located right next door with a walk-in shower and office desk.
                      </p>
                      <p className="mb-4">
                        • Large open-plan kitchen with a big island and pantry. Equipped with a Miele coffee machine, kitchen aid mixer, and 2-drawer freezer.
                        <br />
                        • Dining table (14 guests): Spacious 8 seater dining table + 6 seater extension table with chairs available for a total of 14 comfortably at the dining table.
                        <br />
                        • Main living room with a wood-burning fireplace. Fire starter and logs are provided and included in your stay.
                        <br />
                        • Media room located just off the living room with a large TV.
                        <br />
                        • Spacious outdoor deck space
                        <br />
                        • 10 top picnic table outside on the deck is great for summer meals.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">• Bedroom 8-</span> one-bedroom suite with a Queen bed - separate bedroom and closet and fully functional kitchen with full-sized appliances. Located just off of the kitchen.
                      </p>

                      <p className="font-bold mb-2">MAIN LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">• Bedroom 5-</span> Well-appointed room with a Queen bed
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">• Bedroom 6-</span> A beautiful bedroom with a Queen bed and patio access to the hot tub. Both bedrooms share a bathroom with a walk-in shower located in between both rooms.
                      </p>
                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">• Bedroom 7-</span> is located on the ground floor, it has a bunk bed with two Queen beds. An additional Queen Murphy bed is also in this room.
                      </p>
                      <p className="mb-4">
                        • Large bathroom on this floor next to the media/bedroom with a walk-in shower.
                        <br />
                        • Garage fits one car and has a gym area with a peloton, bench press, weights, and running machine.
                        <br />
                        • Additional laundry space with a washer and dryer.
                        <br />
                        • Large mudroom and ski storage area with exit to the garage.
                        <br />
                        • Sauna located on this floor by the mudroom.
                      </p>
                      <p className="mb-4">
                        *Air Conditioning / AC: The home has brand-new central AC throughout every floor. Please note that not every bedroom has its own dedicated AC unit. Both Master Bedroom 1 and Master Bedroom 2 have their own central AC, while the rest of the home is cooled through the AC in the common areas. (Available for guest comfort as of May 1, 2027 onwards)
                        <br />
                        Even on the hottest summer days, the entire home stays very comfortable, including the bedrooms. The log-style construction also naturally helps regulate the temperature, keeping the home cool in summer and warm in winter based on your preferred settings, both day and night, year-round.
                      </p>
                    </div>
                  </div>

                  {/* Guest Access Section */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Guest access</h2>
                    <p className="text-gray-800 max-w-4xl mb-4">
                      Guests have access to the entire private home, garage, hot tub, driveway, etc..
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      *Important elevator note: The home includes a private elevator connecting all levels. As with any residential elevator, occasional servicing may be required and availability cannot always be guaranteed. If elevator access is essential for your group, please confirm with us before booking.*
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
                      <h2 className="text-2xl font-bold">Neighbourhood highlights</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler’s favourite restaurants and cafés, including Red Door Bistro, Rimrock Café, Creekbread, Dusty’s, BReD and Rockit Coffee.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.
                    </p>
                    <h3 className="text-xl font-bold mb-3">Getting around</h3>
                    <p className="text-gray-800 max-w-4xl">
                      Can access Creekside & Whistler village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski since the property is located right on Whistler
                    </p>
                  </div>

                  {/* Amenities Section */}
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
                            d="M22 9V7H20V5C20 4.45 19.55 4 19 4H15C14.45 4 14 4.45 14 5V7H12V5C12 4.45 11.55 4 11 4H7C6.45 4 6 4.45 6 5V7H4V9H6V11H4V13H6V15H4V17H6V19C6 19.55 6.45 20 7 20H11C11.55 20 12 19.55 12 19V17H14V19C14 19.55 14.45 20 15 20H19C19.55 20 20 19.55 20 19V17H22V15H20V13H22V11H20V9H22ZM18 18H16V16H18V18ZM18 14H16V12H18V14ZM18 10H16V8H18V10ZM12 18H10V16H12V18ZM12 14H10V12H12V14ZM12 10H10V8H12V10ZM18 6V5H16V6H18ZM8 5V6H10V5H8ZM8 18H10V17H8V18ZM8 14H10V13H8V14ZM8 10H10V9H8V10Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Amenities</h2>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                      <div>
                        <h3 className="font-semibold mb-3">Exterior & Access</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Ski-in/ski-out access</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Private Kadenwood gondola</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Mountain views</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Spacious outdoor decks</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Hot tub</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Garage with gym equipment</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Interior</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Private elevator to all levels</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Multiple indoor fireplaces</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Indoor sauna</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Media room</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Built-in sound system</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Ping pong table</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Kitchen & Essentials</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Open-plan kitchen with island</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Miele coffee machine</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Multiple laundry facilities</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Ski storage area</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>High-speed WiFi</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Exercise equipment</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Other Things to Note */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Other things to note</h2>
                    <p className="text-gray-800 max-w-4xl">
                      Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.
                      <br /><br />
                      Ski lift pass booking & delivery: One of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
                      <br /><br />
                      Optional third-party services are charged separately unless specifically stated as included with your reservation.
                      <br /><br />
                      Please don't hesitate to reach out if you need anything!
                    </p>
                  </div>

                  {/* Registration Details */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Registration details</h2>
                    <p className="text-gray-800 max-w-4xl">
                      <strong>Municipal registration number:</strong> 00013273
                      <br />
                      <strong>Provincial registration number:</strong> PM310072844
                    </p>
                  </div>

                  {/* Booking Info */}
                  <div className="bg-gray-100 p-8 rounded-xl mb-20">
                    <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
                    <p className="text-gray-800 mb-6">
                      Experience the ultimate luxury ski vacation at Panoramic Estate.
                      Nightly rates range from $5,800 to $9,000+ depending on the
                      season, with a minimum stay of 4 nights (7 nights during
                      holidays).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="sm:w-auto px-6 py-3 bg-black hover:bg-gray-900 text-white rounded text-center font-medium"
                      >
                        Contact Us to Book
                      </Link>
                      <a
                        href="https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={airbnbButtonInline}
                      >
                        View on Airbnb
                      </a>
                    </div>
                  </div>
                </div>
    </>
  );
}
