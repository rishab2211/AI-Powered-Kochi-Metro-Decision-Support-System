// components/MileageIndicator.tsx
'use client';

interface MileageIndicatorProps {
  mileage: number;
  maxMileage?: number;
}

export default function MileageIndicator({ mileage, maxMileage = 15000 }: MileageIndicatorProps) {
  const percentage = (mileage / maxMileage) * 100;
  let barColor = 'bg-green-500';
  if (percentage > 50) barColor = 'bg-yellow-500';
  if (percentage > 80) barColor = 'bg-red-500';

  return (
    <div className="mt-4">
      <div className="flex justify-between items-center text-sm text-gray-400 mb-1">
        <span>Mileage</span>
        <span className="font-semibold text-white">{mileage.toLocaleString()} km</span>
      </div>
      <div className="w-full bg-gray-600 rounded-full h-2.5">
        <div 
          className={`${barColor} h-2.5 rounded-full`} 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}