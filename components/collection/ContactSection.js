import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import WorldMap from "@/images/world-map.webp";

const ContactSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                    setTimeout(() => setHasAnimated(true), 1200);
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
            className="mt-20 py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[var(--color-primary-light)] relative overflow-hidden"
        >
            {/* World Map Background */}
            <div className="absolute inset-0 flex justify-end items-center pointer-events-none select-none">
                <Image
                    src={WorldMap}
                    alt="World Map"
                    width={"auto"}
                    height={380}
                    style={{ objectFit: "contain" }}
                    className="z-0 opacity-20 sm:opacity-20 md:opacity-100"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center gap-10">
                {/* Left: Text & Button */}
                <div
                    className={`flex-1 ml-0 sm:ml-8 transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    <h2 className="mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text)]">
                        Contact Us
                    </h2>

                    <p
                        className={`text-base sm:text-lg text-gray-700 text-left max-w-md mb-8 transition-all duration-1000 delay-200 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                    >
                        If you need our Product Catalog, Want Pricing, Have Questions
                        about Shipping, or anything else, reach out to us.
                        <br />
                        Our Team will respond as soon as possible.
                    </p>
                    <Link
                        href="/contact"
                        className={`button w-fit transition-all duration-300 ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                        style={!hasAnimated ? { transitionDelay: "400ms" } : undefined}
                    >
                         Contact Us 
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
