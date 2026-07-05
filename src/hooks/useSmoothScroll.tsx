"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const useSmoothScroll = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // Reduced slightly from 3.0 to make it feel responsive while maintaining smooth inertia
      easing: (t) => 1 - Math.pow(1 - t, 4),
      touchMultiplier: 1.2,
    });

    let rafId: number;

    const handleRaf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(handleRaf);
    };

    rafId = requestAnimationFrame(handleRaf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
};

export default useSmoothScroll;
