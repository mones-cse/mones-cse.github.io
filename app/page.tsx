import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <main className="bg-black pb-8">
      <Navbar />
      <div className="container max-w-7xl mx-auto">
        {/* <Hero />
        <div className="bg-red-300 h-64 ">1</div>
        <div className="bg-yellow-300 h-64">2</div>
        <div className="bg-blue-300 h-64">3</div>
        <div className="bg-green-300 h-64">4</div> */}
        {/* <GridTutorial /> */}
        <Hero />
        <About />
        <Experience />
      </div>
    </main>
  );
}
