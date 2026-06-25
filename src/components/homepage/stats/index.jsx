import React, { useEffect, useState, useRef } from "react";
import { statsData } from "@/utils/data/stats-data";

function CountUp({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime = null;
    let animationFrame;
    
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      
      // Calculate current value based on progress and duration
      // Using an ease-out timing function
      const percentage = Math.min(progress / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - percentage, 4);
      
      const currentCount = end * easeOutQuart;
      
      // If the number has decimals, keep 1 decimal place, otherwise format as integer
      if (end % 1 !== 0) {
        setCount(parseFloat(currentCount.toFixed(1)));
      } else {
        setCount(Math.floor(currentCount));
      }
      
      if (progress < duration) {
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return (
    <span ref={countRef}>
      {count}{suffix}
    </span>
  );
}

function StatsSection() {
  return (
    <div id="stats" className="relative z-50 my-12 lg:my-20">
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent w-full" />
        </div>
      </div>
      
      <div className="w-full max-w-7xl mx-auto px-4 mt-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {statsData.map((stat) => (
            <div 
              key={stat.id} 
              className="flex flex-col items-center justify-center p-6 rounded-xl bg-[#0a0d37]/50 border border-[#1b2c68a0] shadow-[0_0_15px_rgba(22,242,179,0.1)] transition-all duration-300 hover:border-[#16f2b3] hover:shadow-[0_0_30px_rgba(22,242,179,0.3)] hover:-translate-y-1"
            >
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#16f2b3] to-cyan-400 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium uppercase tracking-wider text-center">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StatsSection;
