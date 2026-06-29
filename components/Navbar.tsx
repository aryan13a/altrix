"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";
import logoImg from "@/app/logo.png";
import { mobileMenuVariants, mobileMenuItemVariants } from "@/lib/animations";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Process", href: "#process" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    document.body.style.overflow = "unset";
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full glass-navbar flex flex-col ${
          isScrolled ? "glass-navbar-scrolled" : ""
        }`}
      >
        {/* Promotional Offer Banner */}
        <div className="w-full bg-gradient-to-r from-altrix-indigo/90 via-altrix-violet/90 to-altrix-cyan/90 py-2 px-6 text-center shadow-[0_2px_15px_rgba(108,99,255,0.2)]">
          <p className="text-[10px] sm:text-xs font-semibold text-white tracking-widest uppercase flex items-center justify-center gap-1.5 flex-wrap">
            <span className="animate-pulse">🎁</span>
            <span>Launch Offer: Complimentary Advanced SEO (Worth ₹15,000) FREE with every package!</span>
          </p>
        </div>

        <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <Image
              src={logoImg}
              alt="Webio Logo"
              width={200}
              height={56}
              className="h-14 w-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              priority
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="#contact"
              className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-altrix-indigo text-sm font-semibold text-white transition-all duration-300 hover:scale-102 hover:shadow-[0_0_20px_rgba(108,99,255,0.4)] group overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Start a Project
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-altrix-indigo via-altrix-violet to-altrix-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex md:hidden p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-colors focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={mobileMenuVariants}
            className="fixed inset-0 z-40 bg-altrix-dark/98 flex flex-col justify-center px-8 md:hidden"
          >
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
              <div className="absolute top-[20%] left-[10%] w-[300px] h-[300px] rounded-full bg-altrix-indigo/30 blur-[100px]" />
              <div className="absolute bottom-[20%] right-[10%] w-[300px] h-[300px] rounded-full bg-altrix-cyan/20 blur-[100px]" />
            </div>

            <nav className="flex flex-col space-y-6 text-left relative z-10">
              {navLinks.map((link) => (
                <motion.div key={link.name} variants={mobileMenuItemVariants}>
                  <Link
                    href={link.href}
                    onClick={handleLinkClick}
                    className="font-display font-bold text-4xl tracking-tight text-white/80 hover:text-white transition-colors duration-200 flex items-center justify-between group"
                  >
                    <span>{link.name}</span>
                    <ArrowRight className="w-6 h-6 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-altrix-indigo" />
                  </Link>
                </motion.div>
              ))}

              <motion.div variants={mobileMenuItemVariants} className="pt-8">
                <Link
                  href="#contact"
                  onClick={handleLinkClick}
                  className="inline-flex w-full items-center justify-center px-8 py-4 rounded-full bg-altrix-indigo font-display font-semibold text-lg text-white hover:bg-altrix-indigo/90 shadow-[0_0_30px_rgba(108,99,255,0.3)] transition-all"
                >
                  Start a Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
