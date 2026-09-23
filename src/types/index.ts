export interface NavItem {
  label: string;
  href: string;
}

export interface Facility {
  id: string;
  number: string;
  title: string;
  description: string;
  features: string[];
  tag: string;
  imageUrl: string;
}

export interface Trainer {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  bio: string;
  shortBio: string;
  imageUrl: string;
  certifications: string[];
  instagram?: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  period: string;
  price: string;
  rawPrice: number;
  highlight?: boolean;
  badge?: string;
  features: string[];
}

export interface PersonalTrainingPlan {
  id: string;
  name: string;
  sessions: string;
  price: string;
  highlight?: boolean;
  badge?: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating?: number;
  type: "trainer" | "member";
  avatarUrl?: string;
}

export interface StatItem {
  number: string;
  label: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface GallerySlide {
  id: string;
  title: string;
  images: GalleryImage[];
}
