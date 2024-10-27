"use client";
import Image from "next/image";
import { useState } from "react";
import pink1 from "@/images/LightPink_1.jpeg";
import pink2 from "@/images/LightPink_2.jpeg";
import pink3 from "@/images/LightPink_3.jpeg";
import pink4 from "@/images/LightPink_4.jpeg";
import pink5 from "@/images/LightPink_5.jpeg";
import pink6 from "@/images/MediumPink1.jpeg";
import pink7 from "@/images/MediumPink2.jpeg";
import pink8 from "@/images/MediumPink3.jpeg";
import pink9 from '@/images/DarkPink1.jpeg';
import pink10 from '@/images/DarkPink2.jpeg';
import pink11 from '@/images/DarkPink3.jpeg';
import pink12 from '@/images/DarkPink4.jpeg';
import pink13 from '@/images/DarkPink5.jpeg';

const saltTypes = [
  {
    name: "Himalayan Light Pink Salt",
    images: [
      { src: pink1, label: "Light Pink Fine Salt 0.2To0.8mm" },
      { src: pink2, label: "Light Pink Salt Fine Orange Spot 0.2To0.8mm" },
      { src: pink3, label: "Light Pink Salt 1To2mm" },
      { src: pink4, label: "Light Pink Salt 2To5mm" },
      { src: pink5, label: "Pinkish White Flow Or Powder 50-100 mesh" },
    ],
    description:
      "Himalayan Light Pink Salt is a mineral-rich salt known for its distinct pink color, often used in cooking, seasoning, and therapeutic practices for its potential health benefits.",
  },
  {
    name: "Himalayan Medium Pink Salt",
    images: [
      { src: pink6 , label: "Medium Pink Fine Salt  0.2To1mm" },
      { src: pink7 , label: "Medium Pink Salt 1To2mm" },
      { src: pink8 , label: "Medium Pink Salt 2To5mm" },
    ],
    description:
      "Himalayan Medium Pink Salt has a balanced flavor with a stronger mineral presence.",
  },
  {
    name: "Himalayan Dark Pink Salt",
    images: [
      { src: pink9 , label: "Dark Pink Fine Salt 0.2-0.8mm" },
      { src: pink10 , label: "Dark Pink Salt 1-2mm" },
      { src: pink11 , label: "Dark Pink Salt 2-5mm" },
      { src: pink12 , label: "Dark Pink Salt Flow Or Powder 50-100 mesh" },
      { src: pink13 , label: "Dark Pink Salt Flow Or Powder 50to100 mesh" },
    ],
    description:
      "Himalayan Dark Pink Salt is rich in minerals and offers a more intense flavor.",
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
          <h2 className="text-2xl font-bold text-blue-500 text-center sm:text-3xl md:mb-[50px]">
            {salt.name}
          </h2>
          <div className="relative flex items-center md:pl-24 md:pr-12 px-[10px] sm:px-0 justify-center mt-8 sm:mt-4">
            <div className="relative group mx-auto">
              <button
                className="absolute top-1/2 -translate-y-1/2 left-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-blue-500 z-10 sm:text-2xl"
                onClick={() => handlePrev(index)}
                style={{ transform: 'translateY(-50%)' }} 
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
              <p className="absolute bottom-0 left-0 w-full text-blue-400 bg-opacity-60 text-sm sm:font-semibold sm:p-2 text-center">
                {salt.images[currentImage[index]].label}
              </p>
              {/* Next button */}
              <button
                className="absolute top-1/2 -translate-y-1/2 right-2 bg-gray-800 bg-opacity-70 text-white px-3 py-2 rounded-full hover:bg-blue-500 z-10 sm:text-2xl"
                onClick={() => handleNext(index)}
                style={{ transform: 'translateY(-50%)' }} // Center vertically
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
  );
  
};

export default PinkSalt;

