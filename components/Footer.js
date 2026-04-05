import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "../images/CompanyLogo.webp";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#f5f5f4] text-gray-800 pt-12 pb-8">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Company Info */}
        <div>
          <Image
            src={CompanyLogo}
            width={180}
            height={45}
            alt="Silverline Trading Logo"
            className="mb-4 hover:scale-105 transition-transform duration-300"
          />
          <p className="text-sm mb-2 max-w-[240px]">
            specializes in exporting the premium Himalayan salt products
            worldwide.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <Link
                href="/"
                className="hover:text-[var(--color-primary-dark)] transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/#about"
                className="hover:text-[var(--color-primary-dark)] transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-[var(--color-primary-dark)] transition-colors"
              >
                Let&#39;s Talk Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            PRODUCTS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <Link href="/pink-salt" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Pink Salt
              </Link>
            </li>
            <li>
              <Link href="/white-salt" className="hover:text-[var(--color-primary-dark)] transition-colors">
                White Salt
              </Link>
            </li>
            <li>
              <Link href="/black-salt" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Black Salt
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Salt Lamps
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Animal Lick Salt
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Salt Bricks
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--color-primary-dark)] transition-colors">
                Custom Crafted Items
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            CONTACT US
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="w-5 h-5 shrink-0" aria-hidden="true" />
            <Link
              href="mailto:info@silverlinetradingcompany.com"
              className="font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary-darker)] transition-colors"
            >
              info@silverlinetradingcompany.com
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="w-5 h-5 rotate-90 shrink-0" />
            <Link
              href="https://wa.me/923205509624?text=Hi%2C%20I%27m%20interested%20in%20your%20Himalayan%20salt%20products.%20Can%20you%20provide%20more%20information%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary-darker)] transition-colors"
            >
              +92 320 5509624
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-6 pt-8 border-t border-gray-300 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Silverline Trading Company. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
