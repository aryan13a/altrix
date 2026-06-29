"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-[100vh] w-full flex items-center overflow-hidden bg-altrix-dark pt-44 pb-24 md:pt-40 md:pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 md:left-auto md:right-0 md:w-[58%] w-full h-full overflow-hidden bg-altrix-dark pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-center scale-90 origin-right"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Desktop-only gradient overlay: fades smoothly from the dark background of the page (left) into the video (right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-altrix-dark via-altrix-dark/50 to-transparent z-10 hidden md:block" />
        {/* Mobile-only overlay: overall dark overlay (60%) to ensure high contrast and readability */}
        <div className="absolute inset-0 bg-altrix-dark/60 md:hidden z-10" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full flex flex-col justify-center items-start text-left">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-start max-w-3xl"
        >
          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-4 sm:mb-6 font-display font-extrabold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05] text-white"
          >
            Premium Websites.<br />
            <span className="text-gradient-cyan">Powerful Results.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="mb-6 sm:mb-8 text-base sm:text-lg text-white/55 max-w-[620px] leading-relaxed"
          >
            We design fast, modern and conversion-focused websites that help Indian businesses build trust, attract customers and grow online.
          </motion.p>

          {/* Offer Card */}
          <motion.div
            variants={fadeInUp}
            className="mb-6 sm:mb-8 p-5 rounded-2xl bg-gradient-to-br from-altrix-indigo/15 via-white/[0.01] to-white/[0.01] border border-altrix-indigo/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-md w-full"
          >
            <div className="font-sans font-bold text-white text-base sm:text-lg leading-snug">
              Premium Website at <span className="text-altrix-cyan">₹9,990</span> — <br />
              <span className="text-altrix-indigo">Free SEO</span> Included.
            </div>
            <div className="mt-2 text-xs sm:text-sm font-semibold text-altrix-cyan tracking-wider uppercase">
              Built for Indian Businesses
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-altrix-indigo text-base font-semibold text-white transition-all duration-300 hover:scale-102 hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] relative overflow-hidden group"
            >
              <span className="relative z-10">Get Your Website</span>
              <span className="absolute inset-0 bg-gradient-to-r from-altrix-indigo to-altrix-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <a
              href="https://wa.me/919571425884?text=Hi%20Webio%2C%20I%20want%20to%20claim%20the%20Premium%20Website%20offer%20at%20%E2%82%B99%2C990%20with%20free%20SEO%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/0 hover:bg-white/5 text-base font-semibold text-white transition-all duration-300 group"
            >
              Claim Offer
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 cursor-pointer hidden sm:flex flex-col items-center"
      >
        <Link href="#marquee" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/40 hover:text-white transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
