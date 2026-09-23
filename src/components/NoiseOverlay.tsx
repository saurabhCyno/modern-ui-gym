"use client";

import React from "react";

export const NoiseOverlay: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.035] mix-blend-overlay"
    >
      <svg
        className="h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
      >
        <title>Poster Grain Noise Texture</title>
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="4"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
};
