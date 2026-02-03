import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import LabPhilosophy from "@/components/LabPhilosophy";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <LabPhilosophy />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;