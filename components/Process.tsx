"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Compass, Cpu, CheckCircle2, Rocket, Plus, Minus } from "lucide-react";
interface ProcessStage {
  id: string;
  num: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
}

const stages: ProcessStage[] = [
  {
    id: "discovery",
    num: "01",
    title: "Discovery & Strategy",
    description: "We learn your business, goals, and competition",
    icon: Search,
    details: [
      "Deep dive stakeholder interviews",
      "Competitive auditing and analysis",
      "Information architecture mapping",
      "Technical scoping & roadmap planning",
    ],
  },
  {
    id: "design",
    num: "02",
    title: "UI/UX Design",
    description: "Wireframes and high-fidelity mockups in Figma",
    icon: Compass,
    details: [
      "User persona & journey definition",
      "Low-fidelity wireframing layouts",
      "Interactive Figma high-fidelity prototypes",
      "Design systems & typography definition",
    ],
  },
  {
    id: "development",
    num: "03",
    title: "Development",
    description: "Clean, fast, production-grade code",
    icon: Cpu,
    details: [
      "Next.js App Router workspace scaffolding",
      "Tailwind CSS responsive design layout",
      "WebGL & Framer Motion animation logic",
      "API, CMS, or DB backend integration",
    ],
  },
  {
    id: "testing",
    num: "04",
    title: "Testing & Optimization",
    description: "Cross-device QA, performance audits, bug fixes",
    icon: CheckCircle2,
    details: [
      "Rigorous cross-browser testing",
      "Lighthouse performance speed audits",
      "Screen-reader accessibility review",
      "Production deployment environment sync",
    ],
  },
  {
    id: "launch",
    num: "05",
    title: "Launch & Support",
    description: "Deploy, monitor, and iterate together",
    icon: Rocket,
    details: [
      "DNS configuration & SSL setup",
      "Analytics & tracking configuration",
      "24/7 post-launch error monitoring",
      "Iterative feature development",
    ],
  },
];

export default function Process() {
  const [activeStage, setActiveStage] = useState(0);
  const [expandedMobile, setExpandedMobile] = useState<number | null>(0);

  const activeStagePercent = (activeStage / (stages.length - 1)) * 100;

  const toggleMobileAccordion = (index: number) => {
    setExpandedMobile(expandedMobile === index ? null : index);
  };

  return (
    <section id="process" className="relative py-16 sm:py-24 overflow-hidden z-10">
      {/* Background glow */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-altrix-indigo/5 blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4 text-white">
              How We Turn <br className="sm:hidden" />
              <span className="text-gradient">Ideas Into Products.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              Our structured process ensures transparency, speed, and pixel-perfect results
              at every milestone of the development cycle.
            </p>
          </motion.div>
        </div>

        {/* Desktop Interactive Timeline */}
        <div className="hidden lg:block relative max-w-5xl mx-auto">
          {/* Progress Connector Line */}
          <div className="absolute top-[28px] left-[5%] right-[5%] h-0.5 bg-white/10 z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-altrix-indigo via-altrix-violet to-altrix-cyan"
              style={{ width: `${activeStagePercent}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          {/* Timeline Nodes */}
          <div className="flex justify-between items-center relative z-10 mb-16">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isActive = index <= activeStage;
              const isCurrent = index === activeStage;

              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(index)}
                  className="flex flex-col items-center focus:outline-none group"
                  aria-label={`Go to Stage ${stage.num}: ${stage.title}`}
                >
                  <div
                    className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                      isCurrent
                        ? "bg-altrix-dark border-altrix-indigo shadow-[0_0_20px_rgba(108,99,255,0.4)] text-altrix-indigo"
                        : isActive
                        ? "bg-altrix-indigo border-altrix-indigo text-white"
                        : "bg-altrix-dark border-white/10 text-white/40 group-hover:border-white/30"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span
                    className={`mt-4 font-display font-bold text-sm tracking-widest ${
                      isCurrent
                        ? "text-altrix-indigo"
                        : isActive
                        ? "text-white/80"
                        : "text-white/40"
                    }`}
                  >
                    {stage.num}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Content Display Box */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-12 gap-8 p-10 rounded-2xl glass-card border border-altrix-indigo/20 shadow-[0_0_50px_rgba(108,99,255,0.05)]"
              >
                <div className="col-span-5 flex flex-col justify-center">
                  <span className="font-display font-extrabold text-7xl text-altrix-indigo/20 mb-2">
                    {stages[activeStage].num}
                  </span>
                  <h3 className="font-display font-bold text-2xl text-white mb-3">
                    {stages[activeStage].title}
                  </h3>
                  <p className="text-white/60 leading-relaxed">
                    {stages[activeStage].description}
                  </p>
                </div>
                <div className="col-span-7 flex flex-col justify-center border-l border-white/5 pl-8">
                  <h4 className="font-sans font-bold text-xs uppercase tracking-widest text-altrix-cyan mb-4">
                    Key Deliverables:
                  </h4>
                  <ul className="grid grid-cols-2 gap-4">
                    {stages[activeStage].details.map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-altrix-violet mr-2.5 mt-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile Accordion */}
        <div className="lg:hidden flex flex-col space-y-4 max-w-xl mx-auto">
          {stages.map((stage, index) => {
            const Icon = stage.icon;
            const isExpanded = expandedMobile === index;

            return (
              <div
                key={stage.id}
                className={`rounded-2xl border transition-all duration-300 ${
                  isExpanded ? "glass-card border-altrix-indigo/30" : "glass-card border-white/5"
                }`}
              >
                <button
                  onClick={() => toggleMobileAccordion(index)}
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center space-x-4 text-left">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border ${
                        isExpanded ? "bg-altrix-indigo/10 border-altrix-indigo text-altrix-indigo" : "bg-white/[0.02] border-white/10 text-white/50"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="font-display text-[10px] tracking-wider text-altrix-cyan font-bold block">
                        STAGE {stage.num}
                      </span>
                      <span className="font-display font-bold text-lg text-white">
                        {stage.title}
                      </span>
                    </div>
                  </div>
                  <div>
                    {isExpanded ? (
                      <Minus className="w-5 h-5 text-altrix-indigo" />
                    ) : (
                      <Plus className="w-5 h-5 text-white/30" />
                    )}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 flex flex-col space-y-4">
                        <p className="text-sm text-white/60">
                          {stage.description}
                        </p>
                        <div className="space-y-2">
                          {stage.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center text-xs text-white/80">
                              <span className="w-1 h-1 rounded-full bg-altrix-cyan mr-2" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
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
