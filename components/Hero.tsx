"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import * as THREE from "three";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Three.js Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particles
    const particleCount = 2000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      // Create a sphere or box distribution
      const r = 35 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i] = r * Math.sin(phi) * Math.cos(theta);
      positions[i + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i + 2] = r * Math.cos(phi) - 10;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Particle texture
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvasTexture);

    const material = new THREE.PointsMaterial({
      size: 0.25,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x6c63ff,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse interaction variables
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetMouseX = (event.clientX - window.innerWidth / 2) / 100;
      targetMouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Slow drift & mouse response
      particles.rotation.y = elapsedTime * 0.02 + mouseX * 0.05;
      particles.rotation.x = elapsedTime * 0.01 + mouseY * 0.05;

      // Wave-like motion on particles
      const posAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = posAttr.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const x = posArray[i3];
        // Apply slight offset based on sine wave
        posArray[i3 + 2] += Math.sin(elapsedTime + x * 0.1) * 0.005;
      }
      posAttr.needsUpdate = true;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize handler
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      geometry.dispose();
      material.dispose();
      texture.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center justify-center overflow-hidden bg-altrix-dark pt-32 md:pt-36"
    >
      {/* 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 w-full h-full pointer-events-none"
      />

      {/* Ambient Radial Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Large center indigo gradient bloom */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] rounded-full bg-gradient-radial from-altrix-indigo/15 via-altrix-violet/5 to-transparent blur-[120px]" />
        
        {/* Ambient revolving details */}
        <div className="absolute -top-[10%] -left-[10%] w-[45vw] h-[45vw] rounded-full bg-altrix-indigo/8 blur-[150px] animate-pulse-slow" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[45vw] h-[45vw] rounded-full bg-altrix-cyan/6 blur-[150px] animate-pulse-slow" style={{ animationDelay: "-5s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 flex flex-col items-center text-center">
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="initial"
          animate="animate"
          className="flex flex-col items-center"
        >
          {/* Eyebrow Label */}
          <motion.div
            variants={fadeInUp}
            className="mb-8 inline-flex items-center px-4 py-1.5 rounded-full border border-altrix-indigo/35 bg-altrix-indigo/5 text-altrix-indigo font-display text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] shadow-[0_0_15px_rgba(108,99,255,0.15)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-altrix-indigo mr-2 animate-ping" />
            ✦ Premium Web Development Agency
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="mb-6 font-display font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tight leading-[1.05] text-white"
          >
            We Build Websites <br />
            <span className="text-gradient-cyan">That Turn Visitors <br className="hidden sm:inline" /> Into Customers.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="mb-10 text-base sm:text-lg text-white/55 max-w-[560px] leading-relaxed"
          >
            From business websites to custom web applications — Altrix creates fast,
            beautiful, and scalable digital experiences that help brands grow online.
          </motion.p>

          {/* CTA Row */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <Link
              href="#pricing"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-altrix-indigo text-base font-semibold text-white transition-all duration-300 hover:scale-102 hover:shadow-[0_0_25px_rgba(108,99,255,0.4)] relative overflow-hidden group"
            >
              <span className="relative z-10">View Offers & Pricing</span>
              <span className="absolute inset-0 bg-gradient-to-r from-altrix-indigo to-altrix-violet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
            
            <Link
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-white/20 hover:border-white/40 bg-white/0 hover:bg-white/5 text-base font-semibold text-white transition-all duration-300 group"
            >
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 cursor-pointer hidden sm:flex flex-col items-center"
      >
        <Link href="#marquee" aria-label="Scroll down">
          <ChevronDown className="w-6 h-6 text-white/40 hover:text-white transition-colors" />
        </Link>
      </motion.div>
    </section>
  );
}
