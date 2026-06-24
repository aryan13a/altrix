"use client";

import React from "react";

const items = [
  "Premium Web Development",
  "100% Client Satisfaction",
  "30+ Projects Delivered",
  "Fast Turnarounds",
  "Jaipur",
  "Global",
  "Built to Convert",
];

export default function SocialProofBar() {
  // Multiply list to create a seamless marquee loop
  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section id="marquee" className="relative w-full py-6 bg-altrix-dark/50 border-y border-white/5 overflow-hidden z-10">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="flex space-x-12 animate-marquee">
          {marqueeItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 text-xs font-mono tracking-[0.2em] uppercase text-white/30"
            >
              <span>{item}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-altrix-indigo/50"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
