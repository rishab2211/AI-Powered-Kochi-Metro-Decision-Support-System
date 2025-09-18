'use client';
import { FileSpreadsheet, MessageSquare, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function ProblemSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The 2-Hour Window to Untangle Chaos</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-16">
          Between 21:00 and 23:00 every night, supervisors face a high-stakes data puzzle.
        </p>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><FileSpreadsheet size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">The Data Maze</h3>
            <p className="text-slate-400">Critical data is scattered across logbooks, Maximo exports, and WhatsApp messages.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><MessageSquare size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">The Human Bottleneck</h3>
            <p className="text-slate-400">An opaque, manual reconciliation process relies on ad-hoc filters and gut feelings.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><AlertTriangle size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">The High Cost of Errors</h3>
            <p className="text-slate-400">Mistakes risk service disruptions, eroding the 99.5% punctuality KPI.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}