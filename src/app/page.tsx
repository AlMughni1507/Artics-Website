import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import HeroSection from "./pages/home";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
      </main>
      <Footer />
    </>
  );
}
