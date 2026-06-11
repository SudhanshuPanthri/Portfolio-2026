import Splash from "@/components/Splash";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Origin from "@/components/Origin";
import Powers from "@/components/Powers";
import Missions from "@/components/Missions";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Splash />
      <Navbar delay={1.7} />
      <main>
        <Hero />
        <Marquee />
        <Origin />
        <Powers />
        <Missions />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
