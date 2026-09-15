"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Stat } from "@/data/types";
import { Lang } from "@/data/i18n";

function parseNumeric(value: string): number | null {
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^-?\d+(\.\d+)?/);
  if (!match) return null;
  if (cleaned !== match[0]) return null;
  return parseFloat(match[0]);
}

export default function AnimatedStat({ stat, lang, index = 0 }: { stat: Stat; lang: Lang; index?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const target = parseNumeric(stat.value);
  const [display, setDisplay] = useState(target !== null ? "0" : stat.value);

  useEffect(() => {
    if (!inView || target === null) return;
    const duration = 900;
    const start = performance.now();
    const isInt = Number.isInteger(target);

    function tick(now: number) {
      const progress = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target! * eased;
      setDisplay(isInt ? Math.round(current).toLocaleString() : current.toFixed(1));
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="rounded-lg border border-white/10 bg-navy/40 p-4"
    >
      <p className="text-xs text-faint">{stat.label[lang]}</p>
      <p className="mt-1 font-display text-xl text-starlight">
        {display} <span className="text-sm font-body text-mute">{stat.unit[lang]}</span>
      </p>
      {stat.approximate && <p className="mt-1 text-xs text-faint">{lang === "ar" ? "تقريبي" : "approximate"}</p>}
    </motion.div>
  );
}
