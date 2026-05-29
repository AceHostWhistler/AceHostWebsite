import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function ScandinavianMountainsideRetreatPembertonMeadows50AcresDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-16 max-w-4xl">
                    Looking for a remote getaway in a state-of-the-art home?
                    <br />
                    <br />
                    Welcome to Pemberton Meadows Escape. This 5-bed, 5-bath award-winning property was designed with the eye of a leading Japanese architect. At this estate, guests can experience 50 acres of surrounding private land and breathtaking panoramic views of the Pemberton Valley Mountain Range. This home provides total privacy in a tranquil setting – perfect for families or groups seeking luxury living in a peaceful, natural environment. Included in the bookings at Pemberton Meadows, guests can enjoy an enhanced experience with a private chef and butler. Our chefs provide a premium dining experience, using only fresh, locally sourced ingredients from Pemberton Valley farms.
                    <br />
                    <br />
                    For weddings, the venue fee is between $30,000-35,000 and includes an introduction to our favorite wedding planner in town, plus a 2-night stay at the home.
                  </p>

                  {/* The Space Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14026-Editcopy.jpg"
                          alt="Pemberton Meadows Interior"
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
                        Pemberton Meadows has modernly furnished rooms, including a grand master bedroom, a bunk room with 4 single beds, and 3 additional bedrooms with King and Queen beds. This elegant property welcomes high-end tasteful furnishings and a sociable open plan living space. The floor to ceiling windows invite ample natural light, creating a welcoming ambience for ultimate relaxation.
                      </p>
                      <p className="text-gray-800 mb-6">
                        Whether you're lounging by the cozy log fireplace, working out in the on-site gym or taking a soak in the hot tub, you will be spoiled by the 360-degree views of the valley and the surrounding mountains. Looking to get active in the great outdoors of British Columbia? Enjoy outdoor activities right on the doorstep of Pemberton Meadows, with an array of scenic hiking trails and natural hot springs. We are more than happy to direct you to our favorite outdoor activities!
                      </p>
                    </div>
                  </div>

                  {/* Bedroom Layout Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0 order-1 md:order-2">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14105-Edit.jpg"
                          alt="Pemberton Meadows Bedroom"
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

                      <p className="mb-6">
                        Pemberton Meadows has modernly furnished rooms, including a grand master bedroom, a bunk room with 4 single beds, and 3 additional bedrooms with king and queen beds.
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
                      This luxury escape is located near BC's infamous Lillooet River in the peaceful Pemberton Meadows neighborhood. Within walking distance from the front door, this property has a scenic viewpoint capturing the entirety of the Lillooet River – a perfect spot for taking photos.
                    </p>
                    <p className="text-gray-800 max-w-4xl">
                      If you're looking to host a one-of-a-kind event, such as a wellness or heli-retreat, even just a simple change of scenery, Pemberton Meadows Escape provides a harmonious blend of both luxury living and outdoor pursuit.
                    </p>
                  </div>
                  
                  {/* Wedding Venue Section */}
                  <div className="flex flex-col md:flex-row mb-20">
                    <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
                      <div className="relative aspect-[4/3] mb-2">
                        <Image
                          src="/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14319-Edit-2.jpg"
                          alt="Pemberton Meadows Wedding Venue"
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
                              d="M13 4V6.67L12 7.67L11 6.67V4H13M20 11V16C20 18.97 15.33 20.69 12 20.95C8.67 20.69 4 18.97 4 16V11C4 8.03 8.67 6.31 12 6.05C15.33 6.31 20 8.03 20 11M10 11.5H14V10H10V11.5Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <h2 className="text-2xl font-bold">Wedding Venue</h2>
                      </div>
                      <p className="text-gray-800 mb-6">
                        Pemberton Meadows Escape is an exceptional wedding venue, offering a stunning backdrop for your special day. Our venue fee is between $30,000-$35,000 and includes an introduction to our favorite local wedding planner who knows the property intimately.
                      </p>
                      <p className="text-gray-800 mb-6">
                        The wedding package also includes a 2-night stay at the home, allowing you to fully enjoy the property before and after your celebration. With panoramic mountain views and 50 acres of private land, your wedding will be an unforgettable experience in one of British Columbia's most beautiful settings.
                      </p>
                    </div>
                  </div>
                </div>
    </>
  );
}
