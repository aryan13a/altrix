"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const packages = [
  {
    name: "Starter Website",
    price: "₹9,999",
    description: "Perfect for startups and local businesses getting online.",
    features: [
      "Up to 3 Pages",
      "Fully Responsive Design",
      "Contact Form Integration",
      "Basic On-Page SEO",
      "1 Round of Revisions",
      "Delivered in 7 days",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Custom Business",
    price: "₹14,999",
    description: "For businesses that need a serious online presence.",
    features: [
      "Fully Custom Design (no templates)",
      "Up to 5 Pages",
      "SEO Optimization",
      "Admin Dashboard (if required)",
      "CMS Integration (optional)",
      "2 Rounds of Revisions",
      "Delivered in 14 days",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Payment Integrated",
    price: "₹19,999",
    description: "For businesses ready to transact and scale online.",
    features: [
      "Everything in Custom Package",
      "Payment Gateway (Razorpay/Stripe)",
      "User Authentication System",
      "Database Integration",
      "Priority Support",
      "3 Rounds of Revisions",
    ],
    popular: false,
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden z-10">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-altrix-indigo/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              Transparent Pricing. <br />
              <span className="text-gradient">No Surprises.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Choose the package that fits where you are — upgrade anytime as your business grows.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto mb-16"
        >
          {packages.map((pkg, idx) => (
            <motion.div
              key={idx}
              variants={fadeInUp}
              className={`rounded-3xl p-8 flex flex-col justify-between relative ${
                pkg.popular
                  ? "bg-altrix-dark border-2 border-altrix-indigo shadow-[0_0_40px_rgba(108,99,255,0.15)] md:scale-105 z-10"
                  : "glass-card border border-white/5 bg-white/[0.01]"
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-altrix-indigo to-altrix-violet font-display text-[10px] font-extrabold tracking-widest text-white uppercase shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                {/* Plan Header */}
                <h3 className="font-display font-bold text-2xl text-white mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="flex items-baseline mb-8">
                  <span className="font-display font-extrabold text-4xl sm:text-5xl text-white">
                    {pkg.price}
                  </span>
                  <span className="text-sm text-white/40 ml-2 font-mono">
                    / fixed
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-white/5 mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start text-sm text-white/70">
                      <Check className="w-4 h-4 text-altrix-cyan mr-3 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Link
                href="#contact"
                className={`inline-flex w-full items-center justify-center py-3.5 rounded-full text-sm font-bold transition-all duration-300 ${
                  pkg.popular
                    ? "bg-altrix-indigo text-white hover:bg-altrix-indigo/90 shadow-[0_0_20px_rgba(108,99,255,0.3)] hover:scale-102"
                    : "border border-white/10 hover:border-white/30 text-white bg-white/0 hover:bg-white/5 hover:scale-102"
                }`}
              >
                {pkg.cta}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Not Sure Footer Link */}
        <div className="text-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 text-sm text-white/55 hover:text-white transition-colors duration-200"
          >
            <HelpCircle className="w-4 h-4 text-altrix-cyan" />
            <span>Not sure which plan fits? Let&apos;s discuss your project custom specs.</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
