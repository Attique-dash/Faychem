"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import VanillaTilt from "vanilla-tilt";

// Import images for each card
import lamp1 from "@/images/Lamp_1.jpeg";
import lamp2 from "@/images/Lamp_2.jpeg";
import lamp3 from "@/images/Lamp_3.jpeg";
import lamp4 from "@/images/Lamp_4.jpeg";
import lamp5 from "@/images/Lamp_5.jpeg";

import cand1 from "@/images/Candel_1.jpeg";
import cand2 from "@/images/Candel_2.jpeg";
import cand3 from "@/images/Candel_3.jpeg";
import cand4 from "@/images/Candel_4.jpeg";
import cand5 from "@/images/Candel_5.jpeg";

import calr1 from "@/images/Calr_1.jpeg";
import calr2 from "@/images/Calr_2.jpeg";
import calr3 from "@/images/Calr_3.jpeg";
import calr4 from "@/images/Calr_4.png";
import calr5 from "@/images/Calr_5.png";

import arom1 from "@/images/Aromatherapy_1.png";
import arom2 from "@/images/Aromatherapy_2.png";
import arom3 from "@/images/Aromatherapy_3.png";
import arom4 from "@/images/Aromatherapy_4.png";
import arom5 from "@/images/Aromatherapy_5.png";

import home1 from "@/images/HomeDec_1.jpeg";
import home2 from "@/images/HomeDec_2.jpeg";
import home3 from "@/images/HomeDec_3.jpeg";
import home4 from "@/images/HomeDec_4.jpeg";
import home5 from "@/images/HomeDec_5.png";

import lick1 from "@/images/Lick_1.png";
import lick2 from "@/images/Lick_2.png";
import lick3 from "@/images/Lick_3.png";
import lick4 from "@/images/Lick_4.png";
import lick5 from "@/images/Lick_5.png";

import pyra1 from "@/images/Pyramid_1.jpeg";
import pyra2 from "@/images/Pyramid_2.jpeg";
import pyra3 from "@/images/Pyramid_3.png";
import pyra4 from "@/images/Pyramid_4.png";
import pyra5 from "@/images/Pyramid_5.png";

import tree1 from "@/images/Tree_1.jpeg";
import tree2 from "@/images/Tree_2.jpeg";
import tree3 from "@/images/Tree_3.png";
import tree4 from "@/images/Tree_4.png";
import tree5 from "@/images/Tree_5.png";

import glob1 from "@/images/Globe_1.jpeg";
import glob2 from "@/images/Globe_2.jpeg";
import glob3 from "@/images/Globe_3.jpeg";
import glob4 from "@/images/Globe_4.jpeg";
import glob5 from "@/images/Globe_5.jpeg";

import craf1 from "@/images/Crafted_1.jpeg";
import craf2 from "@/images/Crafted_2.jpeg";
import craf3 from "@/images/Crafted_3.jpeg";
import craf4 from "@/images/Crafted_4.jpeg";
import craf5 from "@/images/Crafted_5.jpeg";

