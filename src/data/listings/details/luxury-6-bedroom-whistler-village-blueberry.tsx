import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function Luxury6BedroomWhistlerVillageBlueberryDetails({ photos }: ListingDetailsProps) {
  const getDescriptionPhoto = (index: number) => photos[index] ?? photos[0];
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to this luxurious 6-bedroom, 3-bath Ravencrest condo in Whistler's exclusive Blueberry neighbourhood.
                    <br /><br />
                    Newly renovated and designed with Restoration Hardware and Rove Concepts furnishings, it sleeps 12 with 10 premium Puffy beds. Enjoy forest views, ski and bike storage, EV parking, and a new BBQ.
                    <br /><br />
                    Just a 3-4 minute drive or short taxi ride to Whistler Village, slopes, and lakes, offering tranquility and convenience in one.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col mb-20">
                    <div className="flex flex-col md:flex-row mb-10">
                      <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                        <div className="relative aspect-[4/3] mb-2">
                          <Image
                            src={photos[0]}
                            alt="Luxury 6-Bedroom Interior"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover"
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
                          Step into a bright and inviting alpine-inspired retreat where every detail has been curated for relaxation and style. The open-concept living room features a cozy fireplace, plush seating, and large windows framing lush forest views. The fully equipped kitchen is ideal for group dining, complete with a brand-new fridge, oven, and BBQ, plus all the cookware you need for family meals or après-ski dinners.
                          <br /><br />
                          Across multiple levels, the home offers ample space for gathering and privacy, making it ideal for multi-family getaways or larger groups wanting a true Whistler experience.
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center">
                            <FaBed className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">6 Bedrooms</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">3 Bathrooms</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional photos in description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(1)}
                          alt="Luxury living space"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(2)}
                          alt="Modern kitchen"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(3)}
                          alt="Cozy bedroom"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sleeping Arrangements Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Sleeping Arrangements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Lower Level:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Primary Bedroom: King bed, ensuite with shower/tub combo, Smart TV</li>
                          <li>Bedroom 2: King bed</li>
                        </ul>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                          src={getDescriptionPhoto(5)}
                          alt="Primary bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Upper Level:</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Bedroom 3: Two Queen beds, large office desk with forest views, perfect for remote work</li>
                          <li>Bedroom 4: King bed with TV</li>
                          <li>Bedroom 5: King bed</li>
                          <li>Bedroom 6: Two single bunk beds (adult-friendly but perfect for kids)</li>
                        </ul>
                        <p className="mt-4 text-gray-800">Each of the three full bathrooms includes both a shower and a bathtub, providing convenience and comfort for large groups.</p>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                          src={getDescriptionPhoto(6)}
                          alt="Bunk bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Parking & Transportation Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Parking & Transportation</h2>
                    <div>
                      <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                        <li>1 guaranteed extra-large private parking spot (fits vehicles 6'6" and under)</li>
                        <li>EV charger included, one of the few in the building</li>
                        <li>1 visitor spot available first-come, first-serve (busier on winter/holiday weekends, usually more available during summer or shoulder seasons). There are 10 visitor spots on a first-come, first-serve basis, with permission to use any of 1 of the 10 at a given time.</li>
                        <li>VIP taxi reservation code provided for priority service in Whistler, rare and convenient for evenings out</li>
                        <li>Roughly a 4-minute taxi ride to the Village</li>
                        <li>Recommended: arrive in one large vehicle, shuttle, or bus. Extra vehicles can park nearby if required.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Location</h2>
                    <div>
                      <p className="text-gray-800">
                        Set in the prestigious Blueberry Hill neighbourhood, this home combines tranquility and proximity. You're just a few minutes from both Whistler Village and Creekside, while surrounded by nature and scenic trails. The Valley Trail and Whistler Golf Course Loop are right at your doorstep, perfect for morning walks or bike rides in summer.
                        <br /><br />
                        In winter, the slopes are a quick drive away, and you'll appreciate coming home to your peaceful retreat away from the busy village. Alta Lake is within walking distance for paddle boarding, picnics, or ice skating, depending on the season.
                      </p>
                    </div>
                  </div>

                  {/* Additional Features Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Additional Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                          <li>Fully renovated luxury condo with Restoration Hardware and Rove Concepts furnishings</li>
                          <li>10 beds / 6 bedrooms / 3 full bathrooms</li>
                          <li>Puffy luxury mattresses throughout</li>
                          <li>Ski and bike storage included—no need to bring gear inside the unit</li>
                          <li>Brand-new BBQ, fridge, and stove/oven</li>
                          <li>High-speed Wi-Fi and Smart TVs</li>
                          <li>Washer and dryer in unit</li>
                          <li>Forest-view balcony for morning coffee or evening wine</li>
                          <li>Steps to Valley Trail and golf course loop</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={getDescriptionPhoto(7)}
                            alt="Modern kitchen appliances"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={getDescriptionPhoto(8)}
                            alt="Forest view from balcony"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Guest Access Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Guest Access</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="md:col-span-2">
                        <p className="text-gray-800">
                          Guests have full access to the entire home, including private parking, bike and ski storage, and building amenities. The condo offers privacy and serenity while still being close to everything Whistler has to offer.
                          <br /><br />
                          This home is perfect for families, groups, or corporate getaways seeking refined comfort near the mountains. Guests love the quiet setting, the easy access to the Village, and the attention to every detail, from high-end furniture to the luxurious mattresses and EV parking.
                          <br /><br />
                          Stay here to experience the best of Whistler: peace, privacy, and proximity, all in one beautifully designed Blueberry Hill retreat.
                        </p>
                      </div>
                      <div className="md:col-span-1">
                        <div className="relative aspect-[3/4] h-full">
                          <Image
                            src={getDescriptionPhoto(9)}
                            alt="Living area with mountain views"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Registration Details Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Registration Details</h2>
                    <p className="text-gray-800">
                      <strong>Municipal registration number:</strong> 00015309<br />
                      <strong>Provincial registration number:</strong> PM743639153
                    </p>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
