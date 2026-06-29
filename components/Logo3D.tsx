"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function Logo3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Get exact dimensions of container
    const width = container.clientWidth || 48;
    const height = container.clientHeight || 48;

    // Three.js Scene Setup
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 2.0);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x06b6d4, 1.5); // Cyan highlights
    dirLight2.position.set(-5, -5, 2);
    scene.add(dirLight2);

    let model: THREE.Group | null = null;
    let animationFrameId: number;

    // Load GLB Model
    const loader = new GLTFLoader();
    loader.load(
      "/logo-model.glb",
      (gltf) => {
        model = gltf.scene;

        // Auto center and scale model to fit canvas
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());

        // Center model geometry
        model.position.x += model.position.x - center.x;
        model.position.y += model.position.y - center.y;
        model.position.z += model.position.z - center.z;

        // Scale model appropriately to fit viewport
        const maxDim = Math.max(size.x, size.y, size.z);
        const scaleFactor = 3.2 / maxDim; // Fit inside ~3.2 unit sphere
        model.scale.set(scaleFactor, scaleFactor, scaleFactor);

        // Tilt model slightly for better 3D preview angle
        model.rotation.x = 0.25;

        scene.add(model);
        setLoading(false);
      },
      undefined,
      (error) => {
        console.error("Error loading 3D GLB model:", error);
        setLoading(false);
      }
    );

    // Animation Loop
    const animate = () => {
      if (model) {
        // Continuous rotation around Y axis
        model.rotation.y += 0.012;
      }

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Clean up
    return () => {
      cancelAnimationFrame(animationFrameId);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0"
    >
      <canvas ref={canvasRef} className="w-full h-full object-contain" />
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 rounded-full border border-emerald-500/30 border-t-emerald-400 animate-spin" />
        </div>
      )}
    </div>
  );
}
