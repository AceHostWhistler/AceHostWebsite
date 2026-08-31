import React from "react";
import Image from "next/image";
import type { ListingDetailsProps } from "../types";

export default function TimberHavenLuxurySkiInSkiOutKadenwoodDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-8 max-w-4xl">
          Welcome to your private Kadenwood mountain estate, an 8-bedroom luxury home with stunning views, ski-in/ski-out access, a private hot tub, beautiful furnishings, curated artwork, and access to Kadenwood’s private residents-only gondola.
        </p>
        <p className="text-gray-800 mb-8 max-w-4xl">
          With spacious living areas, outdoor dining, a ping pong table, multiple lounge spaces, and a main floor with 2 bedrooms including the Master Bedroom suite, this home is perfect for families, large groups, and guests who prefer minimal stairs during their stay.
        </p>
        <p className="text-gray-800 mb-8 max-w-4xl font-semibold">The space</p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Located in Kadenwood, Whistler’s favourite luxury ski-in/ski-out neighbourhood, this 8-bedroom mountain estate offers the perfect blend of privacy, comfort, and convenience. Perched high above Creekside and surrounded by old growth forest, the home features one-of-a-kind mountain views, elegant interiors, and plenty of room for groups to relax, gather, and enjoy Whistler in every season.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          The main floor is especially convenient, with 2 bedrooms including a primary suite, making it ideal for elderly guests or anyone who prefers to avoid stairs when coming in and out of the home. Across the 3 well-designed levels, guests can enjoy multiple living areas, a TV lounge, home office space, recreation room, ping pong table, and beautifully furnished spaces with tasteful artwork throughout.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          The open-concept living and dining area is designed for entertaining, with a warm mountain atmosphere, large windows, and plenty of space for everyone to come together. For larger groups, a spare dining table extension allows up to 16 guests to dine comfortably in the same room, perfect for family dinners, chef-prepared meals, and holiday gatherings.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Outside, enjoy a private hot tub, outdoor dining area, and peaceful alpine surroundings. In the winter, guests can take advantage of Kadenwood’s exceptional ski-in/ski-out access via the Peak to Creek run, along with the private residents-only gondola and groomed ski trail access. In the summer, the home is a beautiful base for hiking, biking, golfing, lake days, and relaxing in one of Whistler’s most exclusive communities.
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

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Bedroom/Home Layout:</h3>
        <p className="text-gray-800 mb-6 max-w-4xl">
          8 Bedrooms | Multiple Ensuite Bathrooms | Sleeps Large Groups Comfortably
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">Main Floor, Primary Living Level:</h4>
        <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 1, Primary Suite: King bed</p>
        <p className="text-gray-800 mb-2 max-w-4xl">
          Spacious primary bedroom with an ensuite bathroom featuring two sinks, a bathtub, and a walk-in shower.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          This main level bedroom is ideal for guests who prefer to avoid stairs, with the primary suite located on the same floor as the main living spaces.
        </p>

        <h4 className="text-xl font-semibold text-gray-900 mb-3">Mid Floor, Main Bedroom Level:</h4>
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

        <h4 className="text-xl font-semibold text-gray-900 mb-3">Basement Level:</h4>
        <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 7: Two twin beds and two full beds</p>
        <p className="text-gray-800 mb-4 max-w-4xl">
          Includes a private ensuite bathroom with one sink and a walk-in shower. This is a great room for kids, teens, or larger groups sharing.
        </p>
        <p className="text-gray-800 mb-2 max-w-4xl font-medium">Bedroom 8: Queen bed</p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          This bedroom does not have an ensuite, but has access to a bathroom with a steam shower on the basement level.
        </p>

        <p className="text-gray-800 mb-2 max-w-4xl font-medium">Dining Table for 12+:</p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          The dining table comfortably seats 8 guests with the standard chair setup. An extension leaf and 4 additional chairs are available and ready to use, allowing the table to accommodate 12+ guests comfortably.
        </p>

        <p className="text-gray-800 mb-2 max-w-4xl font-medium">Basement Bathroom:</p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Includes two sinks, a walk-in shower, and a steam shower.
        </p>
        <p className="text-gray-800 mb-8 max-w-4xl">
          This lower level is well-suited for additional guests, families with children, or anyone looking for a bit more separation from the main living areas. A very comfy couch to enjoy the TV!
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Guest access</h3>
        <p className="text-gray-800 mb-8 max-w-4xl">
          Guests have private access to the entire home, including the garage for 2 vehicles, large driveway, private hot tub, ski room, and all advertised living spaces and amenities.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Other things to note</h3>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Complimentary AceHost VIP concierge planning is included with every stay. Our local Whistler team is available to help make your trip seamless, from restaurant reservations and local recommendations to coordinating private chefs, airport transfers, private drivers, grocery pre-stocking, ski and snowboard rentals, instructors, childcare, in-home massage, snowmobiling, helicopter experiences and more.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Ski lift pass booking &amp; delivery: One of the perks of booking with AceHost is complimentary ski pass delivery directly to your door. We can arrange day passes, multi-day passes, season passes and more, helping you skip the ticket office, paperwork and extra stop upon arrival. Please reach out to us before purchasing your passes, as the booking will need to be made through our team in order for us to arrange delivery. We’re happy to guide you through the process and make it as easy as possible.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Optional third-party services are charged separately unless specifically stated as included with your reservation.
        </p>
        <p className="text-gray-800 mb-8 max-w-4xl">
          Please don't hesitate to reach out if you need anything!
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Neighbourhood highlights</h3>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Sitting almost 1,000 feet above the valley floor, Kadenwood is one of Whistler’s most exclusive ski-in/ski-out neighbourhoods. Set high above Creekside on Whistler Mountain, it offers incredible privacy, old-growth forest, beautiful mountain views and access to the private Kadenwood Gondola for residents and guests.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          The private gondola connects Kadenwood directly with Creekside Village in approximately five minutes. Creekside can also be reached by a short drive or, during ski season, directly from the mountain.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          For skiers, Creekside is an excellent place to start the day. While many visitors naturally begin from the main Whistler Village base, Creekside provides direct access to Whistler Mountain without needing to travel into the Village each morning. The upgraded 10-person Creekside Gondola increased out-of-base capacity by approximately 35%, while the upgraded Big Red Express increased uphill capacity by approximately 30%, helping improve mountain access and wait times.
        </p>
        <p className="text-gray-800 mb-6 max-w-4xl">
          Creekside Village has everything needed close to home, including Creekside Market for groceries and some of Whistler’s favourite restaurants and cafés, including Red Door Bistro, Rimrock Café, Creekbread, Dusty’s, BReD and Rockit Coffee.
        </p>
        <p className="text-gray-800 mb-8 max-w-4xl">
          Whistler Village is approximately a 10-minute drive away, giving guests easy access to the main Village while enjoying the privacy and peaceful mountain setting of Kadenwood.
        </p>

        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Heating and cooling</h3>
        <p className="text-gray-800 mb-2 max-w-4xl">Central air conditioning</p>
        <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">During your stay</h3>
        <p className="text-gray-800 mb-8 max-w-4xl">No pets</p>

        <div className="bg-gray-100 p-8 rounded-xl mb-20">
          <h2 className="text-2xl font-bold mb-4">Registration details</h2>
          <p className="text-gray-800 mb-2">Municipal registration number: 00015805</p>
          <p className="text-gray-800">Provincial registration number: PM800238143</p>
        </div>
      </div>
    </>
  );
}
