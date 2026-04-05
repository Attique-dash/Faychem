"use client";

import { useEffect, useRef, useState } from "react";
import Black from "@/images/blackpr.webp";
import Pink from "@/images/pinkpr.webp";
import White from "@/images/whitepr.webp";
import Custom from "@/images/custompr.webp";
import Link from "next/link";
import Image from "next/image";

const products = [
    {
        id: "salt-p",
        src: Pink,
        alt: "Himalayan Pink Salt crystals",
        label: "Pink Salt",
        content:
            "Rich in over 80 trace minerals, it provides a balanced flavor and supports natural hydration",
        href: "/pink-salt",
    },

    {
        id: "salt-w",
        src: White,
        alt: "Himalayan White Salt crystals",
        label: "White Salt",
        content:
            "Pure, crystalline salt enhances flavor while playing a key role in bodily hydration",
        href: "/white-salt",
    },
    {
        id: "salt-b",
        src: Black,
        alt: "Himalayan Black Salt chunks",
        label: "Black Salt",
        content:
            "Mineral-rich rock salt with a distinctive smoky flavor, commonly used in South Asian cuisine",
        href: "/black-salt",
    },
    {
        id: "salt-c",
        src: Custom,
        alt: "Customized Himalayan salt products",
        label: "Crafted Items",
        content:
            "Stunning natural decor and wellness products to promote a calming, purified atmosphere",

        href: "/custom",
    },
];

const ProductsSection = () => {
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
        <div
            ref={sectionRef}
            id="categories"
            className="mt-16 flex flex-col items-center justify-center pt-4 px-4 sm:px-6 lg:px-8 scroll-mt-24"
        >
            <h2
                className={`mb-4 text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-text)] transition-all duration-1000 ${
                    isVisible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-8 opacity-0"
                }`}
            >
                Himalayan Rock Salt
            </h2>

            {/* Mobile: vertical full-width cards */}
            <div className="mt-8 flex sm:hidden flex-col gap-5 w-full max-w-[70vw] mx-auto mb-16">
                {products.map((item, idx) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        id={item.id}
                        className={`block rounded-2xl overflow-hidden bg-white shadow-md border border-gray-100 active:scale-[0.98] transition-all ${
                            hasAnimated ? "duration-150" : "duration-700"
                        } ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                        style={
                            !hasAnimated
                                ? { transitionDelay: `${200 + idx * 150}ms` }
                                : undefined
                        }
                    >
                        <div className="relative h-[210px] overflow-hidden">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={280}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-1.5 text-center">
                                {item.label}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

            {/* Desktop: grid */}
            <div className="mt-8 hidden sm:grid sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6 max-w-7xl mx-auto mb-16 items-stretch">
                {products.map((item, idx) => (
                    <Link
                        key={item.id}
                        href={item.href}
                        id={item.id}
                        className={`group relative overflow-hidden rounded-3xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition-all ${
                            hasAnimated ? "duration-300" : "duration-700"
                        } border border-gray-100 cursor-pointer h-[380px] w-full max-w-[280px] mx-auto flex flex-col ${
                            isVisible
                                ? "translate-y-0 opacity-100"
                                : "translate-y-8 opacity-0"
                        }`}
                        style={
                            !hasAnimated
                                ? { transitionDelay: `${200 + idx * 150}ms` }
                                : undefined
                        }
                    >
                        <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={400}
                                height={280}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-4 flex-1 flex flex-col">
                            <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 text-center">
                                {item.label}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {item.content}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;
