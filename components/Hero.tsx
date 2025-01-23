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

const BottomToTopFromRight = () => (
  <div className="absolute bottom-0 right-0 w-[1px] h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
);
const BottomToTopFromLeft = () => (
  <div className="absolute bottom-0 left-0 w-[1px] h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
);

const RightToLeftFromBottom = () => (
  <div className="absolute bottom-0 right-0 h-[1px] w-full bg-gradient-to-l from-gray-300 to-transparent"></div>
);

const LeftToRightFromBottom = () => (
  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-gray-300 to-transparent"></div>
);

const TopToBottomFromRight = () => (
  <div className="absolute top-0 right-0 w-[1px] h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
);

const TopToBottomFromLeft = () => (
  <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
);

const Hero = () => {
  return (
    <div className="grid grid-cols-8 sm:grid-cols-12 p-4 pt-20 text-center items-center bg-gray-900 text-white">
      {/* 1st row */}
      <div className="hidden sm:block h-full relative col-span-2">
        <BottomToTopFromRight />
        <RightToLeftFromBottom />1
      </div>
      <div className="hidden sm:block border-b h-full border-gray-300">2</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 border-b relative h-16">
        <BottomToTopFromRight />
        <BottomToTopFromLeft />
        Light
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">4</div>
      <div className="hidden sm:block relative h-full col-span-2">
        <BottomToTopFromLeft />
        <LeftToRightFromBottom />5
      </div>
      {/* 2nd row */}
      <div className="hidden sm:block border-r border-gray-300 relative h-full col-span-2">
        <RightToLeftFromBottom />6
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">7</div>
      <div className="col-start-2 col-span-6  h-12 sm:col-start-0 sm:col-span-6 border-b border-r border-l relative flex items-center justify-center">
        <p className="text-xl">Hi there, I&apos;m </p>
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">9</div>
      <div className="hidden sm:block border-l border-gray-300 relative h-full col-span-2">
        <LeftToRightFromBottom />
        10
      </div>
      {/* 3rd row */}
      <div className="hidden sm:block border-r border-gray-300 relative h-full col-span-2">
        <RightToLeftFromBottom />
        11
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">12</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 border-b border-r border-l relative h-full p-5">
        <Stars />
        <p className="text-8xl">Mones</p>
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">14</div>
      <div className="hidden sm:block border-l border-gray-300 relative h-full col-span-2">
        <LeftToRightFromBottom />
        15
      </div>
      {/* 4th row */}
      <div className="hidden sm:block border-r border-gray-300 relative h-full col-span-2">
        <RightToLeftFromBottom />
        16
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">17</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 border-b border-r border-l relative flex text-center items-center justify-center p-5">
        <Stars />
        <p className="max-w-80">
          I am a Senior Software Engineer with 9+ years of experience in
          JavaScript, React, Node.js, and API development, delivering scalable
          and efficient solutions.
        </p>
      </div>
      <div className="hidden sm:block border-b border-gray-300 h-full">19</div>
      <div className="hidden sm:block border-l border-gray-300 relative h-full col-span-2">
        <LeftToRightFromBottom />
        20
      </div>
      {/* 5th row */}
      <div className="hidden sm:block relative col-span-2 h-full">
        <TopToBottomFromRight />
        21
      </div>
      <div className="hidden sm:block ">22</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-6 relative flex justify-center gap-2 px-2 py-2">
        <TopToBottomFromLeft />
        <TopToBottomFromRight />
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Contact
        </button>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Resume
        </button>
      </div>
      <div className="hidden sm:block">24</div>
      <div className="hidden sm:block relative h-full">
        <TopToBottomFromLeft />
        25
      </div>
    </div>
  );
};

export default Hero;
