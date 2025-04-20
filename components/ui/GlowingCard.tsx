"use client";
import { useRef, useCallback } from "react";

interface GlowingCardProps {
  children: React.ReactNode;
  className?: string;
  glowIntensity?: "low" | "medium" | "high";
  glowColor?: string;
  bgColor?: string;
  borderColor?: string;
  onClick?: () => void;
}

const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className = "",
  glowIntensity = "medium",
  glowColor = "rgba(255,255,255,0.4)",
  bgColor = "rgb(23,23,23)",
  borderColor = "rgb(75,75,75)",
  onClick,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  console.log("onClick", onClick);
  // Intensity configuration based on prop
  const intensityConfig = {
    low: { outer: "600px", inner: "800px", opacity: "0.05" },
    medium: { outer: "600px", inner: "800px", opacity: "0.4" },
    high: { outer: "700px", inner: "900px", opacity: "0.6" },
  };

  const { outer, inner, opacity } = intensityConfig[glowIntensity];

  // Memoized mouse move handler
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Use requestAnimationFrame for performance optimization
    requestAnimationFrame(() => {
      cardRef.current?.style.setProperty("--mouse-x", `${x}px`);
      cardRef.current?.style.setProperty("--mouse-y", `${y}px`);
    });
  }, []);

  // Colors with opacity for glows
  const innerGlowColor = glowColor.replace(/[^,]+(?=\))/, opacity);
  const outerGlowColor = glowColor.replace(/[^,]+(?=\))/, "0.08");

  return (
    <div
      ref={cardRef}
      className={`
        relative p-[0.3px] w-auto h-full cursor-pointer rounded-lg 
        bg-opacity-10 transition-transform duration-300
        before:absolute before:left-0 before:top-0 before:w-full 
        before:h-full before:rounded-lg before:opacity-0 before:transition-opacity 
        before:duration-500 before:z-[3] 
        after:absolute after:left-0 after:top-0 after:w-full after:h-full after:rounded-lg 
        after:opacity-0 after:transition-opacity after:duration-500 after:z-[1] 
        hover:before:opacity-100 hover:after:opacity-100 hover:scale-[1.02]
        border ${className}
      `}
      style={
        {
          "--inner-glow-size": inner,
          "--outer-glow-size": outer,
          "--inner-glow-color": innerGlowColor,
          "--outer-glow-color": outerGlowColor,
          borderColor: borderColor,
          // Using style to set dynamic values that can't be done with Tailwind classes
          "--before-bg": `radial-gradient(var(--outer-glow-size) circle at var(--mouse-x) var(--mouse-y), ${outerGlowColor}, transparent 40%)`,
          "--after-bg": `radial-gradient(var(--inner-glow-size) circle at var(--mouse-x) var(--mouse-y), ${innerGlowColor}, transparent 40%)`,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onClick={onClick}
    >
      <div
        className={`
          relative w-full h-full rounded-lg p-3 md:p-4 z-[2] 
          transition-all duration-300
        `}
        style={{ backgroundColor: bgColor }}
      >
        {children}
      </div>

      {/* Use pseudo elements with CSS variables for the glows */}
      <style jsx>{`
        div:before {
          background: var(--before-bg);
        }
        div:after {
          background: var(--after-bg);
        }
      `}</style>
    </div>
  );
};

export default GlowingCard;
