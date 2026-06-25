"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function WhatsAppChat() {
  const [showTooltip, setShowTooltip] = useState(false);
  const phoneNumber = "918000000000"; // Default contact phone number from the footer
  const message = "Hi Altrix, I am interested in building a website / integrating AI automation and would like to know more about the offers.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Show the tooltip after 3 seconds for engagement
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Tooltip Chat Bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 mr-1 max-w-[280px] rounded-2xl bg-altrix-dark border border-white/10 p-4 shadow-2xl relative"
          >
            {/* Ambient indicator */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-2xl pointer-events-none" />
            
            {/* Close button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowTooltip(false);
              }}
              className="absolute top-2.5 right-2.5 text-white/40 hover:text-white transition-colors"
              aria-label="Close tooltip"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-shrink-0 mt-0.5 animate-pulse">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              </div>
              <div className="flex-1">
                <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 block mb-0.5">
                  AI & Web Assistant
                </span>
                <p className="text-xs text-white/80 leading-relaxed font-sans">
                  Hey! Ready to scale your business? Let&apos;s chat on WhatsApp for a custom quote! 🚀
                </p>
              </div>
            </div>

            {/* Little pointer triangle */}
            <div className="absolute -bottom-1.5 right-5 w-3 h-3 bg-altrix-dark border-r border-b border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* WhatsApp Button */}
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transition-all duration-300 group overflow-hidden"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        {/* Pulsating Ring */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-ping pointer-events-none" />

        {/* Gloss overlay */}
        <span className="absolute inset-0 bg-gradient-to-tr from-emerald-600 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* WhatsApp SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          className="w-7 h-7 fill-current relative z-10 transition-transform duration-300 group-hover:rotate-12"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.968C16.63 1.97 14.156.945 11.536.945c-5.445 0-9.87 4.373-9.874 9.8.001 2.02.535 3.993 1.55 5.75L2.186 20.3l4.461-1.146zm11.441-4.721c-.3-.149-1.774-.874-2.047-.973-.272-.1-.471-.149-.669.149-.198.3-.769.972-.942 1.171-.173.199-.347.225-.647.075-.3-.15-1.267-.467-2.414-1.489-.893-.795-1.496-1.777-1.671-2.075-.174-.299-.018-.461.13-.61.135-.133.3-.349.45-.523.149-.174.198-.299.298-.497.099-.198.05-.373-.025-.522-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.774-.724 2.022-1.423.247-.699.247-1.299.173-1.424-.074-.124-.272-.198-.57-.347z" />
        </svg>
      </motion.a>
    </div>
  );
}
