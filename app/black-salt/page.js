import Image from "next/image";
import Link from "next/link";
import AnimateOnScroll from "@/components/AnimateOnScroll";
import BlackSalt1 from "@/images/b1.1.webp";
import BlackSalt2 from "@/images/b1.2.webp";
import BlackSalt3 from "@/images/b1.3.webp";
import BlackSalt4 from "@/images/b1.4.webp";

const saltVariants = [
  {
    id: 1,
    name: "Black Salt 2-5mm",
    description:
      "Premium granule size perfect for seasoning and everyday culinary applications.",
    image: BlackSalt1,
  },
  {
    id: 2,
    name: "Black Salt 1-2mm",
    description:
      "Ideal for professional cooking applications and commercial use.",
    image: BlackSalt2,
  },
  {
    id: 3,
    name: "Black Salt Fine",
    description:
      "Fine texture designed for delicate dishes and precise seasoning control.",
    image: BlackSalt3,
  },
  {
    id: 4,
    name: "Black Salt Powder",
    description:
      "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
    image: BlackSalt4,
  },
];

const breadcrumbSchema = {
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
      name: "Himalayan Black Salt",
      item: "https://www.silverlinetradingcompany.com/black-salt",
    },
  ],
};

export default function BlackSalt() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AnimateOnScroll>
        <div className="w-full px-4 sm:px-6 lg:px-8 mx-auto pt-10 pb-8">
          {/* Professional Header */}
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-5 leading-tight">
              Himalayan Black Salt
            </h1>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Distinctive smoky flavor and mineral-rich composition — a staple in South Asian cuisine, available in bulk for food and wellness industries.
            </p>
          </div>

          {/* Professional Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 lg:gap-6 max-w-sm sm:max-w-7xl mx-auto mb-12 sm:mb-16 items-stretch">
            {saltVariants.map((salt, index) => (
              <AnimateOnScroll key={salt.id} delay={index * 100} className="h-full">
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
              </AnimateOnScroll>
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
      </AnimateOnScroll>
    </div>
  );
}
