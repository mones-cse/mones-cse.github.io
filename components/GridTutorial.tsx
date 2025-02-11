"use client";
import React, { useState } from "react";
import { cn } from "../utils/cn";
const GridTutorial = () => {
  const [activeDemo, setActiveDemo] = useState<keyof typeof demos>("basic");

  const blr =
    "border-solid border-gray-400 p-4 text-black text-center col-span-4 md:col-span-6";

  const bb = "border-b border-solid border-gray-400";

  const leftEdge =
    "hidden md:block border-r border-solid border-gray-400 p-4 text-black text-center col-span-2";

  const leftOut =
    "border-r border-solid border-gray-400 p-4 text-black text-center col-span-2 md:col-span-1";
  const rightEdge =
    "hidden md:block border-l border-solid border-gray-400 p-4 text-black text-center col-span-2";

  const rightOut =
    "border-l border-solid border-gray-400 p-4 text-black text-center col-span-2 md:col-span-1";

  const demos = {
    basic: (
      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="bg-blue-500 p-4 text-white text-center rounded"
          >
            Item {num}
          </div>
        ))}
      </div>
    ),
    responsive: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-slate-100">
        {[1, 2, 3, 4].map((num) => (
          <div
            key={num}
            className="bg-green-500 p-4 text-white text-center rounded"
          >
            Item {num}
          </div>
        ))}
      </div>
    ),
    spanning: (
      <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100">
        <div className="bg-purple-500 p-4 text-white text-center rounded col-span-2">
          Span 2
        </div>
        <div className="bg-purple-500 p-4 text-white text-center rounded">
          Item 2
        </div>
        <div className="bg-purple-500 p-4 text-white text-center rounded">
          Item 3
        </div>
        <div className="bg-purple-500 p-4 text-white text-center rounded col-span-2">
          Span 2
        </div>
        <div className="bg-purple-500 p-4 text-white text-center rounded col-span-3">
          Span 3
        </div>
      </div>
    ),
    areas: (
      <div className="grid grid-cols-4 grid-rows-3 gap-4 p-4 bg-slate-100 h-64">
        <header className="bg-red-500 col-span-4 p-4 text-white text-center rounded">
          Header
        </header>
        <nav className="bg-red-500 row-span-2 p-4 text-white text-center rounded flex items-center justify-center">
          Nav
        </nav>
        <main className="bg-red-500 col-span-2 row-span-2 p-4 text-white text-center rounded flex items-center justify-center">
          Main
        </main>
        <aside className="bg-red-500 row-span-2 p-4 text-white text-center rounded flex items-center justify-center">
          Aside
        </aside>
      </div>
    ),
    custom: (
      <div className="grid grid-cols-8 md:grid-cols-12 bg-slate-100 p-4">
        <div className={cn(leftEdge, bb)}></div>
        <div className={cn(leftOut, bb)}></div>
        <div className={cn(blr, bb)}>light</div>
        <div className={cn(rightOut, bb)}></div>
        <div className={cn(rightEdge, bb)}></div>
        {/*  */}
        <div className={cn(leftEdge, bb)}></div>
        <div className={cn(leftOut, bb)}></div>
        <div className={cn(blr, bb)}>Hi there! I&apos;m</div>
        <div className={cn(rightOut, bb)}></div>
        <div className={cn(rightEdge, bb)}></div>
        {/*  */}
        <div className={cn(leftEdge, bb)}></div>
        <div className={cn(leftOut, bb)}></div>
        <div className={cn(blr, bb, "relative")}>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -top-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -top-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -bottom-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -bottom-[3.5px]"></div>

          <p className="text-6xl ">Mones</p>
        </div>
        <div className={cn(rightOut, bb)}></div>
        <div className={cn(rightEdge, bb)}></div>
        {/*  */}
        <div className={cn(leftEdge, bb)}></div>
        <div className={cn(leftOut, bb)}></div>
        <div className={cn(blr, bb, "relative")}>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -top-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -top-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -bottom-[3.5px]"></div>
          <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -bottom-[3.5px]"></div>
          <p>
            I am a Senior Software Engineer with 9+ years of experience in
            JavaScript, React, Node.js, and API development, delivering scalable
            and efficient solutions.
          </p>
        </div>
        <div className={cn(rightOut, bb)}></div>
        <div className={cn(rightEdge, bb)}></div>
        {/*  */}
        <div className={cn(leftEdge)}></div>
        <div className={cn(leftOut)}></div>
        <div className={cn(blr)}>
          <p>button1</p>
          <p>button2</p>
        </div>
        <div className={cn(rightOut)}></div>
        <div className={cn(rightEdge)}></div>
      </div>
    ),
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto p-4">
      <div className="space-x-4">
        <button
          onClick={() => setActiveDemo("basic")}
          className={`px-4 py-2 rounded ${
            activeDemo === "basic" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Basic Grid
        </button>
        <button
          onClick={() => setActiveDemo("responsive")}
          className={`px-4 py-2 rounded ${
            activeDemo === "responsive"
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          }`}
        >
          Responsive
        </button>
        <button
          onClick={() => setActiveDemo("spanning")}
          className={`px-4 py-2 rounded ${
            activeDemo === "spanning" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Spanning
        </button>
        <button
          onClick={() => setActiveDemo("areas")}
          className={`px-4 py-2 rounded ${
            activeDemo === "areas" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Layout Areas
        </button>
        <button
          onClick={() => setActiveDemo("custom")}
          className={`px-4 py-2 rounded ${
            activeDemo === "custom" ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          Custom
        </button>
      </div>

      <div className="border-solid border border-gray-400 rounded-lg shadow-sm">
        {demos[activeDemo as keyof typeof demos]}
      </div>

      <div className="bg-gray-100 p-4 rounded">
        <code className="text-sm">
          {activeDemo === "basic" && "grid grid-cols-3 gap-4"}
          {activeDemo === "responsive" &&
            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}
          {activeDemo === "spanning" && "grid grid-cols-3 gap-4 + col-span-2"}
          {activeDemo === "areas" &&
            "grid grid-cols-4 grid-rows-3 + col/row-span"}
        </code>
      </div>
    </div>
  );
};

export default GridTutorial;
