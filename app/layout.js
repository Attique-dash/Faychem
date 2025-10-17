import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import Logo from "@/images/mlogo.png";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  icons: {
    icon: Logo.src,
  },
  title: "Silverline Trading Company | STC",
  description: "Your Global Source for High-Quality Salt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <NextTopLoader color="#000" height={4} showSpinner={false} />
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
