"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Portfolio() {
  return (
    <section id="work" className="relative py-24 sm:py-32 overflow-hidden z-10">
      {/* Background radial glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-altrix-cyan/5 blur-[130px]" />
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-altrix-indigo/5 blur-[130px]" />
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
              Projects That Speak <br />
              <span className="text-gradient-cyan">for Themselves.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Real businesses. Real results. Real growth. We focus on speed,
              flawless design, and conversions.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <motion.div
          variants={staggerContainer(0.12, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {/* Featured Card (Full Width - 12 Cols) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-12 rounded-3xl glass-card overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group border-altrix-indigo/10 flex flex-col lg:flex-row"
          >
            {/* Left Info Column */}
            <div className="lg:w-5/12 p-8 sm:p-12 flex flex-col justify-between order-2 lg:order-1">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-altrix-indigo/10 border border-altrix-indigo/20 text-altrix-indigo uppercase tracking-wider">
                    E-Commerce Suite
                  </span>
                  <span className="text-xs text-white/40 font-mono">Case 01</span>
                </div>
                <h3 className="font-display font-extrabold text-3xl sm:text-4xl text-white mb-4 tracking-tight group-hover:text-altrix-indigo transition-colors duration-200">
                  Apex Fashion Store
                </h3>
                <p className="text-white/60 text-sm sm:text-base leading-relaxed mb-6">
                  Rebuilt from scratch with a custom Next.js storefront, lightning-fast
                  filtering, and seamless headless Shopify checkout integration.
                </p>
              </div>

              <div>
                {/* Result Metric */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-8">
                  <span className="text-xs font-mono uppercase tracking-widest text-altrix-cyan block mb-1">
                    KEY OUTCOME
                  </span>
                  <span className="font-display font-extrabold text-2xl sm:text-3xl text-white">
                    +312% increase in sales conversion
                  </span>
                </div>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link relative"
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-altrix-indigo transition-all duration-300 group-hover/link:w-full" />
                </Link>
              </div>
            </div>

            {/* Right Mockup Display Column */}
            <div className="lg:w-7/12 bg-white/[0.01] border-l border-white/5 flex items-center justify-center p-8 sm:p-12 relative overflow-hidden order-1 lg:order-2">
              <div className="absolute top-[20%] left-[20%] w-[300px] h-[300px] rounded-full bg-altrix-indigo/10 blur-[80px]" />
              
              {/* CSS Browser Window Mockup */}
              <div className="relative w-full max-w-[520px] rounded-xl border border-white/10 bg-altrix-dark overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-altrix-indigo/35">
                {/* Browser bar */}
                <div className="bg-white/[0.03] px-4 py-3 flex items-center gap-1.5 border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <div className="ml-4 flex-1 max-w-[200px] bg-white/[0.05] rounded py-0.5 px-3 text-[10px] text-white/30 truncate">
                    apex-fashion.com
                  </div>
                </div>
                {/* Browser content placeholder (gorgeous dashboard/shop mockup) */}
                <div className="p-6 h-[220px] sm:h-[280px] bg-altrix-dark/80 grid grid-cols-12 gap-4">
                  <div className="col-span-8 flex flex-col justify-between">
                    <div className="h-6 w-24 bg-white/10 rounded"></div>
                    <div className="space-y-2">
                      <div className="h-8 w-40 bg-gradient-to-r from-altrix-indigo/80 to-altrix-cyan/80 rounded"></div>
                      <div className="h-4 w-48 bg-white/5 rounded"></div>
                    </div>
                    <div className="h-10 w-28 bg-altrix-indigo/30 border border-altrix-indigo/40 rounded-full"></div>
                  </div>
                  <div className="col-span-4 flex flex-col justify-between items-end">
                    <div className="h-12 w-12 rounded-full bg-altrix-cyan/20 border border-altrix-cyan/30 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-altrix-cyan" />
                    </div>
                    <div className="w-full space-y-2">
                      <div className="h-3 w-full bg-white/5 rounded"></div>
                      <div className="h-3 w-10/12 bg-white/5 rounded ml-auto"></div>
                      <div className="h-3 w-8/12 bg-white/5 rounded ml-auto"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Medium Card 1 (Below Left - 4 Cols) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 rounded-3xl glass-card overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group border-altrix-indigo/10 flex flex-col justify-between p-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-altrix-cyan/10 border border-altrix-cyan/20 text-altrix-cyan uppercase tracking-wider">
                  SaaS Web App
                </span>
                <span className="text-xs text-white/40 font-mono">Case 02</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-altrix-indigo transition-colors duration-200">
                Aether SaaS Dashboard
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                A complex database analytics web app designed with real-time charting, fully typed APIs, and multi-tenant security.
              </p>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-altrix-cyan block mb-0.5">
                  KEY OUTCOME
                </span>
                <span className="font-display font-extrabold text-xl text-white">
                  &lt; 1.2s Dashboard LCP Speed
                </span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link relative"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-altrix-indigo transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </div>
          </motion.div>

          {/* Medium Card 2 (Below Middle - 4 Cols) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 rounded-3xl glass-card overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group border-altrix-indigo/10 flex flex-col justify-between p-8"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-altrix-violet/10 border border-altrix-violet/20 text-altrix-violet uppercase tracking-wider">
                  Brand Studio
                </span>
                <span className="text-xs text-white/40 font-mono">Case 03</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white mb-3 group-hover:text-altrix-indigo transition-colors duration-200">
                Vortex Interactive
              </h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                A high-end design agency portfolio utilizing custom Three.js shader interactions and staggered GSAP layouts.
              </p>
            </div>

            <div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5 mb-6">
                <span className="text-[10px] font-mono uppercase tracking-widest text-altrix-cyan block mb-0.5">
                  KEY OUTCOME
                </span>
                <span className="font-display font-extrabold text-xl text-white">
                  +180% Avg Session Duration
                </span>
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white group/link relative"
              >
                View Case Study
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                <span className="absolute bottom-[-2px] left-0 w-0 h-0.5 bg-altrix-indigo transition-all duration-300 group-hover/link:w-full" />
              </Link>
            </div>
          </motion.div>

          {/* CTA Bento Card (Below Right - 4 Cols) */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-4 rounded-3xl bg-gradient-to-br from-altrix-indigo/20 via-altrix-violet/10 to-altrix-cyan/5 border border-altrix-indigo/35 overflow-hidden hover:translate-y-[-4px] transition-all duration-300 group flex flex-col justify-between p-8 relative"
          >
            {/* Ambient inner glow */}
            <div className="absolute inset-0 bg-gradient-radial from-altrix-indigo/15 to-transparent blur-[50px] pointer-events-none" />

            <div className="relative z-10">
              <span className="font-display font-bold text-[10px] uppercase tracking-widest text-altrix-cyan block mb-6">
                AVAILABLE SLOT
              </span>
              <h3 className="font-display font-extrabold text-3xl text-white mb-4 leading-tight">
                Your Next <br />Project.
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Let&apos;s construct a premium website tailored specifically to unlock growth
                and scale your digital footprint.
              </p>
            </div>

            <div className="relative z-10">
              <Link
                href="#contact"
                className="inline-flex w-full items-center justify-center gap-2 px-6 py-4 rounded-full bg-white text-altrix-dark text-sm font-bold shadow-lg transition-transform duration-300 group-hover:scale-102"
              >
                Let&apos;s build yours
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
