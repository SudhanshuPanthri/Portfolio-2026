import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-4 text-center overflow-hidden">
      <div className="absolute inset-0 halftone-lg" aria-hidden="true" />
      <div className="absolute inset-0 speed-lines" aria-hidden="true" />

      <div className="relative flex flex-col items-center">
        <span className="starburst bg-comic-red flex items-center justify-center w-64 h-64 mb-8 animate-wobble">
          <span className="font-bangers text-6xl text-white rotate-[-8deg]">
            404!
          </span>
        </span>
        <h1 className="font-bangers text-4xl sm:text-6xl tracking-wider text-ink mb-4">
          THIS ISSUE WAS NEVER PRINTED!
        </h1>
        <p className="font-comic font-bold text-xl text-ink/70 mb-10 max-w-md">
          Looks like a villain tore this page out of the comic. Better head back
          to headquarters!
        </p>
        <Link
          href="/"
          className="font-bangers text-xl tracking-wider bg-comic-yellow text-ink border-4 border-ink px-8 py-3 shadow-comic hover:-translate-y-1 hover:shadow-comic-lg transition-all"
        >
          ← BACK TO HQ
        </Link>
      </div>
    </main>
  );
}
