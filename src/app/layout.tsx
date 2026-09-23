import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { MotionConfig } from "framer-motion";
import "./globals.css";
import { NoiseOverlay } from "@/components/NoiseOverlay";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "MODERN GYM | Where Legends Train | New Delhi",
  description:
    "India's biggest and most trusted fitness center. Unlock your inner strength with world-class boxing, Olympic strength, functional fitness, and elite trainers.",
  keywords: [
    "Modern Gym",
    "Gym New Delhi",
    "Gym Connaught Place",
    "Personal Trainer New Delhi",
    "Boxing Gym",
    "CrossFit HIIT",
    "Fitness Center New Delhi",
  ],
  authors: [{ name: "Modern Gym" }],
  openGraph: {
    title: "MODERN GYM — UNLOCK YOUR INNER STRENGTH",
    description:
      "Train with purpose. Sweat with pride. Welcome to Modern Gym — Where Legends Train.",
    url: "https://moderngym.example.com",
    siteName: "Modern Gym",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#09090B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} dark`}
    >
      <body className="min-h-screen bg-background text-foreground font-sans antialiased selection:bg-accent selection:text-black">
        <MotionConfig reducedMotion="user">
          <NoiseOverlay />
          {children}
        </MotionConfig>
      </body>
    </html>
  );
}
