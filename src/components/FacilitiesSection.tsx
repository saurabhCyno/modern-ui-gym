"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FACILITIES_DATA } from "@/data/gymData";
import { ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, ITEM_VARIANTS } from "@/components/Reveal";

export const FacilitiesSection: React.FC = () => {
  return (
    <section
      id="facilities"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8">
        {/* Section Header */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-accent inline-block" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Facilities Section
            </span>
          </div>

          <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground max-w-5xl">
            MODERN, HYGIENIC, AND BUILT FOR PERFORMANCE
          </h2>
        </Reveal>

        {/* 4 Facility Cards Grid */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {FACILITIES_DATA.map((facility) => (
            <motion.div
              key={facility.id}
              variants={ITEM_VARIANTS}
              className="group border-2 border-border bg-background hover:border-accent hover:bg-accent transition-colors duration-300 flex flex-col justify-between overflow-hidden relative"
            >
              {/* Image Preview Container with Sharp Brutalist Border */}
              <div className="relative h-64 sm:h-80 w-full overflow-hidden border-b-2 border-border group-hover:border-black transition-colors duration-300 bg-muted">
                <Image
                  src={facility.imageUrl}
                  alt={facility.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-125 group-hover:filter-none"
                />
                <div className="absolute inset-0 bg-background/30 group-hover:bg-transparent transition-colors duration-300" />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black text-accent text-xs font-mono font-bold uppercase tracking-wider border border-accent">
                    {facility.tag}
                  </span>
                </div>

                {/* Massive Number Overlay */}
                <div className="absolute bottom-2 right-4 z-10">
                  <span
                    aria-hidden="true"
                    className="font-sans font-black text-6xl md:text-8xl text-white/40 group-hover:text-black/30 transition-colors duration-300 leading-none select-none"
                  >
                    {facility.number}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-8 md:p-10 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="font-sans font-black text-2xl md:text-3xl lg:text-4xl uppercase tracking-tighter text-foreground group-hover:text-black transition-colors duration-300 leading-tight">
                      {facility.title}
                    </h3>
                    <div className="w-10 h-10 border-2 border-border group-hover:border-black group-hover:bg-black group-hover:text-accent flex items-center justify-center shrink-0 transition-all duration-300">
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </div>
                  </div>

                  <p className="font-body text-base md:text-lg text-muted-foreground group-hover:text-black/90 transition-colors duration-300 leading-relaxed mb-8">
                    {facility.description}
                  </p>
                </div>

                {/* Sub Features */}
                <div className="border-t-2 border-border/60 group-hover:border-black/30 pt-6">
                  <span className="text-xs uppercase tracking-widest font-mono text-accent group-hover:text-black font-bold block mb-3">
                    ZONE CAPABILITIES
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {facility.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 text-sm text-foreground/90 group-hover:text-black font-medium transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-accent group-hover:bg-black shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
};
