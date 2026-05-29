import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home, Users, MapPin, Bed, Bath } from "lucide-react";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillageViewsLuxury25BedroomDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    This property is conveniently located for skiing, just a short walk from your front door! It's perfect for families visiting Whistler, with 2 bedrooms and 2 bathrooms.
                    <br />
                    <br />
                    The layout is spacious and offers views of Olympic Plaza and Blackcomb Mountain. The master bedroom has a queen bed, the second bedroom has 2 single beds and a queen sofa bed. The kitchen is fully equipped and there is a washing machine and dryer in the suite. The complex also has a dip pool and hot tub.
                    <br />
                    <br />
                    The property has recently been renovated and has all the comforts of home. Guests have access to the pool, hot tub, bike storage, ski/board storage, and one reserved parking spot. There are multiple entrances/exits and the stairs lead directly to the village. Our bedside table alarm clocks have USB ports, as do the backs of the sofa tables and under the island/bar.
                    <br />
                    <br />
                    Please sign our guest book and if you have a bottle of wine with a cork, write your country on it and place it in the wine rack.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2 rounded-lg overflow-hidden">
                        <Image
                          src={photos[3]}
                          alt="Whistler Village Views interior"
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2">
                      <div className="flex items-center mb-6">
                        <div className="bg-black text-white p-4 rounded-full mr-4">
                          <Home className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold">The Space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        Ski in/Ski out is just a short walk from your front door! This family friendly property offers every thing that you need while visiting Whistler. 2 bed/2 bath, a spacious layout with views over Olympic Plaza and Blackcomb Mountain. The master bedroom offers a queen bed, the second bedroom offers 2 singles and a pullout queen sofa bed. The kitchen is fully equipped and ready to enjoy. There is a W/D in the suite & the complex offers a dip pool and hot tub. Located steps from everything!
                      </p>
                      <p className="text-gray-800 mb-6">
                        This property has just been renovated and offers all of the luxuries of home to enjoy your days and evening in Whistler.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Scenic views, Courtyard view, Mountain view, Park view. Bathroom, Bathtub, Hair dryer, Cleaning products, Shampoo, Conditioner, Body soap, Hot water, Shower gel, Bedroom, laundry, Washer, Free dryer – In unit, Towels, bed sheets, soap, and toilet paper, Hangers, Clothing storage: closet, Entertainment 55" HDTV with Netflix, Family, Babysitter recommendations, Heating and cooling AC – split-type ductless system, Indoor fireplace: gas, Central heating, Home safety Smoke alarm Carbon monoxide alarm, Fire extinguisher, Internet and office Wifi. Dedicated workspace, Kitchen and dining, Kitchen Space where guests can cook their own meals, Refrigerator, Microwave, Cooking, basics, Pots, and pans, oil, salt and pepper, Dishes and silverware Bowls, chopsticks, plates, cups, etc. Freezer, Dishwasher, Stove, Oven, kettle, Coffee maker, Wine glasses, Toaster, Blender.
                      </p>
                      <p className="text-gray-800">
                        Pool, hot tub, bike storage, ski/ board storage, 1 parking spot reserved, some visitor parking.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={photos[4]}
                          alt="Whistler Village Views living space"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </div>
                    <div className="md:w-1/2 order-2 md:order-1">
                      <div className="flex items-center mb-6">
                        <div className="bg-black text-white p-4 rounded-full mr-4">
                          <Users className="h-6 w-6" />
                        </div>
                        <h2 className="text-2xl font-bold">Bedroom Layout</h2>
                      </div>

                      <p className="mb-4">
                        <span className="font-medium">Master Bedroom:</span> The master bedroom offers a Queen bed with an ensuite bathroom with a shower and bath.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2:</span> The second bedroom offers 2 singles with an ensuite bathroom with a shower.
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2.5:</span> A pullout Queen sofa bed in the main room.
                      </p>
                      <p className="mb-6">
                        Comfortably sleeping up to 6 guests.
                      </p>
                    </div>
                  </div>

                  {/* Location Section */}
                  <div className="mb-16">
                    <div className="flex items-center mb-6">
                      <div className="bg-black text-white p-4 rounded-full mr-4">
                        <MapPin className="h-6 w-6" />
                      </div>
                      <h2 className="text-2xl font-bold">Location</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Tyndall Stone Lodge is located in the heart of Village North, just steps from everything, including the free shuttle bus that will bring you to the base of both Whistler or Blackcomb Gondolas. Once organized concerts and events are allowed at Olympic Plaza are allowed again, you can enjoy all aspects from the privacy and comfort of your balcony. Tyndall Stone Lodge offers a shared dip pool and hot tub for the complex along with free underground secured parking.
                    </p>
                    <p className="text-gray-800 max-w-4xl mb-6">
                      Easy to walk everywhere and there is a free Village shuttle just steps from your property. You can walk to the chair lifts easily in 5 mins.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      <span className="font-bold">Location features:</span> Ski-in/ski-out – Near ski lifts Guests can access ski lifts without driving or taking paid transportation. Resort access Guests can use nearby resort facilities. Outdoor Private patio or balcony. Backyard - An open space on the property usually covered in grass. Outdoor furniture. Parking and facilities - Free parking on premises. Free street parking. Shared outdoor pool – Shared hot tub – available all year. Single level home, No stairs in home.
                    </p>
                  </div>
                </div>
    </>
  );
}
