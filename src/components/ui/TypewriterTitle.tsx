"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTitleProps {
  prefix?: string;
  highlight?: string;
  speed?: number;
  delay?: number;
}

export function TypewriterTitle({
  prefix = "Take Your Business ",
  highlight = "Online",
  speed = 65,
  delay = 200,
}: TypewriterTitleProps) {
  const fullText = prefix + highlight;
  const [displayedCount, setDisplayedCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        setDisplayedCount(current);
        if (current >= fullText.length) {
          clearInterval(interval);
          setIsComplete(true);
        }
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [fullText.length, speed, delay]);

  const prefixPart = prefix.slice(0, Math.min(displayedCount, prefix.length));
  const highlightPart =
    displayedCount > prefix.length
      ? highlight.slice(0, displayedCount - prefix.length)
      : "";

  return (
    <h1
      className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-gray-950 leading-[1.12] sm:leading-[1.08] break-words"
      aria-label={`${prefix}${highlight}`}
    >
      <span aria-hidden="true">
        <span>{prefixPart}</span>
        {displayedCount > prefix.length && (
          <span className="relative inline-block text-[#e61f23]">
            {highlightPart}
            {isComplete && (
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 -bottom-1 w-full h-1.5 bg-[#e61f23]/25 rounded-full origin-left"
              />
            )}
          </span>
        )}
        <motion.span
          animate={{ opacity: [1, 0, 1] }}
          transition={{ repeat: Infinity, duration: 0.75, ease: "linear" }}
          className="inline-block w-1 sm:w-1.5 h-[0.8em] bg-[#e61f23] ml-1.5 rounded-xs"
          style={{ verticalAlign: "-0.05em" }}
        />
      </span>
    </h1>
  );
}
