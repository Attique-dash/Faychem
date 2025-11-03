"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import img1 from "@/images/1.1.png";
import img2 from "@/images/1.2.png";
import img3 from "@/images/1.3.png";
import img4 from "@/images/1.4.png";
import img5 from "@/images/1.5.png";
import img6 from "@/images/1.6.png";
import img7 from "@/images/1.7.png";
import img8 from "@/images/1.8.png";
import img9 from "@/images/1.9.png";
import img10 from "@/images/1.10.png";

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
      name: "Crafted Lamps",
      description:
        "Elegantly carved Himalayan salt in artistic lamp shapes like bowls, flowers, lamps and hearts",
      image: img1,
      price: "$16.99",
      features: ["Fine Grade", "Delicate", "Premium"],
    },

    {
      id: 2,
      name: "Geometric Lamps",
      description:
        "Modern geometric salt lamps featuring cubes, spheres, and pyramids for a minimalist and contemporary look",
      image: img2,
      price: "$14.99",
      features: ["Cooking Grade", "Professional", "Pure"],
    },
    {
      id: 1,
      name: "Salt Candle Holders",
      description:
        "Elegant salt candle holders that create a warm, ambient glow while purifying your surroundings naturally",
      image: img3,
      price: "$12.99",
      features: ["Premium Quality", "Natural", "Versatile"],
    },
    {
      id: 4,
      name: "Culinary",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
      image: img4,
      price: "$18.99",
      features: ["Powder Form", "Even Mixing", "Professional"],
    },
    {
      id: 5,
      name: "Wellness & Spa",
      description:
        "Relax and rejuvenate with our spa range — including bath salts, scrubs, soaps, and massage stones made from pure Himalayan salt",
      image: img5,
      price: "$19.99",
      features: ["Bath Grade", "Therapeutic", "Relaxing"],
    },
    {
      id: 6,
      name: "Aromatherapy & Healing",
      description:
        "Cooking blocks for grilling and serving with enhanced mineral flavor.",
      image: img6,
      price: "$24.99",
      features: ["Cooking Block", "Gourmet", "Reusable"],
    },
    {
      id: 7,
      name: "Decorative & Home Accents",
      description:
        "Stylish salt decor pieces — from natural crystal clusters to polished centerpieces — that bring beauty and tranquility to any space",
      image: img7,
      price: "$22.99",
      features: ["Infused", "Flavored", "Gourmet"],
    },
    {
      id: 8,
      name: "Animal Lick Salt",
      description:
        "100% natural Himalayan salt licks providing essential minerals for livestock, horses, and wildlife health",
      image: img8,
      price: "$29.99",
      features: ["Gift Set", "Variety", "Premium"],
    },
    {
      id: 9,
      name: "Salt Bricks & Tiles",
      description:
        "Durable Himalayan salt bricks and tiles for saunas, spa walls, and interiors — combining health benefits with visual appeal",
      image: img10,
      price: "$29.99",
      features: ["Gift Set", "Variety", "Premium"],
    },
    {
      id: 10,
      name: "Custom Salt Crafts",
      description:
        "Personalized salt creations tailored to your brand or decor — custom shapes, engravings, and designs available",
      image: img9,
      price: "$29.99",
      features: ["Gift Set", "Variety", "Premium"],
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
        {/* <div className="w-full">
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
              Crafted Products
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
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                     
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>{" "}
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

          {/* Elegant CTA - Soft Luxury */}
          <div
            className={`text-center transition-all duration-1000 delay-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <div className="bg-gradient-to-br from-[#faf7f5] to-[#fff] border border-[#f0e7e2] rounded-3xl shadow-md p-12 max-w-3xl mx-auto my-20">
              <h2 className="text-4xl md:text-5xl font-semibold text-[#3d3d3d] mb-6">
                Discover the{" "}
                <span className="text-[#d18b60] font-bold">
                  Purity of Perfection
                </span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
                Let our team craft the perfect solution for your needs — from
                customized salt creations to bulk supply, handled with care and
                precision.
              </p>

              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="flex items-center gap-2 bg-[#d18b60] hover:bg-[#c47c55] text-white px-10 py-4 rounded-xl font-medium text-lg shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <svg
                    className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
                  Connect with Us
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
