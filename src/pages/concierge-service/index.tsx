import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import LazyVimeoPlayer from "@/components/LazyVimeoPlayer";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward, IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
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
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());

  const toggleCardExpansion = (index: number) => {
    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

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

    // Add styles for the card animations
    const style = document.createElement('style');
    style.innerHTML = `
      .card-text-container {
        overflow: hidden;
        transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      }
      
      .show-more-button {
        color: #000;
        font-weight: 500;
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        cursor: pointer;
        transition: opacity 0.2s ease;
        background: none;
        border: none;
        padding: 0;
        font: inherit;
        outline: inherit;
      }
      
      .show-more-button:hover {
        opacity: 0.7;
      }
      
      .show-more-button svg {
        margin-left: 0.25rem;
        transition: transform 0.3s ease;
      }
      
      .show-more-button.expanded svg {
        transform: rotate(180deg);
      }
    `;
    document.head.appendChild(style);

    // Call the function after component mount
    addResponsiveClasses();
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);


  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Helper function to get the first sentence of a text
  const getFirstSentence = (text: string) => {
    const match = text.match(/^(.*?[.!?])\s/);
    if (match && match[1]) {
      return match[1] + "...";
    }
    // If no sentence end is found, return first 80 characters
    return text.length > 80 ? text.substring(0, 80) + "..." : text;
  };

  // Concierge Card Component
  const ConciergeCard = ({ 
    index, 
    icon, 
    title, 
    description, 
    imageSrc, 
    imageAlt,
    link = null 
  }: { 
    index: number, 
    icon: JSX.Element, 
    title: string, 
    description: string, 
    imageSrc: string, 
    imageAlt: string,
    link?: { url: string, text: string } | null
  }) => {
    const isExpanded = expandedCards.has(index);
    const truncatedText = getFirstSentence(description);
    
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
        <div className="relative h-56">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
            className="object-cover"
            priority={index < 6} // Prioritize loading first 6 images
          />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            <span className="service-icon mr-2 inline-flex items-center justify-center">
              {icon}
            </span>
            {title}
          </h3>
          <div className="card-text-container text-gray-600" style={{ 
            maxHeight: isExpanded ? '1000px' : '80px',
            position: 'relative'
          }}>
            <p className="mb-2">
              {description}
            </p>
            {link && isExpanded && (
              <a 
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-3 bg-black text-white font-medium rounded hover:bg-gray-800 transition-colors duration-200"
              >
                {link.text}
              </a>
            )}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent"></div>
            )}
          </div>
          <button 
            onClick={() => toggleCardExpansion(index)}
            className={`show-more-button ${isExpanded ? 'expanded' : ''}`}
            aria-expanded={isExpanded}
          >
            <span>{isExpanded ? 'Show less' : 'Show more'}</span>
            <IoIosArrowDown className="ml-1" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Head>
        <title>Whistler VIP Concierge Services | AceHost</title>
        <meta
          name="description"
          content="Personalized luxury concierge services for your Whistler vacation. From private chefs to heli-skiing, we take care of every detail."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className="pb-20">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-stone-950 text-white">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_0%,rgba(180,83,9,0.18),transparent_55%)]"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-stone-900/40 via-transparent to-stone-950"
              aria-hidden="true"
            />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                <div className="concierge-hero-copy lg:col-span-6 xl:col-span-7 order-2 lg:order-1">
                  <h1 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.08] text-white mb-5">
                    Whistler VIP Concierge Services
                  </h1>
                  <p className="text-base sm:text-lg text-white leading-relaxed max-w-xl mb-6">
                    When you book Luxury Accommodations with AceHost, VIP Concierge Services are included to elevate your stay.
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {[
                      "Private Chefs",
                      "Heli Adventures",
                      "VIP Tables",
                      "In-Home Spa",
                      "Ski Pass Delivery & Booking",
                      "Ski Instructors",
                      "Transportation",
                      "Restaurant Reservations",
                      "Daily Housekeeping",
                      "Ski/Snowboard Rental Delivery",
                    ].map((label) => (
                      <span
                        key={label}
                        className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs sm:text-sm font-medium text-white"
                      >
                        {label}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row gap-3">
                    <a
                      href="#services"
                      className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-stone-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                    >
                      Explore Services
                    </a>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center rounded-lg border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-stone-950"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-6 xl:col-span-5 order-1 lg:order-2 flex justify-center lg:justify-end">
                  <div className="relative w-full max-w-[280px] sm:max-w-[300px]">
                    <div
                      className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-amber-500/20 blur-3xl"
                      aria-hidden="true"
                    />
                    <div className="relative overflow-hidden rounded-[1.75rem] bg-black shadow-2xl ring-1 ring-white/15">
                      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
                        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-400">
                          Concierge Reel
                        </span>
                        <a
                          href="https://www.instagram.com/acehost_whistler/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs font-medium text-amber-200/90 transition-colors hover:text-amber-100"
                        >
                          @acehost_whistler
                        </a>
                      </div>

                      <LazyVimeoPlayer
                        videoId="1122268553"
                        title="The AceHost Concierge Reel"
                        aspectRatio="portrait"
                        loadStrategy="inView"
                        autoplay
                        className="w-full bg-black"
                      />

                      <div className="border-t border-white/10 px-4 py-3">
                        <a
                          href="https://www.instagram.com/acehost_whistler/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-medium text-stone-300 transition-colors hover:text-white"
                        >
                          Watch more on Instagram →
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-[#f6f3ed] border-b border-stone-300/50 py-10 sm:py-12">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-stone-900 mb-6">
                Explore Our Concierge Services
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-stone-800 leading-relaxed">
                <p>
                  Our local team curates a personalized itinerary to ensure every detail is taken care of, from exclusive dining reservations to seamless logistics. We don&apos;t just send an itinerary; we secure top tables, prime time slots, and priority access to Whistler&apos;s best.
                </p>
                <p>
                  With unmatched local knowledge and strong connections, our concierge team is available from arrival to departure for anything you need, last-minute staffing, special requests, or insider tips for untouched powder. Whether planning in advance or responding to same-day changes, we&apos;re here to deliver Whistler&apos;s top luxury concierge experience.
                </p>
              </div>
            </div>
          </section>

          {/* All Concierge Services */}
          <section id="services" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Concierge Services
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-3xl">
                Experience the best of Whistler with our exclusive services and VIP access.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ConciergeCard
                  index={0}
                  icon={<FaShuttleVan className="text-lg" />}
                  title="Jet-Van transportation"
                  description="Our most popular and most luxurious form of transportation to and from YVR. A Sprinter Van with a layout similar to a private jet. Enjoy maximum comfort and luxuries from the moment you step off the plane."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 10.47.24 AM.png"
                  imageAlt="Jet-Van transportation"
                />
                
                <ConciergeCard
                  index={1}
                  icon={<FaSkiing className="text-lg" />}
                  title="Private Ski Instructor"
                  description="AceHost can help organize your private ski and snowboard lessons through our connections at Extremely Canadian Whistler. Our guides can help elevate your skill level, find hidden trails, and are familiar with the best spots on the mountain, especially during powder days. Guides can help you skip lines and meet at your convenience."
                  imageSrc="/photos/homepage/concierge-service/PrivateSkiInstructor.jpg"
                  imageAlt="Private Ski Instructor"
                />
                
                <ConciergeCard
                  index={2}
                  icon={<GiCookingPot className="text-lg" />}
                  title="In-Home Private Chef"
                  description="AceHost offers in-home private chef dining services. This is one of our most popular services and includes menu planning, grocery shopping, preparation, cooking and clean up afterward. The AceHost chef team will work with you to customize menus for a multi-course meal, brunch, dinner and everything in between."
                  imageSrc="/photos/homepage/concierge-service/PrivateChef.jpeg"
                  imageAlt="In-Home Private Chef"
                />
                
                <ConciergeCard
                  index={3}
                  icon={<FaCalendarCheck className="text-lg" />}
                  title="Restaurant Reservations"
                  description="AceHost can help secure your reservations for the hottest restaurants in Whistler. From acclaimed fine-dining establishments to local hidden gems, our concierge team has the connections to get you seated at the best tables, even during peak season when reservations are typically hard to get."
                  imageSrc="/photos/homepage/concierge-service/WhistlerRestarurants.png"
                  imageAlt="Restaurant Reservations"
                />

                <ConciergeCard
                  index={4}
                  icon={<FaTicketAlt className="text-lg" />}
                  title="Ski Lift Pass Delivery"
                  description="With all AceHost bookings, guests enjoy the added convenience of having their ski passes delivered right to their rental home. No more waiting in long lines, showing IDs, or filling out forms when you'd rather be enjoying the mountains. Instead, your passes are ready and waiting for you upon arrival, so you can wake up and head straight to the slopes stress-free. And best of all, we provide this service at absolutely no extra cost."
                  imageSrc="/photos/homepage/concierge-service/ski-pass-delivery.png"
                  imageAlt="Epic Pass ski lift passes delivered and ready at a luxury Whistler rental home"
                />

                <ConciergeCard
                  index={5}
                  icon={<FaMedal className="text-lg" />}
                  title="Ski or Ride with an Olympian"
                  description="Experience the thrill of skiing or snowboarding alongside an Olympian with Snow School's exclusive program. Trace their lines, refine your technique, and hear inspiring stories firsthand. This unparalleled opportunity offers a unique blend of personalized instruction and insight from world-class athletes. Go one-on-one or make a group with up to four family or friends of similar ability - for one price."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.23.19 AM.png"
                  imageAlt="Ski or Ride with an Olympian"
                />

                <ConciergeCard
                  index={5}
                  icon={<FaSnowflake className="text-lg" />}
                  title="In-home Ski/Snowboard Delivery"
                  description="AceHost has partnered with Black Tie to deliver equipment directly to your home between 7:30am-10pm with a selection boots, skis, snowboards, and poles. Black Tie rentals can also bring a selection of socks, gloves and ski goggles, available. The best part is the delivery fee is included!"
                  imageSrc="/photos/homepage/concierge-service/SkiRentals.png"
                  imageAlt="In-home Ski/Snowboard Delivery"
                  link={{
                    url: "https://www.blacktieskis.com/portal/?portal_name=acehost",
                    text: "Discounted Link to Book Rentals"
                  }}
                />

                <ConciergeCard
                  index={6}
                  icon={<GiCookingPot className="text-lg" />}
                  title="Heli Glacier Meal"
                  description="The Heli Glacier Meal is one of AceHost's most highly rated experiences. Enjoy a private chef prepared meal while taking in the stunning views of the local mountain ranges from a glacier. Our chefs and servers join the heli trips to serve meals and provide a first-rate dining experience. Contact us to get a quote for this experience."
                  imageSrc="/photos/homepage/concierge-service/HeliGlacier Meal.jpg"
                  imageAlt="Heli Glacier Meal"
                />

                <ConciergeCard
                  index={7}
                  icon={<FaSnowplow className="text-lg" />}
                  title="Snowmobile Experience"
                  description="For a classic Whistler snowmobile experience, AceHost can set you up with a guided ride through Blackcomb's alpine terrain. Whether you're a first-timer or looking to push things a bit further, there are options for every level. Expect wide open trails & incredible viewpoints. A chance to tailor the experience to your group, from relaxed scenic cruising to more adventurous routes."
                  imageSrc="/photos/homepage/concierge-service/Snowmobile Experience.png"
                  imageAlt="Snowmobile Experience"
                />

                <ConciergeCard
                  index={8}
                  icon={<GiMountainCave className="text-lg" />}
                  title="Heli Ice Cave Adventure"
                  description="Take a journey through 12,000 - 20,000-year-old ice caves via a scenic helicopter ride through the local mountain range. Soaring over ancient glacier formations, guests can experience a guide-led tour inside ice tunnels and remote ice caves. Elevate your tour experience by adding Bearfoot Bistro's charcuterie and dessert platters. Contact us for ice cave adventure tour quote."
                  imageSrc="/photos/homepage/concierge-service/HeliSki.jpeg"
                  imageAlt="Heli Ice Cave Adventure"
                />

                <ConciergeCard
                  index={9}
                  icon={<MdAirportShuttle className="text-lg" />}
                  title="VIP Airport Transfers"
                  description="Start and end your journey in comfort with our luxury airport transfer service. Our professional drivers will meet you at Vancouver International Airport and transport you directly to your accommodation in Whistler. Vehicles range from executive sedans to spacious SUVs and vans, depending on your group size."
                  imageSrc="/photos/homepage/concierge-service/VIP_Airport_Transfer.png"
                  imageAlt="VIP Airport Transfers"
                />

                <ConciergeCard
                  index={10}
                  icon={<GiDogHouse className="text-lg" />}
                  title="Dog Sledding"
                  description="Experience an authentic winter activity by booking a dog sled ride through the Callaghan Valley Old Growth Forests. This tour offers a ride through open and winding trails, suitable for families looking to get outdoors and soak in the beauty of local forests."
                  imageSrc="/photos/homepage/concierge-service/DogSled.jpg"
                  imageAlt="Dog Sledding"
                />

                <ConciergeCard
                  index={11}
                  icon={<BiDrink className="text-lg" />}
                  title="In-Home Bartender/Mixologist"
                  description="Elevate your gatherings with a professional bartender who will craft premium cocktails tailored to your preferences. Our bartenders can create signature drinks, organize wine tastings, or simply ensure everyone's glass stays full throughout the evening. This service pairs perfectly with our private chef offerings."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 12.36.56 PM.png"
                  imageAlt="In-Home Bartender/Mixologist"
                />

                <ConciergeCard
                  index={12}
                  icon={<FaUtensils className="text-lg" />}
                  title="Grocery Delivery/Pre Arrival Stock"
                  description="Arrive at your luxury accommodation to find the kitchen fully stocked with your favorite foods and beverages. Simply share your preferences and dietary requirements, and our team will handle the shopping and delivery. This service ensures you can start enjoying your vacation immediately without worrying about grocery shopping."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 12.37.46 PM.png"
                  imageAlt="Grocery Delivery/Pre Arrival Stock"
                />

                <ConciergeCard
                  index={13}
                  icon={<BiSpa className="text-lg" />}
                  title="In-Home Massage"
                  description="Book a relaxing massage in the comfort of your luxury accommodation. Our professional massage therapists offer a variety of techniques, from Swedish to deep tissue, tailored to your specific needs. This service is perfect after a long day on the slopes or hiking trails."
                  imageSrc="/photos/homepage/concierge-service/In-House Messages.jpg"
                  imageAlt="In-Home Massage"
                />

                <ConciergeCard
                  index={14}
                  icon={<FaMountain className="text-lg" />}
                  title="Zipline Tours"
                  description="Experience a bird's-eye view of Whistler Mountain when you book a zip-line tour through AceHost. The panoramic views of Whistler can be seen from treetop suspension bridges and sky high viewing platforms. Enjoy this experience year-round experience. Contact us to book your zip-line tour today!"
                  imageSrc="/photos/homepage/concierge-service/ZipLine.jpg"
                  imageAlt="Zipline Tours"
                />

                <ConciergeCard
                  index={11}
                  icon={<FaHiking className="text-lg" />}
                  title="Vallea Illumina"
                  description="One of the most popular local activities, the Vallea Ilumina night walk is a must do when visiting Whistler. The 30-45 minute walk through an illuminated forest is a sight for sore eyes and fun for the whole family. Join an evening excursion and be enchanted by the stories about the legends of Whistler."
                  imageSrc="/photos/homepage/concierge-service/Valley.jpg"
                  imageAlt="Vallea Illumina"
                />
                
                <ConciergeCard
                  index={12}
                  icon={<GiMountainRoad className="text-lg" />}
                  title="Crystal Hut Snowmobile Fondue Experience"
                  description="Suits adventurous beginner and intermediate riders. Drive your own snowmobile or share with a friend as you sweep across the forested trails of Blackcomb Mountain. Fondue experience when you get to the top!"
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.21.24 AM.png"
                  imageAlt="Crystal Hut Snowmobile Fondue Experience"
                />

                <ConciergeCard
                  index={14}
                  icon={<GiFoodTruck className="text-lg" />}
                  title="Catered Meals"
                  description="If you prefer a more casual dining experience without the full private chef service, our catered meal options are perfect. We'll arrange for gourmet prepared meals to be delivered to your accommodation, ready to heat and serve at your convenience. These meals are prepared by top local chefs using fresh, seasonal ingredients."
                  imageSrc="/photos/homepage/concierge-service/catered-meals.png"
                  imageAlt="Gourmet catered meal spread in a luxury Whistler chalet kitchen"
                />

                <ConciergeCard
                  index={15}
                  icon={<FaSnowflake className="text-lg" />}
                  title="Bearfoot Bistro Vodka Ice Room Experience"
                  description="Experience the world's coldest vodka tasting in Canada's first sub-zero vodka room at the iconic Bearfoot Bistro. Don a provided Arctic parka and sample premium vodkas from around the world in this unique -32°C environment."
                  imageSrc="/photos/homepage/concierge-service/Dinningand Apres Ski.jpeg"
                  imageAlt="Bearfoot Bistro Vodka Ice Room Experience"
                />




                <ConciergeCard
                  index={20}
                  icon={<FaWineGlassAlt className="text-lg" />}
                  title="Wine & Champagne Selection"
                  description="Let our wine specialists curate a selection of fine wines and champagnes for your stay. Whether you're looking for specific bottles, want recommendations to pair with meals, or wish to arrange a private tasting, our team can ensure your cellar is stocked with premium offerings that match your taste and occasion."
                  imageSrc="/photos/homepage/concierge-service/wine-champagne-selection.png"
                  imageAlt="Curated wine and champagne bottles in a luxury Whistler chalet wine cellar"
                />


                <ConciergeCard
                  index={21}
                  icon={<MdSpa className="text-lg" />}
                  title="Yoga Instructor"
                  description="Start your day with a centering yoga session led by one of our expert instructors. Whether you prefer vinyasa flow, hatha, or restorative yoga, our instructors can customize the session to your group's skill level and preferences."
                  imageSrc="/photos/homepage/concierge-service/In House Beauty and Wellness.jpg"
                  imageAlt="Yoga Instructor"
                />

                <ConciergeCard
                  index={22}
                  icon={<FaConciergeBell className="text-lg" />}
                  title="Private Butler/Host"
                  description="Elevate your stay with a private butler or host who can manage all aspects of your in-home experience. From serving meals and mixing cocktails to keeping the fire lit and ensuring your home is always perfectly maintained, our professional staff provide discreet, top-tier service."
                  imageSrc="/photos/homepage/concierge-service/Butler.jpg"
                  imageAlt="Private Butler/Host"
                />

                <ConciergeCard
                  index={23}
                  icon={<MdCleaningServices className="text-lg" />}
                  title="Daily Housekeeping"
                  description="Keep your luxury accommodation pristine with our daily housekeeping service. Our professional team will refresh bathrooms, make beds, tidy common areas, and replenish amenities to ensure your space remains a perfect retreat throughout your stay."
                  imageSrc="/photos/homepage/concierge-service/HouseKeeping.jpg"
                  imageAlt="Daily Housekeeping"
                />

                <ConciergeCard
                  index={24}
                  icon={<MdSpa className="text-lg" />}
                  title="In-Home Hair & Beauty"
                  description="Prepare for a special evening or simply treat yourself with our in-home hair styling and beauty services. Our professional stylists and makeup artists bring the salon experience directly to you, ensuring you look and feel your best for any occasion."
                  imageSrc="/photos/homepage/concierge-service/in-home-hair-beauty.png"
                  imageAlt="In-home hair and makeup styling in a luxury Whistler chalet"
                />

                <ConciergeCard
                  index={25}
                  icon={<MdChildCare className="text-lg" />}
                  title="Childcare Services"
                  description="Enjoy some adult time while knowing your children are in good hands with our professional childcare providers. All our babysitters and nannies are experienced, background-checked, and trained in first aid, ensuring the highest level of care and fun for your little ones."
                  imageSrc="/photos/homepage/concierge-service/BabySitting.jpg"
                  imageAlt="Childcare Services"
                />

                <ConciergeCard
                  index={26}
                  icon={<FaDog className="text-lg" />}
                  title="Dog Sitting"
                  description="Are you staying at a pet friendly home? If so, take advantage of our dog sitting services so you can enjoy activities or dinners in town, with peace of mind."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.25.40 AM.png"
                  imageAlt="Dog Sitting"
                />

                <ConciergeCard
                  index={27}
                  icon={<GiBabyBottle className="text-lg" />}
                  title="Baby & Child Rental Equipment"
                  description="Baby gates and child equipment rentals such as high chairs, cribs, etc. are available for your convenience."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.28.52 AM.png"
                  imageAlt="Baby & Child Rental Equipment"
                />

                <ConciergeCard
                  index={29}
                  icon={<FaCar className="text-lg" />}
                  title="Private Chauffeur"
                  description="Enjoy the convenience of a dedicated chauffeur throughout your stay. Whether for restaurant visits, shopping trips, or excursions to nearby attractions, our professional drivers provide reliable, discreet service in luxury vehicles tailored to your group's needs."
                  imageSrc="/photos/homepage/concierge-service/PrivateDrivers.jpeg"
                  imageAlt="Private Chauffeur"
                />

                <ConciergeCard
                  index={30}
                  icon={<FaPlane className="text-lg" />}
                  title="Helicopter Transfers"
                  description="For the ultimate arrival experience, choose our helicopter transfer service. Bypass traffic and enjoy breathtaking aerial views as you travel from Vancouver to Whistler in just 30 minutes. This service includes ground transport to and from the helipad, making your journey seamless."
                  imageSrc="/photos/homepage/concierge-service/WhistlerHeli.jpg"
                  imageAlt="Helicopter Transfers"
                />

                <ConciergeCard
                  index={31}
                  icon={<FaCar className="text-lg" />}
                  title="Luxury Vehicle Rentals"
                  description="For guests who prefer to drive themselves, we offer a selection of premium vehicles for rental. From high-end SUVs perfect for mountain driving to exotic sports cars for a special experience, we can arrange the perfect vehicle delivered directly to your accommodation."
                  imageSrc="/photos/homepage/concierge-service/AirportTransfers.jpg"
                  imageAlt="Luxury Vehicle Rentals"
                />

                <ConciergeCard
                  index={32}
                  icon={<FaShuttleVan className="text-lg" />}
                  title="12-15 seater Private Transportation Services"
                  description="Private 12-15 seater transportation in town, as well as to and from the airport. Getting around in town can be a challenge for a large group, especially in the busy winter season. Let us help you to get around town. We can work with an itinerary & schedule, as well as last minute rides if and when needed."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 10.48.27 AM.png"
                  imageAlt="12-15 seater Private Transportation Services"
                />

                <ConciergeCard
                  index={33}
                  icon={<FaPlane className="text-lg" />}
                  title="Private Jet & Commercial Flights"
                  description="Please share your preferred flights and routes, and we can handle the booking for you to save you the hassle and get preferred rates."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.28.11 AM.png"
                  imageAlt="Private Jet & Commercial Flights"
                />

                {/* Add any additional transportation services here */}

                <ConciergeCard
                  index={35}
                  icon={<FaCamera className="text-lg" />}
                  title="Private Photographer"
                  description="Capture timeless family moments with our popular private photographer service! Whether it's a candid session or a beautifully staged family portrait, let our expert photographers ensure you leave with quality, professional photos of your entire family."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.30.14 AM.png"
                  imageAlt="Private Photographer"
                />

                <ConciergeCard
                  index={36}
                  icon={<FaVideo className="text-lg" />}
                  title="Professional Grade Video"
                  description="Capture your vacation memories in a truly special way by hiring a professional videographer to film one or two of your busiest days. Relive those moments and cherish them forever with a personalized 60-90 second professionally shot and edited video that captures the highlights of your vacation.\n\n• The same videographer and editing team as the video on acehost.ca homepage."
                  imageSrc="/photos/homepage/concierge-service/Screen Shot 2025-08-01 at 11.30.44 AM.png"
                  imageAlt="Professional Grade Video"
                />

                <ConciergeCard
                  index={37}
                  icon={<BiInjection className="text-lg" />}
                  title="IV Drip Therapy"
                  description="Rehydrate, recharge, and revitalize with IV therapy delivered to you. Elevate your wellness with our popular IV drip therapy sessions, tailored for ultimate comfort and rejuvenation. Choose from a wide range of options, including vitamin and immune boosts, NAD anti-aging, recovery drips, vitamin injections, and more."
                  imageSrc="/photos/homepage/concierge-service/iv-drip-therapy.png"
                  imageAlt="In-home IV drip therapy in a luxury Whistler chalet with mountain views"
                />
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
          line-height: 1.6;
        }

        .concierge-hero-copy p {
          color: #ffffff;
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
