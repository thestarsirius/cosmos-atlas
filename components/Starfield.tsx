"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
  layer: 1 | 2 | 3; // 1 = far/small, 3 = near/large — drives parallax strength
}

// A dependency-free canvas starfield: three parallax layers, gentle twinkle,
// and an occasional shooting star. No Three.js — this is cheap enough to
// run continuously without taxing low-end phones, and prefers-reduced-motion
// is respected by freezing the animation on a single static frame.
export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let shootingStar: { x: number; y: number; vx: number; vy: number; life: number } | null = null;
    let rafId = 0;
    let running = true;

    function resize() {
      const canvasEl = canvasRef.current;
      if (!canvasEl) return;
      width = window.innerWidth;
      height = window.innerHeight;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvasEl.width = width * dpr;
      canvasEl.height = height * dpr;
      canvasEl.style.width = `${width}px`;
      canvasEl.style.height = `${height}px`;
      ctx?.scale(dpr, dpr);

      const density = width < 640 ? 0.06 : 0.09;
      const count = Math.floor(width * density);
      stars = Array.from({ length: count }, () => {
        const layer = (Math.floor(Math.random() * 3) + 1) as 1 | 2 | 3;
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          radius: layer === 3 ? 1.6 + Math.random() * 1.2 : layer === 2 ? 1 + Math.random() * 0.8 : 0.5 + Math.random() * 0.6,
          baseAlpha: 0.3 + Math.random() * 0.7,
          twinkleSpeed: 0.4 + Math.random() * 1.2,
          twinklePhase: Math.random() * Math.PI * 2,
          layer
        };
      });
    }

    function maybeSpawnShootingStar() {
      if (shootingStar || Math.random() > 0.0025) return;
      const startX = Math.random() * width * 0.6;
      shootingStar = {
        x: startX,
        y: Math.random() * height * 0.3,
        vx: 6 + Math.random() * 4,
        vy: 3 + Math.random() * 2,
        life: 1
      };
    }

    function draw(time: number) {
      if (!ctx || !running) return;
      ctx.clearRect(0, 0, width, height);

      const parallaxX = (mouseRef.current.x - width / 2) / width;
      const parallaxY = (mouseRef.current.y - height / 2) / height;

      for (const star of stars) {
        const shift = star.layer * 8;
        const x = star.x - parallaxX * shift;
        const y = star.y - parallaxY * shift;
        const twinkle = reduceMotion ? 1 : 0.5 + 0.5 * Math.sin(time * 0.001 * star.twinkleSpeed + star.twinklePhase);
        const alpha = star.baseAlpha * (0.5 + 0.5 * twinkle);

        ctx.beginPath();
        ctx.arc(x, y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(245, 246, 250, ${alpha.toFixed(3)})`;
        ctx.fill();
      }

      if (!reduceMotion) {
        maybeSpawnShootingStar();
        if (shootingStar) {
          const s = shootingStar;
          ctx.beginPath();
          ctx.strokeStyle = `rgba(111, 168, 255, ${s.life})`;
          ctx.lineWidth = 1.5;
          ctx.moveTo(s.x, s.y);
          ctx.lineTo(s.x - s.vx * 8, s.y - s.vy * 8);
          ctx.stroke();
          s.x += s.vx;
          s.y += s.vy;
          s.life -= 0.012;
          if (s.life <= 0 || s.x > width || s.y > height) shootingStar = null;
        }
      }

      if (!reduceMotion) {
        rafId = requestAnimationFrame(draw);
      }
    }

    function handleMouseMove(e: MouseEvent) {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    }

    function handleVisibility() {
      running = document.visibilityState === "visible";
      if (running && !reduceMotion) rafId = requestAnimationFrame(draw);
      else cancelAnimationFrame(rafId);
    }

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("visibilitychange", handleVisibility);

    if (reduceMotion) {
      draw(0); // single static frame
    } else {
      rafId = requestAnimationFrame(draw);
    }

    return () => {
      running = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none"
    />
  );
}
