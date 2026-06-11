"use client";

import { motion } from "framer-motion";

type SectionTitleProps = {
  children: string;
  color?: string;
};

/** Big slanted comic section heading that slams in on scroll. */
export default function SectionTitle({
  children,
  color = "bg-comic-yellow",
}: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, scale: 2.5, rotate: -10 }}
      whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ type: "spring", stiffness: 300, damping: 18 }}
      className="flex justify-center mb-14"
    >
      <span
        className={`inline-block ${color} border-4 border-ink shadow-comic px-8 py-3 font-bangers text-4xl sm:text-6xl tracking-wider text-ink`}
      >
        {children}
      </span>
    </motion.h2>
  );
}
