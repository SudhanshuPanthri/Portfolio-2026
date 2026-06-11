"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "/#origin", label: "Origin Story" },
  { href: "/#powers", label: "Powers" },
  { href: "/#missions", label: "Missions" },
  { href: "/#contact", label: "Signal Me" },
];

export default function Navbar({ delay = 0 }: { delay?: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 16, delay }}
      className="fixed top-0 inset-x-0 z-50 bg-paper border-b-4 border-ink"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <a href="/#hero" className="flex items-center gap-3 group">
          <span className="starburst bg-comic-red text-white font-bangers text-lg w-12 h-12 flex items-center justify-center group-hover:rotate-12 transition-transform">
            SP
          </span>
          <span className="font-bangers text-2xl tracking-wide text-ink">
            Sudhanshu!
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-2">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-bangers text-lg tracking-wide px-4 py-2 border-2 border-transparent hover:border-ink hover:bg-comic-yellow hover:shadow-comic-sm hover:-translate-y-0.5 transition-all inline-block text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden font-bangers text-2xl border-2 border-ink bg-comic-yellow px-3 py-1 shadow-comic-sm active:translate-y-0.5 active:shadow-none transition-all"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-t-4 border-ink bg-paper"
          >
            {LINKS.map((link) => (
              <li key={link.href} className="border-b-2 border-ink/20">
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 font-bangers text-xl tracking-wide text-ink hover:bg-comic-yellow transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
