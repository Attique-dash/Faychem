import Image from "next/image";
import globe from "@/images/globe.webp";
import shield from "@/images/shield.webp";
import badge from "@/images/badge.webp";
import trust from "@/images/dependable.webp";

const cards = [
    {
        src: trust,
        alt: "Trusted Quality",
        title: "Trusted Quality",
        desc: "Every product meets international standards. Ensuring purity, consistency, and lasting trust.",
    },
    {
        src: globe,
        alt: "Global Reach",
        title: "Global Reach",
        desc: "Our robust logistics network ensures smooth and timely deliveries worldwide.",
    },
    {
        src: shield,
        alt: "Trust Driven Service",
        title: "Trust Driven Service",
        desc: "We focus on building lasting partnerships through responsive communication and personalized service.",
    },
    {
        src: badge,
        alt: "Competitive Pricing",
        title: "Competitive Pricing",
        desc: "Premium quality at fair, transparent prices. Designed to help your business grow competitively.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="mt-0 px-4">
            <div className="max-w-lg sm:max-w-6xl mx-auto bg-[var(--color-primary)] rounded-3xl p-6 sm:p-8">
                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl text-white font-bold text-center mb-4 sm:mb-6">
                    What makes us different?
                </h2>
                <p className="text-center text-white max-w-2xl mx-auto mb-10 text-base sm:text-lg">
                    We go beyond just exporting salt—we deliver a seamless,
                    quality-driven experience that helps your business grow
                    globally. Here&#39;s what sets us apart:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {cards.map((item) => (
                        <div
                            key={item.title}
                            className="group bg-gray-100 rounded-2xl shadow p-5 sm:p-6 flex flex-col items-center transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1 hover:bg-white focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <Image
                                src={item.src}
                                alt={item.alt}
                                width={60}
                                height={60}
                                className="mx-auto mb-6 transition-transform duration-500 group-hover:scale-110"
                            />
                            <h3 className="font-bold text-base sm:text-lg mb-2 transition-colors duration-300 group-hover:text-[var(--color-primary)]">
                                {item.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 transition-colors duration-300 group-hover:text-gray-800 text-center">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
