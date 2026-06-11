import type { Metadata } from "next";
import { Bangers, Luckiest_Guy, Comic_Neue } from "next/font/google";
import "./globals.css";
import ClickFX from "@/components/ClickFX";
import CursorFX from "@/components/CursorFX";
import SmoothScroll from "@/components/SmoothScroll";

const bangers = Bangers({
  variable: "--font-bangers",
  weight: "400",
  subsets: ["latin"],
});

const luckiestGuy = Luckiest_Guy({
  variable: "--font-luckiest",
  weight: "400",
  subsets: ["latin"],
});

const comicNeue = Comic_Neue({
  variable: "--font-comic",
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sudhanshu Panthri — The Amazing Developer!",
  description:
    "Comic-book themed portfolio of Sudhanshu Panthri — full stack .NET developer, C# API architect, and full-time bug squasher.",
  openGraph: {
    title: "Sudhanshu Panthri — The Amazing Developer!",
    description:
      "Issue #01: A .NET developer with the power to turn caffeine into C#.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bangers.variable} ${luckiestGuy.variable} ${comicNeue.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-comic bg-paper text-ink overflow-x-hidden">
        <SmoothScroll />
        {children}
        <ClickFX />
        <CursorFX />
      </body>
    </html>
  );
}
