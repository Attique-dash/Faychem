"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Black from "@/images/blackpr.png";
import Pink from "@/images/pinkpr.png";
import White from "@/images/whitepr.png";
import Custom from "@/images/custompr.png";
import aboImg from "@/images/about.png";
import globe from "@/images/globe.png";
import shield from "@/images/shield.png";
import badge from "@/images/badge.png";
import trust from "@/images/dependable.png";
import industry from "@/images/industry.png";
import pot from "@/images/pot.png";
import wellness from "@/images/wellness.png";
import WorldMap from "../images/world-map.png";

const industries = [
  {
    icon: (
      <Image
        src={industry}
        alt="Industrial Salt"
        width={60}
        height={60}
        className="mx-auto mb-6"
      />
    ),
    title: "Industrial Salt",
    desc: "Essential for manufacturing, textile processing, leather curing, chemicals, and de-icing applications.",
  },
  {
    icon: (
      <Image
        src={pot}
        alt="Industrial Salt"
        width={60}
        height={60}
        className="mx-auto mb-6"
      />
    ),
    title: "Edible Salt",
    desc: "Pure, mineral rich salt for daily cooking, seasoning, and food preservation.",
  },
  {
    icon: (
      <Image
        src={wellness}
        alt="Industrial Salt"
        width={60}
        height={60}
        className="mx-auto mb-6"
      />
    ),
    title: "Wellness & Spa",
    desc: "Natural Himalayan salt crafted for decorations, spa treatments, bath therapies, and holistic relaxation.",
  },
];

