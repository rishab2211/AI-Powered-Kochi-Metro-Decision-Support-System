// components/landing/AnimatedProblemText.tsx
'use client';
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const problems = [
  "Fitness Certificate Expired?",
  "Branding SLA Met?",
  "Mileage Unbalanced?",
  "Job Card Still Open?",
  "Stabling Conflict?",
  "Cleaning Overdue?"
];

export default function AnimatedProblemText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % problems.length);
    }, 2500); // Change problem every 2.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-xl md:text-2xl font-semibold text-yellow-300 h-8 mt-4">
      <AnimatePresence mode="wait">
        <motion.div
          key={problems[index]}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          {problems[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}