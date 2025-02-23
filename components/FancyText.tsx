"use client";
import React, { useEffect, useRef } from "react";

interface FancyTextProps {
  children: string;
  className?: string;
}

const FancyText: React.FC<FancyTextProps> = ({ children, className = "" }) => {
  const letters = children.split("");
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  // Create ref callback function
  const setLetterRef = (index: number) => (el: HTMLSpanElement | null) => {
    letterRefs.current[index] = el;
  };

  useEffect(() => {
    // Apply random delays only after initial render on client
    letterRefs.current.forEach((letterEl) => {
      if (letterEl) {
        const innerSpan = letterEl.querySelector(".inner") as HTMLSpanElement;
        if (innerSpan) {
          const randomDelay = Math.floor(Math.random() * -5000);
          innerSpan.style.animationDelay = `${randomDelay}ms`;
        }
      }
    });
  }, []);

  return (
    <div className={`grid place-items-center ${className}`}>
      <div className="line relative">
        <p className="word fancy font-sans m-0  transition-opacity duration-250 ease-in-out">
          {letters.map((letter, index) => (
            <span
              key={index}
              ref={setLetterRef(index)}
              className="outer inline-block"
              style={{ transition: "transform 350ms ease" }}
            >
              <span className="inner inline-block">
                <span
                  className="letter inline-block"
                  style={{ animationDelay: `${index * 1000}ms` }}
                >
                  {letter}
                </span>
              </span>
            </span>
          ))}
        </p>
        <style jsx>{`
          @keyframes float {
            from,
            to {
              transform: translateY(-0%);
            }
            50% {
              transform: translateY(-3%);
            }
          }

          @keyframes background-pan {
            from {
              background-position: 1000% center;
            }
            to {
              background-position: 0% center;
            }
          }

          .fancy:hover > .outer {
            transition-duration: 800ms;
          }

          .fancy:hover > .outer > .inner {
            animation: float 5s ease infinite;
          }

          .fancy > .outer > .inner > .letter {
            background: linear-gradient(
              to right,
              #ffcec2,
              #ef4444,
              #f97316,
              #ffcec2
            );
            background-size: 1000%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: background-pan 150s linear infinite;
          }

          .fancy:hover > .outer:nth-child(1) {
            transform: translate(-50%, 20%) rotate(8deg);
          }
          .fancy:hover > .outer:nth-child(2) {
            transform: translate(-40%, -20%) rotate(4deg);
          }
          .fancy:hover > .outer:nth-child(3) {
            transform: translate(-10%, 30%) rotate(-6deg);
          }
          .fancy:hover > .outer:nth-child(4) {
            transform: translate(0%, -20%) rotate(-8deg);
          }
          .fancy:hover > .outer:nth-child(5) {
            transform: translate(40%, 25%) rotate(25deg);
          }
          .fancy:hover > .outer:nth-child(6) {
            transform: translate(50%, -20%) rotate(-3deg);
          }
          .fancy:hover > .outer:nth-child(7) {
            transform: translate(250%, 30%) rotate(14deg);
          }
          .fancy:hover > .outer:nth-child(8) {
            transform: translate(0%, 15%) rotate(10deg);
          }
          .fancy:hover > .outer:nth-child(9) {
            transform: translate(0%, -50%) rotate(8deg);
          }
          .fancy:hover > .outer:nth-child(10) {
            transform: translate(0%, 15%) rotate(-6deg);
          }
          .fancy:hover > .outer:nth-child(11) {
            transform: translate(50%, -10%) rotate(-3deg);
          }
          .fancy:hover > .outer:nth-child(12) {
            transform: translate(120%, -30%) rotate(-10deg);
          }
        `}</style>
      </div>
    </div>
  );
};

export default FancyText;
