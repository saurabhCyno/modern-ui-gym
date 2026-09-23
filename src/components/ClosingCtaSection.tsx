"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const ClosingCtaSection: React.FC = () => {
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 md:py-36 bg-accent text-black border-b-2 border-border relative overflow-hidden select-none">
      {/* Massive Graphic Background Accent Word */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-12 -right-8 z-0 text-[20vw] font-black text-black/10 uppercase leading-none tracking-tighter"
      >
        LEGEND
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10">
        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-black text-accent text-xs font-mono font-bold uppercase tracking-widest">
                NO MORE EXCUSES
              </span>
              <span className="text-xs uppercase tracking-widest text-black font-mono font-bold">
                PHASE 01 • AWAKENING
              </span>
            </div>

            <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-black leading-none mb-6">
              READY TO TRANSFORM?
            </h2>

            <p className="font-body text-xl md:text-2xl lg:text-3xl text-black font-semibold max-w-2xl leading-snug">
              Your fitness journey begins now. Get stronger, healthier, and more confident with
              Modern Gym.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch justify-start lg:justify-end gap-4">
            <a
              href="#contact"
              onClick={(e) => handleScrollTo(e, "#contact")}
              className="h-16 md:h-20 px-8 bg-black text-white hover:bg-background hover:text-accent font-bold text-base md:text-lg uppercase tracking-tighter flex items-center justify-center gap-3 transition-all duration-200 border-2 border-black hover:scale-105 active:scale-95"
            >
              <span>CLAIM YOUR PASS NOW</span>
              <ArrowRight className="w-5 h-5 stroke-[3]" />
            </a>

            <a
              href="#facilities"
              onClick={(e) => handleScrollTo(e, "#facilities")}
              className="h-16 md:h-20 px-6 border-2 border-black bg-transparent text-black hover:bg-black hover:text-accent font-bold text-base md:text-lg uppercase tracking-tighter flex items-center justify-center transition-all duration-200"
            >
              <span>EXPLORE FACILITIES</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
