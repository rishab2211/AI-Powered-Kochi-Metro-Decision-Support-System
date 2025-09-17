// components/landing/HeroSection.tsx
import Link from 'next/link';
import AnimatedProblemText from './AnimatedProblemText';


  export default function HeroSection() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center text-white p-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/hero-bg.jpg')" }}></div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      <div className="relative z-10">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
          From Nightly Chaos to Morning Clarity
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          An intelligent decision-support system to solve the complex daily puzzle of fleet induction.
        </p>

        {/* Animated text component */}
        <AnimatedProblemText />

        <div className="mt-8">
          <Link href="/dashboard" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
            View the Command Center
          </Link>
        </div>
      </div>
    </section>
  );
}
