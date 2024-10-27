import { useState, useEffect } from "react";
import Image from "next/image";
import banner from "@/images/banner2.jpg";
import banner2 from "@/images/banner.jpeg";
import banner3 from "@/images/banner3.jpg";
import banner4 from "@/images/banner4.jpg";

const HeroBanner = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const images = [banner, banner2, banner3, banner4];

  useEffect(() => {
    const interval = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); 

    return () => clearInterval(interval); 
  }, []);

  return (
    <div
      id="home"
      className="relative flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8 md:pl-[240px]"
      style={{
        backgroundImage: `url(${images[bgImageIndex].src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    >
    
      <div className="relative max-w-screen bg-white bg-opacity-70 lg:pl-[170px] py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 rounded-xl lg:ml-[-5rem] xl:ml-[-7rem]">
        <div className="lg:flex lg:items-center lg:justify-between lg:w-10/12 ml-auto">
          <div className="lg:flex-1 lg:pr-8">
            <div className="relative mt-6 sm:mt-8 px-4 sm:px-6 lg:px-0 text-left">
              <h1 className="text-xl text-center lg:text-left sm:text-2xl lg:text-3xl font-bold tracking-tight text-blue-500">
                Global Trader in Premium <br /> Salt Products
              </h1>
              <p className="mt-4 sm:mt-6 text-justify text-sm sm:text-base font-medium text-gray-800">
                Faychem specializes in exporting the purest, high-quality salt
                sourced from Pakistan to global markets. Our diverse offerings,
                from culinary to industrial applications, are tailored to meet
                the unique needs of our customers worldwide.
              </p>
            </div>
          </div>

          <div className="lg:flex-shrink-0 lg:w-[400px] mt-8 lg:mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
              <Image
                width={200}
                height={300}
                src={banner}
                alt="Salt product"
                className="rounded-lg w-[500px] lg:w-auto object-cover"
              />
              <Image
                width={200}
                height={300}
                src={banner3}
                alt="Salt product"
                className="rounded-lg w-[500px] lg:w-auto object-cover"
              />
              <Image
                width={200}
                height={300}
                src={banner2}
                alt="Salt product"
                className="rounded-lg w-[500px] lg:w-auto object-cover"
              />
              <Image
                width={200}
                height={300}
                src={banner4}
                alt="Salt product"
                className="rounded-lg w-[500px] lg:w-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
