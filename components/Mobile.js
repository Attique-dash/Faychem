{
  /*
"use client";
import { Context } from "@/Context/Context";
import useActiveLink from "@/utils/observe";
import Link from "next/link";
import { useContext } from "react";
import Logo2 from "../images/stc_Logo.png";
import logo from "../images/stc_logo.png";
import Image from "next/image";

const Mobile = ({ setIsOpen, categories }) => {
  const { user } = useContext(Context);
  const name = user?.data?.name.replace(/ .*, "");

  const sections = [
    "home",
    "about",
    "mission",
    "categories",
    "products",
    "contact",
  ];

  const activeLink = useActiveLink(sections);

  return (
    <div className="flex flex-col h-[360px] w-[240px] bg-white border-e">
      <div className="px-4">
        <Link onClick={() => setIsOpen(false)} href="/">
          <div className="block text-teal-600 mx-4">
            <Image
              src={logo}
              className="mt-[15px] w-[150px] h-[34px]"
              alt="Faychem company logo"
            />
          </div>
        </Link>
        <ul className="space-y-1 mt-[20px]">
          {sections.map((section) => (
            <li key={section}>
              <Link
                onClick={() => setIsOpen(false)}
                href={`#${section}`}
                className={`cursor-pointer px-4  py-2 text-sm font-medium block rounded-lg ${
                  activeLink === section
                    ? "text-blue-500"
                    : "text-gray-800 hover:text-gray-200"
                }`}
                style={{ transition: "color 0.3s, text-decoration 0.3s" }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100 text-center">
        <span className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <div>
            {user?.data ? (
              <p className="text-xs">
                <strong className="block font-medium">{name}</strong>
                <span> {user?.data?.email} </span>
              </p>
            ) : (
              <p className="text-xs ">
                <strong className="block font-medium ml-[15px] ">
                  Welcome to{" "}
                  <span className="text-blue-500 font-semibold">FayChem</span>
                </strong>
              </p>
            )}
          </div>
        </span>
      </div>
    </div>
  );
};

export default Mobile;

*/
}
