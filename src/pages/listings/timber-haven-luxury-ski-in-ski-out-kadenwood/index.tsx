import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Navigation from "@/components/Navigation";
import PropertyHeader from "@/components/PropertyHeader";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const TimberHavenKadenwood = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);
  const [isImageLoading, setIsImageLoading] = useState(false);

  const photos = [
    "/photos/properties/Timber Haven John Harris/95 - 20260506 MM4P 02 0367.jpg",
    "/photos/properties/Timber Haven John Harris/01 - 20260506 A7M4 03 A1_00439-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/02 - 20260506 MM4P 02 0347.jpg",
    "/photos/properties/Timber Haven John Harris/03 - 20260506 A7M4 03 A1_00165.jpg",
    "/photos/properties/Timber Haven John Harris/04 - 20260506 A7M4 03 A1_00171.jpg",
    "/photos/properties/Timber Haven John Harris/05 - 20260506 A7M4 03 A1_00200.jpg",
    "/photos/properties/Timber Haven John Harris/06 - 20260506 A7M4 03 A1_00152.jpg",
    "/photos/properties/Timber Haven John Harris/07 - 20260506 A7M4 03 A1_00158.jpg",
    "/photos/properties/Timber Haven John Harris/08 - 20260506 A7M4 03 A1_00109.jpg",
    "/photos/properties/Timber Haven John Harris/09 - 20260506 A7M4 03 A1_00135.jpg",
    "/photos/properties/Timber Haven John Harris/10 - 20260506 A7M4 03 A1_00143.jpg",
    "/photos/properties/Timber Haven John Harris/11 - 20260506 A7M4 03 A1_00182.jpg",
    "/photos/properties/Timber Haven John Harris/12 - 20260506 A7M4 03 A1_00188.jpg",
    "/photos/properties/Timber Haven John Harris/13 - 20260506 A7M4 03 A1_00193.jpg",
    "/photos/properties/Timber Haven John Harris/14 - 20260506 A7M4 03 A1_00232.jpg",
    "/photos/properties/Timber Haven John Harris/15 - 20260506 A7M4 03 A1_00217.jpg",
    "/photos/properties/Timber Haven John Harris/18 - 20260506 MM4P 02 0407.jpg",
    "/photos/properties/Timber Haven John Harris/19 - 20260506 MM4P 02 0424.jpg",
    "/photos/properties/Timber Haven John Harris/20 - 20260506 A7M4 02 A1_09946.jpg",
    "/photos/properties/Timber Haven John Harris/21 - 20260506 A7M4 02 A1_09966.jpg",
    "/photos/properties/Timber Haven John Harris/24 - 20260506 A7M4 02 A1_09996.jpg",
    "/photos/properties/Timber Haven John Harris/27 - 20260506 A7M4 03 A1_00022.jpg",
    "/photos/properties/Timber Haven John Harris/28 - 20260506 A7M4 02 A1_09986.jpg",
    "/photos/properties/Timber Haven John Harris/30 - 20260506 A7M4 03 A1_00656.jpg",
    "/photos/properties/Timber Haven John Harris/31 - 20260506 A7M4 03 A1_00210.jpg",
    "/photos/properties/Timber Haven John Harris/32 - 20260506 A7M4 02 A1_09842.jpg",
    "/photos/properties/Timber Haven John Harris/34 - 20260506 A7M4 02 A1_09866-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/35 - 20260506 A7M4 02 A1_09875-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/36 - 20260506 A7M4 02 A1_09883.jpg",
    "/photos/properties/Timber Haven John Harris/37 - 20260506 A7M4 02 A1_09898.jpg",
    "/photos/properties/Timber Haven John Harris/38 - 20260506 A7M4 02 A1_09915.jpg",
    "/photos/properties/Timber Haven John Harris/39 - 20260506 A7M4 02 A1_09926.jpg",
    "/photos/properties/Timber Haven John Harris/40 - 20260506 A7M4 02 A1_09934.jpg",
    "/photos/properties/Timber Haven John Harris/41 - 20260506 A7M4 03 A1_00029.jpg",
    "/photos/properties/Timber Haven John Harris/43 - 20260506 A7M4 03 A1_00093-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/44 - 20260506 A7M4 03 A1_00518.jpg",
    "/photos/properties/Timber Haven John Harris/45 - 20260506 A7M4 03 A1_00309.jpg",
    "/photos/properties/Timber Haven John Harris/46 - 20260506 A7M4 03 A1_00315.jpg",
    "/photos/properties/Timber Haven John Harris/47 - 20260506 A7M4 03 A1_00323.jpg",
    "/photos/properties/Timber Haven John Harris/48 - 20260506 A7M4 03 A1_00329.jpg",
    "/photos/properties/Timber Haven John Harris/49 - 20260506 A7M4 03 A1_00337.jpg",
    "/photos/properties/Timber Haven John Harris/50 - 20260506 A7M4 03 A1_00348.jpg",
    "/photos/properties/Timber Haven John Harris/51 - 20260506 A7M4 03 A1_00356.jpg",
    "/photos/properties/Timber Haven John Harris/52 - 20260506 A7M4 03 A1_00456.jpg",
    "/photos/properties/Timber Haven John Harris/53 - 20260506 A7M4 03 A1_00363.jpg",
    "/photos/properties/Timber Haven John Harris/54 - 20260506 A7M4 03 A1_00369.jpg",
    "/photos/properties/Timber Haven John Harris/55 - 20260506 A7M4 03 A1_00376.jpg",
    "/photos/properties/Timber Haven John Harris/56 - 20260506 A7M4 03 A1_00462.jpg",
    "/photos/properties/Timber Haven John Harris/57 - 20260506 A7M4 03 A1_00483.jpg",
    "/photos/properties/Timber Haven John Harris/58 - 20260506 A7M4 03 A1_00470.jpg",
    "/photos/properties/Timber Haven John Harris/59 - 20260506 A7M4 03 A1_00384.jpg",
    "/photos/properties/Timber Haven John Harris/60 - 20260506 A7M4 03 A1_00389.jpg",
    "/photos/properties/Timber Haven John Harris/61 - 20260506 A7M4 03 A1_00425.jpg",
    "/photos/properties/Timber Haven John Harris/62 - 20260506 A7M4 03 A1_00412.jpg",
    "/photos/properties/Timber Haven John Harris/63 - 20260506 A7M4 03 A1_00418.jpg",
    "/photos/properties/Timber Haven John Harris/64 - 20260506 A7M4 03 A1_00432.jpg",
    "/photos/properties/Timber Haven John Harris/65 - 20260506 A7M4 03 A1_00394.jpg",
    "/photos/properties/Timber Haven John Harris/67 - 20260506 A7M4 03 A1_00400.jpg",
    "/photos/properties/Timber Haven John Harris/69 - 20260506 A7M4 03 A1_00269.jpg",
    "/photos/properties/Timber Haven John Harris/71 - 20260506 A7M4 03 A1_00290-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/73 - 20260506 A7M4 03 A1_00583.jpg",
    "/photos/properties/Timber Haven John Harris/74 - 20260506 A7M4 03 A1_00572.jpg",
    "/photos/properties/Timber Haven John Harris/75 - 20260506 A7M4 03 A1_00552-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/77 - 20260506 A7M4 03 A1_00567-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/79 - 20260506 A7M4 03 A1_00617.jpg",
    "/photos/properties/Timber Haven John Harris/80 - 20260506 A7M4 03 A1_00622.jpg",
    "/photos/properties/Timber Haven John Harris/81 - 20260506 A7M4 03 A1_00633.jpg",
    "/photos/properties/Timber Haven John Harris/84 - 20260506 A7M4 03 A1_00526.jpg",
    "/photos/properties/Timber Haven John Harris/85 - 20260506 A7M4 03 A1_00535.jpg",
    "/photos/properties/Timber Haven John Harris/86 - 20260506 A7M4 03 A1_00542.jpg",
    "/photos/properties/Timber Haven John Harris/87 - 20260506 A7M4 03 A1_00597.jpg",
    "/photos/properties/Timber Haven John Harris/88 - 20260506 A7M4 03 A1_00611-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/89 - 20260506 A7M4 03 A1_00605-Edit.jpg",
    "/photos/properties/Timber Haven John Harris/90 - 20260506 A7M4 03 A1_00650.jpg",
    "/photos/properties/Timber Haven John Harris/92 - 20260506 A7M4 03 A1_00494.jpg",
    "/photos/properties/Timber Haven John Harris/93 - 20260506 A7M4 03 A1_00502.jpg",
    "/photos/properties/Timber Haven John Harris/97 - 20260506 A7M4 03 A1_00068.jpg",
    "/photos/properties/Timber Haven John Harris/98 - 20260506 MM4P 02 0377.jpg",
    "/photos/properties/Timber Haven John Harris/100 - 20260506 MM4P 02 0387.jpg",
  ];

  const closeAllPhotos = () => {
    setShowAllPhotos(false);
    setSelectedPhotoIndex(null);
  };

  const navigatePhoto = (direction: "prev" | "next") => {
    if (selectedPhotoIndex === null) return;
    setIsImageLoading(true);
    if (direction === "prev") {
      setSelectedPhotoIndex(selectedPhotoIndex === 0 ? photos.length - 1 : selectedPhotoIndex - 1);
    } else {
      setSelectedPhotoIndex(selectedPhotoIndex === photos.length - 1 ? 0 : selectedPhotoIndex + 1);
    }
  };

  return (
    <>
      <Head>
        <title>Timber Haven - Luxury Ski in Ski out - Kadenwood - AceHost</title>
        <meta
          name="description"
          content="Welcome to your private Kadenwood mountain estate, an 8-bedroom luxury home with stunning views, ski-in/ski-out access, private residents-only gondola access, and premium amenities for large groups."
        />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation transparent={false} />

        <main>
          <PropertyHeader
            title="Timber Haven - Luxury Ski in Ski out - Kadenwood"
            guests={16}
            bedrooms={8}
            beds={10}
            bathrooms={6.5}
            priceRange="$4000-$9,000+ per night"
            winterPrice="$6500-$9000+ Nightly | Winter"
            holidayPrice="$12,000-$16,500 Nightly | Christmas & NY"
            airbnbLink="https://www.airbnb.ca/rooms/1684937418405220715?guests=1&adults=1&s=67&unique_share_id=07a60c93-180c-4b37-be0a-dd512adb2808"
          />

          <div className="max-w-7xl mx-auto px-4 mb-10 sm:mb-16" id="photos">
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
              {photos.slice(0, 28).map((photo, index) => (
                <div
                  key={index}
                  className="aspect-[4/3] relative cursor-pointer rounded-lg overflow-hidden shadow-md"
                  onClick={() => {
                    setIsImageLoading(true);
                    setSelectedPhotoIndex(index);
                  }}
                >
                  <Image
                    src={photo}
                    alt={`Timber Haven interior ${index + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover hover:scale-105 transition-transform duration-300"
                    priority={index < 2}
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>
            {photos.length > 28 && (
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

          <div className="max-w-6xl mx-auto px-4" id="details">
            <p className="text-gray-800 mb-8 max-w-4xl">
              Welcome to your private Kadenwood mountain estate, an 8-bedroom luxury home with stunning views, ski-in/ski-out access, a private hot tub, beautiful furnishings, curated artwork, and access to Kadenwood's private residents-only gondola.
            </p>
            <p className="text-gray-800 mb-8 max-w-4xl">
              With spacious living areas, outdoor dining, a ping pong table, multiple lounge spaces, and a main floor with 2 bedrooms including the Master Bedroom suite, this home is perfect for families, large groups, and guests who prefer minimal stairs during their stay.
            </p>
            <p className="text-gray-800 mb-8 max-w-4xl font-semibold">The space</p>
            <p className="text-gray-800 mb-6 max-w-4xl">
              Located in Kadenwood, Whistler's favourite luxury ski-in/ski-out neighbourhood, this 8-bedroom mountain estate offers the perfect blend of privacy, comfort, and convenience. Perched high above Creekside and surrounded by old growth forest, the home features one-of-a-kind mountain views, elegant interiors, and plenty of room for groups to relax, gather, and enjoy Whistler in every season.
            </p>
            <p className="text-gray-800 mb-6 max-w-4xl">
              The main floor is especially convenient, with 2 bedrooms including a primary suite, making it ideal for elderly guests or anyone who prefers to avoid stairs when coming in and out of the home. Across the 3 well-designed levels, guests can enjoy multiple living areas, a TV lounge, home office space, recreation room, ping pong table, and beautifully furnished spaces with tasteful artwork throughout.
            </p>
            <p className="text-gray-800 mb-6 max-w-4xl">
              The open-concept living and dining area is designed for entertaining, with a warm mountain atmosphere, large windows, and plenty of space for everyone to come together. For larger groups, a spare dining table extension allows up to 16 guests to dine comfortably in the same room, perfect for family dinners, chef-prepared meals, and holiday gatherings.
            </p>
            <p className="text-gray-800 mb-6 max-w-4xl">
              Outside, enjoy a private hot tub, outdoor dining area, and peaceful alpine surroundings. In the winter, guests can take advantage of Kadenwood's exceptional ski-in/ski-out access via the Peak to Creek run, along with the private residents-only gondola and groomed ski trail access. In the summer, the home is a beautiful base for hiking, biking, golfing, lake days, and relaxing in one of Whistler's most exclusive communities.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-10">Inside Timber Haven</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 max-w-5xl">
              {[
                "/photos/properties/Timber Haven John Harris/01 - 20260506 A7M4 03 A1_00439-Edit.jpg",
                "/photos/properties/Timber Haven John Harris/03 - 20260506 A7M4 03 A1_00165.jpg",
                "/photos/properties/Timber Haven John Harris/20 - 20260506 A7M4 02 A1_09946.jpg",
                "/photos/properties/Timber Haven John Harris/02 - 20260506 MM4P 02 0347.jpg",
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

            <div className="bg-gray-100 p-8 rounded-xl mb-20">
              <h2 className="text-2xl font-bold mb-4">Registration details</h2>
              <p className="text-gray-800 mb-2">Municipal registration number: 00015805</p>
              <p className="text-gray-800">Provincial registration number: PM800238143</p>
            </div>
          </div>

          {(showAllPhotos || selectedPhotoIndex !== null) && (
            <div className="fixed inset-0 z-50 bg-black overflow-y-auto" onClick={closeAllPhotos}>
              <div className="sticky top-0 z-10 bg-black p-4 flex justify-between items-center">
                <h2 className="text-lg sm:text-xl text-white font-medium">Timber Haven - All Photos</h2>
                <button onClick={closeAllPhotos} className="text-white hover:text-gray-300 bg-gray-900 px-4 py-2 rounded-full">
                  Close
                </button>
              </div>
              <div className="flex justify-center items-center h-[calc(100vh-80px)] relative">
                {selectedPhotoIndex !== null && (
                  <>
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigatePhoto("prev");
                      }}
                      aria-label="Previous photo"
                    >
                      &larr;
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 z-20"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigatePhoto("next");
                      }}
                      aria-label="Next photo"
                    >
                      &rarr;
                    </button>
                    <div className="relative w-[95vw] h-[85vh]">
                      {isImageLoading && (
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                          <div className="w-12 h-12 border-4 border-gray-300 border-t-white rounded-full animate-spin" />
                        </div>
                      )}
                      <Image
                        src={photos[selectedPhotoIndex]}
                        alt={`Timber Haven full photo ${selectedPhotoIndex + 1}`}
                        fill
                        className="object-contain"
                        sizes="95vw"
                        onLoadingComplete={() => setIsImageLoading(false)}
                        quality={85}
                      />
                    </div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <p className="text-white text-sm bg-black bg-opacity-50 inline-block px-4 py-2 rounded-full">
                        {selectedPhotoIndex + 1} / {photos.length}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <button
                className="absolute top-4 right-4 text-white bg-gray-900 p-2 rounded-full hover:bg-gray-800 z-20"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedPhotoIndex(null);
                }}
                aria-label="Close full screen"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default TimberHavenKadenwood;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale || "en", ["common"])),
    },
  };
};
