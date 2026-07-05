"use client";

import { ReactNode, Children } from "react";
import { motion, Variants } from "framer-motion";

interface AnimeRevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "fade" | "none";
  duration?: number;
  delay?: number;
  distance?: number;
  stagger?: number; // stagger delay in ms (e.g. 50ms)
  triggerOnce?: boolean;
  className?: string;
}

export default function AnimeReveal({
  children,
  direction = "fade",
  duration = 500, // Aligned default to 0.5s (500ms) matching vbworld-fe
  delay = 0,
  distance = 20, // Aligned default to 20px matching vbworld-fe
  stagger: staggerVal = 0,
  triggerOnce = true,
  className = "",
}: AnimeRevealProps) {
  // Calculate initial position matching vbworld-fe physics
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "fade":
      case "none":
        return { x: 0, y: 0 };
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  // Single element animation settings
  const singleVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialPosition,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration / 1000,
        delay: delay / 1000,
        ease: "easeOut", // Aligned easing exactly to vbworld-fe
      },
    },
  };

  // Stagger / Grid animation settings
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerVal / 1000,
        delayChildren: delay / 1000,
      },
    },
  };

  const childVariants: Variants = {
    hidden: {
      opacity: 0,
      ...initialPosition,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: duration / 1000,
        ease: "easeOut",
      },
    },
  };

  // If we have stagger set, we wrap each child in a motion component
  if (staggerVal > 0) {
    const arrayChildren = Children.toArray(children);

    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: triggerOnce, amount: 0.05, margin: "0px 0px -30px 0px" }}
        className={className}
        style={{ display: "contents" }}
      >
        {arrayChildren.map((child, idx) => (
          <motion.div key={idx} variants={childVariants} style={{ display: "contents" }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    );
  }

  // Otherwise, animate the wrapper as a single unit
  return (
    <motion.div
      variants={singleVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: triggerOnce, amount: 0.05, margin: "0px 0px -30px 0px" }}
      className={className}
      style={{ display: "contents" }}
    >
      {children}
    </motion.div>
  );
}
