// components/dashboard/StablingYardView.tsx
'use client';
import { Train, calculateReadinessScore, getStatusColor } from '@/lib/logic';
import { motion } from 'framer-motion';

interface YardProps {
  trains: Train[];
  onTrainClick: (train: Train) => void;
}

const Bay = ({ train, onClick }: { train?: Train; onClick: () => void }) => {
  const score = train ? calculateReadinessScore(train).score : -1;
  const color = train ? getStatusColor(score) : 'bg-gray-700/50';
  const hasConflict = train && score <= 50 && train.stablingPosition.startsWith('PBL');

  return (
    <motion.div
      onClick={onClick}
      className={`relative rounded-md flex flex-col items-center justify-center cursor-pointer p-2 ${color} ${hasConflict ? 'ring-2 ring-red-500' : ''}`}
      whileHover={{ scale: 1.1, zIndex: 10 }}
    >
      <p className="font-bold text-sm">{train?.id}</p>
      <p className="text-xs text-white/70">{train?.stablingPosition}</p>
      {hasConflict && <div className="absolute top-1 right-1 text-xs">⚠️</div>}
    </motion.div>
  );
};

export default function StablingYardView({ trains, onTrainClick }: YardProps) {
  const pblBays = Array.from({ length: 12 }, (_, i) => `PBL-${i + 1}`);
  const iblBays = Array.from({ length: 8 }, (_, i) => `IBL-${i + 1}`);

  const findTrainInBay = (bay: string) => trains.find(t => t.stablingPosition === bay);

  return (
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">Stabling Yard Overview</h2>
      <div className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">
        <h3 className="font-semibold text-gray-300 mb-2">Passenger Bay Lines (PBL)</h3>
        <div className="grid grid-cols-6 gap-2">
          {pblBays.map(bay => (
            <Bay key={bay} train={findTrainInBay(bay)} onClick={() => { const t = findTrainInBay(bay); if(t) onTrainClick(t); }} />
          ))}
        </div>
        <h3 className="font-semibold text-gray-300 mt-4 mb-2">Inspection Bay Lines (IBL)</h3>
        <div className="grid grid-cols-6 gap-2">
          {iblBays.map(bay => (
            <Bay key={bay} train={findTrainInBay(bay)} onClick={() => { const t = findTrainInBay(bay); if(t) onTrainClick(t); }} />
          ))}
        </div>
      </div>
    </div>
  );
}