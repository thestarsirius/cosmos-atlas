"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import DiscoveryCard from "@/components/DiscoveryCard";
import DidYouKnow from "@/components/DidYouKnow";

const quickLaunch = [
  { title: "Solar System", desc: "An interactive orbit view of the Sun and eight planets.", href: "/solar-system" },
  { title: "Star Map", desc: "Click through notable stars visible from Earth.", href: "/star-map" },
  { title: "Cosmic Scale", desc: "From a human being to the observable universe.", href: "/cosmic-scale" },
  { title: "Timeline", desc: "The Big Bang to the present day.", href: "/timeline" }
];

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const heroItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center justify-center px-4 sm:px-6 nebula-glow">
        <motion.div
          variants={heroContainer}
          initial="hidden"
          animate="show"
          className="text-center max-w-2xl"
        >
          <motion.p variants={heroItem} className="text-xs font-mono uppercase tracking-[0.3em] text-faint">
            An interactive atlas
          </motion.p>
          <motion.h1
            variants={heroItem}
            className="mt-5 font-display font-semibold text-5xl sm:text-7xl text-starlight text-balance"
          >
            COSMOS ATLAS
          </motion.h1>
          <motion.p variants={heroItem} className="mt-5 text-lg sm:text-xl text-mute">
            Explore the universe. One world at a time.
          </motion.p>
          <motion.div variants={heroItem} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#launch"
              className="rounded-lg bg-purple px-6 py-3 text-sm font-medium text-starlight shadow-glow hover:bg-purple-soft transition-colors"
            >
              Begin Exploration
            </a>
            <Link
              href="/explore"
              className="rounded-lg border border-white/15 px-6 py-3 text-sm text-starlight hover:border-white/30 transition-colors"
            >
              Search the atlas
            </Link>
          </motion.div>
        </motion.div>

        <a
          href="#launch"
          aria-label="Scroll to explore"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-faint hover:text-mute transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" className="animate-twinkle">
            <path d="M4 7l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </section>

      {/* Cosmic Discovery */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <DiscoveryCard />
      </section>

      {/* Quick launch */}
      <section id="launch" className="mx-auto max-w-6xl px-4 sm:px-6 py-16 scroll-mt-20">
        <h2 className="font-display text-2xl sm:text-3xl text-starlight">Start exploring</h2>
        <p className="mt-2 text-mute max-w-prose">Four ways into the atlas — pick a starting point.</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {quickLaunch.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group rounded-xl border border-white/10 bg-navy/40 p-6 hover:border-white/25 hover:bg-navy/60 transition-colors"
            >
              <h3 className="font-display text-lg text-starlight">{item.title}</h3>
              <p className="mt-2 text-sm text-mute leading-6">{item.desc}</p>
              <span className="mt-4 inline-flex text-sm text-stellar opacity-0 group-hover:opacity-100 transition-opacity">
                Open →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Explore categories teaser */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h2 className="font-display text-2xl sm:text-3xl text-starlight">Explore by category</h2>
          <Link href="/explore" className="text-sm text-stellar hover:underline">
            View all
          </Link>
        </div>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
          {["Planets", "Stars", "Galaxies", "Nebulae", "Moons", "Black Holes", "Asteroids", "Comets"].map((label) => (
            <Link
              key={label}
              href="/explore"
              className="rounded-lg border border-white/10 px-4 py-4 text-sm text-mute text-center hover:text-starlight hover:border-white/25 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </section>

      {/* Did you know */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16">
        <DidYouKnow />
      </section>
    </div>
  );
}
