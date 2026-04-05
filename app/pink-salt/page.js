"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Pink1 from "@/images/p2.1.webp";
import Pink2 from "@/images/p2.2.webp";
import Pink3 from "@/images/p2.3.webp";
import Pink4 from "@/images/p2.4.webp";

const PinkSalt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const el = componentRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const saltVariants = [
    {
      id: 1,
      name: "Pink Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
      image: Pink1,
    },
    {
      id: 2,
      name: "Pink Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
      image: Pink2,
    },
    {
      id: 3,
      name: "Pink Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
      image: Pink3,
    },
    {
      id: 4,
      name: "Pink Salt Powder",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
      image: Pink4,
    },
  ];

  return (
    <div>
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
                name: "Himalayan Pink Salt",
                item: "https://www.silverlinetradingcompany.com/pink-salt",
              },
            ],
          }),
        }}
      />
      <div
        ref={componentRef}
        className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto pt-10 pb-8">
          {/* Professional Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Himalayan Pink Salt
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Rich in 84+ trace minerals, our premium pink salt is available in multiple grain sizes for culinary, industrial, and wellness applications.
            </p>
          </div>

          {/* Professional Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 max-w-sm sm:max-w-7xl mx-auto mb-12 sm:mb-16 items-stretch">
            {saltVariants.map((salt, index) => (
              <div
                key={salt.id}
                className={`transition-all duration-700 ${isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
                  } h-full`}
                style={{ transitionDelay: `${index * 100}ms` }}
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
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {salt.name}
                    </h3>
                    <p id={`product-${salt.id}-description`} className="text-gray-600 text-sm leading-relaxed mb-4">
                      {salt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA Section */}
          <div className="mt-20 text-center transition-all duration-1000 delay-700">
            <div className="border border-gray-200 bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto my-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center tracking-tight">
                Ready to Order?{" "}
                <span className="block text-[var(--color-primary)]">Contact Our Team.</span>
              </h2>
              <p className="text-gray-600 text-base md:text-lg mb-8 text-center max-w-2xl mx-auto">
                Contact us for salt in any mesh or granule size you need, backed
                by a reliable export service.
              </p>
              <div className="flex justify-center">
                <Link
                  href="/contact"
                  className="button flex items-center gap-2 text-lg px-8 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-light)]"
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

export default PinkSalt;
