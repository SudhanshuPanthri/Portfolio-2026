"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";

type Spark = {
  id: number;
  x: number;
  y: number;
  char: string;
  color: string;
  drift: number;
  size: number;
};

const CHARS = ["★", "✦", "✸", "✶", "●"];
const COLORS = ["#ffd23f", "#ee4266", "#54c6eb", "#ff8c42", "#a06cd5"];
const MAX_SPARKS = 18;
const MIN_DISTANCE = 28; // px moved before spawning the next spark

/**
 * Comic cursor effects: a springy halo ring chasing the pointer and a
 * trail of star sparkles. Renders nothing on touch devices and respects
 * prefers-reduced-motion.
 */
export default function CursorFX() {
  const reducedMotion = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const [sparks, setSparks] = useState<Spark[]>([]);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const ringX = useSpring(mouseX, { stiffness: 350, damping: 28, mass: 0.6 });
  const ringY = useSpring(mouseY, { stiffness: 350, damping: 28, mass: 0.6 });

  useEffect(() => {
    // Only on devices with a real pointer (skip phones/tablets).
    if (!window.matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);

    let counter = 0;
    let lastX = -1000;
    let lastY = -1000;

    function handleMove(event: MouseEvent) {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);

      const dx = event.clientX - lastX;
      const dy = event.clientY - lastY;
      if (dx * dx + dy * dy < MIN_DISTANCE * MIN_DISTANCE) return;
      lastX = event.clientX;
      lastY = event.clientY;

      const id = counter++;
      const spark: Spark = {
        id,
        x: event.clientX + (Math.random() - 0.5) * 24,
        y: event.clientY + (Math.random() - 0.5) * 24,
        char: CHARS[Math.floor(Math.random() * CHARS.length)],
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        drift: (Math.random() - 0.5) * 40,
        size: 10 + Math.random() * 12,
      };
      setSparks((current) => [...current.slice(-(MAX_SPARKS - 1)), spark]);
      setTimeout(() => {
        setSparks((current) => current.filter((s) => s.id !== id));
      }, 650);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  if (!enabled || reducedMotion) return null;

  return (
    <div
      className="fixed inset-0 z-[80] pointer-events-none overflow-hidden"
      aria-hidden="true"
    >
      {/* Springy halo ring chasing the cursor */}
      <motion.div
        style={{ x: ringX, y: ringY }}
        className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2"
      >
        <div className="w-9 h-9 -ml-[18px] -mt-[18px] rounded-full border-[3px] border-ink bg-comic-yellow/25" />
      </motion.div>

      {/* Star sparkle trail */}
      {sparks.map((spark) => (
        <motion.span
          key={spark.id}
          initial={{ opacity: 1, scale: 0, rotate: 0 }}
          animate={{
            opacity: 0,
            scale: 1.4,
            rotate: 120,
            x: spark.drift,
            y: -30,
          }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="absolute font-bold select-none"
          style={{
            left: spark.x,
            top: spark.y,
            color: spark.color,
            fontSize: spark.size,
            WebkitTextStroke: "1px #1a1a2e",
          }}
        >
          {spark.char}
        </motion.span>
      ))}
    </div>
  );
}
