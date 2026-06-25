"use client";

import React, { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface StatItem {
  number: string;
  label: string;
  sublabel: string;
}

const stats: StatItem[] = [
  {
    number: "100%",
    label: "Responsive Design",
    sublabel: "Every device, every screen",
  },
  {
    number: "30+",
    label: "Projects Delivered",
    sublabel: "Across India and globally",
  },
  {
    number: "3×",
    label: "Faster Than Average",
    sublabel: "Optimized build process",
  },
  {
    number: "99%",
    label: "Client Satisfaction",
    sublabel: "We don't stop until it's right",
  },
  {
    number: "< 2s",
    label: "Load Time Target",
    sublabel: "Speed is a feature",
  },
  {
    number: "24/7",
    label: "Project Support",
    sublabel: "From kickoff to launch and beyond",
  },
];

function StatCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const count = useMotionValue(0);

  // Clean parsing of stats
  const isSpecial247 = value === "24/7";
  const isLessThan = value.startsWith("<");
  const numberPart = parseInt(value.replace(/[^0-9]/g, "")) || 0;
  const suffix = value.replace(/[0-9<]/g, "");

  const displayValue = useTransform(count, (latest) => {
    const rounded = Math.round(latest);
    if (isSpecial247) {
      return `${rounded}/7`;
    }
    if (isLessThan) {
      return `< ${rounded}${suffix}`;
    }
    return `${rounded}${suffix}`;
  });

  useEffect(() => {
    if (inView) {
      const target = isSpecial247 ? 24 : numberPart;
      const controls = animate(count, target, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, numberPart, count, isSpecial247]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function WhyAltrix() {
  return (
    <section className="relative py-16 sm:py-24 overflow-hidden z-10 bg-altrix-dark/20 border-y border-white/[0.02]">
      {/* Background Ambient glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[30%] left-[5%] w-[400px] h-[400px] rounded-full bg-altrix-indigo/5 blur-[120px]" />
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
              Built Different. <br />
              <span className="text-gradient-cyan">Proven Results.</span>
            </h2>
            <p className="text-base sm:text-lg text-white/55 leading-relaxed">
              We design and construct digital products that don&apos;t just look stunning,
              but run at lightning speed and drive real business outcomes.
            </p>
          </motion.div>
        </div>

        {/* Stats Grid 3x2 */}
        <motion.div
          variants={staggerContainer(0.1, 0)}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="p-8 rounded-2xl glass-card flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
            >
              <div>
                <div className="font-display font-extrabold text-5xl sm:text-6xl tracking-tight mb-6 bg-gradient-to-r from-white via-white to-altrix-indigo/80 bg-clip-text text-transparent">
                  <StatCounter value={stat.number} />
                </div>
                <h3 className="font-sans font-semibold text-lg text-white mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-sm text-white/45 leading-relaxed">
                {stat.sublabel}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
