"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Burst from "./Burst";

const TAGLINE = "Full stack .NET developer — I forge rock-solid C# APIs with SUPERHUMAN speed!";

function Typewriter({ text, startDelay = 0 }: { text: string; startDelay?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const start = setTimeout(() => {
      const interval = setInterval(() => {
        setCount((c) => {
          if (c >= text.length) {
            clearInterval(interval);
            return c;
          }
          return c + 1;
        });
      }, 35);
    }, startDelay);
    return () => clearTimeout(start);
  }, [text, startDelay]);

  return (
    <span>
      {text.slice(0, count)}
      <span className="animate-blink" aria-hidden="true">
        |
      </span>
    </span>
  );
}

const titleLine = {
  hidden: { opacity: 0, y: 60, rotate: -6 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: i === 1 ? -2 : 0,
    transition: { type: "spring" as const, stiffness: 200, damping: 14, delay: 1.8 + i * 0.18 },
  }),
};

export default function Hero() {
  return (
    <header
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-16 px-4"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0 halftone-lg" aria-hidden="true" />
      <div className="absolute inset-0 speed-lines" aria-hidden="true" />

      {/* Floating action bursts */}
      <Burst text="POW!" color="bg-comic-red" delay={2.6} className="absolute top-[16%] left-[6%] hidden sm:block" />
      <Burst text="BAM!" color="bg-comic-sky" delay={2.8} className="absolute top-[22%] right-[7%] hidden sm:block" />
      <Burst text="ZAP!" color="bg-comic-orange" delay={3.0} className="absolute bottom-[18%] left-[12%] hidden lg:block" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.7 }}
          className="animate-wobble bg-comic-red text-white font-bangers tracking-widest text-lg px-5 py-1.5 border-4 border-ink shadow-comic-sm mb-6"
        >
          ISSUE #01 · 2026
        </motion.div>

        <h1 className="font-bangers leading-[0.95] mb-8">
          <motion.span
            custom={0}
            variants={titleLine}
            initial="hidden"
            animate="show"
            className="block text-4xl sm:text-6xl text-ink tracking-wide"
          >
            THE AMAZING
          </motion.span>
          <motion.span
            custom={1}
            variants={titleLine}
            initial="hidden"
            animate="show"
            className="block text-7xl sm:text-[9rem] text-comic-yellow text-stroke-thick tracking-wider"
          >
            SUDHANSHU
          </motion.span>
          <motion.span
            custom={2}
            variants={titleLine}
            initial="hidden"
            animate="show"
            className="block text-5xl sm:text-7xl text-comic-red text-stroke tracking-wider"
          >
            PANTHRI!
          </motion.span>
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 2.4 }}
          className="relative bg-white border-4 border-ink rounded-3xl px-8 py-5 shadow-comic bubble-tail max-w-xl mb-10"
        >
          <p className="font-comic font-bold text-lg sm:text-xl text-ink min-h-[3.5rem]">
            <Typewriter text={TAGLINE} startDelay={2600} />
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href="#missions"
            className="font-bangers text-xl tracking-wider bg-comic-yellow text-ink border-4 border-ink px-8 py-3 shadow-comic hover:-translate-y-1 hover:shadow-comic-lg active:translate-y-0.5 active:shadow-comic-sm transition-all"
          >
            SEE MY MISSIONS!
          </a>
          <a
            href="#contact"
            className="font-bangers text-xl tracking-wider bg-comic-sky text-ink border-4 border-ink px-8 py-3 shadow-comic hover:-translate-y-1 hover:shadow-comic-lg active:translate-y-0.5 active:shadow-comic-sm transition-all"
          >
            SEND A SIGNAL!
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4 }}
        className="absolute bottom-6 flex flex-col items-center gap-1 text-ink"
      >
        <span className="font-bangers tracking-widest text-sm">
          SCROLL FOR MORE ACTION
        </span>
        <span className="animate-bounce-arrow text-2xl" aria-hidden="true">
          ▼
        </span>
      </motion.div>
    </header>
  );
}
