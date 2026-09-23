"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MoveDown } from "lucide-react";

const VIDEO_ID = "GsPvopOOyBs";

export const MovieIntro: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  // Map the entire 160vh journey to progress so the zoom is slow and elegant.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "start end"],
  });

  // Heading enlarges as the user scrolls, then fades out (movie title effect).
  const titleScale = useTransform(scrollYProgress, [0, 0.75], [1, 1.9]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.68], [1, 1, 0]);
  const layerOpacity = useTransform(
    scrollYProgress,
    [0, 0.55, 0.85],
    [1, 1, 0]
  );
  const hintOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[160vh] z-[45] pointer-events-none select-none"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-background">
        {/* YouTube galaxy background, full-bleed */}
        <motion.div
          style={{ opacity: layerOpacity }}
          className="absolute inset-0"
        >
          <iframe
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,calc(100vh*16/9))] h-[max(100vh,calc(100vw*9/16))] border-0"
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${VIDEO_ID}&modestbranding=1&rel=0&playsinline=1&iv_load_policy=3&disablekb=1&fs=0`}
            title="Galaxy motion background"
            allow="autoplay; picture-in-picture; fullscreen"
            allowFullScreen
            tabIndex={-1}
          />

          {/* Legibility + cinematic overlays */}
          <div className="absolute inset-0 bg-background/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-transparent to-background/85" />
        </motion.div>

        {/* Center Movie Title */}
        <motion.div
          style={{ scale: titleScale, opacity: titleOpacity }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
        >
          <h1 className="font-sans font-black uppercase text-[clamp(2.8rem,13vw,11rem)] leading-[0.85] tracking-tighter text-foreground">
            Modern <span className="text-accent">Gym</span>
          </h1>
          <p className="mt-5 md:mt-8 font-mono text-[10px] md:text-sm uppercase tracking-[0.45em] text-muted-foreground">
            WHERE&nbsp;
            <span className="text-accent">•</span>
            &nbsp;LEGENDS TRAIN
          </p>
        </motion.div>

        {/* Scroll Hint */}
        <motion.div
          style={{ opacity: hintOpacity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="px-4 py-2 bg-accent text-black text-xs font-mono font-bold uppercase tracking-widest border-2 border-black">
            SCROLL TO ENTER
          </span>
          <MoveDown className="w-5 h-5 text-accent stroke-[2.5] animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};