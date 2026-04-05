import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import banner from "@/images/banner233.webp";
import banner2 from "@/images/banner.webp";
import banner3 from "@/images/banner3.webp";
import banner4 from "@/images/banner4.webp";

const images = [
  { src: banner, alt: "Himalayan pink salt crystals displayed in bulk" },
  { src: banner2, alt: "Workers extracting salt inside Khewra salt mine" },
  { src: banner3, alt: "Finely ground white Himalayan salt in packaging" },
  { src: banner4, alt: "Industrial salt processing facility with conveyor belts" },
];

const productImages = [
  { src: banner, alt: "Himalayan pink salt crystals", title: "Premium Salt", desc: "100% Natural Himalayan" },
  { src: banner3, alt: "Handcrafted Himalayan salt lamp glowing", title: "Salt Lamps", desc: "Handcrafted & Unique" },
  { src: banner2, alt: "Food-grade edible pink salt", title: "Edible Salt", desc: "Food-Grade Certified" },
  { src: banner4, alt: "Bulk industrial salt for de-icing", title: "Industrial Salt", desc: "Bulk & Wholesale" },
];

const HeroBanner = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  const advanceSlide = useCallback(() => {
    setBgImageIndex((prev) => (prev + 1) % images.length);
  }, []);

  useEffect(() => {
    const id = setInterval(advanceSlide, 5000);
    return () => clearInterval(id);
  }, [advanceSlide]);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative flex justify-center items-center min-h-screen mb-[-2rem] p-4 sm:p-6 lg:p-8 overflow-hidden pt-20"
    >
      {/* Background Slideshow */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === bgImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              placeholder={index === 0 ? "blur" : undefined}
              quality={85}
              sizes="100vw"
              className="object-cover"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black/30 z-10" />
      </div>

      {/* Main Content */}
      <div
        className={`relative z-20 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-white/30 backdrop-blur-sm py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 rounded-xl shadow-2xl border border-white/20">
          <div className="lg:flex lg:items-center lg:justify-between max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="lg:flex-1 lg:pr-8">
              <div
                className={`relative mt-14 md:mt-6 px-4 sm:px-6 lg:px-0 text-left transition-all duration-1000 delay-300 transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <h1 className="text-2xl text-center lg:text-left sm:text-3xl font-bold tracking-tight text-white leading-tight">
                  Global Trader in Premium <br />
                  <span className="text-[var(--color-primary-darker)] bg-clip-text">
                    Salt Products
                  </span>
                </h1>

                <p className="mt-4 sm:mt-6 text-center lg:text-left text-sm sm:text-base font-medium text-white leading-relaxed">
                  Silverline Trading Company specializes in exporting the purest
                  Himalayan salt from Pakistan to global markets. Our diverse
                  offerings include edible salt, industrial salt, decorative
                  salt, and crafted products, all tailored to meet the needs of
                  our customers worldwide.
                </p>
              </div>
            </div>

            {/* Product Images Grid */}
            <div
              className={`lg:flex-shrink-0 lg:w-[400px] mt-8 lg:mt-0 transition-all duration-1000 delay-500 transform ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-8 opacity-0"
              }`}
            >
              <div className="grid grid-cols-2 gap-4 sm:gap-6 justify-items-center">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className={`group relative w-full h-28 overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-4 ${
                      isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${600 + index * 200}ms`,
                    }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg w-full h-full sm:h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 45vw, (max-width: 1024px) 50vw, 200px"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-text)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-sm">{image.title}</h3>
                        <p className="text-xs text-gray-200">{image.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
