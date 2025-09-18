import Header from '../components/Header';
import HeroSection from '../components/landing/HeroSection';
import ProblemSection from '../components/landing/ProblemSection';
import SolutionSection from '../components/landing/SolutionSection';
import ImpactSection from '../components/landing/ImpactSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FutureVisionSection from '../components/landing/FutureVisionSection';
import Footer from '../components/Footer';

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        {/* You can apply the new card styling to your other sections (Solution, Impact, etc.) for full consistency! */}
        <SolutionSection />
        <ImpactSection />
        <HowItWorksSection />
        <FutureVisionSection />
      </main>
      <Footer />
    </>
  );
}