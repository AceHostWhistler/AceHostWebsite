import React, { useCallback, useState, useEffect } from "react";
import { blockGalleryTouchPropagation, usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import PropertyHeaderEditorial from "@/components/PropertyHeaderEditorial";
import {
  editorialGalleryGridClass,
  editorialGalleryImageSizes,
  editorialGalleryModalTileClass,
  editorialGalleryModalWrapperClass,
  editorialGalleryWrapperClass,
  editorialGalleryTileClass,
  editorialMainClass,
} from "@/lib/editorialPropertyLayout";
import { getWorldwideAmenities } from "@/data/worldwideAmenities";
import { airbnbButtonLg } from "@/lib/airbnbButtonStyles";
import { GALLERY_PREVIEW_LIMIT } from "@/lib/galleryPhotoOrder";
import {
  COTSWOLDS_COVER,
  COTSWOLDS_COVER_GALLERY,
  COTSWOLDS_FULL_PHOTOS,
  COTSWOLDS_GALLERY_PHOTOS,
  COTSWOLDS_PHOTOS,
  getCotswoldsGallerySrc,
} from "@/data/cotswoldsPhotos";

const PHOTO_DIR = "/photos/properties/Cotswolds UK - Soho Farm House";
const COVER = COTSWOLDS_COVER_GALLERY;
const BLUR_PLACEHOLDER =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxsaW5lYXJHcmFkaWVudCBpZD0iZ3JhZCIgeDI9IjAlIiB5Mj0iMTAwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2U1ZTdlYiIgLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmM2Y0ZjYiIC8+PC9saW5lYXJHcmFkaWVudD48L2RlZnM+PHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmFkKSIgLz48L3N2Zz4=";
const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51";

interface CotswoldsPageProps {
  photos: string[];
  galleryPhotos: string[];
  fullPhotos: string[];
}

const CotswoldsUKSohoFarmHouse = ({
  photos = COTSWOLDS_PHOTOS,
  galleryPhotos = COTSWOLDS_GALLERY_PHOTOS,
  fullPhotos = COTSWOLDS_FULL_PHOTOS,
}: CotswoldsPageProps) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const handlePhotoClick = (index: number) => {
    setIsImageLoading(true);
    setSelectedPhotoIndex(index);
  };

  const closeFullScreenPhoto = () => {
    setSelectedPhotoIndex(null);
  };

  const handleImageLoad = () => {
    setIsImageLoading(false);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;

    setIsImageLoading(true);
    
    let newIndex;
    if (direction === "prev") {
      newIndex = selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1;
    } else {
      newIndex = selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1;
    }
    
    setSelectedPhotoIndex(newIndex);
  };

  const goToNextPhoto = useCallback(() => {
    setIsImageLoading(true);
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === photos.length - 1 ? 0 : current + 1;
    });
  }, [photos.length]);

  const goToPrevPhoto = useCallback(() => {
    setIsImageLoading(true);
    setSelectedPhotoIndex((current) => {
      if (current === null) return null;
      return current === 0 ? photos.length - 1 : current - 1;
    });
  }, [photos.length]);
  const { handleTouchStart, handleTouchMove, handleTouchEnd, handleTouchCancel } =
    usePhotoSwipeNavigation(goToNextPhoto, goToPrevPhoto);

  // Close full screen view when all photos modal is closed
  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const openGallery = () => {
    setShowAllPhotos(true);
    setSelectedPhotoIndex(null);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!showAllPhotos && selectedPhotoIndex === null) return;
    
    if (e.key === "ArrowRight") {
      navigatePhoto("next");
    } else if (e.key === "ArrowLeft") {
      navigatePhoto("prev");
    } else if (e.key === "Escape") {
      if (selectedPhotoIndex !== null) {
        closeFullScreenPhoto();
      } else if (showAllPhotos) {
        closeAllPhotos();
      }
    }
  };

  // Event listeners for keyboard navigation
  React.useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [showAllPhotos, selectedPhotoIndex]);

  return (
    <>
      <Head>
        <title>Luxury Retreat Near Soho Farmhouse | Pool &amp; Tennis · Brandy&apos;s Farmhouse</title>
        <meta
          name="description"
          content="Brandy's Farmhouse sits among grand country estates in the most desirable corner of the Cotswolds, just 4 minutes by car from Soho Farmhouse. Heated pool, tennis court, outdoor spa, and a step-free annex. Sleeps 15 across 8 bedrooms."
        />
        {/* Preload hero gallery image for faster first paint */}
        <link rel="preload" href={COVER} as="image" type="image/webp" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          {/* Header with Property Info */}
          <PropertyHeaderEditorial
            title="Brandy's Farmhouse | Luxury Retreat Near Soho Farmhouse | Pool & Tennis"
            guests={15}
            bedrooms={8}
            beds={8}
            bathrooms={5}
            priceRange="2-3 night minimum. £1,200-£3,100 per night | Dependent on season, day of week, holidays, etc."
            contactLink="/contact"
            airbnbLink={AIRBNB_LINK}
            amenities={getWorldwideAmenities("cotswolds-uk-soho-farm-house")}
            schemaImages={[COTSWOLDS_COVER]}
            onMorePhotosClick={openGallery}
          />

          {/* Photo Grid */}
          <div className={editorialGalleryWrapperClass} id="photos">
            <div className={editorialGalleryGridClass}>
              {galleryPhotos.slice(0, GALLERY_PREVIEW_LIMIT).map((photo, index) => (
                <div
                  key={photo}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <Image
                    src={photo}
                    alt={`Cotswolds UK - Soho Farm House ${index + 1}`}
                    fill
                    sizes={editorialGalleryImageSizes}
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 4}
                    quality={index < 6 ? 85 : 75}
                    placeholder="blur"
                    blurDataURL={BLUR_PLACEHOLDER}
                  />
                </div>
              ))}
            </div>
            {photos.length > GALLERY_PREVIEW_LIMIT && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllPhotos(true)}
                  className="inline-flex items-center px-6 py-2 bg-black hover:bg-gray-900 text-white rounded-full text-sm font-medium"
                >
                  View all {photos.length} photos
                </button>
              </div>
            )}
          </div>

          {/* Property Description */}
          <div className="max-w-5xl mx-auto px-6 md:px-10 lg:px-8" id="details">
            <div className="text-gray-800 space-y-6 leading-relaxed text-base md:text-lg">
              <p>
                Brandy&apos;s Farmhouse sits among grand country estates in the most desirable corner of the Cotswolds, just 4 minutes by car from Soho Farmhouse. Start the day with a swim in your private heated pool, play a few sets on your own tennis court, then head to the outdoor spa for a sauna, cold plunge or soak in the hot tub. Gather around the AGA in the deVOL kitchen before an evening by the fire. The stone farmhouse and step-free annex sleep up to 15 across 8 bedrooms, with 5 bathrooms.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">The space</h3>
              <p>
                <strong>Bedroom layout</strong>
              </p>
              <p>
                <strong>Main House | 6 Bedrooms</strong>
              </p>
              <p>
                Step inside the heart of the estate, featuring 6 beautifully appointed bedrooms designed for comfort and relaxation.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>King Bedroom 1:</strong> A luxurious retreat with a spacious Emperor-size bed. Private full bathroom ensuite attached.</li>
                <li><strong>King Bedroom 2:</strong> Offers a supremely comfortable Super King-size bed. Private full bathroom ensuite attached.</li>
                <li><strong>King Bedroom 3:</strong> Another haven with a Super King-size bed.</li>
                <li><strong>Double Bedroom 4:</strong> Features a cosy double bed.</li>
                <li><strong>California King Bedroom 5:</strong> Another inviting room with a Super King bed.</li>
                <li><strong>Queen Bedroom 6:</strong> A comfortable Queen bed on the main floor. There is only 1 step to access the main floor, with a bathroom right next to the room.</li>
              </ul>

              <p>
                Two bedrooms boast spa-like ensuite bathrooms, while the remaining bedrooms share a large bathroom with a separate tub and a walk-in shower. A charming powder room is also conveniently located on the main floor.
              </p>

              <p>
                <strong>Annex House | 2 Bedrooms</strong>
              </p>
              <p>
                Discover a private sanctuary in the annex, nestled behind the tennis court. It&apos;s perfect for a family or anyone looking for their own space and privacy. It&apos;s also a great option for guests looking for step-free access to 2 bedrooms and a bathroom.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Super King Bedroom 7:</strong> A comfortable room with a King-size bed.</li>
                <li><strong>Flexible Bedroom:</strong> Can be configured with either two single beds or a King-size bed.</li>
                <li><strong>Single Bed Bedroom 8:</strong> A comfortable room with a single bed.</li>
              </ul>
              <p>
                The annex also features a full bathroom with a shower and a compact kitchenette, ideal for preparing light meals and snacks.
              </p>

              <p>
                <strong>Kitchen, dining &amp; living areas</strong>
              </p>
              <p>
                The gorgeous deVOL designer kitchen is a chef&apos;s dream, equipped with an iconic AGA oven, a Bosch electric oven and stove, and two refrigerators. The extendable indoor dining table seats 12 to 14 comfortably, with 2 additional bar seats in the dining room for a total of 14 to 16.
              </p>
              <p>
                Enjoy two inviting living rooms, perfect for unwinding or enjoying movie nights. There are also 2 indoor fireplaces, one gas and one wood-burning, and two dedicated office spaces for remote work.
              </p>

              <p>
                <strong>Wellness &amp; outdoor living</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Heated outdoor pool:</strong> Enjoy a swim just outside the main house, with 4 lounge chairs by the pool. It&apos;s a beautiful spot for photos, too. The pool is available year-round, and heating is included at no extra charge.</li>
                <li><strong>Hot tub:</strong> Unwind in the hot tub under the open sky.</li>
                <li><strong>Sauna:</strong> Enjoy a traditional sauna in the outdoor spa area.</li>
                <li><strong>Cold plunge pool:</strong> Refresh yourself with a cold plunge after the sauna.</li>
                <li><strong>Tennis court &amp; lawn games:</strong> Enjoy the private tennis court, or spend the afternoon playing bocce ball or horseshoes.</li>
                <li><strong>Outdoor dining &amp; BBQ:</strong> Available from April 1 to October 30.</li>
                <li><strong>Fire pit:</strong> Gather around the outdoor fire pit under the stars.</li>
              </ul>

              <p>
                <strong>Air conditioning &amp; cooling</strong>
              </p>
              <p>
                The home is equipped with powerful split A/C units in the main living room, Bedroom 1 and the annex. These units help cool the main house and annex during the summer, and fans are provided in every bedroom and throughout the main living spaces for added comfort.
              </p>
              <p>
                The home&apos;s thick, castle-like stone walls help keep the interior naturally cool, and the Cotswolds cool down considerably in the evenings, especially compared to London. The annex is tucked away in the trees and shade, which helps keep it comfortable even on hot summer days.
              </p>

              <p>
                <strong>Additional amenities</strong>
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Aesop toiletries</strong> are thoughtfully placed in every bedroom, adding a touch of luxury to your stay.</li>
                <li><strong>High-speed Wi-Fi</strong> is available throughout the 6-bedroom main house and the 2-bedroom annex.</li>
                <li><strong>Laundry:</strong> A brand-new washer and separate dryer.</li>
                <li><strong>Parking:</strong> Space for up to 6 vehicles, with an electric car charger included.</li>
              </ul>

              <p>
                <strong>Pets</strong>
              </p>
              <p>
                We welcome a maximum of 2 dogs for a small fee. Please include them in your guest count.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Guest access</h3>
              <p>
                The entire estate is yours for your stay, including the 6-bedroom stone farmhouse, the separate 2-bedroom annex and the gardens. Start the morning with breakfast around the AGA in the deVOL kitchen, head outside for a game on your private tennis court, or spend the afternoon by the heated outdoor pool. The hot tub, sauna and cold plunge are all yours to enjoy, and the fire pit is a lovely place to gather in the evening.
              </p>
              <p>
                The layout works especially well for families travelling with grandparents or anyone who prefers step-free accommodation. The annex sits just behind the tennis court and has its own entrance, with step-free access to both bedrooms, a bathroom with a shower and a kitchenette. It gives part of your group the freedom to make an early coffee or turn in for the night while everyone else carries on in the main house.
              </p>
              <p>
                For guests who prefer to stay in the main farmhouse, one step leads up to the main living level, where you&apos;ll find a queen bedroom with a bathroom right beside it. With everyone gathered in the same house for meals, two separate sitting rooms for quieter moments and the annex close by, there&apos;s plenty of space to spend the holiday together at your own pace.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Other things to note</h3>
              <p>
                Brandy&apos;s Farmhouse is especially lovely for a multigenerational stay. The deVOL kitchen and its AGA are at the heart of the main house, with room to gather over breakfast and two sitting rooms for anyone who wants a quieter corner afterwards. The estate works beautifully for 6 to 12 guests and sleeps up to 15 across 8 bedrooms. Six are in the main house, including a ground-floor queen bedroom with one step to reach it. The other 2 are in the step-free annex beside the tennis court, where guests have their own shower room and kitchenette.
              </p>
              <p>
                The outdoor pool is heated year-round, with heating included in your stay. In summer, take dinner outside to the barbecue after a game of tennis. In the colder months, follow a swim with a soak in the hot tub and an evening by the fire. The barbecue and outdoor dining area are available from 1 April to 30 October. Quiet hours are 10 pm to 8 am, and the outdoor spa and tennis court are yours to enjoy between 8 am and 10 pm.
              </p>
              <p>
                For warmer days, air-conditioning units serve the main sitting room, primary bedroom and annex, and every bedroom has a fan. Up to 2 dogs are welcome for a fee, so the family dog can come along for those country walks too. Please include any dogs when booking.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Where you&apos;ll be</h3>
              <p>
                Brandy&apos;s Farmhouse sits in the most desirable corner of the Cotswolds, surrounded by grand country estates and just 4 minutes by car from Soho Farmhouse. The country lanes between Sandford St Martin and Great Tew take you past open parkland, thatched cottages and some of Oxfordshire&apos;s finest country homes. For Soho House members and their invited guests, there&apos;s an even better way to reach the club: a 30-minute walk from the house along a private trail.
              </p>
              <p>
                Great Tew is an easy drive for coffee at Quince &amp; Clover or a long Sunday lunch at The Falkland Arms, the village&apos;s 16th-century pub. Chipping Norton is close by for independent shops and its Wednesday market, and Blenheim Palace and Woodstock are within easy reach for a day out. Pick up something for dinner on the way home, and spend the rest of the afternoon on your own tennis court or beside the heated pool.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Getting around</h3>
              <p>
                A car gives you the freedom to explore at your own pace, whether you&apos;re heading to Soho Farmhouse for dinner, picking up fresh produce in Chipping Norton or taking the scenic route home through Great Tew. There&apos;s parking for up to 6 vehicles at the house, along with an electric vehicle charger.
              </p>
              <p>
                Coming from London? Take the train from Paddington to Charlbury or from Marylebone to Banbury, then continue to the farmhouse by taxi. We recommend pre-booking your pickup, especially at Charlbury, where there&apos;s no taxi rank. If everyone would like to enjoy a glass of wine over dinner, it&apos;s worth booking your return taxi when you reserve your table.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getCotswoldsGallerySrc(`${PHOTO_DIR}/DJI_20260720185020_0008_D.jpg`)}
                  alt="Aerial view of the Cotswolds estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getCotswoldsGallerySrc(`${PHOTO_DIR}/DJI_20260722215623_0226_D.jpg`)}
                  alt="Aerial view of the property grounds"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getCotswoldsGallerySrc(`${PHOTO_DIR}/224A5352.jpg`)}
                  alt="Interior view of the Cotswolds estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <Image
                  src={getCotswoldsGallerySrc(`${PHOTO_DIR}/224A5450.jpg`)}
                  alt="Interior living space of the Cotswolds estate"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          
          {/* Amenities & Bedroom Layout */}
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-8 mb-24">
            <div className="mb-14 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Amenities & Features</h2>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Premium interior comfort, countryside outdoor living, and a dedicated wellness setup designed for extended luxury stays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  title: "Interior",
                  image: `${PHOTO_DIR}/224A8465.jpg`,
                  items: [
                    "deVOL designer kitchen with iconic AGA oven",
                    "Spacious living and dining areas",
                    "Luxury linens and towels",
                    "En-suite bathrooms with premium fixtures",
                    "Two dedicated office spaces",
                    "Split A/C in living room, Master Bedroom 1, and Annex",
                  ],
                },
                {
                  title: "Outdoor",
                  image: `${PHOTO_DIR}/DJI_20260720185020_0008_D.jpg`,
                  items: [
                    "Private tennis court with new surface",
                    "Outdoor seating and dining areas",
                    "Charming private pond",
                    "Bocce ball and horseshoes",
                    "Outdoor firepit",
                  ],
                },
                {
                  title: "Wellness",
                  image: `${PHOTO_DIR}/Hot tub shot no AC cotswolds.png`,
                  items: [
                    "Infrared sauna",
                    "Private hot tub",
                    "Refreshing cold plunge pool",
                    "Year-round heated outdoor pool",
                    "Concierge services",
                  ],
                },
              ].map((amenity) => (
                <div key={amenity.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="relative h-44 bg-gray-200">
                    <Image
                      src={getCotswoldsGallerySrc(amenity.image)}
                      alt={`${amenity.title} - Cotswolds Estate`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-[#3F5F2A] mb-4">{amenity.title}</h3>
                    <ul className="space-y-2 text-gray-700">
                      {amenity.items.map((item) => (
                        <li key={item}>✓ {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Bedrooms</h2>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3">Main House (280m²)</h3>
              <p className="text-gray-700 mb-6">
                The heart of the estate features six thoughtfully designed bedrooms and four elegant bathrooms, perfect for families, groups, or special gatherings. Two of the bedrooms have spa-like ensuite bathrooms, while the other bedrooms share a large bathroom with a separate tub and walk-in shower. There is also a charming powder room on the main floor.
              </p>
              <p className="text-gray-700 mb-8">
                Enjoy two inviting living rooms, perfect for unwinding or enjoying movie nights. There are also 2 indoor fireplaces, one gas and one wood-burning, and two dedicated office spaces for remote work. The gorgeous deVOL designer kitchen is a chef&apos;s dream, equipped with an iconic AGA oven, a Bosch electric oven and stove, two refrigerators, and a brand-new washer and separate dryer.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  {
                    title: "Bedroom 1",
                    type: "Emperor King",
                    features: "Ensuite bathroom with spa amenities, luxurious linens",
                    location: "Main House - Master Suite",
                    image: `${PHOTO_DIR}/224A5405.jpg`,
                  },
                  {
                    title: "Bedroom 2",
                    type: "Super King",
                    features: "Ensuite bathroom, premium bedding",
                    location: "Main House",
                    image: `${PHOTO_DIR}/224A5410.jpg`,
                  },
                  {
                    title: "Bedroom 3",
                    type: "Super King",
                    features: "Shared bathroom access, countryside views",
                    location: "Main House",
                    image: `${PHOTO_DIR}/224A5417.jpg`,
                  },
                  {
                    title: "Bedroom 4",
                    type: "Double",
                    features: "Shared bathroom access, cozy retreat",
                    location: "Main House",
                    image: `${PHOTO_DIR}/224A5423.jpg`,
                  },
                  {
                    title: "Bedroom 5",
                    type: "California King (Super King)",
                    features: "Shared bathroom access, charming space",
                    location: "Main House",
                    image: `${PHOTO_DIR}/224A8416.jpg`,
                  },
                  {
                    title: "Bedroom 6",
                    type: "Queen",
                    features: "Shared bathroom access, queen bed on main floor with one step to access",
                    location: "Main House (main floor)",
                    image: `${PHOTO_DIR}/224A8456.jpg`,
                  },
                ].map((bedroom) => (
                  <div key={bedroom.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-44 bg-gray-200">
                      <Image
                        src={getCotswoldsGallerySrc(bedroom.image)}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-3xl font-medium text-[#3F5F2A] mb-2">{bedroom.title}</h4>
                      <p className="text-gray-800 mb-1"><span className="font-semibold">Type:</span> {bedroom.type}</p>
                      <p className="text-gray-800 mb-2"><span className="font-semibold">Features:</span> {bedroom.features}</p>
                      <p className="text-gray-500 italic text-sm">{bedroom.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-2xl font-bold mb-3">Annex House (40m²)</h3>
              <p className="text-gray-700 mb-8">
                Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own, perfect for families or guests who want their own quarters, privacy, or step-free access to two bedrooms and a bathroom. It features a full bathroom and a compact kitchenette, ideal for early risers or night owls who want their own space.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Bedroom 7",
                    type: "Super King (King-size bed)",
                    features: "Private bathroom access, secluded annex retreat",
                    location: "Annex House",
                    image: `${PHOTO_DIR}/224A8480.jpg`,
                  },
                  {
                    title: "Bedroom 8",
                    type: "Single",
                    features: "Shared bathroom in annex, comfortable single bed",
                    location: "Annex House",
                    image: `${PHOTO_DIR}/224A8473.jpg`,
                  },
                ].map((bedroom) => (
                  <div key={bedroom.title} className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="relative h-44 bg-gray-200">
                      <Image
                        src={getCotswoldsGallerySrc(bedroom.image)}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 33vw"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-5">
                      <h4 className="text-3xl font-medium text-[#3F5F2A] mb-2">{bedroom.title}</h4>
                      <p className="text-gray-800 mb-1"><span className="font-semibold">Type:</span> {bedroom.type}</p>
                      <p className="text-gray-800 mb-2"><span className="font-semibold">Features:</span> {bedroom.features}</p>
                      <p className="text-gray-500 italic text-sm">{bedroom.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto px-6 md:px-10 lg:px-8 text-center mb-24">
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">Experience countryside luxury at its finest</h2>
            <p className="text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed text-lg">
              Brandy&apos;s Farmhouse sits among grand country estates in the most desirable corner of the Cotswolds, just 4 minutes by car from Soho Farmhouse. The stone farmhouse and step-free annex sleep up to 15, with a heated pool, private tennis court, and outdoor spa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-md font-medium text-lg transition-colors"
              >
                Contact Us to Book
              </Link>
              <a
                href={AIRBNB_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className={airbnbButtonLg}
              >
                Book on Airbnb
              </a>
            </div>
          </div>

          {/* All Photos Modal - Optimized and Simplified */}
          {showAllPhotos && (
            <div className="fixed inset-0 bg-black z-50 overflow-y-auto">
              <div className="flex justify-between items-center p-4 sticky top-0 bg-black bg-opacity-75 z-10">
                <h3 className="text-white font-medium">
                  Cotswolds UK - Soho Farm House | All Photos ({photos.length})
                </h3>
                <button
                  onClick={closeAllPhotos}
                  className="text-white hover:text-gray-300"
                >
                  <X size={24} />
                </button>
              </div>
              <div className={`${editorialGalleryModalWrapperClass} ${editorialGalleryGridClass}`}>
                {galleryPhotos.map((photo, index) => (
                  <div
                    key={photo}
                    className={`${editorialGalleryModalTileClass} bg-gray-800`}
                    onClick={() => handlePhotoClick(index)}
                  >
                    <Image
                      src={photo}
                      alt={`Cotswolds UK - Soho Farm House photo ${index + 1}`}
                      fill
                      sizes={editorialGalleryImageSizes}
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      quality={75}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Full Screen Photo Modal */}
          {selectedPhotoIndex !== null && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={closeFullScreenPhoto}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchCancel}
            >
              <button
                className="absolute top-4 right-4 text-white z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  closeFullScreenPhoto();
                }}
              >
                <X size={32} />
              </button>
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("prev");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white z-10 bg-black bg-opacity-50 p-2 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  navigatePhoto("next");
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
              <div
                className="relative w-full h-[calc(100vh-120px)] max-w-6xl mx-auto px-4 touch-pinch-zoom"
                {...blockGalleryTouchPropagation}
              >
                {isImageLoading && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
                <div className="flex items-center justify-center h-full">
                  <img
                    src={
                      selectedPhotoIndex !== null
                        ? fullPhotos[selectedPhotoIndex]
                        : ""
                    }
                    alt={`Cotswolds UK - Soho Farm House photo ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ""}`}
                    className={`transition-opacity duration-300 ${isImageLoading ? "opacity-0" : "opacity-100"}`}
                    onLoad={handleImageLoad}
                    loading="eager"
                    fetchPriority="high"
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      width: "auto",
                      height: "auto",
                      objectFit: "contain",
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = COVER;
                      handleImageLoad();
                    }}
                  />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {selectedPhotoIndex !== null ? `${selectedPhotoIndex + 1} / ${photos.length}` : ''}
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps<CotswoldsPageProps> = async ({
  locale,
}) => {
  return {
    props: {
      photos: COTSWOLDS_PHOTOS,
      galleryPhotos: COTSWOLDS_GALLERY_PHOTOS,
      fullPhotos: COTSWOLDS_FULL_PHOTOS,
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default CotswoldsUKSohoFarmHouse; 