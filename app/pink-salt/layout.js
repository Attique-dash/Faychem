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

export default function PinkSaltLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {children}
    </>
  );
}
