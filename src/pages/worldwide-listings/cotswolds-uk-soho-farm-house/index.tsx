import React, { useCallback, useState, useEffect } from "react";
import { blockGalleryTouchPropagation, usePhotoSwipeNavigation } from "@/hooks/usePhotoSwipeNavigation";
import Head from "next/head";
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
import fs from "fs";
import path from "path";

const PHOTO_DIR = "/photos/properties/Cotswolds UK - Soho Farm House";
const PHOTO_DIR_FS = path.join(
  process.cwd(),
  "public/photos/properties/Cotswolds UK - Soho Farm House"
);
const COVER_FILENAME = "224A8292.jpg";
const COVER = `${PHOTO_DIR}/${COVER_FILENAME}`;
const AIRBNB_LINK =
  "https://www.airbnb.ca/rooms/1414129878809697902?guests=1&adults=1&s=67&unique_share_id=ba3bff7b-bc57-416c-bcd6-96b0943cfe51";
const IMAGE_EXT = /\.(jpe?g|png|webp|gif)$/i;
const PINNED_GALLERY_COUNT = 6;

function seededShuffle<T>(items: T[], seed: string): T[] {
  const shuffled = [...items];
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (Math.imul(31, hash) + seed.charCodeAt(i)) | 0;
  }

  for (let i = shuffled.length - 1; i > 0; i--) {
    hash = (Math.imul(1664525, hash) + 1013904223) | 0;
    const j = (hash >>> 0) % (i + 1);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
}

function discoverCotswoldsPhotos(): string[] {
  const files = fs
    .readdirSync(PHOTO_DIR_FS)
    .filter((file) => IMAGE_EXT.test(file));

  const sortedRest = files
    .filter((file) => file !== COVER_FILENAME)
    .sort((a, b) => a.localeCompare(b));

  const pinned = [
    COVER_FILENAME,
    ...sortedRest.slice(0, PINNED_GALLERY_COUNT - 1),
  ];
  const remaining = sortedRest.slice(PINNED_GALLERY_COUNT - 1);
  const mixedRest = seededShuffle(
    remaining,
    "cotswolds-soho-farm-house-gallery"
  );

  return [...pinned, ...mixedRest].map((file) => `${PHOTO_DIR}/${file}`);
}

interface CotswoldsPageProps {
  photos: string[];
}

