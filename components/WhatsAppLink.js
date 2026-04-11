"use client";

import Link from "next/link";

export default function WhatsAppLink() {
  return (
    <Link
      href="https://wa.me/923205509624?text=Hi%2C%20I%27m%20interested%20in%20your%20Himalayan%20salt%20products.%20Can%20you%20provide%20more%20information%3F"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-[var(--color-primary-dark)] hover:text-[var(--color-primary-darker)] transition-colors"
      onClick={() => {
        if (typeof window.gtag === "function") {
          window.gtag("event", "contact", {
            event_category: "WhatsApp",
            event_label: "Footer",
          });
        }
      }}
    >
      +92 320 5509624
    </Link>
  );
}
