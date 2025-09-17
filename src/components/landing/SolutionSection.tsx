// components/landing/SolutionSection.tsx
import Image from 'next/image';

export default function SolutionSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-2">Our Solution: The Decision Hub</h2>
        <p className="text-gray-400 mb-12">A single source of truth that turns data into decisions.</p>
        <div className="bg-gray-800 p-4 rounded-xl shadow-2xl">
          {/* Replace with a real screenshot of your dashboard! */}
          <Image src="/dashboard-screenshot.png" alt="Dashboard Screenshot" width={1200} height={675} className="rounded-lg" />
        </div>
      </div>
    </section>
  );
}