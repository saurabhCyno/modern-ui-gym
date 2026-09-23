"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { GALLERY_SLIDES } from "@/data/gymData";
import { ArrowLeft, ArrowRight, X, Expand } from "lucide-react";
import { Reveal } from "@/components/Reveal";

const AUTOPLAY_DELAY = 4000;
const MANUAL_PAUSE_MS = 6000;

export const GallerySection: React.FC = () => {
  const allImages = GALLERY_SLIDES.flatMap((slide) => slide.images);
  const totalImages = allImages.length;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hoverRef = useRef(false);
  const pauseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Auto-advance the slider, pausing on hover / lightbox / manual interaction.
  useEffect(() => {
    if (isPaused || lightboxIndex !== null) return;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % GALLERY_SLIDES.length);
    }, AUTOPLAY_DELAY);
    return () => clearInterval(id);
  }, [isPaused, lightboxIndex]);

  const resumeUnlessHovering = () => {
    if (!hoverRef.current) setIsPaused(false);
  };

  const pauseFor = (ms: number) => {
    setIsPaused(true);
    if (pauseTimer.current) clearTimeout(pauseTimer.current);
    pauseTimer.current = setTimeout(resumeUnlessHovering, ms);
  };

  useEffect(() => {
    return () => {
      if (pauseTimer.current) clearTimeout(pauseTimer.current);
    };
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide((index + GALLERY_SLIDES.length) % GALLERY_SLIDES.length);
    pauseFor(MANUAL_PAUSE_MS);
  };

  const goToNext = () => goToSlide(currentSlide + 1);
  const goToPrev = () => goToSlide(currentSlide - 1);

  // Lightbox: keyboard navigation + scroll lock.
  useEffect(() => {
    if (lightboxIndex === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % totalImages);
      if (e.key === "ArrowLeft")
        setLightboxIndex((i) => (i! - 1 + totalImages) % totalImages);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, totalImages]);

  const openLightbox = (imageId: string) => {
    const idx = allImages.findIndex((img) => img.id === imageId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const slide = GALLERY_SLIDES[currentSlide];

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      {/* Decorative Massive Background Typography */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute -bottom-10 -right-6 lg:right-4 z-0 text-[18vw] font-black text-muted/20 uppercase leading-none tracking-tighter"
      >
        GALLERY
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-accent inline-block" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Gym Gallery & Live Feed
            </span>
          </div>

          <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground">
            RAW MOMENTS. REAL GRIND.
          </h2>
        </Reveal>

        {/* Carousel */}
        <Reveal delay={0.1}>
          <div
            onMouseEnter={() => {
              hoverRef.current = true;
              setIsPaused(true);
            }}
            onMouseLeave={() => {
              hoverRef.current = false;
              setIsPaused(false);
            }}
            className="border-2 border-border bg-background"
          >
          {/* Slide Viewport */}
          <div className="overflow-hidden p-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, x: 48 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -48 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:h-[560px]"
              >
                {slide.images.map((image, idx) => (
                  <button
                    key={image.id}
                    type="button"
                    onClick={() => openLightbox(image.id)}
                    aria-label={`Open ${image.alt} in lightbox`}
                    className={`group relative overflow-hidden border-2 border-border bg-muted text-left focus-visible:border-accent ${
                      idx === 0
                        ? "h-64 sm:h-80 md:h-auto md:col-span-2 md:row-span-2 cursor-zoom-in"
                        : "h-44 sm:h-56 md:h-auto cursor-zoom-in"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/10 opacity-80 group-hover:opacity-40 transition-opacity duration-300" />

                    {/* Index Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 bg-black text-accent text-[11px] font-mono font-bold uppercase tracking-wider border border-accent">
                      0{idx + 1}
                    </span>

                    {/* Caption + Expand */}
                    <span className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
                      <span className="text-[11px] sm:text-sm font-black uppercase tracking-widest text-foreground group-hover:text-accent transition-colors duration-300">
                        {image.caption}
                      </span>
                      <span className="w-9 h-9 shrink-0 bg-accent text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200">
                        <Expand className="w-4 h-4 stroke-[2.5]" />
                      </span>
                    </span>
                  </button>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between gap-4 border-t-2 border-border p-4 md:p-5">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goToPrev}
                aria-label="Previous slide"
                className="w-12 h-12 border-2 border-border bg-muted text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 flex items-center justify-center"
              >
                <ArrowLeft className="w-5 h-5 stroke-[2.5]" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next slide"
                className="w-12 h-12 border-2 border-border bg-muted text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 flex items-center justify-center"
              >
                <ArrowRight className="w-5 h-5 stroke-[2.5]" />
              </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {GALLERY_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}: ${s.title}`}
                  className={`h-2.5 transition-all duration-300 ${
                    i === currentSlide ? "w-8 bg-accent" : "w-2.5 bg-muted hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            {/* Slide Counter + Pause Status */}
            <div className="hidden sm:flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
              <span className="text-accent font-bold">
                {String(currentSlide + 1).padStart(2, "0")}
              </span>
              <span>/ {String(GALLERY_SLIDES.length).padStart(2, "0")}</span>
              <span className="ml-2 text-[10px] inline-flex items-center gap-1.5">
                <span className={`inline-block w-1.5 h-1.5 ${isPaused ? "bg-accent" : "bg-accent animate-pulse"}`} />
                {isPaused ? "PAUSED" : "AUTO"}
              </span>
            </div>
          </div>
        </div>
        </Reveal>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            key="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-14 cursor-zoom-out"
            onClick={() => setLightboxIndex(null)}
            role="dialog"
            aria-modal="true"
            aria-label={allImages[lightboxIndex].alt}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setLightboxIndex(null)}
              aria-label="Close lightbox"
              className="absolute top-4 right-4 md:top-6 md:right-6 z-10 w-12 h-12 border-2 border-border bg-background text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 flex items-center justify-center"
            >
              <X className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Prev Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i! - 1 + totalImages) % totalImages);
              }}
              aria-label="Previous image"
              className="absolute left-3 md:left-6 z-10 w-12 h-12 md:w-14 md:h-14 border-2 border-border bg-background text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 flex items-center justify-center"
            >
              <ArrowLeft className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Next Button */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setLightboxIndex((i) => (i! + 1) % totalImages);
              }}
              aria-label="Next image"
              className="absolute right-3 md:right-6 z-10 w-12 h-12 md:w-14 md:h-14 border-2 border-border bg-background text-foreground hover:bg-accent hover:text-black hover:border-accent transition-all duration-200 flex items-center justify-center"
            >
              <ArrowRight className="w-6 h-6 stroke-[2.5]" />
            </button>

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.figure
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-5xl border-2 border-accent bg-background p-2 cursor-default"
              >
                <div className="relative w-full h-[55vh] md:h-[72vh]">
                  <Image
                    src={allImages[lightboxIndex].src}
                    alt={allImages[lightboxIndex].alt}
                    fill
                    sizes="90vw"
                    className="object-contain"
                  />
                </div>
              </motion.figure>
            </AnimatePresence>

            {/* Counter + Caption */}
            <div className="absolute bottom-5 inset-x-0 z-10 flex items-center justify-center gap-3 px-4 font-mono text-xs uppercase tracking-widest">
              <span className="text-accent font-bold">
                {String(lightboxIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-muted-foreground">
                / {String(totalImages).padStart(2, "0")}
              </span>
              <span className="text-foreground font-bold max-w-xs md:max-w-md truncate">
                {allImages[lightboxIndex].caption}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};