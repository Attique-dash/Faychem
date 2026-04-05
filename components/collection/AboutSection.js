"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import aboImg from "@/images/about.webp";

// const stats = [
//     { value: "50+", label: "Global Clients" },
//     { value: "10+", label: "Years Experience" },
//     { value: "15+", label: "Countries Served" },
// ];

const AboutSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-16 sm:py-20 lg:py-24 px-4 sm:px-8 flex flex-col items-center text-center scroll-mt-24"
        >
            <div
                className={`transition-all duration-1000 ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                }`}
            >
                <h2 className="mb-8 text-2xl sm:text-3xl lg:text-3xl font-bold text-[var(--color-text)]">
                    WHO ARE WE?
                </h2>
            </div>

            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 max-w-6xl">
                <div
                    className={`flex-1 flex flex-col items-center lg:items-start text-center lg:text-left transition-all duration-1000 delay-200 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <p>
                        <span className="font-semibold text-[var(--color-primary)]">
                            Silverline Trading Company
                        </span>
                        &nbsp;specializes in general trading services, with a primary
                        focus on Himalayan rock salt. We export premium-quality
                        Himalayan salt from Pakistan in a variety, including powdered,
                        granular, decorative, and customized options to meet the diverse
                        needs of our clients. Committed to quality and customer
                        satisfaction, our team ensures reliable service and builds
                        lasting trust with our customers.
                    </p>
                    <p className="mt-4">
                        Our{" "}
                        <span className="font-semibold text-[var(--color-primary)]">
                            Mission
                        </span>{" "}
                        is to deliver the purest salt sourced from the Khewra Salt Mine
                        (Punjab, Pakistan) with minimal processing to maintain its
                        natural quality and purity. We are committed to providing
                        reliable and sustainable salt solutions for the industrial and
                        agricultural sectors. By upholding innovation and ethical
                        practices, we strive to exceed client expectations, support
                        their success, and promote a healthier, more sustainable world.
                    </p>

                    {/* <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-8 w-full">
                        {stats.map((stat, i) => (
                            <div
                                key={stat.label}
                                className={`flex flex-col items-center lg:items-start transition-all duration-700 ${
                                    isVisible
                                        ? "translate-y-0 opacity-100"
                                        : "translate-y-6 opacity-0"
                                }`}
                                style={{
                                    transitionDelay: isVisible
                                        ? `${600 + i * 150}ms`
                                        : "0ms",
                                }}
                            >
                                <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-primary)]">
                                    {stat.value}
                                </span>
                                <span className="text-xs sm:text-sm text-[var(--color-text)] mt-1">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div> */}
                </div>

                <div
                    className={`transition-all duration-1000 delay-300 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <div className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-500">
                        <Image
                            src={aboImg}
                            alt="Himalayan rock salt products"
                            width={420}
                            height={500}
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
