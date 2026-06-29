"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, HelpCircle } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const packages = [
  {
    name: "Starter Website",
    price: "₹9,990",
    description: "Perfect for startups and local businesses getting online.",
    features: [
      "Up to 3 Pages",
      "Fully Responsive Design",
      "Contact Form Integration",
      "FREE Advanced SEO (Worth ₹15,000)",
      "1 Round of Revisions",
      "Delivered in 7 days",
    ],
    popular: false,
    cta: "Get Started",
  },
  {
    name: "Premium Website",
    price: "₹14,990",
    description: "For businesses that need a serious, custom online presence.",
    features: [
      "Fully Custom Design (no templates)",
      "Up to 5 Pages",
      "FREE Advanced SEO (Worth ₹15,000)",
      "Admin Dashboard (if required)",
      "CMS Integration (optional)",
      "2 Rounds of Revisions",
      "Delivered in 14 days",
    ],
    popular: true,
    cta: "Get Started",
  },
  {
    name: "Full-Fledged E-Commerce",
    price: "₹19,990",
    description: "For businesses ready to transact and sell online at scale.",
    features: [
      "Custom E-Commerce Storefront",
      "Payment Gateway (Razorpay/Stripe)",
      "User Authentication System",
      "Database & CMS Integration",
      "FREE Advanced SEO (Worth ₹15,000)",
      "Priority Support & 3 Rounds",
    ],
    popular: false,
    cta: "Get Started",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-12 sm:py-16 overflow-hidden z-10">
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
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                idx === 1
                  ? "bg-gradient-to-br from-altrix-indigo/25 via-altrix-violet/15 to-altrix-cyan/10 border-2 border-altrix-indigo/60 shadow-[0_0_50px_rgba(108,99,255,0.25)] md:scale-105 z-10 hover:border-altrix-indigo/80 hover:shadow-[0_0_60px_rgba(108,99,255,0.35)]"
                  : idx === 0
                  ? "bg-gradient-to-br from-altrix-indigo/15 via-white/[0.01] to-white/[0.01] border border-altrix-indigo/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-altrix-indigo/55 hover:shadow-[0_0_30px_rgba(108,99,255,0.15)]"
                  : "bg-gradient-to-br from-altrix-cyan/15 via-white/[0.01] to-white/[0.01] border border-altrix-cyan/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:border-altrix-cyan/55 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
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
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span className="font-sans font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                      {pkg.price}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs text-white/40 font-mono block">
                    / fixed price
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

        {/* AI Automation Service Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 max-w-5xl mx-auto rounded-3xl p-8 sm:p-12 relative overflow-hidden bg-gradient-to-br from-altrix-indigo/20 via-altrix-violet/10 to-altrix-cyan/5 border border-altrix-indigo/35 shadow-[0_0_50px_rgba(108,99,255,0.1)]"
        >
          {/* Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full bg-altrix-cyan/10 blur-[80px]" />
          <div className="absolute -bottom-24 -left-24 w-[300px] h-[300px] rounded-full bg-altrix-indigo/10 blur-[80px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-altrix-cyan/15 border border-altrix-cyan/35 text-altrix-cyan uppercase tracking-wider mb-6">
                Standalone Automation Service
              </span>
              <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 leading-tight">
                AI Chatbot & <br />
                <span className="text-gradient">AI Agent Integration</span>
              </h3>
              <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                Automate your customer support, lead generation, and business operations. We build custom-trained AI chatbots and autonomous agents tailored to your business data and connected directly to your WhatsApp, Telegram, or website.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <li className="flex items-center text-sm text-white/70">
                  <Check className="w-4 h-4 text-altrix-cyan mr-3 flex-shrink-0" />
                  <span>WhatsApp & Telegram Support</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Check className="w-4 h-4 text-altrix-cyan mr-3 flex-shrink-0" />
                  <span>Website Custom Floating Widget</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Check className="w-4 h-4 text-altrix-cyan mr-3 flex-shrink-0" />
                  <span>Trained on Your Custom Data</span>
                </li>
                <li className="flex items-center text-sm text-white/70">
                  <Check className="w-4 h-4 text-altrix-cyan mr-3 flex-shrink-0" />
                  <span>CRM & Google Sheets Integration</span>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center">
              <div className="p-8 rounded-2xl bg-black/40 border border-white/5 w-full text-center lg:text-right max-w-sm">
                <span className="text-xs text-white/45 uppercase tracking-widest block mb-2">Starting at</span>
                <div className="flex items-baseline justify-center lg:justify-end mb-4">
                  <span className="font-sans font-extrabold text-4xl sm:text-5xl text-white">₹12,490</span>
                  <span className="text-xs text-white/40 ml-2 font-mono">/ setup</span>
                </div>
                <p className="text-xs text-white/50 mb-6 leading-relaxed">
                  Price varies based on API integrations and agent complexity.
                </p>
                <Link
                  href="#contact"
                  className="inline-flex w-full items-center justify-center py-3 px-6 rounded-full bg-altrix-indigo text-white hover:bg-altrix-indigo/90 shadow-[0_0_20px_rgba(108,99,255,0.3)] text-sm font-bold transition-all duration-300 hover:scale-102"
                >
                  Configure AI Agent
                </Link>
              </div>
            </div>
          </div>
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
