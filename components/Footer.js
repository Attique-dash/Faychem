"use client";
import { Context } from "@/Context/Context";
import Image from "next/image";
import { useContext, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Contact from "../images/contact.png";
import Logo2 from "../images/logo.png";
import ReactFlagsSelect from "react-flags-select";

const Footer = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyAddress, setCompanyAddress] = useState("");
  const [country, setCountry] = useState("");
  const [errorShown, setErrorShown] = useState(false);
  const [selected, setSelected] = useState("");
  const [wordCount, setWordCount] = useState(0);

  const wordLimit = 500;
  const { user } = useContext(Context);

  function Sendmail(e) {
    e.preventDefault();

    const words = message.trim().split(/\s+/).filter(word => word).length;
    if (words > 500) {
        toast.error("Message exceeds 500-word limit.", {
            position: "top-center",
            autoClose: 3000,
            draggable: true,
        });
        return;  
    }

    console.log("Form values:", { name, email, message, companyName, companyAddress, country });

    if (!name || !email || !message || !companyName || !companyAddress || !country) {
        if (!errorShown) {
            toast.error("Please fill all fields.", {
                position: "top-center",
                autoClose: 3000,
                draggable: true,
            });
            setErrorShown(true);
            setTimeout(() => setErrorShown(false), 3500);
        }
        return;
    }

    toast.loading("Please Wait...", {
        position: "top-center",
        autoClose: false,
        draggable: true,
    });
    setErrorShown(true);

    const data = {
        name: name,
        email: email,
        message: message,
        companyName: companyName,
        companyAddress: companyAddress,
        country: country,
    };

    axios.post('http://localhost:5000/send', data)
        .then((response) => {
            toast.dismiss();
            toast.success("Email sent successfully!", {
                position: "top-center",
                autoClose: 3000,
                draggable: true,
            });

            e.target.reset();
            setName("");
            setEmail("");
            setMessage("");
            setCompanyName("");
            setCompanyAddress("");
            setCountry("");
        })
        .catch((error) => {
            toast.dismiss();
            toast.error("Something went wrong. Please try again.", {
                position: "top-center",
                autoClose: 3000,
                draggable: true,
            });

            e.target.reset();
            setName("");
            setEmail("");
            setMessage("");
            setCompanyName("");
            setCompanyAddress("");
            setCountry("");

            console.log("error here", error);
        });
}

  

  const handleMessageChange = (e) => {
    const text = e.target.value;
    const words = text.trim().split(/\s+/);
    const wordCount = words.filter(word => word).length;

    if (wordCount <= wordLimit) {
      setMessage(text);
      setWordCount(wordCount);

      e.target.style.height = "auto"; 
      e.target.style.height = e.target.scrollHeight + "px"; 
    }
  };

  return (
    <>
       <div>
        <section id="contact" className="bg-white md:pl-[235px] lg:pt-[15px]">
          <div className="px-8 pb-12 mx-auto pt-[80px] lg:pt-[0px]">
            <div>
              <p className="text-xl font-bold text-blue-500 text-center sm:text-center sm:text-3xl xs:text-center xs:text-2xl">Contact Us</p>
            </div>

            <div className="grid grid-cols-1 gap-12 mt-5 lg:grid-cols-2">
              <div className=" grid-cols-1 gap-12 hidden lg:grid justify-items-center items-center">
                <Image width={550} height={550} src={Contact} alt="Faychem Contact-US" />
              </div>
              <div className="p-4 py-6 rounded-lg bg-gray-100 md:p-8">
                <form onSubmit={Sendmail}>
                  <div className="-mx-2 md:items-center md:flex">
                    <div className="flex-1 px-2">
                      <input
                        type="text"
                        placeholder="First Name"
                        name="First Name"
                        className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="flex-1 px-2 mt-4 md:mt-0">
                      <input
                        type="text"
                        placeholder="Last Name"
                        name="Last Name"
                        className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Company Name"
                      name="Company Name"
                      className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e) => setCompanyName(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <input
                      type="text"
                      placeholder="Company Address"
                      name="Company Address"
                      className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e) => setCompanyAddress(e.target.value)}
                    />
                  </div>
                  <div className="mt-4">
  <div className="relative">
    <ReactFlagsSelect
      name="Country"
      className="block cursor-pointer w-full placeholder-blue-500 bg-white border-none rounded-lg focus:border-blue-500 focus:ring-blue-500 focus:outline-none focus:ring focus:ring-opacity-40"
      selected={selected}
      onSelect={(code) => {
        setSelected(code);
        setCountry(code); // This ensures the country state is updated correctly
      }}
      searchPlaceholder="Search countries"
      searchable
    />
  </div>
