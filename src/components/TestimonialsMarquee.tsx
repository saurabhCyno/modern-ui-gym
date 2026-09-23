"use client";

import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { TESTIMONIALS_DATA } from "@/data/gymData";
import { Quote, Star } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export const TestimonialsMarquee: React.FC = () => {
  return (
    <section className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden">
      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 mb-12">
        <Reveal className="border-b-2 border-border pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-accent inline-block" />
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
                Verified Community & Coach Transcripts
              </span>
            </div>

            <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground">
              What Our Members Say
            </h2>
          </div>

          <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-accent">
            <span className="inline-block w-2.5 h-2.5 bg-accent animate-ping" />
            <span>CONTINUOUS WARRIOR FEEDBACK</span>
          </div>
        </Reveal>
      </div>

      {/* Infinite Scrolling Testimonials Marquee (Speed 40, Raw Edges, autoFill) */}
      <div className="w-full overflow-hidden select-none py-4">
        <Marquee
          speed={40}
          direction="left"
          gradient={false}
          autoFill={true}
          pauseOnHover={false}
          className="overflow-hidden"
        >
          <div className="flex items-stretch gap-6 px-3">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="group w-[380px] sm:w-[460px] md:w-[520px] shrink-0 border-2 border-border bg-muted/40 hover:bg-accent hover:border-accent p-8 md:p-10 flex flex-col justify-between transition-colors duration-300 relative"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      {item.avatarUrl && (
                        <div className="relative w-12 h-12 border-2 border-border group-hover:border-black overflow-hidden bg-background">
                          <Image
                            src={item.avatarUrl}
                            alt={item.name}
                            fill
                            sizes="48px"
                            className="object-cover filter grayscale contrast-125 group-hover:filter-none"
                          />
                        </div>
                      )}
                      <div>
                        <h3 className="font-sans font-black text-xl uppercase tracking-tight text-foreground group-hover:text-black transition-colors duration-300">
                          {item.name}
                        </h3>
                        <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground group-hover:text-black/80 font-bold block">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <Quote className="w-8 h-8 text-muted group-hover:text-black/40 transition-colors duration-300" />
                  </div>

                  <p className="font-body text-base md:text-lg text-foreground/90 group-hover:text-black transition-colors duration-300 leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-border/80 group-hover:border-black/30 flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-accent text-accent group-hover:fill-black group-hover:text-black"
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-muted-foreground group-hover:text-black/70 font-semibold">
                    AUTHENTIC TRANSCRIPT
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
