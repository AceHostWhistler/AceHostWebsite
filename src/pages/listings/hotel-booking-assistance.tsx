import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { ArrowRight } from "lucide-react";

const HotelBookingAssistance = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>Hotel Booking Assistance & Concierge Services | AceHost</title>
        <meta
          name="description"
          content="Expert hotel booking assistance with exclusive perks and optional concierge services. Access priority reservations, room upgrades, dining credits, and more at no extra cost."
        />
        <meta
          name="keywords"
          content="hotel booking, concierge services, Whistler hotels, room upgrades, priority reservations, dining credit, early checkout, late checkout"
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pb-20">
          {/* Hero Section */}
          <div className="relative h-[60vh] min-h-[400px]">
            <Image
              src="/thumbnails/Four Seasons Resort and Residences Whistler_885.webp"
              alt="Four Seasons Resort and Residences Whistler"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center px-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                  Hotel Booking Assistance & Concierge Services
                </h1>
                <p className="text-xl text-white max-w-3xl mx-auto">
                  Premium hotel bookings with exclusive perks and optional concierge services
                </p>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Hotel Booking Assistance with Exclusive Benefits
              </h2>
              
              <p className="text-lg text-gray-700 mb-8">
                <strong>"Don't need any concierge, but still want our help finding the best room? No problem!"</strong> We can help you secure the perfect hotel stay in Whistler with exclusive perks and benefits. Through our local partnerships with premium hotels, we can get you the best deal, priority for room upgrades, dining credit, early/late checkout guarantees, included breakfast, and other perks you can't get otherwise—all at no extra cost!
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-full">
                  <Image 
                    src="/thumbnails/Fairmont Image.webp" 
                    alt="Fairmont Chateau Whistler"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Exclusive Hotel Perks</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Priority for room upgrades when available</li>
                    <li>Dining credits at hotel restaurants</li>
                    <li>Early check-in guarantees</li>
                    <li>Late checkout guarantees</li>
                    <li>Complimentary breakfast</li>
                    <li>Special welcome amenities</li>
                    <li>VIP status during your stay</li>
                  </ul>
                  <p className="mt-4 text-gray-700">
                    All these perks come at <strong>no additional cost</strong> compared to standard booking rates!
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Pricing & Details
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Booking Assistance</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
                  <li><strong>Pricing:</strong> Subject to request</li>
                  <li>Available for 5-night minimum stays</li>
                  <li>2+ bedrooms minimum requirement</li>
                  <li><strong>No charge for booking</strong> - our hotel booking assistance service is complimentary!</li>
                </ul>

                <h3 className="text-xl font-bold text-gray-900 mb-4">Optional Premium Concierge Services</h3>
                <p className="text-gray-700 mb-4">
                  If you'd like additional assistance during your stay, our premium concierge services are available:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>$200 USD per hour</strong> for optional concierge services</li>
                  <li>Priority restaurant reservations in Whistler's finest establishments</li>
                  <li>Curated in-town experiences and activity bookings</li>
                  <li>Grocery delivery to your room prior to checking in</li>
                  <li>Transportation arrangements from Vancouver International Airport (YVR)</li>
                  <li>And much more to enhance your stay!</li>
                </ul>
                <p className="mt-4 text-gray-700">
                  A full itinerary typically costs around <strong>4-8+ hours</strong> depending on what you need. Let us know what you need and we can send a ballpark estimate.
                </p>
                <p className="mt-4 text-gray-700 font-medium">
                  Remember: There is no charge for our booking assistance - you only pay for optional concierge services if you choose to use them after booking.
                </p>
              </div>

              <div className="my-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Partner Hotels</h3>
                  <p className="text-gray-700 mb-4">
                    We work with Whistler's finest hotels and resorts to provide you with an exceptional stay:
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Four Seasons Resort and Residences Whistler</li>
                    <li>Fairmont Chateau Whistler</li>
                    <li>The Westin Resort & Spa</li>
                  </ul>
                </div>
                <div className="relative h-64 md:h-full">
                  <Image 
                    src="/thumbnails/The-Westin-Resort-And-Spa-small_0006_Westin-Whistler-7-660x440.webp" 
                    alt="The Westin Resort and Spa Whistler"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                The AceHost Hotel Booking Advantage
              </h2>
              
              <div className="border-l-4 border-gray-900 pl-6 italic text-lg text-gray-700 mb-8">
                "Not only can we help, but because of our local partnerships with hotels, we can get you the best deal, priority for room upgrades, dining credit, early/late checkout guarantees, included breakfast, etc. Perks you can't get otherwise, for no extra cost!"
              </div>
              
              <p className="text-lg text-gray-700 mb-6">
                When you book through AceHost, you benefit from our established relationships with Whistler's top hotels. We leverage these partnerships to secure you perks and privileges typically reserved for VIP guests or loyalty program members.
              </p>
              
              <p className="text-lg text-gray-700 mb-6">
                Our local expertise ensures you get the perfect room for your needs, whether you're looking for the best mountain views, ski-in/ski-out access, or proximity to specific amenities. We know these properties inside and out and can help you make the perfect choice.
              </p>
              
              <div className="bg-gray-100 p-6 rounded-lg mb-12">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The AceHost Difference</h3>
                <p className="text-gray-700 mb-4">
                  What makes our hotel booking service unique? Unlike standard online booking platforms or even the hotels' direct booking systems, we can secure you benefits that are normally reserved for the highest tier loyalty members or VIP guests:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>Room Upgrades:</strong> Priority consideration for room upgrades when available</li>
                  <li><strong>Dining Credits:</strong> Complimentary credits to use at hotel restaurants</li>
                  <li><strong>Flexible Check-in/out:</strong> Guaranteed early check-in or late checkout options</li>
                  <li><strong>Complimentary Breakfast:</strong> Start your day with included breakfast</li>
                  <li><strong>Welcome Amenities:</strong> Special welcome gifts or treats in your room</li>
                  <li><strong>VIP Status:</strong> Recognition and preferential treatment during your stay</li>
                </ul>
                <p className="mt-4 text-gray-700 font-medium">
                  All these exclusive benefits come at <strong>no additional cost</strong> compared to standard booking rates!
                </p>
              </div>

              <div className="bg-black text-white p-8 rounded-lg mb-12">
                <h3 className="text-2xl font-bold mb-4">Full Concierge Services</h3>
                <p className="mb-6">
                  Need more than just hotel booking assistance? Explore our complete range of premium concierge services.
                </p>
                <Link 
                  href="/concierge-service" 
                  className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors"
                >
                  <span>Learn more about our Concierge Services</span>
                  <ArrowRight size={18} className="ml-2" />
                </Link>
              </div>

              <div className="bg-gray-100 p-8 rounded-lg mb-12 border-l-4 border-gray-400">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Note About Concierge Services</h3>
                <p className="text-gray-700">
                  Please note that all concierge services for our larger homes are included at no additional hourly charge. For hotels, there is an optional charge. Please let us know if you would like to opt in when booking.
                </p>
              </div>

              <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Ready to Book Your Perfect Hotel Stay?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Contact us today to discuss your requirements and let us help you secure the best possible hotel experience in Whistler.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-black text-white px-8 py-4 rounded-md hover:bg-gray-800 transition-colors text-base font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default HotelBookingAssistance;
