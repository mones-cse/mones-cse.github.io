import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AwardsSection from "@/components/Awards";
import Education from "@/components/education";
import Footer from "@/components/footer";
import BlobEffect from "@/components/BlobEffect";
import { AnimateOnScroll } from "@/components/AnimateOnScroll";

export default function Home() {
  return (
    <>
      <Navbar />
      <BlobEffect />
      <main className="bg-primary_bg w-full">
        <div className="container max-w-7xl mx-auto relative">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <AwardsSection />
          <Education />
        </div>
      </main>
      <Footer />
    </>
  );
}