</div>


                  <div className="mt-4">
                    <input
                      type="email"
                      placeholder="test@gmail.com"
                      name="email"
                      className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="w-full mt-4">
      <textarea
        className="block w-full px-5 py-2.5 mt-2 text-blue-700 placeholder-blue-500 bg-white border border-gray-200 rounded-lg focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Message"
        name="Message"
        value={message}
        onChange={handleMessageChange}
        rows="1" 
        style={{ overflow: "hidden" }} 
      ></textarea>
      <p className="mt-2 text-right text-sm text-gray-600">
        {wordCount} / {wordLimit} words
      </p>
      {wordCount === wordLimit && (
        <p className="text-sm text-center text-red-500">You have reached the 500-word limit.</p>
      )}
    </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-700 required: rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                  >
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </div>
      {/* <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">

      <Image
              width={300}
              height={300}
              src={Contact}
              alt="Faychem Contact-US"

            />
      
       
      </div> */}
      {/* {!user?.data?.isAdmin && (
        <div className="w-[95%] mx-auto my-5">
          <div className="flex flex-col items-center gap-4 rounded-lg bg-blue-400 p-6 shadow-lg sm:flex-row sm:justify-between">
            <strong className="text-xl text-white sm:text-xl capitalize text-center md:text-start">
              {" "}
              contact us <span className="text-[#000000]"> now </span>
              <p className="text-sm	 text-white my-2 w-full text-center md:text-start ">
              Reach out to us for inquiries, orders, or support. We're here to assist you with all your salt needs.
              </p>
            </strong>

            <div
              className="inline-flex items-center gap-2 rounded-full border border-[#12171D] bg-[#000000] px-8 py-3 text-white hover:bg-transparent hover:border-black hover:text-white focus:outline-none focus:ring active:bg-white/90 cursor-pointer"
              // href="/contact"
            >
              <span className="text-sm font-medium"> Lets Get Started </span>

              <svg
                className="h-5 w-5 rtl:rotate-180"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </div>
      )} */}
      <footer className="bg-gray-100 lg:grid lg:grid-cols-3 md:pl-[260px]">
        {/* <div className="relative block h-32 lg:col-span-2 lg:h-full">
          <Image
            src="https://images.unsplash.com/photo-1642370324100-324b21fab3a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1548&q=80"
            alt="footer"
            layout="fill"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div> */}

        <div className="px-4 pt-16 pb-5 xs:px-6 lg:col-span-3 lg:px-8 ">
          <div className="grid grid-cols-1 gap-8 xs:grid-cols-2 sm:grid-cols-3 xs:gap-0">

            <div className="pl-5 sm:pl-0">
              <div className="block text-teal-600 ">

                <Image
                  width={120}
                  height={120}
                  src={Logo2}
                  alt="Faychem company logo"

                />
              </div>
              <p className="pt-3">
                <span className="text-xs uppercase tracking-wide  font-medium text-blue-500 pt-6">
                  {" "}
                  Call us{" "}
                </span>

                <a
                  className="block font-medium pt-[10px] sm:pt-0 text-gray-500 hover:opacity-75 sm:text-xl cursor-pointer"
                >
                  +971 56 649 4784
                </a>
              </p>


            </div>

            <div className=" gap-16 xs:grid-cols-1 px-5 sm:grid hidden xs:hidden">

              <div>
                <p className="font-medium text-blue-500"> Our Company</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      Empowering businesses globally with premium, reliable salt solutions.
                    </span>
                  </li>

                  {/* <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Contact{" "}
                    </a>
                  </li> */}

                  {/* <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Accounts Review{" "}
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="grid  gap-16 xs:grid-cols-1 px-5">

              <div>
                <p className="font-medium text-blue-500">Location</p>

                <ul className="mt-6 space-y-4 text-sm">
                  <li>
                    <span
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      308 Al-Zarooni Building,
                      Al-Rafa, Al-Suq-Al-Akbeer,
                      Bur Dubai, U.A.E.
                    </span>
                  </li>

                  {/* <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Fashion Design
                    </a>
                  </li> */}

                  {/* <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Design
                    </a>
                  </li>

                  <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Branding
                    </a>
                  </li> */}

                  {/* <li>
                    <a
                      href="#!"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      {" "}
                      Marketing
                    </a>
                  </li> */}
                </ul>
              </div>
            </div>

          </div>


          {/* <div className="mt-12 border-t border-gray-100 pt-12">
            <div className="sm:flex sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-4 text-xs">
                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Terms & Conditions{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Privacy Policy{" "}
                  </a>
                </li>

                <li>
                  <a
                    href="#!"
                    className="text-gray-500 transition hover:opacity-75"
                  >
                    {" "}
                    Cookies{" "}
                  </a>
                </li>
              </ul>

              <p className="mt-8 text-xs text-gray-500 sm:mt-0">
                &copy; 2024. Ritesh Clothing Store . All rights reserved.
              </p>
            </div>
          </div> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
