
import React from 'react';

interface AdSidebarProps {
  adSlot: string;
  className?: string;
}

// This component is now disabled - only AdMob will be used
const AdSidebar = ({ adSlot, className = '' }: AdSidebarProps) => {
  // AdSense removed - returning null for web
  return null;
};

export default AdSidebar;
