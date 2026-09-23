"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TRAINERS_DATA } from "@/data/gymData";
import { Trainer } from "@/types";
import { Award, ArrowUpRight, Check, X } from "lucide-react";
import { Reveal, RevealStagger, ITEM_VARIANTS } from "@/components/Reveal";

export const TrainersSection: React.FC = () => {
  const [selectedTrainer, setSelectedTrainer] = useState<Trainer | null>(null);

  return (
    <section
      id="trainers"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8">
        {/* Section Heading */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-accent inline-block" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Meet Our Trainers
            </span>
          </div>

          <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground max-w-5xl">
            CERTIFIED. MOTIVATING. RESULTS-DRIVEN.
          </h2>
        </Reveal>

        {/* 3-Column Trainer Cards Grid */}
        <RevealStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRAINERS_DATA.map((trainer, index) => (
            <motion.div
              key={trainer.id}
              variants={ITEM_VARIANTS}
              className="group border-2 border-border bg-background hover:border-accent flex flex-col justify-between transition-all duration-300"
            >
              {/* Photo Area with Tag */}
              <div className="relative h-96 w-full overflow-hidden bg-muted border-b-2 border-border group-hover:border-accent transition-colors duration-300">
                <Image
                  src={trainer.imageUrl}
                  alt={trainer.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-top filter grayscale contrast-125 group-hover:filter-none transition-all duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="px-3 py-1 bg-black text-accent text-xs font-mono font-bold uppercase tracking-widest border border-accent">
                    {trainer.experience} EXP
                  </span>
                </div>

                {/* Decorative Index */}
                <div className="absolute top-4 right-4 z-10">
                  <span
                    aria-hidden="true"
                    className="font-sans font-black text-4xl text-white/30 group-hover:text-accent transition-colors duration-300 select-none"
                  >
                    0{index + 1}
                  </span>
                </div>

                {/* Name & Role Overlay */}
                <div className="absolute bottom-4 left-4 right-4 z-10">
                  <h3 className="font-sans font-black text-3xl uppercase tracking-tighter text-foreground group-hover:text-accent transition-colors duration-300">
                    {trainer.name}
                  </h3>
                  <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mt-0.5">
                    {trainer.role}
                  </p>
                </div>
              </div>

              {/* Bio & Details Area */}
              <div className="p-8 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-6">
                    <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-1">
                      CORE SPECIALTY
                    </span>
                    <p className="font-body text-base font-semibold text-foreground">
                      {trainer.specialty}
                    </p>
                  </div>

                  <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                    {trainer.shortBio}
                  </p>

                  <div className="space-y-2 mb-8">
                    {trainer.certifications.map((cert, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2 text-xs uppercase tracking-wider text-foreground/80 font-mono"
                      >
                        <Award className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t-2 border-border flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setSelectedTrainer(trainer)}
                    className="flex-1 h-12 bg-muted hover:bg-accent text-foreground hover:text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 border border-border hover:border-accent"
                  >
                    <span>FULL WARRIOR BIO</span>
                    <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <a
                    href="#contact"
                    className="h-12 px-4 bg-accent text-black hover:scale-105 font-bold text-xs uppercase tracking-wider flex items-center justify-center transition-transform duration-200"
                    title="Book Training Session"
                  >
                    TRAIN
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </RevealStagger>
      </div>

      {/* Trainer Full Bio Modal */}
      {selectedTrainer && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
        >
          <div className="border-2 border-accent bg-background max-w-2xl w-full p-8 md:p-12 relative animate-in fade-in zoom-in-95 duration-200">
            <button
              type="button"
              onClick={() => setSelectedTrainer(null)}
              className="absolute top-6 right-6 w-10 h-10 border-2 border-border bg-muted flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5 stroke-[2.5]" />
            </button>

            <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-2">
              CERTIFIED PERSONAL TRAINER
            </span>

            <h3 className="font-sans font-black text-3xl md:text-5xl uppercase tracking-tighter text-foreground mb-1">
              {selectedTrainer.name}
            </h3>
            <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-6">
              {selectedTrainer.role} • {selectedTrainer.experience} EXPERIENCE
            </p>

            <div className="border-y-2 border-border py-6 mb-6">
              <h4 className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-2">
                COMPLETE BIOGRAPHY
              </h4>
              <p className="font-body text-base md:text-lg text-foreground/90 leading-relaxed">
                {selectedTrainer.bio}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-widest font-mono text-accent font-bold mb-3">
                CERTIFICATIONS & ACCREDITATIONS
              </h4>
              <ul className="space-y-2">
                {selectedTrainer.certifications.map((c, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent stroke-[3]" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                onClick={() => setSelectedTrainer(null)}
                className="flex-1 h-14 bg-accent text-black font-bold uppercase tracking-tighter text-sm flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-transform"
              >
                <span>BOOK WITH {selectedTrainer.name.split(" ")[0].toUpperCase()}</span>
                <ArrowUpRight className="w-4 h-4 stroke-[3]" />
              </a>
              <button
                type="button"
                onClick={() => setSelectedTrainer(null)}
                className="h-14 px-8 border-2 border-border bg-transparent text-foreground hover:bg-muted font-bold uppercase tracking-wider text-sm transition-colors"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
