"use client";
import { useContext, useState, useEffect, useRef } from "react";
import { Context } from "@/Context/Context";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { emailConfig } from "@/utils/emailConfig";
import ReactFlagsSelect from "react-flags-select";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
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
  const [isVisible, setIsVisible] = useState(true); //  Default true to avoid disappearing
  const [focusedField, setFocusedField] = useState("");

  const wordLimit = 500;
  const contactRef = useRef(null);
  const { user } = useContext(Context);

  //  Observe visibility once (for animation)
  useEffect(() => {
    const element = contactRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  //  Universal change handler
  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  //  Message change handler with efficient resize
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

  const showError = (msg) =>
    toast.error(msg, {
      position: "top-center",
      autoClose: 3000,
      draggable: true,
    });

  const Sendmail = async (e) => {
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

    if (
      !name ||
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

    const wordCountCheck = message.trim().split(/\s+/).filter(Boolean).length;
    if (wordCountCheck > wordLimit) {
      showError("Message exceeds 500-word limit.");
      setIsSubmitting(false);
      return;
    }

    const toastId = toast.loading("Sending your message...", {
      position: "top-center",
      autoClose: false,
    });

    try {
      await axios.post(emailConfig.apiEndpoint, {
        name: `${name} ${lastName}`.trim(),
        email,
        message,
        companyName,
        companyAddress,
        country,
      });

      toast.dismiss(toastId);
      toast.success("Email sent successfully! We will get back to you soon.", {
        position: "top-center",
        autoClose: 4000,
      });

      setFormData({
        name: "",
        lastName: "",
        email: "",
        message: "",
        companyName: "",
        companyAddress: "",
        country: "",
      });
      setSelected("");
      setWordCount(0);
    } catch (err) {
      toast.dismiss(toastId);
      showError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClasses =
    " bg-white block w-full px-5 py-3 mt-2 placeholder-gray-400 bg-gray-50 border border-gray-300 rounded-2xl transition-all duration-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 focus:outline-none hover:border-blue-400 shadow-sm focus:shadow-lg transform hover:scale-[1.02]";

  return (
    <section
      id="contact"
      ref={contactRef}
      className="bg-gradient-to-br from-blue-50 to-white relative overflow-hidden"
    >
      <div className="min-h-screen flex justify-center px-4">
        {" "}
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 bg-white/0">
          {/* Left Info */}
          <div className="flex flex-col justify-start mt-24">
            <span className="uppercase text-gray-500 text-sm mb-2">
              We're here to help you
            </span>
            <h1 className="font-bold text-4xl md:text-5xl mb-4">
              <span className="text-blue-900">Discuss</span> Your Salt Solution
              Needs
            </h1>
            <p className="text-gray-600 mb-8">
              Are you looking for top-quality salt solutions tailored to your
              needs? Reach out to us.
            </p>

            {/* Email */}
            <div className="flex items-center gap-3 mb-4">
              <div>
                <div className="text-xs text-gray-500">E-mail</div>
                <div className="text-base text-gray-800">
                  info@silverlinetradingcompany.com
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3">
              <div>
                <div className="text-xs text-gray-500">Phone number</div>
                <div className="text-base text-gray-800">+971 56 649 4784</div>
              </div>
            </div>
          </div>

          {/* Form */}

          <div className="relative my-8 p-6 py-8 rounded-3xl">
            <form onSubmit={Sendmail}>
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 ">
                <input
                  type="text"
                  placeholder="First Name *"
                  className={inputClasses}
                  value={formData.name}
                  onChange={handleChange("name")}
                  onFocus={() => setFocusedField("firstName")}
                  onBlur={() => setFocusedField("")}
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
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
              <div className="mt-4">
                <input
                  type="text"
                  placeholder="Company Address"
                  className={inputClasses}
                  value={formData.companyAddress}
                  onChange={handleChange("companyAddress")}
                />
              </div>

              {/* Country */}
              <div className="mt-4">
                <ReactFlagsSelect
                  selected={selected}
                  onSelect={(code) => {
                    setSelected(code);
                    setFormData((prev) => ({ ...prev, country: code }));
                  }}
                  placeholder="Select Country *"
                  searchable
                  className="w-full"
                  selectButtonClassName="!w-full !bg-white !rounded-2xl !border !border-gray-00 !bg-gray-50 !px-5 !py-2 !mt-2 !text-gray-400 !placeholder:gray-400 !shadow-sm !focus:outline-none !focus:ring-2 !focus:ring-blue-100 !focus:border-blue-500 !hover:border-blue-400 !hover:scale-[1.02] !transform !transition-all !duration-300 !placeholder-gray-400"
                  optionsListClassName="!bg-white !z-[9999] !rounded-lg !border !border-gray-200 !shadow-xl !max-h-[800px] !overflow-y-auto"
                  required
                />
              </div>

              {/* Message */}
              <div className="mt-4">
                <textarea
                  className="block w-full px-5 py-3 mt-2 bg-white border-2 border-gray-200 rounded-xl transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none hover:border-blue-300 transform hover:scale-[1.02] resize-none min-h-[100px] max-h-[150px]"
                  placeholder="Tell us about your requirements *"
                  value={formData.message}
                  onChange={handleMessageChange}
                  required
                  style={{ overflow: "hidden" }}
                />
                <div className="flex justify-between items-center mt-2">
                  <p
                    className={`text-sm ${
                      wordCount > wordLimit * 0.8
                        ? "text-orange-500"
                        : "text-gray-500"
                    } ${wordCount === wordLimit ? "text-red-500" : ""}`}
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex justify-center items-center gap-3 mt-8 px-6 py-4 text-sm font-semibold tracking-wide text-white bg-gradient-to-r from-blue-600 to-teal-500 rounded-xl hover:from-blue-700 hover:to-teal-600 focus:ring-4 focus:ring-blue-200 transition-all duration-300 disabled:opacity-70"
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
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default ContactForm;
