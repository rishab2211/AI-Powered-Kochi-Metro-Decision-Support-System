'use client';
import { motion, useInView, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

/**
 * A reusable component that animates a number counting up when it becomes visible.
 */
function Counter({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(0, to, {
        duration: 2,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = value.toFixed(1);
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, to]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { value: 99.5, label: "Punctuality KPI Protected", suffix: "%" },
  { value: 15, label: "Reduction in Maintenance Costs", suffix: "% (Est.)" },
  { value: 100, label: "Advertiser SLA Compliance", suffix: "%" }
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};


export default function ImpactSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
          Data-Driven, Quantifiable Impact
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {stats.map(stat => (
            <motion.div key={stat.label} variants={cardVariants} className="relative p-8 rounded-2xl bg-slate-800/50 ring-1 ring-white/10">
              <p className="text-5xl lg:text-6xl font-extrabold text-blue-400">
                <Counter to={stat.value} />{stat.suffix}
              </p>
              <p className="text-slate-400 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}