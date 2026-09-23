import React from "react";
import { Navbar } from "@/components/Navbar";
import { MovieIntro } from "@/components/MovieIntro";
import { HeroSection } from "@/components/HeroSection";
import { StatsMarquee } from "@/components/StatsMarquee";
import { AboutSection } from "@/components/AboutSection";
import { FacilitiesSection } from "@/components/FacilitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { TrainersSection } from "@/components/TrainersSection";
import { MembershipSection } from "@/components/MembershipSection";
import { TestimonialsMarquee } from "@/components/TestimonialsMarquee";
import { ClosingCtaSection } from "@/components/ClosingCtaSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground relative flex flex-col selection:bg-accent selection:text-black">
      {/* 0. Movie Intro: YouTube galaxy bg + zooming title, reveals the site on scroll */}
      <MovieIntro />

      {/* 0. Sticky/Fixed Navigation Bar */}
      <Navbar />

      {/* 1. Hero Section (#home) */}
      <HeroSection />

      {/* High-Energy Fast Stats Marquee */}
      <StatsMarquee />

      {/* 2. About Section (#about) */}
      <AboutSection />

      {/* 3. Facilities Section (#facilities) */}
      <FacilitiesSection />

      {/* 3.5 Gallery Section */}
      <GallerySection />

      {/* 4. Trainers Section (#trainers) */}
      <TrainersSection />

      {/* 5. Membership Plans Section (#membership-plans) */}
      <MembershipSection />

      {/* 6. Testimonials Section */}
      <TestimonialsMarquee />

      {/* 7. Closing CTA Section */}
      <ClosingCtaSection />

      {/* 8. Contact Section (#contact) */}
      <ContactSection />

      {/* 9. Footer */}
      <Footer />
    </main>
  );
}
