// components/landing/FutureVisionSection.tsx
import { Bot, BarChart, GitBranch } from 'lucide-react';

const visions = [
  {
    icon: <Bot size={40} className="text-blue-400" />,
    title: "Predictive Maintenance",
    description: "Evolve the rule-based engine into an ML model that forecasts component failures before they happen, minimizing unscheduled downtime."
  },
  {
    icon: <BarChart size={40} className="text-blue-400" />,
    title: "Multi-Objective Optimization",
    description: "Implement algorithms to automatically recommend the optimal fleet plan that perfectly balances service readiness, cost, and reliability."
  },
  {
    icon: <GitBranch size={40} className="text-blue-400" />,
    title: "Full System Integration",
    description: "Integrate with passenger information systems for real-time service updates and with HR systems to optimize staff rostering."
  }
];

export default function FutureVisionSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Future Vision: Towards a Smart Metro</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {visions.map(vision => (
            <div key={vision.title} className="bg-gray-900 p-8 rounded-xl">
              {vision.icon}
              <h3 className="text-xl font-bold mt-4 mb-2">{vision.title}</h3>
              <p className="text-gray-400">{vision.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}