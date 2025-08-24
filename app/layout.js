import { Montserrat } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import Header from "@/components/Header";
import ContextProvider from "@/Context/Context";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "faychem",
  description: "Your Global Source for High-Quality Salt",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextTopLoader color="#000" height={4} />
        <ContextProvider>
          <Header />
          <Toaster />
          {children}
          <Footer />
        </ContextProvider>
      </body>
    </html>
  );
}
