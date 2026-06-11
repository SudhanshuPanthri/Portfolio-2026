"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SpeechBubbleProps = {
  children: ReactNode;
  className?: string;
  tail?: boolean;
  delay?: number;
};

/** A bordered comic speech bubble that springs into view. */
export default function SpeechBubble({
  children,
  className = "",
  tail = true,
  delay = 0,
}: SpeechBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 220, damping: 16, delay }}
      className={`relative bg-white border-4 border-ink rounded-3xl px-6 py-4 shadow-comic ${
        tail ? "bubble-tail" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
