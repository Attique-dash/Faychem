const siteUrl = "https://www.silverlinetradingcompany.com";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact STC for premium Himalayan salt products. Get quotes for bulk orders, custom specifications, and professional consultation. Email: info@silverlinetradingcompany.com",
  keywords: [
    "contact salt exporter",
    "salt bulk order",
    "Himalayan salt quote",
    "salt supplier contact",
    "custom salt order",
  ],
  openGraph: {
    title: "Contact Us | Get a Quote | Silverline Trading Company",
    description:
      "Contact us for premium Himalayan salt products, bulk orders, and custom specifications.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  alternates: {
    canonical: "/contact",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#business`,
  name: "Silverline Trading Company",
  description:
    "Premium Himalayan salt exporter from Pakistan. Supplying pink salt, white salt, black salt, and custom salt products worldwide.",
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.webp`,
  image: `${siteUrl}/android-chrome-512x512.webp`,
  telephone: "+92-320-5509624",
  email: "info@silverlinetradingcompany.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Lahore",
    addressCountry: "PK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.5204,
    longitude: 74.3587,
  },
  areaServed: "Worldwide",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92-320-5509624",
    contactType: "sales",
    email: "info@silverlinetradingcompany.com",
    availableLanguage: ["English"],
  },
};

export default function ContactLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {children}
    </>
  );
}
