"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SpeechBubble from "./SpeechBubble";

const PANELS = [
  {
    caption: "PANEL 1",
    art: "👶💻",
    text: (
      <>
        Once an ordinary kid... until a radioactive <strong>keyboard</strong>{" "}
        changed everything!
      </>
    ),
    tilt: -2,
  },
  {
    caption: "PANEL 2",
    art: "⚡🧠",
    text: (
      <>
        Gained the power to turn <strong>caffeine</strong> into{" "}
        <strong>C#</strong> at superhuman speed!
      </>
    ),
    tilt: 2,
  },
  {
    caption: "PANEL 3",
    art: "🦸‍♂️🚀",
    text: (
      <>
        Now defends production with <strong>bulletproof APIs</strong> — no
        500 error survives his watch!
      </>
    ),
    tilt: -1.5,
  },
];

export default function Origin() {
  return (
    <section id="origin" className="relative py-24 px-4 scroll-mt-20">
      <SectionTitle>ORIGIN STORY</SectionTitle>

      <div className="mx-auto max-w-6xl grid gap-8 md:grid-cols-3">
        {PANELS.map((panel, i) => (
          <motion.article
            key={panel.caption}
            initial={{ opacity: 0, y: 80, rotate: panel.tilt * 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: panel.tilt }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ type: "spring", stiffness: 180, damping: 16, delay: i * 0.15 }}
            whileHover={{ rotate: 0, scale: 1.04, zIndex: 10 }}
            className="relative bg-white border-4 border-ink shadow-comic p-6 flex flex-col items-center text-center"
          >
            <span className="absolute -top-4 left-4 bg-comic-yellow border-2 border-ink px-3 py-0.5 font-bangers tracking-widest text-sm">
              {panel.caption}
            </span>
            <div className="halftone w-full py-10 mb-5 border-2 border-ink bg-comic-sky/20">
              <span className="text-6xl" role="img" aria-hidden="true">
                {panel.art}
              </span>
            </div>
            <p className="font-comic font-bold text-lg text-ink">{panel.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mx-auto max-w-md mt-16">
        <SpeechBubble tail={false} delay={0.3} className="rounded-[50%] px-10 py-8 text-center">
          <p className="font-comic font-bold italic text-xl text-ink">
            &ldquo;With great code comes great responsibility...&rdquo;
          </p>
        </SpeechBubble>
      </div>
    </section>
  );
}
