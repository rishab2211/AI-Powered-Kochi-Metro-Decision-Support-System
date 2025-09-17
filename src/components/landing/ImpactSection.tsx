// components/landing/ImpactSection.tsx
'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(1);
          }
        },
      });
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

const stats = [
    { value: 99.5, label: "Punctuality KPI Protected", suffix: "%"},
    { value: 15, label: "Reduction in Maintenance Costs", suffix: "% (Est.)"},
    { value: 100, label: "Advertiser SLA Compliance", suffix: "%"}
]

export default function ImpactSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Data-Driven, Quantifiable Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map(stat => (
            <div key={stat.label} className="bg-white/5 p-8 rounded-xl ring-1 ring-white/10">
              <p className="text-5xl font-extrabold text-blue-400">
                <Counter to={stat.value} />{stat.suffix}
              </p>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}