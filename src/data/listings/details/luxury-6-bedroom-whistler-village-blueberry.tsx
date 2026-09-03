import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";


export default function Luxury6BedroomWhistlerVillageBlueberryDetails({ photos }: ListingDetailsProps) {
  const getDescriptionPhoto = (index: number) =>
    getGalleryPhotoSrc(photos[index] ?? photos[0]);
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to this beautifully renovated 6-bedroom retreat in Whistler’s peaceful Blueberry Hill neighbourhood. Designed with Restoration Hardware and Rove Concepts furnishings, the home sleeps 12 across 10 beds and offers forest views, premium Puffy mattresses, ski and bike storage, summer A/C, and free EV charging. Whistler Village, the ski lifts and nearby lakes are only a 3–4 minute drive away, combining a quiet residential setting with exceptionally convenient access for families and groups.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col mb-20">
                    <div className="flex flex-col md:flex-row mb-10">
                      <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                        <div className="relative aspect-[4/3] mb-2">
                          <Image
                            src={getGalleryPhotoSrc(photos[0])}
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
                          <h2 className="text-2xl font-bold">The space</h2>
                        </div>
                        <p className="text-gray-800 mb-6">
                          Step into a bright and inviting alpine-inspired retreat where every detail has been curated for relaxation and style. The open-concept living room features a cozy fireplace, plush seating, and large windows framing lush forest views. The fully equipped kitchen is ideal for group dining, complete with a brand-new fridge, oven, and BBQ, plus all the cookware you need for family meals or après-ski dinners.
                          <br /><br />
                          Across multiple levels, the home offers ample space for gathering and privacy, making it ideal for multi-family getaways or larger groups wanting a true Whistler experience.
                        </p>
                        <div className="flex items-center space-x-6 mb-6">
                          <div className="flex items-center">
                            <FaBed className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">6 bedrooms</span>
                          </div>
                          <div className="flex items-center">
                            <FaBath className="text-gray-600 mr-2" size={20} />
                            <span className="text-gray-800">3 baths</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional photos in description */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(10)}
                          alt="Blueberry balcony view"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(11)}
                          alt="Deck snow view"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                      <div className="relative aspect-[4/3]">
                        <Image
                          src={getDescriptionPhoto(12)}
                          alt="Drone view of Blueberry Hill"
                          width={1920}
                          height={1080}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Sleeping Arrangements Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Sleeping arrangements:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Lower/main level Level</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Primary Bedroom: King bed, ensuite with shower/tub combo, Smart TV</li>
                          <li>Bedroom 2: King bed</li>
                        </ul>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                          src={getDescriptionPhoto(2)}
                          alt="Primary bedroom"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-4">Upper Level</h3>
                        <ul className="list-disc pl-5 space-y-2">
                          <li>Bedroom 3: King bed</li>
                          <li>Bedroom 4: Two Queen beds, large office desk with forest views, perfect for remote work</li>
                          <li>Bedroom 5: King bed with Smart TV</li>
                          <li>Bedroom 6: Two single bunk beds (kid-friendly but perfect for adults too!)</li>
                        </ul>
                        <p className="mt-4 text-gray-800">Each of the 3 full bathrooms includes both a shower and a bathtub, providing convenience and comfort for large groups.</p>
                        <div className="mt-6 relative aspect-[4/3]">
                          <Image
                          src={getDescriptionPhoto(4)}
                          alt="Upper level bedroom"
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
                    <h2 className="text-2xl font-bold mb-6">Parking & Transportation:</h2>
                    <div>
                      <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                        <li>2 Parking spots included in the garage. 1 being a Private parking spot (fits vehicles 6'6" and under). Free EV charger included (we pay for the charging), one of the few in the building. And 1 visitor spot available. 2 spots total (rare find in Whistler)!</li>
                        <li>Roughly a 4-minute taxi or Uber ride to the main Whistler Village</li>
                        <li>Recommended: Arrive in one or 2 large vehicles, shuttle, or bus from airport.<br />Extra vehicles can park nearby in the village if required.</li>
                        <li>Shuttle to main Whistler Village & Ski Slopes, comes every 15 minutes right out front of the building.</li>
                      </ul>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Location:</h2>
                    <div>
                      <p className="text-gray-800">
                        Set in the prestigious Blueberry Hill neighbourhood, this home combines tranquility and proximity. You’re just a few minutes from both Whistler Village and Creekside, while surrounded by nature and scenic trails. The Valley Trail and Whistler Golf Course Loop are right at your doorstep, perfect for morning walks or bike rides in summer.
                        <br /><br />
                        In winter, the slopes are a quick drive away, and you’ll appreciate coming home to your peaceful retreat away from the busy village. In summer, Alta Lake is within walking distance for paddle boarding, picnics, or ice skating, depending on the season.
                        <br /><br />
                        Walking distance to the village: Optional and a bit long with skis/boots, but possible! About a 20 minute walk with boots in the winter months, and about a 15 minute walk to the village in summer months.
                        <br /><br />
                        *Yes we have Air Conditioning for the summer months! Available May 1-November 1.*
                      </p>
                    </div>
                  </div>

                  {/* Additional Features Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Additional Features:</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <ul className="list-disc pl-5 space-y-2 max-w-4xl">
                          <li>Fully renovated luxury condo with Restoration Hardware and Rove Concepts furnishings</li>
                          <li>10 beds / 6 bedrooms / 3 full bathrooms</li>
                          <li>High end Puffy luxury mattresses throughout</li>
                          <li>Ski and bike storage included, no need to bring gear inside the unit</li>
                          <li>Brand-new BBQ, fridge, and stove/oven</li>
                          <li>High-speed Wi-Fi and Smart TVs</li>
                          <li>Level 2 J1772 EV charging (free of charge)</li>
                          <li>Forest-view balcony for morning coffee or evening wine</li>
                          <li>Steps to Valley Trail and golf course loop</li>
                          <li>Fully functional brand new washer + dryer in the unit. Private for guest usage.</li>
                          <li>Pack and play included and always at the condo. Please bring your own sheets.</li>
                          <li>*AC | Air Conditioning for summer rentals, we have AC units in the living room, bedroom 3 & bedroom 5. AC units cool the entire house comfortably, for those hot summer days.*</li>
                        </ul>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={getDescriptionPhoto(1)}
                            alt="Living room interior"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        <div className="relative aspect-[4/3]">
                          <Image
                            src={getDescriptionPhoto(6)}
                            alt="Snow interior detail"
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
                    <h2 className="text-2xl font-bold mb-6">Guest access</h2>
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
                            src={getDescriptionPhoto(8)}
                            alt="Renovated interior"
                            width={1920}
                            height={1080}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Other Things to Note Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
                    <p className="text-gray-800 max-w-4xl">
                      Ski lift pass booking & delivery: One of the perks of booking with us is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
                    </p>
                  </div>

                  {/* Registration Details Section */}
                  <div className="mb-20">
                    <h2 className="text-2xl font-bold mb-6">Registration details</h2>
                    <p className="text-gray-800">
                      Municipal registration number: 00015309<br />
                      Provincial registration number: PM743639153
                    </p>
                  </div>
                </div>

                {/* Photos Modal - Show all photos */}
    </>
  );
}
