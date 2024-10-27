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

// Add other imports similarly...

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

  useEffect(() => {
    // Initialize currentIndex for each card to zero
    const initialIndex = {};
    Object.keys(cardImages).forEach((id) => {
      initialIndex[id] = 0;
    });
    setCurrentIndex(initialIndex);
  }, []);

  const tiltElements = useRef([]);

  useEffect(() => {
    // Store the current value of tiltElements.current
    const elements = tiltElements.current;
  
    // Initialize VanillaTilt
    elements.forEach((el) => {
      if (el) {
        VanillaTilt.init(el, {
          max: 25,
          speed: 400,
          glare: true,
          "max-glare": 0.5,
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
    setCurrentIndex((prev) => {
      const imagesArray = cardImages[id];
      const newIndex = (prev[id] + 1) % imagesArray.length;
      return { ...prev, [id]: newIndex };
    });
  };

  const handlePrev = (id) => {
    setCurrentIndex((prev) => {
      const imagesArray = cardImages[id];
      const newIndex = (prev[id] - 1 + imagesArray.length) % imagesArray.length;
      return { ...prev, [id]: newIndex };
    });
  };

  const images = [
    { id: 1, heading: "Salt Lamps", text: "Salt lamp is a decorative light made from a block of Himalayan salt that gives off a warm, soothing glow." },
    { id: 2, heading: "Salt Candle Holders", text: "Salt candle holders are decorative holders made from natural salt crystals that hold candles." },
    { id: 3, heading: "Salt Culinary", text: "Salt culinary refers to the use of different types of salt in cooking to enhance flavor." },
    { id: 4, heading: "Aromatherapy", text: "Salt aromatherapy combines salt with essential oils for relaxing and therapeutic benefits." },
    { id: 5, heading: "Home Décor", text: "Home Décor salt is salt shaped into decorative items for home decoration." },
    { id: 6, heading: "Animal Lick Salt", text: "Animal Lick Salt is a block of salt for animals to lick for essential nutrients." },
    { id: 7, heading: "Pyramid", text: "Pyramid Salt is a type of sea salt shaped like small, hollow pyramids, often used as a finishing salt." },
    { id: 8, heading: "Salt Tree", text: "A Salt Tree is a plant that grows in salty soil or can tolerate high salt levels." },
    { id: 9, heading: "Globe", text: "Globe Salt is a type of salt harvested from the Khewra Salt Mines in the Punjab region of Pakistan." },
    { id: 10, heading: "Crafted Items", text: "Crafted items include decorative vases, and ornaments made from salt, used for spa products." },
  ];

  return (
    <div className="w-full flex flex-col lg:pl-[265px] md:pl-[245px] lg:mt-[25px]">
      <span className="w-11/12 text-blue-500 mb-[30px] mx-auto text-3xl font-bold text-center mt-[6.5rem] md:mt-[1.5rem]">
        Customized Shapes
      </span>

      <div className="p-8 text-center">
        <section className="flex flex-wrap justify-center items-center gap-4">
          {images.map((image) => {
            const imageList = cardImages[image.id];
            const index = currentIndex[image.id] || 0;
            const currentImage = imageList[index % imageList.length];
            
            return (
              <div
                key={image.id}
                ref={(el) => (tiltElements.current[image.id] = el)}
                className="bg-white p-4 rounded-lg shadow-lg w-full sm:w-[calc(100%-16px)] md:w-[calc(50%-16px)] lg:w-[calc(33.333%-16px)] h-96 flex flex-col justify-between transition-transform transform hover:scale-105 border-2 border-transparent transition-all duration-300 ease-in-out hover:border-indigo-500 hover:shadow-blue-500/50"
              >
                <div className="relative w-full h-56">
                  <Image src={currentImage} alt={image.heading} className="rounded-lg object-cover w-full h-full" />
                  <button
                    onClick={() => handlePrev(image.id)}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500"
                  >
                    &lt;
                  </button>
                  <button
                    onClick={() => handleNext(image.id)}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-blue-500"
                  >
                    &gt;
                  </button>
                </div>
                <div className="mt-4">
                  <h2 className="text-xl text-blue-500 font-bold">{image.heading}</h2>
                  <p className="text-gray-700 mt-2">{image.text}</p>
                </div>
              </div>
            );
          })}
        </section>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-blue-500 font-bold font-mono text-lg">
          Any shape or size can be customized according to the customer requirement.
        </h2>
      </div>
    </div>
  );
};

export default Page;
