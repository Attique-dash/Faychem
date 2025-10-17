"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Black1 from "@/images/b1.1.png";
import Black2 from "@/images/b1.2.png";
import Black3 from "@/images/b1.3.png";
import Black4 from "@/images/b1.4.png";
import Link from "next/link";
import BlackBanner from "@/images/banner23.png";

const BlackSalt = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
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
      name: "Black Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
      image: Black1,
      price: "$12.99",
      features: ["Premium Quality", "Natural", "Versatile"],
    },
    {
      id: 2,
      name: "Black Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
      image: Black2,
      price: "$14.99",
      features: ["Cooking Grade", "Professional", "Pure"],
    },
    {
      id: 3,
      name: "Black Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
      image: Black3,
      price: "$16.99",
      features: ["Fine Grade", "Delicate", "Premium"],
    },
    {
      id: 4,
      name: "Black Salt Powder",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
      image: Black4,
      price: "$18.99",
      features: ["Powder Form", "Even Mixing", "Professional"],
    },
  ];

  return (
    <div className="">
      <div
        ref={componentRef}
        className={`transition-all duration-1000 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* <div className="w-full">
          <Image
            src={BlackBanner}
            alt="Black Salt Banner"
            className="w-full object-cover"
            priority
          />
        </div> */}
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto pt-10 pb-16">
          {/* Professional Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Himalayan Black Salt
            </h1>
          </div>

          {/* Professional Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16 items-stretch">
            {saltVariants.map((salt, index) => (
              <div
                key={salt.id}
                className={`transition-all duration-700 transform delay-${index * 100} ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                } h-full`}
              >
                <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 group h-full flex flex-col">
                  {/* Professional Image Section */}
                  <div className="relative h-56 w-auto bg-gray-50 overflow-hidden">
                    <Image
                      src={salt.image}
                      alt={salt.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>{" "}
                  {/* Professional Content Section */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {salt.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {salt.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Professional CTA Section (enhanced) */}
          <div
            className={`text-center transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="relative overflow-hidden max-w-5xl mx-auto my-16">
              {/* soft gradient background + glow */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-blue-50" />
              <div className="absolute -top-24 -right-24 h-80 w-80 bg-blue-200/40 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-24 -left-24 h-72 w-72 bg-indigo-200/40 rounded-full blur-3xl -z-10" />

              <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-gray-100 p-10 md:p-12">
                <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide uppercase text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full mb-5">
                  Trusted by food brands & distributors
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 inline-block" />
                </p>

                <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                  Unlock Bulk Pricing on{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                    Himalayan Black Salt
                  </span>
                </h2>

                <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto">
                  Private labeling, custom mesh sizes, and export-ready
                  packaging—delivered on time with rigorous QC.
                </p>

                {/* value bullets */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 text-left max-w-4xl mx-auto">
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      <strong>ISO-certified facility</strong> with 99.8% purity
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      <strong>MOQ from 500 kg</strong> with flexible packaging
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white">
                      ✓
                    </span>
                    <p className="text-gray-700">
                      <strong>Global shipping</strong> to 50+ countries
                    </p>
                  </div>
                </div>

                {/* buttons */}
                <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-4 rounded-xl font-semibold text-lg shadow transition-all duration-200"
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
                    Contact Sales
                  </a>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-white text-blue-700 hover:text-blue-800 px-7 py-4 rounded-xl font-semibold text-lg ring-1 ring-blue-200 hover:ring-blue-300 shadow-sm transition-all duration-200"
                  >
                    Get a Free Quote
                  </a>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  Lead time: 5–7 days · Samples available · Custom branding &
                  barcodes supported
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSalt;
