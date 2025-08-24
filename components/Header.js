"use client";
import Mobile from "./Mobile";
import useActiveLink from "@/utils/observe";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "@/Context/Context";
import Logo2 from "@/images/logo.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaYoutube, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

// Icons
import home from "@/images/home_icon.png";
import about from "@/images/about_icon.png";
import mission from "@/images/mission_icon.png";
import aboutSalt from "@/images/salt_icon.png";
import product from "@/images/products_icon.png";
import contact from "@/images/contact_icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const { user } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const name = user?.data?.name.replace(/ .*/, "");
  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);

  const sections = [
    { name: "Home", href: "/", icon: home },
    { name: "About", href: "/#about", icon: about },
    { name: "Mission", href: "/#mission", icon: mission },
    { name: "About Salt", href: "/#about_salt", icon: aboutSalt },
    { name: "Products", href: "/#categories", icon: product, hasSubMenu: true },
    { name: "Contact", href: "/#contact", icon: contact },
  ];

  const subSections = [
    { name: "Black Salt", href: "/#salt-b" },
    { name: "White Salt", href: "/#salt-w" },
    { name: "Pink Salt", href: "/#salt-p" },
    { name: "Customized Products", href: "/#salt-c" },
  ];

  const activeLink = useActiveLink(sections.map(section => section.name));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setMobileProductsOpen(false);
    
    if (href.startsWith('/#')) {
      const id = href.substring(2);
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (href.startsWith('/')) {
      window.location.href = href;
    }
  };

  const socialLinks = [
    { icon: FaFacebook, label: "Facebook" },
    { icon: FaTwitter, label: "Twitter" },
    { icon: FaInstagram, label: "Instagram" },
    { icon: FaYoutube, label: "YouTube" },
    { icon: FaLinkedin, label: "LinkedIn" },
  ];

  return (
    <header className="relative bg-white fixed top-0 left-0 w-full z-50 shadow-sm">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <div 
          ref={sidebarRef}
          className="bg-gradient-to-b from-gray-50 to-gray-100 border-r border-blue-200 fixed top-0 left-0 h-full md:w-60 lg:w-64 z-50 shadow-lg overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200"
        >
          <div className="flex flex-col h-full px-4 py-6">
            <Link href="/" className="text-teal-600 mb-8 group">
              <div className="transform transition-transform duration-200 group-hover:scale-105">
                <Image
                  width={205}
                  height={80}
                  src={Logo2}
                  alt="Faychem company logo"
                  className="filter drop-shadow-sm"
                />
              </div>
            </Link>

            <nav aria-label="Global" className="flex-1">
              <ul className="flex flex-col gap-2 text-lg w-full">
                {sections.map(({ name, href, hasSubMenu, icon }) => (
                  <li key={name} className="relative">
                    <div className={`flex items-center w-full rounded-lg transition-all duration-300 ease-in-out ${
                      activeLink === name
                        ? "bg-blue-500 text-white shadow-md transform scale-105"
                        : "text-blue-600 hover:bg-blue-50 hover:shadow-sm hover:transform hover:scale-102"
                    } p-3 group cursor-pointer`}>
                      <div className="flex items-center flex-1 min-w-0">
                        <div className="flex-shrink-0 mr-3">
                          <Image
                            src={icon}
                            alt={name}
                            width={name === "Home" || name === "About" ? 20 : 24}
                            height={name === "Home" || name === "About" ? 20 : 24}
                            className={`transition-all duration-300 ${
                              activeLink === name ? "brightness-0 invert" : "group-hover:scale-110"
                            }`}
                          />
                        </div>
                        {hasSubMenu ? (
                          <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="flex items-center justify-between w-full text-left font-medium"
                          >
                            <span className="truncate">{name}</span>
                            <FaChevronDown 
                              className={`ml-2 transition-all duration-300 flex-shrink-0 ${
                                isProductsOpen ? 'rotate-180' : 'rotate-0'
                              } ${activeLink === name ? 'text-white' : 'text-blue-400'}`} 
                            />
                          </button>
                        ) : (
                          <Link href={href} className="w-full font-medium truncate">
                            {name}
                          </Link>
                        )}
                      </div>
                    </div>
                    
                    {hasSubMenu && (
                      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <ul className="mt-2 ml-4 space-y-1 border-l-2 border-blue-200 pl-4">
                          {subSections.map(({ name, href }) => (
                            <li key={name}>
                              <Link
                                href={href}
                                scroll={true}
                                className="block py-2 px-3 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200 hover:transform hover:translate-x-1"
                              >
                                {name.trim()}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200">
              <div className="flex justify-between items-center">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl transform transition-all duration-200 hover:scale-125 hover:rotate-12 p-1"
                  >
                    <Icon />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden items-center justify-between px-4 py-3 bg-white border-b border-blue-200 shadow-sm fixed top-0 left-0 w-full y-50">
        <Link href="/" className="group">
          <div className="transform transition-transform duration-200 group-hover:scale-105">
            <Image
              width={100}
              height={100}
              src={Logo2}
              alt="Faychem company logo"
              className="filter drop-shadow-sm"
            />
          </div>
        </Link>
        <button
          onClick={handleToggle}
          className="rounded-lg bg-gray-50 p-3 text-gray-600 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md active:scale-95"
        >
          <span className="sr-only">Toggle menu</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300" />
          <div 
            ref={mobileMenuRef}
            className="fixed top-0 left-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-out"
          >
            <div className="flex flex-col h-full">
              {/* Mobile Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Image
                  width={80}
                  height={80}
                  src={Logo2}
                  alt="Faychem company logo"
                />
                <button
                  onClick={handleToggle}
                  className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav aria-label="Global" className="flex-1 p-4 overflow-y-auto">
                <ul className="space-y-3">
                  {sections.map(({ name, href, hasSubMenu }) => (
                    <li key={name}>
                      {hasSubMenu ? (
                        <div className="space-y-2">
                          <button
                            onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            className={`flex items-center justify-between w-full p-3 rounded-lg text-left transition-all duration-300 ${
                              activeLink === name
                                ? "bg-blue-500 text-white shadow-md"
                                : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                            }`}
                          >
                            <span className="font-medium">
                              {name.charAt(0).toUpperCase() + name.slice(1)}
                            </span>
                            <FaChevronDown
                              className={`transition-transform duration-300 ${
                                mobileProductsOpen ? 'rotate-180' : 'rotate-0'
                              }`}
                            />
                          </button>
                          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                            mobileProductsOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <ul className="ml-4 space-y-1 border-l-2 border-blue-200 pl-4">
                              {subSections.map(({ name, href }) => (
                                <li key={name}>
                                  <button
                                    onClick={() => handleLinkClick(href)}
                                    className="block w-full p-2 text-left text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-all duration-200"
                                  >
                                    {name.trim()}
                                  </button>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleLinkClick(href)}
                          className={`block w-full p-3 rounded-lg text-left transition-all duration-300 font-medium ${
                            activeLink === name
                              ? "bg-blue-500 text-white shadow-md"
                              : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="p-4 border-t border-gray-200">
                <div className="flex justify-center space-x-6">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="text-blue-500 hover:text-blue-700 text-xl transform transition-all duration-200 hover:scale-125 sm:p-2"
                    >
                      <Icon />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;