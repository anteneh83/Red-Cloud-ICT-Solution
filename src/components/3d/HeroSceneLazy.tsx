"use client";

import dynamic from "next/dynamic";
import { HeroFallback } from "./HeroFallback";

export const HeroSceneLazy = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => <HeroFallback />,
});
