"use client";

import React, { useState } from "react";
import dynamic from 'next/dynamic';
import AboutSection from "./collection/AboutSection";
const IndustriesWeServe = dynamic(() => import('./collection/IndustriesWeServe'));
const ProductsSection = dynamic(() => import('./collection/ProductsSection'));
const WhyChooseUs = dynamic(() => import('./collection/WhyChooseUs'));
const ContactSection = dynamic(() => import('./collection/ContactSection'));

const Collection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="w-full">
      <section className=" w-auto pt-8 relative overflow-hidden">

        {/* About Us Section */}
        <AboutSection />

        {/* Industries We Serve Section */}
        <IndustriesWeServe />

        {/* Products Section */}
        <ProductsSection />

        {/* Why Choose Us Section */}
        <WhyChooseUs />

        {/* Get a Quote Section */}
        <ContactSection />

        {/* Related Videos Section */}
        <div className="mt-12 mb-8 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--black)]">
              Explore More About Himalayan Salt
            </h2>
          </div>

          <div className="w-full mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* First video with responsive container */}
            <div className="w-full relative pt-[56.25%] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9nWLNzZGOYA?rel=0&enablejsapi=1&autoplay=0&mute=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Second video with responsive container */}
            <div className="w-full relative pt-[56.25%] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/h23rF0xrhTE?rel=0&enablejsapi=1&autoplay=0&mute=0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
