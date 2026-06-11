"use client";

import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import type { Mission } from "@/data/missions";
import SpeechBubble from "./SpeechBubble";

type Props = {
  mission: Mission;
  prev: Mission;
  next: Mission;
};

const springIn = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { type: "spring" as const, stiffness: 180, damping: 18 },
};

export default function MissionDetail({ mission, prev, next }: Props) {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  return (
    <article className="relative">
      {/* Reading progress bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed top-0 inset-x-0 h-2 bg-comic-red border-b-2 border-ink origin-left z-[60]"
        aria-hidden="true"
      />

      {/* ===== Cover hero ===== */}
      <header
        className={`relative ${mission.cover} border-b-4 border-ink overflow-hidden pt-24 pb-16 px-4`}
      >
        <div className="absolute inset-0 halftone-lg" aria-hidden="true" />
        <div className="absolute inset-0 speed-lines" aria-hidden="true" />

        <div className="relative mx-auto max-w-4xl flex flex-col items-center text-center">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="self-start mb-8"
          >
            <Link
              href="/#missions"
              className="font-bangers text-lg tracking-wider bg-white text-ink border-4 border-ink px-5 py-2 shadow-comic-sm hover:-translate-x-1 hover:shadow-comic transition-all inline-block"
            >
              ← BACK TO HQ
            </Link>
          </motion.div>

          <motion.span
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: -6 }}
            transition={{ type: "spring", stiffness: 260, damping: 12, delay: 0.1 }}
            className="starburst bg-comic-yellow w-24 h-24 flex items-center justify-center font-bangers text-3xl text-ink mb-6"
          >
            {mission.issue}
          </motion.span>

          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 12, delay: 0.2 }}
            className="text-8xl mb-6"
            role="img"
            aria-hidden="true"
          >
            {mission.emoji}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, scale: 2, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: -1 }}
            transition={{ type: "spring", stiffness: 240, damping: 16, delay: 0.3 }}
            className="font-bangers text-5xl sm:text-7xl text-white text-stroke-thick tracking-wider mb-4"
          >
            {mission.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-bangers text-2xl tracking-wide text-ink bg-white border-4 border-ink px-6 py-2 shadow-comic -rotate-1"
          >
            {mission.subtitle}
          </motion.p>
        </div>
      </header>

      {/* ===== Villain wanted poster ===== */}
      <section className="relative py-20 px-4">
        <div className="mx-auto max-w-2xl">
          <motion.div
            {...springIn}
            className="bg-paper border-4 border-ink shadow-comic-lg p-8 text-center rotate-1 halftone"
          >
            <p className="font-bangers text-4xl tracking-widest text-comic-red mb-4">
              WANTED!
            </p>
            <span className="text-7xl block mb-4" role="img" aria-hidden="true">
              {mission.villain.emoji}
            </span>
            <p className="font-bangers text-3xl tracking-wider text-ink mb-2">
              {mission.villain.name}
            </p>
            <p className="font-comic font-bold text-lg text-ink/80">
              CRIME: {mission.villain.crime}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ===== Story panels ===== */}
      <section className="relative px-4 pb-20">
        <div className="mx-auto max-w-3xl space-y-10">
          {mission.story.map((paragraph, i) => (
            <motion.div
              key={i}
              {...springIn}
              transition={{ ...springIn.transition, delay: i * 0.1 }}
              className={`relative bg-white border-4 border-ink shadow-comic p-8 ${
                i % 2 ? "rotate-1 ml-auto" : "-rotate-1"
              } max-w-2xl`}
            >
              <span className="absolute -top-4 left-6 bg-comic-yellow border-2 border-ink px-3 py-0.5 font-bangers tracking-widest text-sm">
                PANEL {i + 1}
              </span>
              <p className="font-comic font-bold text-lg text-ink leading-relaxed">
                {paragraph}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Stats strip ===== */}
      <section className="bg-ink border-y-4 border-ink py-14 px-4">
        <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6">
          {mission.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 260, damping: 14, delay: i * 0.1 }}
              className="bg-comic-yellow border-4 border-paper p-5 text-center -rotate-1 even:rotate-1"
            >
              <p className="font-bangers text-4xl text-ink">{stat.value}</p>
              <p className="font-bangers text-sm tracking-widest text-ink/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Features ===== */}
      <section className="relative py-20 px-4">
        <motion.h2
          {...springIn}
          className="text-center font-bangers text-4xl sm:text-5xl tracking-wider text-ink mb-12"
        >
          <span className="bg-comic-sky border-4 border-ink shadow-comic px-6 py-2 inline-block -rotate-1">
            SUPER FEATURES
          </span>
        </motion.h2>
        <div className="mx-auto max-w-4xl grid gap-8 sm:grid-cols-2">
          {mission.features.map((feature, i) => (
            <motion.div
              key={feature.title}
              {...springIn}
              transition={{ ...springIn.transition, delay: i * 0.08 }}
              whileHover={{ y: -6, rotate: i % 2 ? 1 : -1 }}
              className="bg-white border-4 border-ink shadow-comic p-6"
            >
              <span className="text-4xl block mb-3" role="img" aria-hidden="true">
                {feature.icon}
              </span>
              <h3 className="font-bangers text-2xl tracking-wide text-ink mb-2">
                {feature.title}
              </h3>
              <p className="font-comic font-bold text-ink/80">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== Challenge / Solution ===== */}
      <section className="relative py-16 px-4 bg-comic-sky/20 border-y-4 border-ink">
        <div className="absolute inset-0 halftone" aria-hidden="true" />
        <div className="relative mx-auto max-w-3xl space-y-14">
          <div>
            <p className="font-bangers text-2xl tracking-widest text-comic-red mb-4">
              💥 THE CHALLENGE
            </p>
            <SpeechBubble>
              <p className="font-comic font-bold text-lg text-ink">
                {mission.challenge}
              </p>
            </SpeechBubble>
          </div>
          <div>
            <p className="font-bangers text-2xl tracking-widest text-comic-cyan mb-4">
              ⚡ THE SOLUTION
            </p>
            <SpeechBubble>
              <p className="font-comic font-bold text-lg text-ink">
                {mission.solution}
              </p>
            </SpeechBubble>
          </div>
        </div>
      </section>

      {/* ===== Tech stack ===== */}
      <section className="py-16 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            {...springIn}
            className="font-bangers text-3xl tracking-wider text-ink mb-8"
          >
            GADGETS &amp; GEAR
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {mission.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: i * 0.06 }}
                whileHover={{ scale: 1.1, rotate: i % 2 ? 3 : -3 }}
                className="font-bangers text-lg tracking-wider bg-comic-yellow border-3 border-ink px-5 py-2 shadow-comic-sm text-ink cursor-default"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Prev / Next issue ===== */}
      <nav
        className="border-t-4 border-ink bg-paper py-12 px-4"
        aria-label="More issues"
      >
        <div className="mx-auto max-w-4xl flex flex-col sm:flex-row gap-6 justify-between items-stretch">
          <Link
            href={`/missions/${prev.slug}`}
            className="flex-1 bg-white border-4 border-ink shadow-comic p-5 hover:-translate-y-1 hover:shadow-comic-lg transition-all group"
          >
            <p className="font-bangers text-sm tracking-widest text-ink/60 mb-1">
              ← PREVIOUS ISSUE
            </p>
            <p className="font-bangers text-2xl tracking-wide text-ink group-hover:text-comic-red transition-colors">
              {prev.emoji} {prev.title}
            </p>
          </Link>
          <Link
            href={`/missions/${next.slug}`}
            className="flex-1 bg-white border-4 border-ink shadow-comic p-5 text-right hover:-translate-y-1 hover:shadow-comic-lg transition-all group"
          >
            <p className="font-bangers text-sm tracking-widest text-ink/60 mb-1">
              NEXT ISSUE →
            </p>
            <p className="font-bangers text-2xl tracking-wide text-ink group-hover:text-comic-red transition-colors">
              {next.emoji} {next.title}
            </p>
          </Link>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/#missions"
            className="font-bangers text-xl tracking-wider bg-comic-red text-white border-4 border-ink px-8 py-3 shadow-comic hover:-translate-y-1 hover:shadow-comic-lg transition-all inline-block"
          >
            ← BACK TO ALL MISSIONS
          </Link>
        </div>
      </nav>
    </article>
  );
}
