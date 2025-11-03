"use client";
import Image from "next/image";
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
              <a
                href="/"
                className="hover:text-bold hover:text-[var(--primary)]"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-[var(--primary)]">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-[var(--primary)]">
                Let's Talk Business
              </a>
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
              <a href="/pink-salt" className="hover:text-[var(--primary)]">
                Pink Salt
              </a>
            </li>
            <li>
              <a href="/white-salt" className="hover:text-[var(--primary)]">
                White Salt
              </a>
            </li>
            <li>
              <a href="/black-salt" className="hover:text-[var(--primary)]">
                Black Salt
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-[var(--primary)]">
                Salt Lamps
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-[var(--primary)]">
                Animal Lick Salt
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-[var(--primary)]">
                Salt Bricks
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-[var(--primary)]">
                Custom Crafted Items
              </a>
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
            <a
              href="mailto:info@silverlinetradingcompany.com"
              className="font-semibold text-[var(--primary)] hover:text-[var(--dark)] transition-colors"
            >
              info@silverlinetradingcompany.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="w-5 h-5 rotate-90 shrink-0" />
            <a
              href="tel:+971566494784"
              className="font-semibold text-[var(--primary)] hover:text-[var(--dark)] transition-colors"
            >
              +92 320 5509624
            </a>
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
