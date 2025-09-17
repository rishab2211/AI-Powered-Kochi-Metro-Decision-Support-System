// components/dashboard/FleetSummary.tsx
'use client';
import { Train } from '@/lib/logic';
import { calculateReadinessScore } from '@/lib/logic';
import { motion } from 'framer-motion';
import { Ship, Anchor, ShieldCheck, Wrench } from 'lucide-react';

interface SummaryProps {
  trains: Train[];
}

const SummaryCard = ({ icon, label, value, color }: any) => (
  <motion.div 
    className="bg-white/5 ring-1 ring-white/10 p-4 rounded-lg flex items-center gap-4"
    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
  >
    <div className={`p-3 rounded-md ${color}`}>
      {icon}
    </div>
    <div>
      <p className="text-gray-400 text-sm">{label}</p>
      <p className="text-2xl font-bold text-white">{value}</p>
    </div>
  </motion.div>
);

export default function FleetSummary({ trains }: SummaryProps) {
  const status = trains.map(t => calculateReadinessScore(t).score);
  const ready = status.filter(s => s > 80).length;
  const standby = status.filter(s => s > 50 && s <= 80).length;
  const maintenance = status.filter(s => s <= 50).length;

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <SummaryCard icon={<Ship />} label="Total Fleet" value={trains.length} color="bg-blue-500/20 text-blue-300" />
      <SummaryCard icon={<ShieldCheck />} label="Ready for Service" value={ready} color="bg-green-500/20 text-green-300" />
      <SummaryCard icon={<Anchor />} label="On Standby" value={standby} color="bg-yellow-500/20 text-yellow-300" />
      <SummaryCard icon={<Wrench />} label="Needs Maintenance" value={maintenance} color="bg-red-500/20 text-red-300" />
    </div>
  );
}