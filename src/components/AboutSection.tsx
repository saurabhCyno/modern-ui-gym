"use client";

import React from "react";
import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/data/gymData";
import { Shield, Target, Sparkles, ArrowRight } from "lucide-react";
import { Reveal, RevealStagger, ITEM_VARIANTS } from "@/components/Reveal";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      {/* Decorative Massive Number Graphic in Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 right-4 z-0 text-[18vw] font-black text-muted/20 uppercase leading-none tracking-tighter"
      >
        ORIGIN
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10">
        {/* Eyebrow & Main Section Headline */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-16 md:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-accent inline-block" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
              {ABOUT_DATA.eyebrow}
            </span>
          </div>

          <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground">
            {ABOUT_DATA.heading}
          </h2>

          <div className="mt-8 max-w-4xl">
            <p className="font-body text-xl md:text-2xl lg:text-3xl text-foreground font-medium leading-tight border-l-4 border-accent pl-6 py-2">
              {ABOUT_DATA.intro}
            </p>
          </div>
        </Reveal>

        {/* 2-Column Core Architecture Grid: Mission & Philosophy */}
        <RevealStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Mission Card */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="group border-2 border-border bg-background p-8 md:p-12 hover:border-accent hover:bg-accent transition-colors duration-300 relative"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-muted group-hover:bg-black transition-colors duration-300">
                <Target className="w-8 h-8 text-accent group-hover:text-accent stroke-[2.5]" />
              </div>
              <span
                aria-hidden="true"
                className="font-sans font-black text-5xl md:text-7xl text-muted group-hover:text-black/30 transition-colors duration-300 leading-none select-none"
              >
                01
              </span>
            </div>

            <h3 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter text-foreground group-hover:text-black transition-colors duration-300 mb-6">
              {ABOUT_DATA.mission.title}
            </h3>

            <p className="font-body text-lg md:text-xl text-muted-foreground group-hover:text-black/90 transition-colors duration-300 leading-normal">
              {ABOUT_DATA.mission.content}
            </p>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            variants={ITEM_VARIANTS}
            className="group border-2 border-border bg-background p-8 md:p-12 hover:border-accent hover:bg-accent transition-colors duration-300 relative"
          >
            <div className="flex items-start justify-between mb-8">
              <div className="p-3 bg-muted group-hover:bg-black transition-colors duration-300">
                <Shield className="w-8 h-8 text-accent group-hover:text-accent stroke-[2.5]" />
              </div>
              <span
                aria-hidden="true"
                className="font-sans font-black text-5xl md:text-7xl text-muted group-hover:text-black/30 transition-colors duration-300 leading-none select-none"
              >
                02
              </span>
            </div>

            <h3 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter text-foreground group-hover:text-black transition-colors duration-300 mb-6">
              {ABOUT_DATA.philosophy.title}
            </h3>

            <p className="font-body text-lg md:text-xl text-muted-foreground group-hover:text-black/90 transition-colors duration-300 leading-normal">
              {ABOUT_DATA.philosophy.content}
            </p>
          </motion.div>
        </RevealStagger>

        {/* The Modern Gym Experience Section: Connected Brutalist Grid */}
        <div className="border-2 border-border bg-background mb-16">
          <div className="p-8 md:p-12 border-b-2 border-border bg-muted/40 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-accent font-mono block mb-2">
                SYSTEM FEATURES • FACILITY BLUEPRINT
              </span>
              <h3 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter text-foreground">
                {ABOUT_DATA.experience.title}
              </h3>
            </div>
            <p className="font-body text-lg md:text-xl text-muted-foreground">
              {ABOUT_DATA.experience.intro}
            </p>
          </div>

          {/* Connected Cards with gap-px hairline dividers */}
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
            {ABOUT_DATA.experience.items.map((item, idx) => (
              <motion.div
                key={idx}
                variants={ITEM_VARIANTS}
                className="group bg-background p-8 md:p-10 hover:bg-accent transition-colors duration-300 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-sm font-bold text-accent group-hover:text-black transition-colors duration-300">
                    FEATURE // 0{idx + 1}
                  </span>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-black group-hover:translate-x-2 transition-all duration-200" />
                </div>
                <p className="font-body text-lg md:text-xl font-medium text-foreground group-hover:text-black transition-colors duration-300 leading-snug">
                  {item}
                </p>
              </motion.div>
            ))}
          </RevealStagger>
        </div>

        {/* Your Transformation Awaits Banner */}
        <Reveal className="border-2 border-border bg-muted/20 p-8 md:p-14 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-accent" />
                <span className="text-xs uppercase tracking-widest text-accent font-bold">
                  UNSTOPPABLE RESULTS
                </span>
              </div>
              <h4 className="font-sans font-black text-2xl md:text-4xl uppercase tracking-tighter text-foreground mb-4">
                {ABOUT_DATA.transformation.title}
              </h4>
              <p className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed">
                {ABOUT_DATA.transformation.content}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#membership-plans"
                className="h-16 px-8 bg-foreground text-black hover:bg-accent hover:text-black font-bold uppercase tracking-tighter text-base flex items-center justify-center gap-3 transition-all duration-200 border-2 border-foreground hover:border-accent hover:scale-105 active:scale-95"
              >
                <span>BECOME A LEGEND</span>
                <ArrowRight className="w-5 h-5 stroke-[3]" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
