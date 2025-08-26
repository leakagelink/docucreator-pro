
import React from 'react';

interface AdBannerProps {
  adSlot: string;
  adFormat?: 'auto' | 'rectangle' | 'vertical' | 'horizontal';
  className?: string;
  style?: React.CSSProperties;
}

// This component is now disabled - only AdMob will be used
const AdBanner = ({ adSlot, adFormat = 'auto', className = '', style = {} }: AdBannerProps) => {
  // AdSense removed - returning null for web
  return null;
};

export default AdBanner;
