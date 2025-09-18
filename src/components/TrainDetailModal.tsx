'use client';

import { useState } from 'react';
import { Train, calculateReadinessScore, getStatusColor } from '../lib/logic';

// Helper to get a future date string for the simulator
const getFutureDate = () => {
  const date = new Date();
  date.setFullYear(date.getFullYear() + 1);
  return date.toISOString().split('T')[0];
};

// Helper to get a past date string for the simulator
const getPastDate = () => {
  const date = new Date();
  date.setDate(date.getDate() - 1);
  return date.toISOString().split('T')[0];
};

const DetailItem = ({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) => (
  <div className="flex justify-between py-2 border-b border-gray-700">
    <span className="text-gray-400">{label}</span>
    <span className={`font-semibold ${valueColor || 'text-white'}`}>{value}</span>
  </div>
);

export default function TrainDetailModal({ train, onClose }: { train: Train, onClose: () => void }) {
  const [activeTab, setActiveTab] = useState<'details' | 'simulator'>('details');
  const [simulatedTrain, setSimulatedTrain] = useState<Train>({ ...train });

  const { score: originalScore } = calculateReadinessScore(train);
  const { score: simulatedScore } = calculateReadinessScore(simulatedTrain);

  const handleCertToggle = (certName: keyof Train['certificates']) => {
    setSimulatedTrain(prev => {
      const currentCerts = { ...prev.certificates };
      const isCurrentlyValid = new Date(currentCerts[certName]) > new Date();
      currentCerts[certName] = isCurrentlyValid ? getPastDate() : getFutureDate();
      return { ...prev, certificates: currentCerts };
    });
  };
  
  const handleJobCardToggle = () => {
    setSimulatedTrain(prev => ({...prev, jobCardOpen: !prev.jobCardOpen}));
  };
  
  const handleCleaningToggle = () => {
    setSimulatedTrain(prev => ({...prev, cleaningDue: !prev.cleaningDue}));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="bg-gray-800 rounded-2xl p-6 w-full max-w-lg relative shadow-2xl">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 text-2xl hover:text-white">&times;</button>
        <h2 className="text-3xl font-bold mb-4">Train {train.id}</h2>
        
        <div className="flex border-b border-gray-700 mb-6">
          <button onClick={() => setActiveTab('details')} className={`py-2 px-4 ${activeTab === 'details' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>Details</button>
          <button onClick={() => setActiveTab('simulator')} className={`py-2 px-4 ${activeTab === 'simulator' ? 'border-b-2 border-blue-500 text-white' : 'text-gray-400'}`}>What-If Simulator</button>
        </div>
        
        {activeTab === 'details' && (
          <div>
            <DetailItem label="Readiness Score" value={`${originalScore} / 100`} valueColor={originalScore > 80 ? 'text-green-400' : originalScore > 50 ? 'text-yellow-400' : 'text-red-400'}/>
            <DetailItem label="Stabling Position" value={train.stablingPosition} />
            <DetailItem label="Last Maintenance" value={train.lastMaintenance} />
            <DetailItem label="Exterior Branding" value={train.branding.wrap} />
            <h4 className="text-lg font-semibold mt-4 mb-2 text-gray-300">Certificate Status</h4>
            {Object.entries(train.certificates).map(([name, date]) => {
                const daysLeft = Math.ceil((new Date(date).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
                const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
                return <DetailItem key={name} label={capitalizedName} value={daysLeft > 0 ? `Valid (${daysLeft} days left)` : 'Expired'} valueColor={daysLeft > 7 ? 'text-green-400' : daysLeft > 0 ? 'text-yellow-400' : 'text-red-400'}/>
            })}
          </div>
        )}

        {activeTab === 'simulator' && (
          <div>
            <div className={`w-full text-center p-4 rounded-lg mb-4 ${getStatusColor(simulatedScore)}`}>
              <p className="text-lg">New Readiness Score: <span className="font-bold text-2xl">{simulatedScore} / 100</span></p>
            </div>
            <div className="space-y-3">
              <h4 className='text-gray-300 font-semibold'>Simulate Actions:</h4>
              <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <label>Rolling Stock Cert Valid?</label>
                <input type="checkbox" className="toggle" checked={new Date(simulatedTrain.certificates.rollingStock) > new Date()} onChange={() => handleCertToggle('rollingStock')} />
              </div>
              <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <label>Signalling Cert Valid?</label>
                <input type="checkbox" className="toggle" checked={new Date(simulatedTrain.certificates.signalling) > new Date()} onChange={() => handleCertToggle('signalling')} />
              </div>
              <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <label>Telecom Cert Valid?</label>
                <input type="checkbox" className="toggle" checked={new Date(simulatedTrain.certificates.telecom) > new Date()} onChange={() => handleCertToggle('telecom')} />
              </div>
              <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <label>Job Card Closed?</label>
                <input type="checkbox" className="toggle" checked={!simulatedTrain.jobCardOpen} onChange={handleJobCardToggle} />
              </div>
               <div className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
                <label>Cleaning Done?</label>
                <input type="checkbox" className="toggle" checked={!simulatedTrain.cleaningDue} onChange={handleCleaningToggle} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}