const cardImages = {
  1: [lamp1, lamp2, lamp3, lamp4, lamp5],
  2: [cand1, cand2, cand3, cand4, cand5],
  3: [calr1, calr2, calr3, calr4, calr5],
  4: [arom1, arom2, arom3, arom4, arom5],
  5: [home1, home2, home3, home4, home5],
  6: [lick1, lick2, lick3, lick4, lick5],
  7: [pyra1, pyra2, pyra3, pyra4, pyra5],
  8: [tree1, tree2, tree3, tree4, tree5],
  9: [glob1, glob2, glob3, glob4, glob5],
  10: [craf1, craf2, craf3, craf4, craf5],
};

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState({});
  const [imageLoading, setImageLoading] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const tiltElements = useRef([]);

  useEffect(() => {
    // Initialize currentIndex for each card to zero
    const initialIndex = {};
    const initialLoading = {};
    Object.keys(cardImages).forEach((id) => {
      initialIndex[id] = 0;
      initialLoading[id] = false;
    });
    setCurrentIndex(initialIndex);
    setImageLoading(initialLoading);
  }, []);

  useEffect(() => {
    // Store the current value of tiltElements.current
    const elements = tiltElements.current.filter(Boolean);
  
    // Initialize VanillaTilt with enhanced settings
    elements.forEach((el) => {
      if (el && !el.vanillaTilt) {
        VanillaTilt.init(el, {
          max: 15,
          speed: 800,
          glare: true,
          "max-glare": 0.3,
          perspective: 1000,
          scale: 1.02,
          gyroscope: true,
          "full-page-listening": false,
          "mouse-event-element": null,
          reset: true,
          "reset-to-start": false,
        });
      }
    });
  
    // Cleanup on unmount
    return () => {
      elements.forEach((el) => {
        if (el && el.vanillaTilt) {
          el.vanillaTilt.destroy();
        }
      });
    };
  }, []);

  const handleNext = (id) => {
    setImageLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const imagesArray = cardImages[id];
        const newIndex = (prev[id] + 1) % imagesArray.length;
        return { ...prev, [id]: newIndex };
      });
      setImageLoading(prev => ({ ...prev, [id]: false }));
    }, 150);
  };

  const handlePrev = (id) => {
    setImageLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCurrentIndex((prev) => {
        const imagesArray = cardImages[id];
        const newIndex = (prev[id] - 1 + imagesArray.length) % imagesArray.length;
        return { ...prev, [id]: newIndex };
      });
      setImageLoading(prev => ({ ...prev, [id]: false }));
    }, 150);
  };

  const handleDotClick = (id, index) => {
    setImageLoading(prev => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setCurrentIndex(prev => ({ ...prev, [id]: index }));
      setImageLoading(prev => ({ ...prev, [id]: false }));
    }, 150);
  };

  const products = [
    { 
      id: 1, 
      heading: "Salt Lamps", 
      text: "Himalayan salt lamps emitting a warm amber glow, creating calm spaces while purifying the air naturally.",
    },
    { 
      id: 2, 
      heading: "Salt Candle Holders", 
      text: "Hand-carved salt crystal holders that enrich candlelight with elegance, warmth, and natural therapeutic properties.",
    },
    { 
      id: 3, 
      heading: "Salt Culinary", 
      text: "Premium edible salts for gourmet dishes, enhancing flavor with natural minerals and distinctive culinary richness.",
    },
    { 
      id: 4, 
      heading: "Aromatherapy", 
      text: "Therapeutic salt products with essential oils, crafted for spa rituals, relaxation, and holistic wellness experiences.",
    },
    { 
      id: 5, 
      heading: "Home Décor", 
      text: "Artistic salt sculptures and decorative items that bring beauty, balance, and positive energy into modern living spaces.",
    },
    { 
      id: 6, 
      heading: "Animal Lick Salt", 
      text: "Natural mineral salt blocks for animals, supplying vital nutrients that support growth, strength, and well-being.",
    },
    { 
      id: 7, 
      heading: "Pyramid Salt", 
      text: "Unique pyramid-shaped salt crystals, admired as finishing salts in gourmet dining and modern culinary presentations.",
    },
    { 
      id: 8, 
      heading: "Salt Tree", 
      text: "Decorative salt formations shaped like trees, symbolizing growth, strength, and harmony with natural earth elements.",
    },
    { 
      id: 9, 
      heading: "Globe Salt", 
      text: "Spherical salt pieces from ancient deposits, symbolizing global unity and the timeless natural purity of the Earth.",
    },
    { 
      id: 10, 
      heading: "Crafted Items", 
      text: "Handmade salt bowls, vases, and ornaments designed for luxury décor, wellness spaces, and elegant spa settings.",
    },    
  ];

  return (
    <div className="w-full flex flex-col lg:pl-[265px] md:pl-[245px] lg:pt-[25px] bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      {/* Enhanced Header */}
      <div className="w-11/12 mx-auto text-center mt-[6.5rem] md:mt-[1.5rem] mb-[40px]">
        <h1 className="text-4xl sm:mt-[30px] lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent mb-4">
          Customized Shapes
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Discover our premium collection of handcrafted salt products, each designed to enhance your lifestyle with natural beauty and therapeutic benefits.
        </p>
      </div>

      <div className="p-8">
        <section className="flex flex-wrap justify-center items-stretch gap-6">
          {products.map((product) => {
            const imageList = cardImages[product.id];
            const index = currentIndex[product.id] || 0;
            const currentImage = imageList[index];
            const isLoading = imageLoading[product.id];
            const isHovered = hoveredCard === product.id;
            
            return (
              <div
                key={product.id}
                ref={(el) => (tiltElements.current[product.id] = el)}
                className={`
                  bg-white p-6 rounded-2xl shadow-lg w-full sm:w-[calc(100%-24px)] 
                  md:w-[calc(50%-24px)] lg:w-[calc(33.333%-24px)] 
                  h-[420px] flex flex-col justify-between
                  transition-all duration-500 ease-out transform hover:scale-[1.03]
                  border-2 border-transparent hover:border-blue-300
                  hover:shadow-2xl hover:shadow-blue-500/20
                  cursor-pointer group overflow-hidden
                  ${isHovered ? 'ring-4 ring-blue-200' : ''}
                `}
                onMouseEnter={() => setHoveredCard(product.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Image Container with Enhanced Navigation */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  {/* Loading Overlay */}
                  {isLoading && (
                    <div className="absolute inset-0 bg-white/80 flex items-center justify-center z-20">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
                    </div>
                  )}
                  
                                     {/* Main Image */}
                   <div className={`transition-opacity duration-300 w-full h-full ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
                     <Image 
                       src={currentImage} 
                       alt={product.heading} 
                       fill
                       className="rounded-xl object-cover transition-transform duration-700 group-hover:scale-110 object-center" 
                     />
                   </div>
                  
                  {/* Enhanced Navigation Buttons */}
                  <button
                    onClick={() => handlePrev(product.id)}
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 
                             bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full 
                             hover:bg-blue-500 hover:text-white transition-all duration-300
                             shadow-lg hover:shadow-xl hover:scale-110
                             opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={() => handleNext(product.id)}
                    className="absolute top-1/2 right-3 transform -translate-y-1/2 
                             bg-white/90 backdrop-blur-sm text-gray-700 p-3 rounded-full 
                             hover:bg-blue-500 hover:text-white transition-all duration-300
                             shadow-lg hover:shadow-xl hover:scale-110
                             opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Image Indicator Dots */}
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {imageList.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleDotClick(product.id, idx)}
                        className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                          idx === index 
                            ? 'bg-blue-500 scale-125' 
                            : 'bg-white/60 hover:bg-white/80 hover:scale-110'
                        }`}
                      />
                    ))}
                  </div>
                  
              
                </div>
                
                {/* Enhanced Content */}
                <div className="mt-6 text-center flex-grow">
                  <div className="flex mb-3">
                    <span className="text-2xl mr-3">{product.icon}</span>
                    <h2 className="text-xl font-bold text-center text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {product.heading}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-center sm:text-left text-sm leading-relaxed">
                    {product.text}
                  </p>
                </div>
                
              </div>
            );
          })}
        </section>
      </div>
      
      {/* Enhanced Footer Message */}
      <div className="text-center mt-12 mb-8 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Custom Solutions Available
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Any shape, size, or design can be customized according to your specific requirements. 
              Our master craftsmen work with you to create unique salt products that perfectly match your vision.
            </p>
            <div className="flex justify-center mt-6 space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full sm:mr-2"></span>
                Custom Shapes
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full sm:mr-2"></span>
                Any Size
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full sm:mr-2"></span>
                Premium Quality
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;