import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="container max-w-7xl mx-auto pt-16">
        <div className="bg-red-300 h-64 ">1</div>
        <div className="bg-yellow-300 h-64">2</div>
        <div className="bg-blue-300 h-64">3</div>
        <div className="bg-green-300 h-64">4</div>
      </div>
    </main>
  );
}
