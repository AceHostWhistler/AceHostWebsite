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
                    Welcome to Two Cedars. Designed by the architects at OpenSpace, this state-of-the-art property welcomes 17 guests to the prestigious Kadenwood neighborhood in Whistler. This luxury property features ski-in ski-out access and quick access to the private Kadenwood Gondola offering service to the base of Creekside Village.
                  </p>
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    At AceHost, we are dedicated to providing a five-star experience. A private butler is included from December 1 through April 30; butler service is optional in summer at extra cost—please inquire.
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
                        <h2 className="text-2xl font-bold">The Space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        <strong>Private Butler:</strong> Private butler included December 1 through April 30 and optional in summer at extra cost (please inquire). In addition to serving breakfast, lunch, and dinner, the butler is responsible for all food and drink service throughout the day, as well as dining table set up/takedown, and cleanup around the kitchen areas. To create the perfect ambiance, they will set up the hot tub, light the fire, and adjust the music and household functions. Get your daily dose of caffeine from your own personal barista. Overall, the butler is there to make your stay as smooth and comfortable as possible.
                      </p>
                      <p className="text-gray-800 mb-6">
                        This 10,000 square ft property blends contemporary architecture with tasteful interior design, offering luxurious hospitality in one of Whistler's finest homes. The high-end furniture, floor-to-ceiling windows, and stunning artwork showcase an award-winning home that is vast yet intimate. Two Cedars has 7 bedrooms, each with a private en suite bathroom. With 12 beds in total, this home offers the perfect stay for a large group of family or friends, combining an open-plan living space with bedroom privacy. Amenities at Two Cedars include a large home theatre, an equipped gym, an outdoor & indoor hot tub, an infrared sauna, and foosball table.
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
                        <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                      </div>

                      <p className="font-bold mb-2">UPPER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Master bedroom 1-</span> has a plush king bed, located at the end of the top floor corridor for ultimate privacy. With an en-suite shower and bathtub and walk-in wardrobe.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 6-</span> has a queen bed, room is located on the top floor at the other end of the corridor to the master bedroom and next to bedroom 7.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 7-</span> has a king bed, this room is located at the other end of the corridor to the Master bedroom on the top floor. En-suite bathroom with a shower and bath. Very near to bedroom 6.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Additionally</span> a powder room on the main floor.
                      </p>

                      <p className="font-bold mb-2">MID-LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2-</span> is located on the main floor at the end of the corridor, far away from the kitchen and living room. It's the room on the left, with a king bed an en-suite bathroom, and a bathtub.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3-</span> is on the main floor at the end of the corridor, opposite bedroom 2. With a queen bed with an en-suite bathroom that has a shower.
                      </p>

                      <p className="font-bold mb-2">LOWER LEVEL:</p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4-</span> includes 2 x double beds, 2 x twin beds above. Located on the basement level at the opposite end of the corridor to the media room. It has an en-suite bathroom with a shower.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 5-</span> is on the basement level and opens into bedroom 4 through a sliding door partition. 1 x double bed and 1 x twin bunk bed. With an en-suite shower with a bath.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Additional bathroom-</span> There is an additional full bathroom on the basement level with a large bathroom with a walk-in shower.
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
                      <h2 className="text-2xl font-bold">Location</h2>
                    </div>

                    <div className="flex flex-col md:flex-row gap-8 mb-6">
                      <div className="md:w-1/2">
                        <p className="text-gray-800 mb-6">
                          Sitting almost 1,000 feet above the valley floor, Kadenwood is undoubtedly Whistler's top SKI IN/SKI OUT neighborhood. Guests have access to the Kadenwood residents and "guests only" private Kadenwood Gondola. The neighborhood is located a 5-minute drive up a private road. Can also be accessed via the private gondola, and a quick ski ride down will bring you to all the amenities in Creekside Village, including the ski gondola.
                        </p>
                        <p className="text-gray-800 mb-6">
                          On your doorstep, you have some of Whistler's best restaurants. Enjoy quality coffee and delicious breads and pastries at Rockit Coffee and Bred coffee shop. Red Door Bistro, Rimrock Cafe, Cure Lounge (my favourite), Creekbread, Mekong, and Dusty's are all other great options for dining. Shop at 122 West for beautiful home decor and Bask & Co for stylish clothing. The Husky gas station has a 24-hour convenience store. For groceries, the Creekside Market. All can be accessed via the private gondola and a short walk, or a short drive from the home.
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

                  {/* Property Video Tour Section */}
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
                            d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Experience Two Cedars</h2>
                    </div>
                    
                    <div className="mb-6">
                      <div>
                        <p className="text-gray-800 mb-6">
                          Take a virtual tour of this stunning property with our video showcase. Experience the elegance and luxury of Two Cedars Kadenwood, from its breathtaking mountain views to its meticulously designed interior spaces.
                        </p>
                        <p className="text-gray-800 mb-6">
                          The video highlights the property's exceptional features including the spacious living areas, gourmet kitchen, private bedrooms, and outdoor spaces - all designed to provide the ultimate luxury Whistler experience. See firsthand why Two Cedars is one of Whistler's most prestigious vacation properties.
                        </p>
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
                      <h2 className="text-2xl font-bold">Additional Services</h2>
                    </div>
                    
                    <p className="text-gray-800 mb-4">
                      We will cater to ANYTHING you need. Included VIP Concierge service is provided for any special requests such as the top private chefs in Whistler, restaurant reservations, assistance with vehicles and shuttle service, bookings with extra experiences, etc... Ben is happy to join you on the hill to show you the mountain as well as show the ski in ski out.
                    </p>
                    
                    <div className="bg-gray-50 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-bold mb-4">Included in price:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>Host/Butler (Dec 1–Apr 30; optional in summer at extra cost, 10–12 hours per day when included)</li>
                        <li>Full complimentary VIP concierge service</li>
                        <li>Restaurant reservations and recommendations</li>
                        <li>Ski lift pass pick up and delivery</li>
                      </ul>
                    </div>
                    
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-bold mb-4">Additional at-cost services:</h3>
                      <ul className="list-disc pl-6 space-y-2 text-gray-800">
                        <li>Airport Transfers</li>
                        <li>Private Chef (Highly recommended)</li>
                        <li>Chalet food & beverage stocking upon arrival</li>
                        <li>Private Driver</li>
                        <li>Massages</li>
                        <li>Ski equipment rental</li>
                        <li>Childcare</li>
                        <li>Ski Instructors</li>
                        <li>Heli/snowmobile Experiences</li>
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
