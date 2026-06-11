import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function MissionLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
