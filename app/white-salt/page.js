"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import Black1 from "@/images/w2.1.png";
import Black2 from "@/images/w2.2.png";
import Black3 from "@/images/w2.3.png";
import Black4 from "@/images/w2.4.png";
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
      name: "White Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
      image: Black1,
      price: "$12.99",
      features: ["Premium Quality", "Natural", "Versatile"],
    },
    {
      id: 2,
      name: "White Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
      image: Black2,
      price: "$14.99",
      features: ["Cooking Grade", "Professional", "Pure"],
    },
    {
      id: 3,
      name: "White Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
      image: Black3,
      price: "$16.99",
      features: ["Fine Grade", "Delicate", "Premium"],
    },
    {
      id: 4,
      name: "White Salt Powder",
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
        {/*        <div className="w-full">
          <Image
            src={BlackBanner}
            alt="Black Salt Banner"
            className="w-full object-cover"
            priority
          />
        </div>*/}
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto pt-10 pb-16">
          {/* Professional Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Himalayan White Salt
            </h1>
          </div>

                   {/* Professional Product Grid */}
                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16 items-stretch">
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
                  <div className="relative h-60 w-auto bg-gray-50 overflow-hidden">
                    <Image
                      src={salt.image}
                      alt={salt.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>{" "}
                  {/* Professional Content Section */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
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

          {/* Professional CTA Section */}
          <div
            className={`text-center transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-white rounded-2xl shadow-lg p-10 max-w-3xl mx-auto my-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center tracking-tight">
                Ready to Experience{" "}
                <span className="text-blue-600">Premium Quality?</span>
              </h2>
              <p className="text-gray-600 text-lg md:text-xl mb-8 text-center max-w-2xl mx-auto">
                Contact our team for bulk orders, custom specifications, and
                professional consultation.
              </p>
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow transition-all duration-200"
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlackSalt;
