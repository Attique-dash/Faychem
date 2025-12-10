"use client";

import {
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import Link from "next/link";
import axios from "axios";
import Swal from "sweetalert2";
import { emailConfig } from "@/utils/emailConfig";
import ReactFlagsSelect from "react-flags-select";
import { FaPaperPlane } from "react-icons/fa";

const wordLimit = 500;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const ContactForm = () => {
  const regionNames = useMemo(() => {
    try {
      return new Intl.DisplayNames(["en"], { type: "region" });
    } catch {
      return { of: (code) => code };
    }
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
    companyName: "",
    companyAddress: "",
    country: "",
  });
  const [selected, setSelected] = useState("");
  const [wordCount, setWordCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger animation on component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  /** Reusable function to style SweetAlert buttons */
  const styleSweetAlertButton = useCallback((backgroundColor, hoverColor) => {
    const confirmBtn = document.querySelector('.swal2-confirm');
    if (!confirmBtn) return;

    // Set initial styles
    const styles = {
      backgroundColor,
      color: '#ffffff',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      padding: '10px 24px',
      borderRadius: '6px',
      fontSize: '16px',
      fontWeight: '500',
      cursor: 'pointer',
      opacity: '1',
      display: 'inline-block',
      transition: 'background-color 0.2s ease'
    };

    Object.assign(confirmBtn.style, styles);

    // Event handlers
    const handleMouseEnter = (e) => {
      e.target.style.backgroundColor = hoverColor;
      e.target.style.transform = 'none';
      e.target.style.boxShadow = 'none';
      e.target.style.outline = 'none';
    };

    const handleMouseLeave = (e) => {
      e.target.style.backgroundColor = backgroundColor;
    };

    const handleFocus = (e) => {
      e.target.style.outline = 'none';
      e.target.style.boxShadow = 'none';
    };

    // Add event listeners
    confirmBtn.addEventListener('mouseenter', handleMouseEnter);
    confirmBtn.addEventListener('mouseleave', handleMouseLeave);
    confirmBtn.addEventListener('focus', handleFocus);

    // Cleanup function to prevent memory leaks
    return () => {
      confirmBtn.removeEventListener('mouseenter', handleMouseEnter);
      confirmBtn.removeEventListener('mouseleave', handleMouseLeave);
      confirmBtn.removeEventListener('focus', handleFocus);
    };
  }, []);

  /** Helper for showing error alerts */
  const showError = useCallback((msg) => {
    Swal.fire({
      icon: "error",
      title: "Oops!",
      text: msg,
      confirmButtonText: "Got it",
      confirmButtonColor: "#dc2626",
      background: "#ffffff",
      backdrop: `rgba(0,0,0,0.4)`,
      showClass: {
        popup: "animate__animated animate__fadeInDown animate__faster",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp animate__faster",
      },
    });
  }, []);

  /** Generic input handler */
  const handleChange = useCallback(
    (field) => (e) => {
      setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    },
    []
  );

  /** Message handler (limits + autoresize) */
  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/).filter(Boolean);
    if (words.length <= wordLimit) {
      setFormData((prev) => ({ ...prev, message: text }));
      setWordCount(words.length);
      e.target.style.height = "auto";
      e.target.style.height = `${Math.min(e.target.scrollHeight, 150)}px`;
    }
  };

  /** Submit form handler */
  const SendMail = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const {
      name,
      lastName,
      email,
      message,
      companyName,
      companyAddress,
      country,
    } = formData;
    const fullName = `${name} ${lastName}`.trim();

    // Validate all required fields including lastName
    if (
      !name ||
      !lastName ||
      !email ||
      !message ||
      !companyName ||
      !companyAddress ||
      !country
    ) {
      showError("Please fill all required fields.");
      setIsSubmitting(false);
      return;
    }

    // Validate email format
    if (!EMAIL_REGEX.test(email)) {
      showError("Please enter a valid email address.");
      setIsSubmitting(false);
      return;
    }

    // Validate word limit
    if (message.trim().split(/\s+/).filter(Boolean).length > wordLimit) {
      showError("Message exceeds 500-word limit.");
      setIsSubmitting(false);
      return;
    }

    // Show loading state
    Swal.fire({
      title: "Sending Message...",
      html: "Please wait while we process your request",
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    try {
      await axios.post(emailConfig.apiEndpoint, {
        name: fullName,
        email,
        message,
        companyName,
        companyAddress,
        country,
      });

      // Show success message
      await Swal.fire({
        icon: "success",
        title: "Message Sent Successfully!",
        html: `<p style="color: #6b7280; font-size: 0.95rem; margin-top: 0.5rem;">Thank you for reaching out! <br/> We've received your message and will get back to you soon.</p>`,
        confirmButtonText: "Close",
        confirmButtonColor: "#c5c5c5ff",
        background: "linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)",
        backdrop: `rgba(0,0,0,0.4)`,
        showClass: {
          popup: "animate__animated animate__zoomIn animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__zoomOut animate__faster",
        },
        customClass: {
          title: "text-2xl font-bold text-gray-800",
          htmlContainer: "text-gray-600",
        },
        didOpen: () => styleSweetAlertButton('#c5c5c5ff', '#999f9dff'),
      });

      // Reset form
      setFormData({
        name: "",
        lastName: "",
        email: "",
        message: "",
        companyName: "",
        companyAddress: "",
        country: "",
      });
      setWordCount(0);
      setSelected("");
    } catch (err) {
      console.error("Email send error:", err);
      await Swal.fire({
        icon: "error",
        title: "Failed to Send Message",
        html: `<p style="color: #6b7280; font-size: 0.95rem; margin-top: 0.5rem;">Something went wrong.<br/> Please try again or contact us directly via email at <a style="color: var(--dark-color)" href="mailto:info@silverlinetradingcompany.com">info@silverlinetradingcompany.com</a></p>`,
        confirmButtonText: "Try Again",
        confirmButtonColor: "#dc2626",
        background: "#ffffff",
        backdrop: `rgba(0,0,0,0.4)`,
        customClass: {
          confirmButton: "swal2-confirm-no-hover",
        },
        showClass: {
          popup: "animate__animated animate__shakeX animate__faster",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp animate__faster",
        },
        didOpen: () => styleSweetAlertButton('#dc2626', '#c21c1cff'),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    "bg-white block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-gray-50 border border-gray-400 rounded-2xl transition-all duration-300 focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--light)] focus:outline-none hover:border-[var(--light)] shadow-sm focus:shadow-lg transform hover:scale-[1.02]";

  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-[var(--lightest)] to-white relative overflow-hidden"
    >
      <div
        className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
      >
        <div className="min-h-screen flex justify-center px-4">
          <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-12 bg-white/0">
            {/* Left Info */}
            <div
              className={`flex flex-col justify-start mt-16 sm:mt-20 md:mt-24 transition-all duration-700 transform delay-100 ${isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
                }`}
            >
              <span className="uppercase text-gray-500 text-sm mb-2">
                We're here to help you
              </span>
              <h1 className="font-bold text-4xl md:text-5xl mb-4">
                <span className="text-[var(--dark)]">Discuss</span> Your Salt
                Needs
              </h1>
              <p className="text-gray-600 mb-8">
                Are you looking for quality salt solutions tailored to your
                needs? Reach out to us.
              </p>

              <div className="mb-4">
                <div className="text-xs text-[var(--darker)]">E-mail</div>
                <Link
                  href="mailto:info@silverlinetradingcompany.com"
                  className="text-base text-gray-800"
                >
                  info@silverlinetradingcompany.com
                </Link>
              </div>

              <div>
                <div className="text-xs text-[var(--darker)]">Phone number</div>
                <Link
                  href="https://wa.me/923205509624?text=Hi%2C%20I%27m%20interested%20in%20your%20Himalayan%20salt%20products.%20Can%20you%20provide%20more%20information%3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base text-gray-800"
                >
                  +92 320 5509624
                </Link>
              </div>
            </div>

            {/* Form */}
            <div
              className={`relative mt-2 sm:mt-8 md:mt-8 mb-10 p-6 py-8 rounded-3xl transition-all duration-1000 transform ${isVisible
                ? "translate-x-0 opacity-100 delay-300"
                : "translate-x-8 opacity-0"
                }`}
            >
              <form onSubmit={SendMail}>
                {/* Name Fields */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-2 transition-all duration-700 transform ${isVisible
                    ? "translate-y-0 opacity-100 delay-200"
                    : "translate-y-6 opacity-0"
                    }`}
                >
                  <input
                    type="text"
                    placeholder="First Name *"
                    className={inputClasses}
                    value={formData.name}
                    onChange={handleChange("name")}
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name *"
                    className={inputClasses}
                    value={formData.lastName}
                    onChange={handleChange("lastName")}
                    required
                  />
                </div>

                {/* Company and Email */}
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-2 mt-4 transition-all duration-700 transform ${isVisible
                    ? "translate-y-0 opacity-100 delay-300"
                    : "translate-y-6 opacity-0"
                    }`}
                >
                  <input
                    type="text"
                    placeholder="Company Name *"
                    className={inputClasses}
                    value={formData.companyName}
                    onChange={handleChange("companyName")}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    className={inputClasses}
                    value={formData.email}
                    onChange={handleChange("email")}
                    required
                  />
                </div>

                {/* Address */}
                <div
                  className={`mt-4 transition-all duration-700 transform ${isVisible
                    ? "translate-y-0 opacity-100 delay-400"
                    : "translate-y-6 opacity-0"
                    }`}
                >
                  <input
                    type="text"
                    placeholder="Company Address *"
                    className={inputClasses}
                    value={formData.companyAddress}
                    onChange={handleChange("companyAddress")}
                    required
                  />
                </div>

                {/* Country */}
                <div className="mt-4">
                  <ReactFlagsSelect
                    selected={selected}
                    onSelect={(code) => {
                      setSelected(code);
                      setFormData((prev) => ({
                        ...prev,
                        country: regionNames.of(code) || code,
                      }));
                    }}
                    placeholder="Select Country *"
                    searchable
                    className="w-full"
                    selectButtonClassName="!w-full !bg-white !rounded-2xl !border !border-gray-300 !bg-gray-50 !px-5 !py-2 !mt-2 !text-gray-400 !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-[var(--light)] !focus:border-[var(--primary)] !hover:border-[var(--light)] !hover:scale-[1.02] !transform !transition-all !duration-300"
                    optionsListClassName="!bg-white !z-[9999] !rounded-lg !border !border-gray-200 !shadow-xl !max-h-[800px] !overflow-y-auto"
                    required
                  />
                </div>

                {/* Message */}
                <div
                  className={`mt-4 transition-all duration-700 transform ${isVisible
                    ? "translate-y-0 opacity-100 delay-500"
                    : "translate-y-6 opacity-0"
                    }`}
                >
                  <textarea
                    className={`${inputClasses} resize-none min-h-[100px] max-h-[150px]`}
                    placeholder="Tell us about your requirements *"
                    value={formData.message}
                    onChange={handleMessageChange}
                    required
                    style={{ overflow: "hidden" }}
                  />
                  <div className="flex justify-between items-center mt-2">
                    <p
                      className={`text-sm ${wordCount > 0.8 * wordLimit ? "text-orange-500" : "text-gray-500"} ${wordCount === wordLimit ? "text-red-500" : ""}`}
                    >
                      {wordCount} / {wordLimit} words
                    </p>
                    {wordCount === wordLimit && (
                      <p className="text-sm text-red-500 animate-pulse">
                        Word limit reached!
                      </p>
                    )}
                  </div>
                </div>

                {/* Submit */}
                <div
                  className={`mt-6 transition-all duration-700 transform ${isVisible
                    ? "translate-y-0 opacity-100 delay-[650ms]"
                    : "translate-y-6 opacity-0"
                    }`}
                >
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center gap-3 px-6 py-4 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-[var(--primary)] to-[var(--dark)] rounded-xl hover:from-[var(--dark)] hover:to-[var(--black)] hover:scale-105 focus:ring-4 focus:ring-[var(--light)] transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
