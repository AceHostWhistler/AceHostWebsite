import React from "react";
import { getGalleryPhotoSrc } from "@/lib/optimizedPropertyPhotos";
import Image from "next/image";
import { FaBed, FaBath } from "react-icons/fa";
import type { ListingDetailsProps } from "../types";

const amenityGroups: Array<{
  title: string;
  items: Array<{ title: string; subtitle?: string }>;
}> = [
  {
    title: "Bathroom",
    items: [
      { title: "Bathtub" },
      { title: "Hair dryer" },
      { title: "Cleaning products" },
      { title: "Shampoo" },
      { title: "Conditioner" },
      { title: "Body soap" },
      { title: "Hot water" },
      { title: "Shower gel" },
    ],
  },
  {
    title: "Bedroom and laundry",
    items: [
      { title: "Washer" },
      { title: "Free dryer – In unit" },
      { title: "Hangers" },
      { title: "Bed linens" },
      { title: "Iron" },
      { title: "Clothing storage" },
    ],
  },
  {
    title: "Entertainment",
    items: [{ title: "TV" }, { title: "Sound system" }],
  },
  {
    title: "Family",
    items: [{ title: "Baby safety gates" }],
  },
  {
    title: "Heating and cooling",
    items: [
      { title: "Air conditioning" },
      { title: "Indoor fireplace" },
      { title: "Heating" },
    ],
  },
  {
    title: "Home safety",
    items: [
      { title: "Smoke alarm" },
      { title: "Carbon monoxide alarm" },
      { title: "Fire extinguisher" },
      { title: "First aid kit" },
    ],
  },
  {
    title: "Internet and office",
    items: [{ title: "Wifi" }],
  },
  {
    title: "Kitchen and dining",
    items: [
      {
        title: "Kitchen",
        subtitle: "Space where guests can cook their own meals",
      },
      { title: "Refrigerator" },
      { title: "Microwave" },
      {
        title: "Cooking basics",
        subtitle: "Pots and pans, oil, salt, and pepper",
      },
      {
        title: "Dishes and silverware",
        subtitle: "Bowls, chopsticks, plates, cups, etc.",
      },
      { title: "Mini fridge" },
      { title: "Freezer" },
      { title: "Dishwasher" },
      { title: "Stove" },
      { title: "Oven" },
      { title: "Hot water kettle" },
      {
        title: "Coffee maker: drip coffee maker, Keurig coffee machine, Nespresso",
      },
      { title: "Wine glasses" },
      { title: "Toaster" },
      { title: "Baking sheet" },
      { title: "Dining table" },
      { title: "Coffee" },
    ],
  },
  {
    title: "Outdoor",
    items: [
      { title: "Private patio or balcony" },
      { title: "Fire pit" },
      { title: "Outdoor furniture" },
      { title: "Outdoor dining area" },
      { title: "BBQ grill" },
      { title: "Sun loungers" },
    ],
  },
  {
    title: "Parking and facilities",
    items: [
      { title: "Free parking garage on premises" },
      { title: "Hot tub" },
    ],
  },
  {
    title: "Services",
    items: [
      {
        title: "Luggage drop-off allowed",
        subtitle:
          "For guests' convenience when they have early arrival or late departure",
      },
      {
        title: "Long-term stays allowed",
        subtitle: "Allow stay for 28 days or more",
      },
      { title: "Self check-in" },
      { title: "Smart lock" },
      { title: "Housekeeping - available at extra cost" },
    ],
  },
  {
    title: "Not included",
    items: [{ title: "Essentials" }, { title: "Private entrance" }],
  },
];

