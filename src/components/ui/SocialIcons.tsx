"use client";

import React from "react";
import { companyData } from "@/data/company";

interface SocialIconsProps {
  className?: string;
  variant?: "default" | "minimal" | "pill";
  iconSize?: string;
}

export function SocialIcons({
  className = "",
  variant = "default",
  iconSize = "w-4 h-4",
}: SocialIconsProps) {
  const socials = [
    {
      name: "LinkedIn",
      href: companyData.social.linkedin,
      icon: (
        <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Telegram",
      href: companyData.social.telegram,
      icon: (
        <svg className={iconSize} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.643-.204-.657-.643.136-.953l11.57-4.461c.537-.194 1.006.131.828.922z" />
        </svg>
      ),
    },
  ].filter((s) => Boolean(s.href));

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Follow Red Cloud on ${item.name}`}
          className="w-9 h-9 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-[#e61f23] hover:border-[#e61f23] hover:bg-red-50/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-red-500/10 transition-all duration-200 flex items-center justify-center group"
          title={item.name}
        >
          <span className="transition-transform duration-200 group-hover:scale-110">
            {item.icon}
          </span>
        </a>
      ))}
    </div>
  );
}
