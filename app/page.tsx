import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AwardsSection from "@/components/Awards";

export default function Home() {
  return (
    <main className="bg-black pb-8">
      <Navbar />
      <div className="container max-w-7xl mx-auto">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <AwardsSection />
      </div>
    </main>
  );
}
