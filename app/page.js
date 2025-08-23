"use client";
import Collection from "@/components/Collection";
import HeroBanner from "@/components/HeroBanner";
import HomeProducts from "@/components/HomeProducts";
import { useState } from "react";

export default function Home() {
  const [show] = useState(true);
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Collection />
    </div>
  );
}
