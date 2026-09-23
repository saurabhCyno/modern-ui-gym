import {
  NavItem,
  Facility,
  Trainer,
  MembershipPlan,
  PersonalTrainingPlan,
  Testimonial,
  GallerySlide,
} from "@/types";

export const NAV_LINKS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership Plans", href: "#membership-plans" },
  { label: "Contact us", href: "#contact" },
];

export const FOOTER_QUICK_LINKS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Facilities", href: "#facilities" },
  { label: "Trainers", href: "#trainers" },
  { label: "Membership Plans", href: "#membership-plans" },
];

export const HERO_DATA = {
  eyebrow: "MODERN GYM",
  headline: "UNLOCK YOUR INNER STRENGTH",
  subhead:
    "Train with purpose. Sweat with pride. Welcome to Modern Gym — Where Legends Train.",
  ctaText: "Explore our GYM",
  ctaHref: "#facilities",
  secondaryCtaText: "Claim Membership",
  secondaryCtaHref: "#membership-plans",
  established: "EST. 2010 • NEW DELHI",
  coordinates: "28.6139° N, 77.2090° E",
};

export const ABOUT_DATA = {
  eyebrow: "About Modern Gym",
  heading: "UNLEASH YOUR INNER WARRIOR",
  intro:
    "At Modern Gym, we believe that within every individual lies an unstoppable force waiting to be awakened. Our community is built around the ultimate power of transformation – turning ordinary individuals into extraordinary versions of themselves.",
  mission: {
    title: "Our Mission",
    content:
      "We are more than just a fitness facility; we are your partners in unleashing your true potential. Our mission is to provide a welcoming space where dedication meets results, where sweat becomes strength, and where every workout brings you closer to your most powerful self.",
  },
  experience: {
    title: "The Modern Gym Experience",
    intro: "Step into our world-class facility and discover:",
    items: [
      "State-of-the-art equipment designed to challenge every muscle and movement",
      "Expert trainers who guide you with the wisdom of modern sports science",
      "Diverse training programs from traditional strength training to cutting-edge functional fitness",
      "A community of members who support, motivate, and inspire each other daily",
    ],
  },
  philosophy: {
    title: "Our Philosophy",
    content:
      "We ensure every workout, every rep, and every drop of sweat moves you closer to your goals. We combine time-tested training principles with innovative techniques to create a fitness experience that's both powerful and transformative.",
  },
  transformation: {
    title: "Your Transformation Awaits",
    content:
      "Whether you're a beginner taking your first steps on the fitness journey or a seasoned athlete seeking to break new barriers, Modern Gym is your sanctuary of strength. Here, limits are broken, goals are conquered, and legends are born.",
  },
};

export const FACILITIES_DATA: Facility[] = [
  {
    id: "boxing",
    number: "01",
    title: "BOXING",
    description:
      "Full combat sports ring, heavy bags, speedballs, and specialized strike pads for explosive power, footwork agility, and unyielding cardiovascular stamina.",
    features: [
      "Full-size sparring ring",
      "Heavy leather punching bags",
      "Speed bags & slip cords",
      "Combat endurance drills",
    ],
    tag: "STRIKE & AGILITY",
    imageUrl:
      "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "cardio-strength",
    number: "02",
    title: "Advanced cardio & strength equipment",
    description:
      "Biomechanically engineered plate-loaded machines, Olympic barbells, calibrated steel plates, and high-performance cardiovascular ergometers.",
    features: [
      "Olympic lifting platforms",
      "Custom calibrated dumbbells up to 60kg",
      "High-end incline treadmills & curved runners",
      "Cable crossovers & multi-jungle towers",
    ],
    tag: "HYPERTROPHY & POWER",
    imageUrl:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "functional-zone",
    number: "03",
    title: "Functional training zone",
    description:
      "Turf sprinting lanes, kettlebell racks, medicine balls, battle ropes, and plyometric boxes built for multi-planar athletic development and injury resilience.",
    features: [
      "30-meter indoor sprint turf",
      "Cast iron competition kettlebells",
      "Heavy battle ropes & slam balls",
      "Plyometric soft jump boxes",
    ],
    tag: "ATHLETIC CONDITIONING",
    imageUrl:
      "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "crossfit-hiit",
    number: "04",
    title: "CrossFit and HIIT arena",
    description:
      "High-intensity rig systems, gymnastic rings, Concept2 rowers, SkiErgs, and Echo bikes engineered for punishing metabolic conditioning and maximal work capacity.",
    features: [
      "Custom steel monkey rig & pull-up stations",
      "Concept2 SkiErgs, Rowers & Echo Bikes",
      "Gymnastic wood rings",
      "GHD machines & sled pushes",
    ],
    tag: "METABOLIC WARFARE",
    imageUrl:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop",
  },
];

