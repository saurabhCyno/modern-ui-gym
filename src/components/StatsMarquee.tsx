"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import { STATS_ITEMS } from "@/data/gymData";

export const StatsMarquee: React.FC = () => {
  return (
    <div className="w-full bg-accent text-black border-b-2 border-border py-4 md:py-6 overflow-hidden select-none">
      <Marquee
        speed={80}
        direction="left"
        gradient={false}
        autoFill={true}
        className="overflow-hidden"
      >
        <div className="flex items-center gap-8 md:gap-14 px-4">
          {STATS_ITEMS.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex items-center gap-4 md:gap-6 whitespace-nowrap"
            >
              <span className="font-sans font-black text-2xl md:text-4xl lg:text-5xl uppercase tracking-tighter">
                {item.value}
              </span>
              <span className="font-sans font-bold text-xs md:text-sm uppercase tracking-widest bg-black text-accent px-2.5 py-1">
                {item.label}
              </span>
              <div className="w-2.5 h-2.5 bg-black rotate-45 mx-2" aria-hidden="true" />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};
