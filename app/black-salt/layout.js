const siteUrl = "https://www.silverlinetradingcompany.com";

export const metadata = {
  title: "Himalayan Black Salt",
  description:
    "STC offers premium Himalayan Black Salt products in various sizes. Natural, mineral-rich black salt from Pakistan. Bulk pricing available for export.",
  keywords: [
    "Himalayan black salt",
    "black salt 2-5mm",
    "black salt powder",
    "black salt exporter",
    "premium black salt",
    "culinary black salt",
  ],
  openGraph: {
    title: "Himalayan Black Salt | Premium Black Salt Products",
    description:
      "Premium Himalayan Black Salt in various granule sizes. Natural, mineral-rich salt from Pakistan.",
    url: `${siteUrl}/black-salt`,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/b1.1.png`,
        width: 1200,
        height: 630,
        alt: "Himalayan Black Salt Products",
      },
    ],
  },
  alternates: {
    canonical: "/black-salt",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Himalayan Black Salt",
  description:
    "Premium Himalayan Black Salt (Kala Namak) available in multiple granule sizes (2-5mm, 1-2mm, fine, powder). Rich in minerals with a distinctive sulfurous flavor, naturally sourced from Pakistan.",
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
    `${siteUrl}/images/b1.1.png`,
    `${siteUrl}/images/b1.2.png`,
    `${siteUrl}/images/b1.3.png`,
    `${siteUrl}/images/b1.4.png`,
  ],
  url: `${siteUrl}/black-salt`,
  category: "Food & Beverages > Condiments > Salt",
  material: "Himalayan Rock Salt",
  countryOfOrigin: "PK",
  additionalProperty: {
    "@type": "PropertyValue",
    name: "Alternative Name",
    value: "Kala Namak",
  },
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
      name: "Black Salt 2-5mm",
      description:
        "Premium granule size perfect for seasoning and everyday culinary applications.",
    },
    {
      "@type": "Product",
      name: "Black Salt 1-2mm",
      description:
        "Ideal for professional cooking applications and commercial use.",
    },
    {
      "@type": "Product",
      name: "Black Salt Fine",
      description:
        "Fine texture designed for delicate dishes and precise seasoning control.",
    },
    {
      "@type": "Product",
      name: "Black Salt Powder",
      description:
        "Ultra-fine powder ensuring even distribution and instant flavor enhancement.",
    },
  ],
};

export default function BlackSaltLayout({ children }) {
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
