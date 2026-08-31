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
          Welcome to Slope Side Chalet in Kadenwood, a true Whistler luxury log chalet with exceptional ski-in/ski-out access directly beside the patio and ski room. Inside, soaring timber ceilings, warm wood finishes, heated stone floors, a grand fireplace and expansive windows create the classic alpine atmosphere. After a day on the mountain, unwind in the private outdoor hot tub, steam shower or home gym, with everything designed for an effortless and memorable Whistler stay with family and friends.
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
              <h2 className="text-2xl font-bold">The space</h2>
            </div>
            <p className="text-gray-800 mb-6">
              Boasting 7 bedrooms, 12 beds, and 7.5 bathrooms, this property offers an ideal accommodation option for groups and families seeking comfort and space. Indulge and relax in the large steam shower or soak in the outdoor hot tub, with direct views overlooking the scenic valley and lake. If you still have energy after skiing, keep up with your fitness routine in the home gym equipped with yoga mats, weights, and cardio machines.
            </p>
            <p className="text-gray-800 mb-6">
              This home is the perfect mountain retreat. The property is tucked away high up on the mountainside in the exclusive and private Kadenwood neighbourhood, providing access to the private Kadenwood gondola.
            </p>
            <p className="font-bold mb-2">Features*</p>
            <p className="text-gray-800 mb-6">
              The property features easy ski-in ski-out access, a hot tub, a home gym, a media room, a steam shower, built-in Sonos across the main living areas, and private access to the Kadenwood gondola.
            </p>
            <p className="font-bold mb-2">Location:</p>
            <p className="text-gray-800">
              Slope Side is exceptionally well positioned within Kadenwood, with the ski trail running directly beside the home for convenient access to and from Whistler Mountain. The private Kadenwood Gondola also connects the neighbourhood with Creekside Village in approximately five minutes. Guests can enjoy the quiet and privacy of a mountainside chalet while keeping the lifts, restaurants, cafés and groceries of Creekside within easy reach.
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
              <h2 className="text-2xl font-bold">BEDROOM LAYOUT:</h2>
            </div>

            <p className="font-bold mb-2">UPPER LEVEL:</p>
            <p className="mb-4">
              • Master Bedroom 1- has a beautiful king bed with a walk-in closet, located at the end of the corridor for ultimate privacy. With a spacious ensuite walk-in shower and bathtub.
            </p>

            <p className="font-bold mb-2">MID LEVEL:</p>
            <p className="mb-4">
              • Bedroom 2- The room includes one queen and one twin bed with an ensuite shower. This floor is located one level below the upper. This room is accessed through the den room and next to bedroom 3.
            </p>
            <p className="mb-4">
              • Bedroom 3- has a single bed and a bunk bed with a twin bed on top and a Queen below. Ensuite bathroom with a shower and bathtub.
            </p>
            <p className="mb-4">
              • (Half) Bedroom 8- Is a half bedroom with a cozy queen bed on the mezzanine loft above the den room.
            </p>

            <p className="font-bold mb-2">MAIN LEVEL:</p>
            <p className="mb-4">
              • Bedroom 4- Is located on the main floor beside the living room with a plush king bed. There is a powder bathroom on this floor and the ground floor bathroom with a walk in shower can be used.
            </p>

            <p className="font-bold mb-2">LOWER LEVEL:</p>
            <p className="mb-4">
              • Bedroom 5- is located on the ground floor, it has a bunk bed with a bottom double bed and a top twin bed with an ensuite bathroom with a shower. It is next to bedroom 6.
            </p>
            <p className="mb-4">
              • Bedroom 6-has a queen bed with an ensuite bathroom with a shower. A spacious room with beautiful views from the patio doors with access to the backyard.
            </p>
            <p className="mb-4">
              Bedroom 7- has a queen bed with an ensuite bathroom and shower. Direct access to the hot tub.
            </p>
            <p className="mb-4">
              • There is an additional large bathroom on this floor that includes a large steam shower.
            </p>
            <p className="mb-4">
              Living room TV: There is now a very large HD screen TV located in the living room (not shown in photos), with access to Netflix, Amazon Prime, and a TSN subscription for live sports.
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
            <h2 className="text-2xl font-bold">Neighbourhood highlights</h2>
          </div>
          <p className="text-gray-800 max-w-4xl mb-6">
            Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler’s favourite restaurants and cafés, including Red Door Bistro, Rimrock Café, Creekbread, Dusty’s, BReD and Rockit Coffee.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.
          </p>
          <h2 className="text-2xl font-bold mb-4">Getting around</h2>
          <p className="text-gray-800 max-w-4xl">
            Located in the exclusive Kadenwood neighbourhood, high on the Southside of Whistler mountain. A 5 minute gondola ride, 5 minute drive, or a quick ski ride down will bring you to all the amenities in Creekside Village, including access to Whistler Mountain via Creekside Gondola.
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
                  <span>Wifi</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Washer &amp; dryer</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Fully equipped kitchen</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Dining table</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Outdoor dining area</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Dedicated ski room</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Heating</span>
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span>
                  <span>Private Kadenwood gondola access</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Airbnb disclosures */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-4">Services</h2>
          <p className="text-gray-800 max-w-4xl mb-2">Pets allowed</p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Assistance animals are always allowed
          </p>
          <h3 className="font-semibold mb-3">Additional rules</h3>
          <p className="text-gray-800 max-w-4xl mb-6">
            No pets unless requested and approved
          </p>
          <h3 className="font-semibold mb-3">Not included</h3>
          <p className="text-gray-800 max-w-4xl">Air conditioning</p>
        </div>

        {/* Guest Access and Services */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-4">Guest access</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Guests have private access to the entire home, including the garage, driveway, private hot tub, ski room, gym and all advertised living spaces and amenities.
          </p>
          <h2 className="text-2xl font-bold mb-4">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Ski lift pass booking &amp; delivery: One of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Optional third-party services are charged separately unless specifically stated as included with your reservation.
          </p>
          <p className="text-gray-800 max-w-4xl mb-6">
            Please don't hesitate to reach out if you need anything!
          </p>
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
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
            Experience the ultimate luxury ski vacation at Slope Side Chalet.
            Nightly rates range from $2,600 to $6,000 depending on the season, with
            a minimum stay of 3 nights (7 nights during Christmas and New Year).
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
