import HeroSection from "@/pages/LandingPage/section/hero-section";
import AboutSection from "@/pages/LandingPage/section/about-section";
import MomentSection from "@/pages/LandingPage/section/moment-section";
import LetterSection from "@/pages/LandingPage/section/letter-section";
import FinaleSection from "@/pages/LandingPage/section/finale-section";

const LandingPage = () => {
  return (
    <main className="w-full bg-red-100">
      <HeroSection />
      <AboutSection />
      <MomentSection />
      <LetterSection />
      <FinaleSection />
    </main>
  );
};

export default LandingPage;
