"use client";

import useActiveLink from "@/utils/observe";
import { useState, useEffect, useRef } from "react";
import CompanyLogo from "@/images/CompanyLogo.webp";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaChevronDown,
} from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const sidebarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const dropdownRef = useRef(null);
  const router = useRouter();

  // Scroll-aware header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    { icon: FaFacebook, label: "Facebook", href: "#" },
    { icon: FaTwitter, label: "Twitter", href: "#" },
    { icon: FaInstagram, label: "Instagram", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "#" },
    { icon: FaLinkedin, label: "LinkedIn", href: "#" },
  ];

  const sections = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/#about" },
    // { name: "About Salt", href: "/#about_salt" },
    { name: "Products", href: "/#categories", hasSubMenu: true },
    { name: "Contact Us", href: "/contact" },
  ];

  const subSections = [
    { name: "Himalayan Pink Salt", href: "/pink-salt" },
    { name: "Himalayan White Salt", href: "/white-salt" },
    { name: "Himalayan Black Salt", href: "/black-salt" },
    { name: "Crafted Items", href: "/custom" },
  ];

  const activeLink = useActiveLink(sections.map((section) => section.name));

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsOpen(false);
      }
    };

    if (isOpen || isProductsOpen) {
      document.addEventListener("click", handleClickOutside);
      if (isOpen) document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, isProductsOpen]);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLinkClick = (href) => {
    setIsOpen(false);
    setMobileProductsOpen(false);

    if (href.startsWith("/#")) {
      const id = href.substring(2);

      // Check if we're already on the home page
      if (window.location.pathname === "/") {
        // Already on home page, just scroll
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 300);
      } else {
        // On different page, navigate to home first
        router.push("/");

        // Wait for navigation and page load, then scroll
        setTimeout(() => {
          const section = document.getElementById(id);
          if (section) {
            const headerOffset = 80;
            const elementPosition = section.getBoundingClientRect().top;
            const offsetPosition =
              elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          }
        }, 800); // Longer delay for page navigation
      }
    } else if (href.startsWith("/")) {
      router.push(href);
    }
  };

  return (
    <header className="z-50 fixed top-0 left-0 w-full overflow-hidden">
      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div
          ref={sidebarRef}
          className={`fixed z-50 transition-all duration-500 ease-in-out ${
            scrolled
              ? "top-3 left-4 right-4 h-14 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
              : "top-0 left-0 right-0 h-16 bg-white shadow-md rounded-none"
          }`}
        >
          <div className="flex items-center justify-between h-full px-4 sm:px-6 mx-auto max-w-7xl w-full">
            {/* Logo */}
            <Link href="/" className="text-[var(--color-primary)] group ml-2">
              <div className="transform transition-transform duration-500 group-hover:scale-105">
                <Image
                  width={160}
                  height={40}
                  src={CompanyLogo}
                  alt="Silverline Trading Company logo"
                  className="filter drop-shadow-sm"
                />
              </div>
            </Link>

            {/* Navigation */}
            <nav aria-label="Main navigation" className="flex-1 px-8">
              <ul
                role="menubar"
                aria-label="Main menu"
                className="flex flex-row gap-1 items-center justify-center"
              >
                {sections.map(({ name, href, hasSubMenu }) => (
                  <li key={name} className="relative">
                    <div
                      ref={hasSubMenu ? dropdownRef : null}
                      className={`flex items-center rounded-lg transition-all duration-300 shadow-sm hover:shadow-md ${
                        activeLink === name
                          ? "text-[var(--color-primary)] shadow-md"
                          : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                      } px-3 py-2 mx-1 group cursor-pointer relative`}
                    >
                      <div className="flex items-center flex-1 min-w-0">
                        {hasSubMenu ? (
                          <button
                            onClick={() => setIsProductsOpen(!isProductsOpen)}
                            className="flex items-center justify-between w-full text-left font-medium"
                          >
                            <span>{name}</span>
                            <FaChevronDown
                              className={`ml-1.5 text-xs transition-all duration-300 ${
                                isProductsOpen ? "rotate-180" : "rotate-0"
                              }`}
                            />
                          </button>
                        ) : (
                          <Link
                            href={href}
                            className="w-full font-medium transition-colors duration-200"
                          >
                            {name}
                          </Link>
                        )}
                      </div>
                      {/* Active underline indicator */}
                      <span
                        className={`absolute bottom-0 left-3 right-3 h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 ${
                          activeLink === name
                            ? "opacity-100 scale-x-100"
                            : "opacity-0 scale-x-0"
                        }`}
                      />
                    </div>

                    {hasSubMenu && (
                      <div
                        className={`absolute top-full left-0 bg-white shadow-xl rounded-lg min-w-[200px] transition-all duration-300 origin-top ${
                          isProductsOpen
                            ? "opacity-100 visible translate-y-1 scale-y-100"
                            : "opacity-0 invisible translate-y-2 scale-y-95 pointer-events-none"
                        }`}
                      >
                        <ul className="py-1">
                          {subSections.map(({ name, href }) => (
                            <li key={name}>
                              <Link
                                href={href}
                                onClick={() => setIsProductsOpen(false)}
                                className="block w-full text-left py-2 px-4 text-sm text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] transition-all duration-200 hover:pl-6"
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

            {/* CTA Button */}
            <Link href="/contact" className="button whitespace-nowrap">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu button */}
      <div className={`flex md:hidden items-center justify-between px-3 sm:px-4 py-3 fixed z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? "top-2 left-3 right-3 bg-white/70 backdrop-blur-xl rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          : "top-0 left-0 right-0 bg-white rounded-none"
      }`}>
        <Link href="/" className="group">
          <div className="transform transition-transform duration-200 group-hover:scale-105">
            <Image
              width={160}
              height={45}
              src={CompanyLogo}
              alt="STC company logo"
              className="filter drop-shadow-sm h-8 sm:h-10 w-auto"
            />
          </div>
        </Link>
        <button
          onClick={handleToggle}
          className="rounded-lg bg-gray-50 p-2.5 text-[var(--color-text)] transition-all duration-200 hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)] hover:shadow-md active:scale-95"
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
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

      {/* Mobile Menu Sidebar */}
      <>
        {/* Backdrop */}
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          onClick={handleToggle}
          className={`fixed inset-0 bg-black backdrop-blur-sm z-40 md:hidden transition-all duration-500 ease-in-out ${isOpen
            ? "opacity-50 visible"
            : "opacity-0 invisible pointer-events-none"
            }`}
        />

        {/* Sidebar */}
        <div
          ref={mobileMenuRef}
          className={`fixed top-0 left-0 w-80 max-w-[90vw] h-full bg-white shadow-2xl z-50 md:hidden transition-all duration-500 ease-in-out ${isOpen
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none"
            }`}
        >
          <div className="flex flex-col h-full pb-[max(1.5rem,env(safe-area-inset-bottom))]">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <Image
                src={CompanyLogo}
                alt="Silverline Trading Company logo"
                className="w-auto h-[35px]"
              />
              <button
                onClick={handleToggle}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-all duration-200 active:scale-95"
              >
                <span className="sr-only">Close menu</span>
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <nav aria-label="Global" className="flex-1 p-4 overflow-y-auto">
              <ul className="space-y-2">
                {sections.map(({ name, href, hasSubMenu }) => (
                  <li key={name}>
                    {hasSubMenu ? (
                      <div className="space-y-2">
                        <button
                          onClick={() =>
                            setMobileProductsOpen(!mobileProductsOpen)
                          }
                          className={`flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-left transition-all duration-300 ${
                            activeLink === name
                              ? "text-[var(--color-primary)] bg-[var(--color-surface)]"
                              : "text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                          }`}
                        >
                          <span className="font-medium">
                            {name.charAt(0).toUpperCase() + name.slice(1)}
                          </span>
                          <FaChevronDown
                            className={`transition-transform duration-300 ${mobileProductsOpen ? "rotate-180" : "rotate-0"
                              }`}
                          />
                        </button>
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${mobileProductsOpen
                            ? "max-h-96 opacity-100"
                            : "max-h-0 opacity-0"
                            }`}
                        >
                          <ul className="ml-4 space-y-1 border-l-2 border-[var(--color-primary-light)] pl-4">
                            {subSections.map(({ name, href }, subIndex) => (
                              <li
                                key={name}
                                className={`transition-all duration-300 ease-out ${mobileProductsOpen
                                  ? "opacity-100 translate-x-0"
                                  : "opacity-0 -translate-x-4"
                                  }`}
                                style={{
                                  transitionDelay: mobileProductsOpen
                                    ? `${subIndex * 50 + 100}ms`
                                    : `${(subSections.length - subIndex - 1) * 30}ms`,
                                }}
                              >
                                <button
                                  onClick={() => handleLinkClick(href)}
                                  className="block w-full px-3 py-1.5 text-left text-sm text-gray-600 hover:text-[var(--color-primary)] hover:bg-[var(--color-surface)] rounded-md transition-all duration-200 hover:translate-x-1"
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
                            ? "text-[var(--color-primary)] bg-[var(--color-surface)] border-l-2 border-[var(--color-primary)]"
                            : "text-[var(--color-text)] hover:bg-[var(--color-surface)] hover:text-[var(--color-primary)]"
                        }`}
                      >
                        {name.charAt(0).toUpperCase() + name.slice(1)}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex flex-col gap-4 mb-6 px-4">
              <div className="flex justify-center gap-4 mb-4">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <Link
                    key={label}
                    aria-label={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-500 hover:text-[var(--color-primary)] cursor-pointer text-xl transition-all duration-200 hover:scale-125`}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
              <button
                onClick={() => handleLinkClick("/contact")}
                className="button self-center w-fit min-w-[160px] text-sm"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </>
    </header>
  );
};

export default Header;
