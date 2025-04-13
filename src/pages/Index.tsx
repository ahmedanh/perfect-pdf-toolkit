
import Footer from "@/components/Footer";
import FeaturesGrid from "@/components/FeaturesGrid";
import HeroSection from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import PricingSection from "@/components/PricingSection";
import TestimonialSection from "@/components/TestimonialSection";
import ToolsSection from "@/components/ToolsSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesGrid />
        <ToolsSection />
        <HowItWorks />
        <TestimonialSection />
        <PricingSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
