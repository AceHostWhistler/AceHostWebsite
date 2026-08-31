import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { ListingDetailsProps } from "../types";

export default function TimberHavenLuxurySkiInSkiOutKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Welcome to your private Kadenwood mountain estate, an 8-bedroom luxury home for up to 16 guests with stunning views, ski-in/ski-out access, a private hot tub, sauna, central air conditioning, beautiful furnishings, curated artwork, and access to Kadenwood&apos;s private residents-only gondola.
                  </p>
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    With spacious living areas, outdoor dining, a ping pong table, multiple lounge spaces, a main-floor primary suite, and step-free access to the mid-level bedrooms through the garage, this home is well suited to families, large groups, and guests who prefer minimal stairs.
                  </p>
                  <p className="text-gray-800 mb-8 max-w-4xl font-semibold">The space</p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    Located in Kadenwood high above Creekside, this 8-bedroom mountain estate offers privacy, comfort, and convenient access to the slopes and village. Surrounded by old-growth forest, the home features expansive mountain views, elegant interiors, central air conditioning, and plenty of room for groups to relax in every season. Creekside&apos;s gondola, restaurants, shops, and groceries are reached by a short drive or the private Kadenwood gondola.
                  </p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    The main-floor primary suite is especially convenient for guests who prefer to avoid stairs. The mid-level bedroom floor can also be entered without steps through the garage or side door. Across the 3 well-designed levels, guests can enjoy multiple living areas, a TV lounge, home office space, recreation room, ping pong table, and beautifully furnished spaces with tasteful artwork throughout.
                  </p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    The open-concept living and dining area is designed for entertaining, with a warm mountain atmosphere, large windows, and plenty of space to come together. The standard dining setup seats 8; adding the table extension and 4 extra chairs seats 12 or more comfortably for family dinners and chef-prepared meals.
                  </p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    Outside, enjoy a private hot tub, outdoor dining area, and peaceful alpine surroundings. Inside, unwind in the sauna or enjoy the recreation spaces. In winter, guests can use Kadenwood&apos;s ski-in/ski-out access via the Peak to Creek run, the private residents-only gondola, and groomed neighbourhood ski trails. In summer, the home is a beautiful base for hiking, biking, golfing, and lake days.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Inside Timber Haven</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-5xl">
                    {[
                      "/photos/properties/Timber Haven John Harris/Timber Haven cover.png",
                      "/photos/properties/Timber Haven John Harris/03 - 20260506 A7M4 03 A1_00165.jpg",
                      "/photos/properties/Timber Haven John Harris/20 - 20260506 A7M4 02 A1_09946.jpg",
                      "/photos/properties/Timber Haven John Harris/8D487CA0-D240-4A51-AC47-9B142E4DEE05.PNG.jpg",
                    ].map((photo, index) => (
                      <div key={photo} className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-md bg-gray-100">
                        <Image
                          src={photo}
                          alt={`Timber Haven description photo ${index + 1}`}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 560px"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Bedroom/Home Layout</h3>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    8 Bedrooms | Multiple Ensuite Bathrooms | Sleeps Large Groups Comfortably
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Main Floor, Primary Living Level</h4>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 1, Primary Suite: King bed</p>
                  <p className="text-gray-800 mb-2 max-w-4xl">
                    Spacious primary bedroom with an ensuite bathroom featuring two sinks, a bathtub, and a walk-in shower.
                  </p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    This main level bedroom is ideal for guests who prefer to avoid stairs, with the primary suite located on the same floor as the main living spaces.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Mid Floor, Main Bedroom Level</h4>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Mid floor can be accessed via the garage side door or the garage, also providing step free access to the second floor bedrooms.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 2: King bed</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Includes a private ensuite bathroom with one sink and a walk-in shower.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 3: King bed</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Includes a private ensuite bathroom with one sink and a bathtub.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 4: Queen bed</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Shares access to an ensuite/shared bathroom with Bedroom 5. The bathroom includes two sinks and a walk-in shower.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 5: King bed</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Shares access to an ensuite/shared bathroom with Bedroom 4. The bathroom includes two sinks and a walk-in shower.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 6: Queen bed</p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    This bedroom does not have an ensuite bathroom.
                  </p>

                  <h4 className="text-xl font-semibold text-gray-900 mb-3">Basement Level</h4>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 7: Two twin beds and two full beds</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    Includes a private ensuite bathroom with one sink and a walk-in shower. This is a great room for kids, teens, or larger groups sharing.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 8: Queen bed</p>
                  <p className="text-gray-800 mb-4 max-w-4xl">
                    This bedroom does not have an ensuite, but has access to a bathroom with a steam shower on the basement level.
                  </p>
                  <p className="text-gray-800 mb-2 max-w-4xl font-medium">Common Basement Bathroom</p>
                  <p className="text-gray-800 mb-6 max-w-4xl">
                    Includes two sinks, a walk-in shower, and a steam shower.
                  </p>
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    This lower level is well-suited for additional guests, families with children, or anyone looking for a bit more separation from the main living areas. A very comfy couch to enjoy the TV!
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Guest Access</h3>
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Guests have private access to the entire home, including the 2-car garage, driveway, hot tub, sauna, ski room, decks, and indoor living and recreation spaces.
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Concierge and Additional Services</h3>
                  <p className="text-gray-800 mb-8 max-w-4xl">
                    Complimentary concierge assistance is included. AceHost can help coordinate private chefs, airport transfers, restaurant reservations, equipment rentals, instructors, and Whistler activities. Ski-pass booking and delivery can be arranged when passes are purchased through AceHost in advance. Third-party services, activities, rentals, and provider charges are not included in the accommodation rate and are billed separately.
                  </p>

                  <div className="bg-gray-100 p-8 rounded-xl mb-20">
                    <h2 className="text-2xl font-bold mb-4">Registration details</h2>
                    <p className="text-gray-800 mb-2">Municipal registration number: 00015805</p>
                    <p className="text-gray-800">Provincial registration number: PM800238143</p>
                  </div>
                </div>
    </>
  );
}
