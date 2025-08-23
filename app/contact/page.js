"use client";
import Image from "next/image";
import { useState } from "react";
import Pink1 from "@/images/DarkPink1.jpeg";
import Pink2 from "@/images/DarkPink2.jpeg";
import Pink3 from "@/images/DarkPink3.jpeg";
import Pink4 from "@/images/DarkPink4.jpeg";
import Pink5 from "@/images/DarkPink5.jpeg";

const saltTypes = [
  {
    name: "Himalayan Pink Salt",
    images: [
      { src: Pink1, label: "Pink Salt 1-2mm" },
      { src: Pink2, label: "Pink Salt 2-5mm" },
      { src: Pink3, label: "Pink Salt Fine 0.2-0.8mm" },
      { src: Pink4, label: "Pink Salt Powder" },
      { src: Pink5, label: "Pink Salt Large Crystals" },
    ],
    description:
      "Himalayan Pink Salt is a pure, hand-mined salt that comes from ancient sea salt deposits in the Himalayan mountains. It contains 84 trace minerals and elements, giving it its distinctive pink color. This salt is known for its health benefits and is used in cooking, spa treatments, and decorative purposes."
  },
];

const PinkSalt = () => {
  const [currentImage, setCurrentImage] = useState(saltTypes.map(() => 0));

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

  return (
    <div className="md:pl-[190px] lg:mt-[30px]">
      {saltTypes.map((salt, index) => (
        <div key={salt.name} className="mb-[2rem] mt-[5rem] md:mt-[3rem] text-center">
          <h2 className="text-2xl font-bold text-pink-600 text-center sm:text-3xl md:mb-[50px]">
            {salt.name}
          </h2>
          <div className="relative flex items-center md:pl-24 md:pr-12 px-[10px] sm:px-0 justify-center mt-8 sm:mt-4">
            <div className="relative group mx-auto w-[600px]">
              <button
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-pink-500 z-10 sm:text-2xl"
                onClick={() => handlePrev(index)}
              >
                ←
              </button>
              <Image
                src={salt.images[currentImage[index]].src}
                alt={salt.name}
                width={600}
                height={400}
                className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
              />
              <button
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-pink-500 z-10 sm:text-2xl"
                onClick={() => handleNext(index)}
              >
                →
              </button>
              <p className="absolute bottom-0 left-0 w-full text-pink-400 bg-opacity-60 text-sm font-semibold sm:p-2 text-center">
                {salt.images[currentImage[index]].label}
              </p>
            </div>
          </div>
          <p className="max-w-5xl sm:text-center md:pl-[80px] md:pr-[50px] mx-auto mt-10 text-justify px-3 md:px-0 sm:mt-6 text-gray-700 sm:text-lg">
            {salt.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default PinkSalt;
