// components/landing/HowItWorksSection.tsx
import { Database, BrainCircuit, CheckSquare } from 'lucide-react';

const steps = [
  {
    icon: <Database size={48} className="text-blue-400" />,
    title: "1. Ingest Data",
    description: "The platform aggregates real-time data from siloed sources like Maximo, IoT sensors, and logbooks into a unified data model."
  },
  {
    icon: <BrainCircuit size={48} className="text-blue-400" />,
    title: "2. Analyze & Rank",
    description: "A rule-based engine analyzes each trainset against six key variables, calculating a 'Readiness Score' for objective ranking."
  },
  {
    icon: <CheckSquare size={48} className="text-blue-400" />,
    title: "3. Simulate & Decide",
    description: "Supervisors use the 'What-If' simulator to model the impact of maintenance actions and make optimal, data-driven induction decisions."
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Dotted line for desktop */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-px bg-gray-700 -translate-y-12">
             <div className="w-full h-px border-t-2 border-dashed border-gray-600"></div>
          </div>
          {steps.map(step => (
            <div key={step.title} className="bg-gray-800 p-8 rounded-xl z-10">
              {step.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{step.title}</h3>
              <p className="text-gray-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}