"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import { YouTubeEmbed } from "@next/third-parties/google";
import AboutSection from "./collection/AboutSection";

const IndustriesWeServe = dynamic(
  () => import("./collection/IndustriesWeServe"),
);
const ProductsSection = dynamic(() => import("./collection/ProductsSection"));
const WhyChooseUs = dynamic(() => import("./collection/WhyChooseUs"));
const ContactSection = dynamic(() => import("./collection/ContactSection"));

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

        {/* Related Videos Section - OPTIMIZED */}
        <div className="mt-12 mb-8 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="mb-4 text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--black)]">
              Explore More About Himalayan Salt
            </h2>
          </div>

          <div className="w-full mt-8 sm:mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 max-w-7xl mx-auto">
            {/* First video - Optimized with YouTubeEmbed */}
            <div className="w-full rounded-xl sm:rounded-3xl overflow-hidden shadow-lg">
              <YouTubeEmbed
                videoid="9nWLNzZGOYA"
                params="rel=0"
                style="border-radius: 1.5rem;"
              />
            </div>

            {/* Second video - Optimized with YouTubeEmbed */}
            <div className="w-full rounded-xl sm:rounded-3xl overflow-hidden shadow-lg">
              <YouTubeEmbed
                videoid="h23rF0xrhTE"
                params="rel=0"
                style="border-radius: 1.5rem;"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collection;
