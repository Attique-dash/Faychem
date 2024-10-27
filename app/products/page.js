"use client";
import Image from "next/image";
import { useState } from "react";
import White1 from "@/images/WhiteSalt_1.jpeg";
import White2 from "@/images/WhiteSalt_2.jpeg";

const saltTypes = [
  {
    name: "Himalayan White Salt",
    images: [
      { src: White1, label: "Crystal White Salt  1-2mm" },
      { src: White2, label: "Crystal White Salt  2-5mm" },
    ],
    description:
      "White salt, commonly known as table salt, is a refined form of sodium chloride used primarily for seasoning and preserving food. It also has various household uses, such as in cleaning and de-icing surfaces."
  },
];

const WhiteSalt = () => {
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
          <h2 className="text-2xl font-bold text-blue-500 text-center sm:text-3xl md:mb-[50px]">
            {salt.name}
          </h2>
          <div className="relative flex items-center md:pl-24 md:pr-12 px-[10px] sm:px-0 justify-center mt-8 sm:mt-4">
            <div className="relative group mx-auto w-[600px]">
              <button
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-blue-500 z-10 sm:text-2xl"
                onClick={() => handlePrev(index)}
              >
                ←
              </button>
              <div className="relative group mx-auto">
                <Image
                  src={salt.images[currentImage[index]].src}
                  alt={salt.name}
                  width={600}
                  height={400}
                  className="rounded-lg transform transition-transform duration-300 ease-in-out group-hover:scale-105 mx-auto"
                />
                <p className="absolute bottom-0 left-0 w-full text-blue-400 bg-opacity-60 text-sm sm:font-semibold sm:p-2 text-center">
                  {salt.images[currentImage[index]].label}
                </p>
              </div>
              <button
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-blue-500 z-10 sm:text-2xl"
                onClick={() => handleNext(index)}
              >
                →
              </button>
            </div>
          </div>
          <p className="max-w-5xl sm:text-center md:pl-[80px] md:pr-[50px] mx-auto mt-10 text-justify px-3 md:px-0 sm:mt-6 text-gray-700 sm:text-lg">
            {salt.description}
          </p>
        </div>
      ))}
    </div>
  )  
};

export default WhiteSalt;

