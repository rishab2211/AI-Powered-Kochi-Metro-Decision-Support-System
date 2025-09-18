'use client';
import { Train, calculateReadinessScore } from '@/lib/logic';
import { motion } from 'framer-motion';

interface AlertsProps {
  trains: Train[];
  onTrainClick: (train: Train) => void;
}

export default function AlertsPanel({ trains, onTrainClick }: AlertsProps) {
  // Generate alerts from all trains
  const allIssues = trains
    .flatMap(train => calculateReadinessScore(train).issues.map(issue => ({ trainId: train.id, issue, train })))
    .slice(0, 5); // Show top 5 critical alerts

  // Find trains with branding at risk (e.g., >90% of commitment)
  const brandedTrainsAtRisk = trains
    .filter(t => t.branding.commitmentHours > 0 && (t.branding.currentHours / t.branding.commitmentHours) > 0.9)
    .sort((a,b) => (b.branding.currentHours / b.branding.commitmentHours) - (a.branding.currentHours / a.branding.commitmentHours));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Critical Alerts Section */}
      <div className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">
        <h3 className="text-lg font-bold text-white mb-3">Critical Fleet Alerts</h3>
        <ul className="space-y-2">
          {allIssues.map(({ trainId, issue }, index) => (
            <li key={index} onClick={() => onTrainClick(trains.find(t=>t.id === trainId)!)} className="text-sm p-2 rounded-md bg-gray-500/10 hover:bg-gray-500/20 cursor-pointer">
              <span className="font-semibold mr-2">[{trainId}]</span> {issue}
            </li>
          ))}
        </ul>
      </div>

      {/* Branding SLA Section */}
      <div className="bg-white/5 p-4 rounded-xl ring-1 ring-white/10">
        <h3 className="text-lg font-bold text-white mb-3">Branding SLA Status</h3>
        <ul className="space-y-3">
          {brandedTrainsAtRisk.map(train => {
            const percentage = Math.round((train.branding.currentHours / train.branding.commitmentHours) * 100);
            return (
              <li key={train.id}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="font-semibold">[{train.id}] {train.branding.wrap}</span>
                  <span className="text-yellow-300">{percentage}% of SLA</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2">
                  <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${percentage}%` }}></div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  );
}