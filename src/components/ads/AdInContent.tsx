
import React from 'react';

interface AdInContentProps {
  adSlot: string;
  className?: string;
}

// This component is now disabled - only AdMob will be used
const AdInContent = ({ adSlot, className = '' }: AdInContentProps) => {
  // AdSense removed - returning null for web
  return null;
};

export default AdInContent;
