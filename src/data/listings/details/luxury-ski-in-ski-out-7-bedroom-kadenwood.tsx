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
                    Set high above Creekside in exclusive Kadenwood, The Mountaintop is a 7,500 sq. ft. ski-in/ski-out estate designed for groups of 16 or more. The home offers panoramic mountain views, seven bedrooms, a chef’s kitchen and exceptional entertaining spaces.
                    <br /><br />
                    After skiing, relax in the private hot tub, extra-large outdoor sauna or steam room, then gather around the fire pits, wet bar, ping-pong table or two 90-inch TVs. Private Kadenwood Gondola access makes reaching Creekside effortless.
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
                        <h2 className="text-2xl font-bold">The space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        The Mountaintop combines refined contemporary design with the privacy and natural beauty of one of Whistler’s most prestigious mountainside neighbourhoods. With 7500 square feet of living space arranged across three levels, the home provides plenty of room for families and groups to spend time together while still enjoying privacy.
                        <br /><br />
                        Each bedroom enjoys beautiful mountain scenery, while multiple king suites, queen bedrooms and flexible sleeping spaces make the layout especially well suited to extended families, groups of couples and multi-generational stays.
                        <br /><br />
                        <strong>Living, dining and entertaining</strong>
                        <br />
                        The open-concept main living level is framed by expansive windows showcasing incredible mountain and valley views. Comfortable lounge areas and two 90-inch televisions provide plenty of space for relaxed evenings, sports or movie nights.
                        <br /><br />
                        The gourmet kitchen is equipped with Wolf, Sub-Zero and Miele appliances, quartz countertops, generous preparation areas and a separate prep kitchen. It is ideal for everything from family breakfasts to professionally catered dinners and private chef experiences.
                        <br /><br />
                        The home offers several connected dining and entertaining areas:
                        <br />
                        - The main dining table comfortably seats 12 or more guests
                        <br />
                        - The bar-height dining table seats an additional 8 guests
                        <br />
                        - The separate bar offers seating for 4 guests
                        <br /><br />
                        This gives larger groups excellent flexibility for seated dinners, children’s dining, cocktails and casual meals, without separating guests from the main entertaining area.
                        <br /><br />
                        Additional indoor amenities include a wet bar, ping-pong table, fitness space, steam room, ski and mudroom, laundry facilities and a large ski-boot drying system in the garage.
                        <br /><br />
                        <strong>Outdoor amenities</strong>
                        <br />
                        After a day on Whistler Mountain, step outside to the private hot tub or extra-large outdoor barrel sauna. Outdoor fire pits create an inviting setting for après-ski drinks, evening conversations and enjoying the peaceful alpine surroundings.
                        <br /><br />
                        <strong>Bedroom and bathroom layout</strong>
                        <br />
                        <strong>Top level</strong>
                        <br />
                        - Bedroom 7 / Office: Flexible office and sleeping space with a Queen Murphy bed. A powder room is located on this level.
                        <br /><br />
                        <strong>Main level</strong>
                        <br />
                        - Bedroom 1, Primary Suite: King bed, private ensuite bathroom with a bathtub, separate shower and double vanity.
                        <br />
                        - Bedroom 2: Queen bed with a dresser. This bedroom uses the detached full bathroom on the main level, which includes a shower and single vanity. Please note that this room does not have a closet.
                        <br />
                        - Bedroom 3: King bed with a private ensuite bathroom featuring a walk-in shower and double vanity.
                        <br />
                        - Bedroom 4: King bed with a private ensuite bathroom featuring a walk-in shower and single vanity.
                        <br />
                        - A washer and dryer are also located on this level.
                        <br /><br />
                        <strong>Lower level</strong>
                        <br />
                        - Bedroom 5: Queen bed with access to the connected shared bathroom arrangement serving Bedrooms 5 and 6. The bathroom includes a shower and double vanity.
                        <br />
                        - Bedroom 6, Bunk Room: Queen-over-queen bunk bed, providing two queen beds. This bedroom shares the connected bathroom arrangement with Bedroom 5.
                        <br />
                        - An additional full bathroom with a steam shower and double vanity is located on the lower level.
                        <br /><br />
                        <strong>Location and Kadenwood access</strong>
                        <br />
                        The Mountaintop sits high above Creekside in Kadenwood, approximately 1,000 feet above the valley floor. The elevated position creates the expansive mountain views and peaceful sense of privacy that define the home.
                        <br /><br />
                        Kadenwood’s private residents-and-guests-only gondola connects the neighbourhood with Creekside Village in approximately five minutes. Creekside offers direct access to Whistler Mountain, ski school, restaurants, cafés, groceries and equipment rentals. Whistler Village is approximately a 10-minute drive away.
                        <br /><br />
                        <strong>Air conditioning</strong>
                        <br />
                        The home has a powerful air-conditioning system in the main living area. It provides a refreshing escape during the summer and helps maintain a comfortable temperature throughout the home, although individual bedrooms do not have separate air-conditioning units.
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
                      <h2 className="text-2xl font-bold">Guest access</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      Guests have private access to the entire home and all advertised amenities, including the garage, driveway, private hot tub, outdoor sauna, steam room, gym, ski and mudroom, laundry facilities, entertaining spaces and outdoor areas.
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                      <div>
                        <p className="text-gray-800">
                          Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.
                          <br /><br />
                          The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.
                          <br /><br />
                          For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.
                          <br /><br />
                          Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler’s favourite restaurants and cafés, including Red Door Bistro, Rimrock Café, Creekbread, Dusty’s, BReD and Rockit Coffee.
                          <br /><br />
                          Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.
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

                  {/* Other Things to Note Section */}
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
                      <h2 className="text-2xl font-bold">Other things to note</h2>
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
                          Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team can assist with restaurant reservations, private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and personalized itinerary planning.
                          <br /><br />
                          One of the benefits of booking your Whistler stay with AceHost is that we can help arrange Whistler Blackcomb lift tickets, Epic Passes and season passes directly through Vail Resorts. Provided everything is purchased and completed at least seven days before arrival, we can arrange for passes to be delivered directly to the home, so guests can avoid waiting in line to sign a form and pick up their passes, which is a perk only a handful of operators are able to do, and something Vail does not offer as a service.
                          <br /><br />
                          Optional third-party services are charged separately unless specifically stated as included with your reservation. Please reach out before arrival so our team can help plan your stay.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Getting Around Section */}
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
                      <h2 className="text-2xl font-bold">Getting around</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <p className="text-gray-800">
                          Can access Creekside & Whistler village via the private gondola, taxi, ride app, private driver, or vehicle rentals. Transportation is not necessary to ski since the property is located right on Whistler mountain.
                        </p>
                      </div>
                      <div className="relative aspect-[4/3]">
                        <img
                          src="/optimized/2919-Heritage/description-4.jpg"
                          alt="Getting around"
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
                      <h2 className="text-2xl font-bold">Registration details</h2>
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
