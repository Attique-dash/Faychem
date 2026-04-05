"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import industry from "@/images/industry.webp";
import pot from "@/images/pot.webp";
import wellness from "@/images/wellness.webp";

const industries = [
    {
        img: industry,
        alt: "Industrial Salt",
        title: "Industrial Salt",
        desc: "Used in manufacturing, textile processing, leather curing, chemical production, and de-icing applications",
    },
    {
        img: pot,
        alt: "Edible Salt",
        title: "Edible Salt",
        desc: "Pure, mineral-rich salt, ideal for everyday cooking, seasoning, and food preservation",
    },
    {
        img: wellness,
        alt: "Wellness & Spa Salt",
        title: "Wellness & Spa",
        desc: "Salt designed for decorative use, spa treatments, bath therapies, and holistic wellness",
    },
];

const IndustriesWeServe = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [activeCard, setActiveCard] = useState(1);
    const sectionRef = useRef(null);
    const scrollRef = useRef(null);

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

    useEffect(() => {
        const container = scrollRef.current;
        if (!container || container.children.length < 2) return;
        const card = container.children[1];
        container.scrollLeft = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
    }, []);

    const scrollToCard = useCallback((idx) => {
        const container = scrollRef.current;
        if (!container) return;
        const card = container.children[idx];
        if (!card) return;
        const scrollPos = card.offsetLeft - (container.offsetWidth - card.offsetWidth) / 2;
        container.scrollTo({ left: scrollPos, behavior: "smooth" });
    }, []);

    const handleScroll = useCallback(() => {
        const container = scrollRef.current;
        if (!container) return;
        const centerX = container.scrollLeft + container.offsetWidth / 2;
        let closestIdx = 0;
        let closestDist = Infinity;
        Array.from(container.children).forEach((card, idx) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const dist = Math.abs(centerX - cardCenter);
            if (dist < closestDist) {
                closestDist = dist;
                closestIdx = idx;
            }
        });
        setActiveCard(closestIdx);
    }, []);

    return (
        <section
            ref={sectionRef}
            className="mt-14 bg-[var(--color-primary)] mb-16 py-12 sm:py-16 overflow-hidden"
        >
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-10 sm:mb-14 transition-all duration-1000 ${
                        isVisible
                            ? "translate-y-0 opacity-100"
                            : "translate-y-8 opacity-0"
                    }`}
                >
                    Industries We Serve
                </h2>

                {/* Mobile: horizontal scroll */}
                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex sm:hidden gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-4 px-4 [&::-webkit-scrollbar]:hidden"
                    style={{ scrollbarWidth: "none" }}
                >
                    {industries.map((item, idx) => (
                        <div
                            key={idx}
                            className={`bg-white text-center shadow rounded-lg border border-gray-300 flex-shrink-0 w-[52vw] snap-center flex flex-col items-center justify-center p-5 transition-all duration-700 ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-8 opacity-0"
                            }`}
                            style={
                                !hasAnimated
                                    ? { transitionDelay: `${300 + idx * 150}ms` }
                                    : undefined
                            }
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={45}
                                height={45}
                                className="mb-3"
                            />
                            <h3 className="text-base font-semibold mb-1.5">
                                {item.title}
                            </h3>
                            <p className="text-xs text-gray-700 leading-relaxed">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Mobile: dot indicators */}
                <div className="flex sm:hidden justify-center gap-2 mt-4">
                    {industries.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => scrollToCard(idx)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                activeCard === idx
                                    ? "bg-white w-5"
                                    : "bg-white/40 w-2"
                            }`}
                            aria-label={`Go to card ${idx + 1}`}
                        />
                    ))}
                </div>

                {/* Desktop: grid */}
                <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mx-auto">
                    {industries.map((item, idx) => (
                        <div
                            key={idx}
                            className={`bg-white p-8 text-center shadow rounded-lg border border-gray-300 transition-all duration-300 hover:shadow-[0_8px_32px_var(--color-primary-darker)] hover:border-[var(--color-primary)] ${
                                isVisible
                                    ? "translate-y-0 opacity-100"
                                    : "translate-y-8 opacity-0"
                            }`}
                            style={
                                !hasAnimated
                                    ? {
                                          transitionDuration: "0.7s",
                                          transitionDelay: `${300 + idx * 150}ms`,
                                      }
                                    : undefined
                            }
                        >
                            <Image
                                src={item.img}
                                alt={item.alt}
                                width={60}
                                height={60}
                                className="mx-auto mb-5"
                            />
                            <h3 className="text-2xl font-semibold mb-3">
                                {item.title}
                            </h3>
                            <p className="text-base text-gray-700">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;
