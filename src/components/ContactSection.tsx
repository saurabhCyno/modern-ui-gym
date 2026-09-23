"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { CONTACT_INFO } from "@/data/gymData";
import { Phone, Clock, Mail, MapPin, Send, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Reveal, RevealStagger, ITEM_VARIANTS } from "@/components/Reveal";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "trainer",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);
    // Simulate interactive submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "trainer",
        message: "",
      });
    }, 800);
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 bg-background border-b-2 border-border relative overflow-hidden"
    >
      {/* Decorative Background Graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-10 right-0 z-0 text-[16vw] font-black text-muted/20 uppercase leading-none tracking-tighter"
      >
        CONTACT
      </div>

      <div className="w-full max-w-[95vw] mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <Reveal className="border-b-2 border-border pb-8 md:pb-12 mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-accent inline-block" />
            <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground">
              Direct Inquiries & Location
            </span>
          </div>

          <h2 className="font-sans font-black uppercase text-section-clamp tracking-tighter text-foreground">
            {CONTACT_INFO.heading}
          </h2>
        </Reveal>

        {/* 2-Column Split: Contact Details & Oversized Brutalist Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Contact Info Blocks */}
          <RevealStagger className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <motion.div variants={ITEM_VARIANTS} className="border-2 border-border bg-muted/20 p-8 hover:border-accent transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Phone className="w-5 h-5 text-accent stroke-[2.5]" />
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold">
                  CALL US DIRECTLY
                </span>
              </div>
              <a
                href={`tel:${CONTACT_INFO.phoneRaw}`}
                className="font-sans font-black text-2xl sm:text-3xl text-foreground hover:text-accent tracking-tight transition-colors duration-200 block"
              >
                {CONTACT_INFO.phone}
              </a>
            </motion.div>

            {/* Email Card */}
            <motion.div variants={ITEM_VARIANTS} className="border-2 border-border bg-muted/20 p-8 hover:border-accent transition-colors duration-300">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-accent stroke-[2.5]" />
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold">
                  MAIL US
                </span>
              </div>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="font-sans font-black text-xl sm:text-2xl text-foreground hover:text-accent tracking-tight transition-colors duration-200 break-all block"
              >
                {CONTACT_INFO.email}
              </a>
            </motion.div>

            {/* Working Hours Card */}
            <motion.div variants={ITEM_VARIANTS} className="border-2 border-border bg-muted/20 p-8 hover:border-accent transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-5 h-5 text-accent stroke-[2.5]" />
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold">
                  WORKING HOURS
                </span>
              </div>
              <div className="space-y-2">
                <p className="font-body text-base md:text-lg font-semibold text-foreground">
                  {CONTACT_INFO.hours.weekdays}
                </p>
                <p className="font-body text-base md:text-lg font-semibold text-accent">
                  {CONTACT_INFO.hours.sunday}
                </p>
              </div>
            </motion.div>

            {/* Address Card */}
            <motion.div variants={ITEM_VARIANTS} className="border-2 border-border bg-muted/20 p-8 hover:border-accent transition-colors duration-300">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-5 h-5 text-accent stroke-[2.5]" />
                <span className="text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold">
                  GYM ADDRESS
                </span>
              </div>
              <p className="font-body text-base md:text-lg text-foreground font-medium leading-relaxed">
                {CONTACT_INFO.address}
              </p>
              <div className="mt-4 pt-4 border-t border-border">
                <a
                  href="https://maps.google.com/?q=Connaught+Place+New+Delhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-mono text-accent hover:underline font-bold"
                >
                  <span>VIEW ON GOOGLE MAPS</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </RevealStagger>

          {/* Right Column: Oversized Underline-Only Brutalist Form */}
          <Reveal delay={0.15} className="lg:col-span-7 border-2 border-border bg-background p-8 md:p-12">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-widest font-mono text-accent font-bold block mb-2">
                ONLINE TRANSMISSION
              </span>
              <h3 className="font-sans font-black text-3xl md:text-4xl uppercase tracking-tighter text-foreground">
                SEND A MESSAGE
              </h3>
            </div>

            {isSubmitted ? (
              <div className="p-8 border-2 border-accent bg-accent/10 space-y-4 animate-in fade-in duration-300">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-8 h-8 text-accent stroke-[2.5]" />
                  <h4 className="font-sans font-black text-2xl uppercase tracking-tight text-foreground">
                    MESSAGE RECEIVED
                  </h4>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  Your transmission has been logged. Our head trainer or desk manager will contact
                  you shortly at your provided email or phone.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="h-12 px-6 bg-accent text-black font-bold uppercase tracking-wider text-xs hover:scale-105 transition-transform"
                >
                  SEND ANOTHER TRANSMISSION
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input - Oversized Underline Pattern */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold mb-1"
                  >
                    FULL NAME *
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ENTER YOUR NAME"
                    className="w-full h-20 md:h-24 bg-transparent border-0 border-b-2 border-border focus:border-accent text-2xl sm:text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:outline-none px-0 transition-colors duration-200"
                  />
                </div>

                {/* Email Input - Oversized Underline Pattern */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold mb-1"
                  >
                    EMAIL ADDRESS *
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ENTER YOUR EMAIL"
                    className="w-full h-20 md:h-24 bg-transparent border-0 border-b-2 border-border focus:border-accent text-2xl sm:text-3xl md:text-4xl font-sans font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:outline-none px-0 transition-colors duration-200"
                  />
                </div>

                {/* Subject Select - Seeded with Trainer */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold mb-1"
                  >
                    SELECT SUBJECT / TRAINER TARGET
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full h-20 bg-background border-0 border-b-2 border-border focus:border-accent text-xl sm:text-2xl font-sans font-bold uppercase tracking-tight text-foreground focus:outline-none px-0 transition-colors duration-200 cursor-pointer"
                  >
                    {CONTACT_INFO.trainersDropdown.map((opt) => (
                      <option
                        key={opt.value}
                        value={opt.value}
                        className="bg-background text-foreground py-2"
                      >
                        {opt.label.toUpperCase()}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message Textarea - Oversized Underline Pattern */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs uppercase tracking-widest font-mono text-muted-foreground font-bold mb-1"
                  >
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="TELL US ABOUT YOUR FITNESS GOALS OR QUESTION..."
                    className="w-full bg-transparent border-0 border-b-2 border-border focus:border-accent text-xl sm:text-2xl font-sans font-bold uppercase tracking-tight text-foreground placeholder:text-muted focus:outline-none px-0 py-4 transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-16 md:h-20 bg-accent text-black font-bold uppercase tracking-tighter text-lg md:text-xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:pointer-events-none transition-all duration-200 border-2 border-accent cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send className="w-5 h-5 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
};
