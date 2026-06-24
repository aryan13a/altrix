"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Palette,
  Code,
  Zap,
  CreditCard,
  Smartphone,
  Search,
  LayoutDashboard,
  Database,
  Wrench,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const capabilities = [
  {
    icon: Globe,
    title: "Business Websites",
    description: "Professional sites that convert",
  },
  {
    icon: Palette,
    title: "Portfolio Websites",
    description: "Showcase your work beautifully",
  },
  {
    icon: Code,
    title: "Custom Web Apps",
    description: "Complex problems, elegant solutions",
  },
  {
    icon: Zap,
    title: "Landing Pages",
    description: "Built to capture leads and sell",
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure checkout, zero friction",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    description: "Flawless on every screen size",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank higher, get found faster",
  },
  {
    icon: LayoutDashboard,
    title: "Admin Dashboards",
    description: "Manage your business with clarity",
  },
  {
    icon: Database,
    title: "Database Integration",
    description: "Structured, scalable, secure data",
  },
  {
    icon: Wrench,
    title: "Maintenance & Support",
    description: "We stay with you post-launch",
  },
];

export default function Capabilities() {
  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden z-10">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Ambient background bloom */}
        <div className="absolute top-[40%] right-[10%] w-[350px] h-[350px] rounded-full bg-altrix-violet/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              Everything Your <br />
              <span className="text-gradient">Business Needs Online.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              We handle every layer of your digital presence — from pixel-perfect
              design to robust backend engineering.
            </p>
          </motion.div>
        </div>

        {/* 5-Column Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
        >
          {capabilities.map((cap, i) => {
            const IconComponent = cap.icon;
            return (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="group relative flex flex-col justify-between p-6 rounded-2xl glass-card h-[220px]"
              >
                <div>
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-white/[0.03] border border-white/5 text-altrix-indigo transition-all duration-300 group-hover:bg-altrix-indigo/10 group-hover:border-altrix-indigo/20 group-hover:text-altrix-cyan group-hover:shadow-[0_0_15px_rgba(108,99,255,0.2)]">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-lg tracking-tight text-white mb-2 group-hover:text-altrix-indigo transition-colors duration-200">
                    {cap.title}
                  </h3>
                </div>
                <p className="text-sm text-white/45 leading-relaxed group-hover:text-white/60 transition-colors duration-200">
                  {cap.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
