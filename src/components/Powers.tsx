"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";

const POWERS = [
  { icon: "🟣", name: "C# / .NET", level: 92, sfx: "ZAP!" },
  { icon: "🌐", name: "ASP.NET Core Web APIs", level: 90, sfx: "BOOM!" },
  { icon: "🗄️", name: "SQL Server / EF Core", level: 85, sfx: "WHAM!" },
  { icon: "🏗️", name: "Microservices & Clean Architecture", level: 80, sfx: "POW!" },
  { icon: "☁️", name: "Azure / CI-CD", level: 75, sfx: "BANG!" },
  { icon: "⚛️", name: "JavaScript / React", level: 70, sfx: "CRASH!" },
];

function PowerCard({
  power,
  index,
}: {
  power: (typeof POWERS)[number];
  index: number;
}) {
  const [sfx, setSfx] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6, rotate: index % 2 ? 4 : -4 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ type: "spring", stiffness: 220, damping: 15, delay: index * 0.08 }}
      whileHover={{ y: -8, rotate: index % 2 ? 1.5 : -1.5 }}
      onHoverStart={() => setSfx(true)}
      onHoverEnd={() => setSfx(false)}
      className="relative bg-white border-4 border-ink shadow-comic p-6"
    >
      <AnimatePresence>
        {sfx && (
          <motion.span
            initial={{ scale: 0, rotate: -20, opacity: 0 }}
            animate={{ scale: 1, rotate: 8, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 12 }}
            className="absolute -top-6 -right-4 starburst bg-comic-red text-white font-bangers text-sm w-20 h-20 flex items-center justify-center z-10 pointer-events-none"
            aria-hidden="true"
          >
            {power.sfx}
          </motion.span>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-4 mb-4">
        <span className="text-4xl" role="img" aria-hidden="true">
          {power.icon}
        </span>
        <h3 className="font-bangers text-2xl tracking-wide text-ink">
          {power.name}
        </h3>
      </div>

      <div
        className="h-6 border-3 border-ink bg-paper halftone overflow-hidden"
        role="meter"
        aria-valuenow={power.level}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label={`${power.name} power level`}
      >
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${power.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 + index * 0.08, ease: "easeOut" }}
          className="h-full bg-comic-red border-r-4 border-ink"
        />
      </div>
      <span className="font-bangers text-lg text-comic-red mt-1 inline-block">
        {power.level}% POWER
      </span>
    </motion.div>
  );
}

export default function Powers() {
  return (
    <section
      id="powers"
      className="relative py-24 px-4 scroll-mt-20 bg-comic-sky/25 border-y-4 border-ink"
    >
      <div className="absolute inset-0 halftone" aria-hidden="true" />
      <div className="relative">
        <SectionTitle color="bg-comic-sky">SUPER POWERS</SectionTitle>
        <div className="mx-auto max-w-5xl grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {POWERS.map((power, i) => (
            <PowerCard key={power.name} power={power} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
