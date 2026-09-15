"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { spaceFacts } from "@/data/facts";
import { useLanguage } from "@/lib/LanguageContext";

export default function DidYouKnow() {
  const { lang, t } = useLanguage();
  const [factIdx, setFactIdx] = useState(0);

  function another() {
    let next = factIdx;
    while (next === factIdx) {
      next = Math.floor(Math.random() * spaceFacts.length);
    }
    setFactIdx(next);
  }

  const fact = spaceFacts[factIdx] ?? spaceFacts[0]!;

  return (
    <div className="rounded-xl border border-white/10 bg-navy/40 p-6 sm:p-8">
      <p className="text-xs font-mono uppercase tracking-wide text-faint">{t("didYouKnow")}</p>
      <AnimatePresence mode="wait">
        <motion.p
          key={fact.en}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="mt-3 text-lg text-starlight leading-8 max-w-prose"
        >
          {fact[lang]}
        </motion.p>
      </AnimatePresence>
      <button
        type="button"
        onClick={another}
        className="mt-5 rounded-lg border border-white/15 px-4 py-2.5 text-sm text-starlight hover:border-white/30 transition-colors"
      >
        {t("anotherFact")}
      </button>
    </div>
  );
}
