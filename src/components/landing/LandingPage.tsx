
import React from 'react';
import LandingHero from './LandingHero';
import FeatureCards from './FeatureCards';
import BenefitsSection from './BenefitsSection';
import FooterLinks from './FooterLinks';
import OtherTools from '@/components/OtherTools';
import GoldLoanTool from '@/components/GoldLoanTool';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-white to-legal-light">
      <LandingHero onGetStarted={onGetStarted} />
      <FeatureCards />
      <GoldLoanTool />
      <BenefitsSection onGetStarted={onGetStarted} />
      <FooterLinks />
      <OtherTools />
    </div>
  );
};

export default LandingPage;
