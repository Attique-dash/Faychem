const siteUrl = "https://www.silverlinetradingcompany.com";

export const metadata = {
  title: "Himalayan White Salt",
  description:
    "Premium Himalayan White Salt products in various granule sizes (2-5mm, 1-2mm, fine, powder). Natural, pure white salt from Pakistan. Bulk pricing available for export.",
  keywords: [
    "Himalayan white salt",
    "white salt 2-5mm",
    "white salt powder",
    "white salt exporter",
    "premium white salt",
    "culinary white salt",
  ],
  openGraph: {
    title: "Himalayan White Salt | Premium White Salt Products",
    description:
      "Premium Himalayan White Salt in various granule sizes. Natural, pure salt from Pakistan.",
    url: `${siteUrl}/white-salt`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/w4.1.png`,
        width: 1200,
        height: 630,
        alt: "Himalayan White Salt Products",
      },
    ],
  },
  alternates: {
    canonical: "/white-salt",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Himalayan White Salt",
  description:
    "Premium Himalayan White Salt available in multiple granule sizes (2-5mm, 1-2mm, fine, powder). Pure and naturally harvested from the Khewra Salt Mines of Pakistan.",
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
    `${siteUrl}/images/w4.1.png`,
    `${siteUrl}/images/w4.2.png`,
    `${siteUrl}/images/w4.3.png`,
    `${siteUrl}/images/w4.4.png`,
  ],
  url: `${siteUrl}/white-salt`,
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
      name: "White Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
    },
    {
      "@type": "Product",
      name: "White Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
    },
    {
      "@type": "Product",
      name: "White Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
    },
    {
      "@type": "Product",
      name: "White Salt Powder",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
    },
  ],
};

export default function WhiteSaltLayout({ children }) {
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
