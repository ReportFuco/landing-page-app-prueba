import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import ImpactSection from '@/components/sections/ImpactSection';
import InsightsSection from '@/components/sections/InsightsSection';
import MethodologySection from '@/components/sections/MethodologySection';
import ServicesSection from '@/components/sections/ServicesSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MethodologySection />
      <ImpactSection />
      <ClientsSection />
      <InsightsSection />
      <CTASection />
    </>
  );
}
