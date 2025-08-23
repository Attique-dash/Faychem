"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Pink1 from "@/images/DarkPink1.jpeg";
import Pink2 from "@/images/DarkPink2.jpeg";
import Pink3 from "@/images/DarkPink3.jpeg";
import Pink4 from "@/images/DarkPink4.jpeg";
import Pink5 from "@/images/DarkPink5.jpeg";

const saltTypes = [
  {
    name: "Himalayan Pink Salt",
    images: [
      { 
        src: Pink1, 
        label: "Pink Salt 1-2mm",
        description: "Fine granules perfect for everyday seasoning"
      },
      { 
        src: Pink2, 
        label: "Pink Salt 2-5mm",
        description: "Medium crystals ideal for cooking and grilling"
      },
      { 
        src: Pink3, 
        label: "Pink Salt Fine 0.2-0.8mm",
        description: "Ultra-fine powder for delicate dishes"
      },
      { 
        src: Pink4, 
        label: "Pink Salt Powder",
        description: "Powdered form perfect for baking and seasoning blends"
      },
      { 
        src: Pink5, 
        label: "Pink Salt Large Crystals",
        description: "Coarse crystals perfect for finishing and presentation"
      },
    ],
    description:
      "Himalayan Pink Salt is a pure, hand-mined salt that comes from ancient sea salt deposits in the Himalayan mountains. It contains 84 trace minerals and elements, giving it its distinctive pink color. This salt is known for its health benefits and is used in cooking, spa treatments, and decorative purposes.",
    benefits: [
      "Contains 84 essential trace minerals and elements",
      "Rich in iron oxide giving distinctive pink color",
      "Lower sodium content than regular table salt",
      "Supports respiratory health when used in salt therapy",
      "Improves skin health and appearance"
    ],
    applications: [
      "Gourmet cooking and seasoning",
      "Salt therapy and spa treatments",
      "Decorative salt lamps and blocks",
      "Bath salts and body scrubs",
    ]
  },
];

