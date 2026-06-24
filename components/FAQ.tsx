"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does a website take to build?",
    answer: "Typically between 7 to 21 days depending on complexity and page count. Our Starter package takes just 7 days, whereas custom or payment integrated applications take 14 to 21 days. We scope milestones transparently so you always know exactly when your site goes live.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer: "We assist in setting up hosting and custom domain connections on high-performance platforms like Vercel, Netlify, or Hostinger. While the billing for hosting/domains remains on your card, we handle 100% of the technical configuration, DNS management, and SSL security setups.",
  },
  {
    question: "Can the website be upgraded or expanded later?",
    answer: "Yes, absolutely. We architect all codebases using modular Next.js components and Tailwind. This means adding additional sections, dynamic pages, CMS blogs, or databases later is straightforward and cost-efficient as your brand scales.",
  },
  {
    question: "Will my website work perfectly on mobile devices?",
    answer: "Yes, 100%. Mobile-first design is our core philosophy. Every project undergoes thorough testing across physical mobile devices, tablets, and desktop resolutions to guarantee flawless UX, rapid render speeds, and seamless navigation.",
  },
  {
    question: "Do you offer ongoing maintenance after launch?",
    answer: "Yes! We provide tailored monthly maintenance packages that cover page-speed audits, core security patches, content adjustments, minor feature extensions, and immediate troubleshooting support so your digital presence remains optimal.",
  },
  {
    question: "What information do I need to provide to get started?",
    answer: "To kick off, we'll need your brand logo, color guidelines, text/copy outline, high-resolution imagery, and examples of sites you love. If you don't have copy or assets ready, we offer helper templates and strategy prompts to shape them together.",
  },
  {
    question: "Do you work with clients outside India?",
    answer: "Yes! While based in Jaipur, we work with clients globally (USA, UK, Middle East, Europe). We manage projects through online video alignment calls, shared boards, and digital workflows, coordinating effectively across different time zones.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] right-[-10%] w-[400px] h-[400px] rounded-full bg-altrix-indigo/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              Questions? <br />
              <span className="text-gradient-cyan">We Have Answers.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Find answers to commonly asked questions about our process, pricing, timeline, and capabilities.
            </p>
          </motion.div>
        </div>

        {/* Accordion List */}
        <div className="max-w-[720px] mx-auto flex flex-col space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen ? "glass-card border-altrix-indigo/20 shadow-[0_0_20px_rgba(108,99,255,0.05)]" : "glass-card border-white/5"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-sans font-bold text-base sm:text-lg text-white/90 group-hover:text-white transition-colors duration-200">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 transition-transform duration-300 flex-shrink-0 ml-4 ${
                      isOpen ? "rotate-180 border-altrix-indigo text-altrix-indigo bg-altrix-indigo/5" : ""
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5">
                        <p className="text-sm sm:text-base text-white/55 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
