// components/RecommendedList.tsx
'use client';
import { Train, calculateReadinessScore } from '../lib/logic';

interface RecommendedListProps {
  trains: Train[];
}

export default function RecommendedList({ trains }: RecommendedListProps) {
  // Get top 5 trains with score > 80 (Green status)
  const recommended = trains
    .map(train => ({ ...train, score: calculateReadinessScore(train).score }))
    .filter(train => train.score > 80)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5);

  return (
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg mt-12">
      <h3 className="text-2xl font-bold text-white mb-4">⭐ Recommended for Service</h3>
      {recommended.length > 0 ? (
        <ul className="space-y-3">
          {recommended.map((train, index) => (
            <li key={train.id} className="flex justify-between items-center bg-gray-700 p-3 rounded-md">
              <span className="font-semibold text-lg">{index + 1}. Train {train.id}</span>
              <span className="font-bold text-green-400">Score: {train.score}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-400">No trains currently meet the criteria for service recommendation.</p>
      )}
    </div>
  );
}