"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ScaleStep {
  label: string;
  size: string;
  description: string;
  visualScale: number; // relative circle size, 0–1
}

const steps: ScaleStep[] = [
  { label: "Human", size: "≈ 1.7 m", description: "You, standing on the surface of a small rocky planet.", visualScale: 0.06 },
  { label: "Earth", size: "≈ 12,742 km across", description: "Our home planet — big enough to hold oceans and continents, tiny against everything ahead.", visualScale: 0.18 },
  { label: "Jupiter", size: "≈ 139,820 km across", description: "The largest planet — over 11 times Earth's diameter.", visualScale: 0.3 },
  { label: "The Sun", size: "≈ 1.39 million km across", description: "About 109 Earths could fit across the Sun's diameter.", visualScale: 0.45 },
  { label: "The Solar System", size: "≈ 9 billion km wide (to Neptune)", description: "The Sun and everything gravitationally bound to it.", visualScale: 0.6 },
  { label: "Nearby Stars", size: "light-years apart", description: "The distances between even 'close' stars dwarf the entire solar system.", visualScale: 0.7 },
  { label: "The Milky Way", size: "≈ 100,000 light-years across", description: "Our home galaxy, home to hundreds of billions of stars.", visualScale: 0.8 },
  { label: "Galaxy Clusters", size: "millions of light-years across", description: "Galaxies themselves gather into vast, gravitationally bound clusters.", visualScale: 0.9 },
  { label: "The Observable Universe", size: "≈ 93 billion light-years across", description: "The farthest we can possibly see — the edge of what light has had time to reach us from.", visualScale: 1 }
];

export default function CosmicScale() {
  const [index, setIndex] = useState(0);
  const step = steps[index]!;

  return (
    <div>
      <div className="relative h-72 sm:h-96 rounded-xl border border-white/10 bg-navy/30 flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={step.label}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 1.2, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="rounded-full"
            style={{
              width: `${8 + step.visualScale * 70}%`,
              height: `${8 + step.visualScale * 70}%`,
              background: "radial-gradient(circle, rgba(139,114,232,0.5), rgba(111,168,255,0.15) 60%, transparent 80%)",
              border: "1px solid rgba(255,255,255,0.15)"
            }}
          />
        </AnimatePresence>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center px-4">
          <p className="font-display text-xl text-starlight">{step.label}</p>
          <p className="text-sm text-mute mt-1">{step.size}</p>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={steps.length - 1}
        value={index}
        onChange={(e) => setIndex(Number(e.target.value))}
        className="mt-6 w-full accent-purple"
        aria-label="Cosmic scale slider"
      />
      <div className="mt-1 flex justify-between text-xs text-faint">
        <span>Human</span>
        <span>Observable Universe</span>
      </div>

      <p className="mt-6 text-mute leading-7 max-w-prose">{step.description}</p>
    </div>
  );
}