const Collection = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="w-full">
      <section className=" w-auto pt-8 relative overflow-hidden">
        {/* About Us Section */}
        <header
          id="about"
          className="py-6 flex flex-col items-center text-center px-4 sm:px-8 relative overflow-hidden scroll-mt-24"
        >
          <div className="flex flex-col sm:flex-row items-center">
            <div className="max-w-2xl flex flex-col sm:flex-col items-center mt-[1rem] sm:mt-[2rem] lg:mt-[3rem] ">
              <div className="relative">
                <h2 className="mb-8 text-xl font-bold text-[var(--black)] bg-clip-text sm:text-3xl animate-fade-in">
                  WHO ARE WE?
                </h2>
                {/*  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></div> */}
              </div>
              <p>
                <span className="font-bold text-[var(--primary)]">
                  Silverline Trading Company
                </span>
                &nbsp;specializes in general trading services, with a primary
                focus on natural rock salt. We export premium-quality salt from
                Pakistan in a variety, including powdered, granular, decorative,
                and customized options to meet the diverse needs of our clients.
                Dedicated to quality and customer satisfaction, our experienced
                team ensures seamless, reliable service, building trust and
                enhancing the experience of our valued customers.
              </p>
              {/*text-justify text-lg sm:p-0 w-full text-gray-600 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px] leading-relaxed*/}
              <p className="mt-4">
                <span className="font-bold text-[var(--primary)]"> " </span>
                Our
                <span className="font-bold text-[var(--primary)]">
                  {" "}
                  Mission{" "}
                </span>{" "}
                is to provide the purest form of salt, sourced from&nbsp; KHEWRA
                SALT MINE (Punjab, Pakistan) and minimally processed, to meet
                quality and purity standards. We dedicate ourselves to providing
                reliable and sustainable salt solutions to the culinary,
                industrial, and agricultural sectors. We aspire to meet our
                clients' expectations, contribute to their success, and help to
                create a healthier, more sustainable world by cultivating
                innovation and ethical conduct.{" "}
                <span className="font-bold text-[var(--primary)]"> " </span>
              </p>
            </div>
            <div className="relative rounded-2xl overflow-hidden sm:ml-[45px] mt-12 mb-4 sm:mt-16 md:block lg:block shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
              <div className="absolute inset-0 z-10"></div>
              <Image
                src={aboImg}
                alt="salt image"
                width={380}
                height={"auto"}
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </div>
        </header>
        {/* Mission Section */}
        {/* <header
        id="mission"
        className="mt-[12] mb-12 flex flex-col items-center text-center px-4 sm:px-8 py-12 relative overflow-hidden scroll-mt-14"
      >
        <div className="relative">
          <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent sm:text-3xl">
            MISSION
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"></div>
        </div>
        {/*bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl border border-indigo-100
        <div className="flex flex-col sm:flex-row items-center mt-[1rem] lg:mt-[3.6rem] sm:mt-[3rem]  transition-all duration-300">
          <div className="relative rounded-2xl overflow-hidden sm:ml-[45px] mt-6 sm:mt-0 md:block lg:block shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent z-10"></div>
            <Image
              src={minImg}
              alt="salt mine image"
              width={300}
              height={220}
              className="lg:w-[700px] lg:h-[240px] h-[280px] object-cover transition-transform duration-700 hover:scale-110"
            />
          </div>

          <p className="text-justify text-lg sm:p-0 w-full text-gray-600 mb-6 sm:mb-0 md:ml-[40px] lg:ml-[60px] leading-relaxed">
            "Our mission is to provide the purest form of salt, sourced
            from&nbsp;
            <span className="font-bold text-indigo-500 ">
              KHEWRA SALT MINE
            </span>{" "}
            (Punjab, Pakistan) and minimally processed, to meet quality and
            purity standards. We dedicate ourselves to providing reliable and
            sustainable salt solutions to the culinary, industrial, and
            agricultural sectors. We aspire to meet our clients' expectations,
            contribute to their success, and help to create a healthier, more
            sustainable world by cultivating innovation and ethical conduct.""
          </p>
        </div>
      </header>*/}

        {/* Industries We Serve Section */}
        <section className="mt-14 bg-[var(--primary)] mb-16 py-16 relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Industries We Serve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {industries.map((item, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setHoveredItem(idx)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`bg-white p-8 text-center shadow transition-all duration-300 cursor-pointer border rounded-lg
            ${
              hoveredItem === idx
                ? "border-gray-200 shadow-xl scale-105"
                : "border-gray-300 hover:shadow-lg hover:scale-105 "
            }
          `}
                  style={{
                    boxShadow:
                      hoveredItem === idx ? "0 8px 32px #010814ff" : undefined,
                    borderColor: hoveredItem === idx ? "#102446ff" : undefined,
                  }}
                >
                  <div className="mb-6">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-gray-700">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Products Section */}
        <div
          id="categories"
          className="mt-16 flex flex-col items-center justify-center pt-4 px-4 sm:px-6 lg:px-8 rounded-4xl scroll-mt-24 relative overflow-hidden"
        >
          <div className="relative">
            <h2 className="mb-4 text-xl font-bold text-[var(--black)] bg-clip-text sm:text-4xl">
              Himalayan Rock Salt
            </h2>
          </div>

          {/*<p className="mx-auto mt-6 max-w-md text-gray-600 text-center text-lg">
          Discover exquisite Specialty Salts—Himalayan Pink, Black, and White...
        </p>
*/}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 lg:gap-4 max-w-7xl mx-auto">
            {" "}
            {[
              {
                id: "salt-p",
                src: Pink,
                alt: "Pink Salt",
                label: "Pink Salt",
                content:
                  "Salt from ancient sea deposits with natural minerals and a unique pink hue, ideal for gourmet dishes.",
                href: "/pink-salt",
              },

              {
                id: "salt-w",
                src: White,
                alt: "White Salt",
                label: "White Salt",
                content:
                  "Pure, crystalline salt that enhances flavor and is essential in culinary applications.",
                href: "/white-salt",
              },
              {
                id: "salt-b",
                src: Black,
                alt: "Black Salt",
                label: "Black Salt",
                content:
                  "Mineral-rich rock salt with a distinctive smoky flavor, commonly used in South Asian cuisine.",
                href: "/black-salt",
              },
              {
                id: "salt-c",
                src: Custom,
                alt: "Customized Products",
                label: "Crafted Items",
                content:
                  "Salt from ancient sea deposits with natural minerals and a unique pink hue, ideal for gourmet dishes.",
                href: "/custom",
              },
            ].map((item, index) => (
              <Link key={index} href={item.href} id={item.id} passHref>
                <div className="mb-20 group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-gray-100 cursor-pointer h-[380px] w-full max-w-[280px] mx-auto flex flex-col">
                  <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={280}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-4 transform group-hover:translate-y-[-4px] transition-transform duration-500 flex-1 flex flex-col">
                    <h3
                      className={`text-xl font-bold text-[var(--primary)] bg-clip-text mb-3 text-center w-full group-hover:scale-20 transition-transform duration-300`}
                    >
                      {item.label}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300 flex-1">
                      {item.content}
                    </p>
                  </div>

                  {/*<div className="absolute top-4 right-4 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>*/}
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Customized Products Section */}
        {/*  <div
        id="salt-c"
        className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-fuchsia-50/80 to-pink-50/80 rounded-2xl shadow-lg scroll-mt-24 relative overflow-hidden"
      >
        <div className="relative mt-8">
          <h2 className="text-xl text-center font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent sm:text-4xl">
            Customized Products
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-12 max-w-6xl mx-auto">
          {[
            {
              src: custa1,
              alt: "Salt Lamp",
              label: "Salt Lamp",
              content:
                "Salt lamp is a decorative light made from a block of Himalayan salt that gives off a warm, soothing glow.",
            },
            {
              src: custa2,
              alt: "Salt Globe",
              label: "Salt Globe",
              content:
                "Globe Salt is a type of salt harvested from the Khewra Salt Mines in the Punjab region of Pakistan.",
            },
            {
              src: custa3,
              alt: "Salt Candle Holders",
              label: "Salt Candle Holders",
              content:
                "Salt candle holders are decorative holders made from natural salt crystals that hold candles.",
            },
          ].map((item, index) => (
            <Link key={index} href="/custom" passHref>
              <div className="group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105  border border-purple-100 cursor-pointer h-[400px] w-full max-w-[320px] mx-auto flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>

                <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={400}
                    height={280}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-20"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="p-4 relative z-20 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-3 ">
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
          <button className="mb-8 mt-12 px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-full hover:from-purple-700 hover:to-pink-700 transform hover:scale-20  transition-all duration-300 shadow-lg hover:shadow-2xl">
            <span className="flex items-center gap-2">
              See More
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </span>
          </button>
        </Link>
      </div>
      */}

        {/* Why Choose Us Section */}
        <section className="mt-0 px-4">
          <div className="max-w-6xl mx-auto bg-[var(--primary)] rounded-3xl p-8">
            <h2 className="text-4xl text-white font-bold text-center mb-4">
              What makes us different?
            </h2>
            <p className="text-center text-white max-w-2xl mx-auto mb-10 text-lg">
              We go beyond just task management—we provide a seamless,
              intuitive, and powerful experience that helps you stay productive
              without the complexity. Here’s what sets us apart:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Card 1 */}
              <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                <div className="">
                  {/* Replace with your icon */}
                  <Image
                    src={trust}
                    alt="Industrial Salt"
                    width={60}
                    height={60}
                    className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  Trusted Quality
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                  Every product meets international standards. Ensuring purity,
                  consistency, and lasting trust.
                </p>
              </div>

              {/* Card 2 */}
              <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                <div className="">
                  {/* Replace with your icon */}
                  <Image
                    src={globe}
                    alt="Industrial Salt"
                    width={60}
                    height={60}
                    className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  Global Reach
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                  Our robust logistics network enables smooth, timely deliveries
                  across the globe.
                </p>
              </div>

              {/* Card 3 */}
              <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                <div className="">
                  {/* Replace with your icon */}
                  <Image
                    src={shield}
                    alt="Industrial Salt"
                    width={60}
                    height={60}
                    className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  Trust Driven Service
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                  We focus on building lasting partnerships through responsive
                  communication and personalized service.
                </p>
              </div>

              {/* Card 4 */}
              <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                <div className="">
                  {/* Replace with your icon */}
                  <Image
                    src={badge}
                    alt="Industrial Salt"
                    width={60}
                    height={60}
                    className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                  Competitive Pricing
                </h3>
                <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                  Premium quality at fair, transparent prices. Designed to help
                  your business grow competitively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get a Quote Section */}
        <section className="mt-12 py-28 bg-gradient-to-br from-[var(--light)] relative overflow-hidden">
          {/* World Map Background */}
          <div className="absolute inset-0 flex justify-end items-center pointer-events-none select-none ">
            <Image
              src={WorldMap}
              alt="World Map"
              width={"auto"}
              height={380}
              objectFit="contain"
              className="z-0"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
            {/* Left: Text & Buttons */}
            <div className="ml-8 flex-1">
              <h2 className="mb-4 text-5xl font-bold text-[var(--black)] mb-2">
                Contact Us
              </h2>
              {/* <div className="flex items-center mb-6">
            <span className="w-24 h-2 bg-orange-500 rounded shadow"></span>
            </div>*/}
              {/* Move the text here, under the heading */}
              <p className="text-lg text-gray-700 text-left max-w-md mb-8">
                If you need our Product Catalog, Want Pricing, Have Questions
                about Shipping, or anything else, reach out to us.
                <br />
                We’ll respond as soon as we can.
              </p>
              <button className="button">
                <a href="/contact">Contact Us</a>
              </button>
            </div>
          </div>
        </section>
        {/* Related Videos Section */}
        <div className="mt-12 mb-8 flex flex-col items-center justify-center py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--black)] bg-clip-text">
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
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            {/* Second video with responsive container */}
            <div className="w-full relative pt-[56.25%] rounded-xl sm:rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/h23rF0xrhTE?rel=0&enablejsapi=1&autoplay=0&mute=0"
                title="YouTube video player"
                frameBorder="0"
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
