"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  animationClass?: string; // e.g. "fadeUp", "slideInLeft", "slideInRight", "scaleIn"
  delayClass?: string;     // e.g. "stagger-1", "stagger-2", etc.
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function ScrollReveal({
  children,
  animationClass = "fadeUp",
  delayClass = "",
  threshold = 0.1,
  rootMargin = "0px 0px -80px 0px",
  className = "",
}: ScrollRevealProps) {
  const [isRevealed, setIsRevealed] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, rootMargin]);

  return (
    <div
      ref={elementRef}
      className={`${className} ${
        isRevealed ? `${animationClass} ${delayClass}` : "reveal-hidden"
      }`}
      style={{
        // Maintain layout before animating
        width: "100%",
        display: "contents",
      }}
    >
      {children}
    </div>
  );
}
