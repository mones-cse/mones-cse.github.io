"use client"
import Image from "next/image";
const BlinkingLight = () => {

  return (
    <div className="w-full  top-0 absolute blur-[19px] flex items-center justify-center">
      <Image
        src="/light.svg"
        alt="Light"
        width={0}
        height={0}
        className={`w-full max-w-2xl h-80 blur-lg animate-tubelight 
          
        `}
      />
      <style jsx global>{`
        @keyframes tubelight {
          0% { opacity: 0; }
          5% { opacity: 1; }
          10% { opacity: 0.3; }
          15% { opacity: 1; }
          40% { opacity: 0; }
          50% { opacity: 0; }
          60% { opacity: 1; }
          70% { opacity: 1; }
          100% { opacity: 1; }
        }
        
        .animate-tubelight {
          animation: tubelight 3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default BlinkingLight;