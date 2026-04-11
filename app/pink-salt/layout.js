const siteUrl = "https://www.silverlinetradingcompany.com";

export const metadata = {
  title: "Himalayan Pink Salt",
  description:
    "Premium Himalayan Pink Salt products in various granule sizes (2-5mm, 1-2mm, fine, powder). Natural, mineral-rich pink salt from Pakistan. Bulk pricing available for export.",
  keywords: [
    "Himalayan pink salt",
    "pink salt 2-5mm",
    "pink salt powder",
    "pink salt exporter",
    "premium pink salt",
    "culinary pink salt",
  ],
  openGraph: {
    title: "Himalayan Pink Salt | Premium Pink Salt Products",
    description:
      "Premium Himalayan Pink Salt in various granule sizes. Natural, mineral-rich salt from Pakistan.",
    url: `${siteUrl}/pink-salt`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/p2.1.png`,
        width: 1200,
        height: 630,
        alt: "Himalayan Pink Salt Products",
      },
    ],
  },
  alternates: {
    canonical: "/pink-salt",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Himalayan Pink Salt",
  description:
    "Premium Himalayan Pink Salt available in multiple granule sizes (2-5mm, 1-2mm, fine, powder). Naturally mineral-rich, hand-mined from the Khewra Salt Mines of Pakistan.",
  brand: {
    "@type": "Brand",
    name: "Silverline Trading Company",
  },
  manufacturer: {
    "@type": "Organization",
    name: "Silverline Trading Company",
    url: siteUrl,
  },
  image: [
    `${siteUrl}/images/p2.1.png`,
    `${siteUrl}/images/p2.2.png`,
    `${siteUrl}/images/p2.3.png`,
    `${siteUrl}/images/p2.4.png`,
  ],
  url: `${siteUrl}/pink-salt`,
  category: "Food & Beverages > Condiments > Salt",
  material: "Himalayan Rock Salt",
  countryOfOrigin: "PK",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceCurrency: "USD",
    seller: {
      "@type": "Organization",
      name: "Silverline Trading Company",
    },
    eligibleRegion: "Worldwide",
  },
  hasVariant: [
    {
      "@type": "Product",
      name: "Pink Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
    },
    {
      "@type": "Product",
      name: "Pink Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
    },
    {
      "@type": "Product",
      name: "Pink Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
    },
    {
      "@type": "Product",
      name: "Pink Salt Powder",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Himalayan Pink Salt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Himalayan Pink Salt is a natural rock salt mined from the Khewra Salt Mines in Pakistan. It gets its distinctive pink color from trace minerals including iron, potassium, magnesium, and calcium — over 84 trace minerals in total.",
      },
    },
    {
      "@type": "Question",
      name: "What grain sizes of pink salt do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer Himalayan Pink Salt in four granule sizes: coarse (2-5mm), medium (1-2mm), fine, and powder. Each size is suited for different applications — from seasoning and cooking to food processing and wellness products.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer bulk pricing for pink salt exports?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Silverline Trading Company offers competitive bulk pricing for Himalayan Pink Salt exports worldwide. We handle custom packaging, private labeling, and international shipping to meet your business requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What are the uses of Himalayan Pink Salt?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Himalayan Pink Salt is used for culinary seasoning, gourmet cooking, food processing, spa and wellness treatments, salt lamps, bath salts, and industrial applications. Its rich mineral content makes it a popular alternative to regular table salt.",
      },
    },
  ],
};

export default function PinkSaltLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
