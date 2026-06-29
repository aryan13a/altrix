import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cheap Website With Free SEO India — ₹9,990 | Webio",
  description: "Get a high-performance cheap website with free SEO setup in India for just ₹9,990 one-time. No monthly fees, fully mobile-responsive, built on Next.js.",
  alternates: {
    canonical: "https://www.webio.co.in/cheap-website-free-seo-india",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Webio builds premium, fully responsive websites for ₹9,990 one-time. No monthly fees, no hidden charges. The price includes design, development, and free SEO setup."
      }
    },
    {
      "@type": "Question",
      "name": "What is included in the ₹9,990 plan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You get a custom-designed, mobile-responsive website built on Next.js, on-page SEO setup, WhatsApp CTA integration, and one round of revisions — all for ₹9,990."
      }
    },
    {
      "@type": "Question",
      "name": "Do you charge extra for SEO?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. SEO setup is included in the ₹9,990 package at no extra cost. This includes meta title and description optimisation, FAQ schema, image alt tags, sitemap, and Google Search Console submission."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a monthly fee after the one-time payment?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No recurring or monthly fees. You pay ₹9,990 once and own the website."
      }
    }
  ]
};

export default function CheapWebsitePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main className="relative bg-altrix-dark pt-32 pb-20 min-h-screen flex flex-col justify-between">
        <div className="max-w-4xl mx-auto px-6 z-10 w-full">
          {/* Breadcrumbs */}
          <div className="mb-6 text-sm text-white/40">
            <Link href="/" className="hover:text-white transition-colors duration-200">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white/60">Cheap Website with Free SEO</span>
          </div>

          {/* H1 Headline */}
          <h1 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight text-white mb-8">
            Cheap Website With <br />
            <span className="text-gradient-cyan">Free SEO India — ₹9,990 One-Time</span>
          </h1>

          {/* Content copy */}
          <div className="prose prose-invert text-base sm:text-lg text-white/70 leading-relaxed space-y-6 mb-12">
            <p>
              Looking for an affordable way to get your business online in India without compromising on speed or quality? Webio delivers premium, high-performance, and fully responsive websites built on Next.js for a transparent, flat fee of <strong>₹9,990</strong>.
            </p>
            <p>
              Unlike standard template-based platforms or traditional agencies that demand hefty recurring retainers, Webio keeps it completely budget-friendly. Our core package requires just a one-time setup fee. There are absolutely no monthly maintenance costs or hidden fees—you get complete ownership of your code, design, and assets.
            </p>
            <p>
              To help you attract organic search traffic instantly, we bundle our advanced on-page SEO setup for free. We optimize your title tags, headers, image alt text, and register your dynamic XML sitemap directly with Google Search Console so you rank for key queries quickly.
            </p>
          </div>

          {/* WhatsApp CTA */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
            <a
              href="https://wa.me/919571425884?text=Hi%20Webio%2C%20I%20am%20interested%20in%20your%20Cheap%20Website%20with%20Free%20SEO%20India%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-base font-bold text-white transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:scale-102"
            >
              Start on WhatsApp
              <MessageCircle className="w-5 h-5 ml-2" />
            </a>
            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/20 hover:border-white/40 bg-white/5 text-base font-bold text-white transition-all duration-300 hover:bg-white/10"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Embedded FAQs */}
          <div className="border-t border-white/5 pt-12">
            <h2 className="font-display font-bold text-2xl sm:text-4xl text-white mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <FAQ />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
