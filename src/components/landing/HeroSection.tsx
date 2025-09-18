'use client';
import Link from 'next/link';
import AnimatedProblemText from './AnimatedProblemText';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  ArrowRight,
  Database,
  ShieldCheck,
  Cpu,
  TrainFront, // Specific train icon
  BrainCircuit, // Specific AI icon
  BarChart,     // Icon for data/analytics
  Clock         // Icon for time-sensitivity
} from 'lucide-react';

// A component for the floating icons (with client-side animation to prevent hydration errors)
const FloatingIcon = ({ icon, className }: { icon: React.ReactNode; className?: string }) => {
  const [animationStyle, setAnimationStyle] = useState<React.CSSProperties | null>(null);

  useEffect(() => {
    // This code runs only on the client, after the page has loaded
    const duration = Math.random() * 6 + 12; // Slower, more subtle animation (12s to 18s)
    const delay = Math.random() * 5;
    setAnimationStyle({
      animation: `float ${duration}s ease-in-out ${delay}s infinite`,
    });
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.5, delay: Math.random() * 0.5 + 0.2 }} // Randomize entrance delay
      className={`absolute text-slate-500/20 ${className}`} // Made icons more transparent
      style={animationStyle || { opacity: 0 }} // Start with opacity 0 on server
    >
      {icon}
    </motion.div>
  );
};

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center p-4 overflow-hidden bg-slate-900">
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px]"></div>

      {/* --- NEW & EXPANDED SET OF FLOATING ICONS --- */}
      <FloatingIcon icon={<TrainFront size={64} />} className="top-[15%] left-[10%]" />
      <FloatingIcon icon={<BrainCircuit size={48} />} className="top-[20%] right-[15%]" />
      <FloatingIcon icon={<Database size={44} />} className="bottom-[25%] left-[20%]" />
      <FloatingIcon icon={<ShieldCheck size={56} />} className="bottom-[20%] right-[10%]" />
      <FloatingIcon icon={<BarChart size={40} />} className="top-[55%] right-[25%]" />
      <FloatingIcon icon={<Clock size={48} />} className="top-[50%] left-[30%]" />
      <FloatingIcon icon={<Cpu size={36} />} className="bottom-[15%] left-[45%]" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-400"
        >
          From Nightly Chaos to Morning Clarity
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg md:text-xl text-slate-300 max-w-3xl mx-auto"
        >
          An intelligent decision-support system to solve the complex daily puzzle of fleet induction.
        </motion.p>

        <motion.div variants={itemVariants}>
          <AnimatedProblemText />
        </motion.div>

        <motion.div variants={itemVariants} className="mt-8">
          <Link
            href="/dashboard"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-blue-600 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:shadow-[0_0_35px_rgba(59,130,246,0.7)]"
          >
            <span className="absolute top-0 left-0 h-0 w-full bg-blue-500 transition-all duration-300 group-hover:h-full"></span>
            <span className="relative flex items-center gap-2">
              See the Command Center
              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" size={20} />
            </span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}