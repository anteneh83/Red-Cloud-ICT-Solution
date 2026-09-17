import React from "react";
import Link from "next/link";

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", showSubtitle = true, size = "md" }: LogoProps) {
  const iconSizes = {
    sm: "w-7 h-7",
    md: "w-9 h-9",
    lg: "w-11 h-11",
  };

  const titleSizes = {
    sm: "text-base tracking-wider",
    md: "text-lg tracking-wider",
    lg: "text-2xl tracking-wider",
  };

  return (
    <Link href="/" className={`group inline-flex items-center gap-3 focus:outline-none ${className}`} aria-label="Red Cloud ICT Solutions Home">
      {/* Brand Icon */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-lg bg-gradient-to-br from-[#E50914]/20 via-[#E50914]/10 to-transparent border border-[#E50914]/30 group-hover:border-[#E50914]/60 transition-all duration-300`}>
        <svg
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5/6 h-5/6 text-[#E50914] group-hover:scale-105 transition-transform duration-300"
        >
          {/* Cloud Outline & Network Nodes */}
          <path
            d="M9.5 25.5H25C28.5899 25.5 31.5 22.5899 31.5 19C31.5 15.5414 28.7958 12.7153 25.3855 12.5188C24.4988 8.16781 20.6409 5 16 5C10.7423 5 6.42587 9.0069 6.03154 14.148C3.71448 15.1147 2 17.3879 2 20C2 23.3137 4.68629 26 8 26"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Internal Circuit Line */}
          <circle cx="13" cy="18" r="2" fill="#E50914" />
          <circle cx="23" cy="18" r="2" fill="#FFFFFF" />
          <path d="M15 18H21" stroke="#FFFFFF" strokeWidth="1.5" strokeDasharray="1.5 1.5" />
          {/* Data packet dot */}
          <circle cx="21" cy="14" r="1" fill="#E50914" />
        </svg>
      </div>

      {/* Brand Name Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 font-bold">
          <span className={`font-black text-white ${titleSizes[size]}`}>RED</span>
          <span className={`font-light text-[#E50914] ${titleSizes[size]}`}>CLOUD</span>
        </div>
        {showSubtitle && (
          <span className="text-[9px] uppercase font-semibold tracking-[0.24em] text-slate-400">
            ICT SOLUTIONS PLC
          </span>
        )}
      </div>
    </Link>
  );
}
