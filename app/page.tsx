import AboutSection from '@/components/sections/AboutSection';
import ClientsSection from '@/components/sections/ClientsSection';
import CTASection from '@/components/sections/CTASection';
import HeroSection from '@/components/sections/HeroSection';
import ProposalsScrollSection from '@/components/sections/ProposalsScrollSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProposalsScrollSection />
      <AboutSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
