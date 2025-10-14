import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";
import { Icon } from "lucide-react";
import { Sr } from "react-flags-select";
import Logo2 from "@/images/logo1.png";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Silverline Trading Company | STC",
  description: "Your Global Source for High-Quality Salt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
