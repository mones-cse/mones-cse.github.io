import React, { useState, useEffect } from 'react';

const BlinkingLight = () => {
  return (
    <div className="w-[650px] h-z[327px] top-0 absolute blur-[19px]">
      <img
        src="/light.svg"
        alt="Light"
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