const PinkSalt = () => {
  const [currentImage, setCurrentImage] = useState(saltTypes.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const componentRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-slide functionality
  useEffect(() => {
    if (!isPaused && saltTypes[0].images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => {
          const updated = [...prev];
          updated[0] = (prev[0] + 1) % saltTypes[0].images.length;
          return updated;
        });
      }, 5000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isPaused]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentElement = componentRef.current; // ✅ snapshot once

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ✅ always refers to the same element
      }
    };
  }, []);

  const handleNext = (index) => {
    setCurrentImage((prev) => {
      const updated = [...prev];
      updated[index] = (prev[index] + 1) % saltTypes[index].images.length;
      return updated;
    });
  };

  const handlePrev = (index) => {
    setCurrentImage((prev) => {
      const updated = [...prev];
      updated[index] = (prev[index] - 1 + saltTypes[index].images.length) % saltTypes[index].images.length;
      return updated;
    });
  };

  const handleDotClick = (saltIndex, imageIndex) => {
    setCurrentImage((prev) => {
      const updated = [...prev];
      updated[saltIndex] = imageIndex;
      return updated;
    });
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="md:pl-[190px] lg:mt-[30px] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-100 to-gray-100 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-20 h-20 bg-gradient-to-r from-gray-100 to-purple-200 rounded-full opacity-30 animate-bounce delay-300"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-50 to-gray-100 rounded-full opacity-10 animate-ping delay-500"></div>

      {saltTypes.map((salt, index) => (
        <div 
          key={salt.name} 
          ref={componentRef}
          className={`mb-[2rem] mt-[6rem] md:mt-[4rem] text-center transition-all duration-1000 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {/* Enhanced Header */}
          <div className="mb-8 md:mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-gray-500 rounded-full animate-pulse"></div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
                {salt.name}
              </h2>
              <div className="w-3 h-3 bg-gradient-to-r from-gray-500 to-purple-400 rounded-full animate-pulse delay-300"></div>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-gray-500 mx-auto rounded-full"></div>
          </div>

          {/* Enhanced Image Carousel */}
          <div 
            className={`relative flex items-center md:pl-24 md:pr-12 px-[10px] sm:px-0 justify-center mt-8 sm:mt-4 transition-all duration-1000 delay-300 transform ${
              isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative group mx-auto w-[600px] max-w-full">
              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl bg-white p-2">
                {/* Navigation Buttons - Only show if more than 1 image */}
                {salt.images.length > 1 && (
                  <>
                    <button
                      className="absolute top-1/2 -translate-y-1/2 left-4 z-20 w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 flex items-center justify-center"
                      onClick={() => handlePrev(index)}
                      aria-label="Previous image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                      </svg>
                    </button>

                    <button
                      className="absolute top-1/2 -translate-y-1/2 right-4 z-20 w-12 h-12 bg-white bg-opacity-90 backdrop-blur-sm text-gray-700 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-110 active:scale-95 flex items-center justify-center"
                      onClick={() => handleNext(index)}
                      aria-label="Next image"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  </>
                )}

                {/* Image Container */}
                <div className="relative overflow-hidden rounded-xl">
                  <Image
                    src={salt.images[currentImage[index]].src}
                    alt={`${salt.name} - ${salt.images[currentImage[index]].label}`}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover transform transition-all duration-500 ease-out group-hover:scale-105"
                    onLoad={() => setIsImageLoaded(true)}
                    priority
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                </div>

                {/* Enhanced Image Label */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-lg p-3 shadow-lg transform transition-all duration-300 hover:bg-opacity-100">
                    <p className="text-purple-600 font-semibold text-sm sm:text-base text-center">
                      {salt.images[currentImage[index]].label}
                    </p>
                  </div>
                </div>

                {/* Loading Indicator */}
                {!isImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-xl">
                    <div className="w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
              </div>

              {/* Dot Indicators - Only show if more than 1 image */}
              {salt.images.length > 1 && (
                <div className="flex justify-center gap-3 mt-6">
                  {salt.images.map((_, imageIndex) => (
                    <button
                      key={imageIndex}
                      onClick={() => handleDotClick(index, imageIndex)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 transform hover:scale-125 ${
                        currentImage[index] === imageIndex
                          ? 'bg-gradient-to-r from-purple-500 to-gray-500 shadow-lg scale-125'
                          : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to image ${imageIndex + 1}`}
                    />
                  ))}
                </div>
              )}

              {/* Progress Bar - Only show if more than 1 image */}
              {salt.images.length > 1 && (
                <div className="mt-4 w-full bg-gray-200 rounded-full h-1 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-gray-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentImage[index] + 1) / salt.images.length) * 100}%` }}
                  ></div>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced Description Section */}
          <div className={`max-w-6xl mx-auto mt-12 px-3 md:px-8 transition-all duration-1000 delay-500 transform ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            {/* Main Description */}
            <div className="bg-gradient-to-br lg:ml-[20px] from-white to-purple-50 rounded-2xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-start gap-4 mb-6">
                <div>
                <div className="w-12 h-12 justify-self-center mb-[20px] bg-gradient-to-r from-purple-500 to-gray-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">About This Product</h3>
                  <p className="text-gray-700 text-lg leading-relaxed text-justify">
                    {salt.description}
                  </p>
                </div>
              </div>

              {/* Content Grid */}
              <div className="mt-8 grid md:grid-cols-2 gap-8">
                {/* Benefits Section */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Key Benefits
                  </h4>
                  <ul className="space-y-3 text-left">
                    {salt.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-700">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-gray-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications Section */}
                <div>
                  <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                    Applications
                  </h4>
                  <div className="grid gap-3">
                    {salt.applications.map((application, idx) => (
                      <div 
                        key={idx}
                        className="p-3 rounded-lg border-2 border-purple-200 bg-white hover:border-gray-300 hover:shadow-sm transition-all duration-300 transform hover:scale-105"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-gray-500 rounded-full"></div>
                          <span className="font-medium text-gray-800 text-sm">
                            {application}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Variants - Only show if more than 1 image */}
              {salt.images.length > 1 && (
                <div className="mt-8">
                  <h4 className="text-lg font-semibold text-purple-600 mb-4 flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                    Available Variants
                  </h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    {salt.images.map((image, idx) => (
                      <div 
                        key={idx}
                        className={`p-4 rounded-lg border-2 transition-all duration-300 cursor-pointer transform hover:scale-105 ${
                          currentImage[index] === idx 
                            ? 'border-purple-500 bg-gray-50 shadow-md' 
                            : 'border-gray-200 bg-white hover:border-purple-300 hover:shadow-sm'
                        }`}
                        onClick={() => handleDotClick(index, idx)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full ${
                            currentImage[index] === idx ? 'bg-purple-500' : 'bg-gray-300'
                          }`}></div>
                          <div>
                            <span className="font-semibold text-gray-800">
                              {image.label}
                            </span>
                            <p className="text-sm text-gray-600 mt-1">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default PinkSalt;