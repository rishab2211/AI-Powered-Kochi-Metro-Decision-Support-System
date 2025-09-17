// // app/dashboard/page.tsx
// 'use client';

// import { useState, useMemo } from 'react';
// import { Train } from '@/lib/logic';
// import trainData from '../data/trains.json';
// import { motion, AnimatePresence } from 'framer-motion';

// // New Dashboard Components
// import FleetSummary from '@/components/dashboard/FleetSummary';
// import PriorityFocus from '@/components/dashboard/PriorityFocus';

// // Re-used components
// import TrainCard from '@/components/TrainCard';
// import TrainDetailModal from '@/components/TrainDetailModal';

// export default function DashboardPage() {
//   const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);

//   // We are using the full, unfiltered list for this demo-focused layout
//   const allTrains = useMemo(() => trainData as Train[], []);

//   return (
//     <>
//       <div className="aurora-background"></div>
//       <main className="min-h-screen p-4 sm:p-6 lg:p-8 text-white relative">
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         >
//           <header className="mb-8">
//             <h1 className="text-4xl font-extrabold tracking-tight">Fleet Command Center</h1>
//             <p className="text-lg text-gray-400 mt-1">
//               Live Induction & Readiness Overview for Kochi Metro
//             </p>
//           </header>

//           <FleetSummary trains={allTrains} />
//           <PriorityFocus trains={allTrains} onTrainClick={setSelectedTrain} />
          
//           <div>
//             <h2 className="text-2xl font-bold text-white mb-4 mt-8">Full Fleet Overview</h2>
//             <motion.div 
//               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
//               initial="hidden"
//               animate="visible"
//               variants={{
//                 visible: {
//                   transition: {
//                     staggerChildren: 0.05,
//                   },
//                 },
//               }}
//             >
//               {allTrains.map((train) => (
//                 <TrainCard key={train.id} train={train} onClick={() => setSelectedTrain(train)} />
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
        
//         <AnimatePresence>
//           {selectedTrain && (
//             <TrainDetailModal 
//               train={selectedTrain} 
//               onClose={() => setSelectedTrain(null)}
//             />
//           )}
//         </AnimatePresence>
//       </main>
//     </>
//   );
// }





// app/dashboard/page.tsx
'use client';

import { useState, useMemo } from 'react';
import { Train } from '@/lib/logic';
import trainData from '../data/trains.json';
import { motion, AnimatePresence } from 'framer-motion';

// Dashboard Components
import FleetSummary from '@/components/dashboard/FleetSummary';
import AlertsPanel from '@/components/dashboard/AlertsPanel'; // New
import StablingYardView from '@/components/dashboard/StablingYardView'; // New

// Re-used components
import TrainCard from '@/components/TrainCard';
import TrainDetailModal from '@/components/TrainDetailModal';

export default function DashboardPage() {
  const [selectedTrain, setSelectedTrain] = useState<Train | null>(null);
  const allTrains = useMemo(() => trainData as unknown as Train[], []);

  return (
    <>
      <div className="aurora-background"></div>
      <main className="min-h-screen p-4 sm:p-6 lg:p-8 text-white relative">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight">Fleet Command Center</h1>
            <p className="text-lg text-gray-400 mt-1">Kochi Metro Decision Support System</p>
          </header>

          <FleetSummary trains={allTrains} />
          
          {/* NEW DYNAMIC PANELS */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mb-8">
              <AlertsPanel trains={allTrains} onTrainClick={setSelectedTrain} />
              <StablingYardView trains={allTrains} onTrainClick={setSelectedTrain} />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Full Fleet Overview</h2>
            <motion.div /* ... existing animation props ... */>
              {allTrains.map((train) => (
                <TrainCard key={train.id} train={train} onClick={() => setSelectedTrain(train)} />
              ))}
            </motion.div>
          </div>
        </motion.div>
        
        <AnimatePresence>
          {selectedTrain && (
            <TrainDetailModal 
              train={selectedTrain} 
              onClose={() => setSelectedTrain(null)}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}