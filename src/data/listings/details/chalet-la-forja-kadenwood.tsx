import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function ChaletLaForjaKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Luxury Ski-In/Out | Pool | Hot tub | Gym | Gondola; Welcome to
                    Chalet La Forja in Kadenwood. This 10,000+ square foot home
                    amongst the locals is considered one of, if not the most
                    prestigious luxury rental in all of Whistler. Perfect for 1 or 2
                    families seeking their own bedrooms, with the option to host more
                    people.
                    <br />
                    <br />
                    Ranked one of VRBO&apos;s Top 10 vacation rentals in 2023.
                    <br />
                    <br />
                    Housekeeping included in price every other day. Butler included
                    daily in winter.
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
                        <span className="font-bold">Private Butler &amp; Daily Cleaning:</span>{" "}
                        (Private butler included December 1 through April 30 and
                        optional in summer at extra cost, please inquire). In addition
                        to serving breakfast, lunch, and dinner, the butler is
                        responsible for all food and drink service throughout the day as
                        well as cleanup and set up of dining table and kitchen area. To
                        create the perfect ambiance, they will set up the hot tub, light
                        the fire, and adjust the music and household functions. Get your
                        daily dose of caffeine from your own personal barista. Overall,
                        the butler is there to make your stay as smooth and comfortable
                        as possible. Daily cleaning is included in your stay, every other
                        day.
                      </p>
                      <p className="text-gray-800 mb-6">
                        This luxurious home includes a gourmet chefs kitchen with a
                        butlers pantry, two private offices, state of the art
                        electronics with built in Sonos speaker systems in every room,
                        gym, hot-tub, heated pool, steam shower, private gondola, and
                        access to and from the ski-hill from your front door. Full 9
                        bedroom home (8+1 layout), with an additional single bed in a
                        smaller private room with a window.
                      </p>
                      <p className="text-gray-800">
                        Included when booking this property, we will help you with all
                        your VIP experiences such as coordinating chefs, chalet
                        hosts/servers, helicopter experiences, transportation to and
                        from airport, snowmobiling, restaurant reservations and
                        recommendations, hiking recommendations, and more.
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
                        Full 8+1 bedroom home, with an additional single bed in bedroom 7, a smaller private room with a window. Converted office space that adjoins bedroom 2 and shares the same bathroom. Able to access through own door leading to the hallway.
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
                        For a small daily fee, the pool can be set to hot tub temperatures at 104 degrees.
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
                          The Kadenwood neighbourhood is perched on the south side of
                          Whistler Mountain, high above Whistler Creekside and is easily
                          accessible by road or 5 minutes by private gondola from the base
                          of Creekside. Kadenwood provides easy access to ski-in/ski-out
                          trails on the edge of an old-growth forest and offers astounding
                          Coastal Range views.
                        </p>
                        <p className="text-gray-800">
                          Take the 5-minute gondola ride, a 5-minute drive, or a quick ski
                          ride down will bring you to all the amenities in Creekside
                          Village. Take advantage of some of Whistler's best
                          restaurants and shops. Enjoy quality coffee and delicious breads
                          and pastries at Rockit Coffee and Bred.
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
                    
                    <p className="text-gray-800 max-w-4xl">
                      Red Door Bistro, Rimrock
                      Cafe, Cure Lounge (my favorite), Creekbread, and Dusty's.
                      Enjoy Creekside's newest restaurant Mekong, this
                      fine-dining Thai restaurant and gorgeous patio is a local
                      favorite. Tuck into delicious authentic food and imaginative
                      cocktails. Shop at 122 West for beautiful home decor and
                      Abigail's for stylish clothing. The Cop-Op gas station in
                      Creekside has a convenience store and is open until 10 pm. For
                      groceries, the Creekside Market is also within walking distance.
                      Included when booking this property, we will help you with all
                      your VIP experiences such as coordinating chefs, chalet
                      hosts/servers, helicopter experiences, transportation to and
                      from the airport, snowmobiling, restaurant reservations and
                      recommendations, hiking recommendations, and more.
                    </p>
                  </div>
                </div>
    </>
  );
}
