"use client";
import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "../images/CompanyLogo.png";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 pt-12 pb-8 min-h-[300px]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 mx-6">
        {/* Logo & Company Info */}
        <div>
          <Image
            src={CompanyLogo}
            width={"auto"}
            height={45}
            alt="Silverline Trading Logo"
            className="mb-4 hover:scale-105 transition-transform duration-300"
          />
          <div className="max-w-xs w-60">
            <p className="text-sm mb-2">
              specializes in exporting the premium Himalayan salt products
              worldwide.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 md:mt-0">
          {" "}
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <Link
                href="/"
                className="hover:text-bold hover:text-[var(--primary)]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="/#about" className="hover:text-[var(--primary)]">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-[var(--primary)]">
                Let's Talk Business
              </Link>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="mr-4 mt-8 md:mt-0">
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            PRODUCTS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <Link href="/pink-salt" className="hover:text-[var(--primary)]">
                Pink Salt
              </Link>
            </li>
            <li>
              <Link href="/white-salt" className="hover:text-[var(--primary)]">
                White Salt
              </Link>
            </li>
            <li>
              <Link href="/black-salt" className="hover:text-[var(--primary)]">
                Black Salt
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--primary)]">
                Salt Lamps
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--primary)]">
                Animal Lick Salt
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--primary)]">
                Salt Bricks
              </Link>
            </li>
            <li>
              <Link href="/custom" className="hover:text-[var(--primary)]">
                Custom Crafted Items
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact/Resources */}
        <div className="pr-4 sm:pr-6 mt-8 md:mt-0">
          <h3 className="inline-block font-bold text-lg mb-4 pb-2 md:mb-3 md:pb-1 border-b border-gray-300">
            CONTACT US
          </h3>
          <div className="flex items-center gap-3 mb-2">
            <FaEnvelope className="w-5 h-5 shrink-0" aria-hidden="true" />
            <Link
              href="mailto:info@silverlinetradingcompany.com"
              className="font-semibold text-[var(--primary)] hover:text-[var(--dark)] transition-colors"
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
              className="font-semibold text-[var(--primary)] hover:text-[var(--dark)] transition-colors"
            >
              +92 320 5509624
            </Link>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="mt-6 pt-8 border-t border-gray-300 text-center">
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} Silverline Trading Company. All
          rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
