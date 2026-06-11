"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/** Full-screen "KA-POW!" intro that plays once on load, then unveils the page. */
export default function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 1600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0, scale: 1.4 }}
          transition={{ duration: 0.4, ease: "easeIn" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          aria-hidden="true"
        >
          <div className="absolute inset-0 speed-lines opacity-40" />
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: [0, 1.2, 1], rotate: [-45, 8, -4] }}
            transition={{ duration: 0.7, times: [0, 0.6, 1], ease: "easeOut" }}
            className="starburst bg-comic-yellow flex items-center justify-center w-[320px] h-[320px] sm:w-[440px] sm:h-[440px]"
          >
            <span className="font-bangers text-5xl sm:text-7xl text-ink tracking-wider rotate-[-6deg]">
              KA-POW!
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
