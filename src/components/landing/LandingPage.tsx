
import React, { useState, useEffect } from 'react';
import LandingHero from './LandingHero';
import FeatureCards from './FeatureCards';
import BenefitsSection from './BenefitsSection';
import FooterLinks from './FooterLinks';
import OtherTools from '@/components/OtherTools';
import GoldLoanTool from '@/components/GoldLoanTool';
import AdInContent from '@/components/ads/AdInContent';
import AdSidebar from '@/components/ads/AdSidebar';
import UnifiedAdBanner from '@/components/ads/UnifiedAdBanner';
import UnifiedAdInterstitial from '@/components/ads/UnifiedAdInterstitial';
import { usePlatform } from '@/hooks/use-platform';
import { AdMobService } from '@/services/admob';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const [showInterstitial, setShowInterstitial] = useState(false);
  const { isNative, isWeb } = usePlatform();

  // Initialize AdMob for native platforms
  useEffect(() => {
    if (isNative) {
      AdMobService.initialize();
    }
  }, [isNative]);

  // Show interstitial ad after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInterstitial(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const handleGetStartedWithAd = () => {
    setShowInterstitial(true);
    setTimeout(() => {
      onGetStarted();
    }, 3000);
  };

  return (
    <div className="min-h-[80vh] flex">
      {/* Sidebar Ad for Desktop - only show on web */}
      {isWeb && <AdSidebar adSlot="2312152116" className="w-72 p-4" />}
      
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-gradient-to-b from-white to-legal-light">
        {/* Header Banner Ad - unified for web and mobile */}
        <div className="w-full mb-8">
          <UnifiedAdBanner
            adSlot="2312152116"
            className="flex justify-center"
            style={{ maxWidth: '728px', height: '90px', margin: '0 auto' }}
          />
        </div>

        <LandingHero onGetStarted={handleGetStartedWithAd} />
        
        {/* In-Content Ad after Hero - only on web */}
        {isWeb && <AdInContent adSlot="2312152116" className="max-w-4xl mx-auto" />}
        
        <FeatureCards />
        
        {/* In-Content Ad after Features - only on web */}
        {isWeb && <AdInContent adSlot="2312152116" className="max-w-4xl mx-auto" />}
        
        <BenefitsSection onGetStarted={handleGetStartedWithAd} />
        
        {/* In-Content Ad after Benefits - only on web */}
        {isWeb && <AdInContent adSlot="2312152116" className="max-w-4xl mx-auto" />}
        
        <OtherTools />
        <GoldLoanTool />
        
        {/* Footer Banner Ad - unified for web and mobile */}
        <div className="w-full mt-8">
          <UnifiedAdBanner
            adSlot="2312152116"
            className="flex justify-center"
            style={{ maxWidth: '728px', height: '90px', margin: '0 auto' }}
          />
        </div>
        
        <FooterLinks />
      </div>

      {/* Right Sidebar Ad for Desktop - only show on web */}
      {isWeb && <AdSidebar adSlot="2312152116" className="w-72 p-4" />}

      {/* Interstitial Ad - unified for web and mobile */}
      <UnifiedAdInterstitial
        isOpen={showInterstitial}
        onClose={() => setShowInterstitial(false)}
        adSlot="8678249919"
      />
    </div>
  );
};

export default LandingPage;
