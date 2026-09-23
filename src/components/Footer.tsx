"use client";

import React from "react";
import { FOOTER_DATA, FOOTER_QUICK_LINKS } from "@/data/gymData";
import { ArrowUp, Dumbbell, ArrowUpRight } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background text-foreground border-t-2 border-border relative overflow-hidden">
      {/* Top Footer Section */}
      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-6">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="inline-flex items-center gap-3"
            >
              <div className="w-10 h-10 bg-accent flex items-center justify-center text-black font-black">
                <Dumbbell className="w-6 h-6 stroke-[2.5]" />
              </div>
              <span className="font-sans text-3xl font-black tracking-tighter uppercase text-foreground">
                {FOOTER_DATA.brandLine}
              </span>
            </a>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-md">
              {FOOTER_DATA.description}
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-accent font-semibold">
              <span className="w-2 h-2 bg-accent inline-block" />
              <span>123 FITNESS AVENUE • NEW DELHI 110001</span>
            </div>
          </div>

          {/* Quick Links Col (Preserving exact nav targets) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-4">
              QUICK LINKS
            </span>
            <ul className="space-y-3">
              {FOOTER_QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="font-sans font-bold text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-border group-hover:bg-accent transition-colors" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-4">
              SOCIAL CONNECT
            </span>
            <ul className="space-y-3">
              {FOOTER_DATA.socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans font-bold text-sm uppercase tracking-wider text-muted-foreground hover:text-accent transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span>{social.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal / Policy Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-4">
              LEGAL
            </span>
            <ul className="space-y-3">
              {FOOTER_DATA.legalLinks.map((legal) => (
                <li key={legal.label}>
                  <a
                    href={legal.href}
                    className="font-sans font-medium text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors duration-200 block"
                  >
                    {legal.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Giant Background Wordmark Band */}
      <div className="border-t-2 border-border py-6 px-4 bg-muted/20 select-none overflow-hidden">
        <div className="w-full max-w-[95vw] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono uppercase tracking-widest text-muted-foreground">
          <div>
            © {new Date().getFullYear()} MODERN GYM. ALL RIGHTS RESERVED.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="h-10 px-4 border border-border hover:border-accent hover:bg-accent hover:text-black font-bold flex items-center gap-2 transition-all duration-200"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Scaled Kinetic Footer Banner */}
      <div
        aria-hidden="true"
        className="w-full border-t-2 border-border/40 py-2 overflow-hidden bg-black flex justify-center items-center"
      >
        <span className="font-sans font-black text-[12vw] tracking-tighter uppercase leading-none text-muted/30 whitespace-nowrap select-none">
          MODERN GYM
        </span>
      </div>
    </footer>
  );
};
