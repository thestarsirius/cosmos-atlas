import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Design tokens — deep space, museum-quiet, not the generic
        // cream/terracotta or acid-green-on-black defaults.
        void: "#0A0D16",        // primary background — deep space, not flat black
        surface: "#11162399",   // panel background (used with opacity)
        panel: "#131A29",       // solid card background
        line: "#232B3D",        // hairline borders
        ink: "#E9ECF4",         // primary text
        mute: "#8D96AC",        // secondary text
        faint: "#5B6478",       // tertiary / metadata text
        ember: "#C9974A",       // starlight bronze — primary accent
        nebula: "#4E9C93",      // secondary accent, teal nebula glow
        signal: "#B9673F"       // warning / error tone, warm rust
      },
      fontFamily: {
        arabic: ["var(--font-arabic)", "Tahoma", "sans-serif"],
        kufi: ["var(--font-kufi)", "var(--font-arabic)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      maxWidth: {
        prose: "68ch"
      },
      borderRadius: {
        sm: "3px",
        DEFAULT: "6px"
      }
    }
  },
  plugins: []
};

export default config;
