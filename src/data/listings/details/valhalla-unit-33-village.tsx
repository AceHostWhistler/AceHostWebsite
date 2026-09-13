import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

export default function ValhallaUnit33VillageDetails({
  photos,
}: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Stay in the centre of main Whistler Village at Valhalla, a rare 3-bedroom townhouse with your own private hot tub. Steps from Marketplace, Olympic Plaza and the Village Stroll, you can walk to coffee shops, the ski hill and lifts, restaurants, groceries and après without a car. Enjoy the space and privacy of a townhouse, a cozy fireplace and free underground parking, all tucked into a quieter Village complex. A standout location for families and friends who want Whistler on their doorstep.
        </p>

        <div className="flex flex-col mb-20">
          <div className="flex flex-col md:flex-row mb-10">
            <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
              <div className="relative aspect-[4/3] mb-2">
                <Image
                  src={getGalleryPhotoSrc(photos[3])}
                  alt="Valhalla Peaks balcony"
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
                Welcome to Valhalla Peaks, your three-bedroom townhouse in the heart of Whistler Village, where you can walk to the ski hill in the morning and walk home after a day on the slopes. With your own private hot tub, a cozy gas fireplace and Village restaurants on your doorstep, this is a home made for the full Whistler ski-town experience.
                <br />
                <br />
                Finding a three-bedroom townhouse with this combination of space, privacy, a private hot tub and a central Village address is something special. Enjoy room to spread out while keeping skiing, dining, shopping and après within walking distance.
                <br />
                <br />
                <strong>Living, dining and your private balcony</strong>
                <br />
                The main living area is an inviting place to return to after skiing. Leave your equipment in the entry-level storage room, settle into the comfortable seating and warm up beside the gas fireplace. A 55-inch Smart TV and an open connection to the kitchen and dining area make it easy for everyone to spend time together.
                <br />
                <br />
                The fully equipped kitchen includes stainless-steel appliances, supplied cookware, and drip and French-press coffee options. Prepare breakfast before walking to the lifts, gather around the dining table with seating for six, or enjoy a relaxed dinner at home.
                <br />
                <br />
                Step outside to your private balcony, where your own hot tub overlooks the surrounding Whistler peaks. Walk home from the ski hill, change out of your ski gear and enjoy a well-earned soak without sharing the hot tub with other guests. It is equally inviting for morning relaxation or an evening under the stars. A BBQ is also available for meals at home.
              </p>
              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center">
                  <FaBed className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 bedrooms · 5 beds</span>
                </div>
                <div className="flex items-center">
                  <FaBath className="text-gray-600 mr-2" size={20} />
                  <span className="text-gray-800">3 baths</span>
                </div>
              </div>
              <p className="text-gray-800">
                <strong>Location: walk to the ski hill, walk home to your hot tub</strong>
                <br />
                Valhalla Peaks is located in Whistler Village itself, in the convenient Village North area. You are staying within the Village, rather than in an outlying neighbourhood that requires a drive to reach the ski hill and restaurants.
                <br />
                <br />
                The Whistler Village Gondola is approximately a 12-minute walk through the pedestrian Village. Head out for a day on Whistler Blackcomb, with cafés, breakfast stops and ski rental shops along the way. Allow extra time when walking in ski boots or snowy conditions.
                <br />
                <br />
                At the end of the ski day, walk back through the Village to your townhouse. Stop for après, pick up something for dinner or head straight home to the fireplace and private hot tub. There is no need to organise a car journey just to get between your home and the ski hill.
                <br />
                <br />
                A complimentary Village shuttle also stops nearby, giving you another convenient option when carrying equipment or travelling with younger skiers.
                <br />
                <br />
                Being able to walk to and from the mountain makes a real difference to a Whistler holiday. Early risers can head to the lifts while others enjoy a slower morning, and anyone finishing their ski day sooner can make their own way home. Your group does not have to work around one driver&apos;s schedule.
                <br />
                <br />
                <strong>Whistler Village on your doorstep</strong>
                <br />
                Marketplace and Fresh St. Market are directly across the street, while Olympic Plaza and the Village Stroll are just steps away. Morning coffee, groceries, shops, restaurants and après-ski are all close by.
                <br />
                <br />
                Enjoy the atmosphere of a proper ski town, from breakfast before the lifts to dinner after a day on the mountain. You can leave the car parked and experience the Village on foot.
                <br />
                <br />
                Despite this central location, Valhalla has a quieter residential setting than accommodation directly above the busiest Village nightlife. Enjoy Whistler&apos;s energy, then return to your own relaxing retreat.
                <br />
                <br />
                In summer, the same walkable location puts Village patios, shopping, walking and biking routes within easy reach.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-gray-800 max-w-4xl">
                Bedroom 1:
                <br />
                King bed, mountain views and a private ensuite bathroom with a tub/shower.
                <br />
                <br />
                Bedroom 2:
                <br />
                Queen bed, a full bathroom nearby and seasonal portable A/C.
                <br />
                <br />
                Bedroom 3:
                <br />
                Twin-over-twin bunk bed plus an additional single bed, with another full bathroom nearby. A practical setup for children, teens or friends travelling together.
                <br />
                <br />
                Living room:
                <br />
                Queen pull-out sofa for additional sleeping space.
                <br />
                <br />
                Maximum occupancy is 8 guests.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[6])}
                  alt="Valhalla Peaks bedroom"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-800 mb-6">
                <strong>Parking and ski storage</strong>
                <br />
                One reserved underground parking stall is included, plus access to one visitor parking space.
                <br />
                <br />
                A lockable ski and bike storage room is located at entry level, helping keep equipment secure and out of the main living areas. Collect your gear before walking to the ski hill, then store it when you return.
                <br />
                <br />
                <strong>Summer air conditioning</strong>
                <br />
                Two whisper-quiet portable A/C units are available from May 15 through October 15, one in the living room and one in Bedroom 2.
                <br />
                <br />
                <strong>Access note</strong>
                <br />
                One flight of stairs is required to enter the home. The townhouse also has multiple levels, so please consider this when booking for anyone with mobility limitations.
                <br />
                <br />
                Walk to the ski hill, walk home through the Village, and finish the day in your own private hot tub. That is the Valhalla Peaks experience.
              </p>
              <div className="mt-6 relative aspect-[4/3]">
                <Image
                  src={getGalleryPhotoSrc(photos[12])}
                  alt="Valhalla Peaks hot tub"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Additional features</h2>
          <ul className="text-gray-800 list-disc pl-6 space-y-1 max-w-4xl">
            <li>Fast Wi-Fi and a laptop/work area</li>
            <li>Board games and streaming apps</li>
            <li>In-suite washer and dryer with detergent supplied</li>
            <li>Fully equipped kitchen</li>
            <li>Dining table with seating for six</li>
            <li>Private hot tub</li>
            <li>Gas fireplace</li>
            <li>BBQ</li>
            <li>Keyless entry</li>
            <li>24/7 local support from AceHost Whistler</li>
          </ul>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            The entire 3-bedroom home is exclusively yours during your stay,
            including your private hot tub, so you can enjoy complete privacy.
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl">
            Staircase: Please note there is one flight of stairs to enter the
            unit. It is manageable for nearly all guests, including many elderly
            guests, but we like to be upfront so there are no surprises for
            anyone with mobility limitations or personal preferences. The
            benefit is that the home sits slightly elevated, allowing for
            beautiful scenic views over Whistler Village and the surrounding
            mountains.
          </p>
        </div>

        <div className="mb-16 border-t border-gray-200 pt-8">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800">
            Municipal registration number: 00014368
            <br />
            Provincial registration number: PM535952713
          </p>
        </div>
      </div>
    </>
  );
}