const CotswoldsUKSohoFarmHouse = ({ photos }: CotswoldsPageProps) => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(0);

  const cacheVersion = "v12";

  const photoOrder = photos;
  const optimalPhotos = photos;

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

  const handlePreloadProgress = () => {
    setImagesLoaded(prev => prev + 1);
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

  // Improved preloading for faster gallery display with error handling
  useEffect(() => {
    // Preload first 20 optimized images for initial display
    const preloadImages = photos.slice(0, 20).map(src => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        
        // Set image loading priority
        img.loading = 'eager';
        img.fetchPriority = 'high';
        
        // Add cache-busting parameter
        img.src = `${src}?v=${cacheVersion}`;
        
        img.onload = () => {
          handlePreloadProgress();
          resolve();
        };
        
        img.onerror = () => {
          console.error(`Failed to load image: ${src}`);
          handlePreloadProgress();
          resolve();
        };
      });
    });

    // Process in batches for better performance
    Promise.all(preloadImages);
  }, []);

  return (
    <>
      <Head>
        <title>Luxury Cotswolds Rental Home Near Soho Farmhouse | 8 Bedroom AirBnb, Spa, Heated pool, Tennis Court, Cold Plunge, Air Conditioning, & Sauna - AceHost</title>
        <meta
          name="description"
          content="Experience luxury at this designer stone estate near Soho Farmhouse in the Cotswolds, UK. This exclusive 8-bedroom property offers spa facilities, a tennis court, and an annex house, all set on a stunning 2-acre property just minutes from Soho Farmhouse."
        />
        {/* Preload critical images */}
        {photoOrder.slice(0, 3).map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main className={editorialMainClass}>
          {/* Header with Property Info */}
          <PropertyHeaderEditorial
            title="Luxury Cotswolds Rental Home Near Soho Farmhouse | 8 Bedroom AirBnb, Spa, Heated pool, Tennis Court, Cold Plunge, Air Conditioning, & Sauna"
            guests={15}
            bedrooms={8}
            bathrooms={5}
            priceRange="2-3 night minimum. £1,200-£3,100 per night | Dependent on season, day of week, holidays, etc."
            contactLink="/contact"
            airbnbLink={AIRBNB_LINK}
            amenities={getWorldwideAmenities("cotswolds-uk-soho-farm-house")}
            onMorePhotosClick={openGallery}
          />

          {/* Loading Indicator */}
          {imagesLoaded < 12 && (
            <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
              <div className="flex justify-center items-center mb-4">
                <div className="w-8 h-8 border-4 border-gray-800 border-t-transparent rounded-full animate-spin"></div>
              </div>
              <p className="text-gray-600">Loading gallery ({Math.min(imagesLoaded, 12)}/12 images)...</p>
            </div>
          )}

          {/* Photo Grid - Only show once essential images are loaded */}
          <div className={`${editorialGalleryWrapperClass} ${imagesLoaded < 12 ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`} id="photos">
            <div className={editorialGalleryGridClass}>
              {photos.slice(0, 18).map((photo, index) => (
                <div
                  key={photo}
                  className={editorialGalleryTileClass}
                  onClick={() => handlePhotoClick(index)}
                >
                  <div className="w-full h-full bg-gray-200">
                    <img
                      src={`${photo}?v=${cacheVersion}`}
                      alt={`Cotswolds UK - Soho Farm House ${index + 1}`}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading={index < 12 ? "eager" : "lazy"}
                      fetchPriority={index === 0 ? "high" : undefined}
                      width={640}
                      height={480}
                      style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.onerror = null;
                        target.src = COVER;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            {photos.length > 18 && (
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
                Escape to a stunning estate near Soho Farmhouse, offering a luxurious retreat with an outdoor spa &amp; heated pool/hot tub, private tennis court, and cozy annex house for additional sleeping. This beautiful house is spread across several acres, features 8 bedrooms, a gourmet kitchen, multiple living areas, and 5 bathrooms. Enjoy the hot tub, infrared sauna, cold plunge, pool, &amp; outdoor fire pit.
              </p>
              <p>
                Perfect for families or groups seeking a peaceful Cotswolds getaway in a prestigious, rural setting.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">The space</h3>
              <p>
                <strong>Main House (6 Bedrooms):</strong>
              </p>
              <p>
                Step inside the heart of the estate, featuring six beautifully appointed bedrooms designed for comfort and relaxation:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>King Bedroom 1:</strong> A luxurious retreat with a spacious Emperor-size bed.</li>
                <li><strong>King Bedroom 2:</strong> Offers a supremely comfortable Super King-size bed.</li>
                <li><strong>King Bedroom 3:</strong> Another haven with a Super King-size bed.</li>
                <li><strong>Double Bedroom 4:</strong> Features a cozy double bed.</li>
                <li><strong>California King Bedroom 5:</strong> Another inviting room with a Super King bed.</li>
                <li><strong>Queen Bedroom 6:</strong> A comfortable queen bed. Located on the main floor. Only 1 step to access the main floor &amp; bathroom next to the room.</li>
              </ul>

              <p>
                Two bedrooms boast spa-like ensuite bathrooms, while the remaining bedrooms share a large bathroom complete with a separate tub and a walk-in shower. A charming powder room is also conveniently located on the main floor.
              </p>
              <p>
                Enjoy two inviting living rooms, perfect for unwinding or enjoying movie nights. There are also two dedicated office spaces for remote work. The gorgeous Devol designer kitchen is a chef&apos;s dream, equipped with an iconic AGA oven, a Bosch electric oven and stove, two refrigerators, and a brand-new washer and separate dryer.
              </p>

              <p>
                <strong>Annex House (2 Bedrooms):</strong>
              </p>
              <p>
                Discover a private sanctuary in the Annex, nestled behind the tennis court. Perfect for a family or individuals looking for their own quarters/privacy. Also perfect for step free access to 2 bedrooms &amp; bathroom. It features:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Super King Bedroom 7:</strong> A comfortable room with a King-size bed.</li>
                <li><strong>Flexible Bedroom:</strong> Can be configured with either two single beds or a King-size bed.</li>
                <li><strong>Full Bathroom:</strong> A well-appointed full bathroom.</li>
                <li><strong>Kitchenette:</strong> A compact kitchenette, ideal for preparing light meals and snacks.</li>
                <li><strong>Single Bed Bedroom 8:</strong> A comfortable room with a single bed.</li>
              </ul>

              <p>
                <strong>Wellness &amp; Outdoor Living:</strong>
              </p>
              <p>
                Experience pure relaxation with our outdoor spa area, offering:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Sauna:</strong> A traditional sauna for a rejuvenating experience.</li>
                <li><strong>Hot Tub:</strong> Unwind in the hot tub under the open sky.</li>
                <li><strong>Cold Plunge Pool:</strong> Refresh yourself with a plunge into the cold pool.</li>
                <li><strong>Outdoor Heated Pool:</strong> Enjoy our heated pool with 4 lounge chairs located outside the main house. Perfect for a swim on a hot day and a beautiful spot for photos. Pool available all year round and heating is included at no extra charge.</li>
              </ul>

              <p>
                Enjoy outdoor activities like bocce ball or horseshoes, or simply relax by the outdoor fire pit under the stars.
              </p>

              <p><strong>Additional Amenities:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Electric car charger included.</li>
                <li>Parking for up to 6 vehicles.</li>
                <li>Extendable indoor dining table (seats 12-14 comfortably + 2 bar seats in the dining room for a total of 14-16).</li>
                <li>2 indoor fireplaces (1 gas, 1 wood-burning)</li>
                <li>Outdoor dining area and BBQ (available from April 1 to October 30).</li>
              </ul>

              <p>
                This is not just a house, it&apos;s an experience. A rare blend of country charm and modern luxury, all within striking distance of Soho Farmhouse and the Cotswolds&apos; best.
              </p>

              <p>
                <em>*Aesop Toiletries, known for their high-end, plant-based formulations and elegant design, are thoughtfully placed in every bedroom, adding a touch of luxury to your stay.</em>
              </p>
              <p>
                <em>*Full high speed wifi in the main 6-bedroom house and also the 2-bedroom Annex home!</em>
              </p>
              <p>
                <em>*Air Conditioning &amp; Cooling: The home is equipped with powerful split A/C units in the main living room, Master Bedroom 1, and the Annex house. These are strong units that help cool the main home, all bedrooms 1-6, and the 2 bedrooms in the Annex home, effectively, even during the hottest peak summer days. In addition, the Cotswolds naturally cools down significantly in the evenings, especially compared to London. The home&apos;s thick, castle-like stone structure also helps keep the interior naturally cool throughout the day and night. The Annex is tucked away in the trees and shade, allowing it to stay comfortably cool even during peak summer heat. All bedrooms have fans: Fans are also provided in every bedroom and throughout the main living spaces for added comfort.</em>
              </p>
              <p>
                Outdoor BBQ available from April 1 to October 30. BBQ not available in winter.
              </p>
              <p>
                <strong>Pet rule:</strong> We welcome a maximum of 2 dogs for a small fee. Please declare in the guest count :)
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Guest access</h3>
              <p>
                No loud noise or use of spa or tennis court after 10 pm, or before 8 am, neighbours need to sleep :)
              </p>
              <p>
                <strong>***For Elderly, our annex is step free, located right next to the main home and tennis court, and has 2 full bedrooms, 1 bathroom with a shower.***</strong> A great option for those looking for step free.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 pt-2">Other things to note</h3>
              <p>
                Perfect getaway for a family or group of 6 to 12 people total, with the option to sleep up to 15.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${PHOTO_DIR}/DJI_20260720185020_0008_D.jpg`}
                  alt="Aerial view of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${PHOTO_DIR}/DJI_20260722215623_0226_D.jpg`}
                  alt="Aerial view of the property grounds"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${PHOTO_DIR}/224A5352.jpg`}
                  alt="Interior view of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                />
              </div>
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-md">
                <img
                  src={`${PHOTO_DIR}/224A5450.jpg`}
                  alt="Interior living space of the Cotswolds estate"
                  className="object-cover w-full h-full"
                  loading="lazy"
                  width={600}
                  height={450}
                  style={{ aspectRatio: '4/3', objectFit: 'cover' }}
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
                    "Devol designer kitchen with iconic AGA oven",
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
                    <img
                      src={amenity.image}
                      alt={`${amenity.title} - Cotswolds Estate`}
                      className="object-cover w-full h-full"
                      loading="lazy"
                      width={420}
                      height={280}
                      style={{ objectFit: "cover" }}
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
                Enjoy two cozy living rooms (ideal for lounging or movie nights), two dedicated office spaces for remote work, and a gorgeous Devol designer kitchen complete with an iconic AGA oven, two fridges, and a brand-new washer/dryer.
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
                      <img
                        src={bedroom.image}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={420}
                        height={280}
                        style={{ objectFit: "cover" }}
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
                Tucked away behind the newly surfaced private tennis court, the annex is a peaceful escape of its own — perfect for families or guests who want their own quarters, privacy, or step-free access to two bedrooms and a bathroom. It features a full bathroom and a compact kitchenette, ideal for early risers or night owls who want their own space.
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
                      <img
                        src={bedroom.image}
                        alt={`${bedroom.title} - Cotswolds Estate`}
                        className="object-cover w-full h-full"
                        loading="lazy"
                        width={420}
                        height={280}
                        style={{ objectFit: "cover" }}
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
              This is not just a house—it's an experience. A rare blend of country charm and modern luxury, all within striking distance of Soho Farmhouse and the Cotswolds' best attractions. Perfect for family gatherings, corporate retreats, or special celebrations.
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
                className="inline-block px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium text-lg transition-colors"
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
                {photos.map((photo, index) => (
                  <div
                    key={index}
                    className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer bg-gray-800"
                    onClick={() => handlePhotoClick(index)}
                  >
                    <div className="w-full h-full">
                      <img
                        src={index < 20 ? `${photo}?v=${cacheVersion}` : photo} 
                        alt={`Cotswolds UK - Soho Farm House photo ${index + 1}`}
                        className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                        loading={index < 20 ? "eager" : "lazy"}
                        width={300}
                        height={225}
                        style={{ aspectRatio: '4/3', objectFit: 'cover' }}
                        onError={(e) => {
                          // Fallback if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          // Use a working fallback image
                          if (index < 20) {
                            // For important images, use our optimized cover
                            target.src = COVER;
                          } else {
                            target.src = COVER;
                          }
                          console.log(`Using fallback for modal image ${index + 1}`);
                        }}
                      />
                    </div>
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
                    src={selectedPhotoIndex !== null ? 
                      (selectedPhotoIndex < 20 ? 
                        `${photos[selectedPhotoIndex]}?v=${cacheVersion}` : 
                        photos[selectedPhotoIndex]) 
                      : ''}
                    alt={`Cotswolds UK - Soho Farm House photo ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`}
                    className={`transition-opacity duration-300 ${isImageLoading ? 'opacity-0' : 'opacity-100'}`}
                    onLoad={handleImageLoad}
                    loading="eager"
                    fetchPriority="high"
                    style={{ 
                      maxHeight: '100%', 
                      maxWidth: '100%', 
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain'
                    }}
                    onError={(e) => {
                      // Fallback for full-screen view if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      
                      if (selectedPhotoIndex !== null) {
                        target.src = COVER;
                      } else {
                        target.src = COVER;
                      }
                      console.log(`Using fallback for fullscreen image ${selectedPhotoIndex !== null ? selectedPhotoIndex + 1 : ''}`);
                      handleImageLoad(); // Make sure we still remove the loading state
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
      photos: discoverCotswoldsPhotos(),
      ...(await serverSideTranslations(locale || "en", ["common"])),
    },
  };
};

export default CotswoldsUKSohoFarmHouse; 