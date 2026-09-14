"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { planets } from "@/data/planets";

export default function SolarSystemOrbit() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState<string | null>(null);
  const dragging = useRef(false);
  const lastPointer = useRef({ x: 0, y: 0 });

  function handlePointerDown(e: React.PointerEvent) {
    dragging.current = true;
    lastPointer.current = { x: e.clientX, y: e.clientY };
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (!dragging.current) return;
    const dx = e.clientX - lastPointer.current.x;
    const dy = e.clientY - lastPointer.current.y;
    lastPointer.current = { x: e.clientX, y: e.clientY };
    setOffset((o) => ({ x: o.x + dx, y: o.y + dy }));
  }

  function handlePointerUp() {
    dragging.current = false;
  }

  function zoomIn() {
    setScale((s) => Math.min(2, s + 0.2));
  }
  function zoomOut() {
    setScale((s) => Math.max(0.5, s - 0.2));
  }
  function reset() {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }

  return (
    <div className="relative">
      <div
        className="relative h-[520px] sm:h-[620px] w-full overflow-hidden rounded-xl border border-white/10 bg-navy/30 touch-none select-none cursor-grab active:cursor-grabbing"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          className="absolute left-1/2 top-1/2"
          style={{
            transform: `translate(-50%, -50%) translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: dragging.current ? "none" : "transform 0.15s ease-out"
          }}
        >
          {/* Sun */}
          <div
            className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              background: "radial-gradient(circle, #FFE9B0 0%, #E8A34A 60%, transparent 100%)",
              boxShadow: "0 0 60px 20px rgba(232, 163, 74, 0.4)"
            }}
            aria-hidden="true"
          />

          {planets.map((planet) => (
            <div
              key={planet.id}
              className="absolute left-1/2 top-1/2 rounded-full border border-white/5 animate-spin-slow"
              style={{
                width: planet.orbitRadiusPx * 2,
                height: planet.orbitRadiusPx * 2,
                marginLeft: -planet.orbitRadiusPx,
                marginTop: -planet.orbitRadiusPx,
                animationDuration: `${planet.orbitPeriodSec}s`
              }}
            >
              <Link
                href={`/solar-system/${planet.slug}`}
                onMouseEnter={() => setHovered(planet.id)}
                onMouseLeave={() => setHovered(null)}
                className="group absolute rounded-full"
                style={{
                  left: planet.orbitRadiusPx * 2,
                  top: "50%",
                  width: planet.relativeSize * 2,
                  height: planet.relativeSize * 2,
                  marginTop: -planet.relativeSize,
                  marginLeft: -planet.relativeSize,
                  background: planet.colorHex,
                  boxShadow: `0 0 12px ${planet.colorHex}`
                }}
                aria-label={`${planet.name} — view details`}
              >
                <span
                  className={`pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap rounded border border-white/10 bg-navy px-2 py-1 text-xs text-starlight transition-opacity ${
                    hovered === planet.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {planet.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-faint">
        <p>Drag to pan · click a planet to explore it</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={zoomOut}
            className="h-8 w-8 rounded border border-white/10 text-starlight hover:border-white/30"
            aria-label="Zoom out"
          >
            −
          </button>
          <button
            type="button"
            onClick={reset}
            className="h-8 px-3 rounded border border-white/10 text-starlight hover:border-white/30"
          >
            Reset
          </button>
          <button
            type="button"
            onClick={zoomIn}
            className="h-8 w-8 rounded border border-white/10 text-starlight hover:border-white/30"
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
