import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaRegHeart,
  FaRegComment,
  FaRegBookmark,
  FaSkiing,
  FaSnowflake,
  FaMountain,
  FaCalendarCheck,
  FaSnowplow,
  FaHiking,
  FaShuttleVan,
  FaGlassCheers,
  FaConciergeBell,
  FaUtensils,
  FaWineGlassAlt,
  FaCar,
  FaPlane,
  FaMedal,
  FaDog,
  FaCamera,
  FaVideo,
  FaTicketAlt,
} from "react-icons/fa";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiSpa, BiDrink, BiHomeAlt, BiInjection } from "react-icons/bi";
import {
  GiDogHouse,
  GiMountainCave,
  GiCookingPot,
  GiFoodTruck,
  GiHouseKeys,
  GiMountainRoad,
  GiBabyBottle,
} from "react-icons/gi";
import {
  MdCleaningServices,
  MdSpa,
  MdChildCare,
  MdAirportShuttle,
  MdTerrain,
} from "react-icons/md";

const ConciergeService = () => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  useEffect(() => {
    // Add responsive classes to all carousel items
    const addResponsiveClasses = () => {
      // Add card-image class to all image containers
      document
        .querySelectorAll(".carousel-card .relative.h-56")
        .forEach((el) => {
          el.classList.add("card-image");
        });

      // Add card-title class to all titles
      document.querySelectorAll(".carousel-card h3").forEach((el) => {
        el.classList.add("card-title");
      });

      // Add card-description class to all descriptions
      document.querySelectorAll(".carousel-card p").forEach((el) => {
        el.classList.add("card-description");
      });
    };

    // Call the function after component mount
    addResponsiveClasses();
  }, []);


  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <>
      <Head>
        <title>Whistler VIP Concierge Services | AceHost</title>
        <meta
          name="description"
          content="Personalized luxury concierge services for your Whistler vacation. From private chefs to heli-skiing, we take care of every detail."
        />
        <script src="https://player.vimeo.com/api/player.js" async></script>
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pb-20">
          {/* Hero Section */}
          <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                <div className="space-y-8">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                    Whistler VIP Concierge Services
                  </h1>
                  <div className="space-y-6 text-gray-600 text-lg">
                    <p>
                      When you book Luxury Accommodations with AceHost, VIP Concierge Services are included to elevate your stay. Our local team curates a personalized itinerary to ensure every detail is taken care of, from exclusive dining reservations to seamless logistics. We don't just send an itinerary; we secure top tables, prime time slots, and priority access to Whistler's best.
                    </p>
                    <p>
                      With unmatched local knowledge and strong connections, our concierge team is available from arrival to departure for anything you need, last-minute staffing, special requests, or insider tips for untouched powder. Whether planning in advance or responding to same-day changes, we're here to deliver Whistler's top luxury concierge experience.
                    </p>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 pt-4">
                    Explore the Different Services We Offer
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <a
                      href="#mountain"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        On the Mountain
                      </span>
                    </a>
                    <a
                      href="#dining"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        Dining and Hosting
                      </span>
                    </a>
                    <a
                      href="#inhome"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        Additional In-home Services
                      </span>
                    </a>
                    <a
                      href="#transport"
                      className="block px-6 py-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-200 text-center"
                    >
                      <span className="text-lg font-medium text-gray-900">
                        VIP Transportation
                      </span>
                    </a>
                  </div>
                </div>

                {/* Video Player (Vimeo Embed) */}
                <div className="rounded-lg overflow-hidden shadow-lg bg-white w-3/4 mx-auto">
                  <div className="flex flex-col h-full">
                    <div className="p-8 border-b">
                      <h3 className="text-3xl font-bold text-center">
                        The AceHost Concierge Reel
                      </h3>
                    </div>

                    <div
                      className="relative w-full"
                      style={{ paddingTop: "177.78%", height: "478px" }}
                    >
                      <div className="absolute inset-0 w-full h-full">
                        <iframe
                          src="https://player.vimeo.com/video/1122268553?badge=0&autopause=0&player_id=0&app_id=58479"
                          className="absolute inset-0 w-full h-full"
                          frameBorder="0"
                          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                          allowFullScreen
                          referrerPolicy="strict-origin-when-cross-origin"
                          title="The AceHost Concierge Reel"
                        ></iframe>
                      </div>
                    </div>

                    <div className="p-3 border-t">
                      <a
                        href="https://www.instagram.com/acehost_whistler/"
                        className="text-blue-500 text-sm font-medium block mb-3"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View more on Instagram
                      </a>
                      <div className="flex justify-between mb-2">
                        <div className="flex gap-4">
                          <FaRegHeart className="text-2xl" />
                          <FaRegComment className="text-2xl" />
                          <IoPaperPlaneOutline className="text-2xl" />
                        </div>
                        <FaRegBookmark className="text-2xl" />
                      </div>
                      <p className="font-medium mb-2">331 likes</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mountain Activities */}
          <section id="mountain" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Mountain Activities
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Experience the best of Whistler's mountains with our exclusive
                adventure offerings and VIP access.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Private Ski Instructor */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/PrivateSkiInstructor.jpg"
                      alt="Private Ski Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaSkiing className="text-lg" />
                      </span>
                      Private Ski Instructor
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AceHost can help organize your private ski and snowboard
                      lessons through our connections at Extremely Canadian
                      Whistler. Our guides can help elevate your skill level,
                      find hidden trails, and are familiar with the best spots on
                      the mountain, especially during powder days. Guides can
                      help you skip lines and meet at your convenience.
                    </p>
                  </div>
                </div>

                {/* Ski Lift Pass Delivery */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/texture/ski-pass-delivery.png"
                      alt="Ski Lift Pass Delivery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaTicketAlt className="text-lg" />
                      </span>
                      Ski Lift Pass Delivery
                    </h3>
                    <p className="text-gray-600 mb-4">
                      With all AceHost bookings, guests enjoy the added convenience of having their ski passes delivered right to their rental home. No more waiting in long lines, showing IDs, or filling out forms when you'd rather be enjoying the mountains. Instead, your passes are ready and waiting for you upon arrival, so you can wake up and head straight to the slopes stress-free. And best of all, we provide this service at absolutely no extra cost.
                    </p>
                  </div>
                </div>

                {/* Ski or Ride with an Olympian */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.23.19 AM.png"
                      alt="Ski or Ride with an Olympian"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaMedal className="text-lg" />
                      </span>
                      Ski or Ride with an Olympian
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience the thrill of skiing or snowboarding alongside an Olympian with Snow
                      School's exclusive program. Trace their lines, refine your technique, and hear
                      inspiring stories firsthand. This unparalleled opportunity offers a unique blend of
                      personalized instruction and insight from world-class athletes. Go one-on-one or
                      make a group with up to four family or friends of similar ability - for one price.
                    </p>
                  </div>
                </div>

                {/* In-home Ski/Snowboard Delivery */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/SkiRentals.png"
                      alt="In-home Ski/Snowboard Delivery"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaSnowflake className="text-lg" />
                      </span>
                      In-home Ski/Snowboard Delivery
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AceHost has partnered with Black Tie to deliver equipment
                      directly to your home between 7:30am-10pm with a
                      selection boots, skis, snowboards, and poles. Black Tie
                      rentals can also bring a selection of socks, gloves and
                      ski goggles, available. The best part is the delivery
                      fee is included!
                    </p>
                    <a 
                      href="https://www.blacktieskis.com/portal/?portal_name=acehost"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors duration-200"
                    >
                      Discounted Link to Book Rentals
                    </a>
                  </div>
                </div>

                {/* Heli Glacier Meal */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/HeliGlacier Meal.jpg"
                      alt="Heli Glacier Meal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiCookingPot className="text-lg" />
                      </span>
                      Heli Glacier Meal
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The Heli Glacier Meal is one of AceHost's most
                      highly rated experiences. Enjoy a private chef prepared
                      meal while taking in the stunning views of the local
                      mountain ranges from a glacier. Our chefs and servers
                      join the heli trips to serve meals and provide a
                      first-rate dining experience. Contact us to get a quote
                      for this experience.
                    </p>
                  </div>
                </div>

                {/* Snowmobile Experience */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Snowmobile Experience.png"
                      alt="Snowmobile Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaSnowplow className="text-lg" />
                      </span>
                      Snowmobile Experience
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For a regular snowmobile experience, AceHost can arrange
                      a tour of the Blackcomb mountain for you and your group.
                      The snowmobile experience offers a variety of levels,
                      for beginners and adventurous riders, and anyone in
                      between. Personalize your trip and choose from a range
                      of scenic options.
                    </p>
                  </div>
                </div>

                {/* Heli Ice Cave Adventure */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/HeliSki.jpeg"
                      alt="Heli Ice Cave Adventure"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiMountainCave className="text-lg" />
                      </span>
                      Heli Ice Cave Adventure
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Take a journey through 12,000 - 20,000-year-old ice
                      caves via a scenic helicopter ride through the local
                      mountain range. Soaring over ancient glacier formations,
                      guests can experience a guide-led tour inside ice
                      tunnels and remote ice caves. Elevate your tour
                      experience by adding Bearfoot Bistro's charcuterie
                      and dessert platters. Contact us for ice cave adventure
                      tour quote.
                    </p>
                  </div>
                </div>

                {/* Dog Sledding */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/DogSled.jpg"
                      alt="Dog Sledding"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiDogHouse className="text-lg" />
                      </span>
                      Dog Sledding
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience an authentic winter activity by booking a dog
                      sled ride through the Callaghan Valley Old Growth
                      Forests. This tour offers a ride through open and
                      winding trails, suitable for families looking to get
                      outdoors and soak in the beauty of local forests.
                    </p>
                  </div>
                </div>

                {/* Zipline Tours */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/ZipLine.jpg"
                      alt="Zipline Tours"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaMountain className="text-lg" />
                      </span>
                      Zipline Tours
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience a bird's-eye view of Whistler Mountain
                      when you book a zip-line tour through AceHost. The
                      panoramic views of Whistler can be seen from treetop
                      suspension bridges and sky high viewing platforms. Enjoy
                      this experience year-round experience. Contact us to
                      book your zip-line tour today!
                    </p>
                  </div>
                </div>

                {/* Vallea Illumina */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Valley.jpg"
                      alt="Vallea Illumina"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaHiking className="text-lg" />
                      </span>
                      Vallea Illumina
                    </h3>
                    <p className="text-gray-600 mb-4">
                      One of the most popular local activities, the Vallea
                      Ilumina night walk is a must do when visiting Whistler.
                      The 30-45 minute walk through an illuminated forest is a
                      sight for sore eyes and fun for the whole family. Join
                      an evening excursion and be enchanted by the stories
                      about the legends of Whistler.
                    </p>
                  </div>
                </div>
                
                {/* Crystal Hut Snowmobile Fondue Experience */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.21.24 AM.png"
                      alt="Crystal Hut Snowmobile Fondue Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiMountainRoad className="text-lg" />
                      </span>
                      Crystal Hut Snowmobile Fondue Experience
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Suits adventurous beginner and intermediate riders. Drive
                      your own snowmobile or share with a friend as you sweep
                      across the forested trails of Blackcomb Mountain. Fondue experience when you get to the top!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Dining Experiences */}
          <section id="dining" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Whistler Dining Experiences
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Indulge in the finest culinary experiences Whistler has to
                offer, from private chefs to exclusive restaurant reservations.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* In-Home Private Chef */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/PrivateChef.jpeg"
                      alt="In-Home Private Chef"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiCookingPot className="text-lg" />
                      </span>
                      In-Home Private Chef
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AceHost offers in-home private chef dining services. This is one of our most popular services and includes menu planning, grocery shopping, preparation, cooking and clean up afterward. The AceHost chef team will work with you to customize menus for a multi-course meal, brunch, dinner and everything in between.
                    </p>
                  </div>
                </div>

                {/* Restaurant Reservations */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/WhistlerRestarurants.png"
                      alt="Restaurant Reservations"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaCalendarCheck className="text-lg" />
                      </span>
                      Restaurant Reservations
                    </h3>
                    <p className="text-gray-600 mb-4">
                      AceHost can help secure your reservations for the hottest restaurants in Whistler. From acclaimed fine-dining establishments to local hidden gems, our concierge team has the connections to get you seated at the best tables, even during peak season when reservations are typically hard to get.
                    </p>
                  </div>
                </div>

                {/* Catered Meals */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 12.57.08 PM.png"
                      alt="Catered Meals"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiFoodTruck className="text-lg" />
                      </span>
                      Catered Meals
                    </h3>
                    <p className="text-gray-600 mb-4">
                      If you prefer a more casual dining experience without the full private chef service, our catered meal options are perfect. We'll arrange for gourmet prepared meals to be delivered to your accommodation, ready to heat and serve at your convenience. These meals are prepared by top local chefs using fresh, seasonal ingredients.
                    </p>
                  </div>
                </div>

                {/* Bearfoot Bistro Vodka Ice Room Experience */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Dinningand Apres Ski.jpeg"
                      alt="Bearfoot Bistro Vodka Ice Room Experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaSnowflake className="text-lg" />
                      </span>
                      Bearfoot Bistro Vodka Ice Room Experience
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Experience the world's coldest vodka tasting in Canada's first sub-zero vodka room at the iconic Bearfoot Bistro. Don a provided Arctic parka and sample premium vodkas from around the world in this unique -32°C environment.
                    </p>
                  </div>
                </div>


                {/* In-Home Bartender/Mixologist */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 12.36.56 PM.png"
                      alt="In-Home Bartender/Mixologist"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <BiDrink className="text-lg" />
                      </span>
                      In-Home Bartender/Mixologist
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Elevate your gatherings with a professional bartender who will craft premium cocktails tailored to your preferences. Our bartenders can create signature drinks, organize wine tastings, or simply ensure everyone's glass stays full throughout the evening. This service pairs perfectly with our private chef offerings.
                    </p>
                  </div>
                </div>

                {/* Grocery Delivery */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 12.37.46 PM.png"
                      alt="Grocery Delivery/Pre Arrival Stock"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaUtensils className="text-lg" />
                      </span>
                      Grocery Delivery/Pre Arrival Stock
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Arrive at your luxury accommodation to find the kitchen fully stocked with your favorite foods and beverages. Simply share your preferences and dietary requirements, and our team will handle the shopping and delivery. This service ensures you can start enjoying your vacation immediately without worrying about grocery shopping.
                    </p>
                  </div>
                </div>

                {/* Wine & Champagne Selection */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/SommelierWinePairings.webp"
                      alt="Wine & Champagne Selection"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaWineGlassAlt className="text-lg" />
                      </span>
                      Wine & Champagne Selection
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Let our wine specialists curate a selection of fine wines and champagnes for your stay. Whether you're looking for specific bottles, want recommendations to pair with meals, or wish to arrange a private tasting, our team can ensure your cellar is stocked with premium offerings that match your taste and occasion.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Additional In-home Services - UPDATED TO GRID LAYOUT */}
          <section id="inhome" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Additional In-home Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Enhance your stay with our premium in-home services designed to
                bring luxury and comfort directly to your accommodation.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* In-Home Massage */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/In-House Messages.jpg"
                      alt="In-Home Massage"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <BiSpa className="text-lg" />
                      </span>
                      In-Home Massage
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Book a relaxing massage in the comfort of your luxury
                      accommodation. Our professional massage therapists offer a
                      variety of techniques, from Swedish to deep tissue,
                      tailored to your specific needs. This service is perfect
                      after a long day on the slopes or hiking trails.
                    </p>
                  </div>
                </div>

                {/* Yoga Instructor */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/In House Beauty and Wellness.jpg"
                      alt="Yoga Instructor"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <MdSpa className="text-lg" />
                      </span>
                      Yoga Instructor
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Start your day with a centering yoga session led by one of
                      our expert instructors. Whether you prefer vinyasa flow,
                      hatha, or restorative yoga, our instructors can customize
                      the session to your group's skill level and preferences.
                    </p>
                  </div>
                </div>

                {/* Private Butler/Host */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Butler.jpg"
                      alt="Private Butler/Host"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaConciergeBell className="text-lg" />
                      </span>
                      Private Butler/Host
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Elevate your stay with a private butler or host who can
                      manage all aspects of your in-home experience. From
                      serving meals and mixing cocktails to keeping the fire lit
                      and ensuring your home is always perfectly maintained,
                      our professional staff provide discreet, top-tier service.
                    </p>
                  </div>
                </div>

                {/* Daily Housekeeping */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/HouseKeeping.jpg"
                      alt="Daily Housekeeping"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <MdCleaningServices className="text-lg" />
                      </span>
                      Daily Housekeeping
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Keep your luxury accommodation pristine with our daily
                      housekeeping service. Our professional team will refresh
                      bathrooms, make beds, tidy common areas, and replenish
                      amenities to ensure your space remains a perfect retreat
                      throughout your stay.
                    </p>
                  </div>
                </div>

                {/* In-Home Hair & Beauty */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/In House Beauty and Wellness.jpg"
                      alt="In-Home Hair & Beauty"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <MdSpa className="text-lg" />
                      </span>
                      In-Home Hair & Beauty
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Prepare for a special evening or simply treat yourself
                      with our in-home hair styling and beauty services. Our
                      professional stylists and makeup artists bring the salon
                      experience directly to you, ensuring you look and feel
                      your best for any occasion.
                    </p>
                  </div>
                </div>

                {/* Childcare Services */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/BabySitting.jpg"
                      alt="Childcare Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <MdChildCare className="text-lg" />
                      </span>
                      Childcare Services
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enjoy some adult time while knowing your children are in
                      good hands with our professional childcare providers. All
                      our babysitters and nannies are experienced, background-checked,
                      and trained in first aid, ensuring the highest level of
                      care and fun for your little ones.
                    </p>
                  </div>
                </div>

                {/* Dog Sitting */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.25.40 AM.png"
                      alt="Dog Sitting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaDog className="text-lg" />
                      </span>
                      Dog Sitting
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Are you staying at a pet friendly home? If so, take advantage of our dog sitting services so you can enjoy activities or dinners in town, with peace of mind.
                    </p>
                  </div>
                </div>

                {/* Baby & Child Rental Equipment */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.28.52 AM.png"
                      alt="Baby & Child Rental Equipment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <GiBabyBottle className="text-lg" />
                      </span>
                      Baby & Child Rental Equipment
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Baby gates and child equipment rentals such as high chairs, cribs, etc. are available for your convenience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* VIP Transportation - UPDATED TO GRID LAYOUT */}
          <section id="transport" className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                VIP Transportation
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Travel in style and comfort with our premium transportation
                services, from airport transfers to daily excursions.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Airport Transfers */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/VIP_Airport_Transfer.png"
                      alt="VIP Airport Transfers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <MdAirportShuttle className="text-lg" />
                      </span>
                      VIP Airport Transfers
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Start and end your journey in comfort with our luxury
                      airport transfer service. Our professional drivers will
                      meet you at Vancouver International Airport and transport
                      you directly to your accommodation in Whistler. Vehicles
                      range from executive sedans to spacious SUVs and vans,
                      depending on your group size.
                    </p>
                  </div>
                </div>

                {/* Private Chauffeur */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/PrivateDrivers.jpeg"
                      alt="Private Chauffeur"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaCar className="text-lg" />
                      </span>
                      Private Chauffeur
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Enjoy the convenience of a dedicated chauffeur throughout
                      your stay. Whether for restaurant visits, shopping trips,
                      or excursions to nearby attractions, our professional
                      drivers provide reliable, discreet service in luxury
                      vehicles tailored to your group's needs.
                    </p>
                  </div>
                </div>

                {/* Helicopter Transfers */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/WhistlerHeli.jpg"
                      alt="Helicopter Transfers"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaPlane className="text-lg" />
                      </span>
                      Helicopter Transfers
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For the ultimate arrival experience, choose our helicopter
                      transfer service. Bypass traffic and enjoy breathtaking
                      aerial views as you travel from Vancouver to Whistler in
                      just 30 minutes. This service includes ground transport to
                      and from the helipad, making your journey seamless.
                    </p>
                  </div>
                </div>

                {/* Luxury Vehicle Rentals */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/AirportTransfers.jpg"
                      alt="Luxury Vehicle Rentals"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaCar className="text-lg" />
                      </span>
                      Luxury Vehicle Rentals
                    </h3>
                    <p className="text-gray-600 mb-4">
                      For guests who prefer to drive themselves, we offer a
                      selection of premium vehicles for rental. From high-end
                      SUVs perfect for mountain driving to exotic sports cars
                      for a special experience, we can arrange the perfect
                      vehicle delivered directly to your accommodation.
                    </p>
                  </div>
                </div>

                {/* 12-15 seater Private Transportation Services */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 10.48.27 AM.png"
                      alt="12-15 seater Private Transportation Services"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaShuttleVan className="text-lg" />
                      </span>
                      12-15 seater Private Transportation Services
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Private 12-15 seater transportation in town, as well as to and from the airport. Getting around in town can be a challenge for a large group, especially in the busy winter season. Let us help you to get around town. We can work with an itinerary & schedule, as well as last minute rides if and when needed.
                    </p>
                  </div>
                </div>

                {/* Jet-Van transportation */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 10.47.24 AM.png"
                      alt="Jet-Van transportation"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaShuttleVan className="text-lg" />
                      </span>
                      Jet-Van transportation
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Our most popular and most luxurious form of transportation to and from YVR. A Sprinter Van with a layout similar to a private jet. Enjoy maximum comfort and luxuries from the moment you step off the plane.
                    </p>
                  </div>
                </div>

                {/* Private Jet & Commercial Flights */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.28.11 AM.png"
                      alt="Private Jet & Commercial Flights"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaPlane className="text-lg" />
                      </span>
                      Private Jet & Commercial Flights
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Please share your preferred flights and routes, and we can handle the booking for you to save you the hassle and get preferred rates.
                    </p>
                  </div>
                </div>

                {/* Add any additional transportation services here */}

              </div>
            </div>
          </section>

          {/* Wellness & Media Services */}
          <section id="wellness-media" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Wellness & Media Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Enhance your vacation experience with our premium wellness treatments and professional media services.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Private Photographer */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.30.14 AM.png"
                      alt="Private Photographer"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaCamera className="text-lg" />
                      </span>
                      Private Photographer
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Capture timeless family moments with our popular private photographer service! Whether it's a candid session or a beautifully staged family portrait, let our expert photographers ensure you leave with quality, professional photos of your entire family.
                    </p>
                  </div>
                </div>

                {/* Professional Grade Video */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.30.44 AM.png"
                      alt="Professional Grade Video"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <FaVideo className="text-lg" />
                      </span>
                      Professional Grade Video
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Capture your vacation memories in a truly special way by hiring a professional videographer to film one or two of your busiest days. Relive those moments and cherish them forever with a personalized 60-90 second professionally shot and edited video that captures the highlights of your vacation.
                      <br /><br />
                      • The same videographer and editing team as the video on acehost.ca homepage.
                    </p>
                  </div>
                </div>

                {/* IV Drip Therapy */}
                <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="relative h-56">
                    <Image
                      src="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.30.59 AM.png"
                      alt="IV Drip Therapy"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      <span className="service-icon">
                        <BiInjection className="text-lg" />
                      </span>
                      IV Drip Therapy
                    </h3>
                    <p className="text-gray-600 mb-4">
                      Rehydrate, recharge, and revitalize with IV therapy delivered to you. Elevate your wellness with our popular IV drip therapy sessions, tailored for ultimate comfort and rejuvenation. Choose from a wide range of options, including vitamin and immune boosts, NAD anti-aging, recovery drips, vitamin injections, and more.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
                Everything you need to know about our concierge services in
                Whistler.
              </p>

              <div className="space-y-4">
                {/* FAQ 1 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 0 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(0)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What are the advantages of using AceHost concierge
                      service?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 0 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 0
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        AceHost offers personalized, all-in-one concierge
                        services that take care of every aspect of your
                        vacation. With our local connections and expertise, we
                        can secure priority access to the best experiences in
                        Whistler. Our team goes above and beyond to ensure you
                        get the best tables, service, and time slots, making
                        your stay memorable and seamless.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 2 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 1 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(1)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What activities are there to do in the Summer in Whistler?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 1 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 1
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        Whistler offers a wide range of summer activities
                        including mountain biking, hiking, zip-lining, golf,
                        fishing, and water sports on the beautiful lakes. Our
                        concierge team can arrange guided tours, equipment
                        rentals, and exclusive experiences to make your summer
                        visit memorable.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 3 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 2 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(2)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      Which activity tends to be the most frequently booked by
                      our guests?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 2 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 2
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        While our Heli Glacier Meal experience, a private chef-prepared meal atop a glacier with breathtaking views, is one of our most unique and talked-about offerings, the most frequently booked services tend to be the essentials that enhance daily comfort and convenience.
                      </p>
                      <p className="mt-3">
                        Most of our guests use AceHost to arrange airport transfers, daily cleanings, and a combination of restaurant reservations and in-home private chef dinners. Many opt for daily breakfast prepared by a chef, one of our most popular offerings, allowing guests to wake up at their own pace to a fresh spread of hot dishes, pastries, and fruit.
                      </p>
                      <p className="mt-3">
                        For activities, it's common for each trip to include one or two standout experiences, such as snowmobiling, ziplining, or the Vallea Lumina light walk. In the winter, private ski instructors are highly requested for their ability to provide tailored instruction while helping guests skip the lift lines.
                      </p>
                      <p className="mt-3">
                        We also frequently coordinate last-minute transportation, as Whistler's local taxi system doesn't offer scheduling and can be unreliable, especially in peak season. Another popular service is ski rental delivery, which is booked by nearly all of our winter guests. It's a seamless process, and the delivery fee is included.
                      </p>
                      <p className="mt-3">
                        And for our more adventurous travelers, heli-skiing remains a bucket-list favourite, with many of our groups including it as part of their winter escape.
                      </p>
                      <p className="mt-3">
                        Whether it's the basics or something extraordinary, we're here to take care of it all.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 4 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 3 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(3)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What does the host/butler service include?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 3 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 3
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        Our host/butler service enhances your luxury stay by
                        serving specialty coffees in the morning and cocktails
                        at night. They manage fireplaces, house cleanliness, and
                        setup of lighting, temperature, and music to your
                        preferences. When paired with our private chef service,
                        they'll also set, serve, and clean meals, creating
                        a complete 5-star dining experience.
                      </p>
                    </div>
                  </div>
                </div>

                {/* FAQ 5 */}
                <div
                  className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                    expandedFaq === 4 ? "shadow-md" : "shadow-sm"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(4)}
                    className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  >
                    <h3 className="text-lg font-medium text-gray-900">
                      What VIP concierge services does AceHost offer?
                    </h3>
                    <span className="ml-6 flex-shrink-0">
                      {expandedFaq === 4 ? (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 15l7-7 7 7"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="h-6 w-6 text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      expandedFaq === 4
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-6 pt-0 text-gray-600">
                      <p>
                        AceHost offers a comprehensive range of VIP services
                        including private chefs, in-home bartending, restaurant
                        reservations, ski/snowboard lessons, heli-skiing,
                        snowmobile tours, airport transfers, private drivers,
                        in-home massages and wellness services, babysitting,
                        daily housekeeping, and exclusive mountain experiences
                        designed for luxury travelers.
                      </p>
                      <p className="mt-3">
                        AceHost can essentially help and book absolutely anything you need. No request is unreasonable, just ask!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-white text-black border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold mb-6 tracking-tight">
                Interested in Concierge Services?
              </h2>
              <p className="text-xl mb-10 max-w-2xl mx-auto text-gray-700">
                Let us enhance your Whistler experience with our premium
                concierge services.
              </p>
              <Link
                href="/contact"
                className="inline-block bg-white text-black font-medium px-8 py-4 rounded-full border border-gray-200 hover:border-gray-400 shadow-sm hover:shadow transition duration-200 text-lg"
              >
                Contact Us
              </Link>
            </div>
          </section>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        @media (min-width: 768px) {
          .carousel-card {
            width: calc(33.33% - 16px) !important;
            flex: 0 0 calc(33.33% - 16px) !important;
            display: flex !important;
            flex-direction: column !important;
            border-radius: 16px !important;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
            transition: transform 0.3s ease, box-shadow 0.3s ease !important;
          }

          .carousel-card:hover {
            transform: translateY(-5px) !important;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08) !important;
          }
        }

        @media (max-width: 767px) {
          .carousel-card {
            width: calc(100% - 32px) !important;
            flex: 0 0 calc(100% - 32px) !important;
            margin: 0 auto;
            display: flex !important;
            flex-direction: column !important;
            border-radius: 16px !important;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05) !important;
          }

          .card-image {
            height: 280px !important;
          }

          .card-title {
            font-size: 1.5rem !important;
            letter-spacing: -0.02em !important;
            font-weight: 600 !important;
          }

          .card-description {
            font-size: 1rem !important;
            line-height: 1.5 !important;
            letter-spacing: -0.01em !important;
            color: rgba(60, 60, 67, 0.85) !important;
          }
        }

        .card-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          padding: 1.5rem !important;
          position: relative;
        }

        .book-now-button {
          background-color: #06c;
          color: white;
          font-weight: 500;
          padding: 0.75rem 1.5rem;
          border-radius: 12px;
          text-align: center;
          transition: all 0.3s ease;
          margin-top: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          width: 100%;
          position: relative;
          bottom: 0;
          letter-spacing: -0.01em;
          font-size: 1rem;
          font-weight: 600;
        }

        .book-now-button:hover {
          background-color: #0055b3;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 102, 204, 0.2);
        }

        .service-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background-color: #f2f2f7;
          color: #06c;
          margin-right: 0.5rem;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          letter-spacing: -0.025em;
          font-weight: 600;
        }

        p {
          letter-spacing: -0.01em;
          color: rgba(60, 60, 67, 0.85);
          line-height: 1.6;
        }
      `}</style>
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

export default ConciergeService;
