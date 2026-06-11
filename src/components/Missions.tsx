"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import { MISSIONS } from "@/data/missions";

export default function Missions() {
  return (
    <section id="missions" className="relative py-24 px-4 scroll-mt-20">
      <SectionTitle color="bg-comic-red">EPIC MISSIONS</SectionTitle>

      <div className="mx-auto max-w-5xl grid gap-10 md:grid-cols-2">
        {MISSIONS.map((mission, i) => (
          <motion.article
            key={mission.slug}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 160, damping: 18, delay: i * 0.15 }}
            whileHover={{ y: -10, rotate: i % 2 ? 1 : -1 }}
            className="group bg-white border-4 border-ink shadow-comic flex flex-col overflow-hidden"
          >
            {/* Comic cover */}
            <Link
              href={`/missions/${mission.slug}`}
              className={`relative ${mission.cover} halftone-lg border-b-4 border-ink h-44 flex items-center justify-center overflow-hidden`}
            >
              <span
                className="text-7xl group-hover:scale-125 group-hover:-rotate-6 transition-transform duration-300"
                role="img"
                aria-hidden="true"
              >
                {mission.emoji}
              </span>
              <span className="absolute top-3 right-3 starburst bg-comic-yellow w-14 h-14 flex items-center justify-center font-bangers text-lg text-ink">
                {mission.issue}
              </span>
            </Link>

            <div className="p-6 flex flex-col flex-1">
              <h3 className="font-bangers text-3xl tracking-wide text-ink mb-3">
                {mission.title}
              </h3>
              <p className="font-comic font-bold text-ink/80 mb-5 flex-1">
                {mission.blurb}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {mission.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="font-bangers text-sm tracking-wider bg-paper border-2 border-ink px-3 py-1 text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/missions/${mission.slug}`}
                className="self-start font-bangers text-lg tracking-wider bg-comic-yellow text-ink border-3 border-ink px-5 py-2 shadow-comic-sm hover:-translate-y-0.5 hover:shadow-comic active:translate-y-0.5 active:shadow-none transition-all"
              >
                READ ISSUE →
              </Link>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
