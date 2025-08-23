"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import Black from "@/images/Black Salt.jpeg";
import Pink from "@/images/pink.jpeg";
import White from "@/images/white.jpeg";
import aboImg from "@/images/salt2.png";
import minImg from "@/images/stock.jpg";
import custa1 from "@/images/Lamp_1.jpeg";
import custa2 from "@/images/Globe_1.jpeg";
import custa3 from "@/images/Candel_1.jpeg";



const Collection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section className="md:pl-[190px] lg:mt-[70px] bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* About Us Section */}
      <header id="about" className="mb-[60px] flex flex-col items-center text-center px-4 sm:px-8 pt-[80px] md:pt-[40px]">
        <div className="relative">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl animate-fade-in">
            ABOUT US
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-[1rem] sm:mt-[2rem] lg:mt-[3rem] bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
          <p className="text-justify text-lg sm:p-0 w-full lg:w-[100%] text-gray-600 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px] leading-relaxed">
            <span className="font-bold text-blue-500 text-xl">FAYCHEM</span>
            &nbsp;specializes in general trade services, concentrating on natural rock salt. We source the finest salt from Pakistan and export it in various forms, including powdered, grains, decorative, and customized possibilities, to meet the diverse needs of our clients. Committed to quality and customer satisfaction, our devoted staff provides hassle-free and reliable assistance, developing assurance and improving our valued clients experiences.
          </p>

          <div className="relative rounded-2xl overflow-hidden sm:ml-[45px] mt-6 sm:mt-0 md:hidden lg:block shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10"></div>
            <Image
              src={aboImg}
              alt="salt image"
              width={700}
              height={350}
              className="lg:w-[700px] lg:h-[350px] h-[280px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </header>

      {/* Mission Section */}
      <header id="mission" className="mt-6 flex flex-col pt-[5px] md:pt-[15px] items-center lg:pt-[25px] text-center px-4 sm:px-8">
        <div className="relative">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl">
            MISSION
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>

        <div className="flex flex-col sm:flex-row items-center mt-[1rem] lg:mt-[3.6rem] sm:mt-[3rem] bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
          <p className="text-justify text-lg sm:p-0 w-full text-gray-600 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px] leading-relaxed">
            Our mission is to provide the purest form of salt, directly sourced from&nbsp;
            <span className="font-bold text-indigo-500 text-xl">KHEWRA SALT MINE</span> (Punjab, Pakistan) and minimally processed, to meet quality and purity standards. We dedicate ourselves to providing reliable and sustainable salt solutions to the culinary, industrial, and agricultural sectors. We aspire to meet our clients expectations, contribute to their success, and help to create a healthier, more sustainable world by cultivating innovation and ethical conduct.
          </p>

          <div className="relative rounded-2xl overflow-hidden sm:ml-[45px] mt-6 sm:mt-0 md:hidden lg:block shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10"></div>
            <Image
              src={minImg}
              alt="salt mine image"
              width={700}
              height={300}
              className="lg:w-[700px] lg:h-[300px] h-[220px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>
        </div>
      </header>

      {/* About Salt Section */}
      <header id="about_salt" className="mt-[5.5rem] mb-[20px] pt-[25px] md:pt-[15px] lg:pt-[25px] flex flex-col items-center px-4 md:pr-[2rem] lg:pl-[5.8rem] md:pl-[4.8rem]">
        <div className="relative">
          <h2 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
            About Salt
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="items-center mt-[2rem] sm:mt-[3rem] space-y-6">
          {[
            { question: "What is Rock Salt ?", answer: "Rock salt is extracted from salt rocks. The main component of rock salt also known as halite is sodium chloride formed naturally near the area of oceans. Rock salt, to be more specific, is a type of salt that formed in the ocean and then solidified into a rock." },
            { question: "What is Sea Salt ?", answer: "Sea salt comes from the sea, after the evaporation of water. It is available normally in the bottom of the sea and on the seashore." },
            { question: "Sea salt Vs. Rock salt ", answer: " Both rock salt and sea salt contain chemicals and minerals of nutritional importance. Rock salt sources are the salt rocks that are formed naturally near the area of oceans. While the natural source of sea salts are oceans." },
            { question: "Taste Difference Between Sea and Rock Salt ", answer: "Rock salt and Sea salt both are Different in their taste. Rock salt is more palatable and tasteful than sea salt. Its taste is pretty good and will definitely improve your taste buds. On the other hand, sea salt would be less tasty than Rock salt due to the high amount of sodium, and the taste will be strong. Sea salt is mostly used in processed foods and ready to eat food, in which frozen items and chocolates are included." },
            { question: "Which is Better for Nutrition ? ", answer: "Considering nutritional details is essential when choosing between rock salt and sea salt. While the mineral composition of these two salts is extremely similar. The minerals in both salts include minerals of sodium, calcium, potassium, iron and magnesium. Rock salt consists of many other minerals with sodium, that makes it healthier for everyone. Compared to rock salt, sea salt is thought to be somewhat more nutrient-rich." },
            { question: "Himalayan pink salt ", answer: "Himalayan pink salt is one of the best known types of rock salt .Pakistan is a blessed country with lots of natural resources, in which salt mines are also included. Khewra rock salt mines are top of the list, which are near to Himalayan range of mountains. These mines produce a huge amount of pink Himalayan salt throughout the whole year. Pakistan not only fulfils the needs of its own country but the pink Himalayan salt is also exported to other countries. There are a huge amount(large numbers) of consumers for this salt not only within Pakistan, but all over the world as well. " },
            { question: "Benefits of Rock Salt vs. Sea Salt ", answer: "Both rock salt and sea salt can be beneficial, depending on the specific needs and preferences of the individual. Rock salt is a great option for those who are looking for an aƯordable, versatile salt for everyday use, while sea salt is a good choice for those who are looking for a more flavorful as compared to healthy alternative. " },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-1 border border-purple-100"
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className={`transition-all duration-500 ${hoveredItem === index ? 'translate-x-2' : ''}`}>
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
      </header>

      {/* Products Section */}
      <div id="categories" className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="relative">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent sm:text-4xl mb-4">
            Products
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
        </div>

        <p className="mx-auto mt-6 max-w-md text-gray-600 text-center text-lg">
          Discover exquisite Specialty Salts—Himalayan Pink, Black, and White...
        </p>

        <div className="mt-[3rem] grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 md:pl-[50px]">
          {[
            { id: "salt-b", src: Black, alt: "Black Salt", label: "Black Salt", content: "Mineral-rich rock salt with a distinctive smoky flavor, commonly used in South Asian cuisine.", href: "/black-salt", color: "from-gray-600 to-black" },
            { id: "salt-w", src: White, alt: "White Salt", label: "White Salt", content: "Pure, crystalline salt that enhances flavor and is essential in culinary applications.", href: "/white-salt", color: "from-blue-400 to-blue-600" },
            { id: "salt-p", src: Pink, alt: "Pink Salt", label: "Pink Salt", content: "Salt from ancient sea deposits with natural minerals and a unique pink hue, ideal for gourmet dishes.", href: "/pink-salt", color: "from-pink-400 to-rose-600" },
          ].map((item, index) => (
            <Link key={index} href={item.href} id={item.id} passHref>
              <div
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-110 hover:-rotate-2 border border-gray-100 cursor-pointer h-[500px] flex flex-col"
              >
                <div className="relative h-[280px] overflow-hidden flex-shrink-0">
                  <div className={`absolute inset-0 bg-gradient-to-t ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-10`}></div>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={280}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                </div>

                <div className="p-6 transform group-hover:translate-y-[-4px] transition-transform duration-500 flex-1 flex flex-col">
                  <h3 className={`text-xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {item.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {item.content}
                  </p>
                </div>

                <div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Customized Products Section */}
      <div id="salt-c" className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="relative">
          <h2 className="text-xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl mb-6">
            Customized Products
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 md:pl-[50px]">
          {[
            { src: custa1, alt: "Salt Lamp", label: "Salt Lamp", content: "Salt lamp is a decorative light made from a block of Himalayan salt that gives off a warm, soothing glow." },
            { src: custa2, alt: "Salt Globe", label: "Salt Globe", content: "Globe Salt is a type of salt harvested from the Khewra Salt Mines in the Punjab region of Pakistan." },
            { src: custa3, alt: "Salt Candle Holders", label: "Salt Candle Holders", content: "Salt candle holders are decorative holders made from natural salt crystals that hold candles." },
          ].map((item, index) => (
            <Link key={index} href="/custom" passHref>
              <div
                className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 hover:rotate-1 border border-purple-100 cursor-pointer h-[500px] flex flex-col"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="relative h-[280px] overflow-hidden flex-shrink-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={280}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-6 relative z-20 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 group-hover:scale-105 transition-transform duration-300">
                    {item.label}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                    {item.content}
                  </p>
                </div>

                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-300 rounded-3xl transition-all duration-500"></div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/custom">
          <button className="mt-12 px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-110 hover:rotate-2 transition-all duration-300 shadow-lg hover:shadow-2xl">
            <span className="flex items-center gap-2">
              See More
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </Link>
      </div>

      {/* Related Videos Section */}
      <div className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="relative text-center mb-12">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent sm:text-4xl">
            Related Videos
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div>
        </div>

        <div className=" px-[10px] md:px-[0px] mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:pl-[4.5rem] md:pr-[0.7rem]">
          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className=" absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <iframe
              className="w-full h-[350px] rounded-3xl"
              src="https://www.youtube.com/embed/9nWLNzZGOYA?rel=0&enablejsapi=1&autoplay=0&mute=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-blue-300 rounded-3xl transition-all duration-500 pointer-events-none"></div>
          </div>

          <div className="group relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <iframe
              className="w-full h-[350px] rounded-3xl"
              src="https://www.youtube.com/embed/h23rF0xrhTE?rel=0&enablejsapi=1&autoplay=0&mute=0"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
            />
            <div className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-300 rounded-3xl transition-all duration-500 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Collection;
