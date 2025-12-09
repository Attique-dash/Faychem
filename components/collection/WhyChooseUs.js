"use client";

import Image from "next/image";
import { useState } from "react";
import globe from "@/images/globe.webp";
import shield from "@/images/shield.webp";
import badge from "@/images/badge.webp";
import trust from "@/images/dependable.webp";

const WhyChooseUs = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    return (
        <section className="mt-0 px-4">
            <div className="max-w-lg sm:max-w-6xl mx-auto bg-[var(--primary)] rounded-3xl p-8 sm:p-8">
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-4xl text-white font-bold text-center mb-8 sm:mb-4 lg:mb-6">
                    What makes us different?
                </h2>
                <p className="text-center text-white max-w-2xl mx-auto mb-10 text-lg">
                    We go beyond just task management—we provide a smooth, intuitive,
                    and powerful experience that helps you stay productive without the
                    complexity. Here’s what sets us apart:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Card 1 */}
                    <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                        <div className="">
                            {/* Replace with your icon */}
                            <Image
                                src={trust}
                                alt="Industrial Salt"
                                width={60}
                                height={60}
                                className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                            Trusted Quality
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                            Every product meets international standards. Ensuring purity,
                            consistency, and lasting trust.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                        <div className="">
                            {/* Replace with your icon */}
                            <Image
                                src={globe}
                                alt="Industrial Salt"
                                width={60}
                                height={60}
                                className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                            Global Reach
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                            Our robust logistics network ensures smooth and timely
                            deliveries worldwide.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                        <div className="">
                            {/* Replace with your icon */}
                            <Image
                                src={shield}
                                alt="Industrial Salt"
                                width={60}
                                height={60}
                                className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                            Trust Driven Service
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                            We focus on building lasting partnerships through responsive
                            communication and personalized service.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="group bg-gray-100 rounded-2xl shadow p-6 flex flex-col items-center transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--light)]">
                        <div className="">
                            {/* Replace with your icon */}
                            <Image
                                src={badge}
                                alt="Industrial Salt"
                                width={60}
                                height={60}
                                className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                        <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--primary)]">
                            Competitive Pricing
                        </h3>
                        <p className="text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                            Premium quality at fair, transparent prices. Designed to help
                            your business grow competitively.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default WhyChooseUs;
