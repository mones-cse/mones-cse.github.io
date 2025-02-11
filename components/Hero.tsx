const Stars = () => {
  return (
    <>
      <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -top-[3.5px]"></div>
      <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -top-[3.5px]"></div>
      <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -left-[3.5px] -bottom-[3.5px]"></div>
      <div className="h-1.5 bg-[#feb995] p-0 m-0 absolute aspect-square rotate-45 -right-[3.5px] -bottom-[3.5px]"></div>
    </>
  );
};

const toTop = {
  mask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toBottom = {
  mask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};

const toLeft = {
  mask: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};
const toRight = {
  mask: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(270deg, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
};
const toTopLeft = {
  mask: "linear-gradient(150deg, rgba(0,0,0,0) 50%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(150deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
};
const toTopRight = {
  mask: "linear-gradient(210deg, rgba(0,0,0,0) 50%, rgba(,0,0,1) 100%)",
  WebkitMask: "linear-gradient(210deg, rgba(0,0,0,0) 50%, rgba(0,0,0,1) 100%)",
};

const tubLight = {
  mask: "linear-gradient(90deg,rgba(0,0,0,0) 0%, rgb(0,0,0) 50%,rgba(0,0,0,0) 100%)",
  WebkitMask:
    "linear-gradient(90deg,rgba(0,0,0,0) 0%, rgb(0,0,0) 50%,rgba(0,0,0,0) 100%)",
};

// #ffaa6e
// use https://github.com/tsparticles/react#readme for particles

const Hero = () => {
  return (
    <div className="grid grid-cols-8 sm:grid-cols-12 p-4 pt-16 text-center items-center bg-black text-[#ffcec2]">
      <div className="col-span-12  flex justify-center">
        <div className="bg-orange-300 w-[316px] h-1" style={tubLight}></div>
      </div>
      {/* 1st row */}
      <div
        className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r "
        style={toTopLeft}
      >
        {/* 1 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 2 */}
      </div>
      <div
        className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-b border-l border-r relative 
        "
        style={toTop}
      >
        {/* 3 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 4 */}
      </div>
      <div
        className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l border-b"
        style={toTopRight}
      >
        {/* 5 */}
      </div>
      {/* 2nd row */}
      <div
        className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r"
        style={toLeft}
      >
        {/* 6 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 7 */}
      </div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16  border-white border-opacity-10 border-b border-l border-r flex items-center justify-center">
        <p className="text-lg">Hi there, I&apos;m </p>
        {/* 8 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 9 */}
      </div>
      <div
        className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l border-b"
        style={toRight}
      >
        {/* 10 */}
      </div>
      {/* 3rd row */}
      <div
        className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-b border-r"
        style={toLeft}
      >
        {/* 11 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 12 */}
      </div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16  border-white border-opacity-10 border-b border-l border-r relative flex items-start justify-center p-4">
        <Stars />
        <p className="text-[132px] ">Mones</p>
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 14 */}
      </div>
      <div
        className="hidden sm:block col-span-2 h-full border-l border-white border-opacity-10 border-b"
        style={toRight}
      >
        {/* 15 */}
      </div>
      {/* 4th row */}
      <div
        className="hidden sm:block h-full col-span-2 border-b border-white border-opacity-10 border-r"
        style={toLeft}
      >
        {/* 16 */}
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 17 */}
      </div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10  border-b border-l border-r relative flex justify-center py-4 px-8">
        <Stars />
        <p className=" text-lg font-extralight">
          I am a Senior Software Engineer with 9+ years of experience in
          JavaScript, React, Node.js, and API development, delivering scalable
          and efficient solutions.
        </p>
      </div>
      <div className="hidden sm:block h-full border-white border-opacity-10 border-b">
        {/* 19 */}
      </div>
      <div
        className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-b border-l"
        style={toRight}
      >
        {/* 20 */}
      </div>
      {/* 5th row */}
      <div
        className="hidden sm:block h-full col-span-2 border-white border-opacity-10 border-r"
        style={toBottom}
      >
        {/* 21 */}
      </div>
      <div className="hidden sm:block h-full">{/* 22 */}</div>
      <div
        className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 h-full min-h-16 border-white border-opacity-10 border-l border-r flex items-start justify-center gap-2 px-2 pt-4 pb-8"
        style={toBottom}
      >
        <button
          className="px-6 py-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full 
        relative overflow-hidden group transition-all duration-300 boder border-yellow-500 shadow-sm hover:scale-105"
        >
          <div className="absolute inset-0 bg-black opacity-75 group-hover:opacity-75" />

          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 " />
          <span className="relative z-10 text-white font-medium">
            Download CV
          </span>
        </button>
      </div>
      <div className="hidden sm:block h-full">{/* 24 */}</div>
      <div
        className="hidden sm:block col-span-2 h-full border-white border-opacity-10 border-l"
        style={toBottom}
      >
        {/* 25 */}
      </div>
    </div>
  );
};

export default Hero;
