"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
  duration?: number;
}

export function AnimatedCounter({ value, className = "", duration = 1.8 }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const shouldReduceMotion = useReducedMotion();
  const isInView = useInView(ref, { once: true, margin: "0px 0px -20px 0px" });
  const [displayValue, setDisplayValue] = useState(() => (shouldReduceMotion ? value : "0"));

  useEffect(() => {
    if (shouldReduceMotion) {
      setDisplayValue(value);
      return;
    }

    if (!isInView) return;

    const match = value.match(/(\d+)(.*)/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const targetNumber = parseInt(match[1], 10);
    const suffix = match[2] || "";

    const startTime = performance.now();
    const durationMs = duration * 1000;

    const easeOutExpo = (x: number): number => {
      return x === 1 ? 1 : 1 - Math.pow(2, -10 * x);
    };

    let animationFrameId: number;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / durationMs, 1);
      const easedProgress = easeOutExpo(progress);

      const current = Math.floor(easedProgress * targetNumber);
      setDisplayValue(`${current.toLocaleString()}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCounter);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCounter);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [isInView, value, duration, shouldReduceMotion]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDisplayValue(value);
    }, 2500);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {displayValue}
    </span>
  );
}
