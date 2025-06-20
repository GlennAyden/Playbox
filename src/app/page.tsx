import BenefitsSection from "@/components/landing/BenefitsSection";
import CommunitySection from "@/components/landing/CommunitySection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import PricingSection from "@/components/landing/PricingSection";
import ToolsSection from "@/components/landing/ToolsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="flex flex-col">
        <HeroSection />
        <ToolsSection />
        <BenefitsSection />
        <PricingSection />
        <FaqSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}
