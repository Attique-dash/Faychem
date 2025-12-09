"use client";

import React from "react";
import Image from "next/image";
import aboImg from "@/images/about.webp";

const AboutSection = () => {
    return (
        <header
            id="about"
            className="py-12 sm:py-18 lg:py-6 px-4 sm:px-8 flex flex-col items-center text-center relative overflow-hidden scroll-mt-24"
        >
            <div className="flex flex-col sm:flex-row items-center">
                <div className="max-w-2xl flex flex-col sm:flex-col items-center mt-[1rem] sm:mt-[2rem] lg:mt-[3rem] ">
                    <div className="relative">
                        <h2 className="mb-8 text-2xl sm:text-3xl lg:text-3xl font-bold text-[var(--black)]">
                            WHO ARE WE?
                        </h2>
                    </div>
                    <p>
                        <span className="font-bold text-[var(--primary)]">
                            Silverline Trading Company
                        </span>
                        &nbsp; specializes in general trading services, with a primary
                        focus on Himalayan rock salt. We export premium-quality
                        Himalayan salt from Pakistan in a variety, including powdered,
                        granular, decorative, and customized options to meet the diverse
                        needs of our clients. Committed to quality and customer
                        satisfaction, our team ensures reliable service and builds
                        lasting trust with our customers.
                    </p>
                    <p className="mt-4">
                        Our
                        <span className="font-bold text-[var(--primary)]">
                            {" "}
                            Mission{" "}
                        </span>
                        is to deliver the purest salt sourced from the Khewra Salt Mine
                        (Punjab, Pakistan) with minimal processing to maintain its
                        natural quality and purity. We are committed to providing
                        reliable and sustainable salt solutions for the industrial and
                        agricultural sectors. By upholding innovation and ethical
                        practices, we strive to exceed client expectations, support
                        their success, and promote a healthier, more sustainable world.
                    </p>
                </div>
                <div className="relative rounded-2xl overflow-hidden sm:ml-[45px] mt-12 mb-4 sm:mt-16 md:block lg:block shadow-xl hover:shadow-3xl transition-all duration-500 transform hover:scale-105">
                    <Image
                        src={aboImg}
                        alt="salt image"
                        width={380}
                        height={"auto"}
                        className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                </div>
            </div>
        </header>)
};

export default AboutSection;