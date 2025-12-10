import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Analytics from "@/components/Analytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-montserrat",
});

const siteUrl = "https://www.silverlinetradingcompany.com";
const siteName = "Silverline Trading Company";
const defaultDescription =
  "Premium quality Himalayan salt exporter from Pakistan. Exporting pink salt, white salt, black salt, and custom crafted salt products worldwide.";

const organizationSchema = {
  "@context": "https://schema.org",

  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/android-chrome-512x512.webp`,
  description: defaultDescription,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+92 320 5509624",
    contactType: "Customer Service",
    email: "info@silverlinetradingcompany.com",
    areaServed: "Worldwide",
    availableLanguage: ["en"],
  },
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK",
    addressLocality: "Lahore",
  },
};

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Global Exporter of Himalayan Salt`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "Himalayan salt",
    "pink salt",
    "white salt",
    "black salt",
    "salt exporter",
    "Pakistan salt",
    "premium salt",
    "culinary salt",
    "industrial salt",
    "salt products",
    "silverline trading company",
  ],
  authors: [{ name: siteName }],
  creator: siteName,
  publisher: siteName,

  icons: {
    icon: [
      { url: "/android-chrome-512x512.webp", sizes: "512x512", type: "image/webp" },

    ],
    apple: [
      { url: "/apple-touch-icon.webp", sizes: "180x180", type: "image/webp" },
    ],
    other: [
    ],
  },

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: `${siteName} | STC`,
    description: defaultDescription,
    images: [
      {
        url: `${siteUrl}/android-chrome-512x512.webp`,
        width: 512,
        height: 512,
        alt: `${siteName} Logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Salt Exporter`,
    description: defaultDescription,
    images: [`${siteUrl}/android-chrome-512x512.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "dmWLoS5RWdX8PdXBIWsqJjQBQpIUKlZO",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={montserrat.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Analytics />
        <ContextProvider>
          <Header />
          <Toaster />
          <main className="pt-16">{children}</main>
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
