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
    md: "h-10 sm:h-12",
    lg: "h-14 sm:h-16",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 focus:outline-none ${className}`}
      aria-label="Red Cloud ICT Solutions Home"
    >
      <div className="relative flex items-center">
        <Image
          src="/assets/logo.png"
          alt="Red Cloud ICT Solutions PLC"
          width={260}
          height={75}
          className={`${heights[size]} w-auto object-contain mix-blend-multiply`}
          priority
        />
      </div>
    </Link>
  );
}
