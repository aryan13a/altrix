"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import logoImg from "@/app/logo.png";

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
            <Link href="/" className="flex items-center space-x-2 w-max group">
              <Image
                src={logoImg}
                alt="Webio Logo"
                width={160}
                height={44}
                className="h-11 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </Link>
            
            <p className="text-sm text-white/55 leading-relaxed max-w-sm">
              Webio crafts dark-first, cinematic, and high-performance digital
              experiences that capture visitors and accelerate brand growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-full bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-all hover:scale-105"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
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
              Services
            </h4>
            <ul className="space-y-2">
              <li className="text-sm text-white/55">Business Sites</li>
              <li className="text-sm text-white/55">Web Applications</li>
              <li className="text-sm text-white/55">Landing Pages</li>
              <li className="text-sm text-white/55">SEO Optimization</li>
              <li className="text-sm text-white/55">Active Maintenance</li>
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
                  href="https://wa.me/919351864351"
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
