"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { MEMBERSHIP_PLANS, PERSONAL_TRAINING_PLANS } from "@/data/gymData";
import { Check, ArrowRight, ShieldCheck } from "lucide-react";
import { Reveal, RevealStagger, ITEM_VARIANTS } from "@/components/Reveal";

export const MembershipSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"membership" | "pt">("membership");

  return (
    <section
      id="membership-plans"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      {/* Decorative Massive Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 -left-10 z-0 text-[18vw] font-black text-muted/20 uppercase leading-none tracking-tighter"
      >
        ACCESS
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-12 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-accent inline-block" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Pricing & Passes
              </span>
            </div>

            <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground">
              MEMBERSHIP PLANS
            </h2>

            <p className="mt-4 font-body text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl leading-relaxed">
              Flexible, transparent, and designed for every fitness level. Whether you&apos;re just
              starting or leveling up, we&apos;ve got a plan that fits.
            </p>
          </div>

          {/* Interactive Plan Type Toggle */}
          <div className="flex items-center border-2 border-border p-1.5 bg-muted self-start lg:self-end shrink-0">
            <button
              type="button"
              onClick={() => setActiveTab("membership")}
              className={`px-6 py-3 font-sans font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-200 ${
                activeTab === "membership"
                  ? "bg-accent text-black shadow-none scale-100"
                  : "text-foreground hover:text-accent bg-transparent"
              }`}
            >
              MEMBERSHIP PLANS
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("pt")}
              className={`px-6 py-3 font-sans font-bold text-xs md:text-sm uppercase tracking-wider transition-all duration-200 ${
                activeTab === "pt"
                  ? "bg-accent text-black shadow-none scale-100"
                  : "text-foreground hover:text-accent bg-transparent"
              }`}
            >
              PERSONAL TRAINING
            </button>
          </div>
        </Reveal>

        {/* Tab 1: General Gym Membership Plans (4 Cards Grid) */}
        {activeTab === "membership" && (
          <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={ITEM_VARIANTS}
                className={`group border-2 transition-all duration-300 flex flex-col justify-between relative ${
                  plan.highlight
                    ? "border-accent bg-muted/40 hover:bg-accent hover:border-accent"
                    : "border-border bg-background hover:border-accent hover:bg-accent"
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0 transform translate-y-0">
                    <span
                      className={`px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider block border-l-2 border-b-2 ${
                        plan.highlight
                          ? "bg-accent text-black border-accent group-hover:bg-black group-hover:text-accent group-hover:border-black"
                          : "bg-muted text-foreground border-border group-hover:bg-black group-hover:text-accent group-hover:border-black"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-8 pb-4">
                  <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-black/70 font-bold block mb-2">
                    GYM PASS
                  </span>

                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter text-foreground group-hover:text-black transition-colors duration-300 mb-6">
                    {plan.name}
                  </h3>

                  {/* Price Block */}
                  <div className="mb-8 border-y-2 border-border/70 group-hover:border-black/30 py-6 transition-colors duration-300">
                    <div className="font-sans font-black text-4xl sm:text-5xl text-accent group-hover:text-black tracking-tighter transition-colors duration-300">
                      {plan.price}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-black/70">
                      ALL-INCLUSIVE ACCESS
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-black/80 font-bold block mb-2">
                      INCLUDED BENEFITS:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-sm font-medium text-foreground/90 group-hover:text-black transition-colors duration-300"
                      >
                        <Check className="w-4 h-4 text-accent group-hover:text-black shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA Button */}
                <div className="p-8 pt-0">
                  <a
                    href="#contact"
                    className={`w-full h-14 font-bold uppercase tracking-tighter text-sm flex items-center justify-center gap-2 transition-all duration-200 border-2 ${
                      plan.highlight
                        ? "bg-accent text-black border-accent group-hover:bg-black group-hover:text-accent group-hover:border-black"
                        : "bg-muted text-foreground border-border group-hover:bg-black group-hover:text-white group-hover:border-black"
                    }`}
                  >
                    <span>SELECT {plan.name.toUpperCase()}</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        )}

        {/* Tab 2: Personal Training Plans (3 Cards Grid) */}
        {activeTab === "pt" && (
          <RevealStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PERSONAL_TRAINING_PLANS.map((plan) => (
              <motion.div
                key={plan.id}
                variants={ITEM_VARIANTS}
                className={`group border-2 transition-all duration-300 flex flex-col justify-between relative ${
                  plan.highlight
                    ? "border-accent bg-muted/40 hover:bg-accent hover:border-accent"
                    : "border-border bg-background hover:border-accent hover:bg-accent"
                }`}
              >
                {/* Top Badge */}
                {plan.badge && (
                  <div className="absolute top-0 right-0">
                    <span
                      className={`px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest block border-l-2 border-b-2 ${
                        plan.highlight
                          ? "bg-accent text-black border-accent group-hover:bg-black group-hover:text-accent group-hover:border-black"
                          : "bg-muted text-foreground border-border group-hover:bg-black group-hover:text-accent group-hover:border-black"
                      }`}
                    >
                      {plan.badge}
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="p-8 md:p-10">
                  <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-black/70 font-bold block mb-2">
                    1-ON-1 COACHING
                  </span>

                  <h3 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter text-foreground group-hover:text-black transition-colors duration-300 mb-2">
                    {plan.name}
                  </h3>

                  <p className="text-xs font-mono uppercase tracking-widest text-accent group-hover:text-black font-semibold mb-6">
                    {plan.sessions}
                  </p>

                  {/* Price */}
                  <div className="mb-8 border-y-2 border-border/70 group-hover:border-black/30 py-6 transition-colors duration-300">
                    <div className="font-sans font-black text-5xl text-accent group-hover:text-black tracking-tighter transition-colors duration-300">
                      {plan.price}
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-black/70">
                      DEDICATED MENTORSHIP
                    </span>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3.5 mb-8">
                    <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-black/80 font-bold block mb-2">
                      PROGRAM INCLUSIONS:
                    </span>
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-start gap-2.5 text-sm font-medium text-foreground/90 group-hover:text-black transition-colors duration-300"
                      >
                        <Check className="w-4 h-4 text-accent group-hover:text-black shrink-0 mt-0.5 stroke-[3]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="p-8 md:p-10 pt-0">
                  <a
                    href="#contact"
                    className="w-full h-14 bg-accent text-black group-hover:bg-black group-hover:text-accent font-bold uppercase tracking-tighter text-sm flex items-center justify-center gap-2 transition-all duration-200 border-2 border-accent group-hover:border-black"
                  >
                    <span>START 1-ON-1 PROGRAM</span>
                    <ArrowRight className="w-4 h-4 stroke-[3]" />
                  </a>
                </div>
              </motion.div>
            ))}
          </RevealStagger>
        )}

        {/* Bottom Guarantee Banner */}
        <Reveal className="mt-12 p-6 border-2 border-border bg-muted/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-8 h-8 text-accent shrink-0 stroke-[2.5]" />
            <div>
              <span className="font-sans font-bold text-sm uppercase tracking-wider text-foreground block">
                NO HIDDEN CHARGES • CLEAN FACILITY GUARANTEE
              </span>
              <span className="text-xs text-muted-foreground font-body">
                All memberships include full floor access, clean locker facilities, and complimentary assessment.
              </span>
            </div>
          </div>
          <div className="font-mono text-xs text-accent uppercase tracking-widest font-bold shrink-0">
            NEW DELHI • 110001
          </div>
        </Reveal>
      </div>
    </section>
  );
};
