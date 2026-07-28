import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function WhistlerVillagePenthouse3BdrWalkToSkiDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Welcome to Penthouse unit, in the iconic Tyndall Lodge building in the heart of Whistler Village.
                    <br /><br />
                    This bright and spacious unit sits right in the centre of Whistler Village, steps from the famous Olympic Rings and only a short walk to both Whistler and Blackcomb gondolas.
                    <br /><br />
                    Hosting up to 8 guests comfortably, the home features three sleeping areas, 5 beds, and two full bathrooms.
                    <br /><br />
                    Location and layout doesn't get any better than this!
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <img
                          src={getGalleryPhotoSrc(photos[1])}
                          alt="Whistler Village Penthouse Interior"
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
                        <h2 className="text-2xl font-bold">The Space</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        Hosting up to 8 guests comfortably, the home features 4 sleeping areas, 5 beds (+ 1 futon sofa bed with extra linens/sheets), and 2 full bathrooms. One of the highlights is the unique loft bedroom with bunkbeds, tall ceilings and a cozy chalet feel that kids and extra guests absolutely love. The main bedrooms are warm and inviting with plenty of natural light, making it the perfect place to unwind after a full day outdoors.
                        <br /><br />
                        Enjoy a fully equipped kitchen for home-cooked dinners, a spacious living room for evening hangouts and movie nights, and complimentary parking included with your stay. This is the ideal base for families, friends or small groups looking to enjoy Whistler with comfort, style and convenience.
                        <br /><br />
                        Ski in Ski out Access: No need to enter a vehicle to access the slopes, though the condo is about an 8-10 minute walk to and from the slopes.
                      </p>
                      <ul className="list-disc pl-5 space-y-2 text-gray-800 mb-6">
                        <li>Sleeps up to 8 guests</li>
                        <li>3 sleeping areas: two full bedrooms and a loft bedroom with bunkbeds. There is also a pullout futon in the living room, for those looking for an extra space to sleep.</li>
                        <li>5 beds</li>
                        <li>Two full bathrooms</li>
                        <li>Penthouse unit with high ceilings and great natural light</li>
                        <li>Unique loft layout that adds a fun and memorable touch</li>
                        <li>Fully equipped kitchen for cooking and dining at home</li>
                        <li>Spacious living area perfect for relaxing or entertaining</li>
                        <li>Free underground parking included</li>
                        <li>Located in the well-known Tyndall Lodge building</li>
                      </ul>
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
                    <p className="text-gray-800 max-w-4xl">
                      You could not be more central. Tyndall Lodge is positioned in the middle of Whistler Village, directly beside the Olympic Plaza, skating rink, playground and the legendary Olympic Rings. Walk out your door into the village shops, cafes and restaurants, or stroll straight to the gondolas for skiing and snowboarding in winter and biking in summer.
                      <br /><br />
                      Everything Whistler is famous for is only minutes away on foot. Enjoy après-ski, live music, boutique stores, spas, parks, lakes and walking trails without ever needing a car. This location is ideal for guests looking for the perfect blend of fun, convenience and mountain charm.
                    </p>
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
                            d="M12.65 10C11.83 7.67 9.61 6 7 6C3.69 6 1 8.69 1 12C1 15.31 3.69 18 7 18C9.61 18 11.83 16.33 12.65 14H17V18H21V14H23V10H12.65ZM7 14C5.9 14 5 13.1 5 12C5 10.9 5.9 10 7 10C8.1 10 9 10.9 9 12C9 13.1 8.1 14 7 14Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold">Guest Access</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      Access via code sent out 1 day prior to arrival.
                    </p>
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
                      <h2 className="text-2xl font-bold">Registration Details</h2>
                    </div>
                    <p className="text-gray-800 max-w-4xl">
                      <strong>Municipal registration number:</strong> 00015445
                      <br />
                      <strong>Provincial registration number:</strong> PM280640349
                    </p>
                  </div>
                </div>
    </>
  );
}