export const TRAINERS_DATA: Trainer[] = [
  {
    id: "aarav-sharma",
    name: "Aarav Sharma",
    role: "Strength & Conditioning Coach",
    experience: "10+ Years",
    specialty: "Strength Training & Athletic Conditioning",
    bio: "Aarav Sharma is a results-oriented strength and conditioning coach with a decade of experience in the fitness industry. He empowers clients to push their limits and achieve lasting physical transformation through disciplined, structured programming.",
    shortBio:
      "Decade-long coaching career. Specializes in strength development, athletic conditioning, and peak mental grit.",
    imageUrl:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=800&auto=format&fit=crop",
    certifications: [
      "Certified Strength & Conditioning Coach",
      "Advanced Olympic Lifting Specialist",
      "Holistic Fitness Coach",
    ],
    instagram: "@aarav_the_coach",
  },
  {
    id: "rohan-verma",
    name: "Rohan Verma",
    role: "Personal Trainer",
    experience: "6+ Years",
    specialty: "Evidence-Based Hypertrophy & Fat Loss",
    bio: "Hi, I'm Rohan Verma, a dedicated fitness expert with over 6+ years of experience in helping individuals achieve their health and wellness goals. My journey in the fitness industry is rooted in passion, knowledge, and a commitment to transforming lives through sustainable and evidence-based practices.",
    shortBio:
      "Over 6+ years of specialized experience in sustainable, evidence-based biomechanics, athletic aesthetics, and metabolic conditioning.",
    imageUrl:
      "https://images.unsplash.com/photo-1758875568932-0eefd3e60090?q=80&w=800&auto=format&fit=crop",
    certifications: [
      "Certified Strength & Conditioning Coach",
      "Biomechanics & Movement Specialist",
      "Sports Nutrition Consultant",
    ],
    instagram: "@rohan_fit_verma",
  },
  {
    id: "vikram-singh",
    name: "Vikram Singh",
    role: "Transformation Coach",
    experience: "15+ Years",
    specialty: "Transformation & Contest Prep",
    bio: "With 15 years in fitness, Vikram has built a career as a transformation coach, contest prep specialist, and gym manager. Certified as a personal trainer and fitness manager, he combines science-based training with real-world results.",
    shortBio:
      "Veteran coach with over 15 years of experience. Transformation coach and contest prep expert combining deep science with ruthless real-world results.",
    imageUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=800&auto=format&fit=crop",
    certifications: [
      "Certified Personal Trainer (CPT)",
      "Fitness Management Certified",
      "Elite Contest Prep Specialist",
    ],
    instagram: "@vikram_transforms",
  },
];

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Monthly",
    period: "/ 1 Month",
    price: "₹4,300/-",
    rawPrice: 4300,
    highlight: false,
    badge: "STARTER",
    features: [
      "Full Gym Access (6:00 AM – 10:30 PM)",
      "Modern equipment and clean environment",
      "Convenient hours for your schedule",
    ],
  },
  {
    id: "quarterly",
    name: "Quarterly",
    period: "/ 3 Months",
    price: "₹11,000/-",
    rawPrice: 11000,
    highlight: true,
    badge: "MOST POPULAR",
    features: [
      "Full Gym Access (6:00 AM – 10:30 PM)",
      "Free Introductory Fitness Consultation",
      "Personalized Diet Plan",
      "Access to Fitness App",
    ],
  },
  {
    id: "half-yearly",
    name: "Half Yearly",
    period: "/ 6 Months",
    price: "₹20,000/-",
    rawPrice: 20000,
    highlight: false,
    badge: "BEST VALUE",
    features: [
      "Full Gym Access (6:00 AM – 10:30 PM)",
      "Free Introductory Fitness Consultation",
      "Personalized Diet Plan",
      "Access to Fitness App",
    ],
  },
  {
    id: "yearly",
    name: "Yearly",
    period: "/ 12 Months",
    price: "₹33,000/-",
    rawPrice: 33000,
    highlight: false,
    badge: "WARRIOR COMMITMENT",
    features: [
      "Full Gym Access (6:00 AM – 10:30 PM)",
      "Free Introductory Fitness Consultation",
      "Personalized Diet Plan",
      "Access to Fitness App",
    ],
  },
];

