'use client';

import HeroSection  from './landing/HeroSection';
import StatsSection  from './landing/StatsSection';
import FeaturesSection  from './landing/FeaturesSection';
import TestimonialsSection  from './landing/TestimonialsSection';
import CTASection  from './landing/CTASection';
import Footer from './landing/Footer';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.2,
      duration: 0.5
    } 
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    } 
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      duration: 0.6,
      ease: "easeIn"
    } 
  },
};

const scaleUp = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.7,
      ease: "anticipate"
    } 
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

// Constants
const BRAND_LOGOS = [
  { src: "/github-mark-white.svg", alt: "GitHub" },
  { src: "/google.svg", alt: "Google" },
  { src: "/microsoft.svg", alt: "Microsoft" },
  { src: "/aws.svg", alt: "AWS" },
  { src: "/netflix.svg", alt: "Netflix" },
  { src: "/meta.svg", alt: "Meta" },
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
}