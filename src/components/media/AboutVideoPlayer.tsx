"use client";

import React, { useState, useRef } from "react";
import { Play, Pause, Video, Sparkles, Volume2 } from "lucide-react";

interface AboutVideoPlayerProps {
  className?: string;
}

export function AboutVideoPlayer({ className = "" }: AboutVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasError, setHasError] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-800 bg-[#090d15] shadow-2xl group ${className}`}>
      {/* Top Video Header Pill */}
      <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-xs font-semibold text-white">
          <span className="w-2 h-2 rounded-full bg-[#e61f23] animate-ping" />
          <span>About Red Cloud Video</span>
        </div>
        <div className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-slate-300">
          /assets/about-video.mp4
        </div>
      </div>

      {/* Video Element */}
      <div className="relative aspect-video w-full bg-slate-950 flex items-center justify-center">
        <video
          ref={videoRef}
          src="/assets/about-video.mp4"
          className="w-full h-full object-cover"
          playsInline
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={() => setHasError(true)}
        >
          Your browser does not support the video tag.
        </video>

        {/* Fallback if user hasn't dropped about-video.mp4 yet */}
        {hasError && (
          <div className="absolute inset-0 bg-[#0a0e18]/95 p-6 flex flex-col items-center justify-center text-center space-y-3 z-10">
            <div className="w-12 h-12 rounded-2xl bg-[#e61f23]/15 border border-[#e61f23]/30 flex items-center justify-center text-[#e61f23]">
              <Video className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">
                Corporate Video Ready
              </h4>
              <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
                Place your video file named <strong className="text-white">about-video.mp4</strong> inside <code className="text-[#e61f23] bg-black/50 px-1.5 py-0.5 rounded">public/assets/</code> and it will play here automatically.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Subtitle / Info */}
      <div className="p-4 bg-[#0e1320] border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-300">
        <div className="flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-[#e61f23]" />
          <span>Red Cloud ICT Solutions Overview</span>
        </div>
        <span className="text-[11px] text-slate-400">Ethiopian IT Park Hub</span>
      </div>
    </div>
  );
}
