import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function ChaletLaForjaKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Chalet La Forja is a 10,000-plus-square-foot ski-in/ski-out
                    estate in Kadenwood for up to 16 guests. The home combines nine
                    bedrooms with a heated pool, hot tub, sauna, gym, and access to
                    Kadenwood&apos;s private gondola.
                    <br />
                    <br />
                    Ranked one of VRBO&apos;s Top 10 vacation rentals in 2023.
                    <br />
                    <br />
                    Housekeeping is included every other day. Daily butler service is
                    included in winter from December 1 through April 30 and is
                    available in summer for an additional charge.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">
                    Inside Chalet La Forja
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
                    {[photos[2], photos[7], photos[12], photos[34]].map(
                      (src, index) => (
                        <div
                          key={src}
                          className="relative aspect-[4/3] rounded-lg overflow-hidden"
                        >
                          <Image
                            src={src}
                            alt={`Chalet La Forja interior and amenities ${index + 1}`}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-300"
                            sizes="(max-width: 768px) 50vw, 25vw"
                          />
                        </div>
                      )
                    )}
                  </div>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[11])}
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
                        <h2 className="text-2xl font-bold">The Space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        <span className="font-bold">Butler and housekeeping:</span>{" "}
                        Daily butler service is included from December 1 through April
                        30 and can be added in summer at extra cost. The butler handles
                        food and drink service, dining setup and clearing, and kitchen
                        tidying, and can prepare the hot tub and fire. Housekeeping is
                        included every other day.
                      </p>
                      <p className="text-gray-800 mb-6">
                        The home features a gourmet chef&apos;s kitchen with a
                        butler&apos;s pantry, two private offices, integrated Sonos
                        audio, a gym, hot tub, heated pool, sauna, and steam shower.
                        Ski directly to and from the property, then use the private
                        Kadenwood gondola for convenient Creekside access.
                      </p>
                      <p className="text-gray-800">
                        Nine bedrooms and 16 beds span the home&apos;s levels, giving
                        families and groups a mix of private suites, a large bunk room,
                        and flexible adjoining rooms.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[15])}
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
                        <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                      </div>

                      <p className="font-bold mb-2">BEDROOM LAYOUT:</p>
                      <p className="mb-4">
                        Nine bedrooms are arranged across four levels. Bedroom 7 is a
                        private, windowed hybrid office and twin bedroom adjoining
                        bedroom 2, with its own hallway entrance and a shared bathroom.
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

                      <p className="font-bold mb-2">Bonus & optional:</p>
                      <p className="mb-4">
                        For a small daily fee, the pool can be heated to hot-tub
                        temperature at 104°F.
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
                    
                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                      <div className="md:w-1/2">
                        <p className="text-gray-800 mb-6">
                          <strong>Guest access:</strong> Guests have access to the
                          entire home, including the garage, pool, hot tub, sauna, and
                          gym.
                        </p>
                        <p className="text-gray-800 mb-6">
                          Kadenwood is perched almost 1,000 feet above the valley floor
                          on Whistler Mountain&apos;s south side, beside old-growth
                          forest and ski-in/ski-out trails. Its private
                          residents-and-guests-only gondola reaches Creekside in about
                          five minutes, while the drive down the private road takes
                          about 10 minutes.
                        </p>
                        <p className="text-gray-800 mb-6">
                          <strong>Creekside Village:</strong> Nearby restaurants and
                          shops include Rockit Coffee, BReD, Red Door Bistro, Rimrock
                          Cafe, Cure Lounge, Creekbread, Dusty&apos;s, Mekong, 122 West,
                          Bask &amp; Co, and Creekside Market.
                        </p>
                        <p className="text-gray-800">
                          <strong>Getting around:</strong> Reach Creekside by private
                          gondola, ski trail, or car. Whistler Village is accessible by
                          car, private driver or shuttle, taxi, or ride app.
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
                      <h2 className="text-2xl font-bold">Concierge &amp; Services</h2>
                    </div>

                    <p className="text-gray-800 mb-6">
                      Complimentary AceHost concierge support includes restaurant
                      reservations and recommendations, pre-arrival food and beverage
                      stocking coordination, and help arranging transportation,
                      private chefs, childcare, rentals, instructors, and experiences.
                      Ski-pass pickup and delivery is included only when passes are
                      booked through AceHost. Third-party services and requested
                      groceries are charged separately.
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Included in price:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                          <li>Daily winter butler service, December 1–April 30</li>
                          <li>Housekeeping every other day</li>
                          <li>Complimentary VIP concierge support</li>
                          <li>Pre-arrival food and beverage stocking coordination</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h3 className="text-xl font-bold mb-4">Additional at-cost services:</h3>
                        <ul className="list-disc pl-6 space-y-2 text-gray-800">
                          <li>Summer butler service and additional housekeeping</li>
                          <li>Airport transfers, private drivers, and private chefs</li>
                          <li>Childcare, massages, equipment rentals, and ski instructors</li>
                          <li>Helicopter, snowmobile, and other private experiences</li>
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
