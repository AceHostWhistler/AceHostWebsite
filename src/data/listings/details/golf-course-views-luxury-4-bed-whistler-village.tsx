import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function GolfCourseViewsLuxury4BedWhistlerVillageDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    This cozy, standalone chalet sits right on Nicklaus North Golf Course with stunning views of Hole 14. 
                    Enjoy a private hot tub, media room, wood-burning fireplace, and chef's kitchen. Just a short drive to 
                    Whistler Village and the ski lifts, plus being north of the village helps you skip the city traffic after skiing.
                  </p>

                  {/* Instagram Reel Video - Centered and Larger */}
                  <div className="flex justify-center mb-16">
                    <div className="w-full max-w-lg">
                      <div className="rounded-xl overflow-hidden shadow-2xl bg-white">
                        <div className="flex flex-col h-full">
                          <div className="p-6 border-b bg-gradient-to-r from-gray-50 to-white">
                            <h3 className="text-xl font-bold text-center text-gray-900">
                              Muirfield Golf Course Views Walkthrough Video
                            </h3>
                          </div>

                          <div
                            className="aspect-w-9 aspect-h-16 relative"
                            style={{ minHeight: "690px" }}
                          >
                            <div className="absolute inset-0 w-full h-full">
                              <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.instagram.com/reel/DQCt3vQAR-3/embed/?utm_source=ig_embed&utm_campaign=loading&hidecaption=1&utm_medium=embed&autoplay=false"
                                frameBorder="0"
                                scrolling="no"
                                loading="lazy"
                                allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                title="Muirfield Golf Course Views Walkthrough Video"
                              ></iframe>
                            </div>
                          </div>

                          <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t">
                            <p className="text-sm text-gray-600 text-center">
                              Take a virtual tour of this stunning golf course property
                            </p>
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
                          src={getGalleryPhotoSrc(photos[1])}
                          alt="Golf Course Views Interior"
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
                      <p className="text-gray-800">
                        Tucked into one of Whistler's most desirable year-round locations, this warm and welcoming chalet sits directly on the 14th hole of the iconic Nicklaus North Golf Course. In summer, enjoy lush green views from your private backyard, watch golfers play through, sip your morning coffee in the sun, or fire up the grill for an evening BBQ with the mountains as your backdrop. It's the perfect setting for a relaxed, scenic escape.
                      </p>
                      <p className="text-gray-800 mt-4">
                        Inside, the home blends natural wood and stone textures with modern comforts. The open-concept layout includes a cozy living area with a wood-burning fireplace, a spacious dining table for 10, a breakfast nook, and a fully equipped chef's kitchen. A separate media room makes movie nights easy and fun for the whole group.
                      </p>
                      <p className="text-gray-800 mt-4">
                        In winter, you're just a quick 7-9-minute drive to the heart of Whistler Village and the ski lifts. Staying north of the village means you can avoid the Vancouver city day trip traffic congestion, making your ski days a lot more convenient.
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Muirfield Golf Course/03 - 20250820 A7M4 01 A1_00186.jpg")}
                          alt="Golf Course Views Bedroom"
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

                      <p className="mb-4">
                        <span className="font-medium">Bedroom 1 (primary):</span> King bed + TV with tub and shower (separate)
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 2:</span> King bed + ensuite with tub-shower
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 3:</span> 2 single beds
                      </p>
                      <p className="mb-4">
                        <span className="font-medium">Bedroom 4:</span> 1 single bed + TV
                      </p>
                      
                      <p className="mt-6 font-medium">Registration details</p>
                      <p className="mb-1">Municipal registration number: 00015211</p>
                      <p className="mb-4">Provincial registration number: PM264215843</p>
                    </div>
                  </div>

                  {/* Exterior Views Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src={getGalleryPhotoSrc("/photos/properties/Muirfield Golf Course/44 - 20250820 MM4P 01 0016.jpg")}
                          alt="Golf Course Views Exterior"
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
                              d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Exterior Views</h2>
                      </div>
                      <p className="text-gray-800">
                        Enjoy stunning views of the surrounding mountains and golf course from this beautiful property. The chalet's exterior showcases classic mountain architecture with modern touches, perfectly complementing the natural surroundings.
                      </p>
                      <p className="text-gray-800 mt-4">
                        The property offers ample outdoor space for relaxation and entertainment, with easy access to the golf course and nearby trails. In summer, the lush green surroundings create a peaceful retreat, while winter brings a magical snowy landscape just minutes from Whistler's world-class skiing.
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
                    <p className="text-gray-800 max-w-4xl">
                      This property is ideally located on the Nicklaus North Golf Course, offering stunning views and a peaceful setting. It's just a short 7-9 minute drive to Whistler Village and the ski lifts. Being north of the village means you can avoid the Vancouver day-tripper traffic congestion after skiing. The location is perfect for both summer golf getaways and winter ski holidays, providing easy access to all of Whistler's attractions while enjoying a tranquil setting away from the hustle and bustle.
                    </p>
                  </div>
                </div>
    </>
  );
}
