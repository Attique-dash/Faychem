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

        {/* About Salt Section */}
        {/* <header
        id="about_salt"
        className="flex flex-col items-center px-4 sm:px-8 scroll-mt-24 py-12  shadow-lg relative overflow-hidden"
      >
        <div className="relative">
          <h2 className="mt-6 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
            About Salt
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="items-center mt-[2rem] sm:mt-[3rem] space-y-6">
          {[
            {
              question: "What is Rock Salt ?",
              answer:
                "Rock salt is extracted from salt rocks. The main component of rock salt also known as halite is sodium chloride formed naturally near the area of oceans. Rock salt, to be more specific, is a type of salt that formed in the ocean and then solidified into a rock.",
            },
            {
              question: "What is Sea Salt ?",
              answer:
                "Sea salt comes from the sea, after the evaporation of water. It is available normally in the bottom of the sea and on the seashore.",
            },
            {
              question: "Sea salt Vs. Rock salt ",
              answer:
                " Both rock salt and sea salt contain chemicals and minerals of nutritional importance. Rock salt sources are the salt rocks that are formed naturally near the area of oceans. While the natural source of sea salts are oceans.",
            },
            {
              question: "Taste Difference Between Sea and Rock Salt ",
              answer:
                "Rock salt and Sea salt both are Different in their taste. Rock salt is more palatable and tasteful than sea salt. Its taste is pretty good and will definitely improve your taste buds. On the other hand, sea salt would be less tasty than Rock salt due to the high amount of sodium, and the taste will be strong. Sea salt is mostly used in processed foods and ready to eat food, in which frozen items and chocolates are included.",
            },
            {
              question: "Which is Better for Nutrition ? ",
              answer:
                "Considering nutritional details is essential when choosing between rock salt and sea salt. While the mineral composition of these two salts is extremely similar. The minerals in both salts include minerals of sodium, calcium, potassium, iron and magnesium. Rock salt consists of many other minerals with sodium, that makes it healthier for everyone. Compared to rock salt, sea salt is thought to be somewhat more nutrient-rich.",
            },
            {
              question: "Himalayan pink salt ",
              answer:
                "Himalayan pink salt is one of the best known types of rock salt .Pakistan is a blessed country with lots of natural resources, in which salt mines are also included. Khewra rock salt mines are top of the list, which are near to Himalayan range of mountains. These mines produce a huge amount of pink Himalayan salt throughout the whole year. Pakistan not only fulfils the needs of its own country but the pink Himalayan salt is also exported to other countries. There are a huge amount(large numbers) of consumers for this salt not only within Pakistan, but all over the world as well. ",
            },
            {
              question: "Benefits of Rock Salt vs. Sea Salt ",
              answer:
                "Both rock salt and sea salt can be beneficial, depending on the specific needs and preferences of the individual. Rock salt is a great option for those who are looking for an aƯordable, versatile salt for everyday use, while sea salt is a good choice for those who are looking for a more flavorful as compared to healthy alternative. ",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105  border border-purple-100"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className={`transition-all duration-500 ${hoveredItem === index ? "translate-x-2" : ""}`}
              >
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-600 leading-relaxed hover:text-gray-700 transition-colors duration-300">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </header>*/}
      </section>
    </div>
  );
};

export default Collection;
