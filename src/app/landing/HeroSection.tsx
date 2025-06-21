'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { SearchIcon, CodeIcon } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const floatingAnimation = {
  float: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        bg-slate-100
        dark:bg-slate-900
        pt-24 pb-10 md:pt-38 md:pb-16
        transition-colors
      "
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-[size:20px_20px] opacity-10 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-transparent dark:from-slate-900/60 dark:to-transparent" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#818cf8]/30 dark:bg-[#818cf8]/20 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#818cf8]/20 dark:bg-[#818cf8]/10 rounded-full blur-[100px] animate-float animation-delay-2000" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[#818cf8]/10 dark:bg-[#818cf8]/20 rounded-full blur-[80px] animate-float animation-delay-3000" />

      <div className="container relative z-10 mx-auto max-w-7xl px-4 text-center md:px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          <motion.div
            variants={floatingAnimation}
            animate="float"
            className="mb-8"
          >
            <Badge className="inline-block rounded-full border border-[#818cf8]/30 bg-[#818cf8]/10 px-4 py-1.5 text-sm text-[#0f172a] dark:border-white/20 dark:bg-white/10 dark:text-white backdrop-blur-sm">
              🚀 NEXT GENERATION OF DEVELOPER COLLABORATION
            </Badge>
          </motion.div>
          
          <h1 className="text-5xl font-bold tracking-tight text-[#0f172a] dark:text-white md:text-6xl lg:text-7xl">
            <span className="block">Code Together in</span>
            <span className="block bg-gradient-to-r from-[#818cf8] to-indigo-500 bg-clip-text text-transparent">
              Real-Time Rooms
            </span>
          </h1>
          
          <p className="mx-auto mb-10 mt-6 max-w-2xl text-xl text-slate-700 dark:text-blue-100/80">
            DevRoom connects developers through live coding sessions where you can pair program, share screens, and collaborate on projects in real-time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="text-lg bg-[#818cf8] text-[#0f172a] hover:bg-[#6366f1] shadow-lg shadow-blue-500/20 dark:shadow-blue-700/30">
              <Link href="/browse">
                <SearchIcon className="mr-2 h-5 w-5" />
                Browse Rooms
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg border-2 border-[#818cf8]/30 bg-white/50 text-[#818cf8] hover:bg-[#eef0fe] hover:border-[#818cf8] dark:border-white/30 dark:bg-transparent dark:text-white dark:hover:bg-white/10 backdrop-blur-sm">
              <Link href="/create-room">
                <CodeIcon className="mr-2 h-5 w-5" />
                Create Room
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}