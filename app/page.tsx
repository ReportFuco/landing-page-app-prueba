import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
