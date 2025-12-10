"use client";

import Image from "next/image";
import Link from "next/link";
import WorldMap from "@/images/world-map.webp";

const ContactSection = () => {
    return (
        <section className="mt-20 py-28 bg-gradient-to-br from-[var(--light)] relative overflow-hidden">
            {/* World Map Background */}
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none select-none ">
                <Image
                    src={WorldMap}
                    alt="World Map"
                    width={"auto"}
                    height={380}
                    style={{ objectFit: "contain" }}
                    className="z-0 opacity-20 sm:opacity-20 md:opacity-100"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
                {/* Left: Text & Buttons */}
                <div className="ml-8 flex-1">
                    <h2 className="mb-6 text-5xl font-bold text-[var(--black)] mb-2">
                        Contact Us
                    </h2>

                    {/* Move the text here, under the heading */}
                    <p className="text-lg text-gray-700 text-left max-w-md mb-8">
                        If you need our Product Catalog, Want Pricing, Have Questions
                        about Shipping, or anything else, reach out to us.
                        <br />
                        Our Team will respond as soon as possible.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[var(--primary)] to-[var(--dark)] rounded-full shadow-lg hover:from-[var(--dark)] hover:to-[var(--darker)] hover:shadow-xl hover:scale-105 transition-all duration-300 transform"
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;