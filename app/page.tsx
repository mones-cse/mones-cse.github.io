import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AwardsSection from "@/components/Awards";
import Education from "@/components/Education";
import Footer from "@/components/Footer";
import CAward from "@/components/CAwards";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-primary_bg w-full">
        <div className="container max-w-7xl mx-auto">
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
