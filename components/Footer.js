"use client";
import Image from "next/image";
import Logo2 from "../images/logo1.png";
import EmailIcon from "../images/email.png";
import PhoneIcon from "../images/call.png";

const Footer = () => (
  <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 pt-12 pb-8 min-h-[300px]">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mx-6">
        {/* Logo & Company Info */}
        <div>
          <Image
            src={Logo2}
            width={"auto"}
            height={45}
            alt="Silverline Trading Logo"
            className="mb-4"
          />
          <div className="max-w-xs w-60">
            <p className="text-sm mb-2">
              specializes in exporting the premium Himalayan salt products
              worldwide.
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-3 border-b border-gray-300 pb-1">
            QUICK LINKS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <a href="/" className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="/#about" className="hover:text-blue-600">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                Let's Talk Business
              </a>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-bold text-lg mb-3 border-b border-gray-300 pb-1">
            OUR PRODUCTS
          </h3>
          <ul className="space-y-2 list-disc list-inside">
            <li>
              <a href="/pink-salt" className="hover:text-blue-600">
                Pink Salt
              </a>
            </li>
            <li>
              <a href="/white-salt" className="hover:text-blue-600">
                White Salt
              </a>
            </li>
            <li>
              <a href="/black-salt" className="hover:text-blue-600">
                Black Salt
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-blue-600">
                Salt Lamps
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-blue-600">
                Animal Lick Salt
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-blue-600">
                Industrial Salt
              </a>
            </li>
            <li>
              <a href="/custom" className="hover:text-blue-600">
                Salt Products
              </a>
            </li>
          </ul>
        </div>

        {/* Contact/Resources */}
        <div>
          <h3 className="font-bold text-lg mb-3">CONTACT US</h3>
          <div className="flex items-center gap-3 mb-2">
            <Image src={EmailIcon} alt="Email" width={22} height={22} />
            <a
              href="mailto:info@silverlinetrading.com"
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              info@silverlinetrading.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Image src={PhoneIcon} alt="Phone" width={22} height={22} />
            <a
              href="tel:+971566494784"
              className="font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              +971 56 649 4784
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
