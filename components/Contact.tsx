"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, MapPin, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    projectType: "Business Website",
    budget: "₹10k–₹20k",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const text = `Hi Webio, I would like to start a project.

*Details:*
- *Name:* ${formData.name}
- *Business:* ${formData.business || "N/A"}
- *Email:* ${formData.email}
- *Phone:* ${formData.phone || "N/A"}
- *Project Type:* ${formData.projectType}
- *Budget:* ${formData.budget}
- *Message:* ${formData.message}`;

    const whatsappUrl = `https://wa.me/919571425884?text=${encodeURIComponent(text)}`;

    // Simulate API delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      window.open(whatsappUrl, "_blank");
      setFormData({
        name: "",
        business: "",
        email: "",
        phone: "",
        projectType: "Business Website",
        budget: "₹10k–₹20k",
        message: "",
      });
    }, 1500);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="relative py-12 sm:py-16 overflow-hidden z-10">
      {/* Background ambient light */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-[0%] left-[5%] w-[450px] h-[450px] rounded-full bg-altrix-cyan/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-20 text-center md:text-left max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              Let&apos;s Build Something <br />
              <span className="text-gradient">Amazing Together.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Tell us about your project — we&apos;ll review and get back to you with a roadmap within 24 hours.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-8 sm:p-10 glass-card border border-white/5 relative">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="name" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      {/* Business Name */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="business" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Business Name
                        </label>
                        <input
                          type="text"
                          id="business"
                          name="business"
                          value={formData.business}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm"
                          placeholder="Acme Corp"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="email" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm"
                          placeholder="hello@example.com"
                        />
                      </div>
                      {/* Phone */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="phone" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="projectType" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm bg-altrix-dark"
                        >
                          <option value="Business Website">Business Website</option>
                          <option value="Portfolio">Portfolio</option>
                          <option value="Web App">Web App</option>
                          <option value="Landing Page">Landing Page</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      {/* Budget Range */}
                      <div className="flex flex-col space-y-2">
                        <label htmlFor="budget" className="text-xs font-mono uppercase tracking-widest text-white/40">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="px-4 py-3 rounded-xl glass-input text-white text-sm bg-altrix-dark"
                        >
                          <option value="Under ₹10k">Under ₹10k</option>
                          <option value="₹10k–₹20k">₹10k–₹20k</option>
                          <option value="₹20k+">₹20k+</option>
                          <option value="Let's discuss">Let&apos;s discuss</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="flex flex-col space-y-2">
                      <label htmlFor="message" className="text-xs font-mono uppercase tracking-widest text-white/40">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="px-4 py-3 rounded-xl glass-input text-white text-sm resize-none"
                        placeholder="Briefly describe your goals, required pages, or references..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-altrix-indigo hover:bg-altrix-indigo/90 disabled:bg-altrix-indigo/60 text-white font-bold text-sm shadow-[0_0_20px_rgba(108,99,255,0.3)] transition-all hover:scale-101 focus:outline-none"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-16 px-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-altrix-cyan/10 border border-altrix-cyan/20 flex items-center justify-center text-altrix-cyan mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-display font-bold text-2xl text-white mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-white/60 text-sm max-w-sm leading-relaxed mb-8">
                      Thank you! We&apos;ve successfully received your details. Our team will get in touch with you within 24 hours.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-full border border-white/10 text-xs font-semibold text-white/70 hover:text-white hover:border-white/30 transition-all"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Details Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            {/* WhatsApp CTA Card */}
            <a
              href="https://wa.me/919571425884" // Contact phone number
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 hover:border-green-500/40 hover:bg-green-500/15 transition-all duration-300 group flex items-start space-x-5"
            >
              <div className="w-12 h-12 rounded-2xl bg-green-500/10 flex items-center justify-center text-green-400 group-hover:bg-green-500/20 group-hover:scale-105 transition-all">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-green-400 uppercase font-bold block mb-1">
                  IMMEDIATE RESPONSE
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-1 group-hover:text-green-300 transition-colors">
                  Chat on WhatsApp
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  Start a direct chat. Ideal for quick questions and instant consulting.
                </p>
              </div>
            </a>


            {/* Location Card */}
            <div className="p-6 rounded-3xl glass-card border-white/5 flex items-start space-x-5">
              <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center text-white/40">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono text-[10px] tracking-wider text-white/40 uppercase font-bold block mb-1">
                  AGENCY HQ
                </span>
                <h3 className="font-display font-bold text-lg text-white mb-1">
                  Jaipur, India
                </h3>
                <p className="text-white/50 text-xs leading-relaxed">
                  Serving local businesses across Rajasthan and global clients worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
