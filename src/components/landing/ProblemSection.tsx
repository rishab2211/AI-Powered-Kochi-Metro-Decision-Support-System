// components/landing/ProblemSection.tsx
import { AlertTriangle, Clock, FileSpreadsheet, MessageSquare } from 'lucide-react';

const problems = [
  {
    icon: <FileSpreadsheet size={40} className="text-blue-400" />,
    title: "Siloed Data",
    description: "Critical information is scattered across spreadsheets, logbooks, and WhatsApp messages."
  },
  {
    icon: <Clock size={40} className="text-blue-400" />,
    title: "Time-Compressed Decisions",
    description: "Supervisors have a narrow 2-hour window to make complex, high-stakes induction choices."
  },
  {
    icon: <AlertTriangle size={40} className="text-blue-400" />,
    title: "Error-Prone Process",
    description: "Manual reconciliation is opaque, non-repeatable, and risks service disruptions and financial penalties."
  }
];

export default function ProblemSection() {
  return (
    <section className="py-20 bg-gray-900 text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">The 2-Hour Window to Untangle Chaos</h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-16">
          Between 21:00 and 23:00 every night, supervisors face a high-stakes data puzzle. A single mistake can impact thousands of commuters.
        </p>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Step 1: The Data Maze */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500/10 text-blue-400 p-4 rounded-full ring-1 ring-blue-500/30 mb-4">
              <FileSpreadsheet size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">The Data Maze</h3>
            <p className="text-gray-400">
              Critical data is scattered. Fitness certificates are in logbooks, job cards are in Maximo exports, and branding priorities arrive via WhatsApp.
            </p>
          </div>
          {/* Step 2: The Human Bottleneck */}
          <div className="flex flex-col items-center">
            <div className="bg-yellow-500/10 text-yellow-400 p-4 rounded-full ring-1 ring-yellow-500/30 mb-4">
              <MessageSquare size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">The Human Bottleneck</h3>
            <p className="text-gray-400">
              Supervisors must manually reconcile these conflicting data points using experience and ad-hoc filters, an opaque and unrepeatable process.
            </p>
          </div>
          {/* Step 3: The High Cost of Errors */}
          <div className="flex flex-col items-center">
            <div className="bg-red-500/10 text-red-400 p-4 rounded-full ring-1 ring-red-500/30 mb-4">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">The High Cost of Errors</h3>
            <p className="text-gray-400">
              A missed certificate can force a rake withdrawal, eroding the 99.5% punctuality KPI and risking revenue penalties from unmet advertiser SLAs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}