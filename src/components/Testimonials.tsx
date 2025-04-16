import React, { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Card from "./Card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Marissa Charles",
      role: "Guest",
      text: "We had an incredible experience staying at the home! Everything was coordinated perfectly. They got us extra gondola badges and stocked all our groceries and responded very quickly to our requests. I could not recommend the company and the house more highly!",
      date: "20 Mar 2024",
      hasImage: false,
    },
    {
      name: "Zain Rasul",
      role: "Guest",
      text: "Had a great stay here, we were able to have a private chef and bartender assist at the home with dinners and drinks, will definitely be back in the future!",
      date: "48 weeks ago",
      hasImage: false,
    },
    {
      name: "Karen Thompson",
      role: "Guest",
      text: "We enjoyed our stay at this beautiful home in Whistler! Our family was well taken care of by Ben and his AceHost team. Ben's professionalism and attention to detail ensured our family could focus on spending time together and not worrying about the many details of a family holiday. Ben made recommendations and reservations to wonderful restaurants, the spa and other interesting places to go. We strongly recommend AceHost to anyone who wants to enjoy a fun holiday with an attentive concierge that can plan an exceptional experience for you.",
      date: "50 weeks ago",
      hasImage: false,
    },
    {
      name: "Isabel Salgar",
      role: "Guest",
      text: "I would not think twice about using this fantastic group. The concierge service is amazing! They literally take care of everything!!! The group is very professional and super diligent. Always available. They helped us with, car rentals, restaurant reservations, meals at the house, literally anything can think of! They even sat a table for us at Apres skiing while we got there! Never experienced such a professional group before and we rent worldwide. Don't miss out on this amazing group at Whistler.",
      date: "52 weeks ago",
      hasImage: false,
    },
    {
      name: "Andres Posada",
      role: "Guest",
      text: "The team is awesome. Went above and beyond to make our stay incredible.",
      date: "10 Apr 2024",
      hasImage: false,
    },
    {
      name: "Brad Schwartzberg",
      role: "Guest",
      text: "We just returned from a wonderful family vacation in Whistler. We stayed at Chalet La Forja in Kadenwood. The property was magnificent, but as nice as the property was (and it was fantastic), the "around-the-clock" service provided by AceHost was even better. The house was meticulously maintained and the AceHost team (Ben, Sally, Max and Hannah) were extraordinary hosts. There was literally not one single thing that we asked for that they did not provide.",
      date: "35 weeks ago",
      hasImage: false,
    },
    {
      name: "Saul Kahn",
      role: "Property Owner",
      text: "AceHost has done a great job managing my Whistler rentals for the past two years. I would recommend them to anyone needing rental management in the Whistler area.",
      date: "38 weeks ago",
      hasImage: false,
    },
    {
      name: "Courtney Holliday",
      role: "Guest",
      text: "My husband and I recently booked a home in Kadenwood for our friends and family to enjoy a vacation getaway and WOW!!!! The home was absolutely stunning! So cozy and beautiful, with unbelievable views. But, AceHost was the star of the show! We all had such an amazing experience and truly felt like we were in the best of hands. Everyone was so incredibly helpful then entire time.",
      date: "7 weeks ago",
      hasImage: false,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const reviewsToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3
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
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-gray-50 to-gray-100"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header - Apple-inspired minimalist design */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-6">
            What People Say
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-light">
            Hear from our guests and property owners
          </p>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-all duration-700 ease-out"
              style={{
                transform: `translateX(-${
                  currentIndex * (100 / reviewsToShow.desktop)
                }%)`,
              }}
            >
              {testimonials.map((review, index) => (
                <div
                  key={`${review.name}-${index}`}
                  className="w-full min-w-full md:w-1/2 md:min-w-[50%] lg:w-1/3 lg:min-w-[33.333%] px-4"
                >
                  <Card className="bg-white p-8 h-full shadow-sm hover:shadow-md transition-shadow duration-500 rounded-2xl border border-gray-100">
                    <div className="flex flex-col h-full">
                      {/* Star Rating - Apple-style clean rating */}
                      <div className="mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="inline-block mr-1 fill-yellow-500 text-yellow-500"
                            strokeWidth={1.5}
                          />
                        ))}
                        <span className="text-xs text-gray-400 ml-2">
                          {review.date}
                        </span>
                      </div>

                      {/* Review Text - Clean typography */}
                      <blockquote className="flex-grow mb-6">
                        <p className="text-gray-600 leading-relaxed text-base font-light">
                          "{review.text}"
                        </p>
                      </blockquote>

                      {/* Reviewer Info - Minimal, elegant design */}
                      <div className="flex items-center mt-auto pt-4 border-t border-gray-100">
                        <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center mr-3">
                          <span className="text-base font-medium text-gray-600">
                            {review.name[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-sm text-gray-900">
                            {review.name}
                          </p>
                          <p className="text-xs text-gray-500">{review.role}</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Minimalist Apple-style */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:translate-x-0 bg-white w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-0 bg-white w-10 h-10 rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Google Review Link - Apple-style button */}
        <div className="text-center mt-14">
          <a
            href="https://g.co/kgs/EjNxVSa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white text-sm font-medium rounded-full hover:bg-black transition-colors duration-300"
          >
            Read more reviews on Google
            <svg
              className="w-4 h-4"
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
