import React, { useState, useEffect, useMemo } from "react";
import Navigation from "@/components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  ChevronRight,
  Users,
  Bed,
  Bath,
  MapPin,
  Search,
  ArrowRight,
  X,
  Filter,
  CheckCircle,
  Coffee,
  Wifi,
  Car,
  ChevronLeft,
  Check,
} from "lucide-react";
import Footer from "@/components/Footer";
import Head from "next/head";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Image from "next/image";

interface PropertyFeature {
  id: string;
  name: string;
  images: string[];
  guests: number;
  bedrooms: number;
  bathrooms: number;
  description: string;
  features: string[];
  location: string;
  sqm?: number;
  highlights?: string[];
  priceRange?: string;
  isPetFriendly?: boolean;
  isSkiInSkiOut?: boolean;
  link?: string;
}

interface PropertyCategory {
  id: string;
  title: string;
  description?: string;
  properties: PropertyFeature[];
}

export default function Properties() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { category: queryCategoryId } = router.query;
  const [activeCategory, setActiveCategory] = useState<string>("whistler");
  const [filters, setFilters] = useState({
    minBedrooms: 0,
    maxBedrooms: 20,
    minGuests: 0,
    maxGuests: 50,
    amenities: [] as string[],
    petFriendly: false,
    skiInSkiOut: false
  });
  const [showFilters, setShowFilters] = useState(false);

  // Structured data for SEO
  const structuredData = useMemo(
    () => ({
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [] as Array<{
        "@type": string;
        position: number;
        item: {
          "@type": string;
          name: string;
          image: string;
          description: string;
          accommodationCategory: string;
          numberOfRooms: number;
          amenityFeature: Array<{
            "@type": string;
            name: string;
          }>;
          address: {
            "@type": string;
            addressLocality: string;
          };
          offers?: {
            "@type": string;
            priceCurrency: string;
            priceValidUntil: string;
            url: string;
            availability: string;
          };
          aggregateRating?: {
            "@type": string;
            ratingValue: number;
            reviewCount: number;
          };
        };
      }>,
      numberOfItems: 0,
    }),
    []
  );

  // Property Data
  const propertyCategories = useMemo<PropertyCategory[]>(
    () => [
      {
        id: "whistler",
        title: "Whistler Properties",
        description:
          "Discover our luxury chalets and condos in Whistler, perfect for an unforgettable mountain getaway with world-class ski access and amenities.",
        properties: [
          {
            id: "altitude-retreat",
            name: "Altitude Retreat | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Altitude New Photos Best/hero2.jpeg",
              "/photos/properties/Altitude New Photos Best/Altitude-1.jpg",
              "/photos/properties/Altitude New Photos Best/Altitude-2.jpg",
            ],
            guests: 18,
            bedrooms: 7,
            bathrooms: 5.5,
            location: "Kadenwood, Whistler",
            description:
              "Altitude Retreat is situated in the most prestigious ski-in ski-out neighbourhood in Whistler. Located just a stone's throw away from the exclusive Kadenwood residence only gondola makes this property the perfect location for your Whistler vacation! This well equipped property features everything you need for an indulgent stay.",
            features: [
              "Private Butler Service",
              "Luxury In-Home Gym",
              "Hot Tub",
              "Sauna",
              "Ski-In/Ski-Out Access",
              "Mountain Views",
              "10,000 sq.ft Interior",
              "Private Forest Setting",
            ],
            highlights: [
              "Private Butler Included",
              "Exclusive Kadenwood Location",
              "7 Luxury Bedrooms",
              "Ski-In/Ski-Out Access",
            ],
            priceRange: "$7,500-$10,000+ per night",
            isSkiInSkiOut: true,
          },
          {
            id: "two-cedars",
            name: "Two Cedars | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Two Cedars New/OSA_AncientCW1248.jpg",
              "/photos/properties/Two Cedars New/Living Room 1.jpg",
              "/photos/properties/Two Cedars New/Master Bedroom 1.jpg",
            ],
            guests: 17,
            bedrooms: 7,
            bathrooms: 8.5,
            location: "Kadenwood, Whistler",
            description:
              "Set in exclusive Kadenwood, Two Cedars offers ski-in/ski-out access and breathtaking panoramic views. This premium mountain home features elegant design, a private hot tub, and luxury amenities throughout.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Panoramic Views",
              "Gourmet Kitchen",
              "Multiple Fireplaces",
              "Large Deck",
              "Media Room",
              "Heated Floors",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Ski-in/Ski-out Access",
            ],
            priceRange: "$6,500-$9,500+ per night",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },
          {
            id: "chalet-la-forja",
            name: "Chalet La Forja | Kadenwood | Private Butler",
            images: [
              "/photos/properties/Chalet La Forja/hero00001.jpg",
              "/photos/properties/Chalet La Forja/DSC02005-Edit.jpg",
              "/photos/properties/Chalet La Forja/Wine Cellar.jpg",
            ],
            guests: 12,
            bedrooms: 7.5,
            bathrooms: 8,
            location: "Kadenwood, Whistler",
            description:
              "Chalet La Forja is a magnificent mountain retreat situated in Whistler's prestigious Kadenwood neighborhood. This luxurious ski-in/ski-out property offers breathtaking views, elegant design, and premium amenities for an unforgettable Whistler experience.",
            features: [
              "Private Hot Tub",
              "Gourmet Kitchen",
              "Ski-In/Ski-Out Access",
              "Mountain Views",
              "Luxury Finishes",
              "Game Room",
              "Heated Floors",
              "Private Balcony",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Ski-In/Ski-Out Access",
              "Hot Tub with Mountain Views",
              "Luxury Design",
            ],
            priceRange: "$7,000-11,000+ per night | Private Butler Included",
            isSkiInSkiOut: true,
          },
          {
            id: "slopeside-villa",
            name: "Slope Slide Chalet | Kadenwood",
            images: [
              "/photos/properties/Slopeside Kadenwood/01-2945 Slope Side 01.jpg",
              "/photos/properties/Slopeside Kadenwood/03-2945 Slope Side 03.jpg",
              "/photos/properties/Slopeside Kadenwood/10-2945 Slope Side 10.jpg",
            ],
            guests: 16,
            bedrooms: 7,
            bathrooms: 7.5,
            location: "Kadenwood, Whistler",
            description:
              "Slope Side is a luxury retreat in Whistler's exclusive Kadenwood neighborhood. This ski-in/ski-out property offers breathtaking views, elegant interiors, and premium amenities for an unforgettable mountain experience.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Mountain Views",
              "Gourmet Kitchen",
              "Multiple Fireplaces",
              "Large Deck",
              "Media Room",
              "Heated Floors",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Private Hot Tub",
              "Ski-in/Ski-out Access",
              "Mountain Views",
            ],
            priceRange: "$2,600-$6,000 per night",
            isSkiInSkiOut: true,
          },
          {
            id: "panoramic-estate",
            name: "Panoramic Estate | Kadenwood",
            images: [
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
              "/photos/properties/Panoramic Estate/Panoramic Estate.jpg",
            ],
            guests: 17,
            bedrooms: 8,
            bathrooms: 7,
            location: "Kadenwood, Whistler",
            description:
              "This stunning mountain estate in exclusive Kadenwood offers unparalleled luxury and breathtaking panoramic views. With over 6,500 sq. ft. of living space, this architectural masterpiece features high-end finishes and amenities throughout.",
            features: [
              "Panoramic Mountain Views",
              "Private Hot Tub",
              "Cinema Room",
              "Wine Cellar",
              "Gourmet Kitchen",
              "Ski-in/Ski-out Access",
              "Elevator",
              "Heated Outdoor Living Area",
            ],
            highlights: [
              "Exclusive Kadenwood Location",
              "Panoramic Views",
              "Ski-in/Ski-out Access",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$5,800-$9,000+ per night",
            isSkiInSkiOut: true,
          },
          {
            id: "heron-views-whistler",
            name: "Heron Views | Whistler Village",
            images: [
              "/photos/properties/3445-Heron-Place/68-3445 Heron Place 53-Edit.jpg",
              "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05831-Edit.jpg",
              "/photos/properties/3445-Heron-Place/20241125 A7M3 02 A1_05851.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            bathrooms: 6,
            location: "Whistler Village, Whistler",
            description:
              "Located in the heart of Whistler Village, this beautifully updated condo offers unparalleled convenience with stunning mountain views. Just steps away from the lifts, restaurants, and village attractions.",
            features: [
              "Village Central Location",
              "Mountain Views",
              "Walk to Lifts",
              "Balcony",
              "Gas Fireplace",
              "Updated Kitchen",
              "Secure Underground Parking",
              "Shared Hot Tub",
            ],
            highlights: [
              "Walk to Whistler & Blackcomb Lifts",
              "Heart of Whistler Village",
              "Mountain Views",
              "Recently Renovated",
            ],
            priceRange: "$1,200-$3,500 per night",
          },
          {
            id: "ravens-nest",
            name: "Raven's Nest | Ski in Ski out | Views",
            images: [
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05349.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05352.jpg",
              "/photos/properties/Raven_s Nest 3-Bedroom/20241125 A7M3 01 A1_05360.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3,
            location: "Blackcomb, Whistler",
            description:
              "Ravens Nest is a beautiful ski-in/ski-out townhome on Blackcomb Mountain, offering stunning views and luxury accommodations for your Whistler getaway.",
            features: [
              "Ski-in/Ski-out Access",
              "Mountain Views",
              "Private Hot Tub",
              "Fully Equipped Kitchen",
              "Garage",
              "Fireplace",
              "High-Speed WiFi",
              "Smart TV",
            ],
            priceRange: "$2,000-$3,500 per night",
            isSkiInSkiOut: true,
          },
          {
            id: "falcon-blueberry-drive",
            name: "Falcon | Blueberry Drive",
            images: [
              "/photos/properties/Falcon/15-3595 Falcon Cres-15-.jpg",
              "/photos/properties/Falcon/09-3595 Falcon Cres-09.jpg",
              "/photos/properties/Falcon/10-3595 Falcon Cres-10.jpg",
            ],
            guests: 15,
            bedrooms: 7,
            bathrooms: 3.5,
            location: "whistler",
            description:
              "Cozy chalet in an amazing location! Beautiful views of the mountain in the prestigious, quiet and family orientated Blueberry Hill. Perfect for a large group or family retreat in Whistler.",
            features: [
              "Hot Tub",
              "Mountain Views",
              "Spacious Deck",
              "BBQ",
              "Wood-burning Fireplace",
              "Parking for 4-5 Cars",
            ],
            highlights: [
              "7 Spacious Bedrooms",
              "Family-Friendly Area",
              "Beautiful Mountain Views",
              "15-Minute Walk to Village",
            ],
            priceRange: "Nightly Price Range: $1,300-$3,500+",
            winterPrice: "$2,000-$3,500+ Nightly | Winter",
            holidayPrice: "$4,000-$7,200+ Nightly | Christmas & NY",
          },
          {
            id: "snow-pine",
            name: "Snowpine | Creekside",
            images: [
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
              "/photos/properties/Snowpine 3-bed Saul/02-2040 Karen Cres-02.jpg",
            ],
            guests: 6,
            bedrooms: 3,
            bathrooms: 3.5,
            location: "White Gold, Whistler",
            description:
              "This elegant alpine retreat in Whistler's White Gold neighborhood combines luxury with convenience. Just a short walk to the Village and lifts, this beautiful mountain home features high ceilings, a gourmet kitchen, and a private hot tub.",
            features: [
              "Private Hot Tub",
              "Gourmet Kitchen",
              "High Ceilings",
              "Wood-Burning Fireplace",
              "Large Deck",
              "Walk to Village & Lifts",
              "Mountain Views",
              "Heated Floors",
            ],
            highlights: [
              "10-Minute Walk to Village",
              "Private Hot Tub",
              "Spacious Mountain Home",
              "Quiet Neighborhood",
            ],
            priceRange: "Monthly Price Range: $10,000-$12,000",
            isSkiInSkiOut: true,
          },
          {
            id: "wedge-mountain-lodge-spa",
            name: "Wedge Mountain Lodge & Spa",
            images: [
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa - Exterior 1.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/Wedge Mountain Lodge & Spa _ Great Room 2.jpg",
              "/photos/properties/Wedge Mountain Lodge Spa/WML Great Room (Looking South).jpg",
            ],
            guests: 26,
            bedrooms: 10,
            bathrooms: 13,
            location: "Stonebridge, Whistler",
            description:
              "This spectacular mountain lodge in exclusive Stonebridge offers the ultimate in luxury and privacy. With 8,500 sq. ft. of living space, it features a private spa, home theater, and the option for private chef service.",
            features: [
              "Private Spa",
              "Heated Pool",
              "Home Theater",
              "Wine Cellar",
              "Private Chef Available",
              "Multiple Fireplaces",
              "Games Room",
              "Mountain Views",
            ],
            highlights: [
              "Private Spa Facilities",
              "Optional Private Chef",
              "Heated Outdoor Pool",
              "Ultimate Luxury Experience",
            ],
            priceRange: "$8,000-$11,500+ per night",
            winterPrice: "Request for Event & Wedding Venue Whistler Pricing",
            holidayPrice: "Request for Nightly rates",
          },
          {
            id: "luxe-cozy-3-bed-whistler-village",
            name: "Luxe Cozy 3-Bed Whistler Village",
            images: [
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/02-1 4668 Blackcomb Way 02-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
              "/photos/properties/Cozy Luxe 3-Bed in Whistler Village/01-1 4668 Blackcomb Way 01-Edit.jpg",
            ],
            guests: 8,
            bedrooms: 3,
            bathrooms: 3,
            location: "Whistler Village, Whistler",
            description:
              "This stylish and recently renovated 3-bedroom condo in Whistler Village combines convenient location with modern comfort. Tastefully decorated with a cozy mountain aesthetic and just minutes from the gondolas.",
            features: [
              "Recently Renovated",
              "Modern Design",
              "Village Location",
              "Walk to Lifts",
              "Gas Fireplace",
              "Designer Furnishings",
              "Open Concept Living",
              "Mountain Views",
            ],
            highlights: [
              "Stylish Modern Interior",
              "Steps to Village Restaurants",
              "5-Minute Walk to Gondolas",
              "Fully Equipped Kitchen",
            ],
            priceRange: "$750-$2,200+ per night",
          },
          {
            id: "dream-log-chalet-5-bedroom-4-bath-creekside",
            name: "Dream Log Chalet | 5-Bed | 4-Bath | Creekside",
            images: [
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00333.jpg",
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00635.jpg",
              "/photos/properties/Dream Log 5-bedroom Chalet/20240930 A7M3 01 A1_00620.jpg",
            ],
            guests: 11,
            bedrooms: 5,
            bathrooms: 4,
            location: "Creekside, Whistler",
            description:
              "Authentic log cabin charm meets modern luxury in this beautiful 5-bedroom chalet in Whistler's Creekside area. Features vaulted ceilings, a stone fireplace, and convenient access to Creekside Village and lifts.",
            features: [
              "Authentic Log Construction",
              "Stone Fireplace",
              "Hot Tub",
              "Chef's Kitchen",
              "Large Deck",
              "Close to Creekside Gondola",
              "Vaulted Ceilings",
              "Mountain Views",
            ],
            highlights: [
              "Authentic Log Cabin Design",
              "5 Minutes to Creekside Gondola",
              "Family-Friendly Layout",
              "Private Hot Tub",
            ],
            priceRange: "6-12 Month Minimum (booked 2025)",
            winterPrice: "90 Nights: $20,000 per month",
            holidayPrice: "6-months Winter: $17,000 monthly | 12+ months: $14,000 monthly",
          },
          {
            id: "whispering-pines",
            name: "The Aspens | 1 Bed | Ski-in/Ski-out",
            images: [
              "/photos/properties/The Aspens/4800-Spearhead-Drive-3.JPG",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Horstman Estates, Whistler",
            description:
              "Located in prestigious Horstman Estates on Blackcomb Mountain, this luxury ski-in/ski-out chalet offers direct access to the slopes and stunning views. Features include a private hot tub, vaulted ceilings, and elegant alpine design.",
            features: [
              "Ski-in/Ski-out Access",
              "Private Hot Tub",
              "Mountain Views",
              "Vaulted Ceilings",
              "Stone Fireplace",
              "Gourmet Kitchen",
              "Heated Floors",
              "Large Deck",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Prestigious Horstman Location",
              "Private Hot Tub",
              "Luxury Alpine Design",
            ],
            priceRange: "Nightly Price Range: $350-$1,300",
            isSkiInSkiOut: true,
          },
          {
            id: "marquise-2-bed",
            name: "Marquise 2-Bed-Ski in Ski out",
            images: [
              "/photos/properties/Marquise 2-bed/Marquise-15.jpg",
            ],
            guests: 4,
            bedrooms: 1,
            bathrooms: 1,
            location: "Blackcomb Base, Whistler",
            description:
              "Enjoy true ski-in/ski-out convenience at this welcoming 2-bedroom condo in the desirable Marquise complex at Blackcomb Base. Features a private balcony, gas fireplace, and access to shared pool and hot tub.",
            features: [
              "Ski-in/Ski-out Access",
              "Shared Pool & Hot Tub",
              "Private Balcony",
              "Gas Fireplace",
              "Fully Equipped Kitchen",
              "Mountain Views",
              "Secure Underground Parking",
              "Ideal Blackcomb Location",
            ],
            highlights: [
              "True Ski-in/Ski-out",
              "Pool & Hot Tub",
              "Easy Access to Blackcomb Base",
              "Cozy Mountain Retreat",
            ],
            priceRange: "Nightly Price Range: $160-450",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },
          {
            id: "the-nest",
            name: "The Nest | Ski in-Ski out",
            images: [
              "/photos/properties/Wolverine Crescent/06-2627 Wolverine-06.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 6,
            location: "Whistler, BC, Canada",
            description:
              "Perched like an eagle high upon the hillside of Whistler Benchlands with spectacular views, this exquisite contemporary chalet offers a luxury stay with a rare ski-in ski-out access to Whistler Resort, private hot tub, fire pit and games room.",
            features: [
              "Heated floors",
              "2 Living rooms",
              "Panoramic views",
              "Gourmet kitchen",
            ],
            highlights: [],
            priceRange: "Monthly Price Range: $18,000-$29,000",
            winterPrice: "90+ day minimum",
            holidayPrice: "$29,000 Monthly | Winter (Booked until June 15, 2025)",
            link: "/listings/the-nest-ski-in-ski-out",
            isPetFriendly: true,
            isSkiInSkiOut: true,
          },
          {
            id: "ski-in-ski-out-walk-to-lifts-2-bed",
            name: "Le Chamois | 2 Bed | Walk to Lifts",
            images: [
              "/photos/properties/ski-in-ski-out-walk-to-lifts-2-bed/Le chamois-4.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Whistler, BC, Canada",
            description:
              "Perfectly located apartment in the heart of Whistler's Blackcomb Upper Village, just steps from the lifts. This stylish 2-bedroom unit offers modern comforts with mountain convenience.",
            features: [
              "Walk to ski lifts",
              "Fully equipped kitchen",
              "Living area with fireplace",
              "Outdoor swimming pool",
            ],
            highlights: [],
            priceRange: "$350-$1,050 Nightly",
            link: "/listings/ski-in-ski-out-walk-to-lifts-2-bed",
            isSkiInSkiOut: true,
          },
          {
            id: "whistler-village-views-luxury-2-5-bedroom",
            name: "Whistler Village Views | Luxury 2.5 Bedroom",
            images: [
              "/photos/properties/whistler-village-views-luxury-2-5-bedroom/Tyndall Stone Lodge-14.jpg",
            ],
            guests: 6,
            bedrooms: 2.5,
            bathrooms: 2,
            location: "Village North, Whistler",
            description:
              "This property is conveniently located for skiing, just a short walk from your front door! Perfect for families visiting Whistler, with spacious layout and views of Olympic Plaza and Blackcomb Mountain. Recently renovated with all the comforts of home.",
            features: [
              "Village Central Location",
              "Mountain Views",
              "Walk to Lifts",
              "Fully Equipped Kitchen",
              "Washer/Dryer In-Unit",
              "Shared Pool & Hot Tub",
              "Reserved Parking",
              "Gas Fireplace"
            ],
            highlights: [
              "Heart of Whistler Village",
              "Walk to Lifts and Restaurants",
              "Mountain Views",
              "Recently Renovated"
            ],
            priceRange: "$400-$1,150+ Nightly",
          },
          {
            id: "scandinavian-mountainside-retreat-pemberton-meadows-50-acres",
            name: "Pemberton Escape | 50 Acres | Wellness & Heli Retreat",
            images: [
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_KJ14319-Edit-2.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0195-Edit.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/DJI_0096-Edit.jpg",
              "/photos/properties/scandinavian-mountainside-retreat-pemberton-meadows-50-acres/_R001526-Edit.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Pemberton Meadows, Pemberton",
            description:
              "This 5-bed, 5-bath award-winning property was designed with the eye of a leading Japanese architect. Set on 50 acres of private land with breathtaking panoramic views of the Pemberton Valley Mountain Range. Includes private chef and butler service.",
            features: [
              "50 Acres Private Estate",
              "Private Chef & Butler",
              "Mountain Views",
              "Hot Tub",
              "On-site Gym",
              "Log Fireplace",
              "Floor-to-Ceiling Windows",
              "Hiking Trails Access"
            ],
            highlights: [
              "Award-Winning Architecture",
              "Perfect for Wellness Retreats",
              "Heli-Skiing Access",
              "Private Chef Included"
            ],
            priceRange: "Pricing: $30,000-35,000 per event",
            winterPrice: "Availability for Heli & Wellness Retreats coming soon",
            holidayPrice: "Includes 2 Night Accommodation",
          },
        ],
      },
      {
        id: "worldwide",
        title: "Worldwide Properties",
        description:
          "Experience luxury living in our handpicked properties across the globe, from Vancouver's urban sophistication to exotic international destinations.",
        properties: [
          {
            id: "vancouver-house-corner",
            name: "Vancouver House Corner Unit | 30th Floor",
            images: [
              "/photos/properties/Vancouver House/Vancouver House-1.jpg",
              "/photos/properties/Vancouver House/Vancouver House-2.jpg",
              "/photos/properties/Vancouver House/Vancouver House-3.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Vancouver, BC",
            description:
              "Experience the epitome of luxury urban living in this stunning corner unit at Vancouver House. Located on the 30th floor, this property offers breathtaking views of False Creek, downtown Vancouver, and the North Shore mountains.",
            features: [
              "Corner Unit Views",
              "30th Floor",
              "Fully Equipped Kitchen",
              "High-End Appliances",
              "In-Building Gym",
              "Concierge Service",
              "Central Location",
              "Parking Available",
            ],
            highlights: [
              "Panoramic City Views",
              "Luxury Finishes",
              "Prime Location",
              "Building Amenities",
            ],
            priceRange: "$450-$750 per night",
          },
          {
            id: "mykonos-crystal-villa",
            name: "Mykonos Crystal Villa | Infinity Pool | Sea Views",
            images: [
              "/photos/properties/Villa Aegean Mykonos Greece/Header5-TRG_5803.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
              "/photos/properties/Villa Aegean Mykonos Greece/Header2-TRG_5590.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            bathrooms: 5,
            location: "Agios Lazaros, Mykonos, Greece",
            description:
              "Perched on a hillside in exclusive Agios Lazaros, Crystal Villa offers breathtaking views of the Aegean Sea and the famous Mykonos sunset. This architectural masterpiece combines traditional Cycladic design with modern luxury.",
            features: [
              "Infinity Pool",
              "Panoramic Sea Views",
              "Private Chef Available",
              "Daily Housekeeping",
              "Concierge Service",
              "Outdoor Dining Areas",
              "Alfresco Lounge",
              "Close to Psarou Beach",
            ],
            highlights: [
              "Stunning Aegean Views",
              "Infinity Pool",
              "Designer Interiors",
              "Close to Top Beaches",
            ],
            priceRange: "$2,500-$5,000 per night",
          },
          {
            id: "super-yacht-thailand",
            name: "Super Yacht Thailand | Luxury Charter | Full Crew",
            images: [
              "/photos/properties/Yacht Thailand Sea D/Sun Deck WEB-12.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
              "/photos/properties/Yacht Thailand Sea D/Bow WEB-1.jpg",
            ],
            guests: 10,
            bedrooms: 5,
            beds: 8,
            bathrooms: 4,
            location: "Phuket, Thailand",
            description:
              "Experience the height of luxury aboard our 100-foot super yacht in the stunning waters of Thailand. With a full crew including captain, chef, and stewards, explore the breathtaking islands and beaches of the Andaman Sea in complete comfort.",
            features: [
              "Full Professional Crew",
              "Private Chef",
              "Master Suite",
              "Water Sports Equipment",
              "Alfresco Dining",
              "Jacuzzi",
              "Stabilizers",
              "Air Conditioning Throughout",
            ],
            highlights: [
              "Explore Thailand by Sea",
              "Full Professional Crew",
              "All-Inclusive Experience",
              "Ultimate Luxury Adventure",
            ],
            priceRange: "Weekly Rate | 170,000 - 210,000 USD",
          },
          {
            id: "punta-mita---casa-juntos",
            name: "Punta Mita - Casa Juntos | Beachfront | Full Staff",
            images: [
              "/photos/properties/Punta Mita/242608_2093 copy 2.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
              "/photos/properties/Punta Mita/242608_2031 copy.jpg",
            ],
            guests: 12,
            bedrooms: 6,
            bathrooms: 6.5,
            location: "Punta Mita, Mexico",
            description:
              "Located within the exclusive Punta Mita resort community, Casa Juntos is a stunning beachfront villa offering panoramic Pacific Ocean views and direct beach access. With full staff including private chef, this luxury retreat provides the ultimate Mexican Riviera experience.",
            features: [
              "Direct Beach Access",
              "Infinity Pool",
              "Full Staff Including Chef",
              "Golf Club Access",
              "Indoor/Outdoor Living",
              "Home Theater",
              "Fully Equipped Gym",
              "Ocean-View Master Suite",
            ],
            highlights: [
              "Private Beachfront",
              "Full Staff with Chef",
              "Exclusive Resort Access",
              "Spectacular Ocean Views",
            ],
            priceRange: "$3,000-$7,000 per night",
          },
          {
            id: "hood-river-luxury-home",
            name: "Hood River Luxury Home",
            images: [
              "/photos/properties/hood-river-luxury-home/Interior 3.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
              "/photos/properties/hood-river-luxury-home/Exterior 1.jpg",
            ],
            guests: 4,
            bedrooms: 2,
            bathrooms: 2,
            location: "Hood River, Oregon",
            description:
              "This luxury home in Hood River, Oregon, offers breathtaking views of the Columbia River Gorge. Features include a private hot tub, sauna, and modern amenities.",
            features: [
              "Private Hot Tub",
              "Sauna",
              "Mountain Views",
              "Modern Amenities",
            ],
            highlights: [
              "Exclusive Location",
              "Luxury Design",
              "Private Hot Tub",
              "Sauna",
            ],
            priceRange: "$1,500-$3,000/night",
          },
        ],
      },
    ],
    []
  );

  // Update active category based on URL query parameter
  useEffect(() => {
    // Set category from query parameter if available, otherwise default to "whistler"
    if (queryCategoryId && typeof queryCategoryId === "string") {
      setActiveCategory(queryCategoryId);
    } else {
      setActiveCategory("whistler");
    }
  }, [queryCategoryId]);

  // Filter the properties for display
  const displayProperties = useMemo(() => {
    return propertyCategories
      .filter(category => activeCategory === "all" || category.id === activeCategory)
      .map(category => {
    const filteredProperties = category.properties.filter((property) => {
          // Apply all filters
          const bedroomsMatch = property.bedrooms >= filters.minBedrooms && property.bedrooms <= filters.maxBedrooms;
          const guestsMatch = property.guests >= filters.minGuests && property.guests <= filters.maxGuests;
          const petFriendlyMatch = !filters.petFriendly || property.isPetFriendly;
          const skiInSkiOutMatch = !filters.skiInSkiOut || property.isSkiInSkiOut;
      const amenitiesMatch =
        filters.amenities.length === 0 ||
            filters.amenities.every(amenity => 
              property.features.some(feature => 
            feature.toLowerCase().includes(amenity.toLowerCase())
          )
        );

          return bedroomsMatch && guestsMatch && petFriendlyMatch && skiInSkiOutMatch && amenitiesMatch;
    });

    return { ...category, properties: filteredProperties };
  });
  }, [propertyCategories, activeCategory, filters]);

  // Populate structured data with filtered properties for SEO
  useEffect(() => {
    const allProperties = displayProperties.flatMap(
      (category) => category.properties
    );

    structuredData.numberOfItems = allProperties.length;
    structuredData.itemListElement = allProperties.map((property, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Accommodation",
        name: property.name,
        image: property.images[0],
        description: property.description,
        accommodationCategory: "Vacation Rental",
        numberOfRooms: property.bedrooms,
        amenityFeature: property.features.map((feature) => ({
          "@type": "LocationFeatureSpecification",
          name: feature,
        })),
        address: {
          "@type": "PostalAddress",
          addressLocality: property.location,
        },
        // Add offers for each property
        offers: {
          "@type": "Offer",
          priceCurrency: "CAD",
          priceValidUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
          url: `/listings/${property.id}`,
          availability: "https://schema.org/InStock"
        },
        // Add aggregate rating (generic positive rating)
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: 4.8,
          reviewCount: 15
        }
      },
    }));
  }, [displayProperties, structuredData, propertyCategories]);

  // Add/remove amenity filter
  const toggleAmenityFilter = (amenity: string) => {
    setFilters((prev) => {
      if (prev.amenities.includes(amenity)) {
        return {
          ...prev,
          amenities: prev.amenities.filter((a) => a !== amenity),
        };
      } else {
        return { ...prev, amenities: [...prev.amenities, amenity] };
      }
    });
  };

  // Reset all filters
  const resetFilters = () => {
    setFilters({
      minBedrooms: 0,
      maxBedrooms: 20,
      minGuests: 0,
      maxGuests: 50,
      amenities: [],
      petFriendly: false,
      skiInSkiOut: false
    });
  };

  // Common amenities for filter options
  const commonAmenities = [
    "Hot Tub",
    "Pool",
    "Sauna",
    "Ski-In/Ski-Out",
    "Mountain Views",
    "Private Butler",
    "Pet Friendly",
  ];

  // Hero section update
  const Hero = () => {
    return (
      <div className="relative h-80 lg:h-96 w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: "url(/photos/homepage/mountainview.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-2xl mb-4">
            Luxury Vacation Rental Properties in Whistler, Canada
          </h1>
          <p className="text-white/90 max-w-xl text-lg md:text-xl">
            Ski-in/Ski-out Chalets, 7+ Bedroom Villas, and Exclusive <Link href="/concierge-service" className="text-white underline">Concierge Services</Link>
          </p>
        </div>
      </div>
    );
  };

  // PropertyCard with regular img tag - updated to match home page style
  const PropertyCard = ({ property }: { property: PropertyFeature }) => {
    const getPropertyUrl = (property: PropertyFeature): string => {
      return property.link
        ? property.link
        : property.id === "altitude-retreat"
        ? "/listings/altitude-retreat-kadenwood"
        : property.id === "two-cedars"
        ? "/listings/two-cedars-kadenwood"
        : property.id === "chalet-la-forja"
        ? "/listings/chalet-la-forja-kadenwood"
        : property.id === "slopeside-villa"
        ? "/listings/slopeside-villa-kadenwood"
        : property.id === "panoramic-estate"
        ? "/listings/panoramic-estate-kadenwood"
        : property.id === "heron-views-whistler"
        ? "/listings/heron-views-whistler-village"
        : property.id === "ravens-nest"
        ? "/listings/ravens-nest-ski-in-ski-out-views"
        : property.id === "falcon-blueberry-drive"
        ? "/listings/falcon-blueberry-drive"
        : property.id === "snow-pine"
        ? "/listings/snow-pine"
        : property.id === "wedge-mountain-lodge-spa"
        ? "/listings/wedge-mountain-lodge-spa"
        : property.id === "luxe-cozy-3-bed-whistler-village"
        ? "/listings/luxe-cozy-3-bed-whistler-village"
        : property.id === "dream-log-chalet-5-bedroom-4-bath-creekside"
        ? "/listings/dream-log-chalet-5-bedroom-4-bath-creekside"
        : property.id === "the-nest"
        ? "/listings/the-nest-ski-in-ski-out"
        : property.id === "whispering-pines"
        ? "/listings/whispering-pines-ski-in-ski-out"
        : property.id === "marquise-2-bed"
        ? "/listings/marquise-2-bed-ski-in-ski-out"
        : property.id === "ski-in-ski-out-walk-to-lifts-2-bed"
        ? "/listings/ski-in-ski-out-walk-to-lifts-2-bed"
        : property.id === "whistler-village-views-luxury-2-5-bedroom"
        ? "/listings/whistler-village-views-luxury-2-5-bedroom"
        : property.id === "scandinavian-mountainside-retreat-pemberton-meadows-50-acres"
        ? "/listings/scandinavian-mountainside-retreat-pemberton-meadows-50-acres"
        : property.id === "vancouver-house-corner"
        ? "/worldwide-listings/vancouver-house-corner"
        : property.id === "yacht-thailand" 
        ? "/worldwide-listings/super-yacht-thailand"
        : property.id === "villa-aegean-greece" 
        ? "/worldwide-listings/mykonos-crystal-villa"
        : property.id === "punta-mita"
        ? "/worldwide-listings/punta-mita---casa-juntos"
        : property.id === "hood-river-luxury-home"
        ? "/worldwide-listings/hood-river-luxury-home"
        : `/listings/${property.id}`;
    };

    const propertyUrl = getPropertyUrl(property);

    // Mapping property IDs to Airbnb links
    const airbnbLinks: Record<string, string> = {
      "altitude-retreat":
        "https://www.airbnb.ca/rooms/771060491470943213?guests=1&adults=1&s=67&unique_share_id=a8ff5a7a-4bda-4cc7-aaad-e99b178f3a5d",
      "chalet-la-forja":
        "https://www.airbnb.ca/rooms/52655503?guests=1&adults=1&s=67&unique_share_id=f1bb5c2c-51f9-4a82-9aa4-670fb8caa71d",
      "two-cedars":
        "https://www.airbnb.ca/rooms/666613336620375768?guests=1&adults=1&s=67&unique_share_id=7e52bdf8-80c0-4a37-9f8b-b411e6e9ad3e",
      "slopeside-villa":
        "https://www.airbnb.ca/rooms/826226399590812184?guests=1&adults=1&s=67&unique_share_id=aab7fbd3-669a-461d-b913-c15cf257b4c0",
      "panoramic-estate":
        "https://www.airbnb.ca/rooms/1104637821836596397?guests=1&adults=1&s=67&unique_share_id=67164555-993c-40dc-b188-23ffe0755654",
      "heron-views-whistler":
        "https://www.airbnb.ca/rooms/1168163637007998550?guests=1&adults=1&s=67&unique_share_id=8227e964-920d-4bc0-8073-13043963151f",
      "ravens-nest":
        "https://www.airbnb.ca/rooms/1300258964918876012?guests=1&adults=1&s=67&unique_share_id=41b635e9-00a9-441c-a134-056b2b3814ac",
      "falcon-blueberry-drive":
        "https://www.airbnb.ca/rooms/18060329?guests=1&adults=1&s=67&unique_share_id=0759b67e-0517-4127-9de1-842265c53ff7",
      "the-nest":
        "https://www.airbnb.ca/rooms/763259660349118016?guests=1&adults=1&s=67&unique_share_id=d18218f6-da74-4763-a199-d5a1dc8c85ff&source_impression_id=p3_1744822209_P3U3_5CgXenHmYC6",
      "snow-pine":
        "https://www.airbnb.ca/rooms/744832560480313027?guests=1&adults=1&s=67&unique_share_id=50412c76-d839-4753-bf56-19310f38a4ef",
      "whispering-pines":
        "https://www.airbnb.com/rooms/1072474554447345991?guests=1&adults=1&s=67&unique_share_id=e556b35c-05b5-40b6-91e1-5304ffafc23b",
      "whistler-village-views":
        "https://www.airbnb.ca/rooms/50025973?guests=1&adults=1&s=67&unique_share_id=04ceb090-1b8e-4e32-972f-d616b380a0a8",
      "whistler-village-views-luxury-2-5-bedroom":
        "https://www.airbnb.ca/rooms/50025973?preview_for_ml=true&source_impression_id=p3_1699290307_SHcNx7EoXySmn6j5",
      "marquise-2-bed":
        "https://www.airbnb.ca/rooms/1370367404602078616?guests=1&adults=1&s=67&unique_share_id=eb381b39-e67d-44ea-9d7c-2de2e1b5fa20",
      "ski-in-ski-out-walk-to-lifts-2-bed":
        "https://www.airbnb.ca/rooms/1015303987589924725?guests=1&adults=1&s=67&unique_share_id=5e912eb5-5445-4797-81ec-df21817dd143",
    };

    const airbnbLink = airbnbLinks[property.id];

    // Special handling for properties that should link to contact page
    const shouldLinkToContact = property.id === "scandinavian-mountainside-retreat-pemberton-meadows-50-acres";

    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow h-full">
        <div className="relative h-64 sm:h-72 overflow-hidden">
          {/* Pet Friendly Badge */}
          {property.isPetFriendly && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-xs font-medium rounded-md z-10">
              Pet Friendly
            </div>
          )}
          
          <Link href={propertyUrl}>
            <div className="relative w-full h-full">
              <Image
              src={property.images[0]}
                alt={`${property.name} - Luxury ${property.location === 'whistler' ? 'Whistler' : property.location === 'vancouver' ? 'Vancouver' : 'Worldwide'} vacation rental with ${property.bedrooms} bedrooms, accommodating up to ${property.guests} guests`}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={80}
                loading="lazy"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
              onError={(e) => {
                // Get property folder name from the ID
                const propertyId = property.id;

                  // Try folder variants with typical locations
                  const fallbackSrc = '/photos/homepage/WhistlerVacationRental.jpg';
                  
                  // Set to fallback image on error
                  // @ts-ignore - Next Image doesn't officially support onError but it works
                  e.currentTarget.src = fallbackSrc;
              }}
            />
            </div>
          </Link>

          {/* Book Now Button in bottom-right corner */}
          <div className="absolute bottom-4 right-4 z-10">
            {airbnbLink && !shouldLinkToContact ? (
              <a
                href={airbnbLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
              >
                Book Now
              </a>
            ) : shouldLinkToContact ? (
              <Link
                href="/contact"
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Contact Us
              </Link>
            ) : (
              <Link
                href={propertyUrl}
                className="bg-black text-white px-5 py-2.5 rounded-md text-[1.03rem] font-medium hover:bg-gray-800 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Book Now
              </Link>
            )}
          </div>
        </div>

        <div className="p-6">
          {/* Property details */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="flex items-center text-xs bg-gray-900 text-white px-3 py-1 rounded-md">
              <Users className="w-3 h-3 mr-1" /> {property.guests} {property.guests === 1 ? "Guest" : "Guests"}
            </div>
            <div className="flex items-center text-xs bg-gray-200 text-gray-900 px-3 py-1 rounded-md">
              <Bed className="w-3 h-3 mr-1" /> {property.bedrooms} {property.bedrooms === 1 ? "Bedroom" : "Bedrooms"}
            </div>
            <div className="flex items-center text-xs bg-gray-200 text-gray-900 px-3 py-1 rounded-md">
              <Bath className="w-3 h-3 mr-1" /> {property.bathrooms} {property.bathrooms === 1 ? "Bathroom" : "Bathrooms"}
            </div>
          </div>

          {/* Property name */}
          <h3 className="text-xl font-medium mb-2 text-gray-900 line-clamp-2">
            {property.name}
          </h3>

          {/* Location */}
          <p className="flex items-center text-sm text-gray-600 mb-4">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="line-clamp-1">{property.location}</span>
          </p>

          {/* Price range */}
          {property.priceRange && (
            <p className="text-gray-900 font-medium mb-4">{property.priceRange}</p>
          )}

          {/* View property link */}
          <Link
            href={propertyUrl}
            className="inline-flex items-center text-gray-900 font-medium hover:text-gray-600 transition-colors"
          >
            <span>View Property</span>
            <ArrowRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    );
  };

  // Update the category tabs section
  const CategoryTabs = () => (
    <div className="mb-8">
      <div className="flex flex-wrap gap-4 justify-center text-lg">
        <button
          onClick={() => setActiveCategory("whistler")}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === "whistler"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Whistler Properties
        </button>
        <button
          onClick={() => setActiveCategory("worldwide")}
          className={`px-6 py-2 rounded-full transition-colors ${
            activeCategory === "worldwide"
              ? "bg-black text-white"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          Worldwide
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>Luxury Vacation Rentals in Whistler | ACE HOST</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Browse our exclusive collection of luxury vacation rentals in Whistler, BC. Ski-in/ski-out chalets, premium condos, and spectacular mountain homes available."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://acehost.ca/properties" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>

      <div className="min-h-screen">
        <Navigation transparent={false} />

        {/* Hero Section */}
        <section className="bg-[#f5f5f7] overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
              {/* Text Content Section - Refined layout with better spacing */}
              <div className="md:col-span-5 p-6 md:p-10 lg:p-16 xl:p-16 flex items-center">
                <div className="w-full">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 tracking-tight leading-[1.1]">
                    Luxury Vacation Rental Properties in Whistler, Canada
              </h1>
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-8 text-gray-700 tracking-tight">
                    Ski-in/Ski-out Chalets, 7+ Bedroom Villas, and Exclusive Concierge Services
                  </h2>
                  <div className="text-base text-gray-600 space-y-6 mb-10">
                    <p className="leading-relaxed">
                      AceHost Whistler invites you to experience our curated collection of luxury vacation rentals including everything from ski-in/ski-out chalets to large 7- and 8-bedroom homes, ideal for group getaways, family holidays, or unforgettable corporate retreats. Whether you're visiting during Christmas, New Year's, peak winter ski season, or summer, we have stunning homes suited for you.
                    </p>
                    <p className="leading-relaxed">
                      All bookings at our top villas include our VIP <Link href="/concierge-service" className="text-blue-600 hover:text-blue-800 transition-colors">Concierge Services</Link>, where you can expect a fully personalized trip—think private chefs, heli-skiing, snowmobile fondue tours, airport transfers, and hard-to-get restaurant reservations, local contacts and expertise, all arranged seamlessly by our local experts.
                    </p>
                    <p className="leading-relaxed">
                      Travellers can book directly on Airbnb links below, or speak with us directly to find exact pricing, more information, & more chalet options.
                    </p>
                    <p className="text-sm text-gray-500 pt-2">
                      All prices are in Canadian Dollars (CAD) & not in (USD).
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Image Section with specified photo */}
              <div className="md:col-span-7 p-6 md:p-10 lg:p-16 xl:p-16 flex items-center justify-center">
                <div className="w-full h-[500px] md:h-[600px] lg:h-[700px] rounded-3xl overflow-hidden shadow-2xl relative">
                  <Image 
                    src="/photos/properties/Panoramic Estate/20241127 MM4P 01 0225-Edit.jpg" 
                    alt="Luxury Whistler Chalet" 
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+P+/HgAEhAI/w5RW4AAAAABJRU5ErkJggg=="
                    onError={(e) => {
                      // @ts-ignore - Next Image doesn't officially support onError but it works
                      e.currentTarget.src = "/photos/properties/Altitude New Photos Best/altitude retreat-12.jpg";
                    }}
                  />
                </div>
              </div>
            </div>
            
            {/* Filter Buttons in a separate row with subtle gradient bg */}
            <div className="bg-gradient-to-b from-[#f5f5f7] to-[#eaeaec] py-10 px-8 lg:px-16">
              <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
                <button
                  onClick={() => setActiveCategory("all")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "all"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  All Properties
                </button>
                <button
                  onClick={() => setActiveCategory("whistler")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "whistler"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Whistler
                </button>
                <button
                  onClick={() => setActiveCategory("worldwide")}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === "worldwide"
                      ? "bg-black text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  Worldwide
                </button>
                <button
                  onClick={() => {
                    // Toggle pet-friendly filter
                    setFilters(prev => ({
                      ...prev,
                      petFriendly: !prev.petFriendly
                    }));
                  }}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.petFriendly
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  {filters.petFriendly && <CheckCircle className="w-4 h-4 mr-1.5 inline" />}
                  Pet Friendly
                </button>
                <button
                  onClick={() => {
                    // Toggle ski-in/ski-out filter
                    setFilters(prev => ({
                      ...prev,
                      skiInSkiOut: !prev.skiInSkiOut
                    }));
                  }}
                  className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                    filters.skiInSkiOut
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-white text-gray-800 hover:bg-gray-100 hover:shadow-md shadow-sm"
                  }`}
                >
                  {filters.skiInSkiOut && <CheckCircle className="w-4 h-4 mr-1.5 inline" />}
                  Ski in Ski out
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Properties Grid */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Property Listings */}
            <div className="w-full">
              {displayProperties.map((category) => (
                <div key={category.id} className="mb-16 sm:mb-20">
                  <div className="mb-8 sm:mb-10">
                    <h2 className="text-2xl sm:text-3xl font-light mb-3 sm:mb-4 text-gray-900">
                      {category.title}
                    </h2>
                    {category.description && (
                      <p className="text-base sm:text-lg text-gray-600 max-w-4xl">
                        {category.description}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {category.properties.map((property) => (
                      <PropertyCard key={property.id} property={property} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Pricing Information */}
            <div className="max-w-4xl mx-auto mt-16 mb-12 px-4 py-8 bg-gray-50 rounded-xl">
              <div className="text-lg space-y-6">
                <p className="font-semibold text-xl">Pricing: When booking through AceHost, we guarantee the lowest or equal pricing you can find for all properties listed above.</p>
                <p>All prices are listed in Canadian Dollar (CAD). 6 or 7 Night Minimum stay required for all Christmas & New Years bookings. Pricing above is an accurate estimate, but please contact us for exact quotes.</p>
                <p className="italic">We warmly invite travel agents to join us in offering their valued clients an unparalleled chalet villa rental experience in the breathtaking locale of Whistler. Please do not hesitate to <Link href="/contact" className="text-blue-600 hover:underline">contact us</Link> to discuss this opportunity further.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">
                  Looking for Something Special?
                </h2>
                <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6 max-w-3xl mx-auto">
                  Not sure which property is right for you? Let us help find the perfect
                  property for your needs. Let us know what you're looking
                  for, and we'll create a personalized recommendation.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-white text-gray-900 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors font-medium"
                >
                  Contact Our Team
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-6">
                  <Coffee className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">
                    <Link href="/concierge-service" className="hover:underline">Concierge Services</Link>
                  </h3>
                  <p className="text-gray-300">
                    Private chefs, butler services, and personalized
                    experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Wifi className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Smart Homes</h3>
                  <p className="text-gray-300">
                    Modern amenities and tech-enabled luxury experiences.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <Car className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Transportation</h3>
                  <p className="text-gray-300">
                    Airport transfers and luxury vehicle rentals.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-6">
                  <MapPin className="h-8 w-8 text-white mb-4" />
                  <h3 className="text-xl font-medium mb-2">Local Expertise</h3>
                  <p className="text-gray-300">
                    Insider knowledge of the best experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
    // Revalidate the page every 1 hour
    revalidate: 3600,
  };
};
