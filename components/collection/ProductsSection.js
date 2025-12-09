"use client";

import Black from "@/images/blackpr.webp";
import Pink from "@/images/pinkpr.webp";
import White from "@/images/whitepr.webp";
import Custom from "@/images/custompr.webp";
import Link from "next/link";
import Image from "next/image";

const ProductsSection = () => {
    return (
        <div
            id="categories"
            className="mt-16 sm:mt-16 flex flex-col items-center justify-center pt-4 px-4 sm:px-6 lg:px-8 scroll-mt-24 relative overflow-hidden"
        >
            <div className="relative">
                <h2 className="mb-4 text-3xl sm:text-4xl lg:text-4xl font-bold text-[var(--black)]">
                    Himalayan Rock Salt
                </h2>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-2 lg:gap-4 max-w-xl sm:max-w-7xl mx-auto mb-16 sm:mb-16 items-stretch">
                {" "}
                {[
                    {
                        id: "salt-p",
                        src: Pink,
                        alt: "Pink Salt",
                        label: "Pink Salt",
                        content:
                            "Rich in over 80 trace minerals, it provides a balanced flavor and supports natural hydration",
                        href: "/pink-salt",
                    },

                    {
                        id: "salt-w",
                        src: White,
                        alt: "White Salt",
                        label: "White Salt",
                        content:
                            "Pure, crystalline salt enhances flavor while playing a key role in bodily hydration",
                        href: "/white-salt",
                    },
                    {
                        id: "salt-b",
                        src: Black,
                        alt: "Black Salt",
                        label: "Black Salt",
                        content:
                            "Mineral-rich rock salt with a distinctive smoky flavor, commonly used in South Asian cuisine",
                        href: "/black-salt",
                    },
                    {
                        id: "salt-c",
                        src: Custom,
                        alt: "Customized Products",
                        label: "Crafted Items",
                        content:
                            "Stunning natural decor and wellness products to promote a calming, purified atmosphere",

                        href: "/custom",
                    },
                ].map((item, index) => (
                    <Link key={index} href={item.href} id={item.id} passHref>
                        <div className="mb-4 group relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:scale-105 border border-gray-100 cursor-pointer h-[380px] w-full max-w-[280px] mx-auto flex flex-col">
                            <div className="relative h-[220px] overflow-hidden flex-shrink-0">
                                <Image
                                    src={item.src}
                                    alt={item.alt}
                                    width={400}
                                    height={280}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="p-4 transform group-hover:translate-y-[-4px] transition-transform duration-500 flex-1 flex flex-col">
                                <h3
                                    className={`text-xl font-bold text-[var(--primary)] mb-3 text-center`}
                                >
                                    {item.label}
                                </h3>
                                <p className="text-sm text-gray-600 leading-relaxed">
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductsSection;