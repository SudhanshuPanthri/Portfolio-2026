"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SpeechBubble from "./SpeechBubble";

const PANELS = [
  {
    caption: "PANEL 1",
    art: "🎓⚡",
    text: (
      <>
        Trained at the academy — <strong>BCA (9.0 CGPA)</strong>, then{" "}
        <strong>MCA (8.8 CGPA)</strong>. The origin powers were forged!
      </>
    ),
    tilt: -2,
  },
  {
    caption: "PANEL 2",
    art: "🧪💻",
    text: (
      <>
        Joined <strong>Symbiotic Consulting Group</strong> as an intern —
        mastering <strong>C#, .NET &amp; EF Core</strong> on real healthcare
        systems!
      </>
    ),
    tilt: 2,
  },
  {
    caption: "PANEL 3",
    art: "🦸‍♂️🚀",
    text: (
      <>
        Now a <strong>Software Developer</strong> leading backend missions —
        REST APIs, <strong>GraphQL</strong>, and offline-first{" "}
        <strong>Blazor</strong> for VITAS Healthcare!
      </>
    ),
    tilt: -1.5,
  },
];

const TRAINING = [
  {
    icon: "🎓",
    title: "MCA",
    place: "Vivekananda Institute of Professional Studies",
    detail: "2022–2024 · 8.8 CGPA",
  },
  {
    icon: "🎓",
    title: "BCA",
    place: "Jagannath International Management School",
    detail: "2019–2022 · 9.0 CGPA",
  },
  {
    icon: "🏅",
    title: "AZ-900",
    place: "Microsoft Azure Fundamentals",
    detail: "Certified",
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

      {/* Hero training & credentials */}
      <div className="mx-auto max-w-4xl mt-20">
        <motion.p
          initial={{ opacity: 0, scale: 1.6, rotate: 4 }}
          whileInView={{ opacity: 1, scale: 1, rotate: -1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="text-center mb-10"
        >
          <span className="inline-block bg-comic-purple text-white border-4 border-ink shadow-comic px-6 py-2 font-bangers text-3xl tracking-wider">
            HERO TRAINING
          </span>
        </motion.p>
        <div className="grid gap-6 sm:grid-cols-3">
          {TRAINING.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50, rotate: i % 2 ? 3 : -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 ? 1 : -1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ type: "spring", stiffness: 200, damping: 16, delay: i * 0.12 }}
              whileHover={{ rotate: 0, scale: 1.05 }}
              className="bg-white border-4 border-ink shadow-comic p-5 text-center"
            >
              <span className="text-4xl block mb-2" role="img" aria-hidden="true">
                {item.icon}
              </span>
              <p className="font-bangers text-3xl tracking-wide text-comic-red">
                {item.title}
              </p>
              <p className="font-comic font-bold text-ink leading-snug mt-1">
                {item.place}
              </p>
              <p className="font-bangers tracking-widest text-sm text-ink/60 mt-2">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>
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
