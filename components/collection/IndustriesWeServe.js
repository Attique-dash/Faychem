"use client";

import { useState } from "react";
import Image from "next/image";
import industry from "@/images/industry.webp";
import pot from "@/images/pot.webp";
import wellness from "@/images/wellness.webp";

const industries = [
    {
        icon: (
            <Image
                src={industry}
                alt="Industrial Salt"
                width={60}
                height={60}
                className="mx-auto mb-6"
            />
        ),
        title: "Industrial Salt",
        desc: "Used in manufacturing, textile processing, leather curing, chemical production, and de-icing applications",
    },
    {
        icon: (
            <Image
                src={pot}
                alt="Industrial Salt"
                width={60}
                height={60}
                className="mx-auto mb-6"
            />
        ),
        title: "Edible Salt",
        desc: "Pure, mineral-rich salt, ideal for everyday cooking, seasoning, and food preservation",
    },
    {
        icon: (
            <Image
                src={wellness}
                alt="Industrial Salt"
                width={60}
                height={60}
                className="mx-auto mb-6"
            />
        ),
        title: "Wellness & Spa",
        desc: "Salt designed for decorative use, spa treatments, bath therapies, and holistic wellness",
    },
];

const IndustriesWeServe = () => {
    const [hoveredItem, setHoveredItem] = useState(null);
    return (
        <section className="mt-14 bg-[var(--primary)] mb-16 py-16 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-center text-white mb-12">
                    Industries We Serve
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 max-w-xs sm:max-w-full mx-auto">
                    {industries.map((item, idx) => (
                        <div
                            key={idx}
                            onMouseEnter={() => setHoveredItem(idx)}
                            onMouseLeave={() => setHoveredItem(null)}
                            className={`bg-white p-8 text-center shadow transition-all duration-300 cursor-pointer border rounded-lg
            ${hoveredItem === idx
                                    ? "border-gray-200 shadow-xl scale-105"
                                    : "border-gray-300 hover:shadow-lg hover:scale-105 "
                                }
          `}
                            style={{
                                boxShadow:
                                    hoveredItem === idx ? "0 8px 32px #010814ff" : undefined,
                                borderColor: hoveredItem === idx ? "#102446ff" : undefined,
                            }}
                        >
                            <div className="mb-6">{item.icon}</div>
                            <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                            <p className="text-gray-700">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default IndustriesWeServe;
