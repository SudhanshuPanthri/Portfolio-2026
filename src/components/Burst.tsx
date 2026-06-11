"use client";

import { motion } from "framer-motion";

type BurstProps = {
  text: string;
  color?: string;
  className?: string;
  delay?: number;
};

/** A starburst "POW!"-style action badge that pops in and floats. */
export default function Burst({
  text,
  color = "bg-comic-yellow",
  className = "",
  delay = 0,
}: BurstProps) {
  return (
    <motion.div
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 12, delay }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div
        className={`starburst ${color} animate-float flex items-center justify-center p-8 sm:p-10`}
      >
        <span className="font-bangers text-ink text-xl sm:text-3xl tracking-wider rotate-[-8deg]">
          {text}
        </span>
      </div>
    </motion.div>
  );
}
