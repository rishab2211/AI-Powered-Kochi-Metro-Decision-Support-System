import { Train, calculateReadinessScore } from '@/lib/logic';
import TrainCard from '../TrainCard'; // We will use our revamped TrainCard here

interface PriorityProps {
  trains: Train[];
  onTrainClick: (train: Train) => void;
}

export default function PriorityFocus({ trains, onTrainClick }: PriorityProps) {
  if (trains.length === 0) return null;

  const sortedTrains = [...trains]
    .map(train => ({ ...train, score: calculateReadinessScore(train).score }))
    .sort((a, b) => a.score - b.score);

  const worstTrain = sortedTrains[0];
  const bestTrain = sortedTrains[sortedTrains.length - 1];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold text-white mb-4">Priority Focus</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <h3 className="text-lg font-semibold text-red-400 mb-2">🔴 Urgent Attention</h3>
          <TrainCard train={worstTrain} onClick={() => onTrainClick(worstTrain)} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-green-400 mb-2">🟢 Top Performer</h3>
          <TrainCard train={bestTrain} onClick={() => onTrainClick(bestTrain)} />
        </div>
      </div>
    </div>
  );
}