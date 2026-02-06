"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import img1 from "@/images/1.1.webp";
import img2 from "@/images/1.2.webp";
import img3 from "@/images/1.3.webp";
import img4 from "@/images/1.4.webp";
import img5 from "@/images/1.5.webp";
import img6 from "@/images/1.6.webp";
import img7 from "@/images/1.7.webp";
import img8 from "@/images/1.8.webp";
import img9 from "@/images/1.9.webp";
import img10 from "@/images/1.10.webp";

const CustomProducts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Create delay mapping for proper Tailwind classes
  const delayClasses = [
    "delay-0",
    "delay-100",
    "delay-200",
    "delay-300",
    "delay-400",
    "delay-500",
    "delay-[600ms]",
    "delay-[700ms]",
    "delay-[800ms]",
    "delay-[900ms]",
  ];

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.01, // Lower threshold for better mobile support
        rootMargin: "50px", // Trigger slightly before element enters viewport
      },
    );

    const currentElement = componentRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  const saltVariants = [
    {
      id: 1,
      name: "Crafted Lamps",
      description:
        "Elegantly carved Himalayan salt in artistic lamp shapes like bowls, flowers, lamps and hearts",
      image: img1,
    },

    {
      id: 2,
      name: "Geometric Lamps",
      description:
        "Modern geometric salt lamps featuring cubes, spheres, and pyramids for a minimalist and contemporary look",
      image: img2,
    },
    {
      id: 3,
      name: "Salt Candle Holders",
      description:
        "Elegant salt candle holders that create a warm, ambient glow while purifying your surroundings naturally",
      image: img3,
    },
    {
      id: 4,
      name: "Culinary",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
      image: img4,
    },
    {
      id: 5,
      name: "Wellness & Spa",
      description:
        "Relax and rejuvenate with our spa range — including bath salts, scrubs, soaps, and massage stones made from pure Himalayan salt",
      image: img5,
    },
    {
      id: 6,
      name: "Aromatherapy & Healing",
      description:
        "Cooking blocks for grilling and serving with enhanced mineral flavor.",
      image: img6,
    },
    {
      id: 7,
      name: "Decorative & Home Accents",
      description:
        "Stylish salt decor pieces — from natural crystal clusters to polished centerpieces — that bring beauty and tranquility to any space",
      image: img7,
    },
    {
      id: 8,
      name: "Animal Lick Salt",
      description:
        "100% natural Himalayan salt licks providing essential minerals for livestock, horses, and wildlife health",
      image: img8,
    },
    {
      id: 9,
      name: "Salt Bricks & Tiles",
      description:
        "Durable Himalayan salt bricks and tiles for saunas, spa walls, and interiors — combining health benefits with visual appeal",
      image: img10,
    },
    {
      id: 10,
      name: "Custom Salt Crafts",
      description:
        "Personalized salt creations tailored to your brand or decor — custom shapes, engravings, and designs available",
      image: img9,
    },
  ];

  return (
    <div className="">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.silverlinetradingcompany.com",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Crafted Products",
                item: "https://www.silverlinetradingcompany.com/custom",
              },
            ],
          }),
        }}
      />
      <div
        ref={componentRef}
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto pt-10 pb-12">
          {/* Professional Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Crafted Products
            </h1>
          </div>

          {/* Professional Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 max-w-sm sm:max-w-7xl mx-auto mb-12 sm:mb-16 items-stretch">
            {saltVariants.map((salt, index) => (
              <div
                key={salt.id}
                className={`transition-all duration-700 transform ${delayClasses[index] || "delay-0"} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } h-full`}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col">
                  {/* Professional Image Section */}
                  <div className="relative h-64 sm:h-52 lg:h-56 w-auto bg-gray-50 overflow-hidden">
                    <Image
                      src={salt.image}
                      alt={salt.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      aria-describedby={`product-${salt.id}-description`}
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Professional Content Section */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                      {salt.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 text-center">
                      {salt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="mt-20 text-center transition-all duration-1000 delay-700 transform ">
            <div className="border border-gray-200 bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto my-12">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center tracking-tight">
                Discover Excellence in{" "}
                <span className="block text-[var(--primary)]">Every Grain</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
                Contact us for any custom item you need, backed by a reliable
                export service.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="button flex items-center gap-2 text-lg px-8 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--light)]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                  Contact Sales Team
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomProducts;
