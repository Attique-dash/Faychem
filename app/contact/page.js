"use client";
import { useState, useRef, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { emailConfig } from "@/utils/emailConfig";
import ReactFlagsSelect from "react-flags-select";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGlobeAmericas, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
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
  
    const currentElement = contactRef.current;
  
    if (currentElement) {
      observer.observe(currentElement);
    }
  
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  // Word count effect
  useEffect(() => {
    const words = message.trim().split(/\s+/).filter(word => word).length;
    setWordCount(words);
  }, [message]);

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
        toast.update(toastId, {
          render: "Message sent successfully!",
          type: "success",
          isLoading: false,
          autoClose: 3000,
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
        console.error("Error sending email:", error);
        toast.update(toastId, {
          render: error.response?.data?.error || "Failed to send message. Please try again.",
          type: "error",
          isLoading: false,
          autoClose: 5000,
        });
        setIsSubmitting(false);
      });
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <ToastContainer />
      
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to partner with us? Get in touch and let's discuss how we can serve your salt needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div 
            ref={contactRef}
            className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            
            <form onSubmit={Sendmail} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField("firstName")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === "firstName" ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onFocus={() => setFocusedField("lastName")}
                    onBlur={() => setFocusedField("")}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                      focusedField === "lastName" ? "border-blue-500" : "border-gray-300"
                    }`}
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  onFocus={() => setFocusedField("companyName")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    focusedField === "companyName" ? "border-blue-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your company name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    focusedField === "email" ? "border-blue-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your email address"
                  required
                />
              </div>

              {/* Company Address */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Address *
                </label>
                <input
                  type="text"
                  value={companyAddress}
                  onChange={(e) => setCompanyAddress(e.target.value)}
                  onFocus={() => setFocusedField("companyAddress")}
                  onBlur={() => setFocusedField("")}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 ${
                    focusedField === "companyAddress" ? "border-blue-500" : "border-gray-300"
                  }`}
                  placeholder="Enter your company address"
                  required
                />
              </div>

              {/* Country Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Country *
                </label>
                <div className="relative">
                  <FaGlobeAmericas className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" />
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => {
                      setSelected(code);
                      setCountry(code);
                    }}
                    className="w-full"
                    placeholder="Select your country"
                    searchable
                    searchPlaceholder="Search countries..."
                    classNamePrefix="react-flags-select"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your requirements *
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField("")}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none ${
                    focusedField === "message" ? "border-blue-500" : "border-gray-300"
                  }`}
                  placeholder="Describe your salt requirements, quantity needed, and any specific specifications..."
                  required
                />
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm text-gray-500">
                    {wordCount} / {wordLimit} words
                  </span>
                  {wordCount > wordLimit && (
                    <span className="text-sm text-red-500">
                      Word limit exceeded
                    </span>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                }`}
              >
                <FaPaperPlane className="mr-2" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaPhone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Call us</p>
                    <a 
                      href="tel:+971566494784" 
                      className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      +971 56 649 4784
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Email us</p>
                    <a 
                      href="mailto:info@faychem.com" 
                      className="text-lg font-semibold text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      info@faychem.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Location</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Dubai, United Arab Emirates
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Company</h3>
              <p className="text-gray-600 mb-6">
                Empowering businesses globally with premium, reliable salt solutions.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:from-purple-600 hover:to-pink-600 transition-colors duration-300"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors duration-300"
                >
                  <FaYoutube className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
