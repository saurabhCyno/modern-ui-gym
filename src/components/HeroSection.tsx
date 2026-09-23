"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HERO_DATA } from "@/data/gymData";
import { ArrowDown, Flame } from "lucide-react";

export const HeroSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Framer Motion Parallax scale 1.0 -> 1.2, opacity 1.0 -> 0 as user scrolls out (0% - 30%)
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 1.18]);
  const opacity = useTransform(scrollYProgress, [0, 0.35], [1, 0.05]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, 60]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex flex-col justify-between overflow-hidden border-b-2 border-border"
    >
      {/* Background Video Layer */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/6797051/6797051-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
        </video>

        {/* Legibility + Cinematic Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background/95" />
      </div>

      {/* Decorative Massive Background Typography Shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -top-10 -right-10 lg:right-4 z-0 text-[18vw] lg:text-[14vw] font-black tracking-tighter uppercase leading-none text-muted/30 whitespace-nowrap overflow-hidden"
      >
        WARRIOR
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-between">
        {/* Top Eyebrow & Meta Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-border pb-6 mb-8 md:mb-12">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent text-black font-bold text-xs uppercase tracking-widest">
              <Flame className="w-3.5 h-3.5 fill-black" />
              {HERO_DATA.eyebrow}
            </span>
            <span className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground font-semibold">
              WHERE LEGENDS TRAIN
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-6 text-xs uppercase tracking-widest text-muted-foreground font-mono">
            <span>{HERO_DATA.coordinates}</span>
            <span className="text-border">|</span>
            <span className="text-foreground">{HERO_DATA.established}</span>
          </div>
        </div>

        {/* Center: Scaled Viewport Typography (H1) with Parallax motion */}
        <motion.div
          style={{ scale, opacity, y }}
          className="my-auto py-6 md:py-12 flex flex-col justify-center will-change-transform origin-center"
        >
          <h1 className="font-sans font-black uppercase text-foreground text-hero-clamp tracking-tighter select-none">
            <span className="block text-foreground">UNLOCK</span>
            <span className="block text-accent transition-colors duration-300 hover:text-white">
              YOUR INNER
            </span>
            <span className="block text-foreground">STRENGTH</span>
          </h1>
        </motion.div>

        {/* Bottom Hero Controls & Subhead */}
        <div className="border-t-2 border-border pt-8 md:pt-12 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          {/* Subtitle / Paragraph */}
          <div className="lg:col-span-7">
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-tight max-w-2xl">
              {HERO_DATA.subhead}
            </p>
            <div className="mt-4 flex items-center gap-4 text-xs md:text-sm uppercase tracking-wider text-muted-foreground">
              <span className="inline-block w-2 h-2 bg-accent animate-pulse" />
              <span>CONNAUGHT PLACE • NEW DELHI • INDIA</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-stretch sm:items-center justify-start lg:justify-end gap-4">
            <a
              href={HERO_DATA.ctaHref}
              onClick={(e) => handleScrollTo(e, HERO_DATA.ctaHref)}
              className="h-16 md:h-20 px-8 md:px-12 bg-accent text-black font-bold text-base md:text-lg uppercase tracking-tighter flex items-center justify-center gap-3 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-accent"
            >
              <span>{HERO_DATA.ctaText}</span>
              <ArrowDown className="w-5 h-5 stroke-[3] animate-bounce" />
            </a>

            <a
              href={HERO_DATA.secondaryCtaHref}
              onClick={(e) => handleScrollTo(e, HERO_DATA.secondaryCtaHref)}
              className="h-16 md:h-20 px-6 md:px-8 border-2 border-border bg-transparent text-foreground hover:bg-foreground hover:text-black font-bold text-base md:text-lg uppercase tracking-tighter flex items-center justify-center transition-all duration-200"
            >
              <span>{HERO_DATA.secondaryCtaText}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
