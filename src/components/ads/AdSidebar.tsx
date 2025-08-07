
import React from 'react';
import AdBanner from './AdBanner';

interface AdSidebarProps {
  adSlot: string;
  className?: string;
}

const AdSidebar = ({ adSlot, className = '' }: AdSidebarProps) => {
  return (
    <div className={`hidden lg:block ${className}`}>
      <div className="sticky top-20">
        <div className="text-xs text-gray-500 mb-2 text-center">Advertisement</div>
        <AdBanner
          adSlot={adSlot}
          adFormat="vertical"
          className="max-w-[300px]"
          style={{ width: '300px', height: '600px' }}
        />
      </div>
    </div>
  );
};

export default AdSidebar;
