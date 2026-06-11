const WORDS = [
  "FULL STACK .NET DEVELOPER",
  "C# SHARPSHOOTER",
  "GRAPHQL GUARDIAN",
  "BLAZOR KNIGHT",
  "API ARCHITECT",
  "AZ-900 CERTIFIED",
  "SQL WRANGLER",
];

const strip = WORDS.map((w) => `★ ${w} `).join("");

/** Infinite scrolling ticker strip between sections. */
export default function Marquee() {
  return (
    <div className="relative z-10 bg-ink border-y-4 border-ink overflow-hidden py-3 -rotate-1 scale-x-105">
      <div className="animate-marquee flex w-max whitespace-nowrap">
        <span className="font-bangers text-2xl tracking-widest text-comic-yellow pr-4">
          {strip}
        </span>
        <span
          className="font-bangers text-2xl tracking-widest text-comic-yellow pr-4"
          aria-hidden="true"
        >
          {strip}
        </span>
      </div>
    </div>
  );
}
