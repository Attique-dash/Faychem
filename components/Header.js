"use client";
import Mobile from "./Mobile";
import useActiveLink from "@/utils/observe";
import { useContext, useState } from "react";
import { Context } from "@/Context/Context";
import Logo2 from "@/images/logo.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaYoutube, FaLinkedin } from "react-icons/fa";

import Link from "next/link";
//five icons
import home from "@/images/home_icon.png";
import about from "@/images/about_icon.png";
import mission from "@/images/mission_icon.png";
import aboutSalt from "@/images/salt_icon.png";
import product from "@/images/products_icon.png";
import contact from "@/images/contact_icon.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const { user } = useContext(Context);
  const [categories, setCategories] = useState([]);
  const name = user?.data?.name.replace(/ .*/, "");

  const sections = [
        { name: "Home", href: "/", icon: home },
        { name: "About", href: "/#about", icon: about },
        { name: "Mission", href: "/#mission", icon: mission },
        { name: "About Salt", href: "/#about_salt", icon: aboutSalt },
        { name: "Products", href: "/#categories", icon: product, hasSubMenu: true },
        { name: "Contact", href: "/#contact", icon: contact },
      ];

  const subSections = [
    { name: " Black Salt", href: "/#salt-b" },
    { name: " White Salt", href: "/#salt-w" },
    { name: " Pink Salt", href: "/#salt-p" },
    { name: " Customized Products", href: "/#salt-c" },
  ];

  const activeLink = useActiveLink(sections.map(section => section.name));

  const handleToggle = () => {
    setIsOpen(prev => !prev);
  };

  const handleLinkClick = (href) => {
    setIsOpen(false); 
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

  return (
    <header className="relative bg-white fixed top-0 left-0 w-full z-50">
      {/* Navbar for large screens */}
      <div className="hidden md:flex">
        <div className="bg-gray-100 overflow-scroll scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-200 border-r border-blue-400 fixed top-0 left-0 h-full md:w-60 lg:w-64 z-50">
          <div className="flex flex-col h-full px-4 py-6">
            <Link href={"/"} className="text-teal-600 mb-8">
              <Image
                width={205}
                height={80}
                src={Logo2}
                alt="Faychem company logo"
              />
            </Link>
            <nav aria-label="Global">
               <ul className="flex flex-col gap-4 text-lg text-blue-500 w-full">
                 {sections.map(({ name, href, hasSubMenu, icon }) => (
                  <li key={name} className="relative flex items-center w-full hover:bg-blue-100 p-2">
                    <Image
                      src={icon}
                      alt={name}
                      width={name === "Home" || name === "About" ? 20 : 24}
                      height={name === "Home" || name === "About" ? 20 : 24}
                      className="mr-3"
                    />
                    {hasSubMenu ? (
                      <>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className="flex items-center justify-between w-full"
                        >
                          {name}
                          <FaChevronDown className={`ml-2 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                        </button>
                        {isProductsOpen && (
                           <ul className="mt-2 ml-1 absolute top-full left-0 bg-white shadow-lg w-full z-30 scroll-submenu">
                              {subSections.map(({ name, href }) => (
                                 <li key={name} className="hover:bg-blue-200 p-2">
                                     <Link href={href} scroll={true}>
                                   {name}
                                </Link>
                               </li>
                              ))}
                          </ul>
                         )}
                      </>
                    ) : (
                      <Link href={href} className="w-full">
                        {name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-auto flex justify-between items-center">
               <FaFacebook className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />
               <FaTwitter className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />
               <FaInstagram className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />
               <FaYoutube className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />
               <FaLinkedin className="text-blue-500 hover:text-blue-700 cursor-pointer text-xl" />

             </div>

          </div>          
        </div>
      </div>

      {/* Navbar for small screens */}
      <div className="flex md:hidden items-center justify-between px-4 py-2 bg-white border-b border-blue-500 fixed top-0 left-0 w-full z-50">
        <Link href={"/"}>
        <Image
          width={100}
          height={100}
          src={Logo2}
          alt="Faychem company logo"
        />
        </Link>
        <button
          onClick={handleToggle}
          className="rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75"
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

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white shadow-lg z-50 md:hidden">
          <div className="flex flex-col px-4 py-6 pt-[0.5rem] pb-[1.5rem]">
            <Link href={"/"}>
            <Image
              width={100}
              height={100}
              src={Logo2}
              alt="Faychem company logo"
              className="absolute"
            /> 
            </Link>
            <button
              onClick={handleToggle}
              className="self-end text-gray-600 hover:text-gray-800 relative top-[8px] right-[8px]"
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
            <nav aria-label="Global" className="flex-1 mt-[3rem] ml-[10px]">
              <ul className="flex flex-col gap-6 text-sm">
                {sections.map(({ name, href, hasSubMenu }) => (
                  <li key={name} className="relative">
                    {hasSubMenu ? (
                      <>
                        <button
                          onClick={() => setIsProductsOpen(!isProductsOpen)}
                          className={`flex items-center gap-2 transition cursor-pointer ${
                            activeLink === name
                              ? "text-blue-500 underline underline-offset-4"
                              : "text-gray-800 hover:text-blue-500"
                          }`}
                          style={{ transition: "color 0.3s, text-decoration 0.3s" }}
                        >
                          {name.charAt(0).toUpperCase() + name.slice(1)}
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className={`h-4 w-4 transition-transform ${isProductsOpen ? 'rotate-180' : 'rotate-0'}`}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                        </button>
                        {isProductsOpen && (
                          <ul className=" static left-full top-0 mt-2 w-48 bg-white">
                            {subSections.map(({ name, href }) => (
                              <li key={name} className="p-2 hover:bg-gray-100">
                                <button
                                  onClick={() => handleLinkClick(href)}
                                  className={`transition cursor-pointer ${
                                    activeLink === name
                                      ? "text-blue-500 underline underline-offset-4"
                                      : "text-gray-800 hover:text-blue-500"
                                  }`}
                                  style={{ transition: "color 0.3s, text-decoration 0.3s" }}
                                >
                                  {name}
                                </button>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <button
                        onClick={() => handleLinkClick(href)}
                        className={`transition cursor-pointer ${
                          activeLink === name
                            ? "text-blue-500 underline underline-offset-4"
                            : "text-gray-800 hover:text-blue-500"
                        }`}
                        style={{ transition: "color 0.3s, text-decoration 0.3s" }}
                      >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
