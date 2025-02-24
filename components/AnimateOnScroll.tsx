"use client";
import React, { useEffect, useRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type AnimationDirection = "up" | "down" | "left" | "right";
type AnimationTiming = "fast" | "normal" | "slow";

interface AnimateOnScrollProps {
  children: ReactNode;
  direction?: AnimationDirection;
  timing?: AnimationTiming;
  className?: string;
  threshold?: number;
  once?: boolean;
  id?: string;
}

const timingMap = {
  fast: "duration-500",
  normal: "duration-700",
  slow: "duration-1000",
};

const translateMap = {
  up: "translate-y-16",
  down: "-translate-y-16",
  left: "translate-x-16",
  right: "-translate-x-16",
};

export const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  direction = "up",
  timing = "normal",
  className = "",
  threshold = 0.1,
  once = true,
  id = "",
}) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!elementRef.current) return;

          if (entry.isIntersecting) {
            elementRef.current.classList.add("opacity-100");
            elementRef.current.classList.remove("opacity-0");
            elementRef.current.classList.remove(translateMap[direction]);

            if (once) {
              hasAnimated.current = true;
              observer.unobserve(entry.target);
            }
          } else if (!once && !hasAnimated.current) {
            elementRef.current.classList.add("opacity-0");
            elementRef.current.classList.add(translateMap[direction]);
            elementRef.current.classList.remove("opacity-100");
          }
        });
      },
      {
        threshold,
        root: null,
        rootMargin: "0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement && !hasAnimated.current) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [direction, threshold, once]);

  const baseClasses = twMerge(
    "transition-all transform",
    timingMap[timing],
    translateMap[direction],
    "opacity-0",
    className
  );

  return (
    <div ref={elementRef} className={baseClasses} id={id}>
      {children}
    </div>
  );
};