export const PERSONAL_TRAINING_PLANS: PersonalTrainingPlan[] = [
  {
    id: "pt-12",
    name: "12 Sessions PT",
    sessions: "1 Month / 3x Weekly",
    price: "₹8,500/-",
    highlight: false,
    badge: "ACCELERATOR",
    features: [
      "1-on-1 Dedicated Elite Trainer",
      "Form & Biomechanics Analysis",
      "Custom Calorie & Macronutrient Blueprint",
      "Weekly Progress Tracking & Adjustments",
      "Full Gym Floor Access Included",
    ],
  },
  {
    id: "pt-36",
    name: "36 Sessions PT",
    sessions: "3 Months / 3x Weekly",
    price: "₹22,000/-",
    highlight: true,
    badge: "TOTAL REBUILD",
    features: [
      "1-on-1 Dedicated Elite Trainer",
      "Complete Body Recomposition Program",
      "Advanced Bloodwork & Diet Strategy",
      "Combat / Strength Technique Mastery",
      "24/7 Trainer WhatsApp Accountability",
      "Priority Rig & Boxing Ring Access",
    ],
  },
  {
    id: "pt-72",
    name: "72 Sessions PT",
    sessions: "6 Months / 3x Weekly",
    price: "₹39,000/-",
    highlight: false,
    badge: "LEGEND TRANSFORMATION",
    features: [
      "Master Trainer (10+ Yrs Exp) Assignment",
      "Contest Prep & Peak Physical Conditioning",
      "Injury Rehabilitation & Mobility Modules",
      "Full Access To Guest Passes & Locker",
      "Quarterly Dexa Scan Equivalency Assessment",
    ],
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t1",
    name: "Aarav Sharma",
    role: "Strength & Conditioning Coach",
    type: "trainer",
    avatarUrl:
      "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop",
    quote:
      "Aarav Sharma is a results-oriented strength and conditioning coach with a decade of experience in the fitness industry. He empowers clients to push their limits and achieve lasting physical transformation through disciplined, structured programming.",
  },
  {
    id: "t2",
    name: "Rohan Verma",
    role: "Personal Trainer",
    type: "trainer",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote:
      "Hi, I'm Rohan Verma, a dedicated fitness expert with over 6+ years of experience in helping individuals achieve their health and wellness goals. My journey in the fitness industry is rooted in passion, knowledge, and a commitment to transforming lives through sustainable and evidence-based practices.",
  },
  {
    id: "t3",
    name: "Vikram Singh",
    role: "Transformation Coach",
    type: "trainer",
    avatarUrl:
      "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=400&auto=format&fit=crop",
    quote:
      "With 15 years in fitness, Vikram has built a career as a transformation coach, contest prep specialist, and gym manager. Certified as a personal trainer and fitness manager, he combines science-based training with real-world results.",
  },
  {
    id: "t4",
    name: "Anjali Mehta",
    role: "Student",
    type: "member",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    quote:
      "Modern Gym is the best thing that happened to my health. The trainers are friendly yet push you hard enough to grow. The atmosphere is always motivating, and the results speak for themselves!",
  },
];

export const STATS_ITEMS: { value: string; label: string; highlight?: boolean }[] = [
  { value: "06:00 - 22:30", label: "HOURS DAILY" },
  { value: "15+ YEARS", label: "COACHING EXCELLENCE" },
  { value: "100%", label: "TRANSFORMATION GUARANTEE" },
  { value: "4 ZONES", label: "OLYMPIC & COMBAT" },
  { value: "₹4,300", label: "STARTING PLAN" },
  { value: "110001", label: "CENTRAL DELHI INDIA" },
  { value: "0% EXCUSES", label: "100% DISCIPLINE" },
  { value: "MODERN GYM", label: "SANCTUARY OF STRENGTH" },
];

