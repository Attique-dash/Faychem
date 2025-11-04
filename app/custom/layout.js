export const metadata = {
  title: "Crafted Salt Products",
  description:
    "Custom crafted Himalayan salt products including salt lamps, candle holders, wellness & spa items, decorative pieces, animal lick salt, and salt bricks. Personalized salt creations available.",
  keywords: [
    "salt lamps",
    "crafted salt products",
    "custom salt items",
    "Himalayan salt lamps",
    "salt candle holders",
    "wellness salt products",
    "animal lick salt",
    "salt bricks",
  ],
  openGraph: {
    title: "Crafted Salt Products | Custom Salt Items",
    description:
      "Custom crafted Himalayan salt products including salt lamps, candle holders, and decorative pieces.",
    url: "https://www.silverlinetradingcompany.com/custom",
    type: "website",
    images: [
      {
        url: "https://www.silverlinetradingcompany.com/images/1.1.png",
        width: 1200,
        height: 630,
        alt: "Crafted Salt Products",
      },
    ],
  },
  alternates: {
    canonical: "/custom",
  },
};

export default function CustomLayout({ children }) {
  return children;
}
