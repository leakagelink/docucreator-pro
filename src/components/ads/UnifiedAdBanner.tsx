
import React, { useEffect } from 'react';
import { usePlatform } from '@/hooks/use-platform';
import { AdMobService } from '@/services/admob';
import AdBanner from './AdBanner';
import { BannerAdPosition } from '@capacitor-community/admob';

interface UnifiedAdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
  position?: BannerAdPosition;
}

const UnifiedAdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  className = '', 
  style = {},
  position = BannerAdPosition.BOTTOM_CENTER
}: UnifiedAdBannerProps) => {
  const { isNative, isWeb } = usePlatform();

  useEffect(() => {
    if (isNative && AdMobService.AD_UNITS.BANNER) {
      // Initialize AdMob and show banner for native platforms only if banner unit is set
      AdMobService.initialize().then(() => {
        AdMobService.showBanner(position);
      });

      // Cleanup function to hide banner when component unmounts
      return () => {
        AdMobService.hideBanner();
      };
    }
  }, [isNative, position]);

  // For web platforms, use AdSense
  if (isWeb) {
    return (
      <AdBanner
        adSlot={adSlot}
        adFormat={adFormat}
        className={className}
        style={style}
      />
    );
  }

  // For native platforms, AdMob banner is handled natively or skipped if not configured
  return (
    <div className={`admob-banner-placeholder ${className}`} style={style}>
      {/* AdMob banner is displayed natively (skipped if no unit set) */}
    </div>
  );
};

export default UnifiedAdBanner;

