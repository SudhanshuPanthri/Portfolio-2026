"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Buttery inertia scrolling via Lenis. Anchors (e.g. /#missions) are
 * animated too. Disabled for users who prefer reduced motion.
 */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      lerp: 0.1,
      anchors: { offset: -80 }, // clear the fixed navbar
    });

    let frame: number;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }
    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
    };
  }, []);

  return null;
}
