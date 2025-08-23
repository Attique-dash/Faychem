"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import { useContext, useState, useEffect, useRef } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { emailConfig } from "@/utils/emailConfig";
import Contact from "../images/contact.png";
import Logo2 from "../images/logo.png";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook, FaTwitter, FaInstagram, FaChevronDown, FaYoutube, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGlobeAmericas } from 'react-icons/fa';

const Footer = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [country, setCountry] = useState("");
  const [errorShown, setErrorShown] = useState(false);
  const [selected, setSelected] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [focusedField, setFocusedField] = useState("");

  const wordLimit = 500;
  const { user } = useContext(Context);
  const contactRef = useRef(null);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
  
    const currentElement = contactRef.current; // ✅ snapshot the ref value
  
    if (currentElement) {
      observer.observe(currentElement);
    }
  
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement); // ✅ always unobserve the same element
      }
    };
  }, []);
  
  function Sendmail(e) {
    e.preventDefault();
    setIsSubmitting(true);

    const words = message.trim().split(/\s+/).filter(word => word).length;
    if (words > 500) {
      toast.error("Message exceeds 500-word limit.", {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
      });
      setIsSubmitting(false);
      return;
    }

    const fullName = `${name} ${lastName}`.trim();
    console.log("Form values:", { fullName, email, message, companyName, companyAddress, country });

    if (!name || !email || !message || !companyName || !companyAddress || !country) {
      if (!errorShown) {
        toast.error("Please fill all required fields.", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
        });
        setErrorShown(true);
        setTimeout(() => setErrorShown(false), 3500);
      }
      setIsSubmitting(false);
      return;
    }

    const toastId = toast.loading("Sending your message...", {
      position: "top-center",
      autoClose: false,
      draggable: true,
    });

    const data = {
      name: fullName,
      email: email,
      message: message,
      companyName: companyName,
      companyAddress: companyAddress,
      country: country,
    };

    axios.post(emailConfig.apiEndpoint, data)
      .then((response) => {
        toast.dismiss(toastId);
        toast.success("Email sent successfully! We will get back to you soon.", {
          position: "top-center",
          autoClose: 4000,
          draggable: true,
        });

        // Reset form
        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
        setCompanyName("");
        setCompanyAddress("");
        setCountry("");
        setSelected("");
        setWordCount(0);
        setIsSubmitting(false);
      })
      .catch((error) => {
        toast.dismiss(toastId);
        toast.error("Something went wrong. Please try again.", {
          position: "top-center",
          autoClose: 3000,
          draggable: true,
        });

        console.log("error here", error);
        setIsSubmitting(false);
      });
  }

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(word => word).length;

    if (wordCount <= wordLimit) {
      setMessage(text);
      setWordCount(wordCount);

      // Auto-resize textarea
      e.target.style.height = "auto";
      e.target.style.height = Math.min(e.target.scrollHeight, 150) + "px";
    }
  };

  const inputClasses = "block w-full px-5 py-3 mt-2 text-blue-700 placeholder-blue-400 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 transform hover:scale-[1.02]";

  const socialLinks = [
    { icon: FaFacebook, href: "#", label: "Facebook", color: "hover:text-blue-600" },
    { icon: FaTwitter, href: "#", label: "Twitter", color: "hover:text-blue-400" },
    { icon: FaInstagram, href: "#", label: "Instagram", color: "hover:text-pink-500" },
    { icon: FaYoutube, href: "#", label: "YouTube", color: "hover:text-red-500" },
    { icon: FaLinkedin, href: "#", label: "LinkedIn", color: "hover:text-blue-700" },
  ];

  return (
    <>
      <div>
        <section id="contact" className="bg-gradient-to-br from-blue-50 to-white md:pl-[235px] lg:pt-[15px] relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-20 right-10 w-32 h-32 bg-blue-100 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-40 left-20 w-20 h-20 bg-teal-100 rounded-full opacity-30 animate-bounce delay-300"></div>

          <div 
            ref={contactRef}
            className={`px-8 pb-12 mx-auto pt-[80px] lg:pt-[0px] transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent sm:text-4xl">
                  Contact Us
                </p>
              </div>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Ready to partner with us? Get in touch and lets discuss how we can serve your salt needs.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-16 mt-5 lg:grid-cols-2">
              {/* Contact Image */}
              <div className={`hidden lg:grid justify-items-center items-center transition-all duration-1000 delay-300 transform ${
                isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}>
                <div className="relative group">
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-lg"></div>
                  <Image 
                    width={550} 
                    height={550} 
                    src={Contact} 
                    alt="Faychem Contact-US"
                    className="relative rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Contact Form */}
              <div className={`transition-all duration-1000 delay-500 transform ${
                isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
              }`}>
                <div className="relative p-8 py-10 rounded-2xl bg-white shadow-2xl border border-blue-100 backdrop-blur-sm">
                  {/* Decorative elements */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-blue-500 to-teal-500 rounded-br-3xl opacity-10"></div>
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-teal-500 to-blue-500 rounded-tl-3xl opacity-10"></div>

                  <form onSubmit={Sendmail} className="relative z-10">
                    {/* Name Fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="First Name *"
                          className={inputClasses}
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          onFocus={() => setFocusedField('firstName')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        <div className={`absolute left-3 top-1 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'firstName' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Last Name"
                          className={inputClasses}
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          onFocus={() => setFocusedField('lastName')}
                          onBlur={() => setFocusedField('')}
                        />
                        <div className={`absolute left-3 top-1 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'lastName' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                    </div>

                    {/* Company Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Company Name *"
                          className={inputClasses}
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        <div className={`absolute left-3 top-1 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'company' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                      <div className="relative">
                        <input
                          type="email"
                          placeholder="Email Address *"
                          className={inputClasses}
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        <div className={`absolute left-3 top-1 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'email' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                    </div>

                    {/* Address and Country */}
                    <div className="mt-6">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Company Address *"
                          className={inputClasses}
                          value={companyAddress}
                          onChange={(e) => setCompanyAddress(e.target.value)}
                          onFocus={() => setFocusedField('address')}
                          onBlur={() => setFocusedField('')}
                          required
                        />
                        <div className={`absolute left-3 top-1 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'address' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <div className="relative">
                        <ReactFlagsSelect
                          name="Country"
                          className="block cursor-pointer w-full bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-100"
                          selected={selected}
                          onSelect={(code) => {
                            setSelected(code);
                            setCountry(code);
                          }}
                          placeholder="Select Country *"
                          searchPlaceholder="Search countries"
                          searchable
                        />
                        <FaGlobeAmericas className="absolute right-4 top-1/2 transform -translate-y-1/2 text-blue-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="mt-6">
                      <div className="relative">
                        <textarea
                          className="block w-full px-5 py-3 mt-2 text-blue-700 placeholder-blue-400 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 transform hover:scale-[1.02] resize-none min-h-[100px] max-h-[150px]"
                          placeholder="Tell us about your requirements *"
                          value={message}
                          onChange={handleMessageChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField('')}
                          style={{ overflow: "hidden" }}
                          required
                        />
                        <div className={`absolute left-3 top-3 h-2 w-2 bg-blue-500 rounded-full transition-all duration-300 ${
                          focusedField === 'message' ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                        }`}></div>
                      </div>
                      
                      <div className="flex justify-between items-center mt-3">
                        <p className={`text-sm transition-colors duration-300 ${
                          wordCount > wordLimit * 0.8 ? 'text-orange-500' : 'text-gray-500'
                        } ${wordCount === wordLimit ? 'text-red-500' : ''}`}>
                          {wordCount} / {wordLimit} words
                        </p>
                        {wordCount === wordLimit && (
                          <p className="text-sm text-red-500 animate-pulse">Word limit reached!</p>
                        )}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full px-6 py-4 mt-8 text-sm font-semibold tracking-wide text-white capitalize transition-all duration-300 transform bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 focus:outline-none focus:ring-4 focus:ring-blue-200 disabled:opacity-70 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
                    >
                      <span className={`flex items-center justify-center gap-3 transition-all duration-300 ${
                        isSubmitting ? 'scale-90 opacity-50' : ''
                      }`}>
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <FaPaperPlane className="transform group-hover:translate-x-1 transition-transform duration-300" />
                            Send Message
                          </>
                        )}
                      </span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-100 to-gray-200 lg:grid lg:grid-cols-3 md:pl-[260px] relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#3b82f6_1px,_transparent_1px)] bg-[length:50px_50px]"></div>
        </div>

        <div className="relative z-10 px-4 pt-16 pb-8 xs:px-6 lg:col-span-3 lg:px-8">
          <div className="grid grid-cols-1 gap-12 xs:grid-cols-2 lg:grid-cols-3 xs:gap-8">

            {/* Company Info */}
            <div className="pl-5 sm:pl-0 group">
              <div className="block text-teal-600 mb-6">
                <div className="transform transition-all duration-300 justify-self-center group-hover:scale-105">
                  <Image
                    width={140}
                    height={140}
                    src={Logo2}
                    alt="Faychem company logo"
                    className="filter drop-shadow-lg"
                  />
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-xs uppercase tracking-wide font-medium text-blue-600 block">
                      Call us
                    </span>
                    <a
                      href="tel:+971566494784"
                      className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 text-lg"
                    >
                      +971 56 649 4784
                    </a>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-xs uppercase tracking-wide font-medium text-blue-600 block">
                      Email us
                    </span>
                    <a
                      href="mailto:info@faychem.com"
                      className="font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300"
                    >
                      info@faychem.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Description */}
            <div className="hidden lg:block px-5">
              <div className="h-full flex flex-col justify-center">
                <h3 className="font-bold text-blue-600 text-xl mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                  Our Company
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                Empowering businesses globally with premium, reliable salt solutions.
                </p>
                <div className="mt-6 flex gap-4">
                  {socialLinks.map(({ icon: Icon, href, label, color }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 ${color} transform transition-all duration-300 hover:scale-125 hover:shadow-lg group`}
                    >
                      <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="px-5">
              <div className="h-full flex flex-col justify-center">
                <h3 className="font-bold text-blue-600 text-xl mb-4 flex items-center gap-2">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-teal-500 rounded-full"></div>
                  Location
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-start gap-3 p-4 rounded-lg bg-white bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 sm:mt-1">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <div className="text-center sm:text-left">
                    <span className="text-xs uppercase tracking-wide font-medium text-blue-600 block mb-1">
                      Address
                    </span>
                    <p className="text-gray-700 leading-relaxed">
                      308 Al-Zarooni Building,<br />
                      Al-Rafa, Al-Suq-Al-Akbeer,<br />
                      Bur Dubai, U.A.E.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Social Links */}
            <div className="lg:hidden col-span-full">
              <div className="flex justify-center gap-4 pt-8 border-t border-gray-300">
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className={`w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-500 ${color} transform transition-all duration-300 hover:scale-125 hover:shadow-lg group`}
                  >
                    <Icon className="text-lg group-hover:scale-110 transition-transform duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-gray-300 text-center">
            <p className="text-gray-600">
              &copy; 2024 Faychem. All rights reserved. | 
              <span className="ml-1 text-blue-600 font-medium">Premium Salt Solutions Worldwide</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;