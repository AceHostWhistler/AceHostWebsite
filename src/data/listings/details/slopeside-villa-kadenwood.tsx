import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import { airbnbButtonInline } from "@/lib/airbnbButtonStyles";
import type { ListingDetailsProps } from "../types";

export default function SlopesideVillaKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Set high above Creekside in exclusive Kadenwood, Slope Side
                    Chalet is a warm and spacious ski-in/ski-out retreat for up to 16
                    guests. The private trail meets the home&apos;s ski-room stairs,
                    while soaring ceilings and picture windows frame mountain, valley,
                    and lake views. Heated stone floors, an indoor fireplace, a
                    private hot tub, a steam shower, and a home gym make the chalet an
                    inviting base after a day in Whistler.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[5])}
                          alt="Slope Side Chalet Interior"
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
                        This sprawling 7-bedroom chalet offers 12 beds and 7.5
                        bathrooms across multiple levels, giving large families and
                        groups room to gather and recharge. The fully equipped kitchen
                        and generous living areas are complemented by a dedicated ski
                        room, a large steam shower, and an outdoor hot tub overlooking
                        the valley and lake.
                      </p>
                      <p className="text-gray-800 mb-6">
                        If you still have energy after skiing, keep up with your
                        fitness routine in the large home gym equipped with yoga mats,
                        weights and cardio machines.
                      </p>
                      <p className="text-gray-800">
                        A large HD screen TV in the living room includes access to
                        Netflix, Amazon Prime, and a TSN subscription for live sports.
                        Please note that air conditioning is not available.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc(photos[15])}
                          alt="Slope Side Chalet Bedroom"
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

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Master Bedroom 1 -</span> has a
                        beautiful king bed with a walk-in closet, located at the end
                        of the corridor for ultimate privacy. With a spacious ensuite
                        walk-in shower and bathtub.
                      </p>

                      <p className="font-bold mb-2">MID LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2 -</span> The room
                        includes one queen and one twin bed with an ensuite shower.
                        This floor is located one level below the upper. This room is
                        accessed through the den room and next to bedroom 3.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3 -</span> Has one
                        single bed plus a bunk bed with a twin on top and a queen
                        below. Ensuite bathroom with a shower and bathtub.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">
                          Additional loft sleeping area -
                        </span>{" "}
                        A cozy queen bed sits in the open mezzanine above the den,
                        providing extra sleeping space without being counted as an
                        eighth bedroom.
                      </p>

                      <p className="font-bold mb-2">MAIN LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4 -</span> Is located on
                        the main floor beside the living room with a plush king bed.
                        There is a powder bathroom on this floor and the ground floor
                        bathroom with a walk-in shower can be used.
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 5 -</span> Located on
                        the ground floor, it has a bunk bed with a bottom double bed
                        and a top twin bed with an ensuite bathroom with a shower. It
                        is next to Bedroom 6.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 6 -</span> Has a queen
                        bed with an ensuite bathroom with a shower. A spacious room
                        with beautiful views from the patio doors with access to the
                        backyard.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 7 -</span> Has a queen
                        bed with an ensuite bathroom and shower. Direct access to the
                        hot tub.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Additional -</span> There is an
                        additional large bathroom on this floor that includes a large
                        steam shower.
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
                      Located in exclusive Kadenwood high on Whistler Mountain&apos;s
                      south side, the chalet offers privacy with convenient access to
                      Creekside Village. Restaurants, shops, groceries, and the
                      Creekside Gondola are approximately a 5-minute drive or private
                      gondola ride away; in winter, experienced skiers can follow the
                      neighbourhood trail down to Creekside.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Take advantage of some of Whistler's best restaurants and
                      shops. Enjoy quality coffee and delicious breads and pastries at
                      Rockit Coffee and Bred. Red Door Bistro, Rimrock Cafe, Cure
                      Lounge (my favorite), Creekbread, and Dusty's. Enjoy
                      Creekside's newest restaurant Mekong, this fine-dining Thai
                      restaurant and gorgeous patio is a local favorite. Tuck into
                      delicious authentic food and imaginative cocktails.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      Shop at 122 West for beautiful home decor and Abigail's for
                      stylish clothing. The Co-Op gas station in Creekside has a
                      convenience store and is open until 10 pm. For groceries, the
                      Creekside Market is also nearby.
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
                        <h3 className="font-semibold mb-3">Outdoor</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Private outdoor hot tub</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Ski-in/ski-out access</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Mountain views</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Private deck/patio</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Interior</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Heated stone floors</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Large steam shower</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Fully equipped gym</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Indoor fireplace</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Large HD screen TV</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Media room and built-in Sonos</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-3">Essentials</h3>
                        <ul className="space-y-2 text-gray-800">
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>High-speed WiFi</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Washer & dryer</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Fully equipped kitchen</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Dedicated ski room</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Heating (no air conditioning)</span>
                          </li>
                          <li className="flex items-center">
                            <span className="mr-2">•</span>
                            <span>Private Kadenwood gondola access</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Guest Access and Services */}
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-4">Guest Access</h2>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Guests have private access to the entire home, including the hot
                      tub, gym, steam shower, ski room, decks, and driveway. One pet
                      may be considered with advance request and host approval; an
                      additional pet fee applies.
                    </p>
                    <h2 className="text-2xl font-bold mb-4">
                      Concierge and Additional Services
                    </h2>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Complimentary concierge assistance is included. AceHost can
                      help coordinate private chefs, chalet hosts, airport transfers,
                      restaurant reservations, equipment rentals, instructors, and
                      Whistler activities. Ski-pass booking and delivery can be
                      arranged when passes are purchased through AceHost in advance.
                      Third-party services, activities, rentals, and provider charges
                      are not included in the accommodation rate and are billed
                      separately.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      Municipal registration number: 00013203
                      <br />
                      Provincial registration number: PM667513563
                    </p>
                  </div>

                  {/* Booking Info */}
                  <div className="bg-gray-100 p-8 rounded-xl mb-20">
                    <h2 className="text-2xl font-bold mb-4">Book Your Stay</h2>
                    <p className="text-gray-800 mb-6">
                      Experience the ultimate luxury ski vacation at Slope Side
                      Chalet. Nightly rates range from $2,600 to $6,000 depending on
                      the season, with a minimum stay of 3 nights (7 nights during
                      Christmas and New Year).
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="/contact"
                        className="sm:w-auto px-6 py-3 bg-black hover:bg-gray-900 text-white rounded text-center font-medium"
                      >
                        Contact Us to Book
                      </Link>
                      <a
                        href="https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={airbnbButtonInline}
                      >
                        View on Airbnb
                      </a>
                    </div>
                  </div>
                </div>

                {/* All Photos Modal */}
    </>
  );
}
