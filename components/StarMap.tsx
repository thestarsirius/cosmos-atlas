"use client";

import { useState } from "react";
import Link from "next/link";
import { stars } from "@/data/stars";
import { hrefFor } from "./ObjectCard";

export default function StarMap() {
  const [selectedId, setSelectedId] = useState<string | null>(stars[0]?.id ?? null);
  const selected = stars.find((s) => s.id === selectedId) ?? null;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      <div className="relative h-[420px] sm:h-[520px] rounded-xl border border-white/10 bg-navy/30 overflow-hidden">
        {/* faint decorative background stars, non-interactive */}
        <div className="absolute inset-0" aria-hidden="true">
          {Array.from({ length: 60 }).map((_, i) => (
            <span
              key={i}
              className="absolute rounded-full bg-white/30 animate-twinkle"
              style={{
                left: `${(i * 37) % 100}%`,
                top: `${(i * 53) % 100}%`,
                width: 2,
                height: 2,
                animationDelay: `${(i % 10) * 0.3}s`
              }}
            />
          ))}
        </div>

        {stars.map((star) => (
          <button
            key={star.id}
            type="button"
            onClick={() => setSelectedId(star.id)}
            className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform hover:scale-125 focus-visible:scale-125"
            style={{
              left: `${star.mapX ?? 50}%`,
              top: `${star.mapY ?? 50}%`,
              width: selectedId === star.id ? 14 : 10,
              height: selectedId === star.id ? 14 : 10,
              background: star.colorHex,
              boxShadow: `0 0 ${selectedId === star.id ? 24 : 14}px ${star.colorHex}`
            }}
            aria-label={`${star.name} — show details`}
            aria-pressed={selectedId === star.id}
          />
        ))}
      </div>

      <div className="rounded-xl border border-white/10 bg-navy/50 p-5 h-fit">
        {selected ? (
          <div>
            <span
              className="inline-block h-3 w-3 rounded-full mb-3"
              style={{ background: selected.colorHex, boxShadow: `0 0 14px ${selected.colorHex}` }}
              aria-hidden="true"
            />
            <h2 className="font-display text-xl text-starlight">{selected.name}</h2>
            <p className="mt-1 text-sm text-mute">{selected.tagline}</p>
            <dl className="mt-4 space-y-2">
              {selected.stats.map((s) => (
                <div key={s.label} className="flex justify-between text-sm">
                  <dt className="text-faint">{s.label}</dt>
                  <dd className="text-starlight">
                    {s.value} {s.unit}
                  </dd>
                </div>
              ))}
            </dl>
            <Link href={hrefFor(selected)} className="mt-5 inline-flex text-sm text-stellar hover:underline">
              Full details →
            </Link>
          </div>
        ) : (
          <p className="text-mute text-sm">Select a star to see details.</p>
        )}
      </div>
    </div>
  );
}
