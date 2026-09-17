"use client";

import React, { useState, useRef, useEffect } from "react";
import { Video } from "lucide-react";

interface AboutVideoPlayerProps {
  className?: string;
}

export function AboutVideoPlayer({ className = "" }: AboutVideoPlayerProps) {
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted until user interacts, but muted usually succeeds
      });
    }
  }, []);

  return (
    <div className={`relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden bg-white ${className}`}>
      {/* Autoplay Looping Video without controls, text overlay, or cropping */}
      {!hasError ? (
        <video
          ref={videoRef}
          src="/assets/about_vid.mp4"
          className="w-full h-full object-contain bg-white"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          onError={() => setHasError(true)}
        />
      ) : (
        /* Clean white placeholder when video fails to load */
        <div className="w-full h-full min-h-[360px] bg-white flex items-center justify-center">
          <div className="relative flex items-center justify-center">
            {/* Ambient pulsing ring */}
            <div className="w-24 h-24 rounded-full bg-[#e61f23]/10 animate-ping absolute" />
            <div className="w-20 h-20 rounded-full bg-red-50 flex items-center justify-center border border-[#e61f23]/30 relative z-10">
              <Video className="w-10 h-10 text-[#e61f23]" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
