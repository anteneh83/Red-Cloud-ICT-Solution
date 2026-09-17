import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ className = "", size = "md" }: LogoProps) {
  const heights = {
    sm: "h-8",
    md: "h-10 sm:h-11",
    lg: "h-12 sm:h-14",
  };

  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 focus:outline-none ${className}`}
      aria-label="Red Cloud ICT Solutions Home"
    >
      <div className="relative flex items-center bg-white/95 px-2.5 py-1 rounded-xl shadow-md group-hover:shadow-red-500/20 group-hover:bg-white transition-all duration-300 border border-white/40">
        <Image
          src="/assets/logo.png"
          alt="Red Cloud ICT Solutions PLC"
          width={220}
          height={60}
          className={`${heights[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
          priority
        />
      </div>
    </Link>
  );
}