export default function HeronViewsWhistlerVillageDetails({ photos }: ListingDetailsProps) {
  return (
    <>
      <div className="max-w-6xl mx-auto px-4" id="details">
        <p className="text-gray-800 mb-16 max-w-4xl">
          Welcome to Heron Views, a 7,800 sq. ft. traditional log chalet in
          prestigious Blueberry Hill, with sweeping views across Whistler Golf
          Course toward Whistler and Blackcomb mountains. Just a 3–4 minute
          drive from the Village and ski lifts, or a scenic walk along the
          Valley Trail, the home combines privacy with convenience. Enjoy two
          expansive decks, summer air conditioning, a 14-person hot tub, fire
          pit, theatre room, wet bar and generous living spaces for families and
          groups.
        </p>

        {/* The Space Section */}
        <div className="flex flex-col md:flex-row mb-20">
          <div className="md:w-1/2 pr-0 md:pr-12 mb-8 md:mb-0">
            <div className="relative aspect-[4/3] mb-2">
              <Image
                src={getGalleryPhotoSrc(photos[2])}
                alt="Heron Views Interior"
                width={1920}
                height={1080}
                className="w-full h-full object-cover"
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
              Outdoor enthusiasts will love the two newly renovated decks,
              offering approximately 2,400 sq. ft. of outdoor living space with
              sweeping views across Whistler Golf Course toward Whistler and
              Blackcomb mountains.
              <br />
              <br />
              The upper deck is designed for entertaining, with stylish outdoor
              seating, a daybed, BBQ and fire table, perfect for morning coffee,
              family dinners or drinks overlooking the mountains. The lower
              deck creates a private après-ski retreat with a large 14-person
              hot tub, sunken fire pit, loungers and additional seating, all
              surrounded by the chalet’s beautiful mountain setting.
            </p>
            <div className="flex items-center space-x-6 mb-6">
              <div className="flex items-center">
                <FaBed className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">5 bedrooms</span>
              </div>
              <div className="flex items-center">
                <FaBath className="text-gray-600 mr-2" size={20} />
                <span className="text-gray-800">5.5 baths</span>
              </div>
            </div>
            <p className="text-gray-800">
              Inside, the main level features a spacious open-concept kitchen,
              dining and living area designed for groups to gather comfortably.
              The well-equipped kitchen includes a Vertuo Nespresso machine,
              Keurig and drip coffee maker, while the nearby wet bar offers
              generous counter space, glassware and a bar fridge for
              entertaining. The living area provides multiple seating areas and
              a Smart TV, with large windows bringing the surrounding forest
              and mountain views indoors.
              <br />
              <br />
              On the lower level, a second generous living area provides
              another space for the group to relax, complete with a large
              Samsung Frame TV and direct access to the lower deck, hot tub and
              fire pit. Guests can also unwind in the steam shower after a day
              of skiing, biking or exploring Whistler.
              <br />
              <br />
              The driveway accommodates two vehicles, with space for one
              additional vehicle in the garage. The garage also provides
              convenient storage for skis, bikes and other outdoor equipment.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6">LOCATION &amp; GETTING AROUND</h2>

        {/* Location Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            Neighbourhood highlights
          </h2>
          <p className="text-gray-800 max-w-4xl">
            Heron Views is located in prestigious Blueberry Hill, offering a
            peaceful residential setting while remaining exceptionally close
            to Whistler Village and the mountains. Whistler Golf Course and the
            Valley Trail are approximately a one-minute walk from the home,
            providing a scenic route toward the Village as well as easy access
            for walking and biking.
          </p>
        </div>

        {/* Getting Around Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Getting around</h2>
          <p className="text-gray-800 max-w-4xl">
            Whistler Village and the ski lifts are approximately a 3–4 minute
            drive away. Guests who prefer to walk can follow the Valley Trail
            into the Village in approximately 15 minutes, while the Route 6
            public bus stops just steps from the home and runs regularly into
            Whistler Village. This makes Heron Views an excellent option for
            groups wanting the privacy and space of a large chalet without
            feeling far from the centre of Whistler.
          </p>
        </div>

        {/* Bedroom Layout Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">BEDROOM LAYOUT</h2>
          <div className="text-gray-800 max-w-4xl">
            <p>
              <strong>TOP LEVEL</strong>
              <br />
              <br />
              <strong>Bedroom 1, Primary Suite:</strong>
              <br />
              King bed with a generously sized ensuite bathroom featuring a
              bathtub, large walk-in shower and separate toilet room. The
              primary suite also includes a large closet and private balcony
              with outdoor seating, perfect for enjoying a quiet morning
              coffee.
              <br />
              <br />
              <strong>Bedroom 2:</strong>
              <br />
              Four-poster queen bed with private ensuite bathroom, bathtub and
              private balcony.
              <br />
              <br />
              <strong>Bedroom 3:</strong>
              <br />
              Queen bed with a newly renovated ensuite bathroom and spacious
              walk-in shower.
              <br />
              <br />
              <strong>Bedroom 4:</strong>
              <br />
              Queen-over-twin bunk bed, Smart TV, private balcony and ensuite
              bathroom with bathtub. This room works especially well for
              children, teens or families travelling together.
              <br />
              <br />
              <strong>LOWER LEVEL</strong>
              <br />
              <br />
              <strong>Bedroom 5:</strong>
              <br />
              Queen bed located at the end of the lower-level corridor for
              added privacy. A large bathroom with walk-in shower is located
              directly next door, and the bedroom offers convenient access to
              the lower deck, hot tub and sunken fire pit.
            </p>
          </div>
        </div>

        {/* Guest Access Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Guest access</h2>
          <p className="text-gray-800 max-w-4xl">
            Guest have access to the entire private home to themselves including
            all amenities such as the hot tub, garage, etc.
          </p>
        </div>

        {/* Other Things to Note Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Other things to note</h2>
          <p className="text-gray-800 max-w-4xl">
            Getting around by bus: The local bus stop is just a stone&apos;s
            throw away from the front door and it costs $2.50 per ride, with
            buses running every 10-15 minutes. Take bus number 6 to head into
            Whistler Village. This chalet&apos;s exceptional location makes it
            the ideal home base for your holiday.
            <br />
            <br />
            The home is 1 minute walk away from Whistler Golf Course and the
            valley trail, which takes about a 15 minute walk to get to the main
            Whistler Village. In the winter, walking is possible, but better to
            drive.
            <br />
            <br />
            Ski lift pass booking &amp; delivery: One of the perks of booking
            with AceHost is complimentary ski pass delivery directly to your
            door. We can arrange day passes, multi-day passes, season passes and
            more, helping you skip the ticket office, paperwork and extra stop
            upon arrival. Please reach out to us before purchasing your passes,
            as the booking will need to be made through our team in order for us
            to arrange delivery. We’re happy to guide you through the process
            and make it as easy as possible.
          </p>
        </div>

        {/* Amenities and Services Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            What this place offers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {amenityGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-lg font-semibold mb-3">{group.title}</h3>
                <ul className="space-y-2 text-gray-800">
                  {group.items.map((item) => (
                    <li key={item.title}>
                      <span>{item.title}</span>
                      {item.subtitle ? (
                        <span className="block text-sm text-gray-600">
                          {item.subtitle}
                        </span>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* House Rules Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-3">House rules</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            You’ll be staying in someone’s home, so please treat it with care
            and respect.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
            <div>
              <h3 className="text-lg font-semibold mb-3">
                Checking in and out
              </h3>
              <ul className="space-y-2">
                <li>Check-in after 4:00 p.m.</li>
                <li>Checkout before 10:00 a.m.</li>
                <li>Self check-in with smart lock</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">During your stay</h3>
              <ul className="space-y-2">
                <li>11 guests maximum</li>
                <li>No pets</li>
                <li>
                  Quiet hours
                  <span className="block text-sm text-gray-600">
                    10:00 p.m.–8:00 a.m.
                  </span>
                </li>
                <li>No parties or events</li>
                <li>No commercial photography</li>
                <li>No smoking</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Before you leave</h3>
              <ul className="space-y-2">
                <li>Throw trash away</li>
                <li>Turn things off</li>
                <li>Lock up</li>
                <li>
                  Additional requests
                  <span className="block text-sm text-gray-600">
                    Run the dishwasher and put the hot tub cover back on.
                    <br />
                    We kindly ask that you place all dirty dishes and glassware
                    into the dishwasher and leave the home in a tidy condition.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety and Property Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-3">Safety &amp; property</h2>
          <p className="text-gray-800 max-w-4xl mb-6">
            Avoid surprises by looking over these important details about your
            host’s property.
          </p>
          <h3 className="text-lg font-semibold mb-3">Safety devices</h3>
          <ul className="space-y-2 text-gray-800">
            <li>Carbon monoxide alarm installed</li>
            <li>Smoke alarm installed</li>
          </ul>
        </div>

        {/* Registration Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">Registration details</h2>
          <p className="text-gray-800 max-w-4xl">
            Municipal registration number: 00012827
            <br />
            Provincial registration number: PM129914947
          </p>
        </div>
      </div>
    </>
  );
}
