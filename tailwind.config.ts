import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Palette from the brief: deep space black, dark navy, soft space
        // purple, stellar blue, white for stars/text.
        void: "#05050B",
        navy: "#0B1226",
        "navy-light": "#141D3A",
        purple: "#6C4FD1",
        "purple-soft": "#8B72E8",
        stellar: "#6FA8FF",
        starlight: "#F5F6FA",
        mute: "#9AA3C0",
        faint: "#5C6484"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: {
        prose: "68ch"
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(108, 79, 209, 0.45)",
        "glow-blue": "0 0 40px -10px rgba(111, 168, 255, 0.4)"
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" }
        },
        "drift-slow": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-200px)" }
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        twinkle: "twinkle 3.2s ease-in-out infinite",
        "drift-slow": "drift-slow 60s linear infinite",
        "spin-slow": "spin-slow 40s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;
