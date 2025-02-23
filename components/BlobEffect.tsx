"use client";
import React, { useEffect, useRef } from "react";

const BlobEffect = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      blobRef.current?.animate(
        {
          left: `${clientX}px`,
          top: `${clientY}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <>
      <div className="blob-container">
        <div ref={blobRef} className="blob" />
        <div className="blur" />
      </div>

      <style jsx>{`
        .blob-container {
          position: fixed;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .blob {
          background-color: white;
          height: 34vmax;
          aspect-ratio: 1;
          position: absolute;
          left: 50%;
          top: 50%;
          translate: -50% -50%;
          border-radius: 50%;
          background: linear-gradient(to right, #e81cff, #ff0f7b);
          opacity: 0.1;
          animation: rotate 20s infinite;
        }

        .blur {
          height: 100%;
          width: 100%;
          position: absolute;
          z-index: 1;
          backdrop-filter: blur(12vmax);
        }

        @keyframes rotate {
          from {
            rotate: 0deg;
          }

          50% {
            scale: 1 1.5;
          }

          to {
            rotate: 360deg;
          }
        }
      `}</style>
    </>
  );
};

export default BlobEffect;
