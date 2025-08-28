
import React, { useEffect } from 'react';
import { usePlatform } from '@/hooks/use-platform';
import { FacebookAdsService } from '@/services/facebook-ads';

interface UnifiedAdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

const UnifiedAdBanner = ({ 
  adSlot, 
  adFormat = 'auto', 
  className = '', 
  style = {}
}: UnifiedAdBannerProps) => {
  const { isNative } = usePlatform();

  useEffect(() => {
    if (isNative) {
      // Initialize Facebook Audience Network and show banner for native platforms
      FacebookAdsService.initialize().then(() => {
        FacebookAdsService.showBanner();
      });

      // Cleanup function to hide banner when component unmounts
      return () => {
        FacebookAdsService.hideBanner();
      };
    }
  }, [isNative]);

  // Only show ads on native platforms (Android/iOS)
  if (isNative) {
    return (
      <div className={`facebook-banner-placeholder ${className}`} style={style}>
        {/* Facebook Audience Network banner is displayed natively */}
      </div>
    );
  }

  // No ads on web - return null
  return null;
};

export default UnifiedAdBanner;
