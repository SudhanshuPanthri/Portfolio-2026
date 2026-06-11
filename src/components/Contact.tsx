"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionTitle from "./SectionTitle";
import SpeechBubble from "./SpeechBubble";

const inputClasses =
  "w-full border-4 border-ink bg-white px-4 py-3 font-comic font-bold text-ink placeholder:text-ink/40 focus:outline-none focus:bg-comic-yellow/20 focus:shadow-comic-sm transition-all";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // Wire this to your form backend (e.g. /api/contact, Formspree, Resend).
    setSent(true);
    event.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  }

  return (
    <section
      id="contact"
      className="relative py-24 px-4 scroll-mt-20 bg-comic-yellow/30 border-t-4 border-ink"
    >
      <div className="absolute inset-0 halftone" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl">
        <SectionTitle>SEND THE SIGNAL!</SectionTitle>

        <SpeechBubble className="mb-10 mx-auto max-w-lg text-center">
          <p className="font-comic font-bold text-xl text-ink">
            Need a hero for your next project?
            <br />
            Light up the <strong className="text-comic-red">code-signal</strong>{" "}
            and I&apos;ll be there!
          </p>
        </SpeechBubble>

        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 240, damping: 15 }}
          className="text-center mb-16"
        >
          <a
            href="/Sudhanshu-Panthri-Resume.pdf"
            download="Sudhanshu-Panthri-Resume.pdf"
            className="inline-block font-bangers text-xl tracking-wider bg-comic-purple text-white border-4 border-ink px-8 py-3 shadow-comic rotate-1 hover:-translate-y-1 hover:rotate-0 hover:shadow-comic-lg active:translate-y-0.5 active:shadow-comic-sm transition-all"
          >
            📜 DOWNLOAD THE HERO FILES (RESUME)
          </a>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 160, damping: 18 }}
          onSubmit={handleSubmit}
          className="bg-white border-4 border-ink shadow-comic-lg p-8 space-y-6 -rotate-1"
        >
          <label className="block font-bangers text-xl tracking-wider text-ink">
            YOUR SECRET IDENTITY
            <input
              type="text"
              name="name"
              placeholder="Bruce Wayne"
              required
              className={`${inputClasses} mt-2`}
            />
          </label>

          <label className="block font-bangers text-xl tracking-wider text-ink">
            YOUR SIGNAL FREQUENCY
            <input
              type="email"
              name="email"
              placeholder="bruce@wayne.enterprises"
              required
              className={`${inputClasses} mt-2`}
            />
          </label>

          <label className="block font-bangers text-xl tracking-wider text-ink">
            YOUR MESSAGE
            <textarea
              name="message"
              rows={4}
              placeholder="Help! My website needs saving!"
              required
              className={`${inputClasses} mt-2 resize-y`}
            />
          </label>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="w-full font-bangers text-2xl tracking-widest bg-comic-red text-white border-4 border-ink py-4 shadow-comic hover:shadow-comic-lg transition-shadow"
          >
            LAUNCH MESSAGE! 🚀
          </motion.button>

          <AnimatePresence>
            {sent && (
              <motion.p
                initial={{ scale: 0, rotate: -8 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 14 }}
                className="text-center font-bangers text-2xl tracking-wider text-comic-cyan"
                role="status"
              >
                MESSAGE LAUNCHED! 💥 I&apos;LL REPLY AT SUPER-SPEED!
              </motion.p>
            )}
          </AnimatePresence>
        </motion.form>
      </div>
    </section>
  );
}
