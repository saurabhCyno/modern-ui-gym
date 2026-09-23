# Modern Gym — Kinetic Typography Rebuild

A high-energy, brutalist website for **Modern Gym**, built with **Next.js 15 (App Router)**, **Tailwind CSS**, **Framer Motion**, and **TypeScript**, embodying the **Kinetic Typography** design system.

---

## ⚡ Design System DNA

- **Aesthetic**: High-Energy Brutalism meets Kinetic Poster Typography.
- **Color Palette**:
  - `background`: `#09090B` (Rich black)
  - `foreground`: `#FAFAFA` (Off-white)
  - `muted`: `#27272A` (Dark gray)
  - `muted-foreground`: `#A1A1AA` (Zinc 400)
  - `accent`: `#DFE104` (Acid Yellow / Lime)
  - `border`: `#3F3F46` (Zinc 700 structural lines)
- **Typography Hierarchy**:
  - Primary Display: **Space Grotesk** (Variable, uppercase, `tracking-tighter`, fluid `clamp()` viewport scaling)
  - Body & Reading: **Inter** (18–24px, generous line-height)
  - Massive Graphic Numbers: `6rem` to `12rem`
- **Brutalist Geometry**:
  - `0px` border-radius across all buttons, cards, badges, and modals.
  - `2px` solid `#3F3F46` structural flat borders (no drop shadows).
  - Hairline `gap-px` grid dividers with colored container backgrounds.
- **Motion System**:
  - **Hero Parallax**: `useScroll` scale (`1.0 → 1.18`) and opacity fade.
  - **High-Energy Stats Ticker**: Infinite marquee (`speed=80`, acid yellow background, raw edges).
  - **Testimonials Marquee**: Infinite smooth marquee (`speed=40`, `autoFill=true`).
  - **Hard Color Inversion on Hover**: Cards snap from black to `#DFE104` with `#000000` text.
  - **Oversized Underline Forms**: `96px` height inputs with `border-b-2` and `text-4xl` scale.
  - **Noise Texture**: SVG `feTurbulence` overlay (`opacity-[0.035]`, `mix-blend-overlay`).

---

## 📋 Page Architecture & Verbatim Sections

1. **Global Navigation**: Modern Gym logo, Home (`#home`), About (`#about`), Facilities (`#facilities`), Trainers (`#trainers`), Membership Plans (`#membership-plans`), Contact us (`#contact`).
2. **Hero (`#home`)**: Viewport-scale H1 (`UNLOCK YOUR INNER STRENGTH`), kicker, subhead, "Explore our GYM" CTA.
3. **Stats Marquee**: Fast continuous ticker displaying hours, experience, Olympic zones, and Central Delhi location.
4. **About (`#about`)**: "UNLEASH YOUR INNER WARRIOR", Mission, The Modern Gym Experience feature grid, Philosophy, Transformation banner.
5. **Facilities (`#facilities`)**: 4 brutalist cards:
   - BOXING
   - Advanced cardio & strength equipment
   - Functional training zone
   - CrossFit and HIIT arena
6. **Trainers (`#trainers`)**: Aarav Sharma, Rohan Verma, Vikram Singh with experience badges, specialties, credentials, and full warrior bio modal.
7. **Membership Plans (`#membership-plans`)**: Interactive toggle between General Gym Access (Monthly ₹4,300, Quarterly ₹11,000, Half Yearly ₹20,000, Yearly ₹33,000) and 1-on-1 Personal Training packages.
8. **Testimonials**: AutoFill marquee with quotes from personal trainers and student member Anjali Mehta.
9. **Closing CTA**: Massive viewport headline "READY TO TRANSFORM?" with high-contrast action buttons.
10. **Contact (`#contact`)**: Direct details (+91 98765 43210, hours, email, 123 Fitness Avenue Connaught Place New Delhi) + oversized underline contact form with interactive transmission state.
11. **Footer**: Brand statement, Quick links, Social connects, Legal terms, and giant kinetic footer banner.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm run start
```
