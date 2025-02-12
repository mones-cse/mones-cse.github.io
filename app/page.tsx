import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import AwardsSection from "@/components/Awards";
import Education from "@/components/education";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="bg-black pb-8">
        <div className="container max-w-7xl mx-auto">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <AwardsSection />
          <Education/>
        </div>
      </main>
      <Footer/>
    </>
  );
}
