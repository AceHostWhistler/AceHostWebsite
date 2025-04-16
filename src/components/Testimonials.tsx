import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Mountain } from "lucide-react";
import Image from "next/image";
import Card from "./Card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Whistler Guest",
      text: "Our stay at AceHost's Kadenwood property was absolutely phenomenal. The views were breathtaking, and the concierge service went above and beyond. It truly felt like a luxury retreat with all the comforts of home.",
      image: "/photos/reviews/guest1.jpg",
      hasImage: false,
    },
    {
      name: "Michael Chen",
      role: "Property Owner",
      text: "As a property owner in Whistler, I've been incredibly impressed with AceHost's management services. They've maximized my rental income while keeping my property in pristine condition. Their communication is excellent and I always feel my investment is in good hands.",
      image: "/photos/reviews/guest2.jpg",
      hasImage: false,
    },
    {
      name: "Emily Rodriguez",
      role: "Family Vacation",
      text: "We booked a luxury chalet through AceHost for our family ski vacation and it exceeded all expectations. The ski-in/ski-out access was perfect, and their local recommendations made our trip unforgettable. We'll definitely be returning next season!",
      image: "/photos/reviews/guest3.jpg",
      hasImage: false,
    },
    {
      name: "James Wilson",
      role: "Corporate Retreat",
      text: "AceHost arranged everything for our executive team retreat in Whistler. From private chef services to exclusive activities, every detail was perfectly executed. The property itself was stunning and provided the ideal setting for both work and relaxation.",
      hasImage: false,
    },
    {
      name: "Alexandra Meyer",
      role: "Luxury Traveler",
      text: "I've stayed in luxury accommodations worldwide, and AceHost's properties in Whistler rank among the very best. The attention to detail, premium amenities, and personalized service create an unmatched experience. Their concierge team is exceptional.",
      hasImage: false,
    },
    {
      name: "David Thompson",
      role: "Verified Guest",
      text: "Ben and his team at AceHost provided exceptional service throughout our stay. From helping arrange transportation to recommending the best restaurants and activities, they truly made our Whistler vacation special. The property was immaculate and exactly as advertised.",
      hasImage: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  };

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      return nextIndex >= testimonials.length - (reviewsToShow.desktop - 1)
        ? 0
        : nextIndex;
    });
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length - reviewsToShow.desktop
        : prevIndex - 1
    );
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      handleNext();
    }, 8000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying, handleNext]);

  return (
    <section className="py-16 px-5 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background mountain pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('/texture/noise.png')] opacity-8" />
        <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/4">
          <Mountain className="w-96 h-96 text-gray-800 opacity-10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Guest Experiences
          </h2>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-16 bg-yellow-500" />
            <p className="text-lg text-gray-600">What Our Guests Say</p>
            <div className="h-px w-16 bg-yellow-500" />
          </div>
          <div className="flex justify-center items-center gap-2 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-500 text-yellow-500"
              />
            ))}
            <span className="ml-2 text-xl font-semibold">5.0</span>
          </div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
                transition: "transform 2s ease-in-out",
              }}
            >
              {testimonials.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <Card className="bg-white p-8 h-full shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg border border-gray-100">
                    <div className="flex flex-col h-full">
                      {/* Star Rating */}
                      <div className="mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-yellow-500 text-yellow-500 inline-block mr-1"
                          />
                        ))}
                      </div>

                      {/* Review Text */}
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-600 leading-relaxed">
                          &ldquo;{review.text}&rdquo;
                        </p>
                      </blockquote>

                      {/* Reviewer Info */}
                      <div className="flex items-center">
                        {review.hasImage && review.image ? (
                          <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                            <Image
                              src={review.image}
                              alt={review.name}
                              width={48}
                              height={48}
                              className="object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mr-4">
                            <span className="text-xl font-semibold text-gray-500">
                              {review.name[0]}
                            </span>
                          </div>
                        )}
                        <div>
                          <p className="font-semibold">{review.name}</p>
                          <p className="text-sm text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-0 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Google Review Link */}
        <div className="text-center mt-12">
          <a
            href="https://g.co/kgs/EjNxVSa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
          >
            See all reviews on Google
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
