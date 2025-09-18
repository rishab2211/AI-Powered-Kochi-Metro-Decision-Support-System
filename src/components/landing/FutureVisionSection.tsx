'use client';
import { Sparkles, Brain, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function FutureVisionSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Our Vision for Tomorrow</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-16">
          Continuous innovation to further enhance operational excellence and strategic planning.
        </p>
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><Brain size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">AI-Powered Predictive Maintenance</h3>
            <p className="text-slate-400">Forecast component failures and schedule maintenance proactively to minimize downtime.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><Scale size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">Automated Compliance Reporting</h3>
            <p className="text-slate-400">Generate audit-ready reports on time, every time, ensuring regulatory adherence.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><Sparkles size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">Dynamic Fleet Optimization</h3>
            <p className="text-slate-400">Real-time adjustments to fleet schedules based on live operational data and demand.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}