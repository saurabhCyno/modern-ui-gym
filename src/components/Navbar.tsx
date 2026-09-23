"use client";

import React, { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/gymData";
import { Menu, X, ArrowUpRight, Dumbbell } from "lucide-react";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Simple active anchor observer
      const sections = ["home", "about", "facilities", "trainers", "membership-plans", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b-2 ${
          scrolled
            ? "bg-background/95 backdrop-blur-md border-border py-4"
            : "bg-background/80 backdrop-blur-sm border-border/60 py-6"
        }`}
      >
        <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="group flex items-center gap-3 focus:outline-none"
            aria-label="Modern Gym - Home"
          >
            <div className="w-10 h-10 bg-accent flex items-center justify-center text-black font-black text-xl transition-transform duration-200 group-hover:scale-110">
              <Dumbbell className="w-6 h-6 stroke-[2.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-sans text-2xl md:text-3xl font-bold tracking-tighter uppercase leading-none text-foreground group-hover:text-accent transition-colors duration-200">
                MODERN GYM
              </span>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-medium">
                FITNESS • NEW DELHI
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm xl:text-base font-bold uppercase tracking-wider transition-colors duration-200 relative py-2 ${
                    isActive
                      ? "text-accent"
                      : "text-foreground hover:text-accent"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-accent" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="h-12 px-7 bg-accent text-black font-bold text-sm uppercase tracking-tighter flex items-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-accent"
            >
              <span>JOIN NOW</span>
              <ArrowUpRight className="w-4 h-4 stroke-[3]" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-12 h-12 border-2 border-border bg-muted flex items-center justify-center text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 focus:outline-none"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 stroke-[2.5]" />
            ) : (
              <Menu className="w-6 h-6 stroke-[2.5]" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer Navigation */}
      <div
        className={`fixed inset-0 z-30 bg-background/98 backdrop-blur-xl lg:hidden transition-all duration-300 flex flex-col justify-between pt-28 pb-12 px-6 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="border-t-2 border-border pt-6">
          <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-4">
            NAVIGATION INDEX
          </span>
          <nav className="flex flex-col space-y-4">
            {NAV_LINKS.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group flex items-center justify-between py-3 border-b border-muted hover:border-accent text-2xl font-bold uppercase tracking-tighter text-foreground hover:text-accent transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-accent">
                    0{idx + 1}
                  </span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 text-accent transition-opacity duration-200" />
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-4 pt-6 border-t-2 border-border">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="w-full h-14 bg-accent text-black font-bold text-base uppercase tracking-tighter flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-accent"
          >
            <span>JOIN THE GYM</span>
            <ArrowUpRight className="w-5 h-5 stroke-[3]" />
          </a>
          <div className="text-center text-xs uppercase tracking-widest text-muted-foreground">
            Connaught Place • Dwarka &amp; South Delhi • New Delhi
          </div>
        </div>
      </div>
    </>
  );
};
