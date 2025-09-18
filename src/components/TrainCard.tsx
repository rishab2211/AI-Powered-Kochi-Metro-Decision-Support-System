'use client';

import { Train, calculateReadinessScore, getStatusColor } from '../lib/logic';
import { motion } from 'framer-motion';
import MileageIndicator from './MileageIndicator'; // We'll keep this useful component

interface TrainCardProps {
  train: Train;
  onClick: () => void;
}

export default function TrainCard({ train, onClick }: TrainCardProps) {
  const { score, issues } = calculateReadinessScore(train);
  const color = getStatusColor(score);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={cardVariants}
      onClick={onClick}
      className="bg-white/5 p-5 rounded-xl shadow-lg ring-1 ring-white/10 backdrop-blur-lg cursor-pointer h-full flex flex-col justify-between"
      whileHover={{ scale: 1.03, boxShadow: '0 0 25px rgba(0, 150, 255, 0.2)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      <div>
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs text-gray-400">Train ID</p>
            <h3 className="text-2xl font-bold text-white">{train.id}</h3>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-400">Readiness</p>
            <p className="text-2xl font-bold text-white">{score}</p>
          </div>
        </div>

        {/* Small status light under the score */}
        <div className={`w-full h-1 ${color} rounded-full mt-2 mb-4`}></div>
        
        {/* Main issue display */}
        <div className="h-12">
          {issues.length > 0 ? (
            <p className="text-sm text-red-400 font-semibold">{issues[0]}</p>
          ) : (
            <p className="text-sm text-green-400 font-semibold">All Systems Nominal</p>
          )}
        </div>
      </div>

      <MileageIndicator mileage={train.mileageKm} />
    </motion.div>
  );
}