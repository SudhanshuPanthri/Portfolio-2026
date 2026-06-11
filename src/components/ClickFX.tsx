"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Pop = { id: number; x: number; y: number; word: string; color: string };

const WORDS = ["POW!", "BAM!", "ZAP!", "BOOM!", "WHAM!", "POP!"];
const COLORS = [
  "bg-comic-yellow",
  "bg-comic-red",
  "bg-comic-sky",
  "bg-comic-orange",
];

/** Spawns a little comic starburst wherever the user clicks. */
export default function ClickFX() {
  const [pops, setPops] = useState<Pop[]>([]);

  useEffect(() => {
    let counter = 0;

    function handleClick(event: MouseEvent) {
      const id = counter++;
      const pop: Pop = {
        id,
        x: event.clientX,
        y: event.clientY,
        word: WORDS[id % WORDS.length],
        color: COLORS[id % COLORS.length],
      };
      setPops((current) => [...current.slice(-4), pop]);
      setTimeout(() => {
        setPops((current) => current.filter((p) => p.id !== id));
      }, 700);
    }

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none" aria-hidden="true">
      <AnimatePresence>
        {pops.map((pop) => (
          <motion.span
            key={pop.id}
            initial={{ scale: 0, rotate: -25, opacity: 1 }}
            animate={{ scale: 1, rotate: 8 }}
            exit={{ scale: 0.4, opacity: 0, y: -30 }}
            transition={{ type: "spring", stiffness: 400, damping: 14 }}
            className={`absolute starburst ${pop.color} w-20 h-20 flex items-center justify-center font-bangers text-sm text-ink`}
            style={{ left: pop.x - 40, top: pop.y - 40 }}
          >
            {pop.word}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
