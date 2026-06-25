"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  location: string;
  initials: string;
  stars: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Altrix delivered our new website in under two weeks. Enquiries have tripled since launch — we're booked out two months ahead.",
    name: "Priya S.",
    role: "Business Owner",
    location: "Jaipur",
    initials: "PS",
    stars: 5,
  },
  {
    quote: "Fast, communicative, and the final product exceeded what I imagined. Absolutely worth every rupee.",
    name: "Rahul M.",
    role: "Founder, SaaS Startup",
    location: "Bangalore",
    initials: "RM",
    stars: 5,
  },
  {
    quote: "Our new site looks more premium than competitors who spent 5× more. Altrix just gets it.",
    name: "Anika T.",
    role: "Consultant",
    location: "Mumbai",
    initials: "AT",
    stars: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const startTimer = useCallback(() => {
    stopTimer();
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000); // Cycle every 6 seconds
  }, [stopTimer]);

  useEffect(() => {
    if (!isHovered) {
      startTimer();
    } else {
      stopTimer();
    }
    return () => stopTimer();
  }, [isHovered, startTimer, stopTimer]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative py-12 sm:py-16 overflow-hidden z-10 bg-altrix-dark/30 border-b border-white/[0.02]">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[10%] left-[20%] w-[350px] h-[350px] rounded-full bg-altrix-indigo/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              Trusted by Businesses. <br />
              <span className="text-gradient-cyan">Built for Growth.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Read how Altrix helps founders, brands, and local businesses elevate their digital identities.
            </p>
          </motion.div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Card slider with AnimatePresence */}
          <div className="min-h-[260px] sm:min-h-[220px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -25 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="w-full p-8 sm:p-10 rounded-3xl glass-card border border-altrix-indigo/10 flex flex-col justify-between relative shadow-[0_15px_50px_rgba(0,0,0,0.3)]"
              >
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-8 w-12 h-12 text-altrix-indigo/10 pointer-events-none" />

                <div>
                  {/* Stars */}
                  <div className="flex items-center space-x-1 mb-6">
                    {[...Array(testimonials[activeIndex].stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-altrix-cyan text-altrix-cyan" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-lg sm:text-xl text-white/90 leading-relaxed italic mb-8 font-sans">
                    &ldquo;{testimonials[activeIndex].quote}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center font-display font-bold text-sm bg-gradient-to-tr from-altrix-indigo to-altrix-violet text-white shadow-md">
                      {testimonials[activeIndex].initials}
                    </div>
                    <div>
                      <h4 className="font-sans font-bold text-white text-base">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-xs text-white/45 font-mono">
                        {testimonials[activeIndex].role} · {testimonials[activeIndex].location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Indicator dots */}
            <div className="flex items-center space-x-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    idx === activeIndex ? "w-8 bg-altrix-indigo" : "bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 bg-white/0 hover:bg-white/5 transition-all"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 bg-white/0 hover:bg-white/5 transition-all"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