export const CONTACT_INFO = {
  heading: "Our Contact Detail",
  phone: "+91 98765 43210",
  phoneRaw: "+919876543210",
  email: "hello@moderngym.in",
  address: "123 Fitness Avenue, Connaught Place, New Delhi, India 110001",
  hours: {
    weekdays: "Monday – Saturday: 06:00 AM – 10:30 PM",
    sunday: "Sunday: 08:00 AM – 04:00 PM",
  },
  trainersDropdown: [
    { value: "trainer", label: "General Trainer Inquiry" },
    { value: "aarav-sharma", label: "Aarav Sharma (Strength & Conditioning)" },
    { value: "rohan-verma", label: "Rohan Verma (Hypertrophy & Fat Loss)" },
    { value: "vikram-singh", label: "Vikram Singh (Transformation Coaching)" },
    { value: "membership", label: "Membership Consultation" },
    { value: "other", label: "Other Inquiries" },
  ],
};

export const GALLERY_SLIDES: GallerySlide[] = [
  {
    id: "ring-combat",
    title: "RING & COMBAT",
    images: [
      {
        id: "g01",
        src: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1400&auto=format&fit=crop",
        alt: "Sparring ring bathed in dramatic light",
        caption: "THE SPARRING RING",
      },
      {
        id: "g02",
        src: "https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?q=80&w=800&auto=format&fit=crop",
        alt: "Boxer wrapping hands before training",
        caption: "HANDS WRAPPED",
      },
      {
        id: "g03",
        src: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=800&auto=format&fit=crop",
        alt: "Athlete battling with heavy ropes",
        caption: "BATTLE ROPES",
      },
      {
        id: "g04",
        src: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop",
        alt: "Combat conditioning session in progress",
        caption: "CONDITIONING",
      },
    ],
  },
  {
    id: "iron-cardio",
    title: "IRON & CARDIO",
    images: [
      {
        id: "g05",
        src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1400&auto=format&fit=crop",
        alt: "Rows of strength equipment on the gym floor",
        caption: "THE STRENGTH FLOOR",
      },
      {
        id: "g06",
        src: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800&auto=format&fit=crop",
        alt: "Loaded Olympic barbell at the platform",
        caption: "LOADED BARBELL",
      },
      {
        id: "g07",
        src: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=800&auto=format&fit=crop",
        alt: "Pairs of dumbbells racked in order",
        caption: "FREE WEIGHTS",
      },
      {
        id: "g08",
        src: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800&auto=format&fit=crop",
        alt: "High-performance cardio station in use",
        caption: "CARDIO STATIONS",
      },
    ],
  },
  {
    id: "functional-zone",
    title: "FUNCTIONAL ZONE",
    images: [
      {
        id: "g09",
        src: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1400&auto=format&fit=crop",
        alt: "Kettlebell and functional training equipment",
        caption: "FUNCTIONAL ZONE",
      },
      {
        id: "g10",
        src: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?q=80&w=800&auto=format&fit=crop",
        alt: "Athlete mid kettlebell swing",
        caption: "KETTLEBELL SWING",
      },
      {
        id: "g11",
        src: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=800&auto=format&fit=crop",
        alt: "Focused bicep curl on the training floor",
        caption: "CURL & CRUSH",
      },
      {
        id: "g12",
        src: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=800&auto=format&fit=crop",
        alt: "Dumbbell rack at the deadlift station",
        caption: "DEADLIFT STATION",
      },
    ],
  },
  {
    id: "energy-flow",
    title: "ENERGY & FLOW",
    images: [
      {
        id: "g13",
        src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1400&auto=format&fit=crop",
        alt: "Kettlebell training row in full flow",
        caption: "KETTLEBELL ROW",
      },
      {
        id: "g14",
        src: "https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=800&auto=format&fit=crop",
        alt: "Coach guiding a training session",
        caption: "COACHING DIALOGUE",
      },
      {
        id: "g15",
        src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800&auto=format&fit=crop",
        alt: "CrossFit rig setup in the arena",
        caption: "CROSSFIT ARENA",
      },
      {
        id: "g16",
        src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
        alt: "Member resting after a brutal session",
        caption: "DEDICATION",
      },
    ],
  },
];

export const FOOTER_DATA = {
  brandLine: "Modern Gym",
  description:
    "India's biggest and most trusted fitness center, helping people of all ages unlock their true strength.",
  socialLinks: [
    { label: "Facebook", href: "https://facebook.com", handle: "Modern Gym Delhi" },
    { label: "Instagram", href: "https://instagram.com", handle: "@moderngym" },
    { label: "WhatsApp", href: "https://wa.me/919876543210", handle: "+91 98765 43210" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms & Conditions", href: "#" },
    { label: "Cookie Policy", href: "#" },
  ],
};
