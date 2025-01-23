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
  <div className="absolute bottom-0 right-0 w-[.5px] h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
);
const BottomToTopFromLeft = () => (
  <div className="absolute bottom-0 left-0 w-[.5px] h-full bg-gradient-to-t from-gray-300 to-transparent"></div>
);

const RightToLeftFromBottom = () => (
  <div className="absolute bottom-0 right-0 h-[.5px] w-full bg-gradient-to-l from-gray-300 to-transparent"></div>
);

const LeftToRightFromBottom = () => (
  <div className="absolute bottom-0 left-0 h-[.5px] w-full bg-gradient-to-r from-gray-300 to-transparent"></div>
);

const TopToBottomFromRight = () => (
  <div className="absolute top-0 right-0 w-[.5px] h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
);

const TopToBottomFromLeft = () => (
  <div className="absolute top-0 left-0 w-[.5px] h-full bg-gradient-to-b from-gray-300 to-transparent"></div>
);

const Hero = () => {
  return (
    <div className="grid grid-cols-8 sm:grid-cols-12 p-4 pt-20 text-center items-center bg-gray-900 text-white">
      {/* 1st row */}
      <div className="hidden sm:block  relative">
        <BottomToTopFromRight />
        <RightToLeftFromBottom />1
      </div>
      <div className="hidden sm:block border-b border-gray-300">2</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-8 border-b relative">
        <BottomToTopFromRight />
        <BottomToTopFromLeft />3
      </div>
      <div className="hidden sm:block border-b border-gray-300 ">4</div>
      <div className="hidden sm:block relative">
        <BottomToTopFromLeft />
        <LeftToRightFromBottom />5
      </div>
      {/* 2nd row */}
      <div className="hidden sm:block border-r border-gray-300 relative">
        <RightToLeftFromBottom />6
      </div>
      <div className="hidden sm:block border-b border-gray-300">7</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-8 border-b border-r border-l relative">
        8
      </div>
      <div className="hidden sm:block border-b border-gray-300 ">9</div>
      <div className="hidden sm:block border-l border-gray-300 relative">
        <LeftToRightFromBottom />
        10
      </div>
      {/* 3rd row */}
      <div className="hidden sm:block border-r border-gray-300 relative">
        <RightToLeftFromBottom />
        11
      </div>
      <div className="hidden sm:block border-b border-gray-300">12</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-8 border-b border-r border-l relative">
        <Stars />
        13
      </div>
      <div className="hidden sm:block border-b border-gray-300 ">14</div>
      <div className="hidden sm:block border-l border-gray-300 relative">
        <LeftToRightFromBottom />
        15
      </div>
      {/* 4th row */}
      <div className="hidden sm:block border-r border-gray-300 relative">
        <RightToLeftFromBottom />
        16
      </div>
      <div className="hidden sm:block border-b border-gray-300">17</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-8 border-b border-r border-l relative">
        <Stars />
        18
      </div>
      <div className="hidden sm:block border-b border-gray-300 ">19</div>
      <div className="hidden sm:block border-l border-gray-300 relative">
        <LeftToRightFromBottom />
        20
      </div>
      {/* 5th row */}
      <div className="hidden sm:block relative">
        <TopToBottomFromRight />
        21
      </div>
      <div className="hidden sm:block ">22</div>
      <div className="col-start-2 col-span-6 sm:col-start-0 sm:col-span-8 relative">
        <TopToBottomFromLeft />
        <TopToBottomFromRight />
        23
      </div>
      <div className="hidden sm:block ">24</div>
      <div className="hidden sm:block relative">
        <TopToBottomFromLeft />
        25
      </div>
    </div>
  );
};

export default Hero;
