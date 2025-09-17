// app/page.tsx
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FutureVisionSection from '../components/landing/FutureVisionSection';
import Footer from '../components/Footer';
import ImpactSection from '@/components/landing/ImpactSection';

export default function LandingPage() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ImpactSection />
      <HowItWorksSection />
      <FutureVisionSection />
      <Footer />
    </div>
  );
}