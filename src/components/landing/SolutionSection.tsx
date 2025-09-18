'use client';
import { Radar, GitPullRequest, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export default function SolutionSection() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">The Smart Solution: Unify & Optimize</h2>
        <p className="text-slate-300 max-w-3xl mx-auto mb-16">
          Our dashboard transforms fragmented data into actionable insights, empowering supervisors with clarity.
        </p>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><Radar size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">Centralized Data Hub</h3>
            <p className="text-slate-400">All critical train data, from certificates to job cards, consolidated in one intuitive view.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><GitPullRequest size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">Intelligent Prioritization</h3>
            <p className="text-slate-400">Automated readiness scores highlight urgent issues, guiding optimal allocation decisions.</p>
          </motion.div>
          <motion.div variants={cardVariants} className="bg-slate-800/50 p-8 rounded-2xl ring-1 ring-white/10">
            <div className="flex justify-center mb-4"><TrendingUp size={32} className="text-blue-400" /></div>
            <h3 className="text-xl font-bold mb-2 text-white">Predictive "What-If" Simulation</h3>
            <p className="text-slate-400">Test different scenarios to understand impacts before making real-world commitments.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}