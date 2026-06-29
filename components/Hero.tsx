"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight, MessageCircle } from "lucide-react";
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
    camera.position.z = 25;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Particle nodes configuration
    const particleCount = 90;
    const maxDistance = 6.5;
    const maxConnections = 600;
    const particlesData: { pos: THREE.Vector3; vel: THREE.Vector3 }[] = [];

    const pointsGeometry = new THREE.BufferGeometry();
    const pointsPositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      // Bounded distribution inside canvas viewport
      const x = (Math.random() - 0.5) * 45;
      const y = (Math.random() - 0.5) * 30;
      const z = (Math.random() - 0.5) * 15;

      pointsPositions[i * 3] = x;
      pointsPositions[i * 3 + 1] = y;
      pointsPositions[i * 3 + 2] = z;

      particlesData.push({
        pos: new THREE.Vector3(x, y, z),
        vel: new THREE.Vector3(
          (Math.random() - 0.5) * 0.025,
          (Math.random() - 0.5) * 0.025,
          (Math.random() - 0.5) * 0.015
        ),
      });
    }

    pointsGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pointsPositions, 3)
    );

    // Node texture (soft glow circle)
    const canvasTexture = document.createElement("canvas");
    canvasTexture.width = 16;
    canvasTexture.height = 16;
    const ctx = canvasTexture.getContext("2d");
    if (ctx) {
      const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      gradient.addColorStop(0, "rgba(255,255,255,1)");
      gradient.addColorStop(0.4, "rgba(6,182,212,0.8)"); // Cyan center
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvasTexture);

    const pointsMaterial = new THREE.PointsMaterial({
      size: 0.65,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      color: 0x06b6d4, // Theme cyan
    });

    const pointCloud = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(pointCloud);

    // Interconnecting Lines Setup
    const lineGeometry = new THREE.BufferGeometry();
    const linePositions = new Float32Array(maxConnections * 2 * 3);
    const lineColors = new Float32Array(maxConnections * 2 * 3);

    lineGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );
    lineGeometry.setAttribute(
      "color",
      new THREE.BufferAttribute(lineColors, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.28,
      blending: THREE.AdditiveBlending,
    });

    const linesMesh = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(linesMesh);

    // Cursor attraction target in 3D
    const mouse = new THREE.Vector3(999, 999, 0);

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const y = -((event.clientY - rect.top) / container.clientHeight) * 2 + 1;
      
      // Scale projection to match viewport coordinate system
      mouse.set(x * 24, y * 16, 0);
    };

    const handleMouseLeave = () => {
      mouse.set(999, 999, 0);
    };

    container.parentElement?.addEventListener("mousemove", handleMouseMove);
    container.parentElement?.addEventListener("mouseleave", handleMouseLeave);

    // Animation loop
    let animationFrameId: number;

    const animate = () => {
      let vertexIdx = 0;
      let colorIdx = 0;
      let lineCount = 0;

      const pointsPosAttr = pointsGeometry.attributes.position as THREE.BufferAttribute;
      const pointsArray = pointsPosAttr.array as Float32Array;

      // Update node positions
      for (let i = 0; i < particleCount; i++) {
        const p = particlesData[i];
        
        // Ambient movement
        p.pos.add(p.vel);

        // Boundary constraints
        if (p.pos.x < -24 || p.pos.x > 24) p.vel.x *= -1;
        if (p.pos.y < -18 || p.pos.y > 18) p.vel.y *= -1;
        if (p.pos.z < -12 || p.pos.z > 12) p.vel.z *= -1;

        // Magnet attraction to cursor hover
        if (mouse.x !== 999) {
          const distToMouse = p.pos.distanceTo(mouse);
          if (distToMouse < 10) {
            const pullStrength = (1.0 - distToMouse / 10) * 0.015;
            const pull = new THREE.Vector3().subVectors(mouse, p.pos).multiplyScalar(pullStrength);
            p.pos.add(pull);
          }
        }

        pointsArray[i * 3] = p.pos.x;
        pointsArray[i * 3 + 1] = p.pos.y;
        pointsArray[i * 3 + 2] = p.pos.z;
      }
      pointsPosAttr.needsUpdate = true;

      // Draw interconnecting web mesh lines
      const linePosAttr = lineGeometry.attributes.position as THREE.BufferAttribute;
      const linePosArray = linePosAttr.array as Float32Array;
      const lineColAttr = lineGeometry.attributes.color as THREE.BufferAttribute;
      const lineColArray = lineColAttr.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const p1 = particlesData[i];

        // Draw dynamic connection to the mouse pointer
        if (mouse.x !== 999) {
          const distToMouse = p1.pos.distanceTo(mouse);
          if (distToMouse < maxDistance && lineCount < maxConnections) {
            const alpha = 1.0 - distToMouse / maxDistance;

            linePosArray[vertexIdx++] = p1.pos.x;
            linePosArray[vertexIdx++] = p1.pos.y;
            linePosArray[vertexIdx++] = p1.pos.z;

            linePosArray[vertexIdx++] = mouse.x;
            linePosArray[vertexIdx++] = mouse.y;
            linePosArray[vertexIdx++] = mouse.z;

            // Indigo to Cyan color gradient connection
            lineColArray[colorIdx++] = 0.42 * alpha; // R
            lineColArray[colorIdx++] = 0.38 * alpha; // G
            lineColArray[colorIdx++] = 1.0 * alpha;  // B

            lineColArray[colorIdx++] = 0.02 * alpha; // R
            lineColArray[colorIdx++] = 0.71 * alpha; // G
            lineColArray[colorIdx++] = 0.83 * alpha; // B

            lineCount++;
          }
        }

        // Draw connections between nodes
        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particlesData[j];
          const dist = p1.pos.distanceTo(p2.pos);

          if (dist < maxDistance && lineCount < maxConnections) {
            const alpha = 1.0 - dist / maxDistance;

            linePosArray[vertexIdx++] = p1.pos.x;
            linePosArray[vertexIdx++] = p1.pos.y;
            linePosArray[vertexIdx++] = p1.pos.z;

            linePosArray[vertexIdx++] = p2.pos.x;
            linePosArray[vertexIdx++] = p2.pos.y;
            linePosArray[vertexIdx++] = p2.pos.z;

            // Gradient line coloration based on nodes
            const r = 0.22 * alpha;
            const g = 0.51 * alpha;
            const b = 0.90 * alpha;

            lineColArray[colorIdx++] = r;
            lineColArray[colorIdx++] = g;
            lineColArray[colorIdx++] = b;

            lineColArray[colorIdx++] = r;
            lineColArray[colorIdx++] = g;
            lineColArray[colorIdx++] = b;

            lineCount++;
          }
        }
      }

      lineGeometry.setDrawRange(0, lineCount * 2);
      linePosAttr.needsUpdate = true;
      lineColAttr.needsUpdate = true;

      // Slow ambient drift
      pointCloud.rotation.y += 0.0006;
      pointCloud.rotation.x += 0.0003;
      linesMesh.rotation.y += 0.0006;
      linesMesh.rotation.x += 0.0003;

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
      container.parentElement?.removeEventListener("mousemove", handleMouseMove);
      container.parentElement?.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      pointsGeometry.dispose();
      pointsMaterial.dispose();
      texture.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex flex-col justify-center items-center overflow-hidden bg-altrix-dark pt-44 pb-16 md:pt-36 md:pb-0"
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
            className="mb-6 font-display font-extrabold text-3xl sm:text-5xl md:text-7xl tracking-tight leading-[1.05] text-white"
          >
            Premium Website at ₹9,990 — <br />
            <span className="text-gradient-cyan">Free SEO Included. <br className="hidden sm:inline" /> Built for Indian Businesses.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp}
            className="mb-10 text-base sm:text-lg text-white/55 max-w-[560px] leading-relaxed"
          >
            From business websites to custom web applications — Webio creates fast,
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
            
            <a
              href="https://wa.me/919351864351?text=Hi%20Webio%2C%20I%20visited%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services%20and%20offers%21"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-emerald-500/30 hover:border-emerald-500/50 bg-emerald-500/10 hover:bg-emerald-500/20 text-base font-semibold text-white transition-all duration-300 group"
            >
              Chat on WhatsApp
              <MessageCircle className="w-4 h-4 ml-2 text-emerald-400 transition-transform duration-300 group-hover:scale-110" />
            </a>

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
