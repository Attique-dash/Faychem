"use client";

import dynamic from "next/dynamic";

// Lazy load heavy components
const Collection = dynamic(() => import("@/components/Collection"), {
  loading: () => <div className="h-96 animate-pulse bg-gray-200" />,
  ssr: true,
});

const HeroBanner = dynamic(() => import("@/components/HeroBanner"), {
  loading: () => <div className="h-screen animate-pulse bg-gray-100" />,
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Collection />
    </div>
  );
}