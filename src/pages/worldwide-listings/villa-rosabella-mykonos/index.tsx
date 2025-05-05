import React from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import PropertyGallery from "@/components/PropertyGallery";
import Footer from "@/components/Footer";

import PropertyHeader from "@/components/PropertyHeader";

const VillaRosabellaMykonos = () => {
  

  // Property photos
  const photos = [
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (22).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (1).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (2).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (3).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (4).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (5).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (6).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (7).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (8).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (9).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (10).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (11).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (12).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (13).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (14).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (15).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (16).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (17).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (18).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (19).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (20).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (21).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (23).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (24).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (25).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (26).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (27).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (28).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (29).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (30).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (31).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (32).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (33).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (34).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (35).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (36).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (37).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (38).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (39).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (39A).jpeg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (40).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (41).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (42).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (43).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (44).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (45).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (46).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (47).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (48).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (49).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (50).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (51).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (52).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (53).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (54).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (55).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (56).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (57).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (58).jpg",
    "/photos/properties/Villa Rosabella Mykonos/Villa Rosabella (59).jpg"
  ];

  

  

  

  // Close full screen view when all photos modal is closed
  

  return (
    <>
      <Head>
        <title>Villa Rosabella | Mykonos, Greece - AceHost</title>
        <meta
          name="description"
          content="Experience unparalleled luxury at Villa Rosabella in Mykonos, Greece. This exclusive 8-bedroom private estate offers breathtaking sea views, a private infinity pool, direct sea access, and world-class amenities for the ultimate Greek island getaway."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          {/* Header with Property Info */}
          <PropertyHeader
            title="Villa Rosabella | Mykonos, Greece"
            guests={16}
            bedrooms={8}
            bathrooms={8}
            priceRange="€3,500-€5,800 per night"
            contactLink="/contact"
          />

          {/* Photo Gallery */}
          <PropertyGallery photos={photos} propertyName="villa rosabella mykonos" />

          {/* Property Description */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <p className="text-gray-800 mb-16 max-w-3xl mx-auto leading-relaxed text-lg">
              Villa Rosabella is a world-class luxury retreat designed for UHNW guests seeking privacy, exclusivity, and unparalleled Aegean views. Perched on a cliffside overlooking the shimmering Aegean, this ultra-private estate seamlessly blends modern luxury with authentic Mykonian elegance, creating the ultimate high-end escape in Mykonos.
            </p>
          </div>

          {/* Accommodation Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[2]}
                    alt="Villa Rosabella Mykonos - Luxury Accommodation"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
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
                  <h2 className="text-2xl font-bold">Luxury Accommodation</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Spanning 440 sqm across multiple levels, Villa Rosabella offers 8 luxurious bedroom suites, an open-plan designer living area, and multiple outdoor relaxation zones—all meticulously designed for sophisticated comfort and exclusivity.
                  </p>
                  <p className="text-gray-800">
                    The top floor features an ultra-luxury suite with a king bed, lounge area, en-suite bathroom, private terrace, and stunning sea views. The first floor houses 4 luxurious suites with king/twin beds, en-suite bathrooms, private terraces, and sea & pool views.
                  </p>
                  <p className="text-gray-800">
                    On the ground floor (pool level), you'll find 3 elegant suites with king/twin beds, en-suite bathrooms, and direct access to the pool with side sea views. Each bedroom is exquisitely appointed with premium furnishings, luxurious linens, and private terraces to enjoy the magnificent Aegean views.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Living Spaces Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 py-12 rounded-xl">
            <div className="flex flex-col md:flex-row gap-12">
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
                      <path d="M3.05 13.05C2.75 12.74 2.75 12.26 3.05 11.95L8.65 6.35C8.95 6.05 9.43 6.05 9.74 6.35L12.34 8.95C12.64 9.26 12.64 9.74 12.34 10.04L6.74 15.64C6.43 15.95 5.95 15.95 5.65 15.64L3.05 13.05ZM3.05 20.05C2.75 19.74 2.75 19.26 3.05 18.95L14.05 7.95C14.36 7.64 14.84 7.64 15.14 7.95L17.74 10.55C18.05 10.85 18.05 11.33 17.74 11.64L6.74 22.64C6.43 22.95 5.95 22.95 5.65 22.64L3.05 20.05ZM10.05 6.05C9.75 5.74 9.75 5.26 10.05 4.95L12.65 2.35C12.96 2.05 13.44 2.05 13.74 2.35L16.34 4.95C16.65 5.26 16.65 5.74 16.34 6.04L13.74 8.64C13.43 8.95 12.95 8.95 12.65 8.64L10.05 6.05ZM14.05 20.05C13.75 19.74 13.75 19.26 14.05 18.95L19.65 13.35C19.96 13.05 20.44 13.05 20.74 13.35L23.34 15.95C23.65 16.26 23.65 16.74 23.34 17.04L17.74 22.64C17.43 22.95 16.95 22.95 16.65 22.64L14.05 20.05ZM14.05 13.05C13.75 12.74 13.75 12.26 14.05 11.95L19.65 6.35C19.96 6.05 20.44 6.05 20.74 6.35L23.34 8.95C23.65 9.26 23.65 9.74 23.34 10.04L17.74 15.64C17.43 15.95 16.95 15.95 16.65 15.64L14.05 13.05Z" fill="white" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Elegant Living Areas</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Indulge in direct sea access via a private pathway leading to a secluded rocky beach, perfect for morning dips in crystal-clear waters. Lounge by the expansive infinity pool, where the horizon melts into the sea, delivering the most breathtaking sunset views in Mykonos.
                  </p>
                  <p className="text-gray-800">
                    By day, bask in the Mediterranean sun on luxurious sunbeds, sip signature cocktails at the pool bar, or enjoy alfresco dining on the shaded pergola-covered terrace. By night, the villa transforms into a serene paradise, with superyachts gliding past, the moonlight shimmering over the water, and the glow of Mykonos Town twinkling in the distance.
                  </p>
                  <p className="text-gray-800">
                    The open-plan living area features plush designer furnishings, a fully equipped chef's kitchen for gourmet dining experiences, and multiple outdoor relaxation zones. The expansive infinity pool with unobstructed sea views, outdoor lounge & dining area with BBQ & pool bar create the perfect setting for alfresco feasts and entertaining.
                  </p>
                </div>
              </div>
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[4]}
                    alt="Villa Rosabella Mykonos - Infinity Pool"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Amenities Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="md:w-1/2">
                <div className="relative aspect-[4/3] mb-4 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src={photos[6]}
                    alt="Villa Rosabella Mykonos - Luxury Amenities"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
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
                        d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM16.23 18L12 15.45L7.77 18L8.89 13.19L5.16 9.96L10.08 9.54L12 5L13.92 9.53L18.84 9.95L15.11 13.18L16.23 18Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold">Exceptional Amenities</h2>
                </div>
                <div className="space-y-6 leading-relaxed">
                  <p className="text-gray-800">
                    Villa Rosabella offers an array of luxury amenities including daily housekeeping & premium cleaning service, high-speed WiFi for seamless remote work & entertainment, smart TV with satellite channels, fully equipped chef's kitchen, and a wine cellar available upon request.
                  </p>
                  <p className="text-gray-800">
                    The outdoor and pool facilities include a private infinity pool with panoramic sea & sunset views, sunbeds, terraces & shaded lounges, outdoor dining & BBQ area, and an exclusive private pathway to the sea for direct beach access.
                  </p>
                  <p className="text-gray-800">
                    For wellness enthusiasts, the villa features a private gym with premium equipment, pool shower for post-swim refreshment, and outdoor yoga & meditation spaces. Safety features include a gated property with private parking, 24/7 security monitoring system, and an emergency power generator.
                  </p>
                  <p className="text-gray-800">
                    VIP services upon request include a dedicated concierge & villa manager, private chef & butler service, personal driver & luxury car rental, private yacht & helicopter charters, wellness & spa treatments, personal shopping & private fashion shows, and exclusive fine dining & wine tasting experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rate Section */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24 bg-gray-50 py-12 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">2025 Rates</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Rates include commission, all taxes & VAT
              </p>
            </div>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-gray-800 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left">Dates</th>
                    <th className="py-3 px-4 text-left">Rate per Night</th>
                    <th className="py-3 px-4 text-left">Minimum Stay</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">May 1 - June 14 & September 15 - 28</td>
                    <td className="py-3 px-4 font-medium">€3,500</td>
                    <td className="py-3 px-4">3 nights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">June 15 - 28 & September 1 - 14</td>
                    <td className="py-3 px-4 font-medium">€4,000</td>
                    <td className="py-3 px-4">3 nights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">June 29 - July 13</td>
                    <td className="py-3 px-4 font-medium">€5,000</td>
                    <td className="py-3 px-4">3 nights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">July 14 - August 10</td>
                    <td className="py-3 px-4 font-medium">€5,800</td>
                    <td className="py-3 px-4">3 nights</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="py-3 px-4">August 11 - 31</td>
                    <td className="py-3 px-4 font-medium">€5,500</td>
                    <td className="py-3 px-4">3 nights</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="mt-8 space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold mb-2">Services included:</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Once per Week Housekeeping</li>
                  <li>Concierge</li>
                  <li>Pool Cleaning</li>
                  <li>Gardening</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-2">Payment Policy:</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>To secure a reservation, 100% of the rental amount is required at the time of booking.</li>
                  <li>For bookings made 60 days or less before check-in, the full rental amount must be paid, and no refunds will be issued if canceled.</li>
                  <li>For bookings made more than 60 days in advance, an advance payment of 50% is required. The remaining 50% must be paid 60 days before check-in.</li>
                  <li>Security Deposit with the First Payment: EUR 3,500 should be paid to the owner's bank account via a wire transfer until 30 days before arrival.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-black text-white py-16 mt-16">
            <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-4">Experience Villa Rosabella</h2>
              <p className="text-xl mb-8 max-w-3xl mx-auto">
                For inquiries, availability, and to book your stay at this exclusive Mykonos property
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-white text-black rounded-full text-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </main>

        <Footer />

        {/* Full screen photo viewer */}
        
            </div>
          </div>
        )}

        {/* All photos modal */}
        
      </div>
    </>
  );
};

export default VillaRosabellaMykonos;

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || "en";

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}; 