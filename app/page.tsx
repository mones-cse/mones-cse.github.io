import About from "@/components/About";
import AwardsSection from "@/components/Awards";
import BlobEffect from "@/components/BlobEffect";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";

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
