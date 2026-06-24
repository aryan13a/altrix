import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SocialProofBar from "@/components/SocialProofBar";
import Capabilities from "@/components/Capabilities";
import WhyAltrix from "@/components/WhyAltrix";
import Process from "@/components/Process";
import Portfolio from "@/components/Portfolio";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative bg-altrix-dark overflow-hidden">
        {/* Page-level radial background orbs */}
        <div className="absolute top-[15%] left-[5%] w-[500px] h-[500px] rounded-full bg-altrix-indigo/5 blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-[45%] right-[5%] w-[500px] h-[500px] rounded-full bg-altrix-cyan/3 blur-[150px] pointer-events-none z-0" />
        <div className="absolute top-[75%] left-[2%] w-[500px] h-[500px] rounded-full bg-altrix-violet/5 blur-[150px] pointer-events-none z-0" />

        <Hero />
        <SocialProofBar />
        <Capabilities />
        <WhyAltrix />
        <Process />
        <Portfolio />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
