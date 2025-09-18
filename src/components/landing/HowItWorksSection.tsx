'use client';
import { Upload, Shuffle, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const stepVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 }
};

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How It Transforms Your Operations</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-16">
          The decision support system streamlines the induction process in three simple steps.
        </p>
        <div className="relative">
          {/* Decorative lines connecting steps */}
          <div className="hidden md:block absolute top-1/3 left-1/2 -translate-x-1/2 w-[70%] h-0.5 bg-blue-400/20 transform -translate-y-1/2"></div>
          <motion.div
            className="grid md:grid-cols-3 gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.2 }}
          >
            <motion.div variants={stepVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10 flex flex-col items-center">
              <div className="flex justify-center mb-4"><Upload size={36} className="text-blue-400" /></div>
              <h3 className="text-2xl font-bold mb-2 text-white">1. Data Ingestion</h3>
              <p className="text-slate-400">Raw data from various sources (Maximo, manual logs, etc.) is automatically imported.</p>
            </motion.div>
            <motion.div variants={stepVariants} transition={{ delay: 0.2 + 0.2 }} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10 flex flex-col items-center">
              <div className="flex justify-center mb-4"><Shuffle size={36} className="text-blue-400" /></div>
              <h3 className="text-2xl font-bold mb-2 text-white">2. Intelligent Analysis</h3>
              <p className="text-slate-400">Our engine processes data, calculates readiness scores, and identifies conflicts.</p>
            </motion.div>
            <motion.div variants={stepVariants} transition={{ delay: 0.4 + 0.2 }} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10 flex flex-col items-center">
              <div className="flex justify-center mb-4"><CheckCircle2 size={36} className="text-blue-400" /></div>
              <h3 className="text-2xl font-bold mb-2 text-white">3. Optimized Induction</h3>
              <p className="text-slate-400">Supervisors use clear recommendations to induct trains with confidence and efficiency.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}