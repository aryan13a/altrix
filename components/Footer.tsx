"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import logoImg from "@/app/logo.png";
import faviconImg from "@/public/Favicon.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-altrix-dark border-t border-white/[0.04] pt-20 pb-10 overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[-10%] right-[10%] w-[300px] h-[300px] rounded-full bg-altrix-indigo/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Column 1 (5 Cols on large) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 w-max group">
              <Image
                src={faviconImg}
                alt="Webio Favicon"
                width={36}
                height={36}
                className="h-9 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
              <Image
                src={logoImg}
                alt="Webio Logo - Affordable Website Design for Small Businesses"
                width={160}
                height={44}
                className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Webio crafts dark-first, cinematic, and high-performance digital
              experiences that capture visitors and accelerate brand growth.
            </p>


          </div>

          {/* Column 2 (Quick Links - 2 Cols) */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-altrix-cyan mb-2">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-sm text-white/55 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-sm text-white/55 hover:text-white transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-sm text-white/55 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-white/55 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 (Services - 2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-altrix-cyan mb-2">
              SEO Offers
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/cheap-website-free-seo-india" className="text-sm text-white/55 hover:text-white transition-colors">
                  Cheap SEO Website
                </Link>
              </li>
              <li>
                <Link href="/affordable-website-india" className="text-sm text-white/55 hover:text-white transition-colors">
                  Affordable Website India
                </Link>
              </li>
              <li>
                <Link href="/no-upfront-cost-website" className="text-sm text-white/55 hover:text-white transition-colors">
                  No Upfront Cost Website
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 (Contact - 2.5 Cols) */}
          <div className="lg:col-span-2.5 flex flex-col space-y-4">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-altrix-cyan mb-2">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://wa.me/919571425884"
                  className="text-sm text-white/55 hover:text-white transition-colors flex items-center gap-1 group"
                >
                  WhatsApp
                  <ArrowUpRight className="w-3 h-3 text-white/30 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </li>
              <li className="text-sm text-white/55">
                Jaipur, Rajasthan, India
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30 font-mono text-center sm:text-left">
            © {currentYear} Webio. All Rights Reserved. · Built with precision in Jaipur, India.
          </p>
          <button
            onClick={handleScrollToTop}
            className="text-xs font-mono tracking-widest uppercase text-white/30 hover:text-white transition-colors"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
