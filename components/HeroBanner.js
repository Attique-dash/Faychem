import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import banner from "@/images/banner233.webp";
import banner2 from "@/images/banner.webp";
import banner3 from "@/images/banner3.webp";
import banner4 from "@/images/banner4.webp";

const HeroBanner = () => {
  const [bgImageIndex, setBgImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const intervalRef = useRef(null);
  const heroRef = useRef(null);

  const images = [
    { src: banner, alt: "Premium salt crystals" },
    { src: banner2, alt: "Salt mining operations" },
    { src: banner3, alt: "Pure white salt" },
    { src: banner4, alt: "Industrial salt processing" },
  ];

  const productImages = [
    { src: banner, alt: "Premium salt crystals", title: "Premium Salt" },
    { src: banner3, alt: "Pure white salt", title: "White Salt" },
    { src: banner2, alt: "Salt mining operations", title: "Rock Salt" },
    {
      src: banner4,
      alt: "Industrial salt processing",
      title: "Industrial Salt",
    },
  ];

  // Auto-slide functionality
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [images.length]);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    const currentElement = heroRef.current; // ✅ take a snapshot

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ✅ cleanup always uses the same node
      }
    };
  }, []);

  return (
    <div
      ref={heroRef}
      id="home"
      className="relative flex justify-center items-center min-h-screen mb-[-2rem] p-4 sm:p-6 lg:p-8 overflow-hidden pt-20"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === bgImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image.src.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          </div>
        ))}
      </div>
      {/* Main Content */}
      <div
        className={`relative z-20 max-w-7xl mx-auto w-full transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="bg-white/30 backdrop-blur-sm py-8 sm:py-12 lg:py-16 px-6 sm:px-8 lg:px-12 rounded-xl shadow-2xl border border-white border-opacity-20">
          <div className="lg:flex lg:items-center lg:justify-between max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="lg:flex-1 lg:pr-8">
              <div
                className={`relative mt-[3.5rem] md:mt-[1.5rem] sm:mt-8 px-4 sm:px-6 lg:px-0 text-left transition-all duration-1000 delay-300 transform ${
                  isVisible
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
              >
                <div className="relative">
                  <h1 className="text-3xl text-center lg:text-left sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-tight">
                    Global Trader in Premium <br />
                    <span className="text-[var(--darker)] bg-clip-text">
                      Salt Products
                    </span>
                  </h1>
                </div>

                <p className="mt-4 sm:mt-6 text-center text-justify text-sm sm:text-base font-medium text-white leading-relaxed">
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 justify-items-center">
                {productImages.map((image, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:rotate-4"
                    style={{
                      animationDelay: `${index * 200}ms`,
                      animation: isVisible
                        ? `fadeInUp 0.8s ease-out forwards`
                        : "none",
                    }}
                  >
                    <Image
                      width={200}
                      height={300}
                      src={image.src}
                      alt={image.alt}
                      className="rounded-lg w-[500px] lg:w-auto object-cover transition-transform duration-500 group-hover:scale-110"
                      priority={true}
                      fetchPriority="high"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 200px"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--black)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold text-sm">{image.title}</h3>
                        <p className="text-xs text-gray-200">Premium Quality</p>
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
