import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Logo from "@/images/Logo.png";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.silverlinetradingcompany.com"),
  title: {
    default: "Silverline Trading Company | STC ",
    template: "%s | Silverline Trading Company",
  },
  description: "Your Global Source for High-Quality Salt",

  icons: {
    icon: Logo.src,
  },

  alternates: { canonical: "/" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
